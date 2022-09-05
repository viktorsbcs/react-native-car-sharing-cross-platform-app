import { SafeAreaView, Text, View, Image } from "react-native";
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
    <SafeAreaView className="top-16">
      <Text>
        <View className="bg-emerald-500 flex-row pb-3 items-center mx-4 space-x-2">
          <Image
            source={{
              uri: "https://links.papareact.com/wru",
            }}
            className="h-7 w-7 p-4 rounded-full bg-gray-300"
          />

          <View className="bg-amber-200">
            <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
            <Text className="font-bold text-x">Current Location</Text>
          </View>
        </View>
      </Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
