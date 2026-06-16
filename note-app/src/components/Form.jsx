import React from 'react'

const Form = ({tittle, details, setTittle, setDetails, notes, setNotes}) => {

    const handelSubmit = (e) => {
    e.preventDefault();

    const copyNotes = [...notes];
    copyNotes.push({ tittle, details });
    if (tittle === "" && details === "") {
      alert("Please field out the task");
      return;
    }
    setNotes(copyNotes);

    setTittle("");
    setDetails("");
  };

  return (
    <div className="w-1/2 flex flex-col justify-start items-center py-10 max-sm:justify-center max-sm:items-center max-sm:w-full max-sm:px-5 max-sm:h-[90%] max-sm:py-0">
        <form
          onSubmit={(e) => {
            handelSubmit(e);
          }}
          className="flex flex-col gap-5 bg-gray-800 px-5 py-8 w-150 rounded max-sm:w-100 max-sm:max-w-full "
        >
          <h1 className="text-2xl text-center font-bold">Notes App</h1>
          <input
            className="border-2 border-gray-400 rounded px-4 py-2 outine-none text-xl"
            type="text"
            placeholder="Enter Task Tittle.."
            value={tittle}
            onChange={(e) => {
              setTittle(e.target.value);
            }}
          />
          <textarea
            className="border-2 border-gray-400 rounded px-4 py-2 outine-none text-xl"
            type="text"
            placeholder="Enter Task Details.."
            rows={5}
            value={details}
            onChange={(e) => {
              setDetails(e.target.value);
            }}
          />
          <button
            type="submit"
            className="border-2 border-blue-600 rounded px-4 py-2 outine-none text-xl cursor-pointer bg-blue-600 text-white active:scale-95 font-semibold"
          >
            Add Task
          </button>
        </form>
      </div>
  )
}

export default Form
