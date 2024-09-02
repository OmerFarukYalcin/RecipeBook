import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {Card, Text} from 'react-native-paper';
import HeaderComponent from '../component/HeaderComponent';

const RecipeDetail = props => {
  const data = props.route.params.data;
  return (
    <SafeAreaProvider style={styles.root}>
      <SafeAreaView style={styles.sView}>
        <View>
          <HeaderComponent
            text={'Tarif Detayı'}
            showBackward={true}
            navigation={props.navigation}
          />
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.scrollView}>
          <Card>
            <Card.Content>
              <Text variant="titleLarge">{data.title}</Text>
              <Text variant="bodyMedium">{data.content}</Text>
            </Card.Content>
          </Card>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default RecipeDetail;

const styles = StyleSheet.create({
  root: {flex: 1, backgroundColor: '#4CAF50', paddingBottom: 120},
  sView: {flex: 1},
  scrollView: {
    flex: 1,
    marginHorizontal: 32,
  },
});
