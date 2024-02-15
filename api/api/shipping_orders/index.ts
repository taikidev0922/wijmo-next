/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** 船積オーダー一覧を返します */
  get: {
    query: Types.Embed & Types.Limit & Types.With_deleted & {
      /** 船積オーダーNo */
      display_no?: string | undefined
      /** バイヤーIDM */
      buyer_user_idm?: string | undefined
      /** オペレーターIDM */
      operator_user_idm?: string | undefined
      /** 通関担当者IDM */
      customs_user_idm?: string | undefined
      /** コンテナ番号 */
      container_no?: string | undefined
      /** 作成日From */
      shipping_order_created_on_from?: string | undefined
      /** 作成日To */
      shipping_order_created_on_to?: string | undefined
      /** 倉庫搬入日From */
      carried_on_from?: string | undefined
      /** 倉庫搬入日To */
      carried_on_to?: string | undefined
      /** フォワーダーIDM */
      forwarder_vendor_idm?: string | undefined
      /** B/L番号 */
      bl_no?: string | undefined
      /** 出港日From */
      etd_on_from?: string | undefined
      /** 出港日To */
      etd_on_to?: string | undefined
      /** 通関許可日From */
      customs_release_on_from?: string | undefined
      /** 通関許可日To */
      customs_release_on_to?: string | undefined
      /** コンテナサイズCD */
      container_size_cd1?: string | undefined
      /** 入港日From */
      eta_on_from?: string | undefined
      /** 入港日To */
      eta_on_to?: string | undefined
      /** 在庫計上済 */
      is_inventoryed?: boolean | undefined
      /** 在庫未計上 */
      is_not_inventory?: boolean | undefined
      /** 保税 */
      is_bonded?: boolean | undefined
      /** 価格検討済オフ有 */
      is_notice_off?: boolean | undefined
      /** コンテナ仕様CD */
      container_type_cd1?: string | undefined
      /** 許可記号状況CD */
      shipping_order_status_cd1?: string | undefined
      /** 倉庫ID */
      location_id?: number | undefined
      /** 商品ID */
      invent_id?: number | undefined
      /** 年号 */
      vintage?: string | undefined
      /** 内部備考(ヘッダ) */
      note?: string | undefined
      /** 商品IDM */
      invent_idm?: string | undefined
      /** 商品名 */
      invent_name?: string | undefined
      /** 生産者名 */
      maker_vendor_name?: string | undefined
      /** 支払先IDM */
      pay_vendor_idm?: string | undefined
      /** 支払先名 */
      pay_vendor_name?: string | undefined
      /** 検索用支払期日区分(0:すべて、1:未確定、2:確定済) */
      payment_mk_fix_type?: string | undefined
      /** 検索用管理部受領区分(0:すべて、1:未受領、2:受領済) */
      payment_ac_fix_type?: string | undefined
      /** 検索用支払状態区分(0:すべて、1:未支払、2:支払済) */
      paid_type?: string | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: (Types.ShippingOrder & {
        /** 船積集計(ケース) */
        total_case_count?: number | undefined
        /** 船積集計(バラ) */
        total_bottle_count?: number | undefined
        /** 最終通関許可日 */
        max_customs_release_on?: string | undefined
        /** 通関許可日未セット件数 */
        empty_customs_release_on_count?: number | undefined
        /** 最終在庫計上日 */
        max_inventoryed_record_on?: string | undefined
        /** 在庫未計上件数 */
        empty_inventoryed_record_on_count?: number | undefined
        /** 保税有 */
        is_bonded?: boolean | undefined
        /** 価格検討済オフ有 */
        is_notice_off?: boolean | undefined
      })[]
      total: number
    }
  }

  /** 船積オーダーを追加更新削除します。 */
  put: {
    query?: Types.Embed | undefined
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。追加更新削除した結果が反映されます。 */
      items?: Types.ShippingOrderBulkTarget[] | undefined
    }

    reqBody: {
      /** 追加更新削除するオブジェクトの配列 */
      items?: Types.ShippingOrderBulkTarget[] | undefined
    } & Types.BulkRequest
  }
}
