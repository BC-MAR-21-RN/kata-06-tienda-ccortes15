import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';

export const style = StyleSheet.create({
  viewTop: {
    flex: 4,
    paddingHorizontal: 30,
    paddingBottom: 30,
    backgroundColor: colors.white,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  inputContainer: {
    flex: 1,
    marginVertical: 40,
    justifyContent: 'space-evenly',
  },
  text: {
    textAlign: 'center',
    fontSize: 22,
    color: colors.lightGray,
    fontWeight: 'bold',
  },
});
