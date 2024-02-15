import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_by08hd } from '.';
import type { Methods as Methods_14eshup } from './_sales_stock_id@number';
import type { Methods as Methods_1ovjgvz } from './layaway_request_form';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:80' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/sales_stocks';
  const PATH1 = '/api/sales_stocks/layaway_request_form';
  const GET = 'GET';
  const PUT = 'PUT';

  return {
    _sales_stock_id: (val0: number) => {
      const prefix0 = `${PATH0}/${val0}`;

      return {
        /**
         * 取置を取得します
         * @returns OK
         */
        get: (option?: { query?: Methods_14eshup['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_14eshup['get']['resBody'], BasicHeaders, Methods_14eshup['get']['status']>(prefix, prefix0, GET, option).json(),
        /**
         * 取置を取得します
         * @returns OK
         */
        $get: (option?: { query?: Methods_14eshup['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_14eshup['get']['resBody'], BasicHeaders, Methods_14eshup['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_14eshup['get']['query'] } | undefined) =>
          `${prefix}${prefix0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      };
    },
    layaway_request_form: {
      /**
       * 現物取置依頼書用データを取得します
       * @returns OK
       */
      get: (option?: { query?: Methods_1ovjgvz['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_1ovjgvz['get']['resBody'], BasicHeaders, Methods_1ovjgvz['get']['status']>(prefix, PATH1, GET, option).json(),
      /**
       * 現物取置依頼書用データを取得します
       * @returns OK
       */
      $get: (option?: { query?: Methods_1ovjgvz['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_1ovjgvz['get']['resBody'], BasicHeaders, Methods_1ovjgvz['get']['status']>(prefix, PATH1, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_1ovjgvz['get']['query'] } | undefined) =>
        `${prefix}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    /**
     * 取置一覧を返します
     * @returns OK
     */
    get: (option: { query: Methods_by08hd['get']['query'], config?: T | undefined }) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * 取置一覧を返します
     * @returns OK
     */
    $get: (option: { query: Methods_by08hd['get']['query'], config?: T | undefined }) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    /**
     * 取置を追加更新削除します。
     * @returns OK
     */
    put: (option: { body: Methods_by08hd['put']['reqBody'], query?: Methods_by08hd['put']['query'] | undefined, config?: T | undefined }) =>
      fetch<Methods_by08hd['put']['resBody'], BasicHeaders, Methods_by08hd['put']['status']>(prefix, PATH0, PUT, option).json(),
    /**
     * 取置を追加更新削除します。
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
