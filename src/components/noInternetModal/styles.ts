import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  background-color: #222;
  opacity: 60;
`;
export const ModalView = styled.View`
  background-color: #fff;
  padding: 20px 16px;
  padding-bottom: 40px;
  max-height: 200px;
  width: 100%;
`;
export const Text = styled.Text`
  font-family: Roboto-Regular;
  font-size: 20px;
  color: #000;
  font-weight: 700;
`;
export const TextDescription = styled.Text`
  font-family: Roboto-Regular;
  font-size: 16px;
  color: #555;
  margin-top: 14px;
  text-align: left;
  margin-bottom: 10px;
`;
export const Button = styled.TouchableOpacity`
  background-color: #000;
  padding: 12px 16px;
  width: 100%;
  align-items: center;
  margin-top: 10px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 20px;
`;
