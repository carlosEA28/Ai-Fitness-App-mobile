import { colors } from "@/constants/colors";
import React from "react";
import { Controller } from "react-hook-form";
import {
  KeyboardTypeOptions,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

interface InputProps {
  name: string;
  control: any;
  placeholder?: string;
  rules?: object;
  error?: string;
  keyboardType: KeyboardTypeOptions;
}

const Input = ({
  name,
  control,
  placeholder,
  rules,
  error,
  keyboardType,
}: InputProps) => {
  return (
    <View style={styles.container}>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field }) => (
          <TextInput
            style={styles.input}
            placeholder={placeholder}
            onChangeText={field.onChange}
            value={field.value}
            keyboardType={keyboardType}
          />
        )}
      />

      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  input: {
    height: 44,
    backgroundColor: colors.white,
    paddingHorizontal: 10,
    borderRadius: 4,
  },

  error: {
    color: "red",
    marginTop: 4,
  },
});

export default Input;
