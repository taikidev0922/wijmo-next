import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_1miw9ke } from './bulk';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:80' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/customer_sales/bulk';
  const POST = 'POST';

  return {
    bulk: {
      /**
       * 得意先営業担当者を一括更新します。ロックの取得を指定した場合、ロックの取得に成功した後、直ちにそのロックは解放されます。
       * @returns OK
       */
      post: (option: { body: Methods_1miw9ke['post']['reqBody'], query?: Methods_1miw9ke['post']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1miw9ke['post']['resBody'], BasicHeaders, Methods_1miw9ke['post']['status']>(prefix, PATH0, POST, option, 'FormData').json(),
      /**
       * 得意先営業担当者を一括更新します。ロックの取得を指定した場合、ロックの取得に成功した後、直ちにそのロックは解放されます。
       * @returns OK
       */
      $post: (option: { body: Methods_1miw9ke['post']['reqBody'], query?: Methods_1miw9ke['post']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1miw9ke['post']['resBody'], BasicHeaders, Methods_1miw9ke['post']['status']>(prefix, PATH0, POST, option, 'FormData').json().then(r => r.body),
      $path: (option?: { method: 'post'; query: Methods_1miw9ke['post']['query'] } | undefined) =>
        `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
