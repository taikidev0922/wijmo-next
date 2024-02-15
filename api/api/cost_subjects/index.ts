/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** 費用科目一覧を返します */
  get: {
    query: Types.Embed & Types.Limit & Types.With_deleted & {
      /** 費用科目IDM */
      idm?: string | undefined
      /** 費用科目名 */
      name?: string | undefined
      /** 課税・非課税区分 */
      cost_taxation_type_cd1?: string | undefined
      /** 科目CD */
      account_cd?: number | undefined
      /** 枝番CD */
      sub_cd?: number[] | undefined
      /** 支払連携FLG */
      is_payment?: boolean | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: Types.CostSubject[]
      total: number
    }
  }

  /** 費用科目を追加更新削除します。 */
  put: {
    query?: Types.Embed | undefined
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。追加更新削除した結果が反映されます。 */
      items?: Types.CostSubjectBulkTarget[] | undefined
    }

    reqBody: {
      /** 追加更新削除するオブジェクトの配列 */
      items?: Types.CostSubjectBulkTarget[] | undefined
    } & Types.BulkRequest
  }
}
