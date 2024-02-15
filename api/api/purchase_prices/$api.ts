import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_by08hd } from '.';
import type { Methods as Methods_jnd14r } from './_purchase_price_id@number';
import type { Methods as Methods_1w52y1q } from './_purchase_price_id@number/re_calculate';
import type { Methods as Methods_jho43c } from './export';
import type { Methods as Methods_1lklvpr } from './export_gross_margins';
import type { Methods as Methods_1o44dpa } from './update_costs';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:80' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/purchase_prices';
  const PATH1 = '/re_calculate';
  const PATH2 = '/api/purchase_prices/export';
  const PATH3 = '/api/purchase_prices/export_gross_margins';
  const PATH4 = '/api/purchase_prices/update_costs';
  const GET = 'GET';
  const POST = 'POST';
  const PUT = 'PUT';

  return {
    _purchase_price_id: (val0: number) => {
      const prefix0 = `${PATH0}/${val0}`;

      return {
        re_calculate: {
          /**
           * 入荷原価を再計算します
           * @returns OK
           */
          put: (option?: { query?: Methods_1w52y1q['put']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1w52y1q['put']['resBody'], BasicHeaders, Methods_1w52y1q['put']['status']>(prefix, `${prefix0}${PATH1}`, PUT, option).json(),
          /**
           * 入荷原価を再計算します
           * @returns OK
           */
          $put: (option?: { query?: Methods_1w52y1q['put']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1w52y1q['put']['resBody'], BasicHeaders, Methods_1w52y1q['put']['status']>(prefix, `${prefix0}${PATH1}`, PUT, option).json().then(r => r.body),
          $path: (option?: { method: 'put'; query: Methods_1w52y1q['put']['query'] } | undefined) =>
            `${prefix}${prefix0}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
        /**
         * 入荷原価を取得します
         * @returns OK
         */
        get: (option?: { query?: Methods_jnd14r['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_jnd14r['get']['resBody'], BasicHeaders, Methods_jnd14r['get']['status']>(prefix, prefix0, GET, option).json(),
        /**
         * 入荷原価を取得します
         * @returns OK
         */
        $get: (option?: { query?: Methods_jnd14r['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_jnd14r['get']['resBody'], BasicHeaders, Methods_jnd14r['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_jnd14r['get']['query'] } | undefined) =>
          `${prefix}${prefix0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      };
    },
    export: {
      /**
       * 原価計算回覧用を出力します。
       */
      post: (option: { body: Methods_jho43c['post']['reqBody'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods_jho43c['post']['status']>(prefix, PATH2, POST, option).send(),
      /**
       * 原価計算回覧用を出力します。
       */
      $post: (option: { body: Methods_jho43c['post']['reqBody'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods_jho43c['post']['status']>(prefix, PATH2, POST, option).send().then(r => r.body),
      $path: () => `${prefix}${PATH2}`,
    },
    export_gross_margins: {
      /**
       * 粗利一覧を出力します。
       */
      post: (option: { body: Methods_1lklvpr['post']['reqBody'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods_1lklvpr['post']['status']>(prefix, PATH3, POST, option).send(),
      /**
       * 粗利一覧を出力します。
       */
      $post: (option: { body: Methods_1lklvpr['post']['reqBody'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods_1lklvpr['post']['status']>(prefix, PATH3, POST, option).send().then(r => r.body),
      $path: () => `${prefix}${PATH3}`,
    },
    update_costs: {
      /**
       * 在庫単価を確定し、商品マスタに最終仕入単価を設定します。ロックの取得を指定した場合、ロックの取得に成功した後、直ちにそのロックは解放されます。
       * @returns OK
       */
      post: (option: { body: Methods_1o44dpa['post']['reqBody'], query?: Methods_1o44dpa['post']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1o44dpa['post']['resBody'], BasicHeaders, Methods_1o44dpa['post']['status']>(prefix, PATH4, POST, option).json(),
      /**
       * 在庫単価を確定し、商品マスタに最終仕入単価を設定します。ロックの取得を指定した場合、ロックの取得に成功した後、直ちにそのロックは解放されます。
       * @returns OK
       */
      $post: (option: { body: Methods_1o44dpa['post']['reqBody'], query?: Methods_1o44dpa['post']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1o44dpa['post']['resBody'], BasicHeaders, Methods_1o44dpa['post']['status']>(prefix, PATH4, POST, option).json().then(r => r.body),
      $path: (option?: { method: 'post'; query: Methods_1o44dpa['post']['query'] } | undefined) =>
        `${prefix}${PATH4}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    /**
     * 入荷原価一覧を返します
     * @returns OK
     */
    get: (option: { query: Methods_by08hd['get']['query'], config?: T | undefined }) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * 入荷原価一覧を返します
     * @returns OK
     */
    $get: (option: { query: Methods_by08hd['get']['query'], config?: T | undefined }) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    /**
     * 入荷原価を追加更新削除します。
     * @returns OK
     */
    put: (option: { body: Methods_by08hd['put']['reqBody'], query?: Methods_by08hd['put']['query'] | undefined, config?: T | undefined }) =>
      fetch<Methods_by08hd['put']['resBody'], BasicHeaders, Methods_by08hd['put']['status']>(prefix, PATH0, PUT, option).json(),
    /**
     * 入荷原価を追加更新削除します。
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
