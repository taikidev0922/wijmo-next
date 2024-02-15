import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_by08hd } from '.';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:80' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/bill_closings/bulk_async';
  const POST = 'POST';

  return {
    /**
     * 請求締一覧を一括処理します。応答には user_logs も含まれます。embed はバッチ出力に対する指示になります。
     * @returns OK
     */
    post: (option: { body: Methods_by08hd['post']['reqBody'], query?: Methods_by08hd['post']['query'] | undefined, config?: T | undefined }) =>
      fetch<Methods_by08hd['post']['resBody'], BasicHeaders, Methods_by08hd['post']['status']>(prefix, PATH0, POST, option).json(),
    /**
     * 請求締一覧を一括処理します。応答には user_logs も含まれます。embed はバッチ出力に対する指示になります。
     * @returns OK
     */
    $post: (option: { body: Methods_by08hd['post']['reqBody'], query?: Methods_by08hd['post']['query'] | undefined, config?: T | undefined }) =>
      fetch<Methods_by08hd['post']['resBody'], BasicHeaders, Methods_by08hd['post']['status']>(prefix, PATH0, POST, option).json().then(r => r.body),
    $path: (option?: { method: 'post'; query: Methods_by08hd['post']['query'] } | undefined) =>
      `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
