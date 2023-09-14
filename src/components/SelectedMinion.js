import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedMinion } from '../redux/features/selectedMinionSlice';

function SelectedMinion() {
  const { id } = useParams(); // Extract the minion ID from the route parameters
  const dispatch = useDispatch();
  const selectedMinion = useSelector((state) => state.selectedMinion.selectedMinion);

  useEffect(() => {
    // Fetch data for the selected minion using the ID
    fetch(`https://ffxivcollect.com/api/minions/${id}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch(setSelectedMinion(data));
      })
      .catch((error) => {
        console.error('Error fetching selected minion data:', error);
      });
  }, [dispatch, id]);

  return (
    <div>
      <h1>Selected Minion Details</h1>
      {selectedMinion && (
        <div className="minion-details">
          <h2>{selectedMinion.name}</h2>
          <img src={selectedMinion.image} alt={selectedMinion.name} />
          <p>
            Description:
            {' '}
            {selectedMinion.description}
          </p>
          {/* You can add more details here as needed */}
        </div>
      )}
    </div>
  );
}

export default SelectedMinion;
