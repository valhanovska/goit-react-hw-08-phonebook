import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { StyledEngineProvider } from '@mui/material/styles';

import 'modern-normalize';
import './styles.css';

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import theme from './theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <StyledEngineProvider injectFirst>
            <ChakraProvider theme={theme}>
              <ColorModeScript
                initialColorMode={theme.config.initialColorMode}
              />
              <App />
            </ChakraProvider>
          </StyledEngineProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// index.js

// import { ColorModeScript } from '@chakra-ui/react';
// import theme from './theme';

// const rootElement = document.getElementById('root');
// ReactDOM.createRoot(rootElement).render(
//   <>
//     {/* 👇 Here's the script */}
//     <ColorModeScript initialColorMode={theme.config.initialColorMode} />
//     <App />
//   </>
// );
