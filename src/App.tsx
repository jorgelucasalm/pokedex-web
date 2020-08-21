import React from 'react';
import { ThemeProvider } from 'styled-components'

import Header from './components/Header';
import CreateGlobalStyle from './assets/styles/global'
import light from './assets/styles/themes/light'
import Body from './components/body';

function App() {
  return (

      <ThemeProvider theme={light}>
        <CreateGlobalStyle/>
        <Header/>
        <Body/>
      </ThemeProvider>
  );
}

export default App;
