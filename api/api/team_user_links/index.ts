/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** チーム担当者一覧を返します */
  get: {
    query: Types.Embed & Types.Limit & Types.With_deleted & {
      /** チームID */
      team_idm?: string | undefined
      /** 担当者ID */
      user_idm?: string | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: Types.TeamUserLink[]
      total: number
    }
  }

  /** チーム担当者を追加更新削除します。 */
  put: {
    query?: Types.Embed | undefined
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。追加更新削除した結果が反映されます。 */
      items?: Types.TeamUserLinkBulkTarget[] | undefined
    }

    reqBody: {
      /** 追加更新削除するオブジェクトの配列 */
      items?: Types.TeamUserLinkBulkTarget[] | undefined
    } & Types.BulkRequest
  }
}
