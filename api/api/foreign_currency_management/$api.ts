import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_by08hd } from '.';
import type { Methods as Methods_19iirou } from './balance';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:80' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/foreign_currency_management';
  const PATH1 = '/api/foreign_currency_management/balance';
  const GET = 'GET';

  return {
    balance: {
      /**
       * 時点残高情報一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_19iirou['get']['query'], config?: T | undefined }) =>
        fetch<Methods_19iirou['get']['resBody'], BasicHeaders, Methods_19iirou['get']['status']>(prefix, PATH1, GET, option).json(),
      /**
       * 時点残高情報一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_19iirou['get']['query'], config?: T | undefined }) =>
        fetch<Methods_19iirou['get']['resBody'], BasicHeaders, Methods_19iirou['get']['status']>(prefix, PATH1, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_19iirou['get']['query'] } | undefined) =>
        `${prefix}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    /**
     * 外貨資金繰り一覧を返します
     * @returns OK
     */
    get: (option: { query: Methods_by08hd['get']['query'], config?: T | undefined }) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * 外貨資金繰り一覧を返します
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
