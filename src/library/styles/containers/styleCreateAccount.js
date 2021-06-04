import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';

export const style = StyleSheet.create({
  viewTop: {
    minHeight: '85%',
    paddingHorizontal: 30,
    paddingBottom: 30,
    backgroundColor: colors.white,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  viewDown: {
    flex: 1,
    justifyContent: 'center',
  },
  iconContainer: {
    alignSelf: 'flex-end',
  },
  text: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.gray,
    marginVertical: 30,
  },
  inputContainer: {
    flex: 1,
    marginVertical: 40,
    justifyContent: 'space-between',
  },
  button: {
    borderRadius: 15,
  },
});
