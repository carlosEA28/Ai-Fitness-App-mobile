import z from "zod";

export const Initialschema = z.object({
  name: z.string().min(1, { message: "O nome é obrigatório" }),
  age: z.string().min(1, { message: "A idade é obrigatória" }),
  weight: z.string().min(1, { message: "O peso é obrigatório" }),
  height: z.string().min(1, { message: "A altura é obrigatória" }),
});

export type InitialFormData = z.infer<typeof Initialschema>;

export const InitialSelectSchema = z.object({
  gender: z.string().min(1, { message: "O sexo é obrigatório" }),
  goal: z.string().min(1, { message: "O objetivo é obrigatório" }),
  level: z.string().min(1, { message: "Selecione seu level" }),
});

export type InitialSelectData = z.infer<typeof InitialSelectSchema>;
