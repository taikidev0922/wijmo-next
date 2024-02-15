/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** 画面リスト一覧を返します */
  get: {
    query: Types.Embed & Types.Limit & Types.With_deleted & {
      /** 画面リストIDM */
      idm?: string | undefined
      /** 画面リスト名 */
      name?: string | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: Types.PageList[]
      total: number
    }
  }

  /** 画面リストを追加更新削除します。 */
  put: {
    query?: Types.Embed | undefined
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。追加更新削除した結果が反映されます。 */
      items?: Types.PageListBulkTarget[] | undefined
    }

    reqBody: {
      /** 追加更新削除するオブジェクトの配列 */
      items?: Types.PageListBulkTarget[] | undefined
    } & Types.BulkRequest
  }
}
