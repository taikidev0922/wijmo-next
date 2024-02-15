import type { AspidaClient, BasicHeaders } from 'aspida';
import type { Methods as Methods_gnja9e } from './down';
import type { Methods as Methods_1vp800n } from './up';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:80' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/maintenance/down';
  const PATH1 = '/api/maintenance/up';
  const POST = 'POST';

  return {
    down: {
      /**
       * メンテナンスモードを開始します。所定のユーザからのみ呼び出せます。
       */
      post: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods_gnja9e['post']['status']>(prefix, PATH0, POST, option).send(),
      /**
       * メンテナンスモードを開始します。所定のユーザからのみ呼び出せます。
       */
      $post: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods_gnja9e['post']['status']>(prefix, PATH0, POST, option).send().then(r => r.body),
      $path: () => `${prefix}${PATH0}`,
    },
    up: {
      /**
       * メンテナンスモードを終了します。所定のユーザからのみ呼び出せます。
       */
      post: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods_1vp800n['post']['status']>(prefix, PATH1, POST, option).send(),
      /**
       * メンテナンスモードを終了します。所定のユーザからのみ呼び出せます。
       */
      $post: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods_1vp800n['post']['status']>(prefix, PATH1, POST, option).send().then(r => r.body),
      $path: () => `${prefix}${PATH1}`,
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
