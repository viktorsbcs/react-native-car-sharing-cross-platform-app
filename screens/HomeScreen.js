import { SafeAreaView, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="top-10">
      <Text className="text-green-500">
        Open up App.js to start working on your app!
      </Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
