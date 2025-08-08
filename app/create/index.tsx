import { Header } from "@/components/header";
import Select from "@/components/input/select";
import { colors } from "@/constants/colors";
import { InitialSelectData, InitialSelectSchema } from "@/schemas/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { router } from "expo-router";
import React from "react";
import { useForm } from "react-hook-form";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useDataStore } from "../store/data";

const Create = ({ gender, goal, level }: InitialSelectData) => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<InitialSelectData>({
    resolver: zodResolver(InitialSelectSchema),
  });

  const { setPageTwo } = useDataStore();

  const genderOptions = [
    { label: "Masculino", value: "Masculino" },
    { label: "Feminino", value: "Feminino" },
  ];

  const levelOptions = [
    {
      label: "Sedentário (pouco ou nenhuma atividade física)",
      value: "Sedentário",
    },
    {
      label: "Levemente ativo (exercícios 1 a 3 vezes na semana)",
      value: "Levemente ativo (exercícios 1 a 3 vezes na semana)",
    },
    {
      label: "Moderadamente ativo (exercícios 3 a 5 vezes na semana)",
      value: "Moderadamente ativo (exercícios 3 a 5 vezes na semana)",
    },
    {
      label: "Altamente ativo (exercícios 5 a 7 dia por semana)",
      value: "Altamente ativo (exercícios 5 a 7 dia por semana)",
    },
  ];

  const goalOptions = [
    { label: "Emagrecer", value: "emagrecer" },
    { label: "Hipertrofia", value: "Hipertrofia" },
    { label: "Hipertrofia + Definição", value: "Hipertrofia e Definição" },
    { label: "Definição", value: "Definição" },
  ];

  function handleCreate(data: InitialSelectData) {
    setPageTwo({ ...data });
    router.push("/nutricion");
  }

  return (
    <View style={styles.container}>
      <Header step="Passo 2" title="Finalizando dieta" />

      <ScrollView style={styles.content}>
        <Text style={styles.lable}>Sexo:</Text>
        <Select
          name="gender"
          control={control}
          placeholder="Selecione seu sexo"
          error={errors.gender?.message}
          options={genderOptions}
        />

        <Text style={styles.lable}>Selecione o nível de atividade física:</Text>
        <Select
          name="level"
          control={control}
          placeholder="Selecione nível de atividade física"
          error={errors.level?.message}
          options={levelOptions}
        />

        <Text style={styles.lable}>Selecione o seu objetívo:</Text>
        <Select
          name="goal"
          control={control}
          placeholder="Selecione nível de atividade física"
          error={errors.goal?.message}
          options={goalOptions}
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
    backgroundColor: colors.background,
    flex: 1,
  },
  lable: {
    fontSize: 16,
    color: colors.white,
    fontWeight: "bold",
    marginBottom: 8,
  },
  content: {
    paddingLeft: 16,
    paddingRight: 16,
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

export default Create;
