import { DefaultLayout } from '@layouts/Default'
import { MealsList } from '@components/MealsList'
import { PercentBox } from '@components/PercentBox'

export function HomeScreen() {
  return (
    <DefaultLayout>
      <PercentBox />

      <MealsList />
    </DefaultLayout>
  )
}
