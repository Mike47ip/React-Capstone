import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import '../../styles/homePage.css';
import { NavLink } from 'react-router-dom';
import MinionsList from '../MinionsList';

function HomePage() {
  const [selectedMinion, setSelectedMinion] = useState(null);
  const [searchQuery] = useState('');

  const handleMinionClick = (minion) => {
    setSelectedMinion(minion);
  };

  const handleGoBack = () => {
    setSelectedMinion(null);
  };

  return (
    <>
      <section>
        <nav>
          <Helmet>
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
            />
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
            />
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
            />
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
            />
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
            />
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
            <span className="material-symbols-outlined">
              keyboard_voice
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
      <MinionsList onMinionClick={handleMinionClick} searchQuery={searchQuery} />
      {selectedMinion && (
        <SelectedMinionDetails
          selectedMinion={selectedMinion}
          handleGoBack={handleGoBack}
        />
      )}
    </>
  );
}

export default HomePage;
