import { SectionList, View } from 'react-native'

import { useAppContext } from '@contexts/AppContextProvider'

import { Button } from '@components/Button'
import { MealItem } from './components/MealItem'

import { Container, Day, Header, Title } from './styles'

export function Meals() {
  const { entries } = useAppContext()

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
        <SectionList
          sections={entries}
          keyExtractor={entry => String(entry.id)}
          renderSectionHeader={({ section: { title } }) => (
            <Day>{title}</Day>
          )}
          renderItem={({ item }) => (
            <MealItem {...item} />
          )}
        />
      </View>
    </Container>
  )
}
