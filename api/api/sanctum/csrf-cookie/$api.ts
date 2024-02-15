import type { AspidaClient } from 'aspida';
import type { Methods as Methods_by08hd } from '.';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:80' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/sanctum/csrf-cookie';
  const GET = 'GET';

  return {
    /**
     * CSRFトークンを取得します。
     */
    get: (option?: { config?: T | undefined } | undefined) =>
      fetch<void, Methods_by08hd['get']['resHeaders'], Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).send(),
    /**
     * CSRFトークンを取得します。
     */
    $get: (option?: { config?: T | undefined } | undefined) =>
      fetch<void, Methods_by08hd['get']['resHeaders'], Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).send().then(r => r.body),
    $path: () => `${prefix}${PATH0}`,
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
