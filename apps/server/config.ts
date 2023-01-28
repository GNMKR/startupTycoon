import dotenv from 'dotenv';

dotenv.config();

const createGlobalConfig = () => {
  const env = {
    port: Number(process.env.PORT) || 3000,
  };

  return {
    env,
  };
};

export const globalConfig = createGlobalConfig();
