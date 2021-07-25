import { Injectable } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { filter, map, share } from 'rxjs/operators';

type FilteredStorageEvent = Pick<StorageEvent, 'key' | 'newValue' | 'oldValue'>;

abstract class LocalStorage {
  abstract get(key: string): any;
  abstract set(key: string, value: any): void;
  abstract remove(key: string): void;
  abstract clear(): void;
  abstract listenStorage(): Observable<StorageEvent>;
  abstract listenStorageItem(key: string): Observable<FilteredStorageEvent>;
}

@Injectable({ providedIn: 'root' })
export class LocalStorageService extends LocalStorage {
  private listener: Observable<StorageEvent>;
  private readonly prefix = 'cv';

  constructor() {
    super();
  }

  get(key: string): any {
    return JSON.parse(localStorage.getItem(`${this.prefix}-${key}`));
  }

  set(key: string, value: any): void {
    localStorage.setItem(`${this.prefix}-${key}`, JSON.stringify(value));
  }

  remove(key: string | string[]): void {
    const keys: string[] = (Array.isArray(key) ? key : [key]) as string[];

    keys.forEach((key) => localStorage.removeItem(`${this.prefix}-${key}`));
  }

  clear(): void {
    localStorage.clear();
  }

  listenStorage(): Observable<StorageEvent> {
    this.listener = fromEvent(window, 'storage').pipe(
      share()
    ) as Observable<StorageEvent>;
    return this.listener;
  }

  listenStorageItem(key: string): Observable<FilteredStorageEvent> {
    return (!this.listener ? this.listenStorage() : this.listener).pipe(
      filter((event) => `${this.prefix}-${key}` === event.key),
      map(({ key, newValue, oldValue }: StorageEvent) => ({
        key,
        newValue,
        oldValue,
      }))
    );
  }
}
