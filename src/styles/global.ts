import { theme } from '@theme'

export const boxStatus = {
  neutral: theme.colors['gray-600'],
  success: theme.colors['green-light'],
  fail: theme.colors['red-light'],
} as const;

export type BoxStatus = keyof typeof boxStatus;

export type ContainerProps = {
  status?: BoxStatus
}
