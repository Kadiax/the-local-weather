export const validateEnv = (requiredVars: string[]) => {
  requiredVars.forEach((key) => {
    if (!import.meta.env[key]) {
      throw new Error(`${key} is not defined in the VITE environment variables`);
    }
  });
};
