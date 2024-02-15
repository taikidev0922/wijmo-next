/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** 銀行口座一覧を返します */
  get: {
    query: Types.Embed & Types.Limit & Types.With_deleted & {
      /** 銀行CD */
      bank_cd1?: string | undefined
      /** 銀行支店CD */
      bank_branch_cd1?: string | undefined
      /** 銀行口座名 */
      name?: string | undefined
      /** 口座名義人 */
      holder?: string | undefined
      /** 口座番号 */
      number?: string | undefined
      /** 科目CD */
      account_cd?: number | undefined
      /** 枝番CD */
      sub_cd?: number[] | undefined
      /** 残高管理対象外フラグ */
      is_out_of_balance?: boolean | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: Types.BankAccount[]
      total: number
    }
  }

  /** 銀行口座を追加更新削除します。 */
  put: {
    query?: Types.Embed | undefined
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。追加更新削除した結果が反映されます。 */
      items?: Types.BankAccountBulkTarget[] | undefined
    }

    reqBody: {
      /** 追加更新削除するオブジェクトの配列 */
      items?: Types.BankAccountBulkTarget[] | undefined
    } & Types.BulkRequest
  }
}
