import { DefaultLayout } from '@layouts/Default'
import { Meals } from '@components/Meals'
import { PercentBox } from '@components/PercentBox'

export function HomeScreen() {
  return (
    <DefaultLayout>
      <PercentBox />

      <Meals />
    </DefaultLayout>
  )
}
