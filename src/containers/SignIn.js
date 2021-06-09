import React from 'react';
import {Text, View, StatusBar} from 'react-native';
import {Background, InputContainer, PrimaryButton} from '../components';
import {arrowRigt, mail, pass} from '../library/constants/icons';
import {
  styleCreateAccount,
  stylePrimaryButton,
  styleSignIn,
} from '../library/styles';

const SignIn = ({navigation}) => {
  return (
    <Background>
      <StatusBar backgroundColor={'transparent'} />
      <View style={styleSignIn.viewTop}>
        <View>
          <Text style={styleCreateAccount.text}>Sign In</Text>
        </View>
        <View style={styleSignIn.inputContainer}>
          <InputContainer icon={mail} placeholder="Email" />
          <InputContainer icon={pass} placeholder="Password" secureTextEntry />
          <Text style={styleSignIn.text}>Forgot Password?</Text>
        </View>
        <View>
          <PrimaryButton
            icon={arrowRigt}
            text="SIGN IN"
            styleText={stylePrimaryButton.text}
            styleButton={[stylePrimaryButton.button, styleCreateAccount.button]}
            onPress={() => navigation.jumpTo('Home')}
          />
        </View>
      </View>
      <View style={styleCreateAccount.viewDown}>
        <PrimaryButton
          text="CREATE ACCOUNT"
          styleText={stylePrimaryButton.text}
          onPress={() => navigation.jumpTo('CreateAccount')}
        />
      </View>
    </Background>
  );
};

export default SignIn;
