/* eslint-disable */
import type * as Types from '../../../@types'

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
      /** 保税 */
      is_bonded?: boolean | undefined
      /** 価格検討済オフ有 */
      is_notice_off?: boolean | undefined
      /** コンテナ仕様CD */
      container_type_cd1?: string | undefined
      /** 内部備考(ヘッダ) */
      note?: string | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: {
        /** 船積オーダーID */
        id?: number | undefined
        /** 船積記号 */
        mark?: string | null | undefined
        /** 船積オーダーNo */
        no?: string | null | undefined
        /** 表示用船積オーダーNo */
        display_no?: string | null | undefined
        /** 船積オーダー作成日 */
        shipping_order_created_on?: string | null | undefined
        /** バイヤーID */
        buyer_user_id?: number | null | undefined
        /** オペレーターID */
        operator_user_id?: number | null | undefined
        /** 通関担当ID */
        customs_user_id?: number | null | undefined
        /** コンテナサイズ */
        container_size_cd1?: string | null | undefined
        /** コンテナ仕様 */
        container_type_cd1?: string | null | undefined
        /** 通関業者 */
        customs_broker_cd1?: string | null | undefined
        /** 出港地 */
        departure_port_cd1?: string | null | undefined
        /** 出港希望日 */
        request_etd_on?: string | null | undefined
        /** 出港日 */
        etd_on?: string | null | undefined
        /** 経由地 */
        stop_over_port_cd1?: string | null | undefined
        /** フォワーダーID */
        forwarder_vendor_id?: number | null | undefined
        /** 集荷期日 */
        pickup_on?: string | null | undefined
        /** 入港地 */
        arrival_port_cd1?: string | null | undefined
        /** 入港希望日 */
        request_eta_on?: string | null | undefined
        /** 集荷依頼日 */
        order_pickup_on?: string | null | undefined
        /** 書類備考 */
        document_note?: string | null | undefined
        /** コンテナ番号 */
        container_no?: string | null | undefined
        /** 船積オーダーヘッダ内部備考 */
        note?: string | null | undefined
        /** 書類完了フラグ */
        is_complete?: boolean | null | undefined
        /** BCフラグ */
        is_bc?: boolean | null | undefined
        /** OBフラグ */
        is_ob?: boolean | null | undefined
        /** 倉庫搬入日 */
        carried_on?: string | null | undefined
        /** 通関期日 */
        customs_limit_on?: string | null | undefined
        /** 入港日 */
        eta_on?: string | null | undefined
        /** 一括倉庫搬入日 */
        imported_on?: string | null | undefined
        /** BL番号 */
        bl_no?: string | null | undefined
        /** ANフラグ */
        is_an?: boolean | null | undefined
        /** BLフラグ */
        is_bl?: boolean | null | undefined
        /** バイヤーIDM */
        buyer_user_idm?: string | null | undefined
        /** バイヤー名 */
        buyer_user_name?: string | null | undefined
        /** オペレーターIDM */
        operator_user_idm?: string | null | undefined
        /** オペレーター名 */
        operator_user_name?: string | null | undefined
        /** 通関担当者IDM */
        customs_user_idm?: string | null | undefined
        /** 通関担当者名 */
        customs_user_name?: string | null | undefined
        /** フォワーダーIDM */
        forwarder_vendor_idm?: string | null | undefined
        /** フォワーダー名(和文/略称) */
        forwarder_vendor_name_jp_abbr?: string | null | undefined
        /** 船積集計(ケース) */
        total_case_count?: number | null | undefined
        /** 船積集計(バラ) */
        total_bottle_count?: number | null | undefined
        /** 最終通関許可日 */
        max_customs_release_on?: string | null | undefined
        /** 通関許可日未セット件数 */
        empty_customs_release_on_count?: number | null | undefined
        /** 最終在庫計上日 */
        max_inventoryed_record_on?: string | null | undefined
        /** 在庫未計上件数 */
        empty_inventoryed_record_on_count?: number | null | undefined
        /** 保税有 */
        is_bonded?: boolean | null | undefined
        /** 価格検討済オフ有 */
        is_notice_off?: boolean | null | undefined
      }[]
      total: number
    }
  }
}
