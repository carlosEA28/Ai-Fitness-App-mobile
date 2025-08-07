import { Header } from "@/components/header";
import Input from "@/components/input";
import { colors } from "@/constants/colors";
import { InitialFormData, Initialschema } from "@/schemas/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { router } from "expo-router";
import React from "react";
import { useForm } from "react-hook-form";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useDataStore } from "../store/data";

const Step = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<InitialFormData>({
    resolver: zodResolver(Initialschema),
  });

  const { setPageOne } = useDataStore();

  function handleCreate(data: InitialFormData) {
    setPageOne({ ...data });
    router.push("/create");
  }

  return (
    <View style={styles.container}>
      <Header step="Passo 1" title="Vamos Começar" />
      <ScrollView style={styles.content}>
        <Text style={styles.lable}>Nome:</Text>
        <Input
          name="name"
          control={control}
          placeholder="Digite seu nome..."
          error={errors.name?.message}
          keyboardType="default"
        />

        <Text style={styles.lable}>Peso Atual:</Text>
        <Input
          name="weight"
          control={control}
          placeholder="Digite seu peso atual..."
          error={errors.weight?.message}
          keyboardType="numeric"
        />

        <Text style={styles.lable}>Altura Atual:</Text>
        <Input
          name="height"
          control={control}
          placeholder="Digite sua altura atual..."
          error={errors.height?.message}
          keyboardType="numeric"
        />

        <Text style={styles.lable}>Idade Atual:</Text>
        <Input
          name="age"
          control={control}
          placeholder="Digite sua idade atual..."
          error={errors.age?.message}
          keyboardType="numeric"
        />

        <Pressable style={styles.button} onPress={handleSubmit(handleCreate)}>
          <Text style={styles.buttonText}>Avançar</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  content: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  lable: {
    fontSize: 16,
    color: colors.white,
    fontWeight: "bold",
    marginBottom: 8,
  },
  button: {
    backgroundColor: colors.blue,
    height: 44,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },

  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "bold",
  },
});
export default Step;
