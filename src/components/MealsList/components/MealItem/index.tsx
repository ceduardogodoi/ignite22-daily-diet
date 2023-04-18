import { useNavigation } from '@react-navigation/native'
import { Container, MealName, MealContainer, Status, Time, TimeContainer } from './styles'

import { AppNavigatorRoutesProps } from '@routes'

import { Meal } from '@models/Meal'

type MealItemProps = {
  meal: Meal
}

export function MealItem({ meal }: MealItemProps) {
  const navigation = useNavigation<AppNavigatorRoutesProps>()

  function handleMealDetail() {
    navigation.navigate('MealDetail', {
      mealId: meal.id,
    })
  }

  return (
    <Container onPress={handleMealDetail}>
      <TimeContainer>
        <Time>{meal.time}</Time>
      </TimeContainer>

      <MealContainer>
        <MealName>{meal.meal}</MealName>
      </MealContainer>

      <Status status={meal.status} />
    </Container>
  )
}
