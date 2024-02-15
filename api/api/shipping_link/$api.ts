import type { AspidaClient, BasicHeaders } from 'aspida';
import type { Methods as Methods_8yw02h } from './execute';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:80' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/shipping_link/execute';
  const POST = 'POST';

  return {
    execute: {
      /**
       * 出荷指示データ連携バッチを実行します。
       */
      post: (option: { body: Methods_8yw02h['post']['reqBody'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods_8yw02h['post']['status']>(prefix, PATH0, POST, option).send(),
      /**
       * 出荷指示データ連携バッチを実行します。
       */
      $post: (option: { body: Methods_8yw02h['post']['reqBody'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods_8yw02h['post']['status']>(prefix, PATH0, POST, option).send().then(r => r.body),
      $path: () => `${prefix}${PATH0}`,
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
