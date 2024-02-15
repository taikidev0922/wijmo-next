import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_by08hd } from '.';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:80' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/sales_orders/bulk_insert_async';
  const POST = 'POST';

  return {
    /**
     * 国内受注を受注データファイルから一括登録します。応答には user_logs も含まれます。embed はバッチ出力に対する指示になります。
     * @returns OK
     */
    post: (option: { body: Methods_by08hd['post']['reqBody'], query?: Methods_by08hd['post']['query'] | undefined, config?: T | undefined }) =>
      fetch<Methods_by08hd['post']['resBody'], BasicHeaders, Methods_by08hd['post']['status']>(prefix, PATH0, POST, option, 'FormData').json(),
    /**
     * 国内受注を受注データファイルから一括登録します。応答には user_logs も含まれます。embed はバッチ出力に対する指示になります。
     * @returns OK
     */
    $post: (option: { body: Methods_by08hd['post']['reqBody'], query?: Methods_by08hd['post']['query'] | undefined, config?: T | undefined }) =>
      fetch<Methods_by08hd['post']['resBody'], BasicHeaders, Methods_by08hd['post']['status']>(prefix, PATH0, POST, option, 'FormData').json().then(r => r.body),
    $path: (option?: { method: 'post'; query: Methods_by08hd['post']['query'] } | undefined) =>
      `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
