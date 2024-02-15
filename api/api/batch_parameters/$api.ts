import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_by08hd } from '.';
import type { Methods as Methods_1jzwtlo } from './_batch_parameter_id@string';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:80' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/batch_parameters';
  const GET = 'GET';
  const POST = 'POST';
  const PUT = 'PUT';

  return {
    _batch_parameter_id: (val0: string) => {
      const prefix0 = `${PATH0}/${val0}`;

      return {
        /**
         * バッチパラメータを取得します
         * @returns OK
         */
        get: (option?: { query?: Methods_1jzwtlo['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_1jzwtlo['get']['resBody'], BasicHeaders, Methods_1jzwtlo['get']['status']>(prefix, prefix0, GET, option).json(),
        /**
         * バッチパラメータを取得します
         * @returns OK
         */
        $get: (option?: { query?: Methods_1jzwtlo['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_1jzwtlo['get']['resBody'], BasicHeaders, Methods_1jzwtlo['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
        /**
         * バッチを実行します
         * @returns OK
         */
        post: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_1jzwtlo['post']['resBody'], BasicHeaders, Methods_1jzwtlo['post']['status']>(prefix, prefix0, POST, option).json(),
        /**
         * バッチを実行します
         * @returns OK
         */
        $post: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_1jzwtlo['post']['resBody'], BasicHeaders, Methods_1jzwtlo['post']['status']>(prefix, prefix0, POST, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_1jzwtlo['get']['query'] } | undefined) =>
          `${prefix}${prefix0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      };
    },
    /**
     * バッチパラメータ一覧を返します
     * @returns OK
     */
    get: (option: { query: Methods_by08hd['get']['query'], config?: T | undefined }) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * バッチパラメータ一覧を返します
     * @returns OK
     */
    $get: (option: { query: Methods_by08hd['get']['query'], config?: T | undefined }) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    /**
     * バッチパラメータを追加更新削除します。
     * @returns OK
     */
    put: (option: { body: Methods_by08hd['put']['reqBody'], query?: Methods_by08hd['put']['query'] | undefined, config?: T | undefined }) =>
      fetch<Methods_by08hd['put']['resBody'], BasicHeaders, Methods_by08hd['put']['status']>(prefix, PATH0, PUT, option).json(),
    /**
     * バッチパラメータを追加更新削除します。
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
