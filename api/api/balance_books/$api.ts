import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_by08hd } from '.';
import type { Methods as Methods_uf86p } from './_invoice_no@string';
import type { Methods as Methods_1bzjwp9 } from './print_invoice';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:80' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/balance_books';
  const PATH1 = '/api/balance_books/print_invoice';
  const GET = 'GET';
  const POST = 'POST';
  const PUT = 'PUT';

  return {
    _invoice_no: (val0: string) => {
      const prefix0 = `${PATH0}/${val0}`;

      return {
        /**
         * BalanceBookを取得します
         * @returns OK
         */
        get: (option?: { query?: Methods_uf86p['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_uf86p['get']['resBody'], BasicHeaders, Methods_uf86p['get']['status']>(prefix, prefix0, GET, option).json(),
        /**
         * BalanceBookを取得します
         * @returns OK
         */
        $get: (option?: { query?: Methods_uf86p['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_uf86p['get']['resBody'], BasicHeaders, Methods_uf86p['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_uf86p['get']['query'] } | undefined) =>
          `${prefix}${prefix0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      };
    },
    print_invoice: {
      /**
       * Invoice帳票を出力します。
       * @returns OK
       */
      post: (option: { body: Methods_1bzjwp9['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_1bzjwp9['post']['resBody'], BasicHeaders, Methods_1bzjwp9['post']['status']>(prefix, PATH1, POST, option).json(),
      /**
       * Invoice帳票を出力します。
       * @returns OK
       */
      $post: (option: { body: Methods_1bzjwp9['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_1bzjwp9['post']['resBody'], BasicHeaders, Methods_1bzjwp9['post']['status']>(prefix, PATH1, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH1}`,
    },
    /**
     * BalanceBook一覧を返します
     * @returns OK
     */
    get: (option: { query: Methods_by08hd['get']['query'], config?: T | undefined }) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * BalanceBook一覧を返します
     * @returns OK
     */
    $get: (option: { query: Methods_by08hd['get']['query'], config?: T | undefined }) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    /**
     * BalanceBookを追加更新削除します。
     * @returns OK
     */
    put: (option: { body: Methods_by08hd['put']['reqBody'], query?: Methods_by08hd['put']['query'] | undefined, config?: T | undefined }) =>
      fetch<Methods_by08hd['put']['resBody'], BasicHeaders, Methods_by08hd['put']['status']>(prefix, PATH0, PUT, option).json(),
    /**
     * BalanceBookを追加更新削除します。
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
