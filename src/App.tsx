import React from 'react';
import './App.css'
import AppProvider from './contexts/AppContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { Wrapper } from './comps/wrapper';

const  App = () =>{
  return(
    <AppProvider>
      <ThemeProvider>
        <Wrapper/>
      </ThemeProvider>
    </AppProvider>
  )
};

export default App;
