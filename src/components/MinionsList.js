import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMinions } from '../redux/features/minionsSlice';
import '../styles/minionsList.css';

function MinionsList() {
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

  return (
    <>
      <h1>Wind-up Minions</h1>

      <ul className="minionis">
        {minions.map((minion) => (
          <li className="minionProfile" key={minion.id}>
            <img src={minion.image} alt={minion.name} />
            {minion.name.replace('Wind-up', '')}
          </li>
        ))}
      </ul>

    </>
  );
}

export default MinionsList;
