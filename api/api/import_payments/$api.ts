import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_by08hd } from '.';
import type { Methods as Methods_eat2kr } from './detail';
import type { Methods as Methods_1vphufh } from './offset';
import type { Methods as Methods_upuibd } from './output_payment_file';
import type { Methods as Methods_1romyco } from './print_payment_schedule_check_list';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:80' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/import_payments';
  const PATH1 = '/api/import_payments/detail';
  const PATH2 = '/api/import_payments/offset';
  const PATH3 = '/api/import_payments/output_payment_file';
  const PATH4 = '/api/import_payments/print_payment_schedule_check_list';
  const GET = 'GET';
  const POST = 'POST';
  const PUT = 'PUT';

  return {
    detail: {
      /**
       * 輸入支払予定・実績入力一覧
       * @returns OK
       */
      get: (option: { query: Methods_eat2kr['get']['query'], config?: T | undefined }) =>
        fetch<Methods_eat2kr['get']['resBody'], BasicHeaders, Methods_eat2kr['get']['status']>(prefix, PATH1, GET, option).json(),
      /**
       * 輸入支払予定・実績入力一覧
       * @returns OK
       */
      $get: (option: { query: Methods_eat2kr['get']['query'], config?: T | undefined }) =>
        fetch<Methods_eat2kr['get']['resBody'], BasicHeaders, Methods_eat2kr['get']['status']>(prefix, PATH1, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_eat2kr['get']['query'] } | undefined) =>
        `${prefix}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    offset: {
      /**
       * 輸入支払予定・実績入力一覧
       * @returns OK
       */
      get: (option: { query: Methods_1vphufh['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1vphufh['get']['resBody'], BasicHeaders, Methods_1vphufh['get']['status']>(prefix, PATH2, GET, option).json(),
      /**
       * 輸入支払予定・実績入力一覧
       * @returns OK
       */
      $get: (option: { query: Methods_1vphufh['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1vphufh['get']['resBody'], BasicHeaders, Methods_1vphufh['get']['status']>(prefix, PATH2, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_1vphufh['get']['query'] } | undefined) =>
        `${prefix}${PATH2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    output_payment_file: {
      /**
       * 海外のインターネットバンキング用支払データを出力します。
       */
      post: (option: { body: Methods_upuibd['post']['reqBody'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods_upuibd['post']['status']>(prefix, PATH3, POST, option).send(),
      /**
       * 海外のインターネットバンキング用支払データを出力します。
       */
      $post: (option: { body: Methods_upuibd['post']['reqBody'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods_upuibd['post']['status']>(prefix, PATH3, POST, option).send().then(r => r.body),
      $path: () => `${prefix}${PATH3}`,
    },
    print_payment_schedule_check_list: {
      /**
       * 支払予定チェックリストを出力します。
       * @returns OK
       */
      post: (option: { body: Methods_1romyco['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_1romyco['post']['resBody'], BasicHeaders, Methods_1romyco['post']['status']>(prefix, PATH4, POST, option).json(),
      /**
       * 支払予定チェックリストを出力します。
       * @returns OK
       */
      $post: (option: { body: Methods_1romyco['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_1romyco['post']['resBody'], BasicHeaders, Methods_1romyco['post']['status']>(prefix, PATH4, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH4}`,
    },
    /**
     * 輸入支払予定・実績入力一覧
     * @returns OK
     */
    get: (option: { query: Methods_by08hd['get']['query'], config?: T | undefined }) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * 輸入支払予定・実績入力一覧
     * @returns OK
     */
    $get: (option: { query: Methods_by08hd['get']['query'], config?: T | undefined }) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    /**
     * 支払実績を追加更新削除します。
     * @returns OK
     */
    put: (option: { body: Methods_by08hd['put']['reqBody'], query?: Methods_by08hd['put']['query'] | undefined, config?: T | undefined }) =>
      fetch<Methods_by08hd['put']['resBody'], BasicHeaders, Methods_by08hd['put']['status']>(prefix, PATH0, PUT, option).json(),
    /**
     * 支払実績を追加更新削除します。
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
