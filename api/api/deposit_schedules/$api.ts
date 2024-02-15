import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_by08hd } from '.';
import type { Methods as Methods_7016y3 } from './diff_customers';
import type { Methods as Methods_1phj2b5 } from './make_zero_schedule';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:80' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/deposit_schedules';
  const PATH1 = '/api/deposit_schedules/diff_customers';
  const PATH2 = '/api/deposit_schedules/make_zero_schedule';
  const GET = 'GET';
  const POST = 'POST';
  const PUT = 'PUT';

  return {
    diff_customers: {
      /**
       * 入金予定が未作成の得意先一覧を取得します
       * @returns OK
       */
      get: (option: { query: Methods_7016y3['get']['query'], config?: T | undefined }) =>
        fetch<Methods_7016y3['get']['resBody'], BasicHeaders, Methods_7016y3['get']['status']>(prefix, PATH1, GET, option).json(),
      /**
       * 入金予定が未作成の得意先一覧を取得します
       * @returns OK
       */
      $get: (option: { query: Methods_7016y3['get']['query'], config?: T | undefined }) =>
        fetch<Methods_7016y3['get']['resBody'], BasicHeaders, Methods_7016y3['get']['status']>(prefix, PATH1, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_7016y3['get']['query'] } | undefined) =>
        `${prefix}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    make_zero_schedule: {
      /**
       * 入金予定をゼロ円で作成します
       * @returns OK
       */
      post: (option: { body: Methods_1phj2b5['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_1phj2b5['post']['resBody'], BasicHeaders, Methods_1phj2b5['post']['status']>(prefix, PATH2, POST, option).json(),
      /**
       * 入金予定をゼロ円で作成します
       * @returns OK
       */
      $post: (option: { body: Methods_1phj2b5['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_1phj2b5['post']['resBody'], BasicHeaders, Methods_1phj2b5['post']['status']>(prefix, PATH2, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH2}`,
    },
    /**
     * 入金予約一覧を返します
     * @returns OK
     */
    get: (option: { query: Methods_by08hd['get']['query'], config?: T | undefined }) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * 入金予約一覧を返します
     * @returns OK
     */
    $get: (option: { query: Methods_by08hd['get']['query'], config?: T | undefined }) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    /**
     * 入金予約を追加更新削除します。
     * @returns OK
     */
    put: (option: { body: Methods_by08hd['put']['reqBody'], query?: Methods_by08hd['put']['query'] | undefined, config?: T | undefined }) =>
      fetch<Methods_by08hd['put']['resBody'], BasicHeaders, Methods_by08hd['put']['status']>(prefix, PATH0, PUT, option).json(),
    /**
     * 入金予約を追加更新削除します。
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
