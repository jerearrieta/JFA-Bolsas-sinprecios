import React from "react";

const Cards = ({ image, description, onClick }) => {
  return (
    <div className="flex pt-10">
      <div className="w-1/2">
        <img className="rounded" src={image} alt="image"></img>
      </div>
      <div className="w-1/2 flex flex-col items-center justify-center gap-5">
        <h2 className="font-bold text-4xl">{description}</h2>
        <p className="bg-blue-800 text-white font-bold p-2 rounded cursor-pointer" onClick={onClick}>Ver medidas</p>
      </div>
    </div>
  );
};

export default Cards;
