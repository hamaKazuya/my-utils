import Vue from 'vue'
import { ValidationProvider, extend } from 'vee-validate'
import * as Rules from 'vee-validate/dist/rules'
import ja from 'vee-validate/dist/locale/ja.json'

console.log(Rules, ja)
for (let rule in Rules) {
  debugger
  extend(rule, {
    ...Rules[rule], // add the rule
    message: ja.messages[rule] // add its message
  })
}
extend('secret', {
  validate: value => value === 'example',
  message: 'This is not the magic word'
})

Vue.component('ValidationProvider', ValidationProvider)
