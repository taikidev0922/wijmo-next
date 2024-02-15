import type { AspidaClient, BasicHeaders } from 'aspida';
import type { Methods as Methods_by08hd } from '.';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:80' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/deposit_results/execute_clearing';
  const PUT = 'PUT';

  return {
    /**
     * 入金実績に対する消込処理をします
     */
    put: (option: { body: Methods_by08hd['put']['reqBody'], config?: T | undefined }) =>
      fetch<void, BasicHeaders, Methods_by08hd['put']['status']>(prefix, PATH0, PUT, option).send(),
    /**
     * 入金実績に対する消込処理をします
     */
    $put: (option: { body: Methods_by08hd['put']['reqBody'], config?: T | undefined }) =>
      fetch<void, BasicHeaders, Methods_by08hd['put']['status']>(prefix, PATH0, PUT, option).send().then(r => r.body),
    $path: () => `${prefix}${PATH0}`,
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
