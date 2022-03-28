import React from 'react';

function DogBar({ dogs, filterOn, setDogClicked }) {
  return (
    <div id="dog-bar">
      {dogs
        ? dogs.map((dog) => (
            <span onClick={() => setDogClicked(dog)} key={dog.id}>
              {dog.name}
            </span>
          ))
        : null}
    </div>
  );
}

export default DogBar;
