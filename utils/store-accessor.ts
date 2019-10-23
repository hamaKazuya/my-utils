import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import TodoSore from '@/store/todo'

let todoStore: TodoSore

function initialiseStores(store: Store<any>): void {
  // store追加するごとにこれを追加する必要がある(少々めんどい)
  todoStore = getModule(TodoSore, store)
}

export {
  initialiseStores,
  todoStore
}
