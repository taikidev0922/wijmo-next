import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_by08hd } from '.';
import type { Methods as Methods_i6afo5 } from './_special_price_id@number';
import type { Methods as Methods_84emw0 } from './bulk_upsert';
import type { Methods as Methods_2atx2a } from './calculate';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:80' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/special_prices';
  const PATH1 = '/api/special_prices/bulk_upsert';
  const PATH2 = '/api/special_prices/calculate';
  const GET = 'GET';
  const POST = 'POST';
  const PUT = 'PUT';

  return {
    _special_price_id: (val0: number) => {
      const prefix0 = `${PATH0}/${val0}`;

      return {
        /**
         * 仕入先を取得します
         * @returns OK
         */
        get: (option?: { query?: Methods_i6afo5['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_i6afo5['get']['resBody'], BasicHeaders, Methods_i6afo5['get']['status']>(prefix, prefix0, GET, option).json(),
        /**
         * 仕入先を取得します
         * @returns OK
         */
        $get: (option?: { query?: Methods_i6afo5['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_i6afo5['get']['resBody'], BasicHeaders, Methods_i6afo5['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_i6afo5['get']['query'] } | undefined) =>
          `${prefix}${prefix0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      };
    },
    bulk_upsert: {
      /**
       * 特別単価を一括登録更新します。
       * @returns OK
       */
      post: (option: { body: Methods_84emw0['post']['reqBody'], query?: Methods_84emw0['post']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_84emw0['post']['resBody'], BasicHeaders, Methods_84emw0['post']['status']>(prefix, PATH1, POST, option, 'FormData').json(),
      /**
       * 特別単価を一括登録更新します。
       * @returns OK
       */
      $post: (option: { body: Methods_84emw0['post']['reqBody'], query?: Methods_84emw0['post']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_84emw0['post']['resBody'], BasicHeaders, Methods_84emw0['post']['status']>(prefix, PATH1, POST, option, 'FormData').json().then(r => r.body),
      $path: (option?: { method: 'post'; query: Methods_84emw0['post']['query'] } | undefined) =>
        `${prefix}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    calculate: {
      /**
       * 計算した特別単価を返します
       * @returns OK
       */
      get: (option: { query: Methods_2atx2a['get']['query'], config?: T | undefined }) =>
        fetch<Methods_2atx2a['get']['resBody'], BasicHeaders, Methods_2atx2a['get']['status']>(prefix, PATH2, GET, option).json(),
      /**
       * 計算した特別単価を返します
       * @returns OK
       */
      $get: (option: { query: Methods_2atx2a['get']['query'], config?: T | undefined }) =>
        fetch<Methods_2atx2a['get']['resBody'], BasicHeaders, Methods_2atx2a['get']['status']>(prefix, PATH2, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_2atx2a['get']['query'] } | undefined) =>
        `${prefix}${PATH2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    /**
     * 特別単価一覧を返します
     * @returns OK
     */
    get: (option: { query: Methods_by08hd['get']['query'], config?: T | undefined }) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * 特別単価一覧を返します
     * @returns OK
     */
    $get: (option: { query: Methods_by08hd['get']['query'], config?: T | undefined }) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    /**
     * 特別単価を追加更新削除します。
     * @returns OK
     */
    put: (option: { body: Methods_by08hd['put']['reqBody'], query?: Methods_by08hd['put']['query'] | undefined, config?: T | undefined }) =>
      fetch<Methods_by08hd['put']['resBody'], BasicHeaders, Methods_by08hd['put']['status']>(prefix, PATH0, PUT, option).json(),
    /**
     * 特別単価を追加更新削除します。
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
