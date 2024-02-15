/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** 予約オーダー一覧を返します */
  get: {
    query: Types.Embed & Types.Limit & Types.With_deleted & {
      /** 予約オーダーNo */
      no?: string | undefined
      /** 予約オーダーNo表示用 */
      display_no?: string | undefined
      /** 行No */
      line_no?: number | undefined
      /** 予約区分 */
      reserve_type_cd1?: string | undefined
      /** 商品IDM */
      invent_idm?: string | undefined
      /** 商品名 */
      invent_name?: string | undefined
      /** バイヤーIDM */
      buyer_user_idm?: string | undefined
      /** バイヤー名 */
      buyer_user_name?: string | undefined
      /** オペレーターIDM */
      operator_user_idm?: string | undefined
      /** オペレーター名 */
      operator_user_name?: string | undefined
      /** 原産国IDM */
      country_of_origin_idm?: string | undefined
      /** 地方IDM */
      wine_area_idm?: string | undefined
      /** 生産者DB書出ID */
      winary_comment_vendor_idm?: string | undefined
      /** 年号 */
      vintage?: string | undefined
      /** 内容量 */
      volume?: number | undefined
      /** 予約日From */
      min_reserved_on?: string | undefined
      /** 予約日To */
      max_reserved_on?: string | undefined
      /** 発注先IDM */
      order_vendor_idm?: string | undefined
      /** 発注先名 */
      order_vendor_name?: string | undefined
      /** 支払先IDM */
      pay_vendor_idm?: string | undefined
      /** 支払先名 */
      pay_vendor_name?: string | undefined
      /** 生産者IDM */
      maker_vendor_idm?: string | undefined
      /** 生産者名 */
      maker_vendor_name?: string | undefined
      /** 戦略分類 */
      strategy_type_cd1?: string | undefined
      /** 内部備考(ヘッダ) */
      note?: string | undefined
      /** 内部備考(明細) */
      detail_note?: string | undefined
      /** 予約オーダー残無 */
      is_order_residue?: boolean | undefined
      /** 別年号含 */
      is_another?: boolean | undefined
      /** 前渡集計区分 */
      advance_sum_cd1?: string | undefined
      /** 支払年月日From */
      paid_on_from?: string | undefined
      /** 支払年月日To */
      paid_on_to?: string | undefined
      /** INV No. */
      invoice_no?: string | undefined
      /** 前渡金の予約残があるかどうか。trueなら予約残有りのものを取得。falseなら予約残無しのものを取得。nullなら全て取得。 */
      is_purchase_amount_residue?: boolean | undefined
      /** プリムールフラグ */
      is_primeur?: boolean | undefined
      /** 並び替えフラグ */
      is_sort?: boolean | undefined
      /** 検索用支払期日区分(0:すべて、1:未確定、2:確定済) */
      payment_mk_fix_type?: string | undefined
      /** 検索用管理部受領区分(0:すべて、1:未受領、2:受領済) */
      payment_ac_fix_type?: string | undefined
      /** 検索用支払状態区分(0:すべて、1:未支払、2:支払済) */
      paid_type?: string | undefined
      /** 月次締め年月 */
      closed_on?: string | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: {
        /** 予約オーダーID */
        id?: number | null | undefined
        /** 予約区分 */
        reserve_type_cd1?: string | null | undefined
        /** 予約オーダーNo */
        no?: string | null | undefined
        /** 表示用予約オーダーNo */
        display_no?: string | null | undefined
        /** 予約日 */
        reserved_on?: string | null | undefined
        /** 発注先ID */
        order_vendor_id?: number | null | undefined
        /** CCID */
        cc_vendor_id?: number | null | undefined
        /** 発注単位ID */
        vendor_unit_id?: number | null | undefined
        /** 支払先ID */
        pay_vendor_id?: number | null | undefined
        /** 集荷先ID */
        collection_vendor_id?: number | null | undefined
        /** 支払条件ID */
        payment_condition_id?: number | null | undefined
        /** バイヤーID */
        buyer_user_id?: number | null | undefined
        /** オペレーターID */
        operator_user_id?: number | null | undefined
        /** 通貨CD */
        currency_cd1?: string | null | undefined
        /** 価格体系CD */
        price_system_cd1?: string | null | undefined
        /** 予約オーダーリバイス回数 */
        revision?: number | null | undefined
        /** プリムールフラグ */
        is_primeur?: boolean | null | undefined
        /** 予約オーダーヘッダ(内部備考) */
        note?: string | null | undefined
        /** Remarks */
        remarks?: string | null | undefined
        /** 発注先IDM */
        order_vendor_idm?: string | null | undefined
        /** 発注先名(正式/和文) */
        order_vendor_name_jp?: string | null | undefined
        /** 発注先名(略称/和文) */
        order_vendor_name_jp_abbr?: string | null | undefined
        /** 支払先IDM */
        pay_vendor_idm?: string | null | undefined
        /** 支払先名(正式/和文) */
        pay_vendor_name_jp?: string | null | undefined
        /** 支払先名(略称/和文) */
        pay_vendor_name_jp_abbr?: string | null | undefined
        /** CCIDM */
        cc_vendor_idm?: string | null | undefined
        /** CC名(正式/和文) */
        cc_vendor_name_jp?: string | null | undefined
        /** CC名(略称/和文) */
        cc_vendor_name_jp_abbr?: string | null | undefined
        /** 発注単位IDM */
        vendor_unit_idm?: string | null | undefined
        /** 発注単位名(正式/和文) */
        vendor_unit_name_jp?: string | null | undefined
        /** 発注単位名(略称/和文) */
        vendor_unit_name_jp_abbr?: string | null | undefined
        /** 集荷先IDM */
        collection_vendor_idm?: string | null | undefined
        /** 集荷先名(正式/和文) */
        collection_vendor_name_jp?: string | null | undefined
        /** 集荷先名(略称/和文) */
        collection_vendor_name_jp_abbr?: string | null | undefined
        /** 支払条件名 */
        payment_condition_name?: string | null | undefined
        /** バイヤーIDM */
        buyer_user_idm?: string | null | undefined
        /** バイヤー名 */
        buyer_user_name?: string | null | undefined
        /** オペレーターIDM */
        operator_user_idm?: string | null | undefined
        /** オペレーター名 */
        operator_user_name?: string | null | undefined
        /** 品番 */
        invent_idm?: string | null | undefined
        /** 色CD */
        invent_color_cd1?: string | null | undefined
        /** 商品名(略称) */
        invent_name_abbr?: string | null | undefined
        /** 前渡集計区分 */
        invent_advance_sum_cd1?: string | null | undefined
        /** 地方名 */
        wine_area_name?: string | null | undefined
        /** 生産者IDM */
        maker_vendor_idm?: string | null | undefined
        /** 生産者名(略称/和文) */
        maker_vendor_name_jp_abbr?: string | null | undefined
        /** 支払先支払条件ID */
        pay_vendor_payment_condition_id?: number | null | undefined
        /** 支払先支払条件名 */
        pay_vendor_payment_condition_name?: string | null | undefined
        /** 支払予定ID */
        payment_schedule_id?: number | null | undefined
        /** 支払実績見出ID */
        payment_result_id?: number | null | undefined
        /** 支払期日 */
        payment_on?: string | null | undefined
        /** 期日確定区分 */
        fixed_payment_date_cd1?: string | null | undefined
        /** インボイスNo */
        invoice_no?: string | null | undefined
        /** 支払レート */
        payment_rate?: string | null | undefined
        /** 支払実行日 */
        paid_on?: string | null | undefined
        /** 原計レート */
        cost_rate?: string | null | undefined
        /** 支払金額 */
        payment_amount?: string | null | undefined
        /** 予約オーダー明細ID */
        shipping_reservation_detail_id?: number | undefined
        /** 分割元予約オーダー明細ID */
        import_reservation_detail_id?: number | null | undefined
        /** 行No */
        line_no?: number | null | undefined
        /** 商品ID */
        invent_id?: number | null | undefined
        /** 予約時商品名(欧文) */
        reserve_item_name?: string | null | undefined
        /** 生産者ID */
        maker_vendor_id?: number | null | undefined
        /** 年号 */
        vintage?: string | null | undefined
        /** 内容量 */
        volume?: number | null | undefined
        /** 登録入数 */
        quantity_per_case?: number | null | undefined
        /** 登録ケース */
        case_count?: number | null | undefined
        /** 登録バラ */
        bottle_count?: number | null | undefined
        /** バラ合計 */
        total_count?: number | null | undefined
        /** 実入数 */
        local_quantity_per_case?: number | null | undefined
        /** 実ケース */
        local_case_count?: number | null | undefined
        /** 実バラ */
        local_bottle_count?: number | null | undefined
        /** 価格単位CD */
        price_unit_cd1?: string | null | undefined
        /** 現地単価 */
        local_unit_price?: string | null | undefined
        /** 値引前単価 */
        local_regular_unit_price?: string | null | undefined
        /** 無償区分 */
        free_of_chage_type_cd1?: string | null | undefined
        /** 買入金額 */
        purchase_amount?: string | null | undefined
        /** 函荷姿CD */
        box_style_cd1?: string | null | undefined
        /** 倉庫依頼ID */
        order_warehouse_id?: number | null | undefined
        /** 生産者依頼ID */
        order_maker_id?: number | null | undefined
        /** 発注者覚書 */
        order_note?: string | null | undefined
        /** 戦略分類CD */
        strategy_type_cd1?: string | null | undefined
        /** 設定レート */
        rate?: string | null | undefined
        /** 表示順 */
        display_order?: number | null | undefined
        /** 予約オーダー明細内部備考 */
        detail_note?: string | null | undefined
        /** 打ち切りフラグ */
        is_quit?: boolean | null | undefined
        /** 船積引当金額 */
        allocation_amount?: string | null | undefined
        /** 船積容量按分金額 */
        allocation_distribute_volume_cost?: string | null | undefined
        /** 船積数量按分金額 */
        allocation_distribute_count_cost?: string | null | undefined
        /** 船積引当バラ合計数量 */
        allocation_total_count?: number | null | undefined
        /** 船積引当残登録ケース */
        residue_case_count?: number | null | undefined
        /** 船積引当残登録バラ */
        residue_bottle_count?: number | null | undefined
        /** 船積引当残実ケース */
        residue_local_case_count?: number | null | undefined
        /** 船積引当残実バラ */
        residue_local_bottle_count?: number | null | undefined
        /** 船積引当残金額 */
        residue_purchase_amount?: string | null | undefined
        /** 船積引当金額(JPY) */
        purchase_amount_jpy?: string | null | undefined
        /** 船積引当残金額(JPY) */
        residue_purchase_amount_jpy?: string | null | undefined
        /** 在庫計上金額(外貨) */
        purchase_result_purchase_amount?: string | null | undefined
        /** 前渡金額(JPY) */
        payment_amount_jpy?: string | null | undefined
        /** 前渡残金額(外貨) */
        deposit_residue_purchase_amount?: string | null | undefined
        /** 前渡残金額(JPY) */
        deposit_residue_purchase_amount_jpy?: string | null | undefined
        /** 前渡残総バラ数 */
        deposit_residue_total_count?: number | null | undefined
      }[]
      total: number
    }
  }

  /** 予約オーダーを追加更新削除します。 */
  put: {
    query?: Types.Embed | undefined
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。追加更新削除した結果が反映されます。 */
      items?: Types.ShippingReservationBulkTarget[] | undefined
    }

    reqBody: {
      /** 追加更新削除するオブジェクトの配列 */
      items?: Types.ShippingReservationBulkTarget[] | undefined
    } & Types.BulkRequest
  }
}
