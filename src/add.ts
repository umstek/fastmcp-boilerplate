import { z } from "zod";

export const paramsSchema = z.object({
  a: z.number().describe("The first number"),
  b: z.number().describe("The second number"),
});

export const add = (a: number, b: number) => {
  return a + b;
};

export const addTool = {
  annotations: {
    openWorldHint: false, // This tool doesn't interact with external systems
    readOnlyHint: true, // This tool doesn't modify anything
    title: "Addition",
  },
  description: "Add two numbers",
  execute: async (args: z.infer<typeof paramsSchema>) => {
    return String(add(args.a, args.b));
  },
  name: "add",
  parameters: paramsSchema,
};
