import { useEffect, useState } from 'react';

// styles
import "./style/note.css"
import DialogBox from './DialogBox';


interface Note {
  id: number
  title: string;
  text: string;
}

const Note = () => {
  const [text, setText] = useState('');
  const [title, setTitle] = useState('');


  //Initialize Local Storage
  useEffect(() => {
    if (!localStorage.getItem("notes")) {
      localStorage.setItem("notes", JSON.stringify([]))
    }
    if (localStorage.getItem("title")) {
      setTitle(JSON.parse(localStorage.getItem("title")!))
    }
    if (localStorage.getItem("text")) {
      setText(JSON.parse(localStorage.getItem("text")!))
    }
  }, [])

  // Store Current Data (On Refresh)
  useEffect(() => {
    if (text === '' && title === '') return
    localStorage.setItem("title", JSON.stringify(title))
    localStorage.setItem("text", JSON.stringify(text))
  }, [text, title])

  const createNote = () => {
    const note = {
      id: Date.now(),
      title: title,
      text: text
    } as Note

    // add note
    const notes = JSON.parse(localStorage.getItem("notes")!)
    notes.push(note)
    localStorage.setItem("notes", JSON.stringify(notes))

    // reset state
    setTitle("")
    setText("")
    localStorage.setItem("title", JSON.stringify(""))
    localStorage.setItem("text", JSON.stringify(""))
  }

  return (
    <form className='note'>
      <input
        value={title}
        placeholder='Title'
        onChange={(e) => setTitle(e.target.value)}
        type="text" className='note-title-input' />
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        className='note-input'
        placeholder='Type to add a note...'></textarea>
      <button className='addBtn' onClick={createNote}>Add</button>



    </form>
  )
}

function App() {

  const [notes, setNotes] = useState([]);



  const [editing, setEditing] = useState(false);
  const [currentNote, setCurrentNote] = useState<Note | undefined>(undefined);


  //Initialize Local Storage
  useEffect(() => {
    if (localStorage.getItem("notes")) {
      setNotes(JSON.parse(localStorage.getItem("notes")!))
    }
  }, [])

  //Save current note
  const saveNote = () => {
    const notes = JSON.parse(localStorage.getItem("notes")!)
    const index = notes.findIndex((note: Note) => note.id === currentNote?.id)
    notes[index] = currentNote
    localStorage.setItem("notes", JSON.stringify(notes))
    setEditing(false)
    // refresh
    window.location.reload()
  }
  //Delete note
  const deleteNote = () => {
    const notes = JSON.parse(localStorage.getItem("notes")!)
    const index = notes.findIndex((note: Note) => note.id === currentNote?.id)
    notes.splice(index, 1)
    localStorage.setItem("notes", JSON.stringify(notes))
    setEditing(false)
    // refresh
    window.location.reload()
  }

  return (
    <>
      <Note />
      {/* Display Notes */}
      <div className='notes-grid'>
        {notes.map((note: Note, index) => (
          <div key={index} className='note'>
            <h2 className='note-title'>{note.title}</h2>
            <p className='note-text'>{note.text}</p>
            <button className='deleteBtn'
              onClick={deleteNote}>✖</button>
            <button className='editBtn' onClick={() => {
              setEditing(true);
              setCurrentNote(note);
            }}
            >📝</button>
          </div>))}
      </div>

      {/* Edit Dialog Box */}
      <DialogBox isOpen={editing} onClose={() => setEditing(false)}>
        <form className='note'>
          <div className='note-content'>
          <input
            value={currentNote?.title}
            placeholder='Title'
            onChange={(e) => setCurrentNote({ ...currentNote, title: e.target.value } as Note)}
            type="text" className='note-title-input' />

          <textarea
            value={currentNote?.text}
            onChange={(e) => setCurrentNote({ ...currentNote, text: e.target.value } as Note)}
            className='note-input'
            placeholder='Type to add a note...'></textarea>

          <button className='addBtn' onClick={() => {
            saveNote()
            setEditing(false)
          }}>Save</button>
          </div>
        </form>
      </DialogBox>
    </>
  )
}

export default App
