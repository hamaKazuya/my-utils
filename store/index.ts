import Vuex, { StoreOptions } from 'vuex'
import { RootState } from '../types/todo/todo'
import { todos } from './todo'

const store: StoreOptions<RootState> = {
  state: {
    version: '111'
  },
  modules: {
    todos
  }
}

export default new Vuex.Store<RootState>(store)
