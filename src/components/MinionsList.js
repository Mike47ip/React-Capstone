import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMinions } from '../features/minionsSlice';

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
        console.error('There was a problem fetching data:', error);
      });
  }, [dispatch]);

  return (
    <div>
      <h1>Wind-up Minions</h1>
      <ul>
        {minions.map((minion) => (
          <li key={minion.id}>
            <img src={minion.icon} alt={minion.name} />
            {minion.name.replace('Wind-up', '')}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MinionsList;
