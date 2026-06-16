import React from 'react'

const Notes = ({notes}) => {
  return (
    <div className="w-1/2 h-screen bg-black border-l-2 border-gray-600 px-5 py-7 max-sm:w-full max-sm:min-h-screen max-sm:border-l-0 max-sm:py-0">
        <h1 className="text-2xl font-bold">Recents Notes</h1>
        <div className="mt-3 flex gap-4 flex-wrap justify-start items-start overflow-auto max-sm:h-[90%]">
          {notes.map((elem, idx) => {
            return (
              <div key={idx} className="w-40 h-50 bg-white text-black rounded">
                <h3 className="text-xl font-semibold text-center py-2 uppercase leading-tight tracking-tight ">
                  {elem.tittle}
                </h3>
                <p className="px-3 text-sm text-gray-700 leading-tight text-justify mt-2">
                  {elem.details}
                </p>
              </div>
            );
          })}
        </div>
      </div>
  )
}

export default Notes
