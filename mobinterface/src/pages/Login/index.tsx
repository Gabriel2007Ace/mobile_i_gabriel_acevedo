import React, { useState } from "react";

import { useBatteryLevel } from 'expo-battery';

import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

import {FontAwesome, Octicons} from '@expo/vector-icons'

import {
    StyleSheet,
    Text,
    View,
    Image, 
    TextInput,
    TouchableOpacity
} from 'react-native';

import { style } from "./styles";
import Logo from '../../assets/Logo.png'
import{MaterialIcons} from '@expo/vector-icons'
import { themas } from "../../global/themes";
import { Input } from "../../components/Input";
import { Button } from "../../components/Input/Button";
//import { Input } from "../../components/Input";




export default function Login (){
    return (
        
        <View style={style.container}>
            <View style={style.BoxTop}>
                <Image
                source={Logo}
                style={style.logo}
                resizeMode="contain"
                 />
                 <Text style={style.text}>Bem vindo de volta!</Text>
            </View>
            <View style={style.BoxMid}>
                <Input
                    
                    title="ENDEREÇO DE E-MAIL"
                    IconRight={MaterialIcons}
                    IconRightName="email"
                />
                  <Input
                    title="SENHA"
                    IconRight={Octicons}
                    IconRightName="eye-closed"
                    
                />
                
            </View>
            <View style ={style.BoxBottom}>
                <Button 
                    text="ENTRAR"
                    
                />
            </View>
            <Text style={style.textBotton}>Não tem conta? <Text style={style.textBottonCreate}>Crie agora</Text></Text>
        </View>
    )
}
