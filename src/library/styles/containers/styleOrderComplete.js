import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.green,
  },
  viewTop: {
    minHeight: 200,
  },
  viewDown: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    top: 180,
    backgroundColor: colors.pearl,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  imageContainer: {
    backgroundColor: colors.white,
    borderRadius: 80,
    top: 130,
    flex: 1,
    alignSelf: 'center',
    position: 'absolute',
  },
  image: {
    height: 150,
    width: 150,
  },
  text: {
    fontSize: 24,
    color: colors.gray,
  },
  number: {
    fontSize: 34,
    color: colors.green,
  },
});
