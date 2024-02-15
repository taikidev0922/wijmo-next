import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_by08hd } from '.';
import type { Methods as Methods_1h4zuhp } from './_stock_change_id@number';
import type { Methods as Methods_7xp4o4 } from './_stock_change_id@number/request_invent_insert';
import type { Methods as Methods_18xgx83 } from './_stock_change_id@number/request_sales_reservation_stocks_insert';
import type { Methods as Methods_iyuyw3 } from './print_stock_change_request';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:80' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/stock_changes';
  const PATH1 = '/request_invent_insert';
  const PATH2 = '/request_sales_reservation_stocks_insert';
  const PATH3 = '/api/stock_changes/print_stock_change_request';
  const GET = 'GET';
  const POST = 'POST';
  const PUT = 'PUT';

  return {
    _stock_change_id: (val0: number) => {
      const prefix0 = `${PATH0}/${val0}`;

      return {
        request_invent_insert: {
          /**
           * 商品マスタ作成担当者へ、商品マスタ作成の依頼メールを送信します。
           */
          post: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods_7xp4o4['post']['status']>(prefix, `${prefix0}${PATH1}`, POST, option).send(),
          /**
           * 商品マスタ作成担当者へ、商品マスタ作成の依頼メールを送信します。
           */
          $post: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods_7xp4o4['post']['status']>(prefix, `${prefix0}${PATH1}`, POST, option).send().then(r => r.body),
          $path: () => `${prefix}${prefix0}${PATH1}`,
        },
        request_sales_reservation_stocks_insert: {
          /**
           * 予約・取置担当者へ、予約・取置の依頼メールを送信します。
           */
          post: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods_18xgx83['post']['status']>(prefix, `${prefix0}${PATH2}`, POST, option).send(),
          /**
           * 予約・取置担当者へ、予約・取置の依頼メールを送信します。
           */
          $post: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods_18xgx83['post']['status']>(prefix, `${prefix0}${PATH2}`, POST, option).send().then(r => r.body),
          $path: () => `${prefix}${prefix0}${PATH2}`,
        },
        /**
         * 在庫振替を取得します
         * @returns OK
         */
        get: (option?: { query?: Methods_1h4zuhp['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_1h4zuhp['get']['resBody'], BasicHeaders, Methods_1h4zuhp['get']['status']>(prefix, prefix0, GET, option).json(),
        /**
         * 在庫振替を取得します
         * @returns OK
         */
        $get: (option?: { query?: Methods_1h4zuhp['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_1h4zuhp['get']['resBody'], BasicHeaders, Methods_1h4zuhp['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_1h4zuhp['get']['query'] } | undefined) =>
          `${prefix}${prefix0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      };
    },
    print_stock_change_request: {
      /**
       * 在庫振替依頼書を出力します。
       * @returns OK
       */
      post: (option: { body: Methods_iyuyw3['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_iyuyw3['post']['resBody'], BasicHeaders, Methods_iyuyw3['post']['status']>(prefix, PATH3, POST, option).json(),
      /**
       * 在庫振替依頼書を出力します。
       * @returns OK
       */
      $post: (option: { body: Methods_iyuyw3['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_iyuyw3['post']['resBody'], BasicHeaders, Methods_iyuyw3['post']['status']>(prefix, PATH3, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH3}`,
    },
    /**
     * 在庫振替一覧を返します
     * @returns OK
     */
    get: (option: { query: Methods_by08hd['get']['query'], config?: T | undefined }) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * 在庫振替一覧を返します
     * @returns OK
     */
    $get: (option: { query: Methods_by08hd['get']['query'], config?: T | undefined }) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    /**
     * 在庫振替を追加更新削除します。
     * @returns OK
     */
    put: (option: { body: Methods_by08hd['put']['reqBody'], query?: Methods_by08hd['put']['query'] | undefined, config?: T | undefined }) =>
      fetch<Methods_by08hd['put']['resBody'], BasicHeaders, Methods_by08hd['put']['status']>(prefix, PATH0, PUT, option).json(),
    /**
     * 在庫振替を追加更新削除します。
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
