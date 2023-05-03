import { Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Description, Percentage, OpenIcon, Container } from './styles'

import topRightArrow from '@assets/top-right-arrow.png'
import { AppNavigatorRoutesProps } from '@routes'

export function PercentBox() {
  const navigation = useNavigation<AppNavigatorRoutesProps>()

  function handleOpenIcon() {
    navigation.navigate('Statistics')
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
