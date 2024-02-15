import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_by08hd } from '.';
import type { Methods as Methods_77os0 } from './get_latest_analyzes';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:80' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/shipping_order_documents';
  const PATH1 = '/api/shipping_order_documents/get_latest_analyzes';
  const GET = 'GET';
  const POST = 'POST';
  const PUT = 'PUT';

  return {
    get_latest_analyzes: {
      /**
       * 搬入スケジュールフリータイム計算を行い一覧で返します
       * @returns OK
       */
      post: (option: { body: Methods_77os0['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_77os0['post']['resBody'], BasicHeaders, Methods_77os0['post']['status']>(prefix, PATH1, POST, option).json(),
      /**
       * 搬入スケジュールフリータイム計算を行い一覧で返します
       * @returns OK
       */
      $post: (option: { body: Methods_77os0['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_77os0['post']['resBody'], BasicHeaders, Methods_77os0['post']['status']>(prefix, PATH1, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH1}`,
    },
    /**
     * 船積オーダー通関書類一覧を返します
     * @returns OK
     */
    get: (option: { query: Methods_by08hd['get']['query'], config?: T | undefined }) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * 船積オーダー通関書類一覧を返します
     * @returns OK
     */
    $get: (option: { query: Methods_by08hd['get']['query'], config?: T | undefined }) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    /**
     * 通関書類を一括更新します。
     * @returns OK
     */
    put: (option: { body: Methods_by08hd['put']['reqBody'], config?: T | undefined }) =>
      fetch<Methods_by08hd['put']['resBody'], BasicHeaders, Methods_by08hd['put']['status']>(prefix, PATH0, PUT, option).json(),
    /**
     * 通関書類を一括更新します。
     * @returns OK
     */
    $put: (option: { body: Methods_by08hd['put']['reqBody'], config?: T | undefined }) =>
      fetch<Methods_by08hd['put']['resBody'], BasicHeaders, Methods_by08hd['put']['status']>(prefix, PATH0, PUT, option).json().then(r => r.body),
    $path: (option?: { method?: 'get' | undefined; query: Methods_by08hd['get']['query'] } | undefined) =>
      `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
