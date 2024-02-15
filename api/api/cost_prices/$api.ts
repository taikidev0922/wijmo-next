import type { AspidaClient, BasicHeaders } from 'aspida';
import type { Methods as Methods_1051juf } from './export_cost_price_data';
import type { Methods as Methods_wfjnf4 } from './import_cost_price_data';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:80' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/cost_prices/export_cost_price_data';
  const PATH1 = '/api/cost_prices/import_cost_price_data';
  const POST = 'POST';

  return {
    export_cost_price_data: {
      /**
       * 原価データを出力します。
       */
      post: (option: { body: Methods_1051juf['post']['reqBody'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods_1051juf['post']['status']>(prefix, PATH0, POST, option).send(),
      /**
       * 原価データを出力します。
       */
      $post: (option: { body: Methods_1051juf['post']['reqBody'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods_1051juf['post']['status']>(prefix, PATH0, POST, option).send().then(r => r.body),
      $path: () => `${prefix}${PATH0}`,
    },
    import_cost_price_data: {
      /**
       * 原価データを取り込みます。
       */
      post: (option: { body: Methods_wfjnf4['post']['reqBody'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods_wfjnf4['post']['status']>(prefix, PATH1, POST, option).send(),
      /**
       * 原価データを取り込みます。
       */
      $post: (option: { body: Methods_wfjnf4['post']['reqBody'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods_wfjnf4['post']['status']>(prefix, PATH1, POST, option).send().then(r => r.body),
      $path: () => `${prefix}${PATH1}`,
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
