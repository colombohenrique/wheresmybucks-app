import React, {useState} from "react";
import { View, Image, TouchableOpacity, Text, Modal, Pressable, ScrollView, SafeAreaView} from "react-native";
import Input from "../components/Input";
import Button from "../components/Button";
import styles from "../styles";
import logoWMB from "../../../assets/logo/logoWMB.png";
import { COLORS, FONT } from "../../constants";
import { Stack, useRouter } from "expo-router";

import checked from '../../../assets/icons/task_alt.png';
import radio_button_unchecked from '../../../assets/icons/radio_button_unchecked.png';

const SignUp = () => {
  const router = useRouter();
  
  const [isSelected, setSelection] = useState(false);
  const [termsOfUseVisible, setTermsOfUseVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState(''); 

  const ReturnIconBySelection = (isSelected) => {
    return isSelected ? checked : radio_button_unchecked
  }
  const onCheck = () => {
    setSelection(!isSelected)
  }

  const onRegisterPress = () => {
    console.log(username)
    console.log(email)
    console.log(password)
    console.warn("Sign UP")
  }

  return (
    <SafeAreaView style={styles.page}>
        <Stack.Screen
            options={{
              headerShown: false,
              title: 'Sign UP - WMB'
            }}
        />

        <View style={styles.container}>
            <Modal
            animationType="slide"
            transparent={true}
            visible={termsOfUseVisible}
            onRequestClose={() => setTermsOfUseVisible(!termsOfUseVisible)}
            >
            <View style={styles.modalView}>
                <ScrollView style={{alignContent:'center'}}>
                <Text 
                    style={styles.textStyle}
                >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ante ipsum, gravida a turpis ut, faucibus semper justo. Nulla facilisi. Maecenas id lectus at elit consequat dignissim ut et neque. Vivamus eu mauris magna. Nunc in sem vel lorem varius varius ac rutrum augue. Nulla euismod magna porttitor, tristique dolor vitae, porta lectus. Vestibulum pellentesque magna vitae mi posuere consequat. Nulla porttitor augue a porttitor aliquam. Etiam lobortis imperdiet aliquet. Etiam venenatis lectus vel neque auctor, eu tincidunt augue euismod. In eu libero quis dolor dignissim ornare sed nec lacus. Integer rhoncus lectus ac felis rhoncus tempus. Pellentesque eu gravida lectus. Duis interdum sed metus ut imperdiet. Pellentesque nec justo laoreet, scelerisque ante at, tristique quam. Maecenas accumsan feugiat sapien, ac varius nulla elementum in. Curabitur et purus gravida, congue ante quis, faucibus dui. Quisque id felis nec urna fermentum posuere dapibus et urna. In condimentum, mi vel dapibus gravida, dui sapien varius massa, at porttitor lectus ipsum in leo. Vivamus pretium at dolor eget rhoncus. Fusce ac gravida orci. Curabitur malesuada justo scelerisque leo porta congue. Vestibulum id quam odio. Fusce aliquet, metus vitae pretium pharetra, lectus turpis sagittis metus, viverra egestas eros nunc eu velit. Nulla bibendum vulputate ligula sit amet vulputate. Proin fermentum arcu non ex semper, non tincidunt purus ultrices. Aenean a sem sed mauris euismod euismod. Nunc scelerisque massa lectus. Sed vel congue libero, nec consectetur arcu. Maecenas ut gravida odio. Vestibulum tempus arcu id molestie pellentesque. Mauris pellentesque, diam vestibulum ultricies consectetur, ipsum est sodales tortor, feugiat mollis elit nibh sit amet eros. Vivamus diam risus, sodales sit amet lobortis nec, scelerisque nec purus. Nullam maximus tincidunt egestas. Donec elementum ligula sit amet vehicula laoreet. Donec in semper dolor. Proin efficitur tincidunt egestas. Proin quis velit vitae sapien posuere ultricies vitae eget tellus. Praesent sit amet justo metus. Suspendisse fringilla sem eu hendrerit gravida. Nam porttitor magna at tortor interdum laoreet. Duis consequat porta venenatis. Vivamus et auctor elit. Pellentesque non mauris quis mi semper feugiat quis quis dui. Aliquam vitae egestas sem. In eget odio a ex tempus scelerisque faucibus nec nisl. Aliquam dignissim auctor sem et tempor. Aenean mollis arcu faucibus massa maximus condimentum. Nunc felis diam, mollis eu placerat non, iaculis non dui. Vivamus fermentum felis quis nisl congue, aliquam tempor leo euismod. Proin pulvinar dui quis luctus dapibus. Suspendisse erat ex, dapibus sit amet cursus nec, laoreet vitae purus. Integer sed felis congue, eleifend augue vitae, interdum orci. Praesent nec elit risus. Sed consectetur sagittis sagittis. Nulla vulputate tincidunt lacus nec pharetra. Mauris efficitur arcu at consectetur viverra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris dolor purus, ullamcorper vel nisl et, dignissim luctus ante.
                </Text>
                <Pressable
                    onPress={() => setTermsOfUseVisible(!termsOfUseVisible)}
                    style={{alignItems:'center',  height:'5%', marginTop:'5%'}}              
                >
                    <Text style={[styles.textStyle, {flex: 1, textDecorationLine:"underline"}]}>Close</Text>
                </Pressable>
                </ScrollView>
            </View>
        </Modal>

        <View style={styles.content}>
          <Image
            source={logoWMB}
            style={styles.logoStyle}
            resizeMode='contain'
          />

          <Input placeholder='username' iconType='user' value={username} setValue={setUsername}/>
          <Input placeholder='e-mail' iconType='email' value={email} setValue={setEmail}/>
          <Input placeholder='password' isPassword={true} iconType='password' value={password} setValue={setPassword}/>

          <View style={{flexDirection:"row", alignItems:"center", marginTop:15}}>
            <TouchableOpacity
              onPress={onCheck}
              style={{flexDirection:"row", alignItems:"center"}}
            >
              <Image
                source={ReturnIconBySelection(isSelected)}
                style={styles.imageStyle}
              />
              <Text style={styles.textStyle}>I accept the <TouchableOpacity
                    onPress={() => setTermsOfUseVisible(!termsOfUseVisible)}
                >
                    <Text style={[styles.textStyle, {
                        textDecorationLine: 'underline',
                        color: COLORS.GREEN_PRIMARY,
                        fontFamily: FONT.medium, 
                        }]}
                    >terms of use</Text>
                </TouchableOpacity>
            </Text>
            </TouchableOpacity>
          </View>

          <Button text='SIGN UP' disabled={!isSelected} onPress={onRegisterPress}/>

          <View style={{flexDirection:"row", alignItems:"center"}}>
            <Text style={styles.textStyle}>Already have an account? <TouchableOpacity
                    onPress={() => router.back()}
                >
                    <Text style={[styles.textStyle, {
                        textDecorationLine: 'underline',
                        color: COLORS.GREEN_PRIMARY,
                        fontFamily: FONT.medium, 
                        }]}
                    >Log in</Text>
                </TouchableOpacity>
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default SignUp
