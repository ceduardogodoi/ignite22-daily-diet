import uuid from 'react-native-uuid'

type SectionAndData = {
  title: string,
  data: Meal[]
}

export type MealSectionList = SectionAndData[]

export type MealDTO = Omit<Meal, 'id'> & Partial<Pick<Meal, 'id'>>

export class Meal {
  id: string
  time: string
  meal: string
  description?: string
  status: 'bad' | 'good'
  eatenAt: string

  constructor(data: MealDTO) {
    const { id, time, meal, description, status, eatenAt } = data

    if (!id) {
      this.id = uuid.v4().toString()
    } else {
      this.id = id
    }

    this.time = time
    this.meal = meal
    this.description = description
    this.status = status
    this.eatenAt = eatenAt
  }
}
