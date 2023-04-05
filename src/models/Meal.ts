export type Meal = {
  id: string
  time: string
  meal: string
  status: 'bad' | 'good'
  eatenAt: string
}

export type MealSectionList = Array<{ title: string, data: Meal[] }>
