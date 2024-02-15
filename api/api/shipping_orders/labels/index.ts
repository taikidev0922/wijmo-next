/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** ラベル手配管理対象の船積オーダー一覧を返します ※ embedを指定なしで船積オーダー明細と船積オーダー通関書類が返却される */
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
        /** 船積オーダーID */
        shipping_order_id?: number | undefined
        /** ALC入力済 */
        alc_flag?: boolean | undefined
        /** JBLフラグ */
        jbl_flag?: boolean | undefined
        /** RBPフラグ */
        rbp_flag?: boolean | undefined
        /** 函ラベル */
        material_flag?: boolean | undefined
        shipping_order?: Types.ShippingOrder | undefined
      }[]
      total: number
    }
  }
}
