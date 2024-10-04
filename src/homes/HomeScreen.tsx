import { View, Text } from 'react-native'
import React from 'react'
import Container from '../Components/Container'
import { globalStyles } from '../styles/globalStyles'
import RowComponent from '../Components/RowComponent'
import SectionComponent from '../Components/SectionComponent'
import TextComponent from '../Components/TextComponent'
import TitleComponent from '../Components/TitleComponent'
import { colors } from '../constants/colors'
import CardComponent from '../Components/CardComponent'

const HomeScreen = () => {
  return (
    <Container>
        <SectionComponent>
            <RowComponent justify='space-between'>
                <TextComponent text='Icon'/>
                <TextComponent text='Icon'/>
            </RowComponent>
        </SectionComponent>

        <SectionComponent>
                <TextComponent text='Hi, VietNam'/>
                <TitleComponent text='Be Productive today'/>
        </SectionComponent>   

        <SectionComponent>
            <RowComponent styles={[globalStyles.inputContainer]} onPress={()=>alert()}>
                <TextComponent text='Search'/>
            </RowComponent>
        </SectionComponent>

        <SectionComponent>
            <CardComponent>
                <RowComponent>
                    <View style={{flex:1}}>
                        <TitleComponent text="Task Progress"/>
                        <TextComponent text='30/40 task done'/>
                    </View>
                    <View>
                        <TextComponent text='CircleChar'/>
                    </View>
                </RowComponent>
            </CardComponent>
        </SectionComponent>
    </Container>
  )
}

export default HomeScreen