import { useNavigation } from '@react-navigation/native'

import { Button } from '@components/Button'

import { Container, Description, Highlight, Image, Title } from './styles'

import illustrationHappy from '@assets/illustration-happy.png'
import illustrationSad from '@assets/illustration-sad.png'

import type { AppNavigatorRoutesProps } from '@routes'

type Props = {
  good?: boolean
}

type DescriptionHighlightProps = {
  variant?: 'good' | 'bad'
}

function DescriptionHighlight({ variant = 'bad' }: DescriptionHighlightProps) {
  if (variant === 'bad') {
    return (
      <Description>
        Você <Highlight>saiu da dieta</Highlight> dessa vez, mas continue se esforçando e não desista!
      </Description>
    )
  }

  return (
    <Description>
      Você continua <Highlight>dentro da dieta</Highlight>. Muito bem!
    </Description>
  )
}

export function Feedback({ good = false }: Props) {
  const navigation = useNavigation<AppNavigatorRoutesProps>()

  const variant = good ? 'good' : 'bad'
  const title = good ? 'Continue assim!' : 'Que pena!'
  const image = good ? illustrationHappy : illustrationSad

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
