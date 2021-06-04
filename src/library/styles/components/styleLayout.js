import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const style = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: windowHeight,
    width: windowWidth,
  },
  itemContainer: {
    padding: 15,
  },
  listItems: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    paddingHorizontal: 5,
  },
});
