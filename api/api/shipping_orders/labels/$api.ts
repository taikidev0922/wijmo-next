import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_by08hd } from '.';
import type { Methods as Methods_hggs5a } from './export_rbp_label';
import type { Methods as Methods_1xfx2tc } from './export_seal';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:80' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/shipping_orders/labels';
  const PATH1 = '/api/shipping_orders/labels/export_rbp_label';
  const PATH2 = '/api/shipping_orders/labels/export_seal';
  const GET = 'GET';
  const POST = 'POST';

  return {
    export_rbp_label: {
      /**
       * RBPラベルデータを出力します。
       */
      post: (option: { body: Methods_hggs5a['post']['reqBody'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods_hggs5a['post']['status']>(prefix, PATH1, POST, option).send(),
      /**
       * RBPラベルデータを出力します。
       */
      $post: (option: { body: Methods_hggs5a['post']['reqBody'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods_hggs5a['post']['status']>(prefix, PATH1, POST, option).send().then(r => r.body),
      $path: () => `${prefix}${PATH1}`,
    },
    export_seal: {
      /**
       * シール手配データを出力します。
       */
      post: (option: { body: Methods_1xfx2tc['post']['reqBody'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods_1xfx2tc['post']['status']>(prefix, PATH2, POST, option).send(),
      /**
       * シール手配データを出力します。
       */
      $post: (option: { body: Methods_1xfx2tc['post']['reqBody'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods_1xfx2tc['post']['status']>(prefix, PATH2, POST, option).send().then(r => r.body),
      $path: () => `${prefix}${PATH2}`,
    },
    /**
     * ラベル手配管理対象の船積オーダー一覧を返します ※ embedを指定なしで船積オーダー明細と船積オーダー通関書類が返却される
     * @returns OK
     */
    get: (option: { query: Methods_by08hd['get']['query'], config?: T | undefined }) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * ラベル手配管理対象の船積オーダー一覧を返します ※ embedを指定なしで船積オーダー明細と船積オーダー通関書類が返却される
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
