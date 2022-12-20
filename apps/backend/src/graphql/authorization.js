import { ForbiddenError } from 'apollo-server'
import { skip } from 'graphql-resolvers'

export const isAnyone = async (_, __, { me }) => {
  return skip
}

export const isAuthenticated = async (_, __, { me }) => {
  if (!me || !me.id) {
    throw new ForbiddenError('Not authenticated')
  }
  return skip
}

export const isAdmin = async (_, __, { me }) => {
  if (!me || !me.id) {
    throw new ForbiddenError('Not authenticated')
  }
  if (!me.roles || !me.roles.includes('ADMINISTRATIVO')) {
    return new ForbiddenError('Not authorized')
  }
  return skip
}

export const isSuperAdmin = async (_, __, { me }) => {
  if (!me || !me.id) {
    throw new ForbiddenError('Not authenticated')
  }
  if (!me.role || !me.role.toUpperCase().includes('SUPERADMIN')) {
    return new ForbiddenError('Not authorized')
  }
  return skip
}
