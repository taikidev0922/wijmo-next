import type { AspidaClient, BasicHeaders } from 'aspida';
import type { Methods as Methods_gx0la5 } from './print';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:80' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/bills/print';
  const POST = 'POST';

  return {
    print: {
      /**
       * 請求書を出力します。
       */
      post: (option: { body: Methods_gx0la5['post']['reqBody'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods_gx0la5['post']['status']>(prefix, PATH0, POST, option).send(),
      /**
       * 請求書を出力します。
       */
      $post: (option: { body: Methods_gx0la5['post']['reqBody'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods_gx0la5['post']['status']>(prefix, PATH0, POST, option).send().then(r => r.body),
      $path: () => `${prefix}${PATH0}`,
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
