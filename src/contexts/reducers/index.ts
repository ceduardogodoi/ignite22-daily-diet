import { Meal } from '@models/Meal'

type Action =
  | {
    type: 'meal/add'
    payload: Meal
  }
  | {
    type: 'meal/remove'
    payload: string
  }

const meals: Meal[] = [
  {
    id: '1',
    time: '20:00',
    meal: 'X-tudo',
    status: 'bad',
    eatenAt: '12.08.22',
  },
  {
    id: '2',
    time: '20:10',
    meal: 'Coca-cola',
    status: 'bad',
    eatenAt: '12.08.22',
  },
  {
    id: '3',
    time: '11:00',
    meal: 'Arroz e frango',
    status: 'good',
    eatenAt: '13.09.22',
  }
]

export const initialState: Meal[] = meals

export function reducer(state = initialState, action: Action): Meal[] {
  switch (action.type) {
    case 'meal/add': {
      const meal = action.payload

      return [...state, meal]
    }

    case 'meal/remove': { }

    default: {
      return state
    }
  }
}
