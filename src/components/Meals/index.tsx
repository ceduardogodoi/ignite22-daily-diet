import { FlatList, View } from 'react-native';

import { Button } from '@components/Button'
import { MealItem } from './components/MealItem';

import { Container, Day, Header, Title } from './styles'

type Meal = {
  time: string
  meal: string
  status: 'bad' | 'good'
}

const meals: Meal[] = [
  {
    time: '20:00',
    meal: 'X-tudo',
    status: 'bad',
  },
  {
    time: '11:00',
    meal: 'Arroz e frango',
    status: 'good',
  },
]

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

      <View>
        <Day>12.08.22</Day>

      <FlatList
        data={meals}
        keyExtractor={(_, index) => String(index)}
        renderItem={({ item }) => {
          return <MealItem {...item} />
        }}
      />
      </View>
    </Container>
  )
}
