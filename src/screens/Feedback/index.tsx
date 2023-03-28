import { Button } from '@components/Button'

import { Container, Description, Image, Title } from './styles'

import illustrationHappy from '@assets/illustration-happy.png'

export function Feedback() {
  return (
    <Container>
      <Title>Continue assim!</Title>

      <Description>
        Você continua dentro da dieta. Muito bem!
      </Description>

      <Image source={illustrationHappy} />

      <Button title="Ir para a página inicial" />
    </Container>
  )
}
