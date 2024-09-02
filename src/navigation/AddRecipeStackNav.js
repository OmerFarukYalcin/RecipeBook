import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import AddRecipe from '../pages/AddRecipe';
import WriteRecipe from '../pages/WriteRecipe';

const Stack = createStackNavigator();

function AddRecipeStackNav() {
  return (
    <Stack.Navigator
      initialRouteName="addrecipe"
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      <Stack.Screen name="addrecipe" component={AddRecipe} />
      <Stack.Screen name="writerecipe" component={WriteRecipe} />
    </Stack.Navigator>
  );
}
export default AddRecipeStackNav;
