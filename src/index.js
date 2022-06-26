import React from 'react';
import ReactDOM from 'react-dom';
import { Home } from './components/Home';
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>

      <Home />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

