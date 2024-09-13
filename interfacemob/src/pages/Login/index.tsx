import React, { useState } from "react";



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
import { themas } from "../../global/themas";

const [email,setEmail] =useState('');
const [password, setPassword] =useState('');


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
                <Text style={style.titleInput}>ENDEREÇO DE E-MAIL</Text>
                <View style={style.BoxInput}>
                <TextInput 
                style={style.input}
                />
                <MaterialIcons 
                 name="email"
                 size={20}
                 color={themas.colors.gray}
                />
                </View>
                
                <Text style={style.titleInput}>SENHA</Text>
                <View style={style.BoxInput}>
                <TextInput 
                style={style.input}
                value={email}
                />
                <MaterialIcons 
                 name="remove-red-eye"
                 size={20}
                 color={themas.colors.gray}
                />
                </View>
            </View>
            <View style ={style.BoxBottom}>
                <TouchableOpacity style={style.button}>
                    <Text style={style.textButton}>ENTRAR</Text>
                </TouchableOpacity>
            </View>
            <Text style={style.textBotton}>Não tem conta? <Text style={style.textBottonCreate}>Crie agora</Text></Text>
        </View>
    )
}