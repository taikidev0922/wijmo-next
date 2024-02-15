/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** 買掛金一覧を返します */
  get: {
    query: Types.Embed & Types.Limit & Types.With_deleted & {
      /** 国内・輸入区分 */
      import_domestic_cd1?: string | undefined
      /** 買掛年月From */
      purchase_year_month_from?: string | undefined
      /** 買掛年月To */
      purchase_year_month_to?: string | undefined
      /** 仕入先IDM */
      vendor_idm?: string | undefined
      /** 仕入先名 */
      vendor_name?: string | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: Types.PayableAccount[]
      total: number
    }
  }
}
