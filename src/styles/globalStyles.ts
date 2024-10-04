import { StyleSheet } from "react-native";
import { colors } from "../constants/colors";
import { fontFamilies } from "../constants/fontFamilies";

export const globalStyles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.bgColor,
        padding:20,
        paddingTop:32,

    },
    row:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{
        fontFamily:fontFamilies.regular,
        fontSize:16,
        color:colors.desc
    },
    inputContainer:{
        backgroundColor:colors.gray,
        paddingHorizontal:14,
        paddingVertical:14,
        borderRadius:12,

    
    },
    section:{
        marginBottom:16
    }
})