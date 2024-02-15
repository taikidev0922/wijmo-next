import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_by08hd } from '.';
import type { Methods as Methods_1agt8ey } from './_inventory_result_id@number';
import type { Methods as Methods_1cjictd } from './export_list';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:80' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/inventory_results';
  const PATH1 = '/api/inventory_results/export_list';
  const GET = 'GET';
  const POST = 'POST';
  const PUT = 'PUT';

  return {
    _inventory_result_id: (val0: number) => {
      const prefix0 = `${PATH0}/${val0}`;

      return {
        /**
         * 棚卸情報を取得します
         * @returns OK
         */
        get: (option?: { query?: Methods_1agt8ey['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_1agt8ey['get']['resBody'], BasicHeaders, Methods_1agt8ey['get']['status']>(prefix, prefix0, GET, option).json(),
        /**
         * 棚卸情報を取得します
         * @returns OK
         */
        $get: (option?: { query?: Methods_1agt8ey['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_1agt8ey['get']['resBody'], BasicHeaders, Methods_1agt8ey['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_1agt8ey['get']['query'] } | undefined) =>
          `${prefix}${prefix0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      };
    },
    export_list: {
      /**
       * 棚卸リストを出力します。
       */
      post: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods_1cjictd['post']['status']>(prefix, PATH1, POST, option).send(),
      /**
       * 棚卸リストを出力します。
       */
      $post: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods_1cjictd['post']['status']>(prefix, PATH1, POST, option).send().then(r => r.body),
      $path: () => `${prefix}${PATH1}`,
    },
    /**
     * 棚卸実績一覧を返します
     * @returns OK
     */
    get: (option: { query: Methods_by08hd['get']['query'], config?: T | undefined }) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * 棚卸実績一覧を返します
     * @returns OK
     */
    $get: (option: { query: Methods_by08hd['get']['query'], config?: T | undefined }) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    /**
     * 棚卸実績を追加更新削除します。
     * @returns OK
     */
    put: (option: { body: Methods_by08hd['put']['reqBody'], query?: Methods_by08hd['put']['query'] | undefined, config?: T | undefined }) =>
      fetch<Methods_by08hd['put']['resBody'], BasicHeaders, Methods_by08hd['put']['status']>(prefix, PATH0, PUT, option).json(),
    /**
     * 棚卸実績を追加更新削除します。
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
