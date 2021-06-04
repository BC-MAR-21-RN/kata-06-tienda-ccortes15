import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';

export const style = StyleSheet.create({
  container: {
    backgroundColor: colors.greenYellow,
    width: 40,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 20,
    alignItems: 'center',
    position: 'absolute',
    alignSelf: 'flex-end',
  },
  quant: {
    fontSize: 18,
    color: colors.white,
  },
  text: {
    fontSize: 12,
    color: colors.white,
    marginTop: 10,
  },
});
