import { createState } from '@/utils';

interface InitialState {
  count: number;
  increase(): void;
  decrease(): void;
}

export const useCountStore = createState<InitialState>((set) => ({
  count: 0,
  increase() {
    set((state) => ({ count: state.count + 1 }));
  },
  decrease() {
    set((state) => ({ count: state.count - 1 }));
  },
}));
