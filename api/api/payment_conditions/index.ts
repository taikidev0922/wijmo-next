/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** 支払条件一覧を返します */
  get: {
    query: Types.Embed & Types.Limit & Types.With_deleted & {
      /** 支払条件IDM */
      idm?: string | undefined
      /** 支払条件名 */
      name?: string | undefined
      /** 輸入・国内区分 */
      import_domestic_cd1?: string | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: Types.PaymentCondition[]
      total: number
    }
  }

  /** 支払条件を追加更新削除します。 */
  put: {
    query?: Types.Embed | undefined
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。追加更新削除した結果が反映されます。 */
      items?: Types.PaymentConditionBulkTarget[] | undefined
    }

    reqBody: {
      /** 追加更新削除するオブジェクトの配列 */
      items?: Types.PaymentConditionBulkTarget[] | undefined
    } & Types.BulkRequest
  }
}
