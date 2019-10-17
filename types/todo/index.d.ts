export interface TodoState {
  todoList: TodoObj[]
}

export interface TodoObj {
  id: number,
  title: string,
  isDone: boolean,
  detail: string
}

export interface UpdateIsDone {
  isDone: boolean,
  id: number
}
