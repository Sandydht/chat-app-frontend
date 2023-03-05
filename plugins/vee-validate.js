import Vue from 'vue'
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate'
import * as rules from 'vee-validate/dist/rules'
import { messages } from 'vee-validate/dist/locale/en.json'

Object.keys(rules).forEach((rule) => {
  extend(rule, {
    ...rules[rule],
    message: messages[rule]
  })
})

const phoneNumber = {
  message(field) {
    return `${field} must be a valid format`
  },
  validate(value, args) {
    const numberRegxp = /^[+]?[(]?[0-9]{4}[)]?[-\s.]?[0-9]{4}[-\s.]?[0-9]{4,6}$/im
    return numberRegxp.test(value)
  }
}

extend('phoneNumber', phoneNumber)

Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)
