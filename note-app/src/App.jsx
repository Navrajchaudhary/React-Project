import React, { useEffect, useState} from "react";
import Form from "./components/Form";
import Notes from "./components/Notes";

const App = () => {
  const [tittle, setTittle] = useState("");
  const [details, setDetails] = useState("");

  const [notes, setNotes] = useState(()=>{
    return JSON.parse(localStorage.getItem('Notes')) || []
  });

  useEffect(()=> {
    localStorage.setItem('Notes', JSON.stringify(notes))
  }, [notes])

  return (
    <div className="flex gap-5 h-screen bg-black text-white max-sm:flex-wrap max-sm:gap-0">
      <Form tittle={tittle} setTittle={setTittle} details={details} setDetails={setDetails} notes={notes} setNotes={setNotes}/>
      <Notes notes={notes}/>
    </div>
  );
};

export default App;
