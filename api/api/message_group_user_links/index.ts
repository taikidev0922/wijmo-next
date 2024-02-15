/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** メッセージグループ～担当者紐付一覧を返します */
  get: {
    query: Types.Embed & Types.Limit & Types.With_deleted & {
      /** メッセージグループID */
      message_group_id?: number | undefined
      /** メッセージグループIDM */
      message_group_idm?: string | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: Types.MessageGroupUserLink[]
      total: number
    }
  }

  /** メッセージグループ～担当者紐付を追加更新削除します。 */
  put: {
    query?: Types.Embed | undefined
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。追加更新削除した結果が反映されます。 */
      items?: Types.MessageGroupUserLinkBulkTarget[] | undefined
    }

    reqBody: {
      /** 追加更新削除するオブジェクトの配列 */
      items?: Types.MessageGroupUserLinkBulkTarget[] | undefined
    } & Types.BulkRequest
  }
}
