import { Header } from "@/components/header";
import { colors } from "@/constants/colors";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Create = () => {
  return (
    <View style={styles.container}>
      <Header step="Passo 2" title="Finalizando dieta" />
      <Text>Create</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 16,
    paddingRight: 16,
  },
});

export default Create;
