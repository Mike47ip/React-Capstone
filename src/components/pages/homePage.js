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
            {/* Your font links */}
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
          <h1>{selectedMinion.name}</h1>
          <img src={selectedMinion.image} alt={selectedMinion.name} />
          <p>
            Description:
            {' '}
            {selectedMinion.description}
          </p>
          {/* Add more details here as needed */}
          <button type="button" onClick={() => setSelectedMinion(null)}>Go Back</button>
        </div>
      )}
    </>
  );
}

export default HomePage;
