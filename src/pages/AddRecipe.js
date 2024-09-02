import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import HeaderComponent from '../component/HeaderComponent';
import {Avatar, Card, IconButton} from 'react-native-paper';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import AddImageModal from '../Modal/AddImageModal';

const AddRecipe = props => {
  const [isVisible, setIsVisible] = useState(false);
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
        <View style={styles.body}>
          <Card
            style={{marginBottom: 20}}
            onPress={() => props.navigation.navigate('writerecipe')}>
            <Card.Title
              title={'Tarif Yaz'}
              subtitle={'Tarifinizi yazarak ekleyin.'}
              left={props => <Avatar.Icon {...props} icon="pencil-plus" />}
              right={params => (
                <IconButton
                  {...params}
                  icon="arrow-right-bold-outline"
                  onPress={() => props.navigation.navigate('writerecipe')}
                />
              )}
            />
          </Card>
          <Card style={{marginBottom: 20}} onPress={() => setIsVisible(true)}>
            <Card.Title
              title={'Fotoğraf kullan'}
              subtitle={'Fotoğraf kullanarak ekle.'}
              left={props => <Avatar.Icon {...props} icon="file-image-plus" />}
              right={params => (
                <IconButton
                  {...params}
                  icon="arrow-right-bold-outline"
                  onPress={() => setIsVisible(true)}
                />
              )}
            />
          </Card>
        </View>
      </SafeAreaView>
      <AddImageModal
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        navigation={props.navigation}
      />
    </SafeAreaProvider>
  );
};

export default AddRecipe;

const styles = StyleSheet.create({
  root: {flex: 1, backgroundColor: '#4CAF50', paddingBottom: 120},
  sView: {flex: 1},
  body: {flex: 1, marginHorizontal: 32},
});
