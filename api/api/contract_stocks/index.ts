/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** 委託倉庫在庫一覧を返します */
  get: {
    query: Types.Embed & Types.Limit & Types.With_deleted & {
      /** 対象日From */
      stock_reported_from?: string | undefined
      /** 対象日To */
      stock_reported_to?: string | undefined
      /** 委託倉庫 */
      contract_location_cd1?: string | undefined
      /** 差異あり */
      is_difference?: boolean | undefined
      /** 通関済数含む差異あり */
      is_difference_customs?: boolean | undefined
      /** 品番 */
      invent_idm?: string | undefined
      /** 商品名(伝票印字品名) */
      name_denpatu?: string | undefined
      /** 年号 */
      vintage?: string | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: (Types.ContractStock)[]
      total: number
    }
  }
}
