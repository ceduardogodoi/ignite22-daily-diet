import { Image } from 'react-native'

import { Description, Percentage, OpenIcon, Container } from './styles'

import topRightArrow from '@assets/top-right-arrow.png'

export function PercentBox() {
  function handleOpenIcon() {
    console.log('open icon tapped...');
  }

  return (
    <Container>
      <Percentage>90.86%</Percentage>

      <Description>das refeições dentro da dieta</Description>

      <OpenIcon onPress={handleOpenIcon}>
        <Image source={topRightArrow} />
      </OpenIcon>
    </Container>
  )
}
