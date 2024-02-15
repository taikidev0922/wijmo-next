/* eslint-disable */
import type * as Types from '../../../../@types'

export type Methods = {
  /** 商品画像を取得します */
  get: {
    query: {
      /** 画像種別 */
      type: Types.ImageType
    }

    status: 200
    /** OK */
    resBody: Blob
  }
}
