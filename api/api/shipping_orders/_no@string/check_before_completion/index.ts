/* eslint-disable */
export type Methods = {
  /** 船積オーダー通関書類の入力が終わっているかの真偽を返します */
  get: {
    status: 200

    /** OK */
    resBody: {
      /** 書類完了可能フラグ */
      can_complete?: boolean | undefined
    }
  }
}
