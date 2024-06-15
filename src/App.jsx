import './App.css'
import Home from './components/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/common/Header'
import FrameComponent1 from './components/frameComponent/FrameComponent1'
import Login from './components/View/Login'

function App() {

  return (
    <>
    <Router>
    <Header />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path='/login' element={<Login/>}/>
    </Routes>
    </Router>
   </>
  )
}

export default App
