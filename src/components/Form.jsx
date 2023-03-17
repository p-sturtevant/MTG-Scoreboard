import React, { useRef, useMemo } from "react";

const Form = () => {
  const victor = useRef();
  const commander = useRef();
  const colors = useRef();
  const winCon = useRef();
  const lessons = useRef();

  const formHandler = (event) => {
    event.preventDefault();

    const formData = {
      victor: victor.current?.value,
      commander: commander.current?.value,
      colors: colors.current?.value,
      winCon: winCon.current?.value,
      lessons: lessons.current?.value,
    };

    console.log(formData);
  };

  return (
    <div className="flex flex-col mb-10 mt-20 mx-auto">
      <div className="flex justify-center items-center">
        <form className="flex flex-col gap-5 w-7/12" onSubmit={formHandler}>
          <h2 className="text-3xl">Add Game</h2>
          <input
            ref={victor}
            type="text"
            name="victor"
            placeholder="Who won?"
            className="input input-bordered max-w-xs"
            required
          />
          <input
            ref={commander}
            type="text"
            name="commander"
            placeholder="What Commander?"
            className="input input-bordered max-w-xs"
            required
          />
          <select
            ref={colors}
            name="colors"
            className="select select-bordered w-full max-w-sm"
            required
          >
            <option disabled defaultValue={"selected"}>
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
            ref={winCon}
            name="winCon"
            placeholder="What was the win conditon?"
            rows="3"
            className="textarea textarea-bordered max-w-md"
            required
          />
          <textarea
            ref={lessons}
            name="lessons"
            placeholder="What did you learn?"
            rows="5"
            className="textarea textarea-bordered mb-5 max-w-md"
            required
          />
          <button
            type="submit"
            className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-emerald-800 to-emerald-400 drop-shadow-md hover:stroke-white"
          >
            Add game
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
