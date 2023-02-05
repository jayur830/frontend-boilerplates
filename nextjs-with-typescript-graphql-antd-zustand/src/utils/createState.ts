import { v1 } from 'uuid';
import { create, StateCreator } from 'zustand';
import { persist, PersistOptions } from 'zustand/middleware';

export function createState<T>(initialStateFn: StateCreator<T>) {
  type Persist = (config: StateCreator<T>, options: PersistOptions<T>) => StateCreator<T>;
  return create<T>((persist as Persist)(initialStateFn, { name: v1() }));
}
