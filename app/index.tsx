import { Image, Pressable, Text, View } from "react-native";

import React from "react";

const Index = () => {
  return (
    <View>
      <Image source={require("@/assets/images/logo.png")} />
      <Text>Dieta.IA</Text>
      <Text>Sua dieta personalizada com inteligência artificial 🍴</Text>
      <Pressable>
        <Text>Gerar Dieta</Text>
      </Pressable>
    </View>
  );
};

export default Index;
