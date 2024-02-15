import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_by08hd } from '.';
import type { Methods as Methods_1ucnhms } from './_user_log_id@number';
import type { Methods as Methods_l3mmc8 } from './_user_log_id@number/output';
import type { Methods as Methods_1tj58qg } from './_user_log_id@number/restart';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:80' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/user_logs';
  const PATH1 = '/output';
  const PATH2 = '/restart';
  const GET = 'GET';
  const POST = 'POST';
  const PUT = 'PUT';

  return {
    _user_log_id: (val0: number) => {
      const prefix0 = `${PATH0}/${val0}`;

      return {
        output: {
          /**
           * 利用者ログの出力を取得します。HTTPステータスコードも出力結果を反映したものになります。
           * @returns OK
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_l3mmc8['get']['resBody'], BasicHeaders, Methods_l3mmc8['get']['status']>(prefix, `${prefix0}${PATH1}`, GET, option).json(),
          /**
           * 利用者ログの出力を取得します。HTTPステータスコードも出力結果を反映したものになります。
           * @returns OK
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_l3mmc8['get']['resBody'], BasicHeaders, Methods_l3mmc8['get']['status']>(prefix, `${prefix0}${PATH1}`, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix0}${PATH1}`,
        },
        restart: {
          /**
           * 利用者ログを生成した処理を再度実行します。
           */
          post: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods_1tj58qg['post']['status']>(prefix, `${prefix0}${PATH2}`, POST, option).send(),
          /**
           * 利用者ログを生成した処理を再度実行します。
           */
          $post: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods_1tj58qg['post']['status']>(prefix, `${prefix0}${PATH2}`, POST, option).send().then(r => r.body),
          $path: () => `${prefix}${prefix0}${PATH2}`,
        },
        /**
         * 利用者ログを取得します
         * @returns OK
         */
        get: (option?: { query?: Methods_1ucnhms['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_1ucnhms['get']['resBody'], BasicHeaders, Methods_1ucnhms['get']['status']>(prefix, prefix0, GET, option).json(),
        /**
         * 利用者ログを取得します
         * @returns OK
         */
        $get: (option?: { query?: Methods_1ucnhms['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_1ucnhms['get']['resBody'], BasicHeaders, Methods_1ucnhms['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_1ucnhms['get']['query'] } | undefined) =>
          `${prefix}${prefix0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      };
    },
    /**
     * 利用者ログ一覧を返します
     * @returns OK
     */
    get: (option: { query: Methods_by08hd['get']['query'], config?: T | undefined }) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * 利用者ログ一覧を返します
     * @returns OK
     */
    $get: (option: { query: Methods_by08hd['get']['query'], config?: T | undefined }) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    /**
     * 利用者ログを追加更新削除します。
     * @returns OK
     */
    put: (option: { body: Methods_by08hd['put']['reqBody'], query?: Methods_by08hd['put']['query'] | undefined, config?: T | undefined }) =>
      fetch<Methods_by08hd['put']['resBody'], BasicHeaders, Methods_by08hd['put']['status']>(prefix, PATH0, PUT, option).json(),
    /**
     * 利用者ログを追加更新削除します。
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
