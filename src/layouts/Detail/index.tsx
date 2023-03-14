import { Image, StatusBar } from 'react-native';
import { useTheme } from 'styled-components/native';

import { HeaderContainer, HeaderDescription, Percentage, Heading, LayoutContainer, MainContent, HeaderButton } from './styles';

import leftArrow from '@assets/left-arrow.png'

export function DetailLayout() {
  const theme = useTheme()

  return (
    <LayoutContainer>
      <StatusBar backgroundColor={theme.colors['green-light']} barStyle="dark-content" />

      <HeaderContainer>
        <HeaderButton>
          <Image source={leftArrow} />
        </HeaderButton>

        <Percentage>
          90,86%
        </Percentage>
        <HeaderDescription>
          das refeições dentro da dieta
        </HeaderDescription>
      </HeaderContainer>

      <MainContent>
        <Heading>Estatísticas gerais</Heading>
      </MainContent>
    </LayoutContainer>
  )
}
