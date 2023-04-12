import {
  createContext,
  PropsWithChildren,
  useContext,
  useMemo,
  useReducer
} from 'react'

import { reducer } from './reducers'
import { addMealAction, deleteMealAction, updateMealAction } from './actions'

import { emptyMeals } from '../mocks'

import { Context } from '@models/AppStore'
import { Meal, MealSectionList } from '@models/Meal'

export const initialState: Meal[] = emptyMeals

const AppContext = createContext({} as Context)

export function AppContextProvider({ children }: PropsWithChildren) {
  const [state, dispatch] = useReducer(reducer, initialState)

  const value = useMemo(() => {
    const meals = state.reduce<MealSectionList>((accumulator, meal) => {
      const section = accumulator.find(item => item.title === meal.eatenAt);
      if (!section) {
        accumulator.push({
          title: meal.eatenAt,
          data: [meal],
        })
      } else {
        section.data.push(meal)
      }

      return accumulator
    }, [])

    function addMeal(meal: Meal) {
      dispatch(addMealAction(meal))
    }

    function deleteMeal(mealId: string) {
      dispatch(deleteMealAction(mealId))
    }

    function updateMeal(meal: Meal) {
      dispatch(updateMealAction(meal))
    }

    return {
      meals,
      addMeal,
      deleteMeal,
      updateMeal,
    } satisfies Context
  }, [state])

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext)
