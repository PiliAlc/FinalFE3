import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './Routes/Home'
import Favs from './Routes/Favs'
import Detail from './Routes/Detail'
import Contact from './Routes/Contact'
import './App.css'

function App() {
  return (
    <>
      <div className='App'>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='favs' element={<Favs />} />
            <Route path='contacto' element={<Contact />} />
            <Route path='/detail/:id' element={<Detail />} />
          </Routes>
          <Footer />
      </div>
    </>
  )
}

export default App