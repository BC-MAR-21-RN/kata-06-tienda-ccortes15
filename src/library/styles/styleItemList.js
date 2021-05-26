import {Dimensions, StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: Dimensions.get('screen').width,
    flex: 1,
  },
  flex: {
    flex: 1,
  },
  viewTop: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
  },
  viewMid: {
    paddingHorizontal: 10,
  },
  viewDown: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 10,
  },
  nameProduct: {
    color: 'gray',
    fontSize: 22,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    color: 'gray',
  },
  icon: {
    tintColor: 'gray',
  },
  image: {
    width: 150,
    height: 150,
  },
});
