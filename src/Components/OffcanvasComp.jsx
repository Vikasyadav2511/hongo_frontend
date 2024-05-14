// import React, { useState } from "react";
// import "../App.css";

// export const OffcanvasComp = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleOffCanvas = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="offcanvas-container">
//       <button onClick={toggleOffCanvas}>Search</button>

//       {/* Off-canvas content */}
//       <div className={`offcanvas ${isOpen ? "open" : ""}`}>
//         <div className="offcanvas-content">
//           <button onClick={toggleOffCanvas} className="close-btn">
//             Close
//           </button>
//           <h2>Search Bar</h2>
//           {/* Your search bar JSX goes here */}
//           <input type="text" placeholder="Search..." />
//           {/* Other search-related components */}
//         </div>
//       </div>
//     </div>
//   );
// };
