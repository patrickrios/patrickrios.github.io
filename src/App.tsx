import React from 'react';
import Header from './pages/header/Header'
import About from './pages/about/AboutMe'
import Portfolio from './pages/portfolio/Portfolio'
import Contact from './pages/contact/Contact'
import Footer from './pages/footer/Footer'
import './App.css'
import AppProvider from './contexts/AppContext';

class App extends React.Component{
  
  render(){
    return(
      <AppProvider>
        <div id="wrapper">
          <Header/>
          <About/>
          <Portfolio/>
          <Contact/>
          <Footer/>
        </div>
      </AppProvider>
    )
  }
}

export default App;
