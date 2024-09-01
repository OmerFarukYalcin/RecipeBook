import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Searchbar} from 'react-native-paper';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
const MyRecipes = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  return (
    <Searchbar
      placeholder="Search"
      onChangeText={setSearchQuery}
      value={searchQuery}
    />
  );
};

export default MyRecipes;

const styles = StyleSheet.create({
  root: {flex: 1},
});
