import React from 'react';
import { Helmet } from 'react-helmet';
import '../../styles/homePage.css';
import { NavLink } from 'react-router-dom';
import MinionsList from '../MinionsList';

function HomePage() {
  return (
    <>
      {/* <NavLink to="/" /> */}
      <section>

        <nav>
          <Helmet>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
          </Helmet>
          <NavLink to="/">
            <span className="material-symbols-outlined">
              home
            </span>
          </NavLink>
          <span>
            stream
          </span>
          <div>
            <span className="material-symbols-outlined search">
              search
            </span>
            <span className="material-symbols-outlined">
              settings
            </span>

          </div>

        </nav>
        <div className="homeBackground">
          hello
        </div>
      </section>
      <MinionsList />
    </>
  );
}

export default HomePage;
