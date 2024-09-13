import React, { forwardRef, LegacyRef } from "react";

import { View, Text, TextInput, TextInputProps, TouchableOpacity } from 'react-native';
import { style} from "./styles";
import { themas } from "../../global/themes";

import {MaterialIcons, FontAwesome, Octicons} from '@expo/vector-icons'

type IconComponent = React.ComponentType<React.ComponentProps<typeof MaterialIcons>> |
                     React.ComponentType<React.ComponentProps<typeof FontAwesome>> |
                     React.ComponentType<React.ComponentProps<typeof Octicons>>;

type Props = TextInputProps & {
    IconLeft?: IconComponent,
    IconRight?: IconComponent,
    IconLeftName?: string,
    IconRightName?: string,
    title?: string,
    OnIconLeftPress?: () => void,
    OnIconRightPress?: () => void,
}


export const Input = forwardRef((Props:Props,ref: LegacyRef<TextInput>| null    )=>{

    const{IconLeft, IconRight, IconLeftName, IconRightName,title, OnIconLeftPress, OnIconRightPress, ...rest} =Props

    return(
        <>
        <Text style={style.titleInput}>{title}</Text>
         <View style={style.BoxInput}>
            {IconLeft && IconLeftName &&(

            <TouchableOpacity>
                <IconLeft name ={IconLeftName as any} size={28} color={themas.colors.gray} style={style.Icon} />
            </TouchableOpacity>
            
            )}
            
                <TextInput 
                    style={style.input}
                />
                <MaterialIcons
                 name="email"
                 size={20}
                 color={themas.colors.gray}
                />
                </View>
                </>
    )
})