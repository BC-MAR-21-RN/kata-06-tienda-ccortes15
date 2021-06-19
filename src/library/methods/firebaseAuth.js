import auth from '@react-native-firebase/auth';

const signOut = async navigation => {
  await auth()
    .signOut()
    .then(() => {
      navigation.jumpTo('Shop')}
    );
};

export {signOut};
