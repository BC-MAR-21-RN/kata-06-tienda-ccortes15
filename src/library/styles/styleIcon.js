import {StyleSheet} from 'react-native';
import { colors } from '../constants/colors';

export const style = StyleSheet.create({
  iconSmall: {
    width: 20,
    height: 20,
    marginRight: 10,
    tintColor: colors.white,
  },
  iconMid: {
    width: 30,
    height: 30,
    tintColor: colors.gray
  },
});
