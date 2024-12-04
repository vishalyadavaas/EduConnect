import { View, Text, Button } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import ScreenWrapper from "../components/ScreenWrapper";

const index = () => {
  const router = useRouter();
  return (
    <ScreenWrapper>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center"}}>
        <Text>index</Text>
        <Button title="Go to Welcome" onPress={() => router.push("welcome")} />
      </View>
    </ScreenWrapper>
  );
};

export default index;
