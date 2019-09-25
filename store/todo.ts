import { Mutation, MutationAction, Action, VuexModule, Module } from 'vuex-module-decorators'
import { TodoState, TodoObj } from '@/types/todo'

@Module({
  stateFactory: true,
  namespaced: true,
  name: 'todo'
})

export default class Todo extends VuexModule implements TodoState {
  todoList = [
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
  public ADD(todo: TodoObj) {
   this.todoList.push(todo)
  }
  @Mutation
  public DELETE(id: number) {
    this.todoList.filter(todo => todo.id !== id)
  }

  // action
  @Action({})
  public add(todo: TodoObj) {
    this.ADD(todo)
  }
  @Action({})
  public delete(id: number) {
    this.DELETE(id)
  }
}
