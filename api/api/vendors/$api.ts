import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_by08hd } from '.';
import type { Methods as Methods_1t9z1lg } from './_vendor_id@number';
import type { Methods as Methods_1da1jwy } from './bulk_insert';
import type { Methods as Methods_dz28g2 } from './bulk_update';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:80' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/vendors';
  const PATH1 = '/api/vendors/bulk_insert';
  const PATH2 = '/api/vendors/bulk_update';
  const GET = 'GET';
  const POST = 'POST';
  const PUT = 'PUT';

  return {
    _vendor_id: (val0: number) => {
      const prefix0 = `${PATH0}/${val0}`;

      return {
        /**
         * 仕入先を取得します。新たなロックを取得する前に、同一テーブルの同一ロックキー1に対する同一担当者によるロックは解除されます。
         * @returns OK
         */
        get: (option?: { query?: Methods_1t9z1lg['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_1t9z1lg['get']['resBody'], BasicHeaders, Methods_1t9z1lg['get']['status']>(prefix, prefix0, GET, option).json(),
        /**
         * 仕入先を取得します。新たなロックを取得する前に、同一テーブルの同一ロックキー1に対する同一担当者によるロックは解除されます。
         * @returns OK
         */
        $get: (option?: { query?: Methods_1t9z1lg['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_1t9z1lg['get']['resBody'], BasicHeaders, Methods_1t9z1lg['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_1t9z1lg['get']['query'] } | undefined) =>
          `${prefix}${prefix0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      };
    },
    bulk_insert: {
      /**
       * 仕入先を一括登録します。
       * @returns OK
       */
      post: (option: { body: Methods_1da1jwy['post']['reqBody'], query?: Methods_1da1jwy['post']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1da1jwy['post']['resBody'], BasicHeaders, Methods_1da1jwy['post']['status']>(prefix, PATH1, POST, option, 'FormData').json(),
      /**
       * 仕入先を一括登録します。
       * @returns OK
       */
      $post: (option: { body: Methods_1da1jwy['post']['reqBody'], query?: Methods_1da1jwy['post']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1da1jwy['post']['resBody'], BasicHeaders, Methods_1da1jwy['post']['status']>(prefix, PATH1, POST, option, 'FormData').json().then(r => r.body),
      $path: (option?: { method: 'post'; query: Methods_1da1jwy['post']['query'] } | undefined) =>
        `${prefix}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    bulk_update: {
      /**
       * 仕入先を一括更新します。ロックの取得を指定した場合、ロックの取得に成功した後、直ちにそのロックは解放されます。
       * @returns OK
       */
      post: (option: { body: Methods_dz28g2['post']['reqBody'], query?: Methods_dz28g2['post']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_dz28g2['post']['resBody'], BasicHeaders, Methods_dz28g2['post']['status']>(prefix, PATH2, POST, option, 'FormData').json(),
      /**
       * 仕入先を一括更新します。ロックの取得を指定した場合、ロックの取得に成功した後、直ちにそのロックは解放されます。
       * @returns OK
       */
      $post: (option: { body: Methods_dz28g2['post']['reqBody'], query?: Methods_dz28g2['post']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_dz28g2['post']['resBody'], BasicHeaders, Methods_dz28g2['post']['status']>(prefix, PATH2, POST, option, 'FormData').json().then(r => r.body),
      $path: (option?: { method: 'post'; query: Methods_dz28g2['post']['query'] } | undefined) =>
        `${prefix}${PATH2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    /**
     * 仕入先一覧を返します。新たなロックを取得する前に、同一テーブルの同一ロックキー1に対する同一担当者によるロックは解除されます。
     * @returns OK
     */
    get: (option: { query: Methods_by08hd['get']['query'], config?: T | undefined }) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * 仕入先一覧を返します。新たなロックを取得する前に、同一テーブルの同一ロックキー1に対する同一担当者によるロックは解除されます。
     * @returns OK
     */
    $get: (option: { query: Methods_by08hd['get']['query'], config?: T | undefined }) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    /**
     * 仕入先を追加更新削除します。
     * @returns OK
     */
    put: (option: { body: Methods_by08hd['put']['reqBody'], query?: Methods_by08hd['put']['query'] | undefined, config?: T | undefined }) =>
      fetch<Methods_by08hd['put']['resBody'], BasicHeaders, Methods_by08hd['put']['status']>(prefix, PATH0, PUT, option).json(),
    /**
     * 仕入先を追加更新削除します。
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
