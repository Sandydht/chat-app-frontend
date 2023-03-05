import { Actions } from '../types'

const authentication = {
  namespaced: true,
  actions: {
    async [Actions.Authentication.authenticationRegister](context, payload) {
      const response = await this.$axios.$post('/auth/register', payload)
      return response
    },
    async [Actions.Authentication.authenticationLogin](context, payload) {
      const response = await this.$axios.$post('/auth/login', payload)
      return response
    },
    async [Actions.Authentication.authenticationLogout](context) {
      const response = await this.$axios.$post('/auth/logout')
      return response
    }
  }
}

export default authentication
