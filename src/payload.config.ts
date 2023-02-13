import { buildConfig } from 'payload/config';
import path from 'path';
import Users from './collections/Users';
import Stocks from './collections/Stocks';

export default buildConfig({
  serverURL: 'http://localhost:3000',
  admin: {
    user: Users.slug,
  },
  collections: [
    Users,
    Stocks
    // Add Collections here
    // Examples,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  localization: {
    defaultLocale: 'he',
    locales: ['he', 'en'],
  },
});
