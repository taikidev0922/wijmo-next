import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_by08hd } from '.';
import type { Methods as Methods_51ikwd } from './_contract_stock_id@number';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:80' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/contract_stocks';
  const GET = 'GET';

  return {
    _contract_stock_id: (val0: number) => {
      const prefix0 = `${PATH0}/${val0}`;

      return {
        /**
         * 委託倉庫在庫を取得します
         * @returns OK
         */
        get: (option?: { query?: Methods_51ikwd['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_51ikwd['get']['resBody'], BasicHeaders, Methods_51ikwd['get']['status']>(prefix, prefix0, GET, option).json(),
        /**
         * 委託倉庫在庫を取得します
         * @returns OK
         */
        $get: (option?: { query?: Methods_51ikwd['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_51ikwd['get']['resBody'], BasicHeaders, Methods_51ikwd['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_51ikwd['get']['query'] } | undefined) =>
          `${prefix}${prefix0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      };
    },
    /**
     * 委託倉庫在庫一覧を返します
     * @returns OK
     */
    get: (option: { query: Methods_by08hd['get']['query'], config?: T | undefined }) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * 委託倉庫在庫一覧を返します
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
