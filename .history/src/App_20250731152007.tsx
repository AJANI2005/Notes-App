import './App.css'


const Note = () => {
  return (
    <div className='note'>
      <div className="inputBox">
        <textarea placeholder="Write here..."  required />
        <span>Note</span>
      </div>
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
