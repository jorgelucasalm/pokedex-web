import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components'
import usePersistedState from './utils/usePersistedState'

import Header from './components/Header';
import CreateGlobalStyle from './assets/styles/global'
import Body from './components/body';

import dark from './assets/styles/themes/dark'
import light from './assets/styles/themes/light'

function App() {
  const [theme, setTheme] = usePersistedState('theme', light);

  const toggleTheme = () =>{
    setTheme(theme.title === 'light' ? dark : light);
  } 
  
  return (


      <ThemeProvider theme={theme}>
        <CreateGlobalStyle/>
        <Header toggleTheme={toggleTheme} />
        <Body/>
      </ThemeProvider>
  );
}

export default App;
