/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** 関税一覧を返します */
  get: {
    query: Types.Embed & Types.Limit & Types.With_deleted & {
      /** 特恵グループCD */
      preferential_treatment_group_cd1?: string | undefined
      /** 輸入統計品目CD */
      customs_itemname_cd1?: string | undefined
      /** 適用開始日 */
      start_on?: string | undefined
      /** 適用終了日 */
      end_on?: string | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: Types.CustomsDuty[]
      total: number
    }
  }

  /** 関税を追加更新削除します。 */
  put: {
    query?: Types.Embed | undefined
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。追加更新削除した結果が反映されます。 */
      items?: Types.CustomsDutyBulkTarget[] | undefined
    }

    reqBody: {
      /** 追加更新削除するオブジェクトの配列 */
      items?: Types.CustomsDutyBulkTarget[] | undefined
    } & Types.BulkRequest
  }
}
