import React from 'react';
import './TwoContainerLayout.css';

const TwoContainerLayout = () => {
  return (
    <div className="two-container-layout">
      <div className="container left-container">
        <div className="container-content">
          {/* Add your content for the left container here */}
          <h2>Left Container</h2>
          <p>This is the left container content</p>
        </div>
      </div>
      
      <div className="container right-container">
        <div className="container-content">
          {/* Add your content for the right container here */}
          <h2>Right Container</h2>
          <p>This is the right container content</p>
        </div>
      </div>
    </div>
  );
};

export default TwoContainerLayout;