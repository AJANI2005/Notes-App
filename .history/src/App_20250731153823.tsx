import { useState } from 'react';
import './App.css'


const Note = () => {
  const [text, setText] = useState('');
  const [title, setTitle] = useState('');

  return (
    <form className='note'>
        <input 
           value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text" className='note-name-input' />
        <textarea 
          onChange={(e) => setText(e.target.value)}
          className='note-input' 
          placeholder='Type to add a note...'></textarea>
        <button className='addBtn'>Add</button>
    </form>
  )
}

function App() {

  return (
    <>
      <Note /> 
    </>
  )
}

export default App
