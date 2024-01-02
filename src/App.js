import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Nav from './components/Nav'
import Home from './components/Home'
import Counter from './components/Counter'
export default function App() {
  return (
    <div>
      <Router>
          <Nav />
          <section className='container'>
             <Routes>
                <Route path='' element={<Home />}/>
                <Route path='counter' element={<Counter />}/>
             </Routes>
          </section>
      </Router>
    </div>
  )
}
