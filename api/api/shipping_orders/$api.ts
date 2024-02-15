import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_by08hd } from '.';
import type { Methods as Methods_1570sst } from './_no@string';
import type { Methods as Methods_1ydicti } from './_no@string/check';
import type { Methods as Methods_19zjf9n } from './_no@string/check_before_completion';
import type { Methods as Methods_14hpyaa } from './advance_payments';
import type { Methods as Methods_syn4db } from './amounts';
import type { Methods as Methods_1da1jwy } from './bulk_insert';
import type { Methods as Methods_p0oht4 } from './details';
import type { Methods as Methods_h02ggf } from './fares';
import type { Methods as Methods_u7ufwp } from './labels';
import type { Methods as Methods_sbkyfq } from './labels/export_rbp_label';
import type { Methods as Methods_1omzdrc } from './labels/export_seal';
import type { Methods as Methods_theng6 } from './list';
import type { Methods as Methods_udb0rb } from './move';
import type { Methods as Methods_o58a4 } from './print_collection_request';
import type { Methods as Methods_1gtaogi } from './print_order_form/domestic';
import type { Methods as Methods_lgyc22 } from './print_order_form/foreign';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:80' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/shipping_orders';
  const PATH1 = '/check';
  const PATH2 = '/check_before_completion';
  const PATH3 = '/api/shipping_orders/advance_payments';
  const PATH4 = '/api/shipping_orders/amounts';
  const PATH5 = '/api/shipping_orders/bulk_insert';
  const PATH6 = '/api/shipping_orders/details';
  const PATH7 = '/api/shipping_orders/fares';
  const PATH8 = '/api/shipping_orders/labels';
  const PATH9 = '/api/shipping_orders/labels/export_rbp_label';
  const PATH10 = '/api/shipping_orders/labels/export_seal';
  const PATH11 = '/api/shipping_orders/list';
  const PATH12 = '/api/shipping_orders/move';
  const PATH13 = '/api/shipping_orders/print_collection_request';
  const PATH14 = '/api/shipping_orders/print_order_form/domestic';
  const PATH15 = '/api/shipping_orders/print_order_form/foreign';
  const GET = 'GET';
  const POST = 'POST';
  const PUT = 'PUT';

  return {
    _no: (val0: string) => {
      const prefix0 = `${PATH0}/${val0}`;

      return {
        check: {
          /**
           * 船積オーダーを取得します
           * @returns OK
           */
          get: (option?: { query?: Methods_1ydicti['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1ydicti['get']['resBody'], BasicHeaders, Methods_1ydicti['get']['status']>(prefix, `${prefix0}${PATH1}`, GET, option).json(),
          /**
           * 船積オーダーを取得します
           * @returns OK
           */
          $get: (option?: { query?: Methods_1ydicti['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1ydicti['get']['resBody'], BasicHeaders, Methods_1ydicti['get']['status']>(prefix, `${prefix0}${PATH1}`, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_1ydicti['get']['query'] } | undefined) =>
            `${prefix}${prefix0}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
        check_before_completion: {
          /**
           * 船積オーダー通関書類の入力が終わっているかの真偽を返します
           * @returns OK
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_19zjf9n['get']['resBody'], BasicHeaders, Methods_19zjf9n['get']['status']>(prefix, `${prefix0}${PATH2}`, GET, option).json(),
          /**
           * 船積オーダー通関書類の入力が終わっているかの真偽を返します
           * @returns OK
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_19zjf9n['get']['resBody'], BasicHeaders, Methods_19zjf9n['get']['status']>(prefix, `${prefix0}${PATH2}`, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix0}${PATH2}`,
        },
        /**
         * 船積オーダーを取得します。新たなロックを取得する前に、同一テーブルの同一ロックキー1に対する同一担当者によるロックは解除されます。
         * @returns OK
         */
        get: (option?: { query?: Methods_1570sst['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_1570sst['get']['resBody'], BasicHeaders, Methods_1570sst['get']['status']>(prefix, prefix0, GET, option).json(),
        /**
         * 船積オーダーを取得します。新たなロックを取得する前に、同一テーブルの同一ロックキー1に対する同一担当者によるロックは解除されます。
         * @returns OK
         */
        $get: (option?: { query?: Methods_1570sst['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_1570sst['get']['resBody'], BasicHeaders, Methods_1570sst['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_1570sst['get']['query'] } | undefined) =>
          `${prefix}${prefix0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      };
    },
    advance_payments: {
      /**
       * 前払金一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_14hpyaa['get']['query'], config?: T | undefined }) =>
        fetch<Methods_14hpyaa['get']['resBody'], BasicHeaders, Methods_14hpyaa['get']['status']>(prefix, PATH3, GET, option).json(),
      /**
       * 前払金一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_14hpyaa['get']['query'], config?: T | undefined }) =>
        fetch<Methods_14hpyaa['get']['resBody'], BasicHeaders, Methods_14hpyaa['get']['status']>(prefix, PATH3, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_14hpyaa['get']['query'] } | undefined) =>
        `${prefix}${PATH3}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    amounts: {
      /**
       * 商品代金一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_syn4db['get']['query'], config?: T | undefined }) =>
        fetch<Methods_syn4db['get']['resBody'], BasicHeaders, Methods_syn4db['get']['status']>(prefix, PATH4, GET, option).json(),
      /**
       * 商品代金一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_syn4db['get']['query'], config?: T | undefined }) =>
        fetch<Methods_syn4db['get']['resBody'], BasicHeaders, Methods_syn4db['get']['status']>(prefix, PATH4, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_syn4db['get']['query'] } | undefined) =>
        `${prefix}${PATH4}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    bulk_insert: {
      /**
       * 船積オーダーデータを取り込みます。
       * @returns OK
       */
      post: (option: { body: Methods_1da1jwy['post']['reqBody'], query?: Methods_1da1jwy['post']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1da1jwy['post']['resBody'], BasicHeaders, Methods_1da1jwy['post']['status']>(prefix, PATH5, POST, option, 'FormData').json(),
      /**
       * 船積オーダーデータを取り込みます。
       * @returns OK
       */
      $post: (option: { body: Methods_1da1jwy['post']['reqBody'], query?: Methods_1da1jwy['post']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1da1jwy['post']['resBody'], BasicHeaders, Methods_1da1jwy['post']['status']>(prefix, PATH5, POST, option, 'FormData').json().then(r => r.body),
      $path: (option?: { method: 'post'; query: Methods_1da1jwy['post']['query'] } | undefined) =>
        `${prefix}${PATH5}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    details: {
      /**
       * 船積オーダー一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_p0oht4['get']['query'], config?: T | undefined }) =>
        fetch<Methods_p0oht4['get']['resBody'], BasicHeaders, Methods_p0oht4['get']['status']>(prefix, PATH6, GET, option).json(),
      /**
       * 船積オーダー一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_p0oht4['get']['query'], config?: T | undefined }) =>
        fetch<Methods_p0oht4['get']['resBody'], BasicHeaders, Methods_p0oht4['get']['status']>(prefix, PATH6, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_p0oht4['get']['query'] } | undefined) =>
        `${prefix}${PATH6}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    fares: {
      /**
       * 運賃一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_h02ggf['get']['query'], config?: T | undefined }) =>
        fetch<Methods_h02ggf['get']['resBody'], BasicHeaders, Methods_h02ggf['get']['status']>(prefix, PATH7, GET, option).json(),
      /**
       * 運賃一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_h02ggf['get']['query'], config?: T | undefined }) =>
        fetch<Methods_h02ggf['get']['resBody'], BasicHeaders, Methods_h02ggf['get']['status']>(prefix, PATH7, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_h02ggf['get']['query'] } | undefined) =>
        `${prefix}${PATH7}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    labels: {
      export_rbp_label: {
        /**
         * RBPラベルデータを出力します。
         */
        post: (option: { body: Methods_sbkyfq['post']['reqBody'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_sbkyfq['post']['status']>(prefix, PATH9, POST, option).send(),
        /**
         * RBPラベルデータを出力します。
         */
        $post: (option: { body: Methods_sbkyfq['post']['reqBody'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_sbkyfq['post']['status']>(prefix, PATH9, POST, option).send().then(r => r.body),
        $path: () => `${prefix}${PATH9}`,
      },
      export_seal: {
        /**
         * シール手配データを出力します。
         */
        post: (option: { body: Methods_1omzdrc['post']['reqBody'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_1omzdrc['post']['status']>(prefix, PATH10, POST, option).send(),
        /**
         * シール手配データを出力します。
         */
        $post: (option: { body: Methods_1omzdrc['post']['reqBody'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_1omzdrc['post']['status']>(prefix, PATH10, POST, option).send().then(r => r.body),
        $path: () => `${prefix}${PATH10}`,
      },
      /**
       * ラベル手配管理対象の船積オーダー一覧を返します ※ embedを指定なしで船積オーダー明細と船積オーダー通関書類が返却される
       * @returns OK
       */
      get: (option: { query: Methods_u7ufwp['get']['query'], config?: T | undefined }) =>
        fetch<Methods_u7ufwp['get']['resBody'], BasicHeaders, Methods_u7ufwp['get']['status']>(prefix, PATH8, GET, option).json(),
      /**
       * ラベル手配管理対象の船積オーダー一覧を返します ※ embedを指定なしで船積オーダー明細と船積オーダー通関書類が返却される
       * @returns OK
       */
      $get: (option: { query: Methods_u7ufwp['get']['query'], config?: T | undefined }) =>
        fetch<Methods_u7ufwp['get']['resBody'], BasicHeaders, Methods_u7ufwp['get']['status']>(prefix, PATH8, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_u7ufwp['get']['query'] } | undefined) =>
        `${prefix}${PATH8}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    list: {
      /**
       * 船積オーダー一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_theng6['get']['query'], config?: T | undefined }) =>
        fetch<Methods_theng6['get']['resBody'], BasicHeaders, Methods_theng6['get']['status']>(prefix, PATH11, GET, option).json(),
      /**
       * 船積オーダー一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_theng6['get']['query'], config?: T | undefined }) =>
        fetch<Methods_theng6['get']['resBody'], BasicHeaders, Methods_theng6['get']['status']>(prefix, PATH11, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_theng6['get']['query'] } | undefined) =>
        `${prefix}${PATH11}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    move: {
      /**
       * 船積オーダー明細を別な船積オーダーへ移動更新します
       * @returns OK
       */
      put: (option: { body: Methods_udb0rb['put']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_udb0rb['put']['resBody'], BasicHeaders, Methods_udb0rb['put']['status']>(prefix, PATH12, PUT, option).json(),
      /**
       * 船積オーダー明細を別な船積オーダーへ移動更新します
       * @returns OK
       */
      $put: (option: { body: Methods_udb0rb['put']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_udb0rb['put']['resBody'], BasicHeaders, Methods_udb0rb['put']['status']>(prefix, PATH12, PUT, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH12}`,
    },
    print_collection_request: {
      /**
       * 集荷依頼書を出力します。
       * @returns OK
       */
      post: (option: { body: Methods_o58a4['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_o58a4['post']['resBody'], BasicHeaders, Methods_o58a4['post']['status']>(prefix, PATH13, POST, option).json(),
      /**
       * 集荷依頼書を出力します。
       * @returns OK
       */
      $post: (option: { body: Methods_o58a4['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_o58a4['post']['resBody'], BasicHeaders, Methods_o58a4['post']['status']>(prefix, PATH13, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH13}`,
    },
    print_order_form: {
      domestic: {
        /**
         * 船積オーダー書を出力します。
         * @returns OK
         */
        post: (option: { body: Methods_1gtaogi['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_1gtaogi['post']['resBody'], BasicHeaders, Methods_1gtaogi['post']['status']>(prefix, PATH14, POST, option).json(),
        /**
         * 船積オーダー書を出力します。
         * @returns OK
         */
        $post: (option: { body: Methods_1gtaogi['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_1gtaogi['post']['resBody'], BasicHeaders, Methods_1gtaogi['post']['status']>(prefix, PATH14, POST, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH14}`,
      },
      foreign: {
        /**
         * 船積オーダー書を出力します。
         * @returns OK
         */
        post: (option: { body: Methods_lgyc22['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_lgyc22['post']['resBody'], BasicHeaders, Methods_lgyc22['post']['status']>(prefix, PATH15, POST, option).json(),
        /**
         * 船積オーダー書を出力します。
         * @returns OK
         */
        $post: (option: { body: Methods_lgyc22['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_lgyc22['post']['resBody'], BasicHeaders, Methods_lgyc22['post']['status']>(prefix, PATH15, POST, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH15}`,
      },
    },
    /**
     * 船積オーダー一覧を返します
     * @returns OK
     */
    get: (option: { query: Methods_by08hd['get']['query'], config?: T | undefined }) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * 船積オーダー一覧を返します
     * @returns OK
     */
    $get: (option: { query: Methods_by08hd['get']['query'], config?: T | undefined }) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    /**
     * 船積オーダーを追加更新削除します。
     * @returns OK
     */
    put: (option: { body: Methods_by08hd['put']['reqBody'], query?: Methods_by08hd['put']['query'] | undefined, config?: T | undefined }) =>
      fetch<Methods_by08hd['put']['resBody'], BasicHeaders, Methods_by08hd['put']['status']>(prefix, PATH0, PUT, option).json(),
    /**
     * 船積オーダーを追加更新削除します。
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
