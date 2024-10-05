import { View, Text } from 'react-native'
import React from 'react'
import CircularProgress from 'react-native-circular-progress-indicator'
import { colors } from '../constants/colors'
import { globalStyles } from '../styles/globalStyles'
import { fontFamilies } from '../constants/fontFamilies'

interface Props {
    color?:string,
    value:number,
    maxValue?:number
}
const CircularComponent = (props:Props) => {
    const {color, value, maxValue} = props
  return (
    <CircularProgress  
        value={value}
        inActiveStrokeColor={colors.green}
        inActiveStrokeOpacity={0.15}
        progressValueColor={colors.text}
        valueSuffix={'%'} 
        titleStyle={{
            fontFamily:fontFamilies.semiBold
        }
        }
    />
  )
}

export default CircularComponent