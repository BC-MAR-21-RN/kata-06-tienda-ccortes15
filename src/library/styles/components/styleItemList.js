import {Dimensions, StyleSheet} from 'react-native';
import { colors } from '../../constants/colors';

export const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15
  },
  flex: {
    flex: 1,
  },
  viewTop: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
  },
  viewMid: {
    paddingHorizontal: 10,
  },
  viewDown: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 10,
  },
  nameProduct: {
    color: colors.gray,
    fontSize: 22,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    color: colors.gray,
  },
  icon: {
    tintColor: colors.gray,
  },
  image: {
    width: 150,
    height: 150,
  },
});
