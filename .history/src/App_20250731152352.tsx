import './App.css'


const Note = () => {
  return (
    <div className='note'>
      <form>
        <input type="text" className='note-name-input' />
        <textarea className='note-input' placeholder='Type to add a note...'></textarea>
        <button className='addBtn'>Add</button>

      </form>
    </div>
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
