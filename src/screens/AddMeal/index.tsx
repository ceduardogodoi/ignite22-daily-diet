import { Button } from '@components/Button'
import { InputField } from '@components/Field'
import { Select } from '@components/Select'
import { Label } from '@components/Typography'
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
  StatusBar,
  Title,
  TitleContainer
} from './styles'

export function AddMeal() {
  return (
    <Container>
      <StatusBar barStyle="dark-content" />

      <Header>
        <LeftArrowButtonContainer>
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
            <Select title="Sim" type="yes" />
          </Option>
          <Option>
            <Select title="Não" type="no" />
          </Option>
        </OptionsContainer>

        <CreateMealButtonContainer>
          <Button title="Cadastrar refeição" />
        </CreateMealButtonContainer>
      </MainContent>
    </Container>
  )
}
