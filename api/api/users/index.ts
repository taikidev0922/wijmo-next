/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** 担当者一覧を返します */
  get: {
    query: Types.Embed & Types.Limit & Types.With_deleted & {
      /** 担当者IDM */
      idm?: string | undefined
      /** 担当者名(和文) */
      name?: string | undefined
      /** 担当者名(欧文) */
      name_en?: string | undefined
      /** メールアドレス */
      email?: string | undefined
      /** チームID */
      team_id?: number | undefined
      /** チームIDM */
      team_idm?: string | undefined
      /** 部署CD */
      post_cd1?: string | undefined
      /** プリンタID */
      printer_id?: number | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: Types.User[]
      total: number
    }
  }

  /** 担当者を更新します。追加削除はできません。 */
  put: {
    query?: Types.Embed | undefined
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。追加更新削除した結果が反映されます。 */
      items?: Types.UserBulkTarget[] | undefined
    }

    reqBody: {
      /** 追加更新削除するオブジェクトの配列 */
      items?: Types.UserBulkTarget[] | undefined
    } & Types.BulkRequest
  }
}
