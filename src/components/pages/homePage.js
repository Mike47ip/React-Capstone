import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import '../../styles/homePage.css';
import { NavLink } from 'react-router-dom';
import MinionsList from '../MinionsList';

function HomePage() {
  const [selectedMinion, setSelectedMinion] = useState(null);

  const handleMinionClick = (minion) => {
    setSelectedMinion(minion);
  };

  return (
    <>
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
      <MinionsList onMinionClick={handleMinionClick} />
      {/* Display selected minion details */}
      {selectedMinion && (
      <div className="selected-minion-details">
        <article>
          <h1>{selectedMinion.name}</h1>
          <img src={selectedMinion.image} alt={selectedMinion.name} />
          <span>
            <strong>Description:</strong>
            {' '}
            {selectedMinion.description}
          </span>
          <span>
            <strong>Tooltip:</strong>
            {' '}
            {selectedMinion.tooltip}
          </span>
          <span>
            <strong>Tradeable:</strong>
            {' '}
            {selectedMinion.tradeable ? 'Yes' : 'No'}
          </span>

          {/* Add more details here as needed */}
          <button type="button" onClick={() => setSelectedMinion(null)}>
            Go Back
          </button>

        </article>

      </div>
      )}

    </>
  );
}

export default HomePage;
