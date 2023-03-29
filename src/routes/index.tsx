import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack'
import { AddMeal } from '@screens/AddMeal'
import { HomeScreen } from '@screens/Home'
import { Statistics } from '@screens/Statistics'
import { Feedback } from '@screens/Feedback'
import { MealDetail } from '@screens/MealDetail'

type AppRoutes = {
  Home: undefined
  Statistics: undefined
  AddMeal: undefined
  Feedback: undefined
  MealDetail: undefined
}

export type AppNavigatorRoutesProps = NativeStackNavigationProp<AppRoutes>

const Stack = createNativeStackNavigator<AppRoutes>()

export function Routes() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}
      initialRouteName="MealDetail"
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Statistics" component={Statistics} />
      <Stack.Screen name="AddMeal" component={AddMeal} />
      <Stack.Screen name="Feedback" component={Feedback} />
      <Stack.Screen name="MealDetail" component={MealDetail} />
    </Stack.Navigator>
  )
}
