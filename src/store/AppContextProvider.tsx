import {
  createContext,
  PropsWithChildren,
  useContext,
  useMemo,
  useReducer
} from 'react'

import { Context } from '@models/AppStore'
import { Meal, MealSectionList } from '@models/Meal'

import { initialState, reducer } from './reducers'

const AppContext = createContext({} as Context)

export function AppContextProvider({ children }: PropsWithChildren) {
  const [state] = useReducer(reducer, initialState)

  function addMeal(meal: Meal) {
    // dispatch(addMealAction(meal))
  }

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

    return {
      meals,
      addMeal,
    }
  }, [])

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext)
