import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AddMeal } from '@screens/AddMeal'
import { HomeScreen } from '@screens/Home'
import { Statistics } from '@screens/Statistics'
import { Feedback } from '@screens/Feedback'

type RootStackParamList = {
  Home: undefined
  Statistics: undefined
  AddMeal: undefined
  Feedback: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()

export function Routes() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}
      initialRouteName="Feedback"
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Statistics" component={Statistics} />
      <Stack.Screen name="AddMeal" component={AddMeal} />
      <Stack.Screen name="Feedback" component={Feedback} />
    </Stack.Navigator>
  )
}
