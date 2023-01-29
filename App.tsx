import { ThemeProvider } from 'styled-components'
import styled from 'styled-components/native'
import { Nunito_400Regular, Nunito_700Bold, useFonts } from '@expo-google-fonts/nunito'

import { Button } from '@components/Button'

import { theme } from '@theme'

export default function App() {
  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold
  })

  return fontsLoaded && (
    <ThemeProvider theme={theme}>
      <View>
        <Button title="Click me" />
      </View>
    </ThemeProvider>
  )
}

const View = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`
