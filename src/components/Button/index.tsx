import { TouchableOpacityProps } from 'react-native'

import { IconNames } from './components/Icon'

import { Container, Icon, Title } from './styles'

type Props = TouchableOpacityProps & {
  title: string
  icon?: IconNames
}

export function Button({ title, icon, ...rest }: Props) {
  return (
    <Container {...rest}>
      {icon && <Icon icon={icon} />}

      <Title>{title}</Title>
    </Container>
  )
}
