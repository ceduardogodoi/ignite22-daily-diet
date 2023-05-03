import { Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { useAppContext } from '@store/AppContextProvider'

import { AppNavigatorRoutesProps } from '@routes'

import { Description, Percentage, OpenIcon, Container } from './styles'

import topRightArrowGreen from '@assets/top-right-arrow-green.png'
import topRightArrowRed from '@assets/top-right-arrow-red.png'

export function PercentBox() {
  const navigation = useNavigation<AppNavigatorRoutesProps>()
  const { percentages } = useAppContext()

  const status = percentages.goodMeal >= percentages.badMeal ? 'success' : 'fail'
  const arrowIcon = status === 'success' ? topRightArrowGreen : topRightArrowRed

  function handleOpenIcon() {
    navigation.navigate('Statistics')
  }

  return (
    <Container status={status}>
      <Percentage>{Math.round(percentages.goodMeal)}%</Percentage>

      <Description>das refeições dentro da dieta</Description>

      <OpenIcon onPress={handleOpenIcon}>
        <Image source={arrowIcon} />
      </OpenIcon>
    </Container>
  )
}
