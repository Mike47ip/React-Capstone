// // SelectedMinionDetails.js

// import React from 'react';

// function SelectedMinionDetails({ selectedMinion, handleGoBack }) {
//   return (
//     <div className="selected-minion-details">
//       <article>
//         <span
//           className="material-symbols-outlined go-back-icon"
//           onClick={handleGoBack}
//           role="button"
//           tabIndex={0}
//         >
//           arrow_back
//         </span>
//         <h1>{selectedMinion.name}</h1>
//         <img src={selectedMinion.image} alt={selectedMinion.name} />
//         <span>
//           <strong>Description:</strong>
//           {' '}
//           {selectedMinion.description}
//         </span>
//         <span>
//           <strong>Tooltip:</strong>
//           {' '}
//           {selectedMinion.tooltip}
//         </span>
//         <span>
//           <strong>Tradeable:</strong>
//           {' '}
//           {selectedMinion.tradeable ? 'Yes' : 'No'}
//         </span>
//       </article>
//     </div>
//   );
// }

// export default SelectedMinionDetails;
