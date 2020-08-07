import React from 'react';
import Directory from '../../components/Directory/directory';
import './homepage.scss';
import '../../sass/main.scss';

const Homepage = props => {
  return (
    <section className="homepage">
      <Directory />
    </section>
  )
}

export default Homepage;