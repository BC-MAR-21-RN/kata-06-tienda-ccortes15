import {Dimensions, StyleSheet} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const style = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: windowHeight,
    width: windowWidth,
  },
  itemContainer: {
    padding: 15,
  },
});
