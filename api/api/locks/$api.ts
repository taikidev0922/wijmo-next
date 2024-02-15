import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_by08hd } from '.';
import type { Methods as Methods_1coqtly } from './unlock';
import type { Methods as Methods_nk2e2u } from './unlock_by';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:80' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/locks';
  const PATH1 = '/api/locks/unlock';
  const PATH2 = '/api/locks/unlock_by';
  const GET = 'GET';
  const POST = 'POST';

  return {
    unlock: {
      /**
       * ロックを解除します。
       * @returns OK
       */
      post: (option: { body: Methods_1coqtly['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_1coqtly['post']['resBody'], BasicHeaders, Methods_1coqtly['post']['status']>(prefix, PATH1, POST, option).json(),
      /**
       * ロックを解除します。
       * @returns OK
       */
      $post: (option: { body: Methods_1coqtly['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_1coqtly['post']['resBody'], BasicHeaders, Methods_1coqtly['post']['status']>(prefix, PATH1, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH1}`,
    },
    unlock_by: {
      /**
       * 条件を指定してロックを解除します。
       */
      post: (option: { body: Methods_nk2e2u['post']['reqBody'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods_nk2e2u['post']['status']>(prefix, PATH2, POST, option).send(),
      /**
       * 条件を指定してロックを解除します。
       */
      $post: (option: { body: Methods_nk2e2u['post']['reqBody'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods_nk2e2u['post']['status']>(prefix, PATH2, POST, option).send().then(r => r.body),
      $path: () => `${prefix}${PATH2}`,
    },
    /**
     * ロック一覧を返します
     * @returns OK
     */
    get: (option: { query: Methods_by08hd['get']['query'], config?: T | undefined }) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * ロック一覧を返します
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
