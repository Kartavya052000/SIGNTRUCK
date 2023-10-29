import React from 'react';
import './RotatingBillboard.css'; // Create a CSS file for your styles

const RotatingBillboard = () => {
  return (
    <div className="wrapper">
      <div id="billboard-outer">
        <ol id="billboard">
          {/* Mapping the list items */}
          {Array.from({ length: 22 }).map((_, index) => (
            <li key={index}>
              <div></div>
              <div></div>
              <div></div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RotatingBillboard;
