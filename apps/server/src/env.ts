import { z } from 'zod';
import { createEnv } from '@t3-oss/env-core';

export const env = createEnv({
  server: {
    PORT: z.coerce.number().default(8080),
    HOST: z.string().ip({ version: 'v4' }).default('0.0.0.0')
  },
  runtimeEnv: process.env
});
