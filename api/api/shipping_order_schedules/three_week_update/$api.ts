import type { AspidaClient, BasicHeaders } from 'aspida';
import type { Methods as Methods_by08hd } from '.';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:80' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/shipping_order_schedules/three_week_update';
  const POST = 'POST';

  return {
    /**
     * ３週間先の日曜日までの倉庫搬入日もしくは、入港日の船積を対象に船積オーダーを整理して更新する
     */
    post: (option?: { config?: T | undefined } | undefined) =>
      fetch<void, BasicHeaders, Methods_by08hd['post']['status']>(prefix, PATH0, POST, option).send(),
    /**
     * ３週間先の日曜日までの倉庫搬入日もしくは、入港日の船積を対象に船積オーダーを整理して更新する
     */
    $post: (option?: { config?: T | undefined } | undefined) =>
      fetch<void, BasicHeaders, Methods_by08hd['post']['status']>(prefix, PATH0, POST, option).send().then(r => r.body),
    $path: () => `${prefix}${PATH0}`,
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
