/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** 担当アシスタント一覧を返します */
  get: {
    query: Types.Embed & Types.Limit & Types.With_deleted & {
      /** 担当者IDM */
      user_idm?: string | undefined
      /** アシスタントIDM */
      assistant_user_idm?: string | undefined
      /** サブアシスタントIDM */
      sub_assistant_user_idm?: string | undefined
      /** 適用開始日 */
      start_on?: string | undefined
      /** 適用終了日 */
      end_on?: string | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: Types.Assistant[]
      total: number
    }
  }

  /** 担当アシスタントを追加更新削除します。 */
  put: {
    query?: Types.Embed | undefined
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。追加更新削除した結果が反映されます。 */
      items?: Types.AssistantBulkTarget[] | undefined
    }

    reqBody: {
      /** 追加更新削除するオブジェクトの配列 */
      items?: Types.AssistantBulkTarget[] | undefined
    } & Types.BulkRequest
  }
}
