import { Meal } from '@models/Meal';
import AsyncStorage from '@react-native-async-storage/async-storage'

const STORAGE_KEY_MEALS_LIST = '@dailydiet/meals'

export async function getStorageMeals() {
  const stringifiedMeals = await AsyncStorage.getItem(STORAGE_KEY_MEALS_LIST) ?? '[]'
  const mealsLike = JSON.parse(stringifiedMeals) as Meal[]
  return mealsLike.map(meal => new Meal(meal))
}

async function _setStorageMeals(meals: Meal[]) {
  const stringfiedMeals = JSON.stringify(meals)
  await AsyncStorage.setItem(STORAGE_KEY_MEALS_LIST, stringfiedMeals)
}

export async function addStorageMeal(meal: Meal) {
  const storageMeals = await getStorageMeals()
  storageMeals.push(meal)
  await _setStorageMeals(storageMeals)
}

export async function resetStorageMeals() {
  await AsyncStorage.setItem(STORAGE_KEY_MEALS_LIST, '[]')
}

export async function deleteStorageMeal(mealId: string) {
  const storageMeals = await getStorageMeals()
  const index = storageMeals.findIndex(meal => mealId === meal.id)
  storageMeals.splice(index, 1)
  await _setStorageMeals(storageMeals)
}
