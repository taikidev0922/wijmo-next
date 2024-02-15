/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** 仕入先一覧を返します。新たなロックを取得する前に、同一テーブルの同一ロックキー1に対する同一担当者によるロックは解除されます。 */
  get: {
    query: Types.Embed & Types.Limit & Types.With_deleted & Types.Lock_key1 & Types.Lock_page_id & {
      /** 仕入先IDM */
      idm?: string | undefined
      /** 会社名(略称/和文) */
      name_jp_abbr?: string | undefined
      /** 会社名(正式/欧文) */
      name_en?: string | undefined
      /** 原産国ID */
      country_of_origin_id?: number | undefined
      /** 原産国IDM */
      country_of_origin_idm?: string | undefined
      /** 地方ID */
      wine_area_id?: number | undefined
      /** 地方IDM */
      wine_area_idm?: string | undefined
      /** 取引有無 */
      is_account?: boolean | undefined
      /** 支払条件ID */
      payment_condition_id?: number | undefined
      /** 支払条件IDM */
      payment_condition_idm?: string | undefined
      /** TRADE TERM(集荷依頼) */
      price_system_cd1?: string | undefined
      /** 業態区分CD */
      gyotai_type_cd1?: string | undefined
      /** エージェント仕入先ID */
      agent_vendor_id?: number | undefined
      /** エージェント仕入先IDM */
      agent_vendor_idm?: string | undefined
      /** エージェント名 */
      agent_vendor_name?: string | undefined
      /** インボイス発行者変換名 */
      invoice_vendor_change_name?: string | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: (Types.Vendor & Types.HasResults)[]
      total: number
    }
  }

  /** 仕入先を追加更新削除します。 */
  put: {
    query?: Types.Embed | undefined
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。追加更新削除した結果が反映されます。 */
      items?: Types.VendorBulkTarget[] | undefined
    }

    reqBody: {
      /** 追加更新削除するオブジェクトの配列 */
      items?: Types.VendorBulkTarget[] | undefined
    } & Types.BulkRequest
  }
}
