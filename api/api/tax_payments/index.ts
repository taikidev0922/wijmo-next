/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** 納税実績一覧を返します */
  get: {
    query: Types.Limit & Types.With_deleted & {
      /** 通関許可 */
      customs_released?: boolean | undefined
      /** 船積オーダーNo */
      shipping_order_no?: string | undefined
      /** 通関許可番号 */
      customs_no?: string | undefined
      /** 在庫計上 */
      is_inventoryed?: boolean | undefined
      /** 通関許可日From */
      customs_release_on_from?: string | undefined
      /** 通関許可日To */
      customs_release_on_to?: string | undefined
      /** 納税日From */
      paid_on_from?: string | undefined
      /** 納税日To */
      paid_on_to?: string | undefined
      /** 入港日From */
      eta_on_from?: string | undefined
      /** 入港日To */
      eta_on_to?: string | undefined
      /** 倉庫搬入日From */
      carried_on_from?: string | undefined
      /** 倉庫搬入日To */
      carried_on_to?: string | undefined
      /** 在庫計上日From */
      record_on_from?: string | undefined
      /** 在庫計上日To */
      record_on_to?: string | undefined
      /** 通関業者CD */
      customs_broker_cd1?: string | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: Types.ShippingOrder[]
      total: number
    }
  }

  /** 納税実績を追加します。 */
  put: {
    query?: Types.Embed | undefined
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。追加更新削除した結果が反映されます。 */
      items?: Types.TaxPaymentBulkTarget[] | undefined
    }

    reqBody: {
      /** 追加更新削除するオブジェクトの配列 */
      items?: Types.TaxPaymentBulkTarget[] | undefined
    } & Types.BulkRequest
  }
}
