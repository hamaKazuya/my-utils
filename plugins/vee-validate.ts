import Vue from 'vue'
import { ValidationProvider, extend } from 'vee-validate'
import * as Rules from 'vee-validate/dist/rules'
import ja from 'vee-validate/dist/locale/ja.json'
// FIXME
// Rules, jaはimport時にresolveJsonModuleのおかげで型解決された状態でimportされるはずが、
// Rules[rule]というふうに変数で取得しようとすると`Element implicitly has an 'any'`で怒られる
// でも、Rules['numeric']とか文字列で指定するとエラーにならないのはなんでだろう・・
const _Rules: any = Rules
const _ja: any = ja

for (let rule in _Rules) {
  extend(rule, {
    ..._Rules[rule], // add the rule
    message: _ja.messages[rule] // add its message
  })
}

Vue.component('ValidationProvider', ValidationProvider)
