import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
  },
  view: {
    alignItems: 'center',
  },
  text: {
    fontSize: 50,
    fontWeight: 'bold',
    color: colors.white,
    marginBottom: 40,
  },
  imageContainer: {
    backgroundColor: colors.white,
    width: 150,
    height: 150,
    borderRadius: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 180,
    height: 180,
  },
});
