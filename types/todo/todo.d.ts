export interface RootState {
  version: string
}

export interface TodoState {
  todos: Todo[]
}

export interface Todo {
  id: number,
  title: string,
  isDone: boolean,
  detail: string
}
