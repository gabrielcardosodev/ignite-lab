import { ApolloProvider } from '@apollo/client'
import { BrowserRouter } from 'react-router-dom'

import { client } from './lib/apollo'
import { Router } from './Router'

export function App() {
  return (
    <div>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ApolloProvider>
    </div>
  )
}
