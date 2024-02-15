import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_by08hd } from '.';
import type { Methods as Methods_g6ii68 } from './_batch_id@number';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:80' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/batches';
  const GET = 'GET';

  return {
    _batch_id: (val0: number) => {
      const prefix0 = `${PATH0}/${val0}`;

      return {
        /**
         * バッチを取得します
         * @returns OK
         */
        get: (option?: { query?: Methods_g6ii68['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_g6ii68['get']['resBody'], BasicHeaders, Methods_g6ii68['get']['status']>(prefix, prefix0, GET, option).json(),
        /**
         * バッチを取得します
         * @returns OK
         */
        $get: (option?: { query?: Methods_g6ii68['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_g6ii68['get']['resBody'], BasicHeaders, Methods_g6ii68['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_g6ii68['get']['query'] } | undefined) =>
          `${prefix}${prefix0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      };
    },
    /**
     * バッチ一覧を返します
     * @returns OK
     */
    get: (option: { query: Methods_by08hd['get']['query'], config?: T | undefined }) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * バッチ一覧を返します
     * @returns OK
     */
    $get: (option: { query: Methods_by08hd['get']['query'], config?: T | undefined }) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    $path: (option?: { method?: 'get' | undefined; query: Methods_by08hd['get']['query'] } | undefined) =>
      `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
