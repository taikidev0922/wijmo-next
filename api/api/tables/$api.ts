import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_p0l8qg } from './_table_id@string';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:80' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/tables';
  const GET = 'GET';

  return {
    _table_id: (val0: string) => {
      const prefix0 = `${PATH0}/${val0}`;

      return {
        /**
         * 単一テーブルのデータを一覧で取得し返却します
         * @returns OK
         */
        get: (option?: { query?: Methods_p0l8qg['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_p0l8qg['get']['resBody'], BasicHeaders, Methods_p0l8qg['get']['status']>(prefix, prefix0, GET, option).json(),
        /**
         * 単一テーブルのデータを一覧で取得し返却します
         * @returns OK
         */
        $get: (option?: { query?: Methods_p0l8qg['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_p0l8qg['get']['resBody'], BasicHeaders, Methods_p0l8qg['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_p0l8qg['get']['query'] } | undefined) =>
          `${prefix}${prefix0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      };
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
