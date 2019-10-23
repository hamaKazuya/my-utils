import { Mutation, MutationAction, Action, VuexModule, Module } from 'vuex-module-decorators'
import axios from 'axios'
import { TodoList, Todo, UpdateIsDone } from '@/types/todo'

@Module({
  stateFactory: true,
  namespaced: true,
  name: 'todo'
})

export default class TodoStore extends VuexModule implements TodoList {
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
  public SET_TODOS(todoList: Todo[]) {
    this.todoList = todoList
  }
  @Mutation
  public ADD(todo: Todo) {
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
    await axios.get(path).then((res: any) => {
      this.SET_TODOS(res.data)
    }).catch ((e: any) => {
      throw e
    })

  }

  @Action({})
  public async add(todo: Todo) {
    console.log('add: ', todo)
    const postParam = {
      title: todo.title,
      detail: todo.detail
    }
    await axios.post('/api/todo/add', postParam)
      .then((res: any) => {
        this.SET_TODOS(res.data)
      })
      .catch((e: any) => {
        throw e
      })
    // this.ADD(todo)
  }

  @Action({})
  public async updateIsDone(obj: UpdateIsDone) {
    await axios.post('/api/todo/updateIsDone', obj)
      .then((res) => {
        this.SET_TODOS(res.data)
      })
      .catch((e: any) => {
        throw e
      })
  }

  @Action({})
  public async updateTodoByID(afterTodo: Todo) {
    await axios.post('/api/todo/updateTodoByID', afterTodo)
      .then((res: any) => {
        this.SET_TODOS(res.data)
      })
      .catch((e: any) => {
        throw e
      })
  }

  @Action({})
  public async deleteTodoByID(ID: number) {
    const obj = { ID }
    await axios.post('/api/todo/deleteTodoByID', obj)
      .then((res: any) => {
        this.SET_TODOS(res.data)
      })
      .catch((e: any) => {
        throw e
      })
    // this.DELETE(id)
  }
}
