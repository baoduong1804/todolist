import { View, Text, TextInput, VirtualizedList, TouchableOpacity } from 'react-native'
import React, { ReactNode } from 'react'
import TitleComponent from './TitleComponent'
import RowComponent from './RowComponent'
import { globalStyles } from '../styles/globalStyles'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

interface Props{
    value:string,
    onChange: (val:string) => void,
    placeholder?:string,
    title?:string,
    prefix?:ReactNode,
    affix?:ReactNode,
    allowClear?:boolean,
    multible?:boolean,
    numberOfLine?:number
}
const InputComponent = (props:Props) => {
    const {value,onChange, placeholder, title, prefix, affix, allowClear, multible, numberOfLine} = props

  return (
    <View style={{marginBottom:16}}>
      {title && <TitleComponent text={title}/>}
      <RowComponent
        styles={[globalStyles.inputContainer,{
            minHeight:multible && numberOfLine ? 32*numberOfLine : 32,
            alignItems:'flex-start',
            marginTop:0
        }]}
      >
        {prefix&&prefix}
        <View style={{flex:1,
            paddingLeft:prefix?10:0,
            paddingRight:affix?10:0
        }}>
            <TextInput
                style={[globalStyles.text,{
                    flex:1,
                    textAlignVertical: 'top'
                }]}
                placeholder={placeholder ?? ''}
                placeholderTextColor={"#676767"}
                value={value}
                onChangeText={val => onChange(val)}
                numberOfLines={numberOfLine}
                multiline={multible}
            />
        </View>
        {affix&&affix}
        {allowClear && value && (
            <TouchableOpacity 
                onPress={()=> onChange('')}
            >
                <MaterialIcons name="clear" size={24} color="white" />
            </TouchableOpacity>

        )}
      </RowComponent>
    </View>
  )
}

export default InputComponent