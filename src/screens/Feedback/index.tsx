import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'

import { Button } from '@components/Button'
import { DescriptionHighlight } from './components/DescriptionHighlight'

import { Container, Image, Title } from './styles'

import illustrationHappy from '@assets/illustration-happy.png'
import illustrationSad from '@assets/illustration-sad.png'

import { AppNavigatorRoutesProps, AppRoutes } from '@routes'

type FeedbackScreenRouteProp = RouteProp<AppRoutes, 'Feedback'>

export function Feedback() {
  const navigation = useNavigation<AppNavigatorRoutesProps>()

  const route = useRoute<FeedbackScreenRouteProp>()
  const { variant } = route.params

  const title = variant === 'good' ? 'Continue assim!' : 'Que pena!'
  const image = variant === 'good' ? illustrationHappy : illustrationSad

  function handleGoHome() {
    navigation.navigate('Home');
  }

  return (
    <Container>
      <Title variant={variant}>{title}</Title>

      <DescriptionHighlight variant={variant} />

      <Image source={image} />

      <Button
        title="Ir para a página inicial"
        onPress={handleGoHome}
      />
    </Container>
  )
}
