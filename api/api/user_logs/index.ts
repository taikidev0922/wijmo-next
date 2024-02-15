/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** 利用者ログ一覧を返します */
  get: {
    query: Types.Embed & Types.Limit & Types.With_deleted & {
      /** 担当者ID */
      user_id?: number | undefined
      /** 担当者IDM */
      user_idm?: string | undefined
      /** 利用者ログ区分 */
      user_log_type_cd1?: string | undefined
      /** メッセージ区分 */
      message_type_cd1?: string | undefined
      /** 作成日時がこれ以上 */
      min_created_at?: string | undefined
      /** 作成日時がこれ以下 */
      max_created_at?: string | undefined
      /** 閲覧日時が記録されているかどうか。trueなら記録されているものを取得。falseなら記録されていないものを取得。nullなら全て取得。 */
      seen?: boolean | undefined
      /** trueなら件数のみ取得。false, 未指定なら全て取得。 */
      only_count?: boolean | undefined
      /** 画面/バッチ/処理。利用者ログに属する画面名、バッチ名、帳票名を部分一致検索する。 */
      page_batch_process?: string | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: Types.UserLog[]
      total: number
    }
  }

  /** 利用者ログを追加更新削除します。 */
  put: {
    query?: Types.Embed | undefined
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。追加更新削除した結果が反映されます。 */
      items?: Types.UserLogBulkTarget[] | undefined
    }

    reqBody: {
      /** 追加更新削除するオブジェクトの配列 */
      items?: Types.UserLogBulkTarget[] | undefined
    } & Types.BulkRequest
  }
}
