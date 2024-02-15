/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** 特別単価一覧を返します */
  get: {
    query: Types.Embed & Types.Limit & Types.With_deleted & {
      /** 特別単価IDM */
      idm?: string | undefined
      /** 価格グループIDM */
      price_group_idm?: string | undefined
      /** 価格グループ名 */
      price_group_name?: string | undefined
      /** 得意先IDM */
      customer_idm?: string | undefined
      /** 得意先名 */
      customer_name?: string | undefined
      /** ピッキング分類CD */
      picking_cd1?: string | undefined
      /** 戦略分類CD */
      strategy_type_cd1?: string | undefined
      /** 品番 */
      invent_idm?: string | undefined
      /** 商品名 */
      invent_name?: string | undefined
      /** 納価改定日From */
      sales_price_change_from?: string | undefined
      /** 納価改定日To */
      sales_price_change_to?: string | undefined
      /** 営業担当者IDM */
      sales_user_idm?: string | undefined
      /** 営業担当者名 */
      sales_user_name?: string | undefined
      /** 最新のみ */
      only_latest?: boolean | undefined
      /** 通貨CD */
      currency_cd1?: string | undefined
      /** BT数量条件 */
      bt_requirement_volume?: number | undefined
      /** CS数量条件 */
      cs_requirement_volume?: number | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: Types.SpecialPrice[]
      total: number
    }
  }

  /** 特別単価を追加更新削除します。 */
  put: {
    query?: Types.Embed | undefined
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。追加更新削除した結果が反映されます。 */
      items?: Types.SpecialPriceBulkTarget[] | undefined
    }

    reqBody: {
      /** 追加更新削除するオブジェクトの配列 */
      items?: Types.SpecialPriceBulkTarget[] | undefined
    } & Types.BulkRequest
  }
}
