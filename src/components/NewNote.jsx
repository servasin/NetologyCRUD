import { useState } from "react"

function NewNote({addNote}) {

  const [content, setContent] = useState('')
  const [error, setError] = useState('')
  
  const onHandleSubmit = (e) => {
    e.preventDefault();
    if (content.trim() === '') {
      setError('Введите текст')
      return;
    }
    addNote({content});
    setContent('');
    setError('');
  }

    return (
      <form name="newNote" onSubmit={onHandleSubmit}>
        <h3>New Note</h3>
        {error ? <span className="error">{error}</span> : ''}
        <textarea onChange={e => setContent(e.target.value)} value={content}></textarea>
        <button>➤</button>
      </form>
    )
  }
  
  export default NewNote