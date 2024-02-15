/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** 得意先一覧を返します。新たなロックを取得する前に、同一テーブルの同一ロックキー1に対する同一担当者によるロックは解除されます。 */
  get: {
    query: Types.Embed & Types.Limit & Types.With_deleted & Types.Lock_key1 & Types.Lock_page_id & {
      /** 得意先IDM */
      idm?: string | undefined
      /** 得意先名 */
      parent_name?: string | undefined
      /** 代配店名 */
      child_name?: string | undefined
      /** 得意先名(カナ) */
      parent_name_kana?: string | undefined
      /** 代配店名(カナ) */
      child_name_kana?: string | undefined
      /** 全文検索 */
      text?: string | undefined
      /** 得意先グループCD */
      customer_group_cd1?: string | undefined
      /** 業態CD */
      business_category_cd1?: string | undefined
      /** 地方ID */
      wine_area_id?: number | undefined
      /** 地方IDM */
      wine_area_idm?: string | undefined
      /** 住所1 */
      address1?: string | undefined
      /** 住所2 */
      address2?: string | undefined
      /** 住所3 */
      address3?: string | undefined
      /** TEL */
      tel1?: string | undefined
      /** FAX */
      fax1?: string | undefined
      /** 専用口座番号 */
      dedicated_account?: string | undefined
      /** 入金名義人 */
      bank_account_holder?: string | undefined
      /** 入金先IDM */
      payment_customer_idm?: string | undefined
      /** 入金先名 */
      payment_customer_name?: string | undefined
      /** マスタ管理CD */
      customer_type_cd1?: string | undefined
      /** latest_saleで指定した得意先（親）に紐づく得意先営業担当者の担当者ID */
      user_id?: number | undefined
      /** latest_saleで指定した得意先（親）に紐づく得意先営業担当者の担当者IDM */
      user_idm?: string | undefined
      /** latest_saleで指定した得意先（親）に紐づく得意先営業担当者の担当者名 */
      user_name?: string | undefined
      /** latest_saleで指定した得意先（親）に紐づく得意先営業担当者のアシスタント担当者ID */
      assistant_user_id?: number | undefined
      /** latest_saleで指定した得意先（親）に紐づく得意先営業担当者のアシスタント担当者IDM */
      assistant_user_idm?: string | undefined
      /** latest_saleで指定した得意先（親）に紐づく得意先営業担当者のアシスタント担当者名 */
      assistant_user_name?: string | undefined
      /** 与信管理区分 */
      yoshin_cd1?: string | undefined
      /** 部署CD */
      post_cd1?: string | undefined
      /** チームID */
      team_id?: number | undefined
      /** チームIDM */
      team_idm?: string | undefined
      /** チーム名 */
      team_name?: string | undefined
      /** 得意先（親）に紐づく得意先営業担当者の検索。取得対象をtrueなら最新のみ、falseなら現在のみ、未指定なら全てとする。 */
      latest_sale?: boolean | undefined
      /** 得意先与信管理について、trueなら最新のみ取得。false, 未指定なら全て取得。 */
      only_latest?: boolean | undefined
      /** 本登録フラグ */
      is_fixed?: boolean | undefined
      /** 次回調整金額 */
      next_adjustment_amount?: string | undefined
      /** 得意先IDMが、得意先の子の得意先に一致する場合も検索結果に含める */
      with_children?: boolean | undefined
      /** マスタ管理の対象が得意先または代配店のみであるかどうか。trueなら得意先、代配店のみを取得。falseなら全て取得。 */
      only_parent_or_child?: boolean | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: (Types.Customer & Types.HasResults)[]
      total: number
    }
  }

  /** 得意先を追加更新削除します。 */
  put: {
    query?: Types.Embed | undefined
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。追加更新削除した結果が反映されます。 */
      items?: Types.CustomerBulkTarget[] | undefined
    }

    reqBody: {
      /** 追加更新削除するオブジェクトの配列 */
      items?: Types.CustomerBulkTarget[] | undefined
    } & Types.BulkRequest
  }
}
