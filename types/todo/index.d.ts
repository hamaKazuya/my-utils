export interface TodoList {
  todoList: Todo[]
}

export interface Todo {
  id: number,
  title: string,
  isDone: boolean,
  detail: string
}

export interface UpdateIsDone {
  isDone: boolean,
  id: number
}
