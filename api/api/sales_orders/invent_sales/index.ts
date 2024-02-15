/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** 商品売上一覧を返します */
  get: {
    query: Types.Limit & {
      /** 得意先IDM */
      customer_idm?: string | undefined
      /** 得意先名(正式) */
      customer_name?: string | undefined
      /** 得意先IDM/得意先名が、国内受注の入力得意先の親の得意先に一致する場合も検索結果に含める */
      with_children?: boolean | undefined
      /** 担当者IDM */
      user_idm?: string | undefined
      /** 得意先グループCD */
      customer_group_cd1?: string | undefined
      /** 品番 */
      invent_idm?: string | undefined
      /** 商品名(伝票印字品名) */
      name_denpatu?: string | undefined
      /** 生産者IDM */
      maker_vendor_idm?: string | undefined
      /** 生産者名(正式/和文) */
      maker_vendor_name_jp?: string | undefined
      /** 戦略分類CD */
      strategy_type_cd1?: string | undefined
      /** サンペレ表示用倉庫IDM */
      location_idm: string
    }

    status: 200

    /** OK */
    resBody: {
      items: {
        /** 品番 */
        invent_idm?: string | undefined
        /** 商品名 */
        invent_name?: string | null | undefined
        /** 入数 */
        quantity_per_case?: number | undefined
        /** 生産者IDM */
        maker_vendor_idm?: string | null | undefined
        /** 生産者名 */
        maker_vendor_name?: string | null | undefined
        /** 販売_終売フラグCD */
        discontinued_cd1?: string | null | undefined
        /** 戦略分類CD */
        strategy_type_cd1?: string | null | undefined
        /** 月販数 */
        monthly_sales_count?: number | undefined
        /** 販売可能数 */
        available_count?: number | undefined

        last_year_counts?: {
          /** 1月 */
          jan?: number | undefined
          /** 2月 */
          feb?: number | undefined
          /** 3月 */
          mar?: number | undefined
          /** 4月 */
          apr?: number | undefined
          /** 5月 */
          may?: number | undefined
          /** 6月 */
          jun?: number | undefined
          /** 7月 */
          jul?: number | undefined
          /** 8月 */
          aug?: number | undefined
          /** 9月 */
          sep?: number | undefined
          /** 10月 */
          oct?: number | undefined
          /** 11月 */
          nov?: number | undefined
          /** 12月 */
          dec?: number | undefined
          /** 当月累計 */
          to_this_month?: number | undefined
          /** 合計 */
          total?: number | undefined
        } | undefined

        this_year_counts?: {
          /** 1月 */
          jan?: number | undefined
          /** 2月 */
          feb?: number | undefined
          /** 3月 */
          mar?: number | undefined
          /** 4月 */
          apr?: number | undefined
          /** 5月 */
          may?: number | undefined
          /** 6月 */
          jun?: number | undefined
          /** 7月 */
          jul?: number | undefined
          /** 8月 */
          aug?: number | undefined
          /** 9月 */
          sep?: number | undefined
          /** 10月 */
          oct?: number | undefined
          /** 11月 */
          nov?: number | undefined
          /** 12月 */
          dec?: number | undefined
          /** 当月累計 */
          to_this_month?: number | undefined
          /** 合計 */
          total?: number | undefined
        } | undefined
      }[]
      total: number
    }
  }
}
