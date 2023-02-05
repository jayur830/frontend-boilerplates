import { useSelector } from 'react-redux';

import { RootState } from '@/store';

type StateSelector<T> = (state: RootState) => T;
type EqualityFn<T> = (left: T, right: T) => boolean;

export default function useStore<T>(selector: StateSelector<T>, equalityFn?: EqualityFn<T>) {
  const state: T = useSelector(selector, equalityFn);
  return state;
}
