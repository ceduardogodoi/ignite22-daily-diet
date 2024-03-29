import { SectionList } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { useAppContext } from '@store/AppContextProvider'

import { Button } from '@components/Button'
import { MealItem } from './components/MealItem'

import { AppNavigatorRoutesProps } from '@routes'

import { Container, Day, Header, Title } from './styles'

export function MealsList() {
  const { meals, resetMeals } = useAppContext()

  const mealsAmount = meals.flatMap(section => section.data).length

  const navigation = useNavigation<AppNavigatorRoutesProps>();

  function handleAddMeal() {
    navigation.navigate('AddEditMeal')
  }

  async function handleResetMeals() {
    await resetMeals()
  }

  return (
    <Container>
      <Header>
        <Title>Refeições ({mealsAmount})</Title>

        <Button
          title="Nova refeição"
          variant="solid"
          icon="plus"
          onPress={handleAddMeal}
        />

        {false && (
          <Button
            variant="outline"
            icon="trash"
            fullWidth={false}
            onPress={handleResetMeals}
          />
        )}
      </Header>

      <SectionList
        sections={meals}
        keyExtractor={meal => String(meal.id)}
        renderSectionHeader={({ section: { title } }) => (
          <Day>{title}</Day>
        )}
        renderItem={({ item }) => (
          <MealItem meal={item} />
        )}
      />
    </Container>
  )
}
