import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_1oi4z8z } from './bulk_update_check_limit_on';
import type { Methods as Methods_11whej9 } from './export_check_limit_on';
import type { Methods as Methods_u7ufwp } from './labels';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:80' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/shipping_order_details/bulk_update_check_limit_on';
  const PATH1 = '/api/shipping_order_details/export_check_limit_on';
  const PATH2 = '/api/shipping_order_details/labels';
  const GET = 'GET';
  const POST = 'POST';

  return {
    bulk_update_check_limit_on: {
      /**
       * 船積オーダー検品期日データを取り込みます。
       * @returns OK
       */
      post: (option: { body: Methods_1oi4z8z['post']['reqBody'], query?: Methods_1oi4z8z['post']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1oi4z8z['post']['resBody'], BasicHeaders, Methods_1oi4z8z['post']['status']>(prefix, PATH0, POST, option, 'FormData').json(),
      /**
       * 船積オーダー検品期日データを取り込みます。
       * @returns OK
       */
      $post: (option: { body: Methods_1oi4z8z['post']['reqBody'], query?: Methods_1oi4z8z['post']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1oi4z8z['post']['resBody'], BasicHeaders, Methods_1oi4z8z['post']['status']>(prefix, PATH0, POST, option, 'FormData').json().then(r => r.body),
      $path: (option?: { method: 'post'; query: Methods_1oi4z8z['post']['query'] } | undefined) =>
        `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    export_check_limit_on: {
      /**
       * 検品期日データを出力します。
       */
      post: (option: { body: Methods_11whej9['post']['reqBody'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods_11whej9['post']['status']>(prefix, PATH1, POST, option).send(),
      /**
       * 検品期日データを出力します。
       */
      $post: (option: { body: Methods_11whej9['post']['reqBody'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods_11whej9['post']['status']>(prefix, PATH1, POST, option).send().then(r => r.body),
      $path: () => `${prefix}${PATH1}`,
    },
    labels: {
      /**
       * ラベル手配管理対象の船積オーダー明細一覧を返します ※ embedを指定なしで船積オーダー明細と船積オーダー通関書類が返却される
       * @returns OK
       */
      get: (option: { query: Methods_u7ufwp['get']['query'], config?: T | undefined }) =>
        fetch<Methods_u7ufwp['get']['resBody'], BasicHeaders, Methods_u7ufwp['get']['status']>(prefix, PATH2, GET, option).json(),
      /**
       * ラベル手配管理対象の船積オーダー明細一覧を返します ※ embedを指定なしで船積オーダー明細と船積オーダー通関書類が返却される
       * @returns OK
       */
      $get: (option: { query: Methods_u7ufwp['get']['query'], config?: T | undefined }) =>
        fetch<Methods_u7ufwp['get']['resBody'], BasicHeaders, Methods_u7ufwp['get']['status']>(prefix, PATH2, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_u7ufwp['get']['query'] } | undefined) =>
        `${prefix}${PATH2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
