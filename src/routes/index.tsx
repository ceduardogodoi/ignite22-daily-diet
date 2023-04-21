import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack'

import { AddEditMeal } from '@screens/AddEditMeal'
import { HomeScreen } from '@screens/Home'
import { Statistics } from '@screens/Statistics'
import { Feedback } from '@screens/Feedback'
import { MealDetail } from '@screens/MealDetail'

import { Meal } from '@models/Meal'

export type AppRoutes = {
  Home: undefined
  Statistics: undefined
  AddEditMeal: undefined
  Feedback: { variant: 'bad' | 'good' }
  MealDetail: { meal: Meal }
}

export type AppNavigatorRoutesProps = NativeStackNavigationProp<AppRoutes>

const Stack = createNativeStackNavigator<AppRoutes>()

export function Routes() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}
      initialRouteName="Home"
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Statistics" component={Statistics} />
      <Stack.Screen name="AddEditMeal" component={AddEditMeal} />
      <Stack.Screen name="Feedback" component={Feedback} />
      <Stack.Screen name="MealDetail" component={MealDetail} />
    </Stack.Navigator>
  )
}
