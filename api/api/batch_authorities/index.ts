/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** バッチ実行権限一覧を返します */
  get: {
    query: Types.Embed & Types.Limit & Types.With_deleted & {
      /** バッチパラメータID */
      batch_parameter_idm?: string | undefined
      /** 担当者ID */
      user_idm?: string | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: Types.BatchAuthority[]
      total: number
    }
  }

  /** バッチ実行権限を追加更新削除します。 */
  put: {
    query?: Types.Embed | undefined
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。追加更新削除した結果が反映されます。 */
      items?: Types.BatchAuthorityBulkTarget[] | undefined
    }

    reqBody: {
      /** 追加更新削除するオブジェクトの配列 */
      items?: Types.BatchAuthorityBulkTarget[] | undefined
    } & Types.BulkRequest
  }
}
