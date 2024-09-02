import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Icon} from 'react-native-paper';
import {getFontFamily} from '../../assets/fonts/helper';

const HeaderComponent = props => {
  return (
    <View style={styles.header}>
      {props.showBackward === true && (
        <TouchableOpacity
          style={styles.backwardBtn}
          onPress={() => {
            if (props.navigation.canGoBack()) {
              props.navigation.goBack();
            }
          }}>
          <Icon size={36} source={'chevron-left'} color="white" />
        </TouchableOpacity>
      )}
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
};

export default HeaderComponent;

const styles = StyleSheet.create({
  header: {
    height: 90,
    backgroundColor: '#F8BBD0',
    flexDirection: 'row',
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  backwardBtn: {
    backgroundColor: '#673ab7',
    width: 36,
    height: 36,
    borderRadius: 18,
    position: 'absolute',
    left: 18,
  },
  text: {
    fontFamily: getFontFamily('Poppins', '700'),
    color: '#222',
    fontSize: 24,
  },
  container: {
    width: 36,
    height: 36,
  },
});
