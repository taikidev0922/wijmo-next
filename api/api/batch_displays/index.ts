/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** 一括表示仕様一覧を返します */
  get: {
    query: Types.Embed & Types.Limit & Types.With_deleted & {
      /** 一括表示仕様IDM */
      idm?: string | undefined
      /** ラベル仕様名(和文) */
      name_jp?: string | undefined
      /** ラベル仕様(英文) */
      name_en?: string | undefined
      /** ラベル仕様(仏文) */
      name_fr?: string | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: Types.BatchDisplay[]
      total: number
    }
  }

  /** 一括表示仕様を追加更新削除します。 */
  put: {
    query?: Types.Embed | undefined
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。追加更新削除した結果が反映されます。 */
      items?: Types.BatchDisplayBulkTarget[] | undefined
    }

    reqBody: {
      /** 追加更新削除するオブジェクトの配列 */
      items?: Types.BatchDisplayBulkTarget[] | undefined
    } & Types.BulkRequest
  }
}
