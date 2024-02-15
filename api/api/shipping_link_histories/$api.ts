import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_by08hd } from '.';
import type { Methods as Methods_gkhf74 } from './_shipping_link_history_id@number';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:80' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/shipping_link_histories';
  const GET = 'GET';

  return {
    _shipping_link_history_id: (val0: number) => {
      const prefix0 = `${PATH0}/${val0}`;

      return {
        /**
         * 出荷指示データ連係履歴を取得します
         * @returns OK
         */
        get: (option?: { query?: Methods_gkhf74['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_gkhf74['get']['resBody'], BasicHeaders, Methods_gkhf74['get']['status']>(prefix, prefix0, GET, option).json(),
        /**
         * 出荷指示データ連係履歴を取得します
         * @returns OK
         */
        $get: (option?: { query?: Methods_gkhf74['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_gkhf74['get']['resBody'], BasicHeaders, Methods_gkhf74['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_gkhf74['get']['query'] } | undefined) =>
          `${prefix}${prefix0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      };
    },
    /**
     * 出荷指示データ連係履歴一覧を返します
     * @returns OK
     */
    get: (option: { query: Methods_by08hd['get']['query'], config?: T | undefined }) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * 出荷指示データ連係履歴一覧を返します
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
