import {
  StyleSheet,
  View,
  Modal,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {Icon, IconButton} from 'react-native-paper';
import UploadImage from '../utilities/UploadImage';
import TextRecognition from '@react-native-ml-kit/text-recognition';
import {RecipeContext} from '../contexts/RecipeContext';

const AddImageModal = props => {
  const {setRecipeData} = useContext(RecipeContext);

  const recognizeTextFromImage = async imagePath => {
    props.setIsVisible(false);
    const result = await TextRecognition.recognize(imagePath);
    setRecipeData({
      title: result.blocks[0].text,
      content: result.text,
    });
    props.navigation.navigate('writerecipe');
  };

  const HandleOnPress = value => {
    UploadImage.PickImage(value).then(data => {
      if (data !== undefined) recognizeTextFromImage(data);
    });
  };

  return (
    <Modal
      statusBarTranslucent={true}
      transparent={true}
      visible={props.isVisible}
      animationType="fade">
      <View style={styles.modal}>
        <View style={styles.container}>
          <IconButton
            icon="camera-plus"
            iconColor={'#673ab7'}
            size={60}
            onPress={() => HandleOnPress(true)}
          />
          <IconButton
            icon="image-plus"
            iconColor={'#673ab7'}
            size={60}
            onPress={() => HandleOnPress(false)}
          />
          <TouchableWithoutFeedback onPress={() => props.setIsVisible(false)}>
            <View style={styles.btn}>
              <Icon
                source="close"
                color={'white'}
                size={30}
                onPress={() => props.setIsVisible(false)}
              />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </Modal>
  );
};

export default AddImageModal;

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: 250,
    height: 250,
    backgroundColor: 'white',
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  btn: {
    position: 'absolute',
    top: -25,
    right: -25,
    backgroundColor: '#673ab7',
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
