import {
  ArrowLeft,
  ArrowUpRight,
  PencilSimpleLine,
  Plus,
  Trash,
  IconProps as PhosphorIconProps,
} from 'phosphor-react-native'

export type IconNames = 'arrowLeft' | 'arrowUpRight' | 'pencil' | 'plus' | 'trash'

type IconProps = PhosphorIconProps & {
  icon?: IconNames
}

export function Icon({ icon, ...rest }: IconProps) {
  switch (icon) {
    case 'arrowLeft':
      return <ArrowLeft {...rest} />
    case 'arrowUpRight':
      return <ArrowUpRight {...rest} />
    case 'pencil':
      return <PencilSimpleLine {...rest} />
    case 'plus':
      return <Plus {...rest} />
    case 'trash':
      return <Trash {...rest} />
    default:
      return null
  }
}