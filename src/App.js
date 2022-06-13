import React, { useState } from 'react';
import './style.css';
import Gallery from './components/Gallery';
function App() {

  return (
    <div className='container'>
         <section className='gallery-container'>
        <Gallery/>
      </section>
    </div>
  );
}
 
export default App;
