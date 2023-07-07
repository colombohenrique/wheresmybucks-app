import React, { useState } from "react";
import { SafeAreaView, StyleSheet, useColorScheme } from "react-native";
import SignIn from "./account/SignIn";
import SignUp from "./account/SignUp";
import { Stack } from "expo-router";
import ForgotPassword from "./account/ForgotPassword";

export default function Page() {
  const deviceTheme = useColorScheme();
  return (
    <SignIn/>
  );
}

