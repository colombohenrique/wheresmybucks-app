import { StyleSheet } from "react-native";
import { COLORS, SIZES, FONT } from "../../constants";

const styles = StyleSheet.create({
    page:{
      flex: 1,
      backgroundColor: COLORS.BG_COLOR,
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent:'center',
      margin: '5%',
      marginTop: '15%',
      backgroundColor: COLORS.BG_COLOR_CONTAINER,
      borderRadius: SIZES.border_radius_container,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 5.84,
      elevation: 5,
    },
    content:{
      flex: 1,
      alignItems: 'center',
      justifyContent:'center'
    },
    logoStyle:{
      alignContent: "center",
      alignItems: "center",
      height:'15%',
      marginBottom: 20,
    },
    textStyle:{
      color: COLORS.TEXT_COLOR,
      fontFamily: FONT.regular,
      fontSize: SIZES.text_regular,
      textAlign:'center',
      textAlignVertical: 'center',
    },
    modalView: {
      margin: SIZES.margin_20,
      backgroundColor: 'rgba(0,0,0,0.75)',
      borderRadius: SIZES.borderRadius_50,
      padding: 35,
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      maxHeight: '95%',
    },
    imageStyle: {
      tintColor: COLORS.TEXT_COLOR_SECONDARY,
      marginRight: 5,
    },
});

export default styles;