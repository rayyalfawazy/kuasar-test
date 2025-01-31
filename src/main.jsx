import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

// Connect GraphQL with Apollo Client.
const client = new ApolloClient({
  uri: import.meta.env.VITE_DATA_SOURCE, // Loaded on dotenv
  cache: new InMemoryCache()
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </StrictMode>,
)
