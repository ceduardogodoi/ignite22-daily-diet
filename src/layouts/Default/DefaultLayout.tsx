import { PropsWithChildren } from 'react'
import { Image } from 'react-native'

import { Avatar, HeaderContainer, LayoutContainer } from './styles';

import logo from '@assets/logo.png';

type DefaultLayoutProps = PropsWithChildren

export function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <LayoutContainer>
      <HeaderContainer>
        <Image source={logo} />

        <Avatar source={{ uri: 'https://github.com/ceduardogodoi.png' }} />
      </HeaderContainer>

      {children}
    </LayoutContainer>
  )
}
