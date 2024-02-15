import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_14phedy } from './_search_id@number';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:80' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/generic_searches';
  const GET = 'GET';

  return {
    _search_id: (val0: number) => {
      const prefix0 = `${PATH0}/${val0}`;

      return {
        /**
         * 汎用データを取得します
         * @returns OK
         */
        get: (option: { query: Methods_14phedy['get']['query'], config?: T | undefined }) =>
          fetch<Methods_14phedy['get']['resBody'], BasicHeaders, Methods_14phedy['get']['status']>(prefix, prefix0, GET, option).json(),
        /**
         * 汎用データを取得します
         * @returns OK
         */
        $get: (option: { query: Methods_14phedy['get']['query'], config?: T | undefined }) =>
          fetch<Methods_14phedy['get']['resBody'], BasicHeaders, Methods_14phedy['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_14phedy['get']['query'] } | undefined) =>
          `${prefix}${prefix0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      };
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
