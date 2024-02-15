import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_by08hd } from '.';
import type { Methods as Methods_gx0la5 } from './print';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:80' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/bill_results';
  const PATH1 = '/api/bill_results/print';
  const GET = 'GET';
  const POST = 'POST';

  return {
    print: {
      /**
       * 売掛金残高証明書を出力します。
       * @returns OK
       */
      post: (option: { body: Methods_gx0la5['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_gx0la5['post']['resBody'], BasicHeaders, Methods_gx0la5['post']['status']>(prefix, PATH1, POST, option).json(),
      /**
       * 売掛金残高証明書を出力します。
       * @returns OK
       */
      $post: (option: { body: Methods_gx0la5['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_gx0la5['post']['resBody'], BasicHeaders, Methods_gx0la5['post']['status']>(prefix, PATH1, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH1}`,
    },
    /**
     * 請求実績を返します
     * @returns OK
     */
    get: (option: { query: Methods_by08hd['get']['query'], config?: T | undefined }) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * 請求実績を返します
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
