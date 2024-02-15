import type { AspidaClient } from 'aspida';
import type { Methods as Methods_pqeaa9 } from './csrf-cookie';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:80' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/sanctum/csrf-cookie';
  const GET = 'GET';

  return {
    csrf_cookie: {
      /**
       * CSRFトークンを取得します。
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, Methods_pqeaa9['get']['resHeaders'], Methods_pqeaa9['get']['status']>(prefix, PATH0, GET, option).send(),
      /**
       * CSRFトークンを取得します。
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, Methods_pqeaa9['get']['resHeaders'], Methods_pqeaa9['get']['status']>(prefix, PATH0, GET, option).send().then(r => r.body),
      $path: () => `${prefix}${PATH0}`,
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
