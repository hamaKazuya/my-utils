export interface TodoState {
  todoList: TodoObj[]
}

export interface TodoObj {
  Id: number,
  Title: string,
  IsDone: boolean,
  Detail: string
}

export interface UpdateIsDone {
  isDone: boolean,
  id: number
}
