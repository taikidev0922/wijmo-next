import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_w8c8ra } from './_shipping_reservation_detail_id@number/shipping_order_details';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:80' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/shipping_reservation_details';
  const PATH1 = '/shipping_order_details';
  const GET = 'GET';

  return {
    _shipping_reservation_detail_id: (val0: number) => {
      const prefix0 = `${PATH0}/${val0}`;

      return {
        shipping_order_details: {
          /**
           * 船積発注明細一覧(前渡一覧)を返します
           * @returns OK
           */
          get: (option: { query: Methods_w8c8ra['get']['query'], config?: T | undefined }) =>
            fetch<Methods_w8c8ra['get']['resBody'], BasicHeaders, Methods_w8c8ra['get']['status']>(prefix, `${prefix0}${PATH1}`, GET, option).json(),
          /**
           * 船積発注明細一覧(前渡一覧)を返します
           * @returns OK
           */
          $get: (option: { query: Methods_w8c8ra['get']['query'], config?: T | undefined }) =>
            fetch<Methods_w8c8ra['get']['resBody'], BasicHeaders, Methods_w8c8ra['get']['status']>(prefix, `${prefix0}${PATH1}`, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_w8c8ra['get']['query'] } | undefined) =>
            `${prefix}${prefix0}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
      };
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
