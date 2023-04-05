import { SectionList, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { useAppContext } from '@store/AppContextProvider'

import { Button } from '@components/Button'
import { MealItem } from './components/MealItem'

import { AppNavigatorRoutesProps } from '@routes'

import { Container, Day, Header, Title } from './styles'

export function MealsList() {
  const { meals } = useAppContext()
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  function handleAddMeal() {
    navigation.navigate('AddMeal')
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
          sections={meals}
          keyExtractor={meal => String(meal.id)}
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
