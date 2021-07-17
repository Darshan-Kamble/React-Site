import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Feature from './Components/Feature';
import About from './Components/About';
import Presentation from './Components/Presentation';
import aboutimage from './images/about.png';
import aboutimage1 from './images/download.png';

function App() {
  return (
    <div className="App">
      <Header/>
      
      <Feature/>
      <About image={aboutimage} title='Comes With All You Need For Daily Life' button='Get The App' />
      <Presentation/>
      <About image={aboutimage1} title='Download And Get The App Now' button='Download Now' />
      <Footer/>

    </div>
      
  );
}

export default App;
