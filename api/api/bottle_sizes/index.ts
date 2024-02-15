/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** 容器サイズ一覧を返します */
  get: {
    query: Types.Embed & Types.Limit & Types.With_deleted & {
      /** 容器IDM */
      idm?: string | undefined
      /** 容器名 */
      name?: string | undefined
      /** 幅From */
      min_width?: number | undefined
      /** 幅to */
      max_width?: number | undefined
      /** 高さFrom */
      min_height?: number | undefined
      /** 高さto */
      max_height?: number | undefined
      /** 奥行From */
      min_depth?: number | undefined
      /** 奥行to */
      max_depth?: number | undefined
      /** 容器重量From */
      min_weight?: number | undefined
      /** 容器重量to */
      max_weight?: number | undefined
      /** 単品重量From */
      min_weight_single_item?: number | undefined
      /** 単品重量to */
      max_weight_single_item?: number | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: Types.BottleSize[]
      total: number
    }
  }

  /** 容器サイズを追加更新削除します。 */
  put: {
    query?: Types.Embed | undefined
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。追加更新削除した結果が反映されます。 */
      items?: Types.BottleSizeBulkTarget[] | undefined
    }

    reqBody: {
      /** 追加更新削除するオブジェクトの配列 */
      items?: Types.BottleSizeBulkTarget[] | undefined
    } & Types.BulkRequest
  }
}
