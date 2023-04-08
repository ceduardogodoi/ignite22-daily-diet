import { Meal } from '@models/Meal'
import { Action } from '@store/actions'

export function reducer(state: Meal[], action: Action): Meal[] {
  switch (action.type) {
    case 'meal/add': {
      const meal = action.payload

      return [...state, meal]
    }

    case 'meal/delete': {
      const mealId = action.payload

      return state.filter(meal => meal.id !== mealId);
    }

    case 'meal/update': {
      const index = state.findIndex(meal => meal.id === meal.id)
      if (index < 0) {
        return state
      }

      const meal = action.payload
      state.splice(index, 1, meal)

      return [...state]
    }

    default: {
      return state
    }
  }
}
