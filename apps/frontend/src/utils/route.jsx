import { Navigate } from 'react-router-dom'

export function PublicRoute({ children }) {
  const token = localStorage.getItem(import.meta.env.VITE_AUTH_TOKEN)
  return !token ? children : <Navigate to='/' />
}

export function PrivateRoute({ children, redirectTo }) {
  const token = localStorage.getItem(import.meta.env.VITE_AUTH_TOKEN)
  return token ? children : <Navigate to={redirectTo} />
}

export function handleLogout(client) {
  localStorage.removeItem(import.meta.env.VITE_AUTH_TOKEN)
  if (client) {
    client.resetStore()
  }
  window.location.href = import.meta.env.VITE_LOGIN_PATH
}
