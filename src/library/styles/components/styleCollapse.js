import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';

export const style = StyleSheet.create({
  header: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textHeader: {
    fontSize: 24,
    color: colors.dark,
  },
  iconCollapse: {
    height: 30,
    width: 30,
    tintColor: colors.gray,
  },
  body: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  rowProduct: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  flex1: {
    flex: 1,
  },
  flex2: {
    flex: 2,
    alignItems: 'flex-end',
  },
  flexEnd: {
    flex: 1,
    alignItems: 'flex-end',
  },
  text: {
    fontSize: 20,
    color: colors.dark,
  },
  textGray: {
    fontSize: 20,
    color: colors.lightGray,
  },
  viewDown: {
    marginVertical: 20,
  },
  rowDirection: {
    flexDirection: 'row',
  },
  iconContainer: {
    backgroundColor: colors.green,
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  iconRounded: {
    height: 15,
    width: 15,
    tintColor: colors.white,
  },
  shippedContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  shipped: {
    fontSize: 20,
    color: colors.green,
  },
});
