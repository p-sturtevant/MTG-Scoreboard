import React from "react";

const Form = () => {
  return (
    <div className="flex flex-col mb-10 mt-20 mx-auto">
      <div className="flex justify-center items-center">
        <div className="flex flex-col gap-5 w-7/12 form-control">
          <h2 className="text-3xl">Add Game</h2>
          <input
            type="text"
            name="victor"
            placeholder="Who won?"
            className="input input-bordered max-w-xs"
          />
          <input
            type="text"
            name="victor"
            placeholder="What Commander?"
            className="input input-bordered max-w-xs"
          />
          <select className="select select-bordered w-full max-w-sm">
            <option disabled selected>
              What Colors?
            </option>
            <option>Red</option>
            <option>Green</option>
            <option>Blue</option>
            <option>Black</option>
            <option>Azorius</option>
            <option>Golgari</option>
            <option>Boros</option>
            <option>Simic</option>
            <option>Izzet</option>
            <option>Dimir</option>
            <option>Selesnya</option>
            <option>Gruul</option>
            <option>Orzhov</option>
            <option>Rakdos</option>
          </select>
          <textarea
            name="message"
            placeholder="What was the win conditon?"
            rows="3"
            className="textarea textarea-bordered mb-5 max-w-md"
          />
          <textarea
            name="message"
            placeholder="What did you learn?"
            rows="5"
            className="textarea textarea-bordered mb-5 max-w-md"
          />
          <button
            type="submit"
            className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-emerald-800 to-emerald-400 drop-shadow-md hover:stroke-white"
          >
            Add game
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
