import React from 'react';
import Header from './pages/header/Header'
import About from './pages/about/AboutMe'
import Experience from './pages/exp/Experience'
import Portfolio from './pages/portfolio/Portfolio'
import Contact from './pages/contact/Contact'
import './App.css'

class App extends React.Component{
  
  render(){
    return(
        <div id="wrapper">
          <Header/>
          <About />
          <Experience />
          <Portfolio />
          <Contact />
        </div>
    )
  }
}

export default App;
