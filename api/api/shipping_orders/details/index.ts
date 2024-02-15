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
      /** コンテナ仕様CD */
      container_type_cd1?: string | undefined
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
        /** 支払期日 */
        payment_on?: string | null | undefined
        /** 期日確定区分 */
        fixed_payment_date_cd1?: string | null | undefined
        /** 支払実績ID */
        payment_result_id?: number | null | undefined
        /** 支払実行日 */
        paid_on?: string | null | undefined
        /** 品番 */
        invent_idm?: string | null | undefined
        /** 商品名(和文/略称) */
        invent_name_abbr?: string | null | undefined
        /** 生産者IDM */
        maker_vendor_idm?: string | null | undefined
        /** 生産者名(和文/略称) */
        maker_vendor_name_jp_abbr?: string | null | undefined
        /** 支払先IDM */
        pay_vendor_idm?: string | null | undefined
        /** 支払先名(和文/略称) */
        pay_vendor_name_jp_abbr?: string | null | undefined
        /** 船積オーダー明細ID */
        shipping_order_detail_id?: number | null | undefined
        /** 予約オーダー明細ID */
        shipping_reservation_detail_id?: number | null | undefined
        /** 行No */
        line_no?: number | null | undefined
        /** 許可記号状況 */
        shipping_order_status_cd1?: string | null | undefined
        /** 許可記号 */
        detail_mark?: string | null | undefined
        /** 商品ID */
        invent_id?: number | null | undefined
        /** 年号 */
        vintage?: string | null | undefined
        /** 内容量 */
        volume?: number | null | undefined
        /** 生産者ID */
        maker_vendor_id?: number | null | undefined
        /** 発注先ID */
        order_vendor_id?: number | null | undefined
        /** CCID */
        cc_vendor_id?: number | null | undefined
        /** 発注単位ID */
        order_unit_vendor_id?: number | null | undefined
        /** 支払先ID */
        pay_vendor_id?: number | null | undefined
        /** 支払条件ID */
        payment_condition_id?: number | null | undefined
        /** 集荷先ID */
        collection_vendor_id?: string | null | undefined
        /** 輸入統計品目CD */
        customs_itemname_cd1?: string | null | undefined
        /** 酒税名ID */
        liquor_tax_name_id?: number | null | undefined
        /** 価格単位CD */
        price_unit_cd1?: string | null | undefined
        /** 通貨CD */
        currency_cd1?: string | null | undefined
        /** 現地単価 */
        local_unit_price?: string | null | undefined
        /** 値引前単価 */
        local_regular_unit_price?: string | null | undefined
        /** 無償区分 */
        free_of_chage_type_cd1?: string | null | undefined
        /** 容量按分 */
        distribute_volume_cost?: string | null | undefined
        /** 容量按分フラグ */
        is_distribute_volume?: boolean | null | undefined
        /** 数量按分 */
        distribute_count_cost?: string | null | undefined
        /** 数量按分フラグ */
        is_distribute_count?: boolean | null | undefined
        /** 通関単価 */
        customs_unit_price?: string | null | undefined
        /** 買入金額 */
        purchase_amount?: string | null | undefined
        /** 価格単位CD */
        price_system_cd1?: string | null | undefined
        /** 登録入数 */
        quantity_per_case?: number | null | undefined
        /** 登録ケース */
        case_count?: number | null | undefined
        /** 登録バラ */
        bottle_count?: number | null | undefined
        /** バラ合計数 */
        total_count?: number | null | undefined
        /** 実入数 */
        local_quantity_per_case?: number | null | undefined
        /** 実ケース */
        local_case_count?: number | null | undefined
        /** 実バラ */
        local_bottle_count?: number | null | undefined
        /** 搬入ケース */
        real_case_count?: number | null | undefined
        /** 搬入バラ */
        real_bottle_count?: number | null | undefined
        /** 搬入バラ合計数 */
        real_total_count?: number | null | undefined
        /** 函数/1PT */
        box_per_pallet?: number | null | undefined
        /** パレット数 */
        pallet_count?: number | null | undefined
        /** 商品重量 */
        weight?: string | null | undefined
        /** 倉庫依頼ID */
        order_warehouse_id?: number | null | undefined
        /** 生産者依頼ID */
        order_maker_id?: number | null | undefined
        /** 発注者覚書 */
        order_note?: string | null | undefined
        /** 入荷予定備考 */
        arrival_schedule_note?: string | null | undefined
        /** 商品仕様備考 */
        invent_spec_note?: string | null | undefined
        /** 表示順 */
        display_order?: number | null | undefined
        /** 函荷姿CD */
        box_style_cd1?: string | null | undefined
        /** 一括表示仕様ID */
        batch_display_id?: number | null | undefined
        /** 函ラベルID */
        label_box_id?: number | null | undefined
        /** 食品仕様書フラグ */
        is_food_spec?: boolean | null | undefined
        /** 予備１フラグ */
        is_reserve1?: boolean | null | undefined
        /** 検品期日 */
        check_limit_on?: string | null | undefined
        /** 価格検討済フラグ */
        is_notice?: boolean | null | undefined
        /** 協賛インボイス対象フラグ */
        is_invoice?: boolean | null | undefined
        /** SPT条件区分 */
        spt_condition_cd1?: string | null | undefined
        /** 栓仕様CD */
        cork_spec_cd1?: string | null | undefined
        /** 容器ID */
        bottle_size_id?: number | null | undefined
        /** 搬入時仕様チェック */
        is_carry_check?: boolean | null | undefined
        /** 責任所在区分 */
        unmatch_responsibility_cd1?: string | null | undefined
        /** 差異理由区分 */
        unmatch_cause_cd1?: string | null | undefined
        /** 現物補填BB明細ID */
        balance_book_detail_id?: string | null | undefined
        /** 倉庫ID */
        location_id?: number | null | undefined
        /** 通関許可日 */
        customs_release_on?: string | null | undefined
        /** 新品番年号区分 */
        new_invent_vintage_cd1?: string | null | undefined
        /** 在庫計上日 */
        record_on?: string | null | undefined
      }[]
      total: number
    }
  }
}
