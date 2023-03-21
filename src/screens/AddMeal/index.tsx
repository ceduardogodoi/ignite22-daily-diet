import { Field } from '@components/Field'
import {
  Container,
  Header,
  LeftArrowButton,
  LeftArrowButtonContainer,
  MainContent,
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
        <Field label="Nome" />
      </MainContent>
    </Container>
  )
}
