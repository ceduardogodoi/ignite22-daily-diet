import { InputField } from '@components/Field'
import { Label } from '@components/Typography'
import {
  Container,
  DateTimeContainer,
  Header,
  LeftArrowButton,
  LeftArrowButtonContainer,
  MainContent,
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
          <InputField label="Data" style={{ minWidth: 153 }} />
          <InputField label="Hora" style={{ minWidth: 153 }} />
        </DateTimeContainer>

        <OptionsContainer>
          <Label>Está dentro da dieta?</Label>
        </OptionsContainer>
      </MainContent>
    </Container>
  )
}
