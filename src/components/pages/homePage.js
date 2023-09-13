import React from 'react';
import { Helmet } from 'react-helmet';
import '../../styles/homePage.css';
// import { NavLink } from 'react-router-dom';

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
          <span className="material-symbols-outlined menu">
            menu
          </span>
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
    </>
  );
}

export default HomePage;
