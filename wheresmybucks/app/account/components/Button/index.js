import {TouchableOpacity, Text, StyleSheet } from "react-native";3
import { COLORS, SIZES, FONT } from "../../../constants";

export default function Button({text, disabled = false, onPress}) {
    return (
        <TouchableOpacity 
            disabled={disabled}
            style={[styles.buttonStyle, disabled ? {backgroundColor: COLORS.DISABLE_COLOR} : {backgroundColor: COLORS.GREEN_PRIMARY} ]}
            onPress={onPress}
        >
            <Text style={styles.textButton}>{text}</Text>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    buttonStyle: {
      margin: 15,
      marginTop: 30,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: COLORS.GREEN_PRIMARY,
      borderRadius: SIZES.border_radius_button_account,
      minWidth: 250,
      minHeight: 50,
    },
    textButton: {
      color: COLORS.TEXT_COLOR,
      fontFamily: FONT.bold,
      fontSize: SIZES.text_button,
      padding: SIZES.padding,
    }
});

  