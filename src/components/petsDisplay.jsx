import React, { useState } from "react";

const petsDisplay = ({pets}) => {
  const [showPets, setShowPets] = useState(false)

  const togglePetsVisibility = () => {
    setShowPets(!showPets)
  }

  return (
    <div className="pets-container ">
      <button onClick={togglePetsVisibility}
      className=" bg-sky-500 hover:bg-sky-700 fixed top-4 left-3 text-white rounded-full">
      {showPets ? 'Hide Pets' : 'Show Pets'}
      </button>
      {showPets && (
        <div className="dropdown p-4 mt-4 bg-white border rounded shadow-md fixed top-8 left-10">
          <h3 className="text-lg font-semibold mb-2">List of Pets</h3>
          <div className="pets-list">
            {pets.map((pet) => (
              <div key={pet.name} className="pet-item mb-2">
                <p className="font-bold">Name: {pet.name}</p>
                <p className="text-gray-600">Type: {pet.type}</p>
                <p>Gender: {pet.gender}</p>
                <p>Age: {pet.age}</p>
                <p>Happiness: {pet.happiness}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}



export default petsDisplay;
