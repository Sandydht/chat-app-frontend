import { Getters, Mutations, Actions } from '../types'

const authentication = {
  namespaced: true,
  state: () => ({
    authPayload: null
  }),
  getters: {
    [Getters.Authentication.getAuthenticationPayload]: (state) => {
      return state.authPayload
    }
  },
  mutations: {
    [Mutations.Authentication.setAuthenticationPayload]: (state, payload) => {
      state.authPayload = payload
    }
  },
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
