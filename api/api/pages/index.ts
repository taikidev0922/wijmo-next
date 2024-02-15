/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** 画面一覧を返します */
  get: {
    query: Types.Embed & Types.Limit & Types.With_deleted & {
      /** 画面IDM */
      idm?: string | undefined
      /** 画面名 */
      name?: string | undefined
      /** 画面グループIDM */
      page_group_idm?: string | undefined
      /** 画面グループ名 */
      page_group_name?: string | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: Types.Page[]
      total: number
    }
  }

  /** 画面を追加更新削除します。 */
  put: {
    query?: Types.Embed | undefined
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。追加更新削除した結果が反映されます。 */
      items?: Types.PageBulkTarget[] | undefined
    }

    reqBody: {
      /** 追加更新削除するオブジェクトの配列 */
      items?: Types.PageBulkTarget[] | undefined
    } & Types.BulkRequest
  }
}
