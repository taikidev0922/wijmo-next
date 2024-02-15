import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_by08hd } from '.';
import type { Methods as Methods_1fvhpy9 } from './_sales_reservation_id@number';
import type { Methods as Methods_1adlmqg } from './input_assist';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:80' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/sales_reservations';
  const PATH1 = '/api/sales_reservations/input_assist';
  const GET = 'GET';
  const PUT = 'PUT';

  return {
    _sales_reservation_id: (val0: number) => {
      const prefix0 = `${PATH0}/${val0}`;

      return {
        /**
         * 予約受注を取得します
         * @returns OK
         */
        get: (option?: { query?: Methods_1fvhpy9['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_1fvhpy9['get']['resBody'], BasicHeaders, Methods_1fvhpy9['get']['status']>(prefix, prefix0, GET, option).json(),
        /**
         * 予約受注を取得します
         * @returns OK
         */
        $get: (option?: { query?: Methods_1fvhpy9['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_1fvhpy9['get']['resBody'], BasicHeaders, Methods_1fvhpy9['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_1fvhpy9['get']['query'] } | undefined) =>
          `${prefix}${prefix0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      };
    },
    input_assist: {
      /**
       * 入力補助用予約受注一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_1adlmqg['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1adlmqg['get']['resBody'], BasicHeaders, Methods_1adlmqg['get']['status']>(prefix, PATH1, GET, option).json(),
      /**
       * 入力補助用予約受注一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_1adlmqg['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1adlmqg['get']['resBody'], BasicHeaders, Methods_1adlmqg['get']['status']>(prefix, PATH1, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_1adlmqg['get']['query'] } | undefined) =>
        `${prefix}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    /**
     * 予約受注一覧を返します
     * @returns OK
     */
    get: (option: { query: Methods_by08hd['get']['query'], config?: T | undefined }) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * 予約受注一覧を返します
     * @returns OK
     */
    $get: (option: { query: Methods_by08hd['get']['query'], config?: T | undefined }) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    /**
     * 予約受注を追加更新削除します。
     * @returns OK
     */
    put: (option: { body: Methods_by08hd['put']['reqBody'], query?: Methods_by08hd['put']['query'] | undefined, config?: T | undefined }) =>
      fetch<Methods_by08hd['put']['resBody'], BasicHeaders, Methods_by08hd['put']['status']>(prefix, PATH0, PUT, option).json(),
    /**
     * 予約受注を追加更新削除します。
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
