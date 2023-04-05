import { ThemeProvider } from 'styled-components'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { Nunito_400Regular, Nunito_700Bold, useFonts } from '@expo-google-fonts/nunito'

import { AppContextProvider } from '@store/AppContextProvider'
import { Routes } from '@routes'
import { theme } from '@theme'

export default function App() {
  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold
  })

  return fontsLoaded && (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <NavigationContainer>
          <AppContextProvider>
            <Routes />
          </AppContextProvider>
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  )
}
