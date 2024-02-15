/* eslint-disable */
export type Methods = {
  /** 伝発名人帳票データを出力します */
  post: {
    status: 200

    reqBody: {
      /** 倉庫IDM */
      location_idm?: string | null | undefined
      /** 売上日 */
      sold_on: string
      /** 受注No（From） */
      no_from?: string | null | undefined
      /** 受注No（To） */
      no_to?: string | null | undefined
      /** 伝送状態CD */
      shipping_status_cd1?: string | null | undefined
      /** 伝送No */
      batch_no?: string | null | undefined
      /** 伝送日時（From） */
      shipping_transferred_at_from?: string | null | undefined
      /** 伝送日時（To） */
      shipping_transferred_at_to?: string | null | undefined
      /** ピッキング分類CD */
      picking_cd1?: string | null | undefined
      /** 伝票種類CD */
      delivery_slip_cd1?: string | null | undefined
      /** 指定リスト（発注書添付有） */
      is_order_sheet_required?: boolean | null | undefined
      /** 伝票郵送 */
      is_denpyo_post_required?: boolean | null | undefined
      /** 配送区分CD */
      haisou_cd1?: string | null | undefined
      /** 入力得意先IDM */
      customer_idm?: string | null | undefined
      /** 得意先グループCD */
      customer_group_cd1?: string | null | undefined
      /** チームIDM */
      team_idm?: string | null | undefined
      /** 部署IDM */
      department_idm?: string | null | undefined
      /** 更新日時（From） */
      updated_at_from?: string | null | undefined
      /** 更新日時（To） */
      updated_at_to?: string | null | undefined
      /** 入力担当者IDM */
      operator_user_idm?: string | null | undefined
      /** 専伝抽出CD */
      senden_printed_cd1: string
    }
  }
}
