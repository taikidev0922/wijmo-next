/* eslint-disable */
export type Methods = {
  /** 売掛金残高証明書出力を出力します */
  post: {
    status: 200

    reqBody: {
      /** 得意先IDM */
      ids: number[]
      /** 売掛年月From */
      sale_year_month_from?: string | undefined
      /** 売掛年月To */
      sale_year_month_to?: string | undefined
      reports: {
        /** 帳票ID */
        report_id: number
        /** 出力形式 */
        output_type_cd1: string
      }[]
      /** プリンターID */
      printer_id?: number | null | undefined
    }
  }
}
