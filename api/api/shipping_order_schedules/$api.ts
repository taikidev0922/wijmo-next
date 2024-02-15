import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_by08hd } from '.';
import type { Methods as Methods_169fdig } from './get_free_times';
import type { Methods as Methods_1vlnojh } from './get_imported_on';
import type { Methods as Methods_hy5bzv } from './send_check_limit';
import type { Methods as Methods_8ia8ff } from './send_delivery_schedule';
import type { Methods as Methods_1q6x73g } from './send_shipping_order';
import type { Methods as Methods_7jv7ax } from './three_week_update';
import type { Methods as Methods_pknhb9 } from './weekly';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:80' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/shipping_order_schedules';
  const PATH1 = '/api/shipping_order_schedules/get_free_times';
  const PATH2 = '/api/shipping_order_schedules/get_imported_on';
  const PATH3 = '/api/shipping_order_schedules/send_check_limit';
  const PATH4 = '/api/shipping_order_schedules/send_delivery_schedule';
  const PATH5 = '/api/shipping_order_schedules/send_shipping_order';
  const PATH6 = '/api/shipping_order_schedules/three_week_update';
  const PATH7 = '/api/shipping_order_schedules/weekly';
  const GET = 'GET';
  const POST = 'POST';
  const PUT = 'PUT';

  return {
    get_free_times: {
      /**
       * 搬入スケジュールフリータイム計算を行い一覧で返します
       * @returns OK
       */
      post: (option: { body: Methods_169fdig['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_169fdig['post']['resBody'], BasicHeaders, Methods_169fdig['post']['status']>(prefix, PATH1, POST, option).json(),
      /**
       * 搬入スケジュールフリータイム計算を行い一覧で返します
       * @returns OK
       */
      $post: (option: { body: Methods_169fdig['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_169fdig['post']['resBody'], BasicHeaders, Methods_169fdig['post']['status']>(prefix, PATH1, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH1}`,
    },
    get_imported_on: {
      /**
       * 搬入スケジュール一括搬入日計算を行い一覧で返します
       * @returns OK
       */
      post: (option: { body: Methods_1vlnojh['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_1vlnojh['post']['resBody'], BasicHeaders, Methods_1vlnojh['post']['status']>(prefix, PATH2, POST, option).json(),
      /**
       * 搬入スケジュール一括搬入日計算を行い一覧で返します
       * @returns OK
       */
      $post: (option: { body: Methods_1vlnojh['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_1vlnojh['post']['resBody'], BasicHeaders, Methods_1vlnojh['post']['status']>(prefix, PATH2, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH2}`,
    },
    send_check_limit: {
      /**
       * 検品期日_日別データ送信を実行します。
       */
      post: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods_hy5bzv['post']['status']>(prefix, PATH3, POST, option).send(),
      /**
       * 検品期日_日別データ送信を実行します。
       */
      $post: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods_hy5bzv['post']['status']>(prefix, PATH3, POST, option).send().then(r => r.body),
      $path: () => `${prefix}${PATH3}`,
    },
    send_delivery_schedule: {
      /**
       * 搬入予定表出力、送信を実行します。
       */
      post: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods_8ia8ff['post']['status']>(prefix, PATH4, POST, option).send(),
      /**
       * 搬入予定表出力、送信を実行します。
       */
      $post: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods_8ia8ff['post']['status']>(prefix, PATH4, POST, option).send().then(r => r.body),
      $path: () => `${prefix}${PATH4}`,
    },
    send_shipping_order: {
      /**
       * 船積明細データ送信を実行します。
       */
      post: (option: { body: Methods_1q6x73g['post']['reqBody'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods_1q6x73g['post']['status']>(prefix, PATH5, POST, option).send(),
      /**
       * 船積明細データ送信を実行します。
       */
      $post: (option: { body: Methods_1q6x73g['post']['reqBody'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods_1q6x73g['post']['status']>(prefix, PATH5, POST, option).send().then(r => r.body),
      $path: () => `${prefix}${PATH5}`,
    },
    three_week_update: {
      /**
       * ３週間先の日曜日までの倉庫搬入日もしくは、入港日の船積を対象に船積オーダーを整理して更新する
       */
      post: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods_7jv7ax['post']['status']>(prefix, PATH6, POST, option).send(),
      /**
       * ３週間先の日曜日までの倉庫搬入日もしくは、入港日の船積を対象に船積オーダーを整理して更新する
       */
      $post: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods_7jv7ax['post']['status']>(prefix, PATH6, POST, option).send().then(r => r.body),
      $path: () => `${prefix}${PATH6}`,
    },
    weekly: {
      /**
       * 搬入予定カレンダー、モトックスカレンダー一覧を返します
       * @returns OK
       */
      get: (option?: { query?: Methods_pknhb9['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_pknhb9['get']['resBody'], BasicHeaders, Methods_pknhb9['get']['status']>(prefix, PATH7, GET, option).json(),
      /**
       * 搬入予定カレンダー、モトックスカレンダー一覧を返します
       * @returns OK
       */
      $get: (option?: { query?: Methods_pknhb9['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_pknhb9['get']['resBody'], BasicHeaders, Methods_pknhb9['get']['status']>(prefix, PATH7, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_pknhb9['get']['query'] } | undefined) =>
        `${prefix}${PATH7}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    /**
     * 船積オーダー搬入スケジュール一覧を返します
     * @returns OK
     */
    get: (option: { query: Methods_by08hd['get']['query'], config?: T | undefined }) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * 船積オーダー搬入スケジュール一覧を返します
     * @returns OK
     */
    $get: (option: { query: Methods_by08hd['get']['query'], config?: T | undefined }) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    /**
     * 搬入スケジュールを一括更新します。
     * @returns OK
     */
    put: (option: { body: Methods_by08hd['put']['reqBody'], config?: T | undefined }) =>
      fetch<Methods_by08hd['put']['resBody'], BasicHeaders, Methods_by08hd['put']['status']>(prefix, PATH0, PUT, option).json(),
    /**
     * 搬入スケジュールを一括更新します。
     * @returns OK
     */
    $put: (option: { body: Methods_by08hd['put']['reqBody'], config?: T | undefined }) =>
      fetch<Methods_by08hd['put']['resBody'], BasicHeaders, Methods_by08hd['put']['status']>(prefix, PATH0, PUT, option).json().then(r => r.body),
    $path: (option?: { method?: 'get' | undefined; query: Methods_by08hd['get']['query'] } | undefined) =>
      `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
