import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_by08hd } from '.';
import type { Methods as Methods_1plswqn } from './_wine_area_id@number';
import type { Methods as Methods_dy40n4 } from './_wine_area_id@number/example_operation';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:80' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/wine_areas';
  const PATH1 = '/example_operation';
  const GET = 'GET';
  const POST = 'POST';
  const PUT = 'PUT';

  return {
    _wine_area_id: (val0: number) => {
      const prefix0 = `${PATH0}/${val0}`;

      return {
        example_operation: {
          /**
           * 地方のサンプルAPI
           * @returns OK
           */
          post: (option: { body: Methods_dy40n4['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_dy40n4['post']['resBody'], BasicHeaders, Methods_dy40n4['post']['status']>(prefix, `${prefix0}${PATH1}`, POST, option).json(),
          /**
           * 地方のサンプルAPI
           * @returns OK
           */
          $post: (option: { body: Methods_dy40n4['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_dy40n4['post']['resBody'], BasicHeaders, Methods_dy40n4['post']['status']>(prefix, `${prefix0}${PATH1}`, POST, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix0}${PATH1}`,
        },
        /**
         * 地方を取得します
         * @returns OK
         */
        get: (option?: { query?: Methods_1plswqn['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_1plswqn['get']['resBody'], BasicHeaders, Methods_1plswqn['get']['status']>(prefix, prefix0, GET, option).json(),
        /**
         * 地方を取得します
         * @returns OK
         */
        $get: (option?: { query?: Methods_1plswqn['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_1plswqn['get']['resBody'], BasicHeaders, Methods_1plswqn['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_1plswqn['get']['query'] } | undefined) =>
          `${prefix}${prefix0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      };
    },
    /**
     * 地方一覧を返します
     * @returns OK
     */
    get: (option: { query: Methods_by08hd['get']['query'], config?: T | undefined }) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * 地方一覧を返します
     * @returns OK
     */
    $get: (option: { query: Methods_by08hd['get']['query'], config?: T | undefined }) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    /**
     * 地方を追加更新削除します。
     * @returns OK
     */
    put: (option: { body: Methods_by08hd['put']['reqBody'], query?: Methods_by08hd['put']['query'] | undefined, config?: T | undefined }) =>
      fetch<Methods_by08hd['put']['resBody'], BasicHeaders, Methods_by08hd['put']['status']>(prefix, PATH0, PUT, option).json(),
    /**
     * 地方を追加更新削除します。
     * @returns OK
     */
    $put: (option: { body: Methods_by08hd['put']['reqBody'], query?: Methods_by08hd['put']['query'] | undefined, config?: T | undefined }) =>
      fetch<Methods_by08hd['put']['resBody'], BasicHeaders, Methods_by08hd['put']['status']>(prefix, PATH0, PUT, option).json().then(r => r.body),
    $path: (option?: { method?: 'get' | undefined; query: Methods_by08hd['get']['query'] } | { method: 'put'; query: Methods_by08hd['put']['query'] } | undefined) =>
      `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
