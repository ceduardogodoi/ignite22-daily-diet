import { Dispatch } from 'react'

import { Action, addMealAction, deleteMealAction, setMealsAction, updateMealAction } from '@store/actions'

import {
  addStorageMeal,
  deleteStorageMeal,
  getStorageMeals,
  updateStorageMeal
} from '../storage'

import { Meal, MealDTO } from '@models/Meal'

export async function fetchStorageMealsAsync(dispatch: Dispatch<Action>) {
  const meals = await getStorageMeals()
  dispatch(setMealsAction(meals))
}

export async function addStorageMealAsync(dispatch: Dispatch<Action>, meal: MealDTO) {
  const mealWithId = new Meal(meal)
  await addStorageMeal(mealWithId)

  dispatch(addMealAction(mealWithId))
}

export async function deleteStorageMealAsync(dispatch: Dispatch<Action>, mealId: string) {
  await deleteStorageMeal(mealId)

  dispatch(deleteMealAction(mealId))
}

export async function updateStorageMealAsync(dispatch: Dispatch<Action>, meal: Meal) {
  await updateStorageMeal(meal)

  dispatch(updateMealAction(meal))
}
