import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_by08hd } from '.';
import type { Methods as Methods_1apeyhr } from './_sales_order_id@number';
import type { Methods as Methods_1194fol } from './bulk_async';
import type { Methods as Methods_1da1jwy } from './bulk_insert';
import type { Methods as Methods_10cy721 } from './bulk_insert_async';
import type { Methods as Methods_19iefas } from './export_denpatu';
import type { Methods as Methods_1fkohkl } from './fare_summary';
import type { Methods as Methods_1kztjcz } from './get_invent_related';
import type { Methods as Methods_1o63uup } from './invent_sales';
import type { Methods as Methods_azrjx3 } from './invents';
import type { Methods as Methods_g1sgdt } from './print_delivery_guidance';
import type { Methods as Methods_cgrbf1 } from './print_delivery_slip';
import type { Methods as Methods_axpmjs } from './print_physical_stock_request';
import type { Methods as Methods_1xc9z4u } from './print_purchase_order';
import type { Methods as Methods_p17e63 } from './print_transfer_request';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:80' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/sales_orders';
  const PATH1 = '/api/sales_orders/bulk_async';
  const PATH2 = '/api/sales_orders/bulk_insert';
  const PATH3 = '/api/sales_orders/bulk_insert_async';
  const PATH4 = '/api/sales_orders/export_denpatu';
  const PATH5 = '/api/sales_orders/fare_summary';
  const PATH6 = '/api/sales_orders/get_invent_related';
  const PATH7 = '/api/sales_orders/invent_sales';
  const PATH8 = '/api/sales_orders/invents';
  const PATH9 = '/api/sales_orders/print_delivery_guidance';
  const PATH10 = '/api/sales_orders/print_delivery_slip';
  const PATH11 = '/api/sales_orders/print_physical_stock_request';
  const PATH12 = '/api/sales_orders/print_purchase_order';
  const PATH13 = '/api/sales_orders/print_transfer_request';
  const GET = 'GET';
  const POST = 'POST';
  const PUT = 'PUT';

  return {
    _sales_order_id: (val0: number) => {
      const prefix0 = `${PATH0}/${val0}`;

      return {
        /**
         * 国内受注を取得します
         * @returns OK
         */
        get: (option?: { query?: Methods_1apeyhr['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_1apeyhr['get']['resBody'], BasicHeaders, Methods_1apeyhr['get']['status']>(prefix, prefix0, GET, option).json(),
        /**
         * 国内受注を取得します
         * @returns OK
         */
        $get: (option?: { query?: Methods_1apeyhr['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_1apeyhr['get']['resBody'], BasicHeaders, Methods_1apeyhr['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_1apeyhr['get']['query'] } | undefined) =>
          `${prefix}${prefix0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      };
    },
    bulk_async: {
      /**
       * 国内受注を追加更新削除します。応答には user_logs も含まれます。embed はバッチ出力に対する指示になります。
       * @returns OK
       */
      post: (option: { body: Methods_1194fol['post']['reqBody'], query?: Methods_1194fol['post']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1194fol['post']['resBody'], BasicHeaders, Methods_1194fol['post']['status']>(prefix, PATH1, POST, option).json(),
      /**
       * 国内受注を追加更新削除します。応答には user_logs も含まれます。embed はバッチ出力に対する指示になります。
       * @returns OK
       */
      $post: (option: { body: Methods_1194fol['post']['reqBody'], query?: Methods_1194fol['post']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1194fol['post']['resBody'], BasicHeaders, Methods_1194fol['post']['status']>(prefix, PATH1, POST, option).json().then(r => r.body),
      $path: (option?: { method: 'post'; query: Methods_1194fol['post']['query'] } | undefined) =>
        `${prefix}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    bulk_insert: {
      /**
       * 国内受注を受注データファイルから一括登録します。
       * @returns OK
       */
      post: (option: { body: Methods_1da1jwy['post']['reqBody'], query?: Methods_1da1jwy['post']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1da1jwy['post']['resBody'], BasicHeaders, Methods_1da1jwy['post']['status']>(prefix, PATH2, POST, option, 'FormData').json(),
      /**
       * 国内受注を受注データファイルから一括登録します。
       * @returns OK
       */
      $post: (option: { body: Methods_1da1jwy['post']['reqBody'], query?: Methods_1da1jwy['post']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1da1jwy['post']['resBody'], BasicHeaders, Methods_1da1jwy['post']['status']>(prefix, PATH2, POST, option, 'FormData').json().then(r => r.body),
      $path: (option?: { method: 'post'; query: Methods_1da1jwy['post']['query'] } | undefined) =>
        `${prefix}${PATH2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    bulk_insert_async: {
      /**
       * 国内受注を受注データファイルから一括登録します。応答には user_logs も含まれます。embed はバッチ出力に対する指示になります。
       * @returns OK
       */
      post: (option: { body: Methods_10cy721['post']['reqBody'], query?: Methods_10cy721['post']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_10cy721['post']['resBody'], BasicHeaders, Methods_10cy721['post']['status']>(prefix, PATH3, POST, option, 'FormData').json(),
      /**
       * 国内受注を受注データファイルから一括登録します。応答には user_logs も含まれます。embed はバッチ出力に対する指示になります。
       * @returns OK
       */
      $post: (option: { body: Methods_10cy721['post']['reqBody'], query?: Methods_10cy721['post']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_10cy721['post']['resBody'], BasicHeaders, Methods_10cy721['post']['status']>(prefix, PATH3, POST, option, 'FormData').json().then(r => r.body),
      $path: (option?: { method: 'post'; query: Methods_10cy721['post']['query'] } | undefined) =>
        `${prefix}${PATH3}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    export_denpatu: {
      /**
       * 伝発名人帳票データを出力します
       */
      post: (option: { body: Methods_19iefas['post']['reqBody'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods_19iefas['post']['status']>(prefix, PATH4, POST, option).send(),
      /**
       * 伝発名人帳票データを出力します
       */
      $post: (option: { body: Methods_19iefas['post']['reqBody'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods_19iefas['post']['status']>(prefix, PATH4, POST, option).send().then(r => r.body),
      $path: () => `${prefix}${PATH4}`,
    },
    fare_summary: {
      /**
       * 国内受注運賃確認用一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_1fkohkl['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1fkohkl['get']['resBody'], BasicHeaders, Methods_1fkohkl['get']['status']>(prefix, PATH5, GET, option).json(),
      /**
       * 国内受注運賃確認用一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_1fkohkl['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1fkohkl['get']['resBody'], BasicHeaders, Methods_1fkohkl['get']['status']>(prefix, PATH5, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_1fkohkl['get']['query'] } | undefined) =>
        `${prefix}${PATH5}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    get_invent_related: {
      /**
       * 国内受注商品関連情報を取得します
       * @returns OK
       */
      post: (option: { body: Methods_1kztjcz['post']['reqBody'], query?: Methods_1kztjcz['post']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1kztjcz['post']['resBody'], BasicHeaders, Methods_1kztjcz['post']['status']>(prefix, PATH6, POST, option).json(),
      /**
       * 国内受注商品関連情報を取得します
       * @returns OK
       */
      $post: (option: { body: Methods_1kztjcz['post']['reqBody'], query?: Methods_1kztjcz['post']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1kztjcz['post']['resBody'], BasicHeaders, Methods_1kztjcz['post']['status']>(prefix, PATH6, POST, option).json().then(r => r.body),
      $path: (option?: { method: 'post'; query: Methods_1kztjcz['post']['query'] } | undefined) =>
        `${prefix}${PATH6}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    invent_sales: {
      /**
       * 商品売上一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_1o63uup['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1o63uup['get']['resBody'], BasicHeaders, Methods_1o63uup['get']['status']>(prefix, PATH7, GET, option).json(),
      /**
       * 商品売上一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_1o63uup['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1o63uup['get']['resBody'], BasicHeaders, Methods_1o63uup['get']['status']>(prefix, PATH7, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_1o63uup['get']['query'] } | undefined) =>
        `${prefix}${PATH7}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    invents: {
      /**
       * 販売管理用商品一覧を取得します
       * @returns OK
       */
      get: (option: { query: Methods_azrjx3['get']['query'], config?: T | undefined }) =>
        fetch<Methods_azrjx3['get']['resBody'], BasicHeaders, Methods_azrjx3['get']['status']>(prefix, PATH8, GET, option).json(),
      /**
       * 販売管理用商品一覧を取得します
       * @returns OK
       */
      $get: (option: { query: Methods_azrjx3['get']['query'], config?: T | undefined }) =>
        fetch<Methods_azrjx3['get']['resBody'], BasicHeaders, Methods_azrjx3['get']['status']>(prefix, PATH8, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_azrjx3['get']['query'] } | undefined) =>
        `${prefix}${PATH8}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    print_delivery_guidance: {
      /**
       * 代引案内を出力します。
       * @returns OK
       */
      post: (option: { body: Methods_g1sgdt['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_g1sgdt['post']['resBody'], BasicHeaders, Methods_g1sgdt['post']['status']>(prefix, PATH9, POST, option).json(),
      /**
       * 代引案内を出力します。
       * @returns OK
       */
      $post: (option: { body: Methods_g1sgdt['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_g1sgdt['post']['resBody'], BasicHeaders, Methods_g1sgdt['post']['status']>(prefix, PATH9, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH9}`,
    },
    print_delivery_slip: {
      /**
       * 納品書・商品明細書を出力します。
       * @returns OK
       */
      post: (option: { body: Methods_cgrbf1['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_cgrbf1['post']['resBody'], BasicHeaders, Methods_cgrbf1['post']['status']>(prefix, PATH10, POST, option).json(),
      /**
       * 納品書・商品明細書を出力します。
       * @returns OK
       */
      $post: (option: { body: Methods_cgrbf1['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_cgrbf1['post']['resBody'], BasicHeaders, Methods_cgrbf1['post']['status']>(prefix, PATH10, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH10}`,
    },
    print_physical_stock_request: {
      /**
       * 現物取置依頼書を出力します。
       * @returns OK
       */
      post: (option: { body: Methods_axpmjs['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_axpmjs['post']['resBody'], BasicHeaders, Methods_axpmjs['post']['status']>(prefix, PATH11, POST, option).json(),
      /**
       * 現物取置依頼書を出力します。
       * @returns OK
       */
      $post: (option: { body: Methods_axpmjs['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_axpmjs['post']['resBody'], BasicHeaders, Methods_axpmjs['post']['status']>(prefix, PATH11, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH11}`,
    },
    print_purchase_order: {
      /**
       * 発注書(直送)を出力します。
       * @returns OK
       */
      post: (option: { body: Methods_1xc9z4u['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_1xc9z4u['post']['resBody'], BasicHeaders, Methods_1xc9z4u['post']['status']>(prefix, PATH12, POST, option).json(),
      /**
       * 発注書(直送)を出力します。
       * @returns OK
       */
      $post: (option: { body: Methods_1xc9z4u['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_1xc9z4u['post']['resBody'], BasicHeaders, Methods_1xc9z4u['post']['status']>(prefix, PATH12, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH12}`,
    },
    print_transfer_request: {
      /**
       * 振込依頼を出力します。
       * @returns OK
       */
      post: (option: { body: Methods_p17e63['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_p17e63['post']['resBody'], BasicHeaders, Methods_p17e63['post']['status']>(prefix, PATH13, POST, option).json(),
      /**
       * 振込依頼を出力します。
       * @returns OK
       */
      $post: (option: { body: Methods_p17e63['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_p17e63['post']['resBody'], BasicHeaders, Methods_p17e63['post']['status']>(prefix, PATH13, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH13}`,
    },
    /**
     * 国内受注一覧を返します
     * @returns OK
     */
    get: (option: { query: Methods_by08hd['get']['query'], config?: T | undefined }) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * 国内受注一覧を返します
     * @returns OK
     */
    $get: (option: { query: Methods_by08hd['get']['query'], config?: T | undefined }) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    /**
     * 国内受注を追加更新削除します。
     * @returns OK
     */
    put: (option: { body: Methods_by08hd['put']['reqBody'], query?: Methods_by08hd['put']['query'] | undefined, config?: T | undefined }) =>
      fetch<Methods_by08hd['put']['resBody'], BasicHeaders, Methods_by08hd['put']['status']>(prefix, PATH0, PUT, option).json(),
    /**
     * 国内受注を追加更新削除します。
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
