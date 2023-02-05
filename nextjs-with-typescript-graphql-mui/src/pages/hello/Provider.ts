// import package modules
import { useQuery } from '@apollo/client';

// Import global modules
import Hello from '@/graphql/queries/hello.gql';
import { HelloQuery, HelloQueryVariables } from '@/graphql/schema';
import { createProvider } from '@/utils';

// Import local modules

function useHello() {
  const { data } = useQuery<HelloQuery, HelloQueryVariables>(Hello);

  return { data };
}

export const { Provider, useContext } = createProvider(useHello);
