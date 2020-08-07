import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './pages/Homepage/homepage';
import Registration from './pages/Registration/registration';
import Login from './pages/Login/login';
import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => (
          <MainLayout>
            <Homepage />
          </MainLayout>
        )}/>
        <Route path="/registration" render={() => (
          <MainLayout>
            <Registration />
          </MainLayout>
        )}  />
        <Route path="/login" render={() => (
          <MainLayout>
            <Login />
          </MainLayout>
        )}  />
      </Switch>
    </div>
  );
}

export default App;
