import styled from 'styled-components/native';
import React from 'react';
import {Dimensions} from 'react-native';

export const Container = styled.SafeAreaView`
  justify-content: center;
  align-items: center;
  background-color: #222;
  flex: 1;
`;

export const ViewInputs = styled.View`
  width: 90%;
  margin-top: -150px;
  flex: 1;
`;

export const ViewForget = styled.TouchableOpacity`
  justify-content: flex-end;
  align-items: flex-end;
`;
export const ViewImage = styled.View`
  border-radius: 100px;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
  height: 10px;
`;

export const Text = styled.Text``;
export const TextButton = styled.Text``;
export const TextTitle = styled.Text``;
export const TextForget = styled.Text`
  color: #fff;
  font-style: italic;
  font-weight: bold;
`;
export const TextErr = styled.Text``;

export const Image = styled.Image`
  background-color: #fff;
  border-radius: 100px;
`;

export const ButtonLogin = styled.TouchableOpacity`
  background-color: #fff;
  height: 50px;
  width: 90%;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  position: absolute;
  bottom: 60px;
  margin: 10px;
`;
export const ButtonRegister = styled.TouchableOpacity`
  background-color: #fff;
  width: 90%;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  position: absolute;
  bottom: 0px;
  margin: 10px;
`;
