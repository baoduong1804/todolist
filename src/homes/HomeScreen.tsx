import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Container from "../Components/Container";
import { globalStyles } from "../styles/globalStyles";
import RowComponent from "../Components/RowComponent";
import SectionComponent from "../Components/SectionComponent";
import TextComponent from "../Components/TextComponent";
import TitleComponent from "../Components/TitleComponent";
import { colors } from "../constants/colors";
import CardComponent from "../Components/CardComponent";
import AntDesign from "@expo/vector-icons/AntDesign";
import Octicons from "@expo/vector-icons/Octicons";
import TagComponent from "../Components/TagComponent";
import SpaceComponent from "../Components/SpaceComponent";
import CircularComponent from "../Components/CircularComponent";
import CardImageComponent from "../Components/CardImageComponent";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import AvatarGroup from "../Components/AvatarGroup";
import ProgressBarComponent from "../Components/ProgressBarComponent";
import Ionicons from '@expo/vector-icons/Ionicons';

const HomeScreen = () => {
  return (
    <View style={{flex:1}}>

    <Container>
      {/* Header */}
      <SpaceComponent height={16}/>
      <SectionComponent>
        <RowComponent justify="space-between">
          <AntDesign name="appstore-o" size={24} color="white" />
          <Octicons name="bell" size={24} color="white" />
        </RowComponent>
      </SectionComponent>
      {/* Title */}
      <SectionComponent>
        <TextComponent text="Hi, VietNam" />
        <TitleComponent text="Be Productive today" />
      </SectionComponent>
      {/* Search */}
      <SectionComponent>
        <RowComponent
          styles={[globalStyles.inputContainer]}
          onPress={() => alert()}
        >
          <TextComponent text="Search" />
          <AntDesign name="search1" size={24} color="white" />
        </RowComponent>
      </SectionComponent>
      {/* Task Progress */}
      <SectionComponent>
        <CardComponent>
          <RowComponent>
            <View style={{ flex: 1 }}>
              <TitleComponent text="Task Progress" />
              <TextComponent text="30/40 task done" />
              <SpaceComponent height={12} />
              <RowComponent justify="flex-start">
                <TagComponent text="March 22" />
              </RowComponent>
            </View>
            <View>
              <CircularComponent value={80} />
            </View>
          </RowComponent>
        </CardComponent>
      </SectionComponent>
      {/* Cards */}
      <SectionComponent>
        <RowComponent styles={{ alignItems: "flex-start"}}>
          <View style={{ flex: 1}}>
            <CardImageComponent>
              <TouchableOpacity
                onPress={() => {}}
                style={[globalStyles.iconContainer]}
              >
                <MaterialCommunityIcons
                  name="pencil-plus-outline"
                  size={24}
                  color="white"
                />
              </TouchableOpacity>
              <TitleComponent text="UX Design" />
              <TextComponent text="Tag management mobile app" />
              <View style={{marginVertical:28}}>
                <AvatarGroup uidsLength={10} />
              </View>
              <ProgressBarComponent percent={70} size="large"/>
              <TextComponent text="Due, 2023 Match 03"/>
            </CardImageComponent>
          </View>
          <SpaceComponent width={16} />

          <View style={{ flex: 1 }}>
            <CardImageComponent color="#41C5FECC">
              <TouchableOpacity
                onPress={() => {}}
                style={[globalStyles.iconContainer]}
              >
                <MaterialCommunityIcons
                  name="pencil-plus-outline"
                  size={24}
                  color="white"
                />
              </TouchableOpacity>
              <TitleComponent text="API Payment"/>
              <AvatarGroup uidsLength={4}/>
              <ProgressBarComponent percent={20}/>
            </CardImageComponent>
             <SpaceComponent height={16} />

            <CardImageComponent color="#FF983ECC">
              <TouchableOpacity
                onPress={() => {}}
                style={[globalStyles.iconContainer]}
              >
                <MaterialCommunityIcons
                  name="pencil-plus-outline"
                  size={24}
                  color="white"
                />
              </TouchableOpacity>
              <TitleComponent text="Update work"/>
              <TextComponent text="Revision home page"/>
            </CardImageComponent>
          </View>
        </RowComponent>
      </SectionComponent>
      {/* Urgents tasks */}
      <SectionComponent>
        <TitleComponent text="Urgents tasks"/>
        <CardComponent>
          <RowComponent>
            <CircularComponent value={50} radius={40} />
            <View style={{flex:1,paddingLeft:20}}>
              <TextComponent text="Title of task"/>
            </View>
          </RowComponent>
        </CardComponent>
      </SectionComponent>
    </Container>

    {/* Add New Tasks */}
    <View style={{
       position:'absolute',
       bottom:0,
       right:0,
       left:0,
       paddingVertical:20,
       paddingHorizontal:60
    }}>
      <TouchableOpacity activeOpacity={1} style={
       [globalStyles.row,{
        backgroundColor:colors.blue,
        padding:10,
        borderRadius:100
       }]
      }>
        <TextComponent text="Add new task" flex={0}/>
        <Ionicons name="add" size={24} color="white" />
      </TouchableOpacity>
    </View>
    </View>

  );
};

export default HomeScreen;
