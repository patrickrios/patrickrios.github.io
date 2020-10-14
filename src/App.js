import React from 'react';
import Header from './header/Header'
import About from './about/AboutMe'
import './App.css'

class App extends React.Component{
  
  render(){
    return(
        <div id="wrapper">
          <Header/>
          <About />
        </div>
    )
  }
}

export default App;
