import { Dispatch } from 'react'

import { Action, addMealAction, setMealsAction } from '@store/actions'

import { addStorageMeal, getStorageMeals } from '../storage'

import { Meal } from '@models/Meal'

export async function fetchStorageMealsAsync(dispatch: Dispatch<Action>) {
  const meals = await getStorageMeals()

  dispatch(setMealsAction(meals))
}

export async function addStorageMealAsync(dispatch: Dispatch<Action>, meal: Meal) {
  const mealWithId = new Meal(meal)
  await addStorageMeal(mealWithId)

  dispatch(addMealAction(mealWithId))
}
