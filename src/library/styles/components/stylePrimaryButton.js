import {StyleSheet} from 'react-native';
import { colors } from '../../constants/colors';

export const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.green,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.white,
  },
  buttonAddTo: {
    padding: 5,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colors.gray,
    borderRadius: 8,
    color: colors.gray,
  },
  textAddTo: {
    fontSize: 14,
  },
  buttonCheck: {
    padding: 5,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.white,
    borderRadius: 8,
  },
  textCheck: {
    fontSize: 14,
    color: colors.white,
  },
});
