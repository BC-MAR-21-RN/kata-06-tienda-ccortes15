import {StyleSheet} from 'react-native';
import { colors } from '../../constants/colors';

export const style = StyleSheet.create({
  container: {
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 15,
  },
  icon: {
    height: 30,
    width: 30,
    marginRight: 10,
    tintColor: colors.lightGray,
  },
  textInput: {
    fontSize: 24,
    height: 50,
  },
});
