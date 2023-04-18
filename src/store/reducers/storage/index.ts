import { Meal } from '@models/Meal';
import AsyncStorage from '@react-native-async-storage/async-storage'

const STORAGE_KEY_MEALS_LIST = '@dailydiet/meals'

export async function getStorageMeals() {
  const stringifiedMeals = await AsyncStorage.getItem(STORAGE_KEY_MEALS_LIST) ?? '[]'
  return JSON.parse(stringifiedMeals) as Meal[]
}

export async function addStorageMeal(meal: Meal) {
  const storageMeals = await getStorageMeals()
  storageMeals.push(meal)
  const newStringifiedMeals = JSON.stringify(storageMeals)
  await AsyncStorage.setItem(STORAGE_KEY_MEALS_LIST, newStringifiedMeals)
}

export async function resetStorageMeals() {
  await AsyncStorage.setItem(STORAGE_KEY_MEALS_LIST, '[]')
}
