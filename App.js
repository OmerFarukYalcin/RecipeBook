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

  const htmlContent = `
      <html>
        <head><title>Başlık</title></head>
        <body>
          <h2 style="text-align:center; font-size:36px; color:#673ab7;" >This is a Heading</h2>
          <p style="font-size:24px; color:black;" >${inputText}</p>
        </body>
      </html>
    `;

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
