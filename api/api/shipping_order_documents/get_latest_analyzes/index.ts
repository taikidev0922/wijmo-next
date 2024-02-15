/* eslint-disable */
export type Methods = {
  /** 搬入スケジュールフリータイム計算を行い一覧で返します */
  post: {
    status: 200

    /** OK */
    resBody: {
      items?: {
        /** 船積オーダー明細ID */
        shipping_order_detail_id?: number | undefined
        /** 履歴有無フラグ */
        is_history_exist?: boolean | undefined
        /** 分析表検査日 */
        analyzed_on?: string | undefined
        /** アルコール度数 */
        alcohol_percentage?: string | undefined
        /** ガス圧 */
        gas_pressure?: string | undefined
        /** 添加物１ID */
        additive1_id?: number | undefined
        /** 数値１ */
        value1?: string | undefined
        /** 添加物２ID */
        additive2_id?: number | undefined
        /** 数値２ */
        value2?: string | undefined
        /** 添加物３ID */
        additive3_id?: number | undefined
        /** 数値３ */
        value3?: string | undefined
        /** 添加物４ID */
        additive4_id?: number | undefined
        /** 数値４ */
        value4?: string | undefined
        /** 添加物５ID */
        additive5_id?: number | undefined
        /** 数値５ */
        value5?: string | undefined
        /** 添加物６ID */
        additive6_id?: number | undefined
        /** 数値６ */
        value6?: string | undefined
        /** 添加物７ID */
        additive7_id?: number | undefined
        /** 数値７ */
        value7?: string | undefined
        /** 添加物８ID */
        additive8_id?: number | undefined
        /** 数値８ */
        value8?: string | undefined
        /** 添加物９ID */
        additive9_id?: number | undefined
        /** 数値９ */
        value9?: string | undefined
        /** 添加物１０ID */
        additive10_id?: number | undefined
        /** 数値１０ */
        value10?: string | undefined
      }[] | undefined
    }

    reqBody: {
      items?: {
        /** 船積オーダー明細ID */
        shipping_order_detail_id?: number | undefined
        /** 出港日 */
        etd_on?: string | undefined
        /** 商品ID */
        invent_id?: string | undefined
        /** 年号 */
        vintage?: string | undefined
        /** 一括表示仕様ID */
        batch_display_id?: number | undefined
      }[] | undefined
    }
  }
}
