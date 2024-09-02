import * as ImagePicker from 'react-native-image-picker';

class UploadImage {
  static PickImage = async _imagePick => {
    switch (_imagePick) {
      case true:
        const cameraResponse = await ImagePicker.launchCamera(null);
        if (cameraResponse.didCancel) {
          console.log('User cancelled image picker');
        } else if (cameraResponse.error) {
          console.log('ImagePicker Error: ', cameraResponse.error);
        } else {
          return cameraResponse.assets[0].uri;
        }
        break;
      case false:
        const galleryResponse = await ImagePicker.launchImageLibrary(null);

        if (galleryResponse.didCancel) {
          console.log('User cancelled image picker');
        } else if (galleryResponse.error) {
          console.log('ImagePicker Error: ', galleryResponse.error);
        } else {
          return galleryResponse.assets[0].uri;
        }
        break;
    }
  };
}
export default UploadImage;
