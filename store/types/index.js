import * as Authentication from './authentication'
import * as User from './user'

export const Getters = {
  Authentication: Authentication.Getters
}

export const Mutations = {
  Authentication: Authentication.Mutations
}

export const Actions = {
  Authentication: Authentication.Actions,
  User: User.Actions
}
