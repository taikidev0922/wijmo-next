/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** 入金予約一覧を返します */
  get: {
    query: Types.Embed & Types.Limit & Types.With_deleted & {
      /** 入金予定日From */
      will_deposit_on_from?: string | undefined
      /** 入金予定日To */
      will_deposit_on_to?: string | undefined
      /** 請求締年月日 */
      billing_on?: string | undefined
      /** 入金予定金額From */
      deposit_amount_from?: number | undefined
      /** 入金予定金額To */
      deposit_amount_to?: number | undefined
      /** 入金方法 */
      deposit_type_cd1?: string | undefined
      /** なでしこ番号 */
      dedicated_account?: string | undefined
      /** 残高ありのみ */
      only_has_balance?: boolean | undefined
      /** 入金先IDM */
      deposit_customer_idm?: string | undefined
      /** 入金先名 */
      deposit_customer_name?: string | undefined
      /** 得意先IDM */
      customer_idm?: string | undefined
      /** 得意先名 */
      customer_name?: string | undefined
      /** 与信管理区分 */
      yoshin_cd1?: string | undefined
      /** 担当者IDM */
      user_idm?: string | undefined
      /** 担当者名 */
      user_name?: string | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: Types.DepositSchedule[]
      total: number
    }
  }

  /** 入金予約を追加更新削除します。 */
  put: {
    query?: Types.Embed | undefined
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。追加更新削除した結果が反映されます。 */
      items?: Types.DepositScheduleBulkTarget[] | undefined
    }

    reqBody: {
      /** 追加更新削除するオブジェクトの配列 */
      items?: Types.DepositScheduleBulkTarget[] | undefined
    } & Types.BulkRequest
  }
}
