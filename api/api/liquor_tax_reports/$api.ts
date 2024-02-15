import type { AspidaClient, BasicHeaders } from 'aspida';
import type { Methods as Methods_dfekaw } from './print_liquor_tax';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:80' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/liquor_tax_reports/print_liquor_tax';
  const POST = 'POST';

  return {
    print_liquor_tax: {
      /**
       * 酒税報告書（得意先向け・税務署&酒販組合向け）を出力します。
       * @returns OK
       */
      post: (option: { body: Methods_dfekaw['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_dfekaw['post']['resBody'], BasicHeaders, Methods_dfekaw['post']['status']>(prefix, PATH0, POST, option).json(),
      /**
       * 酒税報告書（得意先向け・税務署&酒販組合向け）を出力します。
       * @returns OK
       */
      $post: (option: { body: Methods_dfekaw['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_dfekaw['post']['resBody'], BasicHeaders, Methods_dfekaw['post']['status']>(prefix, PATH0, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH0}`,
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
