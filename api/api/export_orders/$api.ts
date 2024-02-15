import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_by08hd } from '.';
import type { Methods as Methods_uf86p } from './_invoice_no@string';
import type { Methods as Methods_1p7jb71 } from './export_invent';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:80' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/export_orders';
  const PATH1 = '/api/export_orders/export_invent';
  const GET = 'GET';
  const POST = 'POST';
  const PUT = 'PUT';

  return {
    _invoice_no: (val0: string) => {
      const prefix0 = `${PATH0}/${val0}`;

      return {
        /**
         * 船積受注を取得します
         * @returns OK
         */
        get: (option?: { query?: Methods_uf86p['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_uf86p['get']['resBody'], BasicHeaders, Methods_uf86p['get']['status']>(prefix, prefix0, GET, option).json(),
        /**
         * 船積受注を取得します
         * @returns OK
         */
        $get: (option?: { query?: Methods_uf86p['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_uf86p['get']['resBody'], BasicHeaders, Methods_uf86p['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_uf86p['get']['query'] } | undefined) =>
          `${prefix}${prefix0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      };
    },
    export_invent: {
      /**
       * 商品マスタ登録用データを出力します。
       */
      post: (option: { body: Methods_1p7jb71['post']['reqBody'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods_1p7jb71['post']['status']>(prefix, PATH1, POST, option).send(),
      /**
       * 商品マスタ登録用データを出力します。
       */
      $post: (option: { body: Methods_1p7jb71['post']['reqBody'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods_1p7jb71['post']['status']>(prefix, PATH1, POST, option).send().then(r => r.body),
      $path: () => `${prefix}${PATH1}`,
    },
    /**
     * 船積受注一覧を返します
     * @returns OK
     */
    get: (option: { query: Methods_by08hd['get']['query'], config?: T | undefined }) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * 船積受注一覧を返します
     * @returns OK
     */
    $get: (option: { query: Methods_by08hd['get']['query'], config?: T | undefined }) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    /**
     * 船積受注を追加更新削除します。
     * @returns OK
     */
    put: (option: { body: Methods_by08hd['put']['reqBody'], query?: Methods_by08hd['put']['query'] | undefined, config?: T | undefined }) =>
      fetch<Methods_by08hd['put']['resBody'], BasicHeaders, Methods_by08hd['put']['status']>(prefix, PATH0, PUT, option).json(),
    /**
     * 船積受注を追加更新削除します。
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
