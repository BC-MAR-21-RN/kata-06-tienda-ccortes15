import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';

export const style = StyleSheet.create({
  card: {
    width: '27%',
    marginTop: 15,
  },
  item: {
    width: '100%',
    borderRadius: 5,
  },
  coverImage: {
    width: '100%',
    height: 100,
  },
  viewDetails: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  viewDown: {
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.gray,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.lightGray,
  },
});
