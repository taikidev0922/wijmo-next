import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_g4ewcg } from './bulk_delete';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:80' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/sales_prices/bulk_delete';
  const PUT = 'PUT';

  return {
    bulk_delete: {
      /**
       * 販売単価を削除します。
       * @returns OK
       */
      put: (option: { body: Methods_g4ewcg['put']['reqBody'], query?: Methods_g4ewcg['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_g4ewcg['put']['resBody'], BasicHeaders, Methods_g4ewcg['put']['status']>(prefix, PATH0, PUT, option).json(),
      /**
       * 販売単価を削除します。
       * @returns OK
       */
      $put: (option: { body: Methods_g4ewcg['put']['reqBody'], query?: Methods_g4ewcg['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_g4ewcg['put']['resBody'], BasicHeaders, Methods_g4ewcg['put']['status']>(prefix, PATH0, PUT, option).json().then(r => r.body),
      $path: (option?: { method: 'put'; query: Methods_g4ewcg['put']['query'] } | undefined) =>
        `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
