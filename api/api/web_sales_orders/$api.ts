import type { AspidaClient, BasicHeaders } from 'aspida';
import type { Methods as Methods_1cpicav } from './import';
import type { Methods as Methods_1jr86ho } from './import_async';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:80' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/web_sales_orders/import';
  const PATH1 = '/api/web_sales_orders/import_async';
  const POST = 'POST';

  return {
    import: {
      /**
       * WEB受注データを取り込ます。
       * @returns OK
       */
      post: (option: { body: Methods_1cpicav['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_1cpicav['post']['resBody'], BasicHeaders, Methods_1cpicav['post']['status']>(prefix, PATH0, POST, option).json(),
      /**
       * WEB受注データを取り込ます。
       * @returns OK
       */
      $post: (option: { body: Methods_1cpicav['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_1cpicav['post']['resBody'], BasicHeaders, Methods_1cpicav['post']['status']>(prefix, PATH0, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH0}`,
    },
    import_async: {
      /**
       * WEB受注データを取り込ます。
       * @returns OK
       */
      post: (option: { body: Methods_1jr86ho['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_1jr86ho['post']['resBody'], BasicHeaders, Methods_1jr86ho['post']['status']>(prefix, PATH1, POST, option).json(),
      /**
       * WEB受注データを取り込ます。
       * @returns OK
       */
      $post: (option: { body: Methods_1jr86ho['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_1jr86ho['post']['resBody'], BasicHeaders, Methods_1jr86ho['post']['status']>(prefix, PATH1, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH1}`,
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
