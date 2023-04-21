import { Meal, MealDTO, MealSectionList } from './Meal'

export type AppStore = {
  meals: MealSectionList
}

export type Context = AppStore & {
  addMeal(meal: MealDTO): void
  deleteMeal(mealId: string): void
  updateMeal(meal: Meal): void
  resetMeals(): Promise<void>
}
