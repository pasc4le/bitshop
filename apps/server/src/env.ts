import { z } from 'zod';
import { createEnv } from '@t3-oss/env-core';

export const env = createEnv({
  server: {
    PORT: z.coerce.number().default(8080),
    HOST: z.string().ip({ version: 'v4' }).default('0.0.0.0'),
    MIN_HIT_LEN: z.coerce.number().min(2).default(2),
    MAX_CACHE: z.coerce.number().default(100),
  },
  runtimeEnv: process.env
});
