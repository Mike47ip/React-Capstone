// MinionList.js

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { setMinions } from '../redux/features/minionsSlice';

import '../styles/minionsList.css';

function MinionsList() {
  const dispatch = useDispatch();
  const minions = useSelector((state) => state.minions.minions);

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

  return (
    <>
      <h1>Wind-up Minions</h1>
      <ul className="minionis">
        {minions.map((minion) => (
          <li key={minion.id}>
            <NavLink
              to={`/minion/${minion.id}`}
              className="minionProfile"
            >
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
