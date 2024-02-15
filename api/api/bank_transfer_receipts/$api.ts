import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_by08hd } from '.';
import type { Methods as Methods_avuljb } from './create_deposit';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:80' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/bank_transfer_receipts';
  const PATH1 = '/api/bank_transfer_receipts/create_deposit';
  const GET = 'GET';
  const POST = 'POST';
  const PUT = 'PUT';

  return {
    create_deposit: {
      /**
       * 振込データを取り込みます
       * @returns OK
       */
      post: (option: { body: Methods_avuljb['post']['reqBody'], query?: Methods_avuljb['post']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_avuljb['post']['resBody'], BasicHeaders, Methods_avuljb['post']['status']>(prefix, PATH1, POST, option).json(),
      /**
       * 振込データを取り込みます
       * @returns OK
       */
      $post: (option: { body: Methods_avuljb['post']['reqBody'], query?: Methods_avuljb['post']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_avuljb['post']['resBody'], BasicHeaders, Methods_avuljb['post']['status']>(prefix, PATH1, POST, option).json().then(r => r.body),
      $path: (option?: { method: 'post'; query: Methods_avuljb['post']['query'] } | undefined) =>
        `${prefix}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    /**
     * 振込データ受信一覧データを取得します
     * @returns OK
     */
    get: (option: { query: Methods_by08hd['get']['query'], config?: T | undefined }) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * 振込データ受信一覧データを取得します
     * @returns OK
     */
    $get: (option: { query: Methods_by08hd['get']['query'], config?: T | undefined }) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    /**
     * 振込データを取り込みます
     */
    post: (option: { body: Methods_by08hd['post']['reqBody'], query?: Methods_by08hd['post']['query'] | undefined, config?: T | undefined }) =>
      fetch<void, BasicHeaders, Methods_by08hd['post']['status']>(prefix, PATH0, POST, option, 'FormData').send(),
    /**
     * 振込データを取り込みます
     */
    $post: (option: { body: Methods_by08hd['post']['reqBody'], query?: Methods_by08hd['post']['query'] | undefined, config?: T | undefined }) =>
      fetch<void, BasicHeaders, Methods_by08hd['post']['status']>(prefix, PATH0, POST, option, 'FormData').send().then(r => r.body),
    /**
     * 振込データを取り込みます
     * @returns OK
     */
    put: (option: { body: Methods_by08hd['put']['reqBody'], query?: Methods_by08hd['put']['query'] | undefined, config?: T | undefined }) =>
      fetch<Methods_by08hd['put']['resBody'], BasicHeaders, Methods_by08hd['put']['status']>(prefix, PATH0, PUT, option).json(),
    /**
     * 振込データを取り込みます
     * @returns OK
     */
    $put: (option: { body: Methods_by08hd['put']['reqBody'], query?: Methods_by08hd['put']['query'] | undefined, config?: T | undefined }) =>
      fetch<Methods_by08hd['put']['resBody'], BasicHeaders, Methods_by08hd['put']['status']>(prefix, PATH0, PUT, option).json().then(r => r.body),
    $path: (option?: { method?: 'get' | undefined; query: Methods_by08hd['get']['query'] } | { method: 'post'; query: Methods_by08hd['post']['query'] } | { method: 'put'; query: Methods_by08hd['put']['query'] } | undefined) =>
      `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
