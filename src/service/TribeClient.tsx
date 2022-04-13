
import { TribeClient } from '@tribeplatform/gql-client';

export const client = new TribeClient({
    graphqlUrl: 'https://app.tribe.so/graphql',
    accessToken: localStorage.getItem('apiKey') as string
  })

  