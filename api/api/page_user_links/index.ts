/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** 画面制御一覧を返します */
  get: {
    query: Types.Embed & Types.Limit & Types.With_deleted & {
      /** 画面IDM */
      page_idm?: string | undefined
      /** 担当者IDM */
      user_idm?: string | undefined
      /** 権限区分CD */
      page_auth_cd1?: string | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: Types.PageUserLink[]
      total: number
    }
  }

  /** 画面制御を追加更新削除します。 */
  put: {
    query?: Types.Embed | undefined
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。追加更新削除した結果が反映されます。 */
      items?: Types.PageUserLinkBulkTarget[] | undefined
    }

    reqBody: {
      /** 追加更新削除するオブジェクトの配列 */
      items?: Types.PageUserLinkBulkTarget[] | undefined
    } & Types.BulkRequest
  }
}
