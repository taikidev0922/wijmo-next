import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_by08hd } from '.';
import type { Methods as Methods_weg16g } from './_order_warehouse_id@number';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:80' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/order_warehouses';
  const GET = 'GET';
  const PUT = 'PUT';

  return {
    _order_warehouse_id: (val0: number) => {
      const prefix0 = `${PATH0}/${val0}`;

      return {
        /**
         * 倉庫依頼を取得します
         * @returns OK
         */
        get: (option?: { query?: Methods_weg16g['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_weg16g['get']['resBody'], BasicHeaders, Methods_weg16g['get']['status']>(prefix, prefix0, GET, option).json(),
        /**
         * 倉庫依頼を取得します
         * @returns OK
         */
        $get: (option?: { query?: Methods_weg16g['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_weg16g['get']['resBody'], BasicHeaders, Methods_weg16g['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_weg16g['get']['query'] } | undefined) =>
          `${prefix}${prefix0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      };
    },
    /**
     * 倉庫依頼一覧を返します
     * @returns OK
     */
    get: (option: { query: Methods_by08hd['get']['query'], config?: T | undefined }) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * 倉庫依頼一覧を返します
     * @returns OK
     */
    $get: (option: { query: Methods_by08hd['get']['query'], config?: T | undefined }) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    /**
     * 倉庫依頼を追加更新削除します。
     * @returns OK
     */
    put: (option: { body: Methods_by08hd['put']['reqBody'], query?: Methods_by08hd['put']['query'] | undefined, config?: T | undefined }) =>
      fetch<Methods_by08hd['put']['resBody'], BasicHeaders, Methods_by08hd['put']['status']>(prefix, PATH0, PUT, option).json(),
    /**
     * 倉庫依頼を追加更新削除します。
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