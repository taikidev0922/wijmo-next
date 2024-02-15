import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_by08hd } from '.';
import type { Methods as Methods_px2rce } from './create';
import type { Methods as Methods_jho43c } from './export';
import type { Methods as Methods_1f1gdhr } from './show';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:80' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/account_transfer_requests';
  const PATH1 = '/api/account_transfer_requests/create';
  const PATH2 = '/api/account_transfer_requests/export';
  const PATH3 = '/api/account_transfer_requests/show';
  const GET = 'GET';
  const POST = 'POST';
  const PUT = 'PUT';

  return {
    create: {
      /**
       * 口座振替依頼データを作成します。
       */
      post: (option: { body: Methods_px2rce['post']['reqBody'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods_px2rce['post']['status']>(prefix, PATH1, POST, option).send(),
      /**
       * 口座振替依頼データを作成します。
       */
      $post: (option: { body: Methods_px2rce['post']['reqBody'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods_px2rce['post']['status']>(prefix, PATH1, POST, option).send().then(r => r.body),
      $path: () => `${prefix}${PATH1}`,
    },
    export: {
      /**
       * 口座振替依頼データを出力します。
       */
      post: (option: { body: Methods_jho43c['post']['reqBody'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods_jho43c['post']['status']>(prefix, PATH2, POST, option).send(),
      /**
       * 口座振替依頼データを出力します。
       */
      $post: (option: { body: Methods_jho43c['post']['reqBody'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods_jho43c['post']['status']>(prefix, PATH2, POST, option).send().then(r => r.body),
      $path: () => `${prefix}${PATH2}`,
    },
    show: {
      /**
       * 口座振替データ一覧を取得します
       * @returns OK
       */
      get: (option: { query: Methods_1f1gdhr['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1f1gdhr['get']['resBody'], BasicHeaders, Methods_1f1gdhr['get']['status']>(prefix, PATH3, GET, option).json(),
      /**
       * 口座振替データ一覧を取得します
       * @returns OK
       */
      $get: (option: { query: Methods_1f1gdhr['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1f1gdhr['get']['resBody'], BasicHeaders, Methods_1f1gdhr['get']['status']>(prefix, PATH3, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_1f1gdhr['get']['query'] } | undefined) =>
        `${prefix}${PATH3}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    /**
     * 口座振替依頼一覧データを取得します
     * @returns OK
     */
    get: (option: { query: Methods_by08hd['get']['query'], config?: T | undefined }) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * 口座振替依頼一覧データを取得します
     * @returns OK
     */
    $get: (option: { query: Methods_by08hd['get']['query'], config?: T | undefined }) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    /**
     * 口座振替依頼を追加更新削除します。
     * @returns OK
     */
    put: (option: { body: Methods_by08hd['put']['reqBody'], query?: Methods_by08hd['put']['query'] | undefined, config?: T | undefined }) =>
      fetch<Methods_by08hd['put']['resBody'], BasicHeaders, Methods_by08hd['put']['status']>(prefix, PATH0, PUT, option).json(),
    /**
     * 口座振替依頼を追加更新削除します。
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
