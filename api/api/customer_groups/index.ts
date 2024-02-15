/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** 得意先グループ一覧を返します */
  get: {
    query: Types.Embed & Types.Limit & Types.With_deleted & {
      /** 得意先ID */
      customer_id?: number | undefined
      /** 得意先IDM */
      customer_idm?: string | undefined
      /** 得意先名 */
      customer_name?: string | undefined
      /** 得意先グループCD */
      customer_group_cd1?: string | undefined
      /** 得意先グループ名 */
      customer_group_name?: string | undefined
      /** 店舗名略称 */
      str_reserve1?: string | undefined
      /** 会社ID */
      str_reserve2?: string | undefined
      /** 会社名 */
      str_reserve3?: string | undefined
      /** 現在の得意先営業担当者の担当者ID */
      user_id?: number | undefined
      /** 現在の得意先営業担当者の担当者IDM */
      user_idm?: string | undefined
      /** 現在の得意先営業担当者の担当者名 */
      user_name?: string | undefined
      /** チームID */
      team_id?: number | undefined
      /** チームIDM */
      team_idm?: string | undefined
      /** チーム名 */
      team_name?: string | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: Types.CustomerGroup[]
      total: number
    }
  }

  /** 得意先グループを追加更新削除します。 */
  put: {
    query?: Types.Embed | undefined
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。追加更新削除した結果が反映されます。 */
      items?: Types.CustomerGroupBulkTarget[] | undefined
    }

    reqBody: {
      /** 追加更新削除するオブジェクトの配列 */
      items?: Types.CustomerGroupBulkTarget[] | undefined
    } & Types.BulkRequest
  }
}
