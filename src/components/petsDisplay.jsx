import React, { useState } from "react";

const petsDisplay = ({pets}) => {
  const [showPets, setShowPets] = useState(false)

  const togglePetsVisibility = () => {
    setShowPets(!showPets)
  }

  return (
    <div className="pets-container ">
      <button
        onClick={togglePetsVisibility}
        className="bg-sky-500 hover:bg-sky-700 fixed top-0 left-1 text-white rounded-full p-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={showPets ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
          />
        </svg>
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
