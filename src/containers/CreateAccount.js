import React from 'react';
import {Text, StatusBar, View} from 'react-native';
import {
  Background,
  IconButton,
  InputContainer,
  PrimaryButton,
} from '../components';
import {colors} from '../library/constants/colors';
import {mail, pass, user, xIcon} from '../library/constants/icons';
import {
  styleCreateAccount,
  styleIcon,
  stylePrimaryButton,
} from '../library/styles';

const CreateAccount = () => {
  return (
    <Background>
      <StatusBar barStyle="light-content" backgroundColor={colors.white} />
      <View style={styleCreateAccount.viewTop}>
        <View>
          <IconButton
            icon={xIcon}
            underlay={colors.white}
            onPress={() => console.log('pressed!')}
            styleButton={styleCreateAccount.iconContainer}
            styleIcon={styleIcon.iconMid}
          />
          <Text style={styleCreateAccount.text}>Create Account</Text>
        </View>
        <View style={styleCreateAccount.inputContainer}>
          <InputContainer icon={user} placeholder="Full Name" />
          <InputContainer icon={mail} placeholder="Email" />
          <InputContainer icon={pass} placeholder="Password" secureTextEntry />
        </View>
        <View>
          <PrimaryButton
            icon
            text="CREATE ACCOUNT"
            styleText={stylePrimaryButton.text}
            styleButton={[stylePrimaryButton.button, styleCreateAccount.button]}
          />
        </View>
      </View>
      <View style={styleCreateAccount.viewDown}>
        <PrimaryButton text="SIGN IN" styleText={stylePrimaryButton.text} />
      </View>
    </Background>
  );
};

export default CreateAccount;
