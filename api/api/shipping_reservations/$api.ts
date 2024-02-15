import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_by08hd } from '.';
import type { Methods as Methods_1570sst } from './_no@string';
import type { Methods as Methods_1da1jwy } from './bulk_insert';
import type { Methods as Methods_17gpw36 } from './output_remaining_shipping_reservation';
import type { Methods as Methods_l3tn4x } from './print_order_form';
import type { Methods as Methods_v2hewt } from './vendors_with_remaining_shipping_reservation';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:80' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/shipping_reservations';
  const PATH1 = '/api/shipping_reservations/bulk_insert';
  const PATH2 = '/api/shipping_reservations/output_remaining_shipping_reservation';
  const PATH3 = '/api/shipping_reservations/print_order_form';
  const PATH4 = '/api/shipping_reservations/vendors_with_remaining_shipping_reservation';
  const GET = 'GET';
  const POST = 'POST';
  const PUT = 'PUT';

  return {
    _no: (val0: string) => {
      const prefix0 = `${PATH0}/${val0}`;

      return {
        /**
         * 予約オーダーを取得します
         * @returns OK
         */
        get: (option?: { query?: Methods_1570sst['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_1570sst['get']['resBody'], BasicHeaders, Methods_1570sst['get']['status']>(prefix, prefix0, GET, option).json(),
        /**
         * 予約オーダーを取得します
         * @returns OK
         */
        $get: (option?: { query?: Methods_1570sst['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_1570sst['get']['resBody'], BasicHeaders, Methods_1570sst['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_1570sst['get']['query'] } | undefined) =>
          `${prefix}${prefix0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      };
    },
    bulk_insert: {
      /**
       * 予約オーダーデータを取り込みます。
       * @returns OK
       */
      post: (option: { body: Methods_1da1jwy['post']['reqBody'], query?: Methods_1da1jwy['post']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1da1jwy['post']['resBody'], BasicHeaders, Methods_1da1jwy['post']['status']>(prefix, PATH1, POST, option, 'FormData').json(),
      /**
       * 予約オーダーデータを取り込みます。
       * @returns OK
       */
      $post: (option: { body: Methods_1da1jwy['post']['reqBody'], query?: Methods_1da1jwy['post']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1da1jwy['post']['resBody'], BasicHeaders, Methods_1da1jwy['post']['status']>(prefix, PATH1, POST, option, 'FormData').json().then(r => r.body),
      $path: (option?: { method: 'post'; query: Methods_1da1jwy['post']['query'] } | undefined) =>
        `${prefix}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    output_remaining_shipping_reservation: {
      /**
       * 支払先別予約オーダー残データを出力します。
       * @returns OK
       */
      post: (option: { body: Methods_17gpw36['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_17gpw36['post']['resBody'], BasicHeaders, Methods_17gpw36['post']['status']>(prefix, PATH2, POST, option).json(),
      /**
       * 支払先別予約オーダー残データを出力します。
       * @returns OK
       */
      $post: (option: { body: Methods_17gpw36['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_17gpw36['post']['resBody'], BasicHeaders, Methods_17gpw36['post']['status']>(prefix, PATH2, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH2}`,
    },
    print_order_form: {
      /**
       * 予約オーダー書を出力します。
       * @returns OK
       */
      post: (option: { body: Methods_l3tn4x['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_l3tn4x['post']['resBody'], BasicHeaders, Methods_l3tn4x['post']['status']>(prefix, PATH3, POST, option).json(),
      /**
       * 予約オーダー書を出力します。
       * @returns OK
       */
      $post: (option: { body: Methods_l3tn4x['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_l3tn4x['post']['resBody'], BasicHeaders, Methods_l3tn4x['post']['status']>(prefix, PATH3, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH3}`,
    },
    vendors_with_remaining_shipping_reservation: {
      /**
       * 予約オーダー残有支払先の一覧を取得します。
       * @returns OK
       */
      get: (option?: { query?: Methods_v2hewt['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_v2hewt['get']['resBody'], BasicHeaders, Methods_v2hewt['get']['status']>(prefix, PATH4, GET, option).json(),
      /**
       * 予約オーダー残有支払先の一覧を取得します。
       * @returns OK
       */
      $get: (option?: { query?: Methods_v2hewt['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_v2hewt['get']['resBody'], BasicHeaders, Methods_v2hewt['get']['status']>(prefix, PATH4, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_v2hewt['get']['query'] } | undefined) =>
        `${prefix}${PATH4}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    /**
     * 予約オーダー一覧を返します
     * @returns OK
     */
    get: (option: { query: Methods_by08hd['get']['query'], config?: T | undefined }) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * 予約オーダー一覧を返します
     * @returns OK
     */
    $get: (option: { query: Methods_by08hd['get']['query'], config?: T | undefined }) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    /**
     * 予約オーダーを追加更新削除します。
     * @returns OK
     */
    put: (option: { body: Methods_by08hd['put']['reqBody'], query?: Methods_by08hd['put']['query'] | undefined, config?: T | undefined }) =>
      fetch<Methods_by08hd['put']['resBody'], BasicHeaders, Methods_by08hd['put']['status']>(prefix, PATH0, PUT, option).json(),
    /**
     * 予約オーダーを追加更新削除します。
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
