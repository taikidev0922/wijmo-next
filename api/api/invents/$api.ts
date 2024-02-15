import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_by08hd } from '.';
import type { Methods as Methods_mnqeuy } from './_invent_id@number';
import type { Methods as Methods_itmq8k } from './_invent_id@number/image';
import type { Methods as Methods_1ioofrm } from './_invent_id@number/update_domestic_order_price';
import type { Methods as Methods_4lnm94 } from './_invent_id@number/update_import_price';
import type { Methods as Methods_133p817 } from './_invent_id@number/update_sales_price';
import type { Methods as Methods_1da1jwy } from './bulk_insert';
import type { Methods as Methods_dz28g2 } from './bulk_update';
import type { Methods as Methods_zd3rux } from './bulk_update_async';
import type { Methods as Methods_rjdn4n } from './export_idm';
import type { Methods as Methods_1k5bujy } from './export_jan';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:80' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/invents';
  const PATH1 = '/image';
  const PATH2 = '/update_domestic_order_price';
  const PATH3 = '/update_import_price';
  const PATH4 = '/update_sales_price';
  const PATH5 = '/api/invents/bulk_insert';
  const PATH6 = '/api/invents/bulk_update';
  const PATH7 = '/api/invents/bulk_update_async';
  const PATH8 = '/api/invents/export_idm';
  const PATH9 = '/api/invents/export_jan';
  const GET = 'GET';
  const POST = 'POST';
  const PUT = 'PUT';

  return {
    _invent_id: (val0: number) => {
      const prefix0 = `${PATH0}/${val0}`;

      return {
        image: {
          /**
           * 商品画像を取得します
           * @returns OK
           */
          get: (option: { query: Methods_itmq8k['get']['query'], config?: T | undefined }) =>
            fetch<Methods_itmq8k['get']['resBody'], BasicHeaders, Methods_itmq8k['get']['status']>(prefix, `${prefix0}${PATH1}`, GET, option).blob(),
          /**
           * 商品画像を取得します
           * @returns OK
           */
          $get: (option: { query: Methods_itmq8k['get']['query'], config?: T | undefined }) =>
            fetch<Methods_itmq8k['get']['resBody'], BasicHeaders, Methods_itmq8k['get']['status']>(prefix, `${prefix0}${PATH1}`, GET, option).blob().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_itmq8k['get']['query'] } | undefined) =>
            `${prefix}${prefix0}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
        update_domestic_order_price: {
          /**
           * 国内発注単価単価を追加更新します。対象の商品のロックが取得されていなければ、失敗します。
           * @returns OK
           */
          post: (option: { body: Methods_1ioofrm['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_1ioofrm['post']['resBody'], BasicHeaders, Methods_1ioofrm['post']['status']>(prefix, `${prefix0}${PATH2}`, POST, option).json(),
          /**
           * 国内発注単価単価を追加更新します。対象の商品のロックが取得されていなければ、失敗します。
           * @returns OK
           */
          $post: (option: { body: Methods_1ioofrm['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_1ioofrm['post']['resBody'], BasicHeaders, Methods_1ioofrm['post']['status']>(prefix, `${prefix0}${PATH2}`, POST, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix0}${PATH2}`,
        },
        update_import_price: {
          /**
           * 輸入購買単価を追加更新します。対象の商品のロックが取得されていなければ、失敗します。
           * @returns OK
           */
          post: (option: { body: Methods_4lnm94['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_4lnm94['post']['resBody'], BasicHeaders, Methods_4lnm94['post']['status']>(prefix, `${prefix0}${PATH3}`, POST, option).json(),
          /**
           * 輸入購買単価を追加更新します。対象の商品のロックが取得されていなければ、失敗します。
           * @returns OK
           */
          $post: (option: { body: Methods_4lnm94['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_4lnm94['post']['resBody'], BasicHeaders, Methods_4lnm94['post']['status']>(prefix, `${prefix0}${PATH3}`, POST, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix0}${PATH3}`,
        },
        update_sales_price: {
          /**
           * 商品販売単価を追加更新します。対象の商品のロックが取得されていなければ、失敗します。
           * @returns OK
           */
          post: (option: { body: Methods_133p817['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_133p817['post']['resBody'], BasicHeaders, Methods_133p817['post']['status']>(prefix, `${prefix0}${PATH4}`, POST, option).json(),
          /**
           * 商品販売単価を追加更新します。対象の商品のロックが取得されていなければ、失敗します。
           * @returns OK
           */
          $post: (option: { body: Methods_133p817['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_133p817['post']['resBody'], BasicHeaders, Methods_133p817['post']['status']>(prefix, `${prefix0}${PATH4}`, POST, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix0}${PATH4}`,
        },
        /**
         * 商品を取得します。新たなロックを取得する前に、同一テーブルの同一ロックキー1に対する同一担当者によるロックは解除されます。
         * @returns OK
         */
        get: (option?: { query?: Methods_mnqeuy['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_mnqeuy['get']['resBody'], BasicHeaders, Methods_mnqeuy['get']['status']>(prefix, prefix0, GET, option).json(),
        /**
         * 商品を取得します。新たなロックを取得する前に、同一テーブルの同一ロックキー1に対する同一担当者によるロックは解除されます。
         * @returns OK
         */
        $get: (option?: { query?: Methods_mnqeuy['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_mnqeuy['get']['resBody'], BasicHeaders, Methods_mnqeuy['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_mnqeuy['get']['query'] } | undefined) =>
          `${prefix}${prefix0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      };
    },
    bulk_insert: {
      /**
       * 商品を一括登録します。
       * @returns OK
       */
      post: (option: { body: Methods_1da1jwy['post']['reqBody'], query?: Methods_1da1jwy['post']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1da1jwy['post']['resBody'], BasicHeaders, Methods_1da1jwy['post']['status']>(prefix, PATH5, POST, option, 'FormData').json(),
      /**
       * 商品を一括登録します。
       * @returns OK
       */
      $post: (option: { body: Methods_1da1jwy['post']['reqBody'], query?: Methods_1da1jwy['post']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1da1jwy['post']['resBody'], BasicHeaders, Methods_1da1jwy['post']['status']>(prefix, PATH5, POST, option, 'FormData').json().then(r => r.body),
      $path: (option?: { method: 'post'; query: Methods_1da1jwy['post']['query'] } | undefined) =>
        `${prefix}${PATH5}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    bulk_update: {
      /**
       * 商品を一括更新します。ロックの取得を指定した場合、ロックの取得に成功した後、直ちにそのロックは解放されます。
       * @returns OK
       */
      post: (option: { body: Methods_dz28g2['post']['reqBody'], query?: Methods_dz28g2['post']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_dz28g2['post']['resBody'], BasicHeaders, Methods_dz28g2['post']['status']>(prefix, PATH6, POST, option, 'FormData').json(),
      /**
       * 商品を一括更新します。ロックの取得を指定した場合、ロックの取得に成功した後、直ちにそのロックは解放されます。
       * @returns OK
       */
      $post: (option: { body: Methods_dz28g2['post']['reqBody'], query?: Methods_dz28g2['post']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_dz28g2['post']['resBody'], BasicHeaders, Methods_dz28g2['post']['status']>(prefix, PATH6, POST, option, 'FormData').json().then(r => r.body),
      $path: (option?: { method: 'post'; query: Methods_dz28g2['post']['query'] } | undefined) =>
        `${prefix}${PATH6}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    bulk_update_async: {
      /**
       * 商品を一括更新します。応答には user_logs も含まれます。embed はバッチ出力に対する指示になります。
       * @returns OK
       */
      post: (option: { body: Methods_zd3rux['post']['reqBody'], query?: Methods_zd3rux['post']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_zd3rux['post']['resBody'], BasicHeaders, Methods_zd3rux['post']['status']>(prefix, PATH7, POST, option, 'FormData').json(),
      /**
       * 商品を一括更新します。応答には user_logs も含まれます。embed はバッチ出力に対する指示になります。
       * @returns OK
       */
      $post: (option: { body: Methods_zd3rux['post']['reqBody'], query?: Methods_zd3rux['post']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_zd3rux['post']['resBody'], BasicHeaders, Methods_zd3rux['post']['status']>(prefix, PATH7, POST, option, 'FormData').json().then(r => r.body),
      $path: (option?: { method: 'post'; query: Methods_zd3rux['post']['query'] } | undefined) =>
        `${prefix}${PATH7}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    export_idm: {
      /**
       * 品番データを出力します。
       */
      post: (option: { body: Methods_rjdn4n['post']['reqBody'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods_rjdn4n['post']['status']>(prefix, PATH8, POST, option).send(),
      /**
       * 品番データを出力します。
       */
      $post: (option: { body: Methods_rjdn4n['post']['reqBody'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods_rjdn4n['post']['status']>(prefix, PATH8, POST, option).send().then(r => r.body),
      $path: () => `${prefix}${PATH8}`,
    },
    export_jan: {
      /**
       * 商品JAN送付リストを出力します。ロックの取得を指定した場合、ロックの取得に成功した後、直ちにそのロックは解放されます。
       * @returns OK
       */
      post: (option?: { query?: Methods_1k5bujy['post']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_1k5bujy['post']['resBody'], BasicHeaders, Methods_1k5bujy['post']['status']>(prefix, PATH9, POST, option).json(),
      /**
       * 商品JAN送付リストを出力します。ロックの取得を指定した場合、ロックの取得に成功した後、直ちにそのロックは解放されます。
       * @returns OK
       */
      $post: (option?: { query?: Methods_1k5bujy['post']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_1k5bujy['post']['resBody'], BasicHeaders, Methods_1k5bujy['post']['status']>(prefix, PATH9, POST, option).json().then(r => r.body),
      $path: (option?: { method: 'post'; query: Methods_1k5bujy['post']['query'] } | undefined) =>
        `${prefix}${PATH9}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    /**
     * 商品一覧を返します。新たなロックを取得する前に、同一テーブルの同一ロックキー1に対する同一担当者によるロックは解除されます。
     * @returns OK
     */
    get: (option: { query: Methods_by08hd['get']['query'], config?: T | undefined }) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * 商品一覧を返します。新たなロックを取得する前に、同一テーブルの同一ロックキー1に対する同一担当者によるロックは解除されます。
     * @returns OK
     */
    $get: (option: { query: Methods_by08hd['get']['query'], config?: T | undefined }) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    /**
     * 商品を追加更新削除します。
     * @returns OK
     */
    put: (option: { body: Methods_by08hd['put']['reqBody'], query?: Methods_by08hd['put']['query'] | undefined, config?: T | undefined }) =>
      fetch<Methods_by08hd['put']['resBody'], BasicHeaders, Methods_by08hd['put']['status']>(prefix, PATH0, PUT, option).json(),
    /**
     * 商品を追加更新削除します。
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
