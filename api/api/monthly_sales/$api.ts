import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_by08hd } from '.';
import type { Methods as Methods_vk0kc5 } from './arrival_schedule';
import type { Methods as Methods_1kjqo11 } from './other_vintage';
import type { Methods as Methods_10kw178 } from './print_stockout_vt_change';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:80' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/monthly_sales';
  const PATH1 = '/api/monthly_sales/arrival_schedule';
  const PATH2 = '/api/monthly_sales/other_vintage';
  const PATH3 = '/api/monthly_sales/print_stockout_vt_change';
  const GET = 'GET';
  const POST = 'POST';

  return {
    arrival_schedule: {
      /**
       * 次回以降入荷予定一覧データを取得します
       * @returns OK
       */
      get: (option: { query: Methods_vk0kc5['get']['query'], config?: T | undefined }) =>
        fetch<Methods_vk0kc5['get']['resBody'], BasicHeaders, Methods_vk0kc5['get']['status']>(prefix, PATH1, GET, option).json(),
      /**
       * 次回以降入荷予定一覧データを取得します
       * @returns OK
       */
      $get: (option: { query: Methods_vk0kc5['get']['query'], config?: T | undefined }) =>
        fetch<Methods_vk0kc5['get']['resBody'], BasicHeaders, Methods_vk0kc5['get']['status']>(prefix, PATH1, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_vk0kc5['get']['query'] } | undefined) =>
        `${prefix}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    other_vintage: {
      /**
       * 同一商品別年号一覧データを取得します
       * @returns OK
       */
      get: (option: { query: Methods_1kjqo11['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1kjqo11['get']['resBody'], BasicHeaders, Methods_1kjqo11['get']['status']>(prefix, PATH2, GET, option).json(),
      /**
       * 同一商品別年号一覧データを取得します
       * @returns OK
       */
      $get: (option: { query: Methods_1kjqo11['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1kjqo11['get']['resBody'], BasicHeaders, Methods_1kjqo11['get']['status']>(prefix, PATH2, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_1kjqo11['get']['query'] } | undefined) =>
        `${prefix}${PATH2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    print_stockout_vt_change: {
      /**
       * 欠品VT変更案内を出力します。
       * @returns OK
       */
      post: (option: { body: Methods_10kw178['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_10kw178['post']['resBody'], BasicHeaders, Methods_10kw178['post']['status']>(prefix, PATH3, POST, option).json(),
      /**
       * 欠品VT変更案内を出力します。
       * @returns OK
       */
      $post: (option: { body: Methods_10kw178['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_10kw178['post']['resBody'], BasicHeaders, Methods_10kw178['post']['status']>(prefix, PATH3, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH3}`,
    },
    /**
     * 得意先別月販一覧データを取得します
     * @returns OK
     */
    get: (option: { query: Methods_by08hd['get']['query'], config?: T | undefined }) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * 得意先別月販一覧データを取得します
     * @returns OK
     */
    $get: (option: { query: Methods_by08hd['get']['query'], config?: T | undefined }) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    $path: (option?: { method?: 'get' | undefined; query: Methods_by08hd['get']['query'] } | undefined) =>
      `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
