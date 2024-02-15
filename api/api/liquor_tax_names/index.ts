/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** 酒税名一覧を返します */
  get: {
    query: Types.Embed & Types.Limit & Types.With_deleted & {
      /** 酒税IDM */
      idm?: string | undefined
      /** 酒税グループ */
      liquor_tax_group_cd1?: string | undefined
      /** 酒税名 */
      name?: string | undefined
      /** 酒税名略称 */
      name_abbr?: string | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: Types.LiquorTaxName[]
      total: number
    }
  }

  /** 酒税名を追加更新削除します。 */
  put: {
    query?: Types.Embed | undefined
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。追加更新削除した結果が反映されます。 */
      items?: Types.LiquorTaxNameBulkTarget[] | undefined
    }

    reqBody: {
      /** 追加更新削除するオブジェクトの配列 */
      items?: Types.LiquorTaxNameBulkTarget[] | undefined
    } & Types.BulkRequest
  }
}
