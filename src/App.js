import React from 'react';
import Header from './sections/header/Header'
import About from './sections/about/AboutMe'
import Experience from './sections/exp/Experience'
import Portfolio from './sections/portfolio/Portfolio'
import './App.css'

class App extends React.Component{
  
  render(){
    return(
        <div id="wrapper">
          <Header/>
          <About />
          <Experience />
          <Portfolio />
        </div>
    )
  }
}

export default App;
