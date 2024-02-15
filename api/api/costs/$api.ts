import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_1da1jwy } from './bulk_insert';
import type { Methods as Methods_hqauke } from './bulk_insert_check_amount';
import type { Methods as Methods_1byx210 } from './bulk_insert_custom';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:80' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/costs/bulk_insert';
  const PATH1 = '/api/costs/bulk_insert_check_amount';
  const PATH2 = '/api/costs/bulk_insert_custom';
  const POST = 'POST';

  return {
    bulk_insert: {
      /**
       * コストデータを取り込みます。
       * @returns OK
       */
      post: (option: { body: Methods_1da1jwy['post']['reqBody'], query?: Methods_1da1jwy['post']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1da1jwy['post']['resBody'], BasicHeaders, Methods_1da1jwy['post']['status']>(prefix, PATH0, POST, option, 'FormData').json(),
      /**
       * コストデータを取り込みます。
       * @returns OK
       */
      $post: (option: { body: Methods_1da1jwy['post']['reqBody'], query?: Methods_1da1jwy['post']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1da1jwy['post']['resBody'], BasicHeaders, Methods_1da1jwy['post']['status']>(prefix, PATH0, POST, option, 'FormData').json().then(r => r.body),
      $path: (option?: { method: 'post'; query: Methods_1da1jwy['post']['query'] } | undefined) =>
        `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    bulk_insert_check_amount: {
      /**
       * 作業料（コスト）データを取り込みます。
       * @returns OK
       */
      post: (option: { body: Methods_hqauke['post']['reqBody'], query?: Methods_hqauke['post']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_hqauke['post']['resBody'], BasicHeaders, Methods_hqauke['post']['status']>(prefix, PATH1, POST, option, 'FormData').json(),
      /**
       * 作業料（コスト）データを取り込みます。
       * @returns OK
       */
      $post: (option: { body: Methods_hqauke['post']['reqBody'], query?: Methods_hqauke['post']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_hqauke['post']['resBody'], BasicHeaders, Methods_hqauke['post']['status']>(prefix, PATH1, POST, option, 'FormData').json().then(r => r.body),
      $path: (option?: { method: 'post'; query: Methods_hqauke['post']['query'] } | undefined) =>
        `${prefix}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    bulk_insert_custom: {
      /**
       * コスト通関データを取り込みます。
       * @returns OK
       */
      post: (option: { body: Methods_1byx210['post']['reqBody'], query?: Methods_1byx210['post']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1byx210['post']['resBody'], BasicHeaders, Methods_1byx210['post']['status']>(prefix, PATH2, POST, option, 'FormData').json(),
      /**
       * コスト通関データを取り込みます。
       * @returns OK
       */
      $post: (option: { body: Methods_1byx210['post']['reqBody'], query?: Methods_1byx210['post']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1byx210['post']['resBody'], BasicHeaders, Methods_1byx210['post']['status']>(prefix, PATH2, POST, option, 'FormData').json().then(r => r.body),
      $path: (option?: { method: 'post'; query: Methods_1byx210['post']['query'] } | undefined) =>
        `${prefix}${PATH2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
