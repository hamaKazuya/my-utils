import { forOfStatement } from "@babel/types";

export interface TodoState {
  todos: TodoObj[]
}

export interface TodoObj {
  Id: number,
  Title: string,
  IsDone: boolean,
  Detail: string
}
