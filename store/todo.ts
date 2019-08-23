import { Mutation, MutationAction, Action, VuexModule, getModule, Module } from 'vuex-module-decorators'
import store from '@/store/store'
import { TodoState } from '~/types/todo/todo';
// import { Todo, TodoState, RootState } from '@/types/todo/todo'

@Module({
  dynamic: true,
  store,
  name: 'todo',
  namespaced: true
})
class Todo extends VuexModule implements TodoState {
  todos = [
    {
      id: 0,
      title: 'いぬにご飯をあげる',
      isDone: true,
      detail: '本当は夕方にもあげたい。'
    },
    {
      id: 1,
      title: 'スーパーでマヨを買う',
      isDone: false,
      detail: 'かならずキューピー出ないといけない。カロリーオフもだめだ'
    }
  ]
  // mutation
  @Mutation
  public ADD(todo: Todo) {
   this.todos.push(todo)
  }
  @Mutation
  public DELETE(id: number) {
    this.todos.filter(todo => todo.id !== id)
  }

  // action
  @Action({})
  public add(todo: Todo) {
    this.ADD(todo)
  }
  @Action({})
  public delete(id: number) {
    this.DELETE(id)
  }
}

export const todoModule = getModule(Todo)



