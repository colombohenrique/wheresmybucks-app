import React from "react";
import { SafeAreaView, View, Text, Image, TouchableOpacity } from "react-native";
import logoWMB from "../../../assets/logo/logoWMB.png";
import styles from "../styles";
import { Stack, useRouter } from "expo-router";
import Input from "../components/Input";
import Button from "../components/Button";
import { useState } from "react";
import { COLORS, FONT } from "../../constants";

export default function SignIn() {
    const router = useRouter();
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 

    const signIn = () => {
        console.log(email)
        console.log(password)
        console.warn("Sign IN")
    }
    return(
        <SafeAreaView style={styles.page}>
            <Stack.Screen
                options={{
                    headerShown: false,
                    title: 'Login - WMB',
                }}
            />
            <View style={styles.container}>
                <Image
                    source={logoWMB}
                    style={styles.logoStyle}
                    resizeMode='contain'
                />
                    
                <Input placeholder='e-mail' iconType="email" value={email} setValue={setEmail}/>
                <Input placeholder='password' isPassword={true} iconType='password' value={password} setValue={setPassword}/>

                <View >
                    <TouchableOpacity onPress={() => router.push('account/ForgotPassword')}>
                        <Text style={[styles.textStyle, {textDecorationLine:'underline', marginTop: 5}]}>Forgot password?</Text>
                    </TouchableOpacity>
                </View>
                    
                <Button text='SIGN IN' onPress={signIn}/>

                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.textStyle}>First time here? <TouchableOpacity
                        onPress={() => router.push('account/SignUp')}
                        >
                            <Text style={[styles.textStyle, {
                                textDecorationLine: 'underline',
                                color: COLORS.GREEN_PRIMARY,
                                fontFamily: FONT.medium, 
                                }]}
                            >Create your account</Text>
                        </TouchableOpacity>
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    );
}




