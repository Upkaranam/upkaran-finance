import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import { css, Global } from '@emotion/react';
import { ErrorBoundary } from 'components/ErrorBoundary';
import { Layout } from 'components/Layout';
import { Web3ContextProvider } from 'contexts/Web3Context';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from 'Routes';
import { theme } from 'theme';

const GlobalStyles = css`
  /*
    This will hide the focus indicator if the element receives focus via the mouse,
    but it will still show up on keyboard focus.
  */
  .js-focus-visible :focus:not([data-focus-visible-added]) {
    outline: none;
    box-shadow: none;
  }
`;

export const App: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Global styles={GlobalStyles} />
      <ErrorBoundary>
        <Web3ContextProvider>
          <Router>
            <Layout>
              <Routes />
            </Layout>
          </Router>
        </Web3ContextProvider>
      </ErrorBoundary>
    </ChakraProvider>
  );
};
