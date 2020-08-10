import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// Pages
import Homepage from './pages/Homepage/homepage';
import Registration from './pages/Registration/registration';
import Login from './pages/Login/login';
import Recovery from './pages/Recovery/recovery';
import Dashboard from './pages/Dashboard/dashboard';

import MainLayout from './layouts/MainLayout';

import WithAuth from './hoc/withAuth';

import { auth, handleUserProfile } from './firebase/utils';
import { setCurrentUser } from './redux/User/user.actions';
import { useSelector, useDispatch } from 'react-redux';

const App = props => {
  const dispatch = useDispatch();

  useEffect(() => {
    const authListener = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await handleUserProfile(userAuth);
        userRef.onSnapshot(snapshot => {
          dispatch(setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          }));
        });
      }

      dispatch(setCurrentUser(userAuth));
    });

    //unmount
    return () => {
      authListener();
    } 

  }, []);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => (
          <MainLayout >
            <Homepage />
          </MainLayout>
        )}
        />
        <Route path="/registration" 
          render={() =>  (
          <MainLayout >
            <Registration />
          </MainLayout>
        )} />
        <Route path="/login"
          render={() => (
            <MainLayout >
              <Login />
            </MainLayout>
          )} />
          <Route path="/recovery"
            render={() => (
              <MainLayout>
                <Recovery />
              </MainLayout>
            )} />
            <Route path="/dashboard"
            render={() => (
              <WithAuth>
                <MainLayout>
                  <Dashboard />
                </MainLayout>
              </WithAuth>
            )} />
      </Switch>
    </div>
  );
  
}

export default App;
