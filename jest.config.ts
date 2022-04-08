import type {Config} from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  testPathIgnorePatterns: [".d.ts", ".js"]
};
export default config;
