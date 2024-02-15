/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** コントロール一覧を返します */
  get: {
    query: Types.Embed & Types.Limit & Types.With_deleted & {
      /** コントロールIDM */
      idm?: string | undefined
      /** コントロール名 */
      name?: string | undefined
      /** コード1（明細の絞込用） */
      cd1?: string | undefined
      /** 明細取得を除外するIDM。カンマ区切りで複数指定できます。 */
      without_details_idms?: string | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: Types.Control[]
      total: number
    }
  }

  /** コントロールを追加更新削除します。 */
  put: {
    query?: Types.Embed | undefined
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。追加更新削除した結果が反映されます。 */
      items?: Types.ControlBulkTarget[] | undefined
    }

    reqBody: {
      /** 追加更新削除するオブジェクトの配列 */
      items?: Types.ControlBulkTarget[] | undefined
    } & Types.BulkRequest
  }
}
