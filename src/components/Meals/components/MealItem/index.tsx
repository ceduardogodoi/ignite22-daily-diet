import { Container, Meal, MealContainer, Status, Time, TimeContainer } from './styles'

type MealItemProps = {
  time: string
  meal: string
  status: 'bad' | 'good'
}

export function MealItem({ time, meal, status }: MealItemProps) {
  return (
    <Container>
      <TimeContainer>
        <Time>{time}</Time>
      </TimeContainer>

      <MealContainer>
        <Meal>{meal}</Meal>
      </MealContainer>

      <Status status={status} />
    </Container>
  )
}
