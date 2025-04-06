import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import './main.css';
import App from './App';
import { ApolloClient, ApolloLink, ApolloProvider, InMemoryCache } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client'; // Apollo client upload link
// Log environment variable to verify correctness

const ApolloClientProvider = (initialState) => {
  // Define the link to your backend server
  const _NodeBackendHttpLink = createUploadLink({
    uri: import.meta.env.VITE_NODE_BACKEND, // Should point to your backend API, e.g., "https://node.influcent.com/v1/graphql"
  });

  // Create Apollo Client with only one link
  const _ApolloClient = new ApolloClient({
    connectToDevTools: true,  // Enable dev tools for debugging
    ssrMode: false,  // Set to false unless you’re using server-side rendering
    link: ApolloLink.from([_NodeBackendHttpLink]),  // Only use one link here
    cache: new InMemoryCache().restore(initialState || {}),  // Set up cache with optional initial state
    defaultOptions: {
      query: {
        context: {
          clientName: 'default',
        },
      },
      mutate: {
        context: {
          clientName: 'default',
        },
      },
      watchQuery: {
        context: {
          clientName: 'default',
        },
      },
    },
  });

  return _ApolloClient;
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client={ApolloClientProvider()}>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </ApolloProvider>
);
