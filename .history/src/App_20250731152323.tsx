import './App.css'


const Note = () => {
  return (
    <div className='note'>
      <input type="text" className='note-name-input' />
      <button className='addBtn'>Add</button>
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
