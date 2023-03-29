import { BoxStatus } from '@styles/global'
import { TouchableOpacityProps } from 'react-native'
import { Container, Dot, Title } from './styles'

type Props = TouchableOpacityProps & {
  isSelected?: boolean
  title: string
  status?: BoxStatus
}

export function Select({ isSelected, title, status = 'neutral', ...rest }: Props) {
  return (
    <Container isSelected={isSelected} status={status} {...rest}>
      {status !== 'neutral' && <Dot status={status} />}

      <Title>{title}</Title>
    </Container>
  )
}
