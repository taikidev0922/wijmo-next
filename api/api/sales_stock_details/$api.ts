import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_by08hd } from '.';
import type { Methods as Methods_8lr1tk } from './candidates';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:80' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/sales_stock_details';
  const PATH1 = '/api/sales_stock_details/candidates';
  const GET = 'GET';

  return {
    candidates: {
      /**
       * 取置明細候補の一覧を返します。最大でも1件のみ取得されます。
       * @returns OK
       */
      get: (option: { query: Methods_8lr1tk['get']['query'], config?: T | undefined }) =>
        fetch<Methods_8lr1tk['get']['resBody'], BasicHeaders, Methods_8lr1tk['get']['status']>(prefix, PATH1, GET, option).json(),
      /**
       * 取置明細候補の一覧を返します。最大でも1件のみ取得されます。
       * @returns OK
       */
      $get: (option: { query: Methods_8lr1tk['get']['query'], config?: T | undefined }) =>
        fetch<Methods_8lr1tk['get']['resBody'], BasicHeaders, Methods_8lr1tk['get']['status']>(prefix, PATH1, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_8lr1tk['get']['query'] } | undefined) =>
        `${prefix}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    /**
     * 取置明細一覧を返します。
     * @returns OK
     */
    get: (option: { query: Methods_by08hd['get']['query'], config?: T | undefined }) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * 取置明細一覧を返します。
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
