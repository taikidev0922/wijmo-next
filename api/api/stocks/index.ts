/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** 在庫一覧を返します */
  get: {
    query: Types.Embed & Types.Limit & Types.With_deleted & {
      /** 商品ID */
      invent_id?: number | undefined
      /** 商品IDM */
      invent_idm?: string | undefined
      /** 商品名(伝票印字品名) */
      name_denpatu?: string | undefined
      /** 年号 */
      vintage?: string | undefined
      /** 戦略分類0 */
      strategy_type_string1?: string | undefined
      /** 戦略分類1 */
      strategy_type_string2?: string | undefined
      /** 商品名(別年号用) */
      name_yearly?: string | undefined
      /** 商品名(別年号用)がこのIDMの商品と同じ */
      name_yearly_equals_to_idm?: string | undefined
      /** 生産者ID */
      maker_vendor_id?: number | undefined
      /** 生産者IDM */
      maker_vendor_idm?: string | undefined
      /** 生産者名 */
      maker_vendor_name_jp_abbr?: string | undefined
      /** 生産者DB書出ID */
      winary_comment_vendor_id?: number | undefined
      /** 生産者DB書出IDM */
      winary_comment_vendor_idm?: string | undefined
      /** 生産者DB書出名 */
      winary_comment_vendor_name_jp_abbr?: string | undefined
      /** バイヤーID */
      buyer_user_id?: number | undefined
      /** バイヤーIDM */
      buyer_user_idm?: string | undefined
      /** バイヤー名 */
      buyer_user_name?: string | undefined
      /** オペレーターID */
      operator_user_id?: number | undefined
      /** オペレーターIDM */
      operator_user_idm?: string | undefined
      /** オペレーター名 */
      operator_user_name?: string | undefined
      /** 通関担当者ID */
      customs_user_id?: number | undefined
      /** 通関担当者IDM */
      customs_user_idm?: string | undefined
      /** 通関担当者名 */
      customs_user_name?: string | undefined
      /** 社内公開 */
      is_registry?: boolean | undefined
      /** 倉庫ID */
      location_id?: number | undefined
      /** 倉庫IDM */
      location_idm?: string | undefined
      /** 倉庫名 */
      location_name?: string | undefined
      /** 発注者ID */
      order_vendor_id?: number | undefined
      /** 発注者IDM */
      order_vendor_idm?: string | undefined
      /** 発注者名 */
      order_vendor_name_jp_abbr?: string | undefined
      /** 終売除く */
      exclude_discontinued?: boolean | undefined
      /** 実在庫0(ゼロ)除く */
      exclude_no_actual_count?: boolean | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: Types.Stock[]
      total: number
    }
  }
}
