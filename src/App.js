import React,  { useState } from 'react'
import About from './components/About'
import Frontpage from './components/Frontpage'
import Stories from './components/Stories'
import './App.css'

function App() {
  const [page, setPage] = useState('Frontpage')
  return (
   <div className="container">
     <div>
        <button onClick={() => setPage('Frontpage')}>Frontpage</button>
        <button onClick={() => setPage('Stories')}>Stories</button>
        <button onClick={() => setPage('About')}>About</button>
      </div>
     <h1>
     Antti on näätä
     </h1>
    <Frontpage 
      show={page === 'Frontpage'}
      />
    <About 
      show={page === 'About'}
      />
    <Stories 
      show={page === 'Stories'}
    />
   </div>
  );
}

export default App;
