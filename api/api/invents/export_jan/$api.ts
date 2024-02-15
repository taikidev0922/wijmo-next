import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_by08hd } from '.';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:80' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/invents/export_jan';
  const POST = 'POST';

  return {
    /**
     * 商品JAN送付リストを出力します。ロックの取得を指定した場合、ロックの取得に成功した後、直ちにそのロックは解放されます。
     * @returns OK
     */
    post: (option?: { query?: Methods_by08hd['post']['query'] | undefined, config?: T | undefined } | undefined) =>
      fetch<Methods_by08hd['post']['resBody'], BasicHeaders, Methods_by08hd['post']['status']>(prefix, PATH0, POST, option).json(),
    /**
     * 商品JAN送付リストを出力します。ロックの取得を指定した場合、ロックの取得に成功した後、直ちにそのロックは解放されます。
     * @returns OK
     */
    $post: (option?: { query?: Methods_by08hd['post']['query'] | undefined, config?: T | undefined } | undefined) =>
      fetch<Methods_by08hd['post']['resBody'], BasicHeaders, Methods_by08hd['post']['status']>(prefix, PATH0, POST, option).json().then(r => r.body),
    $path: (option?: { method: 'post'; query: Methods_by08hd['post']['query'] } | undefined) =>
      `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
