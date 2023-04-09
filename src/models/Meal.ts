import uuid from 'react-native-uuid'

type SectionAndData = {
  title: string,
  data: Meal[]
}

export type MealSectionList = SectionAndData[]

export class Meal {
  id?: string
  time: string
  meal: string
  description?: string
  status: 'bad' | 'good'
  eatenAt: string

  constructor({ id, time, meal, description, status, eatenAt }: Meal) {
    if (!id) {
      this.id = uuid.v4().toString()
    }

    this.time = time
    this.meal = meal
    this.description = description
    this.status = status
    this.eatenAt = eatenAt
  }
}
