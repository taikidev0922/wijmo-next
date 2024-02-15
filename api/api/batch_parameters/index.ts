/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** バッチパラメータ一覧を返します */
  get: {
    query: Types.Embed & Types.Limit & Types.With_deleted & {
      /** バッチIDM */
      batch_idm?: string | undefined
      /** バッチ区分 */
      batch_type?: string | undefined
      /** 業務区分 */
      batch_service?: string | undefined
      /** バッチ名 */
      batch_name?: string | undefined
      /** パラメータ名 */
      name?: string | undefined
      /** パラメータ */
      parameter?: string | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: Types.BatchParameter[]
      total: number
    }
  }

  /** バッチパラメータを追加更新削除します。 */
  put: {
    query?: Types.Embed | undefined
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。追加更新削除した結果が反映されます。 */
      items?: Types.BatchParameterBulkTarget[] | undefined
    }

    reqBody: {
      /** 追加更新削除するオブジェクトの配列 */
      items?: Types.BatchParameterBulkTarget[] | undefined
    } & Types.BulkRequest
  }
}
