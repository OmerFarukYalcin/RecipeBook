import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-paper';
import {getFontFamily} from '../../assets/fonts/helper';
import RecipeStackNav from './RecipeStackNav';
import AddRecipeStackNav from './AddRecipeStackNav';

function MyTabBar({state, descriptors, navigation}) {
  return (
    <View style={styles.tabBarContainer}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              alignItems: 'center',
              alignSelf: 'center',
            }}>
            <Icon
              source={
                isFocused
                  ? options.icon.focusedIcon
                  : options.icon.unfocusedIcon
              }
              color={'black'}
              size={32}
            />
            <Text
              style={[
                styles.tabBarText,
                {color: isFocused ? '#673ab7' : '#222'},
              ]}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
const Tab = createBottomTabNavigator();

const NestedNavigation = () => {
  const tabs = [
    {
      id: 0,
      name: 'recipe',
      component: RecipeStackNav,
      label: 'Tariflerim',
      icon: {
        focusedIcon: 'notebook-edit',
        unfocusedIcon: 'notebook-edit-outline',
      },
    },
    {
      id: 1,
      name: 'addRecipe',
      component: AddRecipeStackNav,
      label: 'Tarif Ekle',
      icon: {
        focusedIcon: 'notebook-plus',
        unfocusedIcon: 'notebook-plus-outline',
      },
    },
  ];
  return (
    <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
      {tabs.map(item => {
        return (
          <Tab.Screen
            key={item.id}
            name={item.name}
            component={item.component}
            options={{
              headerShown: false,
              tabBarLabel: item.label,
              icon: item.icon,
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default NestedNavigation;

const styles = StyleSheet.create({
  tabBarContainer: {
    position: 'absolute',
    height: 90,
    backgroundColor: '#F8BBD0',
    flexDirection: 'row',
    bottom: 10,
    left: 10,
    right: 10,
    elevation: 0,
    borderRadius: 18,
    justifyContent: 'space-evenly',
  },
  tabBarText: {
    fontFamily: getFontFamily('Poppins', '600'),
    fontSize: 16,
  },
});
