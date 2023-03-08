import { Button } from '@components/Button'

import { Container, Day, DayAndMeals, Header, Title } from './styles'

export function Meals() {
  function handleAddMeal() {
    console.log('add new meal tapped...');
  }

  return (
    <Container>
      <Header>
        <Title>Refeições</Title>

        <Button
          title="Nova refeição"
          variant="solid"
          icon="plus"
          onPress={handleAddMeal}
        />
      </Header>

      <DayAndMeals>
        <Day>12.08.22</Day>
        <Day>---</Day>
      </DayAndMeals>
    </Container>
  )
}
