import React from 'react';

function DogInfo({ dog, setDogClicked }) {
  function handleClick() {
    const dogStats = {
      id: dog.id,
      name: dog.name,
      isGoodDog: !dog.isGoodDog,
      image: dog.image,
    };

    fetch(`http://localhost:3001/pups/${dog.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dogStats),
    })
      .then((res) => res.json())
      .then((data) => setDogClicked(data));
  }

  return (
    <div id="dog-info">
      <img src={dog.image} alt={dog.name} />
      <h2>{dog.name}</h2>
      <button onClick={handleClick}>
        {dog.isGoodDog ? 'Good Dog!' : 'Bad Dog!'}
      </button>
    </div>
  );
}
export default DogInfo;
