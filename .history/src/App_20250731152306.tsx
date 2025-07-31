import './App.css'


const Note = () => {
  return (
    <div className='note'>
      <input type="text" className='inputBox' />
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
