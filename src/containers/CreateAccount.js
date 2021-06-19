import React from 'react';
import {Text, StatusBar, View} from 'react-native';
import {
  Background,
  IconButton,
  InputContainer,
  ModalComponent,
  PrimaryButton,
} from '../components';
import {arrowRigt, mail, pass, user, xIcon} from '../library/constants/icons';
import {
  styleCreateAccount,
  styleIcon,
  stylePrimaryButton,
} from '../library/styles';
import {useState} from 'react';
import useDbController from '../library/hooks/useDbController';

const CreateAccount = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const {visible, loading, message, errors, confirmed, createAccount} =
    useDbController({
      email,
      userName,
      password,
      navigation,
      setUserName,
      setPassword,
      setEmail,
    });

  return (
    <Background>
      <StatusBar backgroundColor={'transparent'} translucent />
      <View style={styleCreateAccount.viewTop}>
        <View>
          <IconButton
            icon={xIcon}
            onPress={() => navigation.jumpTo('Shop')}
            styleButton={styleCreateAccount.iconContainer}
            styleIcon={styleIcon.iconMid}
          />
          <Text style={styleCreateAccount.text}>Create Account</Text>
        </View>
        <View style={styleCreateAccount.inputContainer}>
          <InputContainer
            icon={user}
            placeholder="Full Name"
            value={userName}
            onChangeText={setUserName}
          />
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
            secureTextEntry
            onChangeText={setPassword}
          />
        </View>
        <View>
          <PrimaryButton
            icon={arrowRigt}
            text="CREATE ACCOUNT"
            styleText={stylePrimaryButton.text}
            styleButton={[stylePrimaryButton.button, styleCreateAccount.button]}
            onPress={() => createAccount(email, password, userName, navigation)}
          />
        </View>
      </View>
      <View style={styleCreateAccount.viewDown}>
        <PrimaryButton
          text="SIGN IN"
          styleText={stylePrimaryButton.text}
          onPress={() => navigation.jumpTo('SignIn')}
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

export default CreateAccount;
