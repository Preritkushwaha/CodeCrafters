import React, { useState } from 'react';

function Card({ imageSrc, title, subtitle, ondip }) {
  const [isActive, setIsActive] = useState(false);

  const activateCard = () => {
    setIsActive(!isActive);
    ondip();
  };

  return (
    <div
      className={`max-w-sm rounded-xl overflow-hidden h-80 w-56 shadow-lg cursor-pointer ${!isActive ? 'bg-white duration-150 ease-in-out' : 'bg-green-100 border-2 border-solid border-green-800 ease-in-out scale-90 duration-200'}`}
      onClick={activateCard}
    >
      <img className="w-full" src={imageSrc} alt="Card Image" />
      <div className="px-6 py-2">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{subtitle}</p>
      </div>
    </div>
  );
}

export default Card;
