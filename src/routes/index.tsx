import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AddMeal } from '@screens/AddMeal'
import { HomeScreen } from '@screens/Home'
import { Statistics } from '@screens/Statistics'

type RootStackParamList = {
  Home: undefined
  Statistics: undefined
  AddMeal: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()

export function Routes() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}
      initialRouteName="AddMeal"
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Statistics" component={Statistics} />
      <Stack.Screen name="AddMeal" component={AddMeal} />
    </Stack.Navigator>
  )
}
