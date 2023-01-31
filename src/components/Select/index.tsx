import { Container, Dot, Title, YesNo } from './styles'

type Props = {
  isSelected?: boolean
  title: string
  type?: YesNo
}

export function Select({ isSelected, title, type = 'no' }: Props) {
  return (
    <Container isSelected={isSelected} type={type}>
      <Dot type={type} />

      <Title>{title}</Title>
    </Container>
  )
}
