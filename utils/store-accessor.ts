import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import { default as Root } from '@/store/root'
import { default as Todo } from '@/store/todo'

let rootStore: Root
let todoStore: Todo

function initialiseStores(store: Store<any>): void {
  // store追加するごとにこれを追加する必要がある(少々めんどい)
  rootStore = getModule(Root, store)
  todoStore = getModule(Todo, store)
}

export {
  initialiseStores,
  rootStore,
  todoStore
}
