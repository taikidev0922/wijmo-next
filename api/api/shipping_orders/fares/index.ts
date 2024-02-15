/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** 運賃一覧を返します */
  get: {
    query: Types.Limit & Types.With_deleted & {
      /** 締年月 */
      closed_on?: string | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: {
        /** 船積オーダーNo */
        no?: string | undefined
        /** 表示用船積オーダーNo */
        display_no?: string | undefined
        /** 運賃・諸掛 */
        import_cost_amount?: string | null | undefined
        /** 最終在庫計上日 */
        record_on?: string | undefined
        /** 未計上含む */
        include_not_recorded?: boolean | undefined
      }[]
      total: number
    }
  }
}
