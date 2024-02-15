import type { AspidaClient, BasicHeaders } from 'aspida';
import type { Methods as Methods_1gcwxfm } from './domestic';
import type { Methods as Methods_nh9yre } from './foreign';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:80' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/shipping_orders/print_order_form/domestic';
  const PATH1 = '/api/shipping_orders/print_order_form/foreign';
  const POST = 'POST';

  return {
    domestic: {
      /**
       * 船積オーダー書を出力します。
       * @returns OK
       */
      post: (option: { body: Methods_1gcwxfm['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_1gcwxfm['post']['resBody'], BasicHeaders, Methods_1gcwxfm['post']['status']>(prefix, PATH0, POST, option).json(),
      /**
       * 船積オーダー書を出力します。
       * @returns OK
       */
      $post: (option: { body: Methods_1gcwxfm['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_1gcwxfm['post']['resBody'], BasicHeaders, Methods_1gcwxfm['post']['status']>(prefix, PATH0, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH0}`,
    },
    foreign: {
      /**
       * 船積オーダー書を出力します。
       * @returns OK
       */
      post: (option: { body: Methods_nh9yre['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_nh9yre['post']['resBody'], BasicHeaders, Methods_nh9yre['post']['status']>(prefix, PATH1, POST, option).json(),
      /**
       * 船積オーダー書を出力します。
       * @returns OK
       */
      $post: (option: { body: Methods_nh9yre['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_nh9yre['post']['resBody'], BasicHeaders, Methods_nh9yre['post']['status']>(prefix, PATH1, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH1}`,
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
