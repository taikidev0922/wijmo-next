/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** ラベル手配管理対象の船積オーダー明細一覧を返します ※ embedを指定なしで船積オーダー明細と船積オーダー通関書類が返却される */
  get: {
    query: Types.Embed & Types.Limit & Types.With_deleted & {
      /** 入港日From */
      eta_on_from?: string | undefined
      /** 入港日to */
      eta_on_to?: string | undefined
      /** 通関許可 */
      customs_released?: string | undefined
      /** ラベル書出状況 */
      label_output?: string | undefined
      /** 通関担当者ID */
      customs_user_idm?: string | undefined
      /** ラベル外注フラグ */
      is_outsourcing?: boolean | undefined
      /** RBPラベル手配 */
      rbp_label_arrangement?: string | undefined
      /** 船積オーダーNo */
      display_no?: string | undefined
      /** 品番 */
      invent_idm?: string | undefined
      /** 商品名 */
      invent_name?: string | undefined
      /** 開発部門CD */
      development_cd1?: string | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: {
        /** 船積オーダー明細ID */
        id?: number | null | undefined
        /** 船積オーダーID */
        shipping_order_id?: number | null | undefined
        /** 表示用船積オーダーNo */
        display_no?: string | null | undefined
        /** 商品ID */
        invent_id?: number | null | undefined
        /** 品番 */
        invent_idm?: string | null | undefined
        /** 生産者ID */
        maker_vendor_id?: number | null | undefined
        /** 生産者名(和文/略称) */
        maker_vendor_name_jp_abbr?: string | null | undefined
        /** 商品名(和文/略称) */
        invent_name_abbr?: string | null | undefined
        /** 船積の年号 */
        shipping_vintage?: string | null | undefined
        /** 商品の年号 */
        invent_vintage?: string | null | undefined
        /** 内容量 */
        volume?: number | null | undefined
        /** 一括表示仕様名(和文) */
        batch_display_name_jp?: string | null | undefined
        /** シールレイアウト名 */
        seal_layout_name?: string | null | undefined
        /** 品目区分 */
        invent_item_group_cd1?: string | null | undefined
        /** 酒税名 */
        liquor_tax_name_name?: string | null | undefined
        /** 船積アルコール */
        shipping_alc?: string | null | undefined
        /** 商品アルコール */
        invent_alc?: string | null | undefined
        /** 栓仕様CD */
        cork_spec_cd1?: string | null | undefined
        /** ビオ農法CD */
        invent_bio_cd1?: string | null | undefined
        /** ビオ認定機関CD */
        invent_bio_accreditat_cd1?: string | null | undefined
        /** RBP有機区分 */
        rbp_organic_cd1?: string | null | undefined
        /** シールID */
        seal_id?: number | null | undefined
      }[]
      total: number
    }
  }
}
