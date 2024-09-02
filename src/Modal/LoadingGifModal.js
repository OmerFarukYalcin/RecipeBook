import {StyleSheet, View, Modal, Text} from 'react-native';
import React from 'react';
import {ActivityIndicator, MD2Colors} from 'react-native-paper';

const LoadingGifModal = props => {
  return (
    <Modal
      statusBarTranslucent={true}
      transparent={true}
      visible={props.isVisible}
      animationType="fade">
      <View style={styles.modal}>
        <ActivityIndicator animating={true} size={'large'} color={'#F44336'} />
      </View>
    </Modal>
  );
};

export default LoadingGifModal;

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
