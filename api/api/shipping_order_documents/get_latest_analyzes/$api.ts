import type { AspidaClient, BasicHeaders } from 'aspida';
import type { Methods as Methods_by08hd } from '.';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:80' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/shipping_order_documents/get_latest_analyzes';
  const POST = 'POST';

  return {
    /**
     * 搬入スケジュールフリータイム計算を行い一覧で返します
     * @returns OK
     */
    post: (option: { body: Methods_by08hd['post']['reqBody'], config?: T | undefined }) =>
      fetch<Methods_by08hd['post']['resBody'], BasicHeaders, Methods_by08hd['post']['status']>(prefix, PATH0, POST, option).json(),
    /**
     * 搬入スケジュールフリータイム計算を行い一覧で返します
     * @returns OK
     */
    $post: (option: { body: Methods_by08hd['post']['reqBody'], config?: T | undefined }) =>
      fetch<Methods_by08hd['post']['resBody'], BasicHeaders, Methods_by08hd['post']['status']>(prefix, PATH0, POST, option).json().then(r => r.body),
    $path: () => `${prefix}${PATH0}`,
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
