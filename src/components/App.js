import React, { useState, useEffect } from 'react';
import DogBar from './DogBar';
import DogInfo from './DogInfo';
import Filter from './Filter';

function App() {
  const [dogs, setDogs] = useState('');
  const [dogClicked, setDogClicked] = useState('');
  const [filterOn, setFilterOn] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3001/pups')
      .then((res) => res.json())
      .then((data) => setDogs(data));
  }, []);

  let dogsToRender;
  if (filterOn) dogsToRender = dogs.filter((dog) => dog.isGoodDog);
  else dogsToRender = dogs;

  function onFilterClick() {
    setFilterOn((filterOn) => !filterOn);
  }

  return (
    <div className="App">
      <Filter onFilterClick={onFilterClick} filterOn={filterOn} />
      <DogBar
        filterOn={filterOn}
        dogs={dogsToRender}
        setDogClicked={setDogClicked}
      />
      <div id="dog-summary-container">
        <h1>DOGGO:</h1>
        <DogInfo dog={dogClicked} setDogClicked={setDogClicked} />
      </div>
    </div>
  );
}

export default App;
