import type { AspidaClient, BasicHeaders } from 'aspida';
import type { Methods as Methods_by08hd } from '.';
import type { Methods as Methods_idk8rz } from './login';
import type { Methods as Methods_1rpsris } from './logout';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:80' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/auth';
  const PATH1 = '/api/auth/login';
  const PATH2 = '/api/auth/logout';
  const GET = 'GET';
  const POST = 'POST';

  return {
    login: {
      /**
       * ログインします。
       */
      post: (option: { body: Methods_idk8rz['post']['reqBody'], config?: T | undefined }) =>
        fetch<void, Methods_idk8rz['post']['resHeaders'], Methods_idk8rz['post']['status']>(prefix, PATH1, POST, option).send(),
      /**
       * ログインします。
       */
      $post: (option: { body: Methods_idk8rz['post']['reqBody'], config?: T | undefined }) =>
        fetch<void, Methods_idk8rz['post']['resHeaders'], Methods_idk8rz['post']['status']>(prefix, PATH1, POST, option).send().then(r => r.body),
      $path: () => `${prefix}${PATH1}`,
    },
    logout: {
      /**
       * ログアウトします。
       */
      post: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods_1rpsris['post']['status']>(prefix, PATH2, POST, option).send(),
      /**
       * ログアウトします。
       */
      $post: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods_1rpsris['post']['status']>(prefix, PATH2, POST, option).send().then(r => r.body),
      $path: () => `${prefix}${PATH2}`,
    },
    /**
     * ユーザー情報を取得します。
     * @returns OK
     */
    get: (option?: { config?: T | undefined } | undefined) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * ユーザー情報を取得します。
     * @returns OK
     */
    $get: (option?: { config?: T | undefined } | undefined) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    $path: () => `${prefix}${PATH0}`,
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
