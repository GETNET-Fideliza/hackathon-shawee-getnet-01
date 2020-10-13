import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Text, Image, TouchableOpacity, FlatList, SafeAreaView} from 'react-native'
import styled from 'styled-components'

import LogoImg from './assets/logo.png'
import UserImg from './assets/user.png'
import SettingsImg from './assets/settings.png'
import FeedbackImg from './assets/feedbacks.png'
import PromotionsImg from './assets/promotions.png'

const Container = styled.View`
    background-color: #FD0102;
    flex: 1;
    width: 100%;
    `;

const Header = styled.View`
    background-color: #FFF;
    flex: 1;
    width: 100%;
    border-bottom-left-radius: 300px ;
    border-bottom-right-radius: 1000px;
    justify-content: center;
    align-items: center;
    `;

const Content = styled.SafeAreaView`
flex: 1;
background-color: #FD0102;
justify-content: center;
align-items: center;
`;

const DataMenu = [
  {
    id: "1",
    title: "CLIENTES",
    img: UserImg
  },
  {
    id: "2",
    title: "PROMOÇÕES",
    img: PromotionsImg
  },
  {
    id: "3",
    title: "FEEDBACKS",
    img: FeedbackImg
  },
  {
    id: "4",
    title: "CONFIGURAÇÕES",
    img: SettingsImg
  },
]

export default function App() {
  return (
    <Container > 
    <Header >
      <Image source={LogoImg} height={50} width={50}/>
    </Header>
    <Content>
      <FlatList
        data={DataMenu}
        keyExtractor={(item) => item.id }
        renderItem={({item}) => (
          <TouchableOpacity style={{justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row',marginTop:15}} activeOpacity={0.5}>
            <Image source={item.img} height={25} width={25}/>
            <Text style={{color: '#FFF', alignItems:'', padding: 10, margin:10, marginTop:35, fontSize : 18}}>{item.title}</Text>
          </TouchableOpacity>
  )}
        />
    </Content>
    </Container>
  );
}

