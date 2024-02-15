import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_by08hd } from '.';
import type { Methods as Methods_rmpmw9 } from './location';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:80' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/monthly_transaction_totals';
  const PATH1 = '/api/monthly_transaction_totals/location';
  const GET = 'GET';

  return {
    location: {
      /**
       * 倉庫別月別在庫受払集計データを取得します
       * @returns OK
       */
      get: (option: { query: Methods_rmpmw9['get']['query'], config?: T | undefined }) =>
        fetch<Methods_rmpmw9['get']['resBody'], BasicHeaders, Methods_rmpmw9['get']['status']>(prefix, PATH1, GET, option).json(),
      /**
       * 倉庫別月別在庫受払集計データを取得します
       * @returns OK
       */
      $get: (option: { query: Methods_rmpmw9['get']['query'], config?: T | undefined }) =>
        fetch<Methods_rmpmw9['get']['resBody'], BasicHeaders, Methods_rmpmw9['get']['status']>(prefix, PATH1, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_rmpmw9['get']['query'] } | undefined) =>
        `${prefix}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    /**
     * 全社月別在庫受払集計データを取得します
     * @returns OK
     */
    get: (option: { query: Methods_by08hd['get']['query'], config?: T | undefined }) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * 全社月別在庫受払集計データを取得します
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
