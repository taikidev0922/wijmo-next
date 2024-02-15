import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_by08hd } from '.';
import type { Methods as Methods_108si8t } from './execute_clearing';
import type { Methods as Methods_16p75hb } from './schedule';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:80' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/deposit_results';
  const PATH1 = '/api/deposit_results/execute_clearing';
  const PATH2 = '/api/deposit_results/schedule';
  const GET = 'GET';
  const PUT = 'PUT';

  return {
    execute_clearing: {
      /**
       * 入金実績に対する消込処理をします
       */
      put: (option: { body: Methods_108si8t['put']['reqBody'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods_108si8t['put']['status']>(prefix, PATH1, PUT, option).send(),
      /**
       * 入金実績に対する消込処理をします
       */
      $put: (option: { body: Methods_108si8t['put']['reqBody'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods_108si8t['put']['status']>(prefix, PATH1, PUT, option).send().then(r => r.body),
      $path: () => `${prefix}${PATH1}`,
    },
    schedule: {
      /**
       * 入金予定を返します
       * @returns OK
       */
      get: (option?: { query?: Methods_16p75hb['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_16p75hb['get']['resBody'], BasicHeaders, Methods_16p75hb['get']['status']>(prefix, PATH2, GET, option).json(),
      /**
       * 入金予定を返します
       * @returns OK
       */
      $get: (option?: { query?: Methods_16p75hb['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_16p75hb['get']['resBody'], BasicHeaders, Methods_16p75hb['get']['status']>(prefix, PATH2, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_16p75hb['get']['query'] } | undefined) =>
        `${prefix}${PATH2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    /**
     * 入金実績一覧を返します
     * @returns OK
     */
    get: (option: { query: Methods_by08hd['get']['query'], config?: T | undefined }) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * 入金実績一覧を返します
     * @returns OK
     */
    $get: (option: { query: Methods_by08hd['get']['query'], config?: T | undefined }) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    /**
     * 入金実績を追加更新削除します。
     * @returns OK
     */
    put: (option: { body: Methods_by08hd['put']['reqBody'], query?: Methods_by08hd['put']['query'] | undefined, config?: T | undefined }) =>
      fetch<Methods_by08hd['put']['resBody'], BasicHeaders, Methods_by08hd['put']['status']>(prefix, PATH0, PUT, option).json(),
    /**
     * 入金実績を追加更新削除します。
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
