/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';

import {LOGO} from '../assets/Imports';

//Import all required component
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import Loader from '../../Components/Loader';
import * as Animatable from 'react-native-animatable';

const RegisterScreen = (props) => {
  let [userEmail, setUserEmail] = useState('');
  let [nameUser, setNameUser] = useState('');
  let [userPassword, setUserPassword] = useState('');
  let [loading, setLoading] = useState(false);
  let [errortext, setErrortext] = useState('');
  const [isSwitchOn, setIsSwitchOn] = useState(true);
  let [isRegistraionSuccess, setIsRegistraionSuccess] = useState(false);

  const handleSubmitPress = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);

      setIsRegistraionSuccess(true);
    }, 5000);
    setErrortext('');
    if (!userEmail) {
      // alert('Please fill Email');
      return;
    }
    if (!nameUser) {
      // alert('Please fill Email');
      return;
    }
    if (!userPassword) {
      // alert('Please fill Password');
      return;
    }
  };

  if (isRegistraionSuccess) {
    return (
      <Animatable.View
        animation="bounceInDown"
        duration={2500}
        style={{
          flex: 1,
          backgroundColor: isSwitchOn ? '#000' : '#fff',

          justifyContent: 'center',
        }}>
        <TouchableOpacity
          onPress={() => setIsSwitchOn(!isSwitchOn ? true : false)}>
          <Image
            source={LOGO.LOGO_SUCESS}
            style={{height: 150, resizeMode: 'contain', alignSelf: 'center'}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress={() => props.navigation.navigate('Login')}>
          <Text style={styles.buttonTextStyle}>Login Now</Text>
        </TouchableOpacity>
      </Animatable.View>
    );
  }

  return (
    <Animatable.View
      style={isSwitchOn ? styles.mainBody : styles.mainBodyWhite}
      animation="fadeInLeftBig"
      duration={1500}>
      <Loader loading={loading} />
      <ScrollView keyboardShouldPersistTaps="handled">
        <View style={{marginTop: 100}}>
          <KeyboardAvoidingView enabled>
            <View
              style={{
                alignSelf: 'center',
                justifyContent: 'center',
                borderRadius: 100,
                backgroundColor: isSwitchOn ? '#fff' : 'rgba(255, 255, 255, 0)',
                width: 200,
                height: 200,
                marginTop: -50,
                elevation: 20,
                marginBottom: 30,
              }}>
              <Animatable.View animation="bounceInDown" duration={3500}>
                <TouchableOpacity
                  onPress={() => setIsSwitchOn(!isSwitchOn ? true : false)}>
                  <Image
                    source={LOGO.LOGO_LOGIN}
                    style={{
                      width: 200,
                      height: 200,
                      resizeMode: 'contain',
                    }}
                  />
                </TouchableOpacity>
              </Animatable.View>
            </View>
            <Animatable.View
              style={styles.SectionStyle}
              animation="bounceInLeft"
              duration={3500}>
              <TextInput
                style={isSwitchOn ? styles.inputStyle : styles.inputStyleWhite}
                onChangeText={(nameUser) => setNameUser(nameUser)}
                underlineColorAndroid={isSwitchOn ? '#FFFFFF' : '#000'}
                placeholder="Name user"
                placeholderTextColor={isSwitchOn ? '#FFFFFF' : '#000'}
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
                blurOnSubmit={false}
              />
            </Animatable.View>
            <Animatable.View
              style={styles.SectionStyle}
              animation="bounceInRight"
              duration={3500}>
              <TextInput
                style={isSwitchOn ? styles.inputStyle : styles.inputStyleWhite}
                onChangeText={(UserEmail) => setUserEmail(UserEmail)}
                underlineColorAndroid={isSwitchOn ? '#FFFFFF' : '#000'}
                placeholder="Enter Email"
                placeholderTextColor={isSwitchOn ? '#FFFFFF' : '#000'}
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
                blurOnSubmit={false}
              />
            </Animatable.View>
            <Animatable.View
              style={styles.SectionStyle}
              animation="bounceInLeft"
              duration={3500}>
              <TextInput
                style={isSwitchOn ? styles.inputStyle : styles.inputStyleWhite}
                onChangeText={(UserPassword) => setUserPassword(UserPassword)}
                underlineColorAndroid={isSwitchOn ? '#FFFFFF' : '#000'}
                placeholder="Enter Password" //12345
                placeholderTextColor={isSwitchOn ? '#FFFFFF' : '#000'}
                keyboardType="default"
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                secureTextEntry={true}
              />
            </Animatable.View>
            {errortext != '' ? (
              <Text style={styles.errorTextStyle}> {errortext} </Text>
            ) : null}
            <Animatable.View animation="bounceIn" duration={4000}>
              <TouchableOpacity
                style={styles.buttonStyle}
                activeOpacity={0.5}
                onPress={() => handleSubmitPress()}>
                <Text style={styles.buttonTextStyle}>REGISTER</Text>
              </TouchableOpacity>
            </Animatable.View>
            <Text
              style={
                isSwitchOn
                  ? styles.registerTextStyle
                  : styles.registerTextStyleBlack
              }
              onPress={() => props.navigation.navigate('Login')}>
              LOGIN
            </Text>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </Animatable.View>
  );
};
export default RegisterScreen;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  mainBodyWhite: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#eee',
  },
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },

  buttonStyle: {
    backgroundColor: '#7DE24E',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: 'white',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: 'white',
  },
  inputStyleWhite: {
    flex: 1,
    color: 'black',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: 'black',
  },
  registerTextStyle: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
  },
  registerTextStyleBlack: {
    color: '#000',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
});
