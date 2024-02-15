/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** 商品一覧を返します。新たなロックを取得する前に、同一テーブルの同一ロックキー1に対する同一担当者によるロックは解除されます。 */
  get: {
    query: Types.Embed & Types.Limit & Types.With_deleted & Types.Lock_key1 & Types.Lock_page_id & {
      /** 品番 */
      idm?: string | undefined
      /** 商品名(正式/和文) */
      name_jp?: string | undefined
      /** 商品名(正式/欧文) */
      name_en?: string | undefined
      /** 生産者IDM */
      maker_vendor_idm?: string | undefined
      /** 生産者名(正式/和文) */
      maker_vendor_name_jp?: string | undefined
      /** 生産者名(正式/欧文) */
      maker_vendor_name_en?: string | undefined
      /** 全文検索 */
      text?: string | undefined
      /** 年号 */
      vintage?: string | undefined
      /** 販売_終売フラグCD */
      discontinued_cd1?: string | undefined
      /** 希望小売価格がこれ以上 */
      min_mrp?: number | undefined
      /** 希望小売価格がこれ以下 */
      max_mrp?: number | undefined
      /** バラ納価がこれ以上 */
      min_bottle_unit_price?: number | undefined
      /** バラ納価がこれ以下 */
      max_bottle_unit_price?: number | undefined
      /** 商品名(別年号用)がこのIDMの商品と同じ */
      name_yearly_equals_to_idm?: string | undefined
      /** 単品バーコード */
      barcode?: string | undefined
      /** BY_ID */
      buyer_user_idm?: string | undefined
      /** BY_名 */
      buyer_user_name?: string | undefined
      /** 担当部署CD */
      post_invent_cd1?: string | undefined
      /** 登録担当者IDM */
      created_user_idm?: string | undefined
      /** 登録担当者名 */
      created_user_name?: string | undefined
      /** 登録日(From) */
      created_date_from?: string | undefined
      /** 登録日(To) */
      created_date_to?: string | undefined
      /** 容量From */
      min_volume?: number | undefined
      /** 容量To */
      max_volume?: number | undefined
      /** 商品分類 */
      item_type_cd1?: string | undefined
      /** 販売価格改定日 */
      after_change_on?: string | undefined
      /** 品種 */
      varieties?: string | undefined
      /** 取置不可のみ */
      is_not_sale_stock?: boolean | undefined
      /** 割当のみ */
      is_sale_stock?: boolean | undefined
      /** 社内公開のみ */
      is_registry?: boolean | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: (Types.Invent & Types.HasResults)[]
      total: number
    }
  }

  /** 商品を追加更新削除します。 */
  put: {
    query?: Types.Embed | undefined
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。追加更新削除した結果が反映されます。 */
      items?: Types.InventBulkTarget[] | undefined
    }

    reqBody: {
      /** 追加更新削除するオブジェクトの配列 */
      items?: Types.InventBulkTarget[] | undefined
    } & Types.BulkRequest
  }
}
