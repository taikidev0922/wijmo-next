/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** 前払金一覧を返します */
  get: {
    query: Types.Limit & Types.With_deleted & {
      /** 締年月 */
      closed_on?: string | undefined
      /** 仕入済かどうか。trueなら仕入済のものを取得。falseなら未仕入のものを取得。nullなら全て取得。 */
      is_purchased?: boolean | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: {
        /** 船積オーダーNo */
        no?: string | undefined
        /** 表示用船積オーダーNo */
        display_no?: string | undefined
        /** 許可記号 */
        mark?: string | undefined
        /** 商品代金 */
        amount?: string | null | undefined
        /** 関税 */
        customs_amount?: string | null | undefined
        /** 酒税 */
        liquor_tax_amount?: string | null | undefined
        /** 消費税 */
        tax_amount?: string | null | undefined
      }[]
      total: number
    }
  }
}
