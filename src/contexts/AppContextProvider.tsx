import {
  createContext,
  PropsWithChildren,
  useContext,
  useReducer
} from 'react'

import { AppStore } from '@models/AppStore'
import { Meal } from '@models/Meal'

import { initialState, reducer } from './reducers'

type Context = AppStore & {
  addMeal(meal: Meal): void
}

const AppContext = createContext({} as Context)

export function AppContextProvider({ children }: PropsWithChildren) {
  const [state] = useReducer(reducer, initialState)

  function addMeal(meal: Meal) {
    // dispatch(addMealAction(meal))
  }

  return (
    <AppContext.Provider value={{
      entries: state,
      addMeal,
    }}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext)
