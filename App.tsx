import { ThemeProvider } from 'styled-components'
import styled from 'styled-components/native'
import { Nunito_400Regular, Nunito_700Bold, useFonts } from '@expo-google-fonts/nunito'

import { Input } from '@components/Input'

import { theme } from '@theme'

export default function App() {
  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold
  })

  return fontsLoaded && (
    <ThemeProvider theme={theme}>
      <View>
        <Input label="Label" placeholder="Placeholder" />
        <Input label="Label" placeholder="Placeholder" defaultValue="Beatriz Ramos" />
      </View>
    </ThemeProvider>
  )
}

const View = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`
