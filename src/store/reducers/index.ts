import { Action } from '@store/actions'

import { Meal } from '@models/Meal'

export function reducer(state: Meal[], action: Action): Meal[] {
  switch (action.type) {
    case 'meal/add': {
      const meal = new Meal(action.payload)

      return [...state, meal]
    }

    case 'meal/delete': {
      const mealId = action.payload

      return state.filter(meal => meal.id !== mealId);
    }

    case 'meal/update': {
      const payloadMeal = action.payload
      const index = state.findIndex(meal => meal.id === payloadMeal.id)
      if (index < 0) {
        return state
      }

      state.splice(index, 1, payloadMeal)

      return [...state]
    }

    default: {
      return state
    }
  }
}
