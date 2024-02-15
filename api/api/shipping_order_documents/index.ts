/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** 船積オーダー通関書類一覧を返します */
  get: {
    query: Types.Embed & Types.Limit & Types.With_deleted & {
      /** 船積オーダーNo */
      display_no: string
      /** 支払先IDM */
      pay_vendor_idm?: string | undefined
      /** 支払先名 */
      pay_vendor_name_jp_abbr?: string | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: Types.ShippingOrder[]
      total: number
    }
  }

  /** 通関書類を一括更新します。 */
  put: {
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。追加更新削除した結果が反映されます。 */
      items?: Types.ShippingOrderDocumentBulkTarget[] | undefined
    }

    reqBody: {
      /** 追加更新削除するオブジェクトの配列 */
      items?: Types.ShippingOrderDocumentBulkTarget[] | undefined
    }
  }
}
