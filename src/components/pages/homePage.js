import React from 'react';
import { Helmet } from 'react-helmet';

function homePage() {
  return (
    <>
      <nav>
        <Helmet>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
        </Helmet>
        <span className="material-symbols-outlined">
          menu
        </span>

      </nav>
    </>
  );
}

export default homePage;
