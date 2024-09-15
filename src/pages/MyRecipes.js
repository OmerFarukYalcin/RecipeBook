import {Alert, FlatList, StyleSheet, View} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {Avatar, Card, IconButton, Searchbar} from 'react-native-paper';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import HeaderComponent from '../component/HeaderComponent';
import LoadingGifModal from '../Modal/LoadingGifModal';
import {RecipeContext} from '../contexts/RecipeContext';
import {getDatabase, ref} from '@react-native-firebase/database';
import api from '../../api/api';
import Share from 'react-native-share';

const MyRecipes = props => {
  const [loading, setLoading] = useState(true);
  const {recipes, setRecipes} = useContext(RecipeContext);

  const [data, setData] = useState({
    text: '',
    searchedData: [],
  });

  const resetPage = () => {
    props.navigation.reset({
      routes: [{name: 'recipe'}],
    });
  };

  const deleteItem = item => {
    api.deleteData({
      databaseRef: 'recipes',
      item,
      paramsFunc: () => resetPage(),
    });
  };

  const shareRecipe = item => {
    Share.open({title: 'Tarif Paylaş', message: item.content})
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        err && console.log(err);
      });
  };

  const renderItem = ({item}) => {
    const RenderRightIcon = ({params}) => {
      return (
        <View style={{flexDirection: 'row'}}>
          <IconButton
            {...params}
            icon={'share-outline'}
            onPress={() => shareRecipe(item)}
          />
          <IconButton
            {...params}
            icon={'delete-outline'}
            onPress={() => {
              deleteItem(item);
            }}
          />
        </View>
      );
    };
    return (
      <Card
        style={{marginBottom: 20}}
        onPress={() => props.navigation.navigate('detail', {data: item})}
        onLongPress={() => Alert.alert('longPressClicked')}>
        <Card.Title
          title={item.title}
          left={props => <Avatar.Icon {...props} icon="book-edit" />}
          right={params => <RenderRightIcon params={params} />}
        />
      </Card>
    );
  };

  const HandleOnChangeQuery = text => {
    const filteredData = recipes.filter(tempData => {
      return contains(tempData, text);
    });

    setData({text: text, searchedData: filteredData});
  };

  const contains = ({title, content}, query) => {
    const normalizeItem = item => {
      return item
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .trim();
    };

    const newContent = normalizeItem(content);
    const newTitle = normalizeItem(title);
    const normalizedQuery = normalizeItem(query);

    if (
      newContent.includes(normalizedQuery) ||
      newTitle.includes(normalizedQuery)
    ) {
      return true;
    }

    return false;
  };

  useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      fetchData();
    });

    return unsubscribe;
  }, []);

  const fetchData = async () => {
    const db = getDatabase();
    const recipesRef = ref(db, 'recipes');

    const r_response = await recipesRef.once('value');

    const r_data =
      r_response.exists() === false ? [] : Object.values(r_response.val());

    setRecipes(r_data);

    setData({text: '', searchedData: r_data});
    setLoading(false);
  };

  return (
    <SafeAreaProvider style={styles.root}>
      <SafeAreaView style={styles.sView}>
        <View>
          <HeaderComponent
            text={'Tariflerim'}
            showBackward={false}
            navigation={props.navigation}
          />
        </View>
        <View style={styles.body}>
          <FlatList
            data={data.searchedData}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            removeClippedSubviews={false}
            ListHeaderComponentStyle={{marginBottom: 20}}
            ListHeaderComponent={
              <Searchbar
                placeholder="Ara"
                onChangeText={query => {
                  HandleOnChangeQuery(query);
                }}
                value={data.text}
              />
            }
          />
        </View>
      </SafeAreaView>
      <LoadingGifModal isVisible={loading} />
    </SafeAreaProvider>
  );
};

export default MyRecipes;

const styles = StyleSheet.create({
  root: {flex: 1, backgroundColor: '#4CAF50', paddingBottom: 120},
  sView: {flex: 1},
  body: {
    flex: 1,
    marginHorizontal: 32,
  },
});
