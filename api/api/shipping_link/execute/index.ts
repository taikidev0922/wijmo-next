/* eslint-disable */
export type Methods = {
  /** 出荷指示データ連携バッチを実行します。 */
  post: {
    status: 204

    reqBody: {
      /** 売上日 */
      sold_on: string
      /** 伝送No */
      batch_no: string
      /** 倉庫IDMの配列 */
      location_idm_list: string[]
      /** 出力区分(Enum::ShippingLinkType) */
      shipping_link_type: string
      /** 得意先グループCDの配列 */
      customer_group_cd1_list?: string[] | undefined
      /** 得意先IDMの配列 */
      customer_idm_list?: string[] | undefined
      /** 配送CDの配列 */
      haisou_cd1_list?: string[] | undefined
      /** 開始受注No */
      no_from?: string | null | undefined
      /** 終了受注No */
      no_to?: string | null | undefined
      /** 与信管理区分CDの配列 */
      yoshin_cd1_list?: string[] | undefined
      /** 警告を無視するかどうか */
      forced?: boolean | undefined
      /** 出荷指示ファイルを送信するかどうか */
      is_send_shipping_data?: boolean | undefined
      /** 代引案内書を送信するかどうか */
      is_send_delivery_guidance?: boolean | undefined
      /** 納品書・商品明細書を出力するかどうか */
      is_print_delivery_slip_report?: boolean | undefined
    }
  }
}
