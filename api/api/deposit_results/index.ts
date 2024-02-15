/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** 入金実績一覧を返します */
  get: {
    query: Types.Embed & Types.Limit & Types.With_deleted & {
      /** 入金伝票No */
      no?: string | undefined
      /** 入金日From */
      deposit_on_from?: string | undefined
      /** 入金日To */
      deposit_on_to?: string | undefined
      /** 入金先IDM */
      deposit_customer_idm?: string | undefined
      /** 入金先名 */
      deposit_customer_name?: string | undefined
      /** 入金方法 */
      deposit_type_cd1?: string | undefined
      /** 顛末区分 */
      deposit_sts_cd1?: string | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: Types.DepositResult[]
      total: number
    }
  }

  /** 入金実績を追加更新削除します。 */
  put: {
    query?: Types.Embed | undefined
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。追加更新削除した結果が反映されます。 */
      items?: Types.DepositResultBulkTarget[] | undefined
    }

    reqBody: {
      /** 追加更新削除するオブジェクトの配列 */
      items?: Types.DepositResultBulkTarget[] | undefined
    } & Types.BulkRequest
  }
}
