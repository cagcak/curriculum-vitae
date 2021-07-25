export namespace Common {
  export type AddressInput = Partial<{
    city: string;
    geo: GeoInput;
    street: string;
    suite: string;
    zipcode: string;
  }>;

  export type GeoInput = Partial<{
    lat: string;
    lng: string;
  }>;

  export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
  };

  export type Maybe<T> = T | null;

  export type FieldId<T = string> = {
    __id: T;
  };

  export type FieldType<T = string> = {
    __typename: T;
  };

  export type FieldText<T = string> = {
    text: T;
  };

  export type FieldTitle<T = string> = {
    title: T;
  };
}
