import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_by08hd } from '.';
import type { Methods as Methods_17q8xfo } from './due_detail';
import type { Methods as Methods_1uh11vf } from './due_index';
import type { Methods as Methods_9xumir } from './print_check_list';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:80' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/payment_schedules';
  const PATH1 = '/api/payment_schedules/due_detail';
  const PATH2 = '/api/payment_schedules/due_index';
  const PATH3 = '/api/payment_schedules/print_check_list';
  const GET = 'GET';
  const POST = 'POST';
  const PUT = 'PUT';

  return {
    due_detail: {
      /**
       * 支払期日一覧明細
       * @returns OK
       */
      get: (option: { query: Methods_17q8xfo['get']['query'], config?: T | undefined }) =>
        fetch<Methods_17q8xfo['get']['resBody'], BasicHeaders, Methods_17q8xfo['get']['status']>(prefix, PATH1, GET, option).json(),
      /**
       * 支払期日一覧明細
       * @returns OK
       */
      $get: (option: { query: Methods_17q8xfo['get']['query'], config?: T | undefined }) =>
        fetch<Methods_17q8xfo['get']['resBody'], BasicHeaders, Methods_17q8xfo['get']['status']>(prefix, PATH1, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_17q8xfo['get']['query'] } | undefined) =>
        `${prefix}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    due_index: {
      /**
       * 支払期日一覧取得
       * @returns OK
       */
      get: (option: { query: Methods_1uh11vf['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1uh11vf['get']['resBody'], BasicHeaders, Methods_1uh11vf['get']['status']>(prefix, PATH2, GET, option).json(),
      /**
       * 支払期日一覧取得
       * @returns OK
       */
      $get: (option: { query: Methods_1uh11vf['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1uh11vf['get']['resBody'], BasicHeaders, Methods_1uh11vf['get']['status']>(prefix, PATH2, GET, option).json().then(r => r.body),
      /**
       * 支払予定を更新します。
       * @returns OK
       */
      put: (option: { body: Methods_1uh11vf['put']['reqBody'], query?: Methods_1uh11vf['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1uh11vf['put']['resBody'], BasicHeaders, Methods_1uh11vf['put']['status']>(prefix, PATH2, PUT, option).json(),
      /**
       * 支払予定を更新します。
       * @returns OK
       */
      $put: (option: { body: Methods_1uh11vf['put']['reqBody'], query?: Methods_1uh11vf['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1uh11vf['put']['resBody'], BasicHeaders, Methods_1uh11vf['put']['status']>(prefix, PATH2, PUT, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_1uh11vf['get']['query'] } | { method: 'put'; query: Methods_1uh11vf['put']['query'] } | undefined) =>
        `${prefix}${PATH2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    print_check_list: {
      /**
       * 支払予定チェックリストを出力します。
       * @returns OK
       */
      post: (option: { body: Methods_9xumir['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_9xumir['post']['resBody'], BasicHeaders, Methods_9xumir['post']['status']>(prefix, PATH3, POST, option).json(),
      /**
       * 支払予定チェックリストを出力します。
       * @returns OK
       */
      $post: (option: { body: Methods_9xumir['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_9xumir['post']['resBody'], BasicHeaders, Methods_9xumir['post']['status']>(prefix, PATH3, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH3}`,
    },
    /**
     * 支払予定一覧を返します
     * @returns OK
     */
    get: (option: { query: Methods_by08hd['get']['query'], config?: T | undefined }) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * 支払予定一覧を返します
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
