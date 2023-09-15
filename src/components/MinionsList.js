import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { setMinions } from '../redux/features/minionsSlice';
import '../styles/minionsList.css';

function MinionsList() {
  const dispatch = useDispatch();
  const minions = useSelector((state) => state.minions.minions);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch('https://ffxivcollect.com/api/minions?name_en_start=wind-up')
      .then((response) => response.json())
      .then((data) => {
        dispatch(setMinions(data.results));
      })
      .catch((error) => {
        alert.error('There was a problem fetching data:', error);
      });
  }, [dispatch]);

  // Function to handle changes in the search input
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Function to filter minions based on the search query
  const filteredMinions = minions.filter((minion) => minion.name.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <>
      <h1>Wind-up Minions</h1>
      {/* Add the search input field */}
      {/* Styled search input */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search minions by name"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <span className="material-symbols-outlined search-icon">search</span>
      </div>
      <ul className="minionis">
        {filteredMinions.map((minion) => (
          <li key={minion.id}>
            <NavLink to={`/minion/${minion.id}`} className="minionProfile">
              <img src={minion.image} alt={minion.name} />
              {minion.name.replace('Wind-up', '')}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
}

MinionsList.propTypes = {
  onMinionClick: PropTypes.func.isRequired,
};

export default MinionsList;
