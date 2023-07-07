import React, {useState} from "react";
import { SafeAreaView, View, Image, Text, TouchableOpacity } from "react-native";
import styles from "../styles";
import { Stack, useRouter } from "expo-router";
import logoWMB from "../../../assets/logo/logoWMB.png";
import Input from "../components/Input";
import Button from "../components/Button";

export default function ForgotPassword() {
    const router = useRouter();
    
    const [email, setEmail] = useState('');

    const sendEmail = () => {
        console.log(email)
        console.warn("Send Email")
    }

    return (
      <SafeAreaView style={styles.page}>
        <Stack.Screen
            options={{
                headerShown: false,
                title: 'Forgot Password?'
            }}
            
        />

        <View style={styles.container}>
            <Image
                source={logoWMB}
                style={styles.logoStyle}
                resizeMode='contain'
            />
            <Text style={[styles.textStyle, {maxWidth: '80%', marginBottom: 20}]}>Enter your registered email to receive password recovery instructions</Text>
            <Input placeholder='e-mail' iconType="email" value={email} setValue={setEmail}/>
            <Button text='SEND' onPress={sendEmail}/>

            <TouchableOpacity onPress={() => router.back()}>
                <Text style={[styles.textStyle, {marginTop: 20, textDecorationLine:'underline'}]}>Back to Log in</Text>
            </TouchableOpacity>
        </View>

      </SafeAreaView>
    );
  }
  