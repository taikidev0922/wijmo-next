/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** Eメールテンプレート一覧を返します */
  get: {
    query: Types.Embed & Types.Limit & Types.With_deleted & {
      /** EメールテンプレートIDM */
      idm?: string | undefined
      /** Eメールテンプレート名 */
      name?: string | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: Types.EmailTemplate[]
      total: number
    }
  }

  /** Eメールテンプレートを追加更新削除します。 */
  put: {
    query?: Types.Embed | undefined
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。追加更新削除した結果が反映されます。 */
      items?: Types.EmailTemplateBulkTarget[] | undefined
    }

    reqBody: {
      /** 追加更新削除するオブジェクトの配列 */
      items?: Types.EmailTemplateBulkTarget[] | undefined
    } & Types.BulkRequest
  }
}
