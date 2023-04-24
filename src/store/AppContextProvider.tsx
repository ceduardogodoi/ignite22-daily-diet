import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useReducer
} from 'react'
import { Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { reducer } from './reducers'
import {
  addStorageMealAsync,
  deleteStorageMealAsync,
  fetchStorageMealsAsync,
  updateStorageMealAsync
} from './reducers/async'
import { resetMealsAction } from './actions'

import { emptyMeals } from '../mocks'

import { AppNavigatorRoutesProps } from '@routes'

import { Context } from '@models/AppStore'
import { Meal, MealSectionList } from '@models/Meal'
import { resetStorageMeals } from './reducers/storage'

export const initialState: Meal[] = emptyMeals

const AppContext = createContext({} as Context)

export function AppContextProvider({ children }: PropsWithChildren) {
  const [state, dispatch] = useReducer(reducer, initialState)

  const navigation = useNavigation<AppNavigatorRoutesProps>()

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
      addStorageMealAsync(dispatch, meal)

      navigation.navigate('Feedback', {
        variant: meal.status,
      })
    }

    function deleteMeal(mealId: string) {
      deleteStorageMealAsync(dispatch, mealId)

      navigation.navigate('Home')
    }

    function updateMeal(meal: Meal) {
      updateStorageMealAsync(dispatch, meal)

      navigation.navigate('Home')
    }

    async function resetMeals() {
      await resetStorageMeals()

      dispatch(resetMealsAction())

      Alert.alert('Meals cleaned', 'Your meals storage was cleaned.')
    }

    return {
      meals,
      addMeal,
      deleteMeal,
      updateMeal,
      resetMeals,
    } satisfies Context
  }, [state])

  useEffect(() => {
    fetchStorageMealsAsync(dispatch)
  }, [])

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext)
