// import package modules
import { useQuery } from '@apollo/client';

// Import global modules
import Hello from '@/graphql/queries/hello.gql';
import { HelloQuery, HelloQueryVariables } from '@/graphql/schema';
import { createProvider } from '@/utils';

// Import local modules
import { useCountStore } from './count.store';

function useHello() {
  const { data } = useQuery<HelloQuery, HelloQueryVariables>(Hello);

  const count = useCountStore((state) => state.count);
  const increase = useCountStore((state) => state.increase);
  const decrease = useCountStore((state) => state.decrease);

  return { data, count, increase, decrease };
}

export const { Provider, useContext } = createProvider(useHello);
