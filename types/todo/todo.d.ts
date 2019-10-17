import { forOfStatement } from "@babel/types";

export interface TodoState {
  todos: TodoObj[]
}

export interface TodoObj {
  id: number,
  title: string,
  isDone: boolean,
  detail: string
}
