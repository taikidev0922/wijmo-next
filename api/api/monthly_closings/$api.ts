import type { AspidaClient, BasicHeaders } from 'aspida';
import type { Methods as Methods_ty7ngm } from './close';
import type { Methods as Methods_wayetz } from './next';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:80' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/monthly_closings/close';
  const PATH1 = '/api/monthly_closings/next';
  const GET = 'GET';
  const POST = 'POST';

  return {
    close: {
      /**
       * 月次締めもしくは解除を行います。
       */
      post: (option: { body: Methods_ty7ngm['post']['reqBody'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods_ty7ngm['post']['status']>(prefix, PATH0, POST, option).send(),
      /**
       * 月次締めもしくは解除を行います。
       */
      $post: (option: { body: Methods_ty7ngm['post']['reqBody'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods_ty7ngm['post']['status']>(prefix, PATH0, POST, option).send().then(r => r.body),
      $path: () => `${prefix}${PATH0}`,
    },
    next: {
      /**
       * 月次締めすべき年月を取得します。
       * @returns OK
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_wayetz['get']['resBody'], BasicHeaders, Methods_wayetz['get']['status']>(prefix, PATH1, GET, option).json(),
      /**
       * 月次締めすべき年月を取得します。
       * @returns OK
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_wayetz['get']['resBody'], BasicHeaders, Methods_wayetz['get']['status']>(prefix, PATH1, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH1}`,
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
