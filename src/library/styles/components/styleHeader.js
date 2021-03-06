import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';

export const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 10,
    paddingHorizontal: 25,
    alignItems: 'center',
    justifyContent: 'space-between',
    maxHeight: 100,
    height: 100,
  },
  titleWhite: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.white,
  },
  titleGray: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.gray,
  },
  whiteHeader: {
    backgroundColor: colors.white,
  },
  transHeader: {
    backgroundColor: 'transparent',
  },
});
