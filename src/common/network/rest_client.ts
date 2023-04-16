interface TypedResponse<T> extends Response {
  json<P = T>(): Promise<P>;
}

export function RestClient<T>(...args: any): Promise<TypedResponse<T>> {
  return fetch.apply(window, args);
}
