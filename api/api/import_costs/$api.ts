import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_by08hd } from '.';
import type { Methods as Methods_1570sst } from './_no@string';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:80' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/import_costs';
  const GET = 'GET';
  const PUT = 'PUT';

  return {
    _no: (val0: string) => {
      const prefix0 = `${PATH0}/${val0}`;

      return {
        /**
         * コストを取得します
         * @returns OK
         */
        get: (option?: { query?: Methods_1570sst['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_1570sst['get']['resBody'], BasicHeaders, Methods_1570sst['get']['status']>(prefix, prefix0, GET, option).json(),
        /**
         * コストを取得します
         * @returns OK
         */
        $get: (option?: { query?: Methods_1570sst['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_1570sst['get']['resBody'], BasicHeaders, Methods_1570sst['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_1570sst['get']['query'] } | undefined) =>
          `${prefix}${prefix0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      };
    },
    /**
     * コストを追加更新削除します。
     * @returns OK
     */
    put: (option: { body: Methods_by08hd['put']['reqBody'], query?: Methods_by08hd['put']['query'] | undefined, config?: T | undefined }) =>
      fetch<Methods_by08hd['put']['resBody'], BasicHeaders, Methods_by08hd['put']['status']>(prefix, PATH0, PUT, option).json(),
    /**
     * コストを追加更新削除します。
     * @returns OK
     */
    $put: (option: { body: Methods_by08hd['put']['reqBody'], query?: Methods_by08hd['put']['query'] | undefined, config?: T | undefined }) =>
      fetch<Methods_by08hd['put']['resBody'], BasicHeaders, Methods_by08hd['put']['status']>(prefix, PATH0, PUT, option).json().then(r => r.body),
    $path: (option?: { method: 'put'; query: Methods_by08hd['put']['query'] } | undefined) =>
      `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
