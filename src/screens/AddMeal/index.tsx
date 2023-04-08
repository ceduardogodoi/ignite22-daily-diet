import { useNavigation } from '@react-navigation/native'
import { Button } from '@components/Button'
import { InputField } from '@components/Field'
import { Select } from '@components/Select'
import { StatusBar } from '@components/StatusBar'
import { Label } from '@components/Typography'

import { AppNavigatorRoutesProps } from '@routes'

import {
  Container,
  CreateMealButtonContainer,
  DateTimeContainer,
  Header,
  LeftArrowButton,
  LeftArrowButtonContainer,
  MainContent,
  Option,
  OptionsContainer,
  Title,
  TitleContainer
} from './styles'
import { useAppContext } from '@store/AppContextProvider'
import { Meal } from '@models/Meal'

export function AddMeal() {
  const navigation = useNavigation<AppNavigatorRoutesProps>();
  // const { addMeal } = useAppContext()

  function handleArrowPress() {
    navigation.navigate('Home')
  }

  // function handleAddMeal() {
  //   const meal = {
  //     meal: 'Arroz com frango', 
  //   } as Meal

  //   addMeal(meal)
  // }

  return (
    <Container>
      <StatusBar barStyle="dark-content" />

      <Header>
        <LeftArrowButtonContainer onPress={handleArrowPress}>
          <LeftArrowButton />
        </LeftArrowButtonContainer>

        <TitleContainer>
          <Title>Nova refeição</Title>
        </TitleContainer>
      </Header>

      <MainContent>
        <InputField label="Nome" />
        <InputField label="Descrição" multiline />

        <DateTimeContainer>
          <InputField label="Data" style={{ minWidth: 160 }} />
          <InputField label="Hora" style={{ minWidth: 160 }} />
        </DateTimeContainer>

        <Label>Está dentro da dieta?</Label>
        <OptionsContainer>
          <Option>
            <Select title="Sim" status="success" />
          </Option>
          <Option>
            <Select title="Não" status="fail" />
          </Option>
        </OptionsContainer>

        <CreateMealButtonContainer>
          <Button
            title="Cadastrar refeição"
            // onPress={handleAddMeal}
          />
        </CreateMealButtonContainer>
      </MainContent>
    </Container>
  )
}
