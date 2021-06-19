import React from 'react';
import {Text, View, StatusBar} from 'react-native';
import {
  Background,
  InputContainer,
  ModalComponent,
  PrimaryButton,
} from '../components';
import {arrowRigt, mail, pass} from '../library/constants/icons';
import {
  styleCreateAccount,
  stylePrimaryButton,
  styleSignIn,
} from '../library/styles';
import {useState} from 'react';
import useDbController from '../library/hooks/useDbController';

const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {visible, message, loading, errors, confirmed, signin} =
    useDbController({
      email,
      password,
      setEmail,
      setPassword,
      navigation,
    });

  return (
    <Background>
      <StatusBar backgroundColor={'transparent'} />
      <View style={styleSignIn.viewTop}>
        <View>
          <Text style={styleCreateAccount.text}>Sign In</Text>
        </View>
        <View style={styleSignIn.inputContainer}>
          <InputContainer
            icon={mail}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
          <InputContainer
            icon={pass}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <Text style={styleSignIn.text}>Forgot Password?</Text>
        </View>
        <View>
          <PrimaryButton
            icon={arrowRigt}
            text="SIGN IN"
            styleText={stylePrimaryButton.text}
            styleButton={[stylePrimaryButton.button, styleCreateAccount.button]}
            onPress={signin}
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
      <ModalComponent
        visible={visible}
        msg={message}
        isLoading={loading}
        isError={errors}
        confirmed={confirmed}
      />
    </Background>
  );
};

export default SignIn;
