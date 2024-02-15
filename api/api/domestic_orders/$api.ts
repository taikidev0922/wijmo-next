import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_by08hd } from '.';
import type { Methods as Methods_1qtlx9 } from './_domestic_order_id@number';
import type { Methods as Methods_1xc9z4u } from './print_purchase_order';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:80' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/domestic_orders';
  const PATH1 = '/api/domestic_orders/print_purchase_order';
  const GET = 'GET';
  const POST = 'POST';
  const PUT = 'PUT';

  return {
    _domestic_order_id: (val0: number) => {
      const prefix0 = `${PATH0}/${val0}`;

      return {
        /**
         * 国内発注を取得します
         * @returns OK
         */
        get: (option?: { query?: Methods_1qtlx9['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_1qtlx9['get']['resBody'], BasicHeaders, Methods_1qtlx9['get']['status']>(prefix, prefix0, GET, option).json(),
        /**
         * 国内発注を取得します
         * @returns OK
         */
        $get: (option?: { query?: Methods_1qtlx9['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_1qtlx9['get']['resBody'], BasicHeaders, Methods_1qtlx9['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_1qtlx9['get']['query'] } | undefined) =>
          `${prefix}${prefix0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      };
    },
    print_purchase_order: {
      /**
       * 国内発注書を出力します。
       * @returns OK
       */
      post: (option: { body: Methods_1xc9z4u['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_1xc9z4u['post']['resBody'], BasicHeaders, Methods_1xc9z4u['post']['status']>(prefix, PATH1, POST, option).json(),
      /**
       * 国内発注書を出力します。
       * @returns OK
       */
      $post: (option: { body: Methods_1xc9z4u['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_1xc9z4u['post']['resBody'], BasicHeaders, Methods_1xc9z4u['post']['status']>(prefix, PATH1, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH1}`,
    },
    /**
     * 国内発注一覧を返します
     * @returns OK
     */
    get: (option: { query: Methods_by08hd['get']['query'], config?: T | undefined }) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * 国内発注一覧を返します
     * @returns OK
     */
    $get: (option: { query: Methods_by08hd['get']['query'], config?: T | undefined }) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    /**
     * 国内発注を追加更新削除します。
     * @returns OK
     */
    put: (option: { body: Methods_by08hd['put']['reqBody'], query?: Methods_by08hd['put']['query'] | undefined, config?: T | undefined }) =>
      fetch<Methods_by08hd['put']['resBody'], BasicHeaders, Methods_by08hd['put']['status']>(prefix, PATH0, PUT, option).json(),
    /**
     * 国内発注を追加更新削除します。
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
