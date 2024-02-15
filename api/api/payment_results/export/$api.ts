import type { AspidaClient, BasicHeaders } from 'aspida';
import type { Methods as Methods_by08hd } from '.';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:80' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/payment_results/export';
  const POST = 'POST';

  return {
    /**
     * インターネットバンキング用支払いデータを出力します。
     */
    post: (option: { body: Methods_by08hd['post']['reqBody'], config?: T | undefined }) =>
      fetch<void, BasicHeaders, Methods_by08hd['post']['status']>(prefix, PATH0, POST, option).send(),
    /**
     * インターネットバンキング用支払いデータを出力します。
     */
    $post: (option: { body: Methods_by08hd['post']['reqBody'], config?: T | undefined }) =>
      fetch<void, BasicHeaders, Methods_by08hd['post']['status']>(prefix, PATH0, POST, option).send().then(r => r.body),
    $path: () => `${prefix}${PATH0}`,
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
