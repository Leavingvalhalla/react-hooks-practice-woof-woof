import React from 'react';

function Filter({ onFilterClick, filterOn }) {
  return (
    <div id="filter-div">
      <button onClick={onFilterClick} id="good-dog-filter">
        Filter good dogs: {filterOn ? 'OFF' : 'ON'}
      </button>
    </div>
  );
}

export default Filter;
