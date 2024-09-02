import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import MyRecipes from '../pages/MyRecipes';
import RecipeDetail from '../pages/RecipeDetail';

const Stack = createStackNavigator();

function RecipeStackNav() {
  return (
    <Stack.Navigator
      initialRouteName="myrecipe"
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      <Stack.Screen name="myrecipe" component={MyRecipes} />
      <Stack.Screen name="detail" component={RecipeDetail} />
    </Stack.Navigator>
  );
}
export default RecipeStackNav;
