import { TouchableOpacityProps } from 'react-native'

import { IconNames } from './components/Icon'

import { Container, Icon, IconOnly, Title, Variant, variants } from './styles'

type Props = TouchableOpacityProps & {
  icon?: IconNames
  title?: string
  variant?: Variant
  fullWidth?: boolean
}

type ButtonIconProps = Pick<Props, 'icon' | 'title' | 'variant'>

function ButtonIconTitle({ icon, title, variant = 'solid' }: ButtonIconProps) {
  const iconOnly = !!icon && !title
  if (iconOnly) {
    return (
      <IconOnly icon={icon} size={18} variant={variant} />
    )
  }

  return (
    <>
      {icon && <Icon icon={icon} size={18} variant={variant} />}

      {title && <Title variant={variant}>{title}</Title>}
    </>
  )
}

export function Button(props: Props) {
  const { title, icon, variant = 'solid', fullWidth = true, ...rest } = props

  return (
    <Container
      variant={variant}
      fullWidth={fullWidth}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ?
            variants[variant].pressedBackground :
            variants[variant].backgroundColor
        },
      ]}
      {...rest}
    >
      <ButtonIconTitle title={title} icon={icon} variant={variant} />
    </Container>
  )
}
