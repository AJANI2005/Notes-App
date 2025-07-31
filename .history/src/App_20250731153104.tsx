import { useState } from 'react';
import './App.css'


const Note = () => {
  const [text, setText] = useState('');
  const [title, setTitle] = useState('');

  return (
    <form className='note'>
        <input type="text" className='note-name-input' />
        <textarea className='note-input' placeholder='Type to add a note...'></textarea>
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
