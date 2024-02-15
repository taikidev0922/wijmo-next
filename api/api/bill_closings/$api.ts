import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_by08hd } from '.';
import type { Methods as Methods_1194fol } from './bulk_async';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:80' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/bill_closings';
  const PATH1 = '/api/bill_closings/bulk_async';
  const GET = 'GET';
  const POST = 'POST';
  const PUT = 'PUT';

  return {
    bulk_async: {
      /**
       * 請求締一覧を一括処理します。応答には user_logs も含まれます。embed はバッチ出力に対する指示になります。
       * @returns OK
       */
      post: (option: { body: Methods_1194fol['post']['reqBody'], query?: Methods_1194fol['post']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1194fol['post']['resBody'], BasicHeaders, Methods_1194fol['post']['status']>(prefix, PATH1, POST, option).json(),
      /**
       * 請求締一覧を一括処理します。応答には user_logs も含まれます。embed はバッチ出力に対する指示になります。
       * @returns OK
       */
      $post: (option: { body: Methods_1194fol['post']['reqBody'], query?: Methods_1194fol['post']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1194fol['post']['resBody'], BasicHeaders, Methods_1194fol['post']['status']>(prefix, PATH1, POST, option).json().then(r => r.body),
      $path: (option?: { method: 'post'; query: Methods_1194fol['post']['query'] } | undefined) =>
        `${prefix}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    /**
     * 請求締一覧を返します
     * @returns OK
     */
    get: (option: { query: Methods_by08hd['get']['query'], config?: T | undefined }) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * 請求締一覧を返します
     * @returns OK
     */
    $get: (option: { query: Methods_by08hd['get']['query'], config?: T | undefined }) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    /**
     * 請求締一覧を一括処理します。
     * @returns OK
     */
    put: (option: { body: Methods_by08hd['put']['reqBody'], query?: Methods_by08hd['put']['query'] | undefined, config?: T | undefined }) =>
      fetch<Methods_by08hd['put']['resBody'], BasicHeaders, Methods_by08hd['put']['status']>(prefix, PATH0, PUT, option).json(),
    /**
     * 請求締一覧を一括処理します。
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
