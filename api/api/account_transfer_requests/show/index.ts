/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** 口座振替データ一覧を取得します */
  get: {
    query: Types.Limit & Types.With_deleted & {
      /** ステータス */
      is_completed?: boolean | undefined
      /** 出力日From */
      output_at_from?: string | undefined
      /** 出力日To */
      output_at_to?: string | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: Types.AccountTransferRequest[]
      total: number
    }
  }
}
