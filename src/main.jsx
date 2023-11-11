import React from 'react'
import ReactDOM from 'react-dom/client'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import App from './App.jsx'

if (import.meta.env.DEV) await import('./utils/browser');

const client = new ApolloClient({
  uri: 'http://localhost:4000/api',
  cache: new InMemoryCache(),
  credentials: 'include',
});

// Set a cookie
document.cookie = "jwt=1234567890; SameSite=None; Secure";

ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)
