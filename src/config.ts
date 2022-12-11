function getEnv(key: string): string {
  const env = process.env[key];
  if (!env) throw new Error(`${key} : Doest exist`);
  return env;
}

export const API_BASE_URL = getEnv("API_BASE_URL");
export const NODE_ENV = getEnv("NODE_ENV");
