export type ValueOf<T> = T[keyof T];
export type Picked<K, T extends keyof K> = Pick<K, T>[T];
