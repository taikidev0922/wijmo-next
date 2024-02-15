import type { AspidaClient, BasicHeaders } from 'aspida';
import type { Methods as Methods_by08hd } from '.';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:80' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/shipping_orders/move';
  const PUT = 'PUT';

  return {
    /**
     * 船積オーダー明細を別な船積オーダーへ移動更新します
     * @returns OK
     */
    put: (option: { body: Methods_by08hd['put']['reqBody'], config?: T | undefined }) =>
      fetch<Methods_by08hd['put']['resBody'], BasicHeaders, Methods_by08hd['put']['status']>(prefix, PATH0, PUT, option).json(),
    /**
     * 船積オーダー明細を別な船積オーダーへ移動更新します
     * @returns OK
     */
    $put: (option: { body: Methods_by08hd['put']['reqBody'], config?: T | undefined }) =>
      fetch<Methods_by08hd['put']['resBody'], BasicHeaders, Methods_by08hd['put']['status']>(prefix, PATH0, PUT, option).json().then(r => r.body),
    $path: () => `${prefix}${PATH0}`,
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
