import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import Todo from '@/store/todo'

let todoStore: Todo

function initialiseStores(store: Store<any>): void {
  // store追加するごとにこれを追加する必要がある(少々めんどい)
  todoStore = getModule(Todo, store)
}

export {
  initialiseStores,
  todoStore
}
