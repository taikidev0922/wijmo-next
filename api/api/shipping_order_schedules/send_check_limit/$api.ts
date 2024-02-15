import type { AspidaClient, BasicHeaders } from 'aspida';
import type { Methods as Methods_by08hd } from '.';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:80' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/shipping_order_schedules/send_check_limit';
  const POST = 'POST';

  return {
    /**
     * 検品期日_日別データ送信を実行します。
     */
    post: (option?: { config?: T | undefined } | undefined) =>
      fetch<void, BasicHeaders, Methods_by08hd['post']['status']>(prefix, PATH0, POST, option).send(),
    /**
     * 検品期日_日別データ送信を実行します。
     */
    $post: (option?: { config?: T | undefined } | undefined) =>
      fetch<void, BasicHeaders, Methods_by08hd['post']['status']>(prefix, PATH0, POST, option).send().then(r => r.body),
    $path: () => `${prefix}${PATH0}`,
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
