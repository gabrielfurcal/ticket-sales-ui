import type { CodegenConfig } from '@graphql-codegen/cli';
import { environment } from './src/environments/environment';

const config: CodegenConfig = {
  generates: {
    'src/graphql/train-company/schema.ts': {
      schema: environment.graphql.trainCompany,
      documents: ['src/graphql/train-company/**/*.graphql'],
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-apollo-angular',
      ],
      config: {
        withHooks: false,
        addExplicitOverride: true,
        namedClient: 'firstClient'
      },
    },
    'src/graphql/admin-inputs/schema.ts': {
      schema: environment.graphql.adminInputs,
      documents: ['src/graphql/admin-inputs/**/*.graphql'],
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-apollo-angular',
      ],
      config: {
        withHooks: false,
        addExplicitOverride: true,
        namedClient: 'secondClient'
      },
    },
  },
};

export default config;
