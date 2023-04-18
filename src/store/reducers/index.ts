import { Action } from '@store/actions'

import { Meal } from '@models/Meal'

export function reducer(state: Meal[], action: Action): Meal[] {
  switch (action.type) {
    case 'meal/set': {
      const meals = action.payload
      return meals
    }

    case 'meal/add': {
      const meal = action.payload
      const meals = [...state, meal]
      return meals
    }

    case 'meal/delete': {
      const mealId = action.payload
      const meals = state.filter(meal => meal.id !== mealId)
      return meals
    }

    case 'meal/update': {
      const payloadMeal = action.payload
      const index = state.findIndex(meal => meal.id === payloadMeal.id)
      if (index < 0) {
        return state
      }
      state.splice(index, 1, payloadMeal)

      const meals = [...state]
      return meals
    }

    case 'meal/reset': {
      return [] as Meal[]
    }

    default: {
      return state
    }
  }
}
