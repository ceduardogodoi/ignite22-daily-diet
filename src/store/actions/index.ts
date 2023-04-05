import { Meal } from '@models/Meal'

export type Action =
  | {
    type: 'meal/add'
    payload: Meal
  }
  | {
    type: 'meal/remove'
    payload: string
  }