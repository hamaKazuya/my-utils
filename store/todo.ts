import { Mutation, MutationAction, Action, VuexModule, Module } from 'vuex-module-decorators'
import { TodoState, TodoObj, UpdateIsDone } from '@/types/todo'

@Module({
  stateFactory: true,
  namespaced: true,
  name: 'todo'
})

export default class Todo extends VuexModule implements TodoState {
  todoList = [
    {
      id: 0,
      title: '',
      isDone: true,
      detail: ''
    }
  ]

  // mutation
  @Mutation
  public SET_TODOS(todos: any) {
    this.todoList = todos.data
  }
  @Mutation
  public ADD(todo: TodoObj) {
   this.todoList.push(todo)
  }
  @Mutation
  public DELETE(id: number) {
    this.todoList.filter(todo => todo.id !== id)
  }

  // action
  @Action({ rawError: true })
  public async getTodos() {
    const path = '/api/todo'
    // TODO $nuxtって絶対おかしい
    await $nuxt.$axios.get(path).then((res: any) => {
      this.SET_TODOS(res)
    }).catch ((e: any) => {
      throw e
    })

  }

  @Action({})
  public async add(todo: TodoObj) {
    console.log('add: ', todo)
    await $nuxt.$axios.post('/api/todo/add', todo)
      .then((res: any) => {
        console.log('post ok: ', res)
      })
      .catch((e: any) => {
        throw e
      })
    // this.ADD(todo)
  }

  @Action({})
  public async updateIsDone(obj: UpdateIsDone) {
    await $nuxt.$axios.post('/api/todo/updateIsDone', obj)
      .then((res) => {
        console.log('post ok:', res)
      })
      .catch((e: any) => {
        throw e
      })
  }

  @Action({})
  public delete(id: number) {
    this.DELETE(id)
  }
}
