/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** 船積受注を取得します */
  get: {
    query?: Types.Embed & Types.With_deleted | undefined
    status: 200

    /** OK */
    resBody: {
      items: {
        /** インボイスNo */
        invoice_no?: string | undefined
        /** 確定フラグ */
        is_confirmed?: boolean | undefined
        /** ピッキング分類CD */
        picking_cd1?: string | null | undefined
        /** 品番 */
        invent_idm?: string | null | undefined
        /** JAN */
        barcode?: string | null | undefined
        /** 商品名(和正) */
        invent_name_jp?: string | null | undefined
        /** 商品名(輸英) */
        invent_name_en?: string | null | undefined
        /** 商品名(中) */
        invent_name_zh?: string | null | undefined
        /** 色名 */
        color?: string | null | undefined
        /** 年号 */
        vintage?: string | null | undefined
        /** 原産国IDM */
        country_of_origin_idm?: string | null | undefined
        /** 地方IDM */
        wine_area_idm?: string | null | undefined
        /** 内容量 */
        volume?: number | null | undefined
        /** 単位 */
        volume_unit?: string | null | undefined
        /** 入数(ケース) */
        quantity_per_case?: number | null | undefined
        /** 実入数(ケース) */
        local_quantity_per_case?: number | null | undefined
        /** 希望数(ケース) */
        desire_bottle_count?: number | null | undefined
        /** 確定数(バラ) */
        bottle_count?: number | null | undefined
        /** 確定数(ケース) */
        case_count?: number | null | undefined
        /** 確定数(総バラ) */
        total_count?: number | null | undefined
        /** 仕入単価 */
        purchase_unit_price?: string | null | undefined
        /** 輸出販売単価 */
        bottle_unit_price?: string | null | undefined
        /** 希望小売 */
        mrp?: string | null | undefined
        /** 明細金額 */
        itemized_amount?: string | null | undefined
        /** 倉庫名 */
        location_name?: string | null | undefined
        /** ケース番号 */
        case_no?: string | null | undefined
        /** パレットNo */
        pallet_no?: string | null | undefined
        /** 瓶詰日 */
        bottled_on?: string | null | undefined
        /** アルコール度数 */
        alcohol_content?: string | null | undefined
        /** 原産国インボイスNo */
        country_of_origin_invoice_no?: string | null | undefined
        /** 原産地証明書 */
        is_placeoforiginname_certificate?: boolean | null | undefined
        /** 船積オーダーID */
        shipping_order_id?: number | null | undefined
        /** 船積オーダー明細ID */
        shipping_order_detail_id?: number | null | undefined
        /** 入港予定日 */
        eta_on?: string | null | undefined
        /** 変更前入港予定日 */
        before_eta_on?: string | null | undefined
        /** 分割期限 */
        split_deadline_on?: string | null | undefined
        /** バイヤー名 */
        buyer_name?: string | null | undefined
        /** オペレーター名 */
        operator_name?: string | null | undefined
        /** 支払条件名 */
        payment_condition_name?: string | null | undefined
        /** 商品代金支払期日 */
        payment_on?: string | null | undefined
        /** 通関許可日 */
        customs_release_on?: string | null | undefined
        /** 在庫計上の有無 */
        is_recorded?: boolean | null | undefined
        /** 生産者IDM */
        maker_vendor_idm?: string | null | undefined
        /** 生産者名 */
        maker_vendor_name_jp_abbr?: string | null | undefined
        /** 生産者名(英) */
        vendor_name_en?: string | null | undefined
        /** 生産者名(中) */
        vendor_name_zh?: string | null | undefined
        /** HSCode */
        hscode?: string | null | undefined
        /** HSCode */
        ciqcode?: string | null | undefined
        /** 在中登録番号 */
        registration_number?: string | null | undefined
        /** 品種 */
        varieties?: string | null | undefined
        /** 原材料 */
        raw_materials?: string | null | undefined
        /** 原材料名(中) */
        raw_materials_zh?: string | null | undefined
        /** 成分割合(日) */
        composition_ratio_ja?: string | null | undefined
        /** 成分割合(中) */
        composition_ratio_zh?: string | null | undefined
        /** 原料産地名(中) */
        place_of_origin_name_zh?: string | null | undefined
        /** 産地(中) */
        name_zh?: string | null | undefined
        /** ラベルサイズ(表) */
        label_size_front?: string | null | undefined
        /** ラベルサイズ(裏) */
        label_size_back?: string | null | undefined
        /** 商品説明 */
        product_description?: string | null | undefined
        /** 戦略分類名 */
        strategy_type_name?: string | null | undefined
        /** 品目区分名 */
        item_group_name?: string | null | undefined
        /** 賞味期限 */
        expiration_on?: string | null | undefined
        /** 仕入先ID */
        supplier_id?: number | null | undefined
        /** 仕入先名 */
        supplier_name?: string | null | undefined
        /** ケースITF */
        case_itf_code?: string | null | undefined
        /** 直送ロット */
        direct_delivery?: string | null | undefined
        /** 外函(奥行) */
        outbox_depth?: number | null | undefined
        /** 外函(幅) */
        outbox_width?: number | null | undefined
        /** 外函(高さ) */
        outbox_height?: number | null | undefined
        /** グロスウェイト */
        gross_weight?: string | null | undefined
        /** 社内明細備考 */
        internal_note?: string | null | undefined
        /** 販売元名 */
        distributor_name?: string | null | undefined
        /** 販売元担当者名 */
        distributor_pic_name?: string | null | undefined
        /** 販売元担当者メールアドレス */
        distributor_pic_mail?: string | null | undefined
        /** 販売元担当者TEL */
        distributor_pic_tel?: string | null | undefined
      }[]
      total: number
    }
  }
}
