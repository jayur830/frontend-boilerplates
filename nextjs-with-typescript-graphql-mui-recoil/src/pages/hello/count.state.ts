import { atom, selector } from 'recoil';
import { v1 } from 'uuid';

const countState = atom({
  key: `atom/hello/count-${v1()}`,
  default: 0,
});

export const countSelector = selector({
  key: `selector/hello/count-${v1()}`,
  get({ get }) {
    return get(countState);
  },
  set({ set }, value) {
    return set(countState, value);
  },
});
