import './App.css'
import Weather from './Components/Weather'
import InputLoc from './Components/InputLoc'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>            
            <Route index element={<InputLoc />} />
            <Route path="/weather/:Location" element={<Weather/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
