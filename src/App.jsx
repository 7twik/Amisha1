
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Land from './Land';
import Home from './Home';
import Link from './Link';
function App() {


  return (
    <>
        <Routes>
              <Route path="/" element={<Land />} />
              <Route path="/home" element={<Home />} />
              <Route path="/link" element={<Link />} />
        </Routes>
    </>
  )
}

export default App
