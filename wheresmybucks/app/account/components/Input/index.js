import { View, TextInput, Image, StyleSheet } from "react-native";
import { COLORS, SIZES, FONT } from "../../../constants";

import emailIcon from '../../../../assets/icons/alternate_email.png';
import lockIcon from '../../../../assets/icons/lock.png';
import personIcon from '../../../../assets/icons/person.png';

export default function Input({placeholder, isPassword = false, iconType = 'default', value, setValue}) {
    const Icons = {
        user: personIcon,
        email: emailIcon,
        password: lockIcon,
        default: <></>,
    }
    
    const ReturnIconByIconType = (iconType) => {
        return Icons[iconType] || Icons.default
    }

    return (
        <View style={styles.sectionStyle}>
            <Image
                source={ReturnIconByIconType(iconType)}
                style={styles.imageStyle}
            />
            <TextInput
                placeholder={placeholder}
                placeholderTextColor={COLORS.TEXT_COLOR_SECONDARY}
                style={styles.inputStyle}
                secureTextEntry={isPassword}
                value={value}
                onChangeText={setValue}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    sectionStyle: {
      flexDirection: 'row',
      alignItems: 'center',
      margin:5,
    },
    imageStyle: {
      height: 25,
      width: 25,
      position: "absolute",
      tintColor: COLORS.TEXT_COLOR_SECONDARY,
      marginLeft: 10,
    },
    inputStyle: {
      borderRadius: SIZES.border_radius_input_account,
      padding: SIZES.padding,
      paddingLeft: 40,
      borderWidth: 1,
      borderColor: COLORS.BG_COLOR,
      backgroundColor: 'transparent',
      color: COLORS.TEXT_COLOR,
      fontFamily: FONT.regular,
      minWidth: '85%',
      maxWidth: '90%',
    }
});
