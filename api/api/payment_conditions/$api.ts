import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_by08hd } from '.';
import type { Methods as Methods_jnztig } from './_payment_condition_id@number';
import type { Methods as Methods_1r83dkl } from './_payment_condition_id@number/due';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:80' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/payment_conditions';
  const PATH1 = '/due';
  const GET = 'GET';
  const PUT = 'PUT';

  return {
    _payment_condition_id: (val0: number) => {
      const prefix0 = `${PATH0}/${val0}`;

      return {
        due: {
          /**
           * 支払条件を元に支払期日を取得します
           * @returns OK
           */
          get: (option?: { query?: Methods_1r83dkl['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1r83dkl['get']['resBody'], BasicHeaders, Methods_1r83dkl['get']['status']>(prefix, `${prefix0}${PATH1}`, GET, option).json(),
          /**
           * 支払条件を元に支払期日を取得します
           * @returns OK
           */
          $get: (option?: { query?: Methods_1r83dkl['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1r83dkl['get']['resBody'], BasicHeaders, Methods_1r83dkl['get']['status']>(prefix, `${prefix0}${PATH1}`, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_1r83dkl['get']['query'] } | undefined) =>
            `${prefix}${prefix0}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
        /**
         * 支払条件を取得します
         * @returns OK
         */
        get: (option?: { query?: Methods_jnztig['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_jnztig['get']['resBody'], BasicHeaders, Methods_jnztig['get']['status']>(prefix, prefix0, GET, option).json(),
        /**
         * 支払条件を取得します
         * @returns OK
         */
        $get: (option?: { query?: Methods_jnztig['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_jnztig['get']['resBody'], BasicHeaders, Methods_jnztig['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_jnztig['get']['query'] } | undefined) =>
          `${prefix}${prefix0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      };
    },
    /**
     * 支払条件一覧を返します
     * @returns OK
     */
    get: (option: { query: Methods_by08hd['get']['query'], config?: T | undefined }) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * 支払条件一覧を返します
     * @returns OK
     */
    $get: (option: { query: Methods_by08hd['get']['query'], config?: T | undefined }) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    /**
     * 支払条件を追加更新削除します。
     * @returns OK
     */
    put: (option: { body: Methods_by08hd['put']['reqBody'], query?: Methods_by08hd['put']['query'] | undefined, config?: T | undefined }) =>
      fetch<Methods_by08hd['put']['resBody'], BasicHeaders, Methods_by08hd['put']['status']>(prefix, PATH0, PUT, option).json(),
    /**
     * 支払条件を追加更新削除します。
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
