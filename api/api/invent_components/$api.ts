import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_by08hd } from '.';
import type { Methods as Methods_sojbvu } from './_invent_component_id@number';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:80' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/invent_components';
  const GET = 'GET';
  const PUT = 'PUT';

  return {
    _invent_component_id: (val0: number) => {
      const prefix0 = `${PATH0}/${val0}`;

      return {
        /**
         * 部品表を取得します
         * @returns OK
         */
        get: (option?: { query?: Methods_sojbvu['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_sojbvu['get']['resBody'], BasicHeaders, Methods_sojbvu['get']['status']>(prefix, prefix0, GET, option).json(),
        /**
         * 部品表を取得します
         * @returns OK
         */
        $get: (option?: { query?: Methods_sojbvu['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_sojbvu['get']['resBody'], BasicHeaders, Methods_sojbvu['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_sojbvu['get']['query'] } | undefined) =>
          `${prefix}${prefix0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      };
    },
    /**
     * 部品表一覧を返します
     * @returns OK
     */
    get: (option: { query: Methods_by08hd['get']['query'], config?: T | undefined }) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * 部品表一覧を返します
     * @returns OK
     */
    $get: (option: { query: Methods_by08hd['get']['query'], config?: T | undefined }) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    /**
     * 部品表を追加更新削除します。
     * @returns OK
     */
    put: (option: { body: Methods_by08hd['put']['reqBody'], query?: Methods_by08hd['put']['query'] | undefined, config?: T | undefined }) =>
      fetch<Methods_by08hd['put']['resBody'], BasicHeaders, Methods_by08hd['put']['status']>(prefix, PATH0, PUT, option).json(),
    /**
     * 部品表を追加更新削除します。
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
