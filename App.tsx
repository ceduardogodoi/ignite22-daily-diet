import { StyleSheet, Text, View } from 'react-native'
import { Nunito_400Regular, Nunito_700Bold, useFonts } from '@expo-google-fonts/nunito'
import { StatusBar } from 'expo-status-bar'

export default function App() {
  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold
  })

  return fontsLoaded && (
    <View style={styles.container}>
      <Text style={{ fontFamily: 'Nunito_700Bold' }}>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
