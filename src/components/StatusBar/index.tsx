import {
  StatusBar as NativeStatusBar,
  StatusBarProps as NativeStatusBarProps,
} from 'react-native'

import { boxStatus, BoxStatus } from '@styles/global'

type StatusBarProps = NativeStatusBarProps & {
  status?: BoxStatus
}

export function StatusBar({ status = 'neutral', ...rest }: StatusBarProps) {
  return (
    <NativeStatusBar translucent backgroundColor={boxStatus[status]} {...rest} />
  )
}