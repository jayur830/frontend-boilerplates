// import package modules
import { useCallback } from 'react';
import { useQuery } from '@apollo/client';
import { useRecoilState } from 'recoil';

// Import global modules
import Hello from '@/graphql/queries/hello.gql';
import { HelloQuery, HelloQueryVariables } from '@/graphql/schema';
import { createProvider } from '@/utils';

// Import local modules
import { countSelector } from './count.state';

function useHello() {
  const { data } = useQuery<HelloQuery, HelloQueryVariables>(Hello);

  const [count, setCount] = useRecoilState(countSelector);

  const increase = useCallback(() => {
    setCount((value) => value + 1);
  }, [setCount]);

  const decrease = useCallback(() => {
    setCount((value) => value - 1);
  }, [setCount]);

  return { data, count, increase, decrease };
}

export const { Provider, useContext } = createProvider(useHello);
