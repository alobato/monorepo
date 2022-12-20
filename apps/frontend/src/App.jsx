import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'theme-ui'
import { useApolloClient } from '@apollo/client'
import { QueryParamProvider } from 'use-query-params'
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6'

import theme from 'theme'
import { AppProvider, MessageProvider } from 'contexts'

import { PublicRoute, PrivateRoute, handleLogout } from './utils'

import { WithMe } from './components'

import MainLayout from './layouts/MainLayout'

import NotFound from './containers/NotFound'
import Welcome from './containers/Welcome'

function App() {
  const client = useApolloClient()

  return (
    <BrowserRouter>
      <QueryParamProvider adapter={ReactRouter6Adapter}>
        <ThemeProvider theme={theme}>
          <MessageProvider>
            <Routes>
              <Route path='/' element={<PublicRoute redirectTo={import.meta.env.VITE_LOGIN_PATH}><MainLayout onLogout={() => handleLogout(client)} /></PublicRoute>}>
                <Route index element={<PublicRoute redirectTo={import.meta.env.VITE_LOGIN_PATH}><Welcome /></PublicRoute>} />
              </Route>
              <Route path='*' element={<NotFound />} />
            </Routes>
          </MessageProvider>
        </ThemeProvider>
      </QueryParamProvider>
    </BrowserRouter>
  )
}

function AppWithProvider() {
  const client = useApolloClient()
  const token = localStorage.getItem(import.meta.env.VITE_AUTH_TOKEN)

  if (token) {
    return (
      <WithMe onLogout={() => handleLogout(client)}>
        {({ data }) => (
          <AppProvider defaultValue={{ me: data.me }}>
            <App />
          </AppProvider>
        )}
      </WithMe>
    )
  }

  return (
    <AppProvider>
      <App />
    </AppProvider>
  )
}

export default AppWithProvider
