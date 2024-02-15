import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_by08hd } from '.';
import type { Methods as Methods_1eebdc3 } from './_sub_account_title_id@number';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:80' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/sub_account_titles';
  const GET = 'GET';

  return {
    _sub_account_title_id: (val0: number) => {
      const prefix0 = `${PATH0}/${val0}`;

      return {
        /**
         * 補助科目を取得します
         * @returns OK
         */
        get: (option?: { query?: Methods_1eebdc3['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_1eebdc3['get']['resBody'], BasicHeaders, Methods_1eebdc3['get']['status']>(prefix, prefix0, GET, option).json(),
        /**
         * 補助科目を取得します
         * @returns OK
         */
        $get: (option?: { query?: Methods_1eebdc3['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_1eebdc3['get']['resBody'], BasicHeaders, Methods_1eebdc3['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_1eebdc3['get']['query'] } | undefined) =>
          `${prefix}${prefix0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      };
    },
    /**
     * 補助科目一覧を返します
     * @returns OK
     */
    get: (option: { query: Methods_by08hd['get']['query'], config?: T | undefined }) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * 補助科目一覧を返します
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
