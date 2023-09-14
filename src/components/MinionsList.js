import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { setMinions } from '../redux/features/minionsSlice';
import '../styles/minionsList.css';

function MinionsList({ onMinionClick }) {
  const dispatch = useDispatch();
  const minions = useSelector((state) => state.minions.minions);

  useEffect(() => {
    // Fetch data from the API and dispatch it using the setMinions action
    fetch('https://ffxivcollect.com/api/minions?name_en_start=wind-up')
      .then((response) => response.json())
      .then((data) => {
        dispatch(setMinions(data.results));
      })
      .catch((error) => {
        alert.error('There was a problem fetching data:', error);
      });
  }, [dispatch]);

  const handleMinionKeyPress = (minion) => (event) => {
    if (event.key === 'Enter') {
      onMinionClick(minion);
    }
  };

  return (
    <>
      <h1>Wind-up Minions</h1>

      <ul className="minionis">
        {minions.map((minion) => (
          <li key={minion.id}>
            <div
              className="minionProfile"
              onClick={() => {
                onMinionClick(minion);
              }}
              onKeyDown={handleMinionKeyPress(minion)}
              role="button"
              tabIndex="0"
            >
              <img src={minion.image} alt={minion.name} />
              {minion.name.replace('Wind-up', '')}
            </div>
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
