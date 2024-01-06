import React from 'react'
import Header from "./Components/Header"
import About from './Components/About';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import Cards2 from './Components/Cards2';
import Cards from './Components/Cards';
import Menu from './Components/Menu';
import Workshop from './Components/Workshop';
import CardPack from './Components/CardPack'

function App() {
  return (

    <div className="App">

      {/* <div id='header'>
        <Header />
      </div> */}

      <div className="home">

      </div>

      <div id='cards'>
        <CardPack />
      </div>

      {/* <div id='menu'>
        <Menu />
      </div> */}

      {/* <div id='contact'>
        <Contact />
      </div> */}

      {/* <div id='workshop'>
        <Workshop />
      </div> */}

      <div id="about">
        <About />
      </div>

      <div id="footer">
        <Footer />
      </div>

    </div>
    
  );
}

export default App;
