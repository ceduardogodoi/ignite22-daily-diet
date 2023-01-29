import { StyleSheet, View } from 'react-native'
import { ThemeProvider } from 'styled-components'
import styled from 'styled-components/native'
import { Nunito_400Regular, Nunito_700Bold, useFonts } from '@expo-google-fonts/nunito'
import { StatusBar } from 'expo-status-bar'
import { theme } from '@theme'

export default function App() {
  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold
  })

  return fontsLoaded && (
    <ThemeProvider theme={theme}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Text>Test 123</Text>
      </View>
    </ThemeProvider>
  )
}

const Text = styled.Text`
  font-family: ${props => props.theme.fonts.bold}
`

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
