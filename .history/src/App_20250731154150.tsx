import { useEffect, useState } from 'react';
import './App.css'


const Note = () => {
  const [text, setText] = useState('');
  const [title, setTitle] = useState('');


  //Initialize Local Storage
  useEffect(()=>{
    if (!localStorage.getItem("notes")){
      localStorage.setItem("notes",JSON.stringify([]))
    }
  },[])

  return (
    <form className='note'>
      <input
        value={title}
        placeholder='Title'
        onChange={(e) => setTitle(e.target.value)}
        type="text" className='note-name-input' />
      <textarea
        value={text}
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
