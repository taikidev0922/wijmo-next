import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_1dl9su3 } from './with_sales_orders';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:80' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/recent_shipping_histories/with_sales_orders';
  const GET = 'GET';
  const PUT = 'PUT';

  return {
    with_sales_orders: {
      /**
       * 直近出荷履歴・国内受注一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_1dl9su3['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1dl9su3['get']['resBody'], BasicHeaders, Methods_1dl9su3['get']['status']>(prefix, PATH0, GET, option).json(),
      /**
       * 直近出荷履歴・国内受注一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_1dl9su3['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1dl9su3['get']['resBody'], BasicHeaders, Methods_1dl9su3['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
      /**
       * 直近出荷履歴・国内受注を追加更新削除します。
       * @returns OK
       */
      put: (option: { body: Methods_1dl9su3['put']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_1dl9su3['put']['resBody'], BasicHeaders, Methods_1dl9su3['put']['status']>(prefix, PATH0, PUT, option).json(),
      /**
       * 直近出荷履歴・国内受注を追加更新削除します。
       * @returns OK
       */
      $put: (option: { body: Methods_1dl9su3['put']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_1dl9su3['put']['resBody'], BasicHeaders, Methods_1dl9su3['put']['status']>(prefix, PATH0, PUT, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_1dl9su3['get']['query'] } | undefined) =>
        `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
