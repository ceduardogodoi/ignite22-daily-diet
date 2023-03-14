import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeScreen } from '@screens/Home'
import { Statistics } from '@screens/Statistics'

type RootStackParamList = {
  Home: undefined
  Statistics: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()

export function Routes() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}
      initialRouteName="Statistics"
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Statistics" component={Statistics} />
    </Stack.Navigator>
  )
}
