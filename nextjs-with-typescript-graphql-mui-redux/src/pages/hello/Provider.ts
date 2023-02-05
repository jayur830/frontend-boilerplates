// import package modules
import { useQuery } from '@apollo/client';

// Import global modules
import Hello from '@/graphql/queries/hello.gql';
import { HelloQuery, HelloQueryVariables } from '@/graphql/schema';
import { useStore } from '@/hooks';
import { createProvider } from '@/utils';

// Import local modules

function useHello() {
  const { data } = useQuery<HelloQuery, HelloQueryVariables>(Hello);

  const { count } = useStore((value) => value.count);

  return { data, count };
}

export const { Provider, useContext } = createProvider(useHello);
