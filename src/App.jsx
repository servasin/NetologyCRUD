import './App.css';
import Notes from './components/Notes';
import NewNote from './components/NewNote';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [notes, setNote] = useState([
    {
      id: uuidv4(),
      content: "То, что было введено в поле ввода"
    },
    {
      id: uuidv4(),
      content: "То, что было введено в поле ввода"
    },
  ])

  function addNote(note) {
    note.id = uuidv4();
    setNote([...notes, note])
  }

  function removeNote(id) {
    setNote(notes.filter((note) => note.id !== id))
  }

  return (
    <>
      <Notes notes={notes} removeNote={removeNote}/>
      <NewNote addNote={addNote}/>
    </>
  )
}

export default App