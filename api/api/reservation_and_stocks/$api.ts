import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_by08hd } from '.';
import type { Methods as Methods_128cola } from './domestic_orders';
import type { Methods as Methods_6u3rhg } from './latest_arrival_domestic';
import type { Methods as Methods_1cqhazu } from './latest_arrival_shipping';
import type { Methods as Methods_mx6oah } from './oldest_stock_change';
import type { Methods as Methods_gx0la5 } from './print';
import type { Methods as Methods_1ju32do } from './shipping_orders';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:80' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/reservation_and_stocks';
  const PATH1 = '/api/reservation_and_stocks/domestic_orders';
  const PATH2 = '/api/reservation_and_stocks/latest_arrival_domestic';
  const PATH3 = '/api/reservation_and_stocks/latest_arrival_shipping';
  const PATH4 = '/api/reservation_and_stocks/oldest_stock_change';
  const PATH5 = '/api/reservation_and_stocks/print';
  const PATH6 = '/api/reservation_and_stocks/shipping_orders';
  const GET = 'GET';
  const POST = 'POST';
  const PUT = 'PUT';

  return {
    domestic_orders: {
      /**
       * 指定条件の国内発注情報を取得します。
       * @returns OK
       */
      get: (option: { query: Methods_128cola['get']['query'], config?: T | undefined }) =>
        fetch<Methods_128cola['get']['resBody'], BasicHeaders, Methods_128cola['get']['status']>(prefix, PATH1, GET, option).json(),
      /**
       * 指定条件の国内発注情報を取得します。
       * @returns OK
       */
      $get: (option: { query: Methods_128cola['get']['query'], config?: T | undefined }) =>
        fetch<Methods_128cola['get']['resBody'], BasicHeaders, Methods_128cola['get']['status']>(prefix, PATH1, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_128cola['get']['query'] } | undefined) =>
        `${prefix}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    latest_arrival_domestic: {
      /**
       * 指定(なければ直近)の船積オーダーを取得します
       * @returns OK
       */
      get: (option?: { query?: Methods_6u3rhg['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_6u3rhg['get']['resBody'], BasicHeaders, Methods_6u3rhg['get']['status']>(prefix, PATH2, GET, option).json(),
      /**
       * 指定(なければ直近)の船積オーダーを取得します
       * @returns OK
       */
      $get: (option?: { query?: Methods_6u3rhg['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_6u3rhg['get']['resBody'], BasicHeaders, Methods_6u3rhg['get']['status']>(prefix, PATH2, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_6u3rhg['get']['query'] } | undefined) =>
        `${prefix}${PATH2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    latest_arrival_shipping: {
      /**
       * 指定(なければ直近)の船積オーダーを取得します
       * @returns OK
       */
      get: (option?: { query?: Methods_1cqhazu['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_1cqhazu['get']['resBody'], BasicHeaders, Methods_1cqhazu['get']['status']>(prefix, PATH3, GET, option).json(),
      /**
       * 指定(なければ直近)の船積オーダーを取得します
       * @returns OK
       */
      $get: (option?: { query?: Methods_1cqhazu['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_1cqhazu['get']['resBody'], BasicHeaders, Methods_1cqhazu['get']['status']>(prefix, PATH3, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_1cqhazu['get']['query'] } | undefined) =>
        `${prefix}${PATH3}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    oldest_stock_change: {
      /**
       * 指定の品番、倉庫IDMに該当するうち、依頼日が最も古い在庫振替Noを取得します。
       * @returns OK
       */
      get: (option: { query: Methods_mx6oah['get']['query'], config?: T | undefined }) =>
        fetch<Methods_mx6oah['get']['resBody'], BasicHeaders, Methods_mx6oah['get']['status']>(prefix, PATH4, GET, option).json(),
      /**
       * 指定の品番、倉庫IDMに該当するうち、依頼日が最も古い在庫振替Noを取得します。
       * @returns OK
       */
      $get: (option: { query: Methods_mx6oah['get']['query'], config?: T | undefined }) =>
        fetch<Methods_mx6oah['get']['resBody'], BasicHeaders, Methods_mx6oah['get']['status']>(prefix, PATH4, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_mx6oah['get']['query'] } | undefined) =>
        `${prefix}${PATH4}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    print: {
      /**
       * 現物取置依頼書を出力します。
       * @returns OK
       */
      post: (option: { body: Methods_gx0la5['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_gx0la5['post']['resBody'], BasicHeaders, Methods_gx0la5['post']['status']>(prefix, PATH5, POST, option).json(),
      /**
       * 現物取置依頼書を出力します。
       * @returns OK
       */
      $post: (option: { body: Methods_gx0la5['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_gx0la5['post']['resBody'], BasicHeaders, Methods_gx0la5['post']['status']>(prefix, PATH5, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH5}`,
    },
    shipping_orders: {
      /**
       * 指定条件の船積オーダー情報を取得します。
       * @returns OK
       */
      get: (option: { query: Methods_1ju32do['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1ju32do['get']['resBody'], BasicHeaders, Methods_1ju32do['get']['status']>(prefix, PATH6, GET, option).json(),
      /**
       * 指定条件の船積オーダー情報を取得します。
       * @returns OK
       */
      $get: (option: { query: Methods_1ju32do['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1ju32do['get']['resBody'], BasicHeaders, Methods_1ju32do['get']['status']>(prefix, PATH6, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_1ju32do['get']['query'] } | undefined) =>
        `${prefix}${PATH6}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    /**
     * 予約受注/取置一覧を返します
     * @returns OK
     */
    get: (option: { query: Methods_by08hd['get']['query'], config?: T | undefined }) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * 予約受注/取置一覧を返します
     * @returns OK
     */
    $get: (option: { query: Methods_by08hd['get']['query'], config?: T | undefined }) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    /**
     * 予約受注/取置を追加更新削除します。
     * @returns OK
     */
    put: (option: { body: Methods_by08hd['put']['reqBody'], query?: Methods_by08hd['put']['query'] | undefined, config?: T | undefined }) =>
      fetch<Methods_by08hd['put']['resBody'], BasicHeaders, Methods_by08hd['put']['status']>(prefix, PATH0, PUT, option).json(),
    /**
     * 予約受注/取置を追加更新削除します。
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
