import React from 'react';
import {Text, View, StatusBar} from 'react-native';
import {Background, InputContainer, PrimaryButton} from '../components';
import {colors} from '../library/constants/colors';
import {mail, pass} from '../library/constants/icons';
import {
  styleCreateAccount,
  stylePrimaryButton,
  styleSignIn,
} from '../library/styles';

const SignIn = () => {
  return (
    <Background>
      <StatusBar barStyle="light-content" backgroundColor={colors.white} />
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
            icon
            text="SIGN IN"
            styleText={stylePrimaryButton.text}
            styleButton={[stylePrimaryButton.button, styleCreateAccount.button]}
          />
        </View>
      </View>
      <View style={styleCreateAccount.viewDown}>
        <PrimaryButton
          text="CREATE ACCOUNT"
          styleText={stylePrimaryButton.text}
        />
      </View>
    </Background>
  );
};

export default SignIn;
