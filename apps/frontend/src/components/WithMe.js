import { gql, useQuery } from '@apollo/client'

export const ME = gql`query { me { email, name, role, roles, AccountId } }`

function WithMe({ children, onLogout }) {
  const { loading, error, data } = useQuery(ME, { fetchPolicy: 'network-only' })
  if (loading) return ''
  if (error) return error.message
  if (!data?.me) {
    onLogout()
  }
  return children({ data })
}

export default WithMe
