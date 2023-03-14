import { Image, StatusBar } from 'react-native';
import { useTheme } from 'styled-components/native';

import {
  Header,
  Description,
  Percentage,
  Heading,
  Container,
  MainContent,
  BackButton,
} from './styles';

import leftArrow from '@assets/left-arrow.png'

export function Statistics() {
  const theme = useTheme()

  return (
    <Container>
      <StatusBar backgroundColor={theme.colors['green-light']} barStyle="dark-content" />

      <Header>
        <BackButton>
          <Image source={leftArrow} />
        </BackButton>

        <Percentage>
          90,86%
        </Percentage>
        <Description>
          das refeições dentro da dieta
        </Description>
      </Header>

      <MainContent>
        <Heading>Estatísticas gerais</Heading>
      </MainContent>
    </Container>
  )
}
