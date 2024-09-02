import {getDatabase, push, ref, set} from '@react-native-firebase/database';
import {Alert} from 'react-native';

class api {
  static saveData = ({
    databaseRef,
    titleInput,
    contentInput,
    id,
    alertText,
    onPressFunc,
  }) => {
    const db = getDatabase();
    const newDocRef = push(ref(db, databaseRef));
    set(newDocRef, {
      id: id,
      title: titleInput,
      content: contentInput,
    })
      .then(() => {
        Alert.alert('Bilgi', `${alertText} eklendi.`, [
          {
            text: 'Tamam',
            onPress: () => onPressFunc(),
          },
        ]);
      })
      .catch(error => {
        Alert.alert('Bir hata meydana geldi!:', error.message, [
          {text: 'Tamam'},
        ]);
      });
  };
  static deleteData = ({databaseRef, item, paramsFunc}) => {
    const ref = getDatabase().ref('recipes');
    ref
      .orderByChild('id')
      .equalTo(item.id)
      .once('value')
      .then(snapshot => {
        if (snapshot.exists()) {
          snapshot.forEach(childSnapshot => {
            childSnapshot.ref
              .remove()
              .then(() => {
                console.log('Data removed successfully');
                paramsFunc();
              })
              .catch(error => {
                console.error('Error removing data: ', error);
              });
          });
        } else {
          console.log('Data not found');
        }
      })
      .catch(error => {
        console.error('Error finding data: ', error);
      });
  };
}
export default api;
