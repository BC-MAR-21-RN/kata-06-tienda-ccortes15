import {StyleSheet} from 'react-native';
import { colors } from '../../constants/colors';

export const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    backgroundColor: colors.white,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 20,
    borderColor: colors.lightGray,
  },
  view: {
    marginHorizontal: 15,
    flexDirection: 'row',
  },
  textValue: {
    fontSize: 18,
    color: colors.gray
  },
  text: {
    fontSize: 18,
    marginTop: 5,
    color: colors.gray
  },
});
