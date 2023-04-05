import { meals } from '../../mocks'

import { Meal } from '@models/Meal'
import { Action } from '@store/actions'

export const initialState: Meal[] = meals

export function reducer(state = initialState, action: Action): Meal[] {
  switch (action.type) {
    case 'meal/add': {
      const meal = action.payload

      return [...state, meal]
    }

    case 'meal/remove': {
      const mealId = action.payload

      return state.filter(meal => meal.id !== mealId);
    }

    default: {
      return state
    }
  }
}
