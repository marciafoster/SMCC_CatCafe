import React from "react";
import CatsList from "./CatsList.jsx";

function Adopt({ showCatsList, toggleCatsList }) {
  return (
    <div>
      <h1>Adopt a Cat</h1>
      <button onClick={toggleCatsList}>Show Cats List</button>
      {showCatsList && <CatsList />}
    </div>
  );
}

export default Adopt;
