import { TouchableOpacityProps } from 'react-native'

import { IconNames } from './components/Icon'

import { Container, Icon, Title, Variant, variants } from './styles'

type Props = TouchableOpacityProps & {
  icon?: IconNames
  title: string
  variant?: Variant
}

export function Button(props: Props) {
  const { title, icon, variant = 'solid', ...rest } = props

  return (
    <Container
      variant={variant}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ?
            variants[variant].pressedBackground :
            variants[variant].backgroundColor
        },
      ]}
      {...rest}
    >
      {icon && <Icon icon={icon} size={18} variant={variant} />}

      <Title variant={variant}>{title}</Title>
    </Container>
  )
}
