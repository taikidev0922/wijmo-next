import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_by08hd } from '.';
import type { Methods as Methods_avuljb } from './create_deposit';
import type { Methods as Methods_gx0la5 } from './print';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:80' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/account_transfer_receipts';
  const PATH1 = '/api/account_transfer_receipts/create_deposit';
  const PATH2 = '/api/account_transfer_receipts/print';
  const GET = 'GET';
  const POST = 'POST';
  const PUT = 'PUT';

  return {
    create_deposit: {
      /**
       * 入荷予定に紐づいて、在庫・仕入計上予定を更新します。更新のみ可能です。
       * @returns OK
       */
      post: (option: { body: Methods_avuljb['post']['reqBody'], query?: Methods_avuljb['post']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_avuljb['post']['resBody'], BasicHeaders, Methods_avuljb['post']['status']>(prefix, PATH1, POST, option).json(),
      /**
       * 入荷予定に紐づいて、在庫・仕入計上予定を更新します。更新のみ可能です。
       * @returns OK
       */
      $post: (option: { body: Methods_avuljb['post']['reqBody'], query?: Methods_avuljb['post']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_avuljb['post']['resBody'], BasicHeaders, Methods_avuljb['post']['status']>(prefix, PATH1, POST, option).json().then(r => r.body),
      $path: (option?: { method: 'post'; query: Methods_avuljb['post']['query'] } | undefined) =>
        `${prefix}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    print: {
      /**
       * 口座振替不能一覧データを出力します
       */
      post: (option: { body: Methods_gx0la5['post']['reqBody'], query?: Methods_gx0la5['post']['query'] | undefined, config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods_gx0la5['post']['status']>(prefix, PATH2, POST, option).send(),
      /**
       * 口座振替不能一覧データを出力します
       */
      $post: (option: { body: Methods_gx0la5['post']['reqBody'], query?: Methods_gx0la5['post']['query'] | undefined, config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods_gx0la5['post']['status']>(prefix, PATH2, POST, option).send().then(r => r.body),
      $path: (option?: { method: 'post'; query: Methods_gx0la5['post']['query'] } | undefined) =>
        `${prefix}${PATH2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    /**
     * 口座振替結果データを取り込みます
     * @returns OK
     */
    post: (option: { body: Methods_by08hd['post']['reqBody'], config?: T | undefined }) =>
      fetch<Methods_by08hd['post']['resBody'], BasicHeaders, Methods_by08hd['post']['status']>(prefix, PATH0, POST, option, 'FormData').json(),
    /**
     * 口座振替結果データを取り込みます
     * @returns OK
     */
    $post: (option: { body: Methods_by08hd['post']['reqBody'], config?: T | undefined }) =>
      fetch<Methods_by08hd['post']['resBody'], BasicHeaders, Methods_by08hd['post']['status']>(prefix, PATH0, POST, option, 'FormData').json().then(r => r.body),
    /**
     * 口座振替データ受信一覧データを取得します
     * @returns OK
     */
    get: (option: { query: Methods_by08hd['get']['query'], config?: T | undefined }) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * 口座振替データ受信一覧データを取得します
     * @returns OK
     */
    $get: (option: { query: Methods_by08hd['get']['query'], config?: T | undefined }) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    /**
     * 口座振替データ受信を削除します。
     * @returns OK
     */
    put: (option: { body: Methods_by08hd['put']['reqBody'], query?: Methods_by08hd['put']['query'] | undefined, config?: T | undefined }) =>
      fetch<Methods_by08hd['put']['resBody'], BasicHeaders, Methods_by08hd['put']['status']>(prefix, PATH0, PUT, option).json(),
    /**
     * 口座振替データ受信を削除します。
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
