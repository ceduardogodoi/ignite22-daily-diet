import { Meal } from '@models/Meal'

export type Action =
  | {
    type: 'meal/add'
    payload: Meal
  }
  | {
    type: 'meal/delete'
    payload: string
  }
  | {
    type: 'meal/update'
    payload: Meal
  }
  | {
    type: 'meal/set'
    payload: Meal[]
  }
  | {
    type: 'meal/reset'
  }

export function addMealAction(meal: Meal): Action {
  return {
    type: 'meal/add',
    payload: meal,
  }
}

export function deleteMealAction(mealId: string): Action {
  return {
    type: 'meal/delete',
    payload: mealId,
  }
}

export function updateMealAction(meal: Meal): Action {
  return {
    type: 'meal/update',
    payload: meal,
  }
}

export function setMealsAction(meals: Meal[]): Action {
  return {
    type: 'meal/set',
    payload: meals,
  }
}

export function resetMealsAction(): Action {
  return {
    type: 'meal/reset',
  }
}
