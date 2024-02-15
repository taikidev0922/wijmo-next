import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_by08hd } from '.';
import type { Methods as Methods_9c243i } from './_stock_transfer_id@number';
import type { Methods as Methods_12xdocv } from './receive';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:80' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/stock_transfers';
  const PATH1 = '/api/stock_transfers/receive';
  const GET = 'GET';
  const PUT = 'PUT';

  return {
    _stock_transfer_id: (val0: number) => {
      const prefix0 = `${PATH0}/${val0}`;

      return {
        /**
         * 在庫移動を取得します
         * @returns OK
         */
        get: (option?: { query?: Methods_9c243i['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_9c243i['get']['resBody'], BasicHeaders, Methods_9c243i['get']['status']>(prefix, prefix0, GET, option).json(),
        /**
         * 在庫移動を取得します
         * @returns OK
         */
        $get: (option?: { query?: Methods_9c243i['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_9c243i['get']['resBody'], BasicHeaders, Methods_9c243i['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_9c243i['get']['query'] } | undefined) =>
          `${prefix}${prefix0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      };
    },
    receive: {
      /**
       * 在庫移動を更新します。更新のみ可能です。
       * @returns OK
       */
      put: (option: { body: Methods_12xdocv['put']['reqBody'], query?: Methods_12xdocv['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_12xdocv['put']['resBody'], BasicHeaders, Methods_12xdocv['put']['status']>(prefix, PATH1, PUT, option).json(),
      /**
       * 在庫移動を更新します。更新のみ可能です。
       * @returns OK
       */
      $put: (option: { body: Methods_12xdocv['put']['reqBody'], query?: Methods_12xdocv['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_12xdocv['put']['resBody'], BasicHeaders, Methods_12xdocv['put']['status']>(prefix, PATH1, PUT, option).json().then(r => r.body),
      $path: (option?: { method: 'put'; query: Methods_12xdocv['put']['query'] } | undefined) =>
        `${prefix}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    /**
     * 在庫移動一覧を返します
     * @returns OK
     */
    get: (option: { query: Methods_by08hd['get']['query'], config?: T | undefined }) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * 在庫移動一覧を返します
     * @returns OK
     */
    $get: (option: { query: Methods_by08hd['get']['query'], config?: T | undefined }) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    /**
     * 在庫移動を追加します。追加のみ可能です。
     * @returns OK
     */
    put: (option: { body: Methods_by08hd['put']['reqBody'], query?: Methods_by08hd['put']['query'] | undefined, config?: T | undefined }) =>
      fetch<Methods_by08hd['put']['resBody'], BasicHeaders, Methods_by08hd['put']['status']>(prefix, PATH0, PUT, option).json(),
    /**
     * 在庫移動を追加します。追加のみ可能です。
     * @returns OK
     */
    $put: (option: { body: Methods_by08hd['put']['reqBody'], query?: Methods_by08hd['put']['query'] | undefined, config?: T | undefined }) =>
      fetch<Methods_by08hd['put']['resBody'], BasicHeaders, Methods_by08hd['put']['status']>(prefix, PATH0, PUT, option).json().then(r => r.body),
    $path: (option?: { method?: 'get' | undefined; query: Methods_by08hd['get']['query'] } | { method: 'put'; query: Methods_by08hd['put']['query'] } | undefined) =>
      `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
