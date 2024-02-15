import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_by08hd } from '.';
import type { Methods as Methods_g3ouuo } from './_purchase_reservation_id@number';
import type { Methods as Methods_1sc8ec6 } from './export_arrival_schedule';
import type { Methods as Methods_qcsrsc } from './export_schedule';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:80' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/purchase_reservations';
  const PATH1 = '/api/purchase_reservations/export_arrival_schedule';
  const PATH2 = '/api/purchase_reservations/export_schedule';
  const GET = 'GET';
  const POST = 'POST';

  return {
    _purchase_reservation_id: (val0: number) => {
      const prefix0 = `${PATH0}/${val0}`;

      return {
        /**
         * 在庫・仕入計上予定を取得します
         * @returns OK
         */
        get: (option?: { query?: Methods_g3ouuo['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_g3ouuo['get']['resBody'], BasicHeaders, Methods_g3ouuo['get']['status']>(prefix, prefix0, GET, option).json(),
        /**
         * 在庫・仕入計上予定を取得します
         * @returns OK
         */
        $get: (option?: { query?: Methods_g3ouuo['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_g3ouuo['get']['resBody'], BasicHeaders, Methods_g3ouuo['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_g3ouuo['get']['query'] } | undefined) =>
          `${prefix}${prefix0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      };
    },
    export_arrival_schedule: {
      /**
       * 入荷入予定表を出力します
       */
      post: (option: { body: Methods_1sc8ec6['post']['reqBody'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods_1sc8ec6['post']['status']>(prefix, PATH1, POST, option).send(),
      /**
       * 入荷入予定表を出力します
       */
      $post: (option: { body: Methods_1sc8ec6['post']['reqBody'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods_1sc8ec6['post']['status']>(prefix, PATH1, POST, option).send().then(r => r.body),
      $path: () => `${prefix}${PATH1}`,
    },
    export_schedule: {
      /**
       * 指定月以降の仕入予定表を出力します
       */
      post: (option: { body: Methods_qcsrsc['post']['reqBody'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods_qcsrsc['post']['status']>(prefix, PATH2, POST, option).send(),
      /**
       * 指定月以降の仕入予定表を出力します
       */
      $post: (option: { body: Methods_qcsrsc['post']['reqBody'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods_qcsrsc['post']['status']>(prefix, PATH2, POST, option).send().then(r => r.body),
      $path: () => `${prefix}${PATH2}`,
    },
    /**
     * 在庫・仕入計上予定一覧を返します
     * @returns OK
     */
    get: (option: { query: Methods_by08hd['get']['query'], config?: T | undefined }) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * 在庫・仕入計上予定一覧を返します
     * @returns OK
     */
    $get: (option: { query: Methods_by08hd['get']['query'], config?: T | undefined }) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    $path: (option?: { method?: 'get' | undefined; query: Methods_by08hd['get']['query'] } | undefined) =>
      `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
