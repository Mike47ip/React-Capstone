/* eslint-disable indent */
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import '../styles/detailsPage.css';

function MinionDetailsPage() {
  const { minionId } = useParams();
  const selectedMinion = useSelector((state) =>
   state.minions.minions.find((minion) => minion.id === parseInt(minionId))
  );

  if (!selectedMinion) {
    return <div>Minion not found</div>;
  }

  return (
    <div className="minion-details-container">
      <Helmet>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </Helmet>
      <article className="minion-details">
        {/* Use the Material Icons for the arrow back */}
        <Link to="/" className="material-symbols-outlined go-back-icon">
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </Link>
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
      </article>
    </div>
  );
}

export default MinionDetailsPage;
