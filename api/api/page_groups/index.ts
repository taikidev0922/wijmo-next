/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** 画面グループ一覧を返します */
  get: {
    query: Types.Embed & Types.Limit & Types.With_deleted & {
      /** 画面グループIDM */
      idm?: string | undefined
      /** 画面グループ名 */
      name?: string | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: Types.PageGroup[]
      total: number
    }
  }

  /** 画面グループを追加更新削除します。 */
  put: {
    query?: Types.Embed | undefined
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。追加更新削除した結果が反映されます。 */
      items?: Types.PageGroupBulkTarget[] | undefined
    }

    reqBody: {
      /** 追加更新削除するオブジェクトの配列 */
      items?: Types.PageGroupBulkTarget[] | undefined
    } & Types.BulkRequest
  }
}
