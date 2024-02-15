/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** 商品JAN送付リストを出力します。ロックの取得を指定した場合、ロックの取得に成功した後、直ちにそのロックは解放されます。 */
  post: {
    query?: Types.Lock_key1 & Types.Lock_page_id & {
      /** 警告を無視するかどうか */
      forced?: boolean | undefined
    } | undefined

    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。JAN送付リスト出力の結果。 */
      items?: Types.InventExportJanResult[] | undefined
    }
  }
}
