function Notes({notes, removeNote}) {

    return (
      <div>
        <h1>Notes&#160;&#160;
            <button>🗘</button>
        </h1>
        <div className="notes">
            {notes.map((note) => 
            <p key={note.id}>
              {note.content}
              <button onClick={() => removeNote(note.id)} >✘</button>
            </p>
            )} 
        </div>
      </div>
    )
  }
  
  export default Notes