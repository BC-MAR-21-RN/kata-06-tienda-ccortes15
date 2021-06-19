import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';

export const style = StyleSheet.create({
  container: {flex: 1},
  viewTop: {
    paddingTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {fontSize: 40, fontStyle: 'italic', color: colors.white},
  image: {
    width: 100,
    height: 100,
    backgroundColor: colors.white,
    borderRadius: 50,
    marginVertical: 25,
  },
  viewDown: {paddingHorizontal: 20},
  icon: {width: 40, height: 40, tintColor: colors.white},
  text: {
    color: colors.white,
    marginLeft: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {alignItems: 'flex-start', marginVertical: 20},
});
