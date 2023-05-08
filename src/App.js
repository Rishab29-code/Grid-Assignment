import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="grid-container">
      <div className="grid-item">
        <div className="nested-grid">
          <div className="nested-grid-item">Nested Grid Item 1</div>
          <div className="nested-grid-item">Nested Grid Item 2</div>
          <div className="nested-grid-item">Nested Grid Item 3</div>
          <div className="nested-grid-item">Nested Grid Item 4</div>
        </div>
      </div>
      <div className="grid-item"><div className="nested-grid">
          <div className="nested-grid-item">Nested Grid Item 1</div>
          <div className="nested-grid-item">Nested Grid Item 2</div>
          <div className="nested-grid-item">Nested Grid Item 3</div>
          <div className="nested-grid-item">Nested Grid Item 4</div>
        </div>
        </div>
      <div className="grid-item"><div className="nested-grid">
          <div className="nested-grid-item">Nested Grid Item 1</div>
          <div className="nested-grid-item">Nested Grid Item 2</div>
          <div className="nested-grid-item">Nested Grid Item 3</div>
          <div className="nested-grid-item">Nested Grid Item 4</div>
        </div>
        </div>
      <div className="grid-item"><div className="nested-grid">
          <div className="nested-grid-item">Nested Grid Item 1</div>
          <div className="nested-grid-item">Nested Grid Item 2</div>
          <div className="nested-grid-item">Nested Grid Item 3</div>
          <div className="nested-grid-item">Nested Grid Item 4</div>
        </div>
        </div>
    </div>
  );
};

export default App;
