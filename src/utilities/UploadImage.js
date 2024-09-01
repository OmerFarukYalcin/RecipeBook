import * as ImagePicker from 'react-native-image-picker';

class UploadImage {
  static PickImage = _imagePick => {
    switch (_imagePick) {
      case true:
        ImagePicker.launchCamera(null, response => {
          if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          } else {
            return response.assets[0].uri;
          }
        });
        break;
      case false:
        ImagePicker.launchImageLibrary(null, response => {
          if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          } else {
            return response.assets[0].uri;
          }
        });
        break;
    }
  };
}
export default UploadImage;
