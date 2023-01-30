import { Container, Dot, Title, YesNo } from './styles'

type Props = {
  title: string
  type?: YesNo
}

export function Select({ title, type = 'no' }: Props) {
  return (
    <Container>
      <Dot type={type} />

      <Title>{title}</Title>
    </Container>
  )
}
