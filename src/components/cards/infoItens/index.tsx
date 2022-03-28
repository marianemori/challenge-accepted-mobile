import React from 'react';
import * as S from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IonIcons from 'react-native-vector-icons/Ionicons';
import FeatherIcons from 'react-native-vector-icons/Feather';


const InfoItens = ({ item }: any) => {
  return (
    <>
      <S.Container>
        <S.TextDescription>Temperatura</S.TextDescription>
        <S.FlexRow>
          <Icon name="arrow-up" size={18} color={'#C72F2F'}></Icon>
          <S.TextMaxTemp>{item.temperature.max}º</S.TextMaxTemp>
          <Icon name="arrow-down" size={18} color={'#0679BE'}></Icon>
          <S.TextMinTemp>{item.temperature.min}º</S.TextMinTemp>
        </S.FlexRow>
      </S.Container>

      <S.Container>
      <S.TextDescription>Umidade</S.TextDescription>
        <S.FlexRow>
          <Icon name="arrow-up" size={18} color={'#C72F2F'}></Icon>
          <S.TextMaxTemp>{item.humidity.max}</S.TextMaxTemp>
          <Icon name="arrow-down" size={18} color={'#0679BE'}></Icon>
          <S.TextMinTemp>{item.humidity.min}</S.TextMinTemp>
        </S.FlexRow>
      </S.Container>
      <S.Container>
        <S.TextDescription>Volume de chuva</S.TextDescription>
        <S.FlexRow>
          <IonIcons name="rainy" size={20} color={'#0679BE'}></IonIcons>
          <S.TextValue>{item.rain.precipitation}</S.TextValue>
        </S.FlexRow>
      </S.Container>
      <S.Container>
        <S.TextDescription>Velocidade do vento</S.TextDescription>
        <S.FlexRow>
          <FeatherIcons name="wind" size={20} color={'#434343'}></FeatherIcons>
          <S.TextValue>{item.wind.velocity_avg}</S.TextValue>
        </S.FlexRow>
      </S.Container>
    </>

  )
};

export default InfoItens;
