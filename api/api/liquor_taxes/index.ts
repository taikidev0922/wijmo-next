/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** 酒税一覧を返します */
  get: {
    query: Types.Embed & Types.Limit & Types.With_deleted & {
      /** 酒税IDM */
      liquor_tax_name_idm?: string | undefined
      /** 酒税名 */
      liquor_tax_name_name?: string | undefined
      /** アルコール度数From */
      alc_from?: string | undefined
      /** アルコール度数To */
      alc_to?: string | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: Types.LiquorTax[]
      total: number
    }
  }

  /** 酒税を追加更新削除します。 */
  put: {
    query?: Types.Embed | undefined
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。追加更新削除した結果が反映されます。 */
      items?: Types.LiquorTaxBulkTarget[] | undefined
    }

    reqBody: {
      /** 追加更新削除するオブジェクトの配列 */
      items?: Types.LiquorTaxBulkTarget[] | undefined
    } & Types.BulkRequest
  }
}
