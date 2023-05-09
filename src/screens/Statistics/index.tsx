import { FlatList, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import { AppNavigatorRoutesProps } from '@routes';
import { useAppContext } from '@store/AppContextProvider';

import {
  Header,
  Description,
  Percentage,
  Heading,
  Container,
  MainContent,
  Box,
  BoxTitle,
  BoxDescription,
  StatusBar,
  LeftArrowButton,
} from './styles'

export function Statistics() {
  const navigation = useNavigation<AppNavigatorRoutesProps>()
  const { percentages, mealAmount, bestSequenceAmount } = useAppContext()

  const percentage = Math.round(percentages.goodMeal)

  const status = percentages.goodMeal >= percentages.badMeal ? 'success' : 'fail'

  function handleBack() {
    navigation.navigate('Home')
  }

  return (
    <Container>
      <StatusBar barStyle="dark-content" />

      <Header status={status}>
        <TouchableOpacity onPress={handleBack}>
          <LeftArrowButton status={status} />
        </TouchableOpacity>

        <Percentage>
          {percentage}%
        </Percentage>
        <Description>
          das refeições dentro da dieta
        </Description>
      </Header>

      <MainContent>
        <Heading>Estatísticas gerais</Heading>

        <Box>
          <BoxTitle>{bestSequenceAmount}</BoxTitle>

          <BoxDescription>
            melhor sequência de pratos dentro da dieta
          </BoxDescription>
        </Box>

        <Box>
          <BoxTitle>{mealAmount}</BoxTitle>

          <BoxDescription>
            refeições registradas
          </BoxDescription>
        </Box>

        <FlatList
          data={[]}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Box fullWidth={false} status={item.status}>
              <BoxTitle>{item.amount}</BoxTitle>

              <BoxDescription>
                {item.title}
              </BoxDescription>
            </Box>
          )}
          contentContainerStyle={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        />
      </MainContent>
    </Container>
  )
}
