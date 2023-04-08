import { Meal, MealSectionList } from './Meal'

export type AppStore = {
  meals: MealSectionList
}

export type Context = AppStore & {
  addMeal(meal: Meal): void
  deleteMeal(mealId: string): void
  updateMeal(meal: Meal): void
}
