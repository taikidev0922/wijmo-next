import type { AspidaClient, BasicHeaders } from 'aspida';
import type { Methods as Methods_sffhhl } from './get_new_invent_vintage';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:80' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/shipping_order_detail/get_new_invent_vintage';
  const POST = 'POST';

  return {
    get_new_invent_vintage: {
      /**
       * 船積オーダー明細新品番年号区分取得と撮影区分を返します
       * @returns OK
       */
      post: (option: { body: Methods_sffhhl['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_sffhhl['post']['resBody'], BasicHeaders, Methods_sffhhl['post']['status']>(prefix, PATH0, POST, option).json(),
      /**
       * 船積オーダー明細新品番年号区分取得と撮影区分を返します
       * @returns OK
       */
      $post: (option: { body: Methods_sffhhl['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_sffhhl['post']['resBody'], BasicHeaders, Methods_sffhhl['post']['status']>(prefix, PATH0, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH0}`,
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
