import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import NestedNavigation from './src/navigation/NestedNavigation';
import {RecipeContext} from './src/contexts/RecipeContext';

const App = () => {
  const [recipes, setRecipes] = useState([]);

  const [recipeData, setRecipeData] = useState({
    title: '',
    content: '',
  });

  return (
    <RecipeContext.Provider
      value={{recipes, setRecipes, recipeData, setRecipeData}}>
      <NavigationContainer>
        <NestedNavigation />
      </NavigationContainer>
    </RecipeContext.Provider>
  );
};

export default App;
