import { Meal, MealDTO, MealSectionList } from './Meal'

export type AppStore = {
  meals: MealSectionList
  goodMealAmount: number
  badMealAmount: number
  mealAmount: number
  bestSequenceAmount: number
  percentages: {
    goodMeal: number
    badMeal: number
  }
}

export type Context = AppStore & {
  addMeal(meal: MealDTO): void
  deleteMeal(mealId: string): void
  updateMeal(meal: Meal): void
  resetMeals(): Promise<void>
}
