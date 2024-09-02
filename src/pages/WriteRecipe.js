import {
  StyleSheet,
  View,
  TextInput,
  Text,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useContext, useState} from 'react';
import HeaderComponent from '../component/HeaderComponent';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {getFontFamily} from '../../assets/fonts/helper';
import uuid from 'react-native-uuid';
import api from '../../api/api';
import {RecipeContext} from '../contexts/RecipeContext';

const WriteRecipe = props => {
  const {recipeData, setRecipeData} = useContext(RecipeContext);

  const alertOnPressFunc = () => {
    props.navigation.navigate('recipe');
    props.navigation.reset({
      routes: [{name: 'addrecipe'}],
    });
  };

  const saveData = () => {
    api.saveData({
      titleInput: recipeData.title,
      contentInput: recipeData.content,
      alertText: 'Tarifiniz',
      databaseRef: 'recipes',
      id: uuid.v4(),
      onPressFunc: alertOnPressFunc,
    });
  };

  return (
    <SafeAreaProvider style={styles.root}>
      <SafeAreaView style={styles.sView}>
        <View>
          <HeaderComponent
            text={'Tarif Ekle'}
            showBackward={true}
            navigation={props.navigation}
          />
        </View>
        <ScrollView style={styles.body} showsVerticalScrollIndicator={false}>
          <View style={{marginBottom: 20}}>
            <Text style={styles.text}>Başlık:</Text>
            <TextInput
              style={styles.txtInput}
              defaultValue={recipeData.title}
              onChangeText={text => {
                setRecipeData(prevData => ({
                  ...prevData,
                  title: text,
                }));
              }}
            />
          </View>
          <View style={{marginBottom: 20}}>
            <Text style={styles.text}>Tarif Not:</Text>
            <TextInput
              style={[
                styles.txtInput,
                {
                  height: 300,
                  textAlignVertical: 'top',
                },
              ]}
              multiline={true}
              defaultValue={recipeData.content}
              onChangeText={text => {
                setRecipeData(prevData => ({
                  ...prevData,
                  content: text,
                }));
              }}
            />
          </View>
          <TouchableOpacity style={styles.btn} onPress={() => saveData()}>
            <Text style={styles.btnText}>Onayla</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default WriteRecipe;

const styles = StyleSheet.create({
  root: {flex: 1, backgroundColor: '#4CAF50', paddingBottom: 120},
  sView: {flex: 1},
  body: {flex: 1, paddingHorizontal: 32},
  text: {
    color: '#f2f2f2',
    fontFamily: getFontFamily('Poppins', '600'),
    fontSize: 18,
  },
  txtInput: {
    height: 45,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: '#f2f2f2',
    paddingLeft: 8,
    fontFamily: getFontFamily('Poppins', '600'),
  },
  btn: {
    borderRadius: 16,
    backgroundColor: '#673ab7',
    alignItems: 'center',
    paddingVertical: 16,
    justifyContent: 'center',
  },
  btnText: {
    fontFamily: getFontFamily('Poppins', '700'),
    color: 'white',
    fontSize: 18,
  },
});
