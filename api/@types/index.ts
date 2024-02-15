/* eslint-disable */
export type Embed = {
  /** 埋め込み指定 */
  embed?: string[] | undefined
}

export type Limit = {
  /** 最大件数 */
  limit: number
}

export type With_deleted = {
  /** 削除済みを含めるかどうか */
  with_deleted?: boolean | undefined
}

export type Lock_key1 = {
  /** ロックの取得に用いるロックキー1。指定されないときは、ロックは取得されません。なお、経緯によりlocksテーブルの該当するカラム上はkey2です。 */
  lock_key1?: string | undefined
}

export type Lock_page_id = {
  /** ロック画面ID。lock_key1を指定したときは必須です。 */
  lock_page_id?: number | undefined
}

/** ログインリクエスト */
export type LoginRequest = {
  /** メールアドレス */
  email: string
  /** パスワード */
  password: string
}

/** ロック管理 */
export type Lock = {
  /** テーブル名 */
  table_name: string
  /** レコードID */
  id: number
  /** キー1 */
  key1?: string | undefined
  /** キー2 */
  key2?: string | null | undefined
  /** キー3 */
  key3?: string | null | undefined
  /** キー4 */
  key4?: string | null | undefined
  /** キー5 */
  key5?: string | null | undefined
  /** 画面ID */
  page_id: number

  page?: Page | undefined

  /** 登録日時 */
  created_at: string | null
  /** 登録者 */
  created_by: number

  user?: User | undefined
}

/** ロック解除対象 */
export type UnlockTarget = Lock & BulkTarget

/** 勘定科目 */
export type AccountTitle = {
  /** ID */
  id: number
  /** 会社コード */
  company_cd: number
  /** 科目コード */
  account_cd: number
  /** 科目内部コード */
  internal_account_cd?: string | null | undefined
  /** 科目50音 */
  syllabary?: string | null | undefined
  /** 科目属性 */
  attribute?: number | null | undefined
  /** 処理グループ */
  process_group?: number | null | undefined
  /** 対価入力フラグ */
  consideration?: number | null | undefined
  /** 課税区分 */
  tax_type?: number | null | undefined
  /** 業種区分 */
  industry_type?: number | null | undefined
  /** 仕入区分 */
  purchase_type?: number | null | undefined
  /** 税率 */
  tax_rate?: number | null | undefined
  /** 科目名称(略称) */
  name_abbr?: string | null | undefined
  /** 科目名称(正式) */
  name?: string | null | undefined
} & BaseModel

/** 補助科目 */
export type SubAccountTitle = {
  /** ID */
  id: number
  /** 会社コード */
  company_cd: number
  /** 科目コード */
  account_cd: number
  /** 科目内部コード */
  internal_account_cd?: string | null | undefined
  /** 枝番コード */
  sub_cd: number
  /** 枝番50音 */
  sub_syllabary?: string | null | undefined
  /** 科目属性 */
  attribute?: number | null | undefined
  /** 科目名称(略称) */
  name_abbr?: string | null | undefined
  /** 科目名称(正式) */
  name?: string | null | undefined
  /** 枝番名称 */
  sub_name?: string | null | undefined
} & BaseModel

/** 添加物 */
export type Additive = {
  /** ID */
  id: number
  /** 物質名 */
  name?: string | null | undefined
  /** 添加物用途区分 */
  tenka_siyo_cd1?: string | null | undefined
  /** 単位 */
  volume_unit_cd1?: string | null | undefined
  /** 別名 */
  name_alias?: string | null | undefined
  /** 通関書類チェック列判定区分 */
  cs_check_col_cd1?: string | null | undefined
  /** 通関書類チェック引用フラグ */
  is_check: boolean
  /** 用途優先順 */
  usage_priority?: number | null | undefined
  /** 物質一括表示名 */
  material_name?: string | null | undefined
  /** 物質名_英文 */
  material_name_en?: string | null | undefined
  /** 物質名_仏文 */
  material_name_fr?: string | null | undefined
  /** 物質優先順 */
  material_priority?: number | null | undefined
  /** 特恵原料コード */
  preferential_code?: string | null | undefined
  /** 特恵優先順 */
  preferential_priority?: number | null | undefined
  /** 食品仕様書 */
  food_spec?: string | null | undefined
  /** 食品仕様書必要フラグ */
  is_food_spec: boolean
  /** 一括表示仕様マスタ表示フラグ */
  is_batch_display: boolean
} & BaseModel

/** 添加物一括操作対象 */
export type AdditiveBulkTarget = Additive & BulkTarget

/** 地区 */
export type Area = {
  /** ID */
  id: number
  /** 地区IDM */
  idm: string
  /** 地区名(和文) */
  name: string
  /** 地区名(欧文) */
  name_en?: string | null | undefined
  /** 地区並び順 */
  display_order: number
} & BaseModel

/** 地区一括操作対象 */
export type AreaBulkTarget = Area & BulkTarget

/** 銀行口座 */
export type BankAccount = {
  /** ID */
  id: number
  /** 銀行口座IDM */
  idm: string
  /** 銀行CD */
  bank_cd1: string
  /** 銀行支店CD */
  bank_branch_cd1: string
  /** 銀行口座名 */
  name?: string | null | undefined
  /** 口座名義人 */
  holder?: string | null | undefined
  /** 口座番号 */
  number: string
  /** 通貨CD */
  currency_cd1: string
  /** 勘定科目ID */
  account_title_id?: number | null | undefined

  account_title?: AccountTitle | undefined

  /** 補助科目ID */
  sub_account_title_id?: number | null | undefined

  sub_account_title?: SubAccountTitle | undefined

  /** 円貨出金元勘定科目ID */
  src_account_title_id?: number | null | undefined

  src_account_title?: AccountTitle | undefined

  /** 円貨出金元補助科目ID */
  src_sub_account_title_id?: number | null | undefined

  src_sub_account_title?: SubAccountTitle | undefined

  /** 残高管理対象外フラグ */
  is_out_of_balance: boolean
} & BaseModel

/** 銀行口座一括操作対象 */
export type BankAccountBulkTarget = BankAccount & BulkTarget

/** 倉庫拠点 */
export type BaseLocation = {
  /** ID */
  id: number
  /** 倉庫拠点名 */
  name?: string | null | undefined
  /** 出庫元出荷指示必要フラグ */
  is_shipping_link: boolean
} & BaseModel

/** 倉庫拠点一括操作対象 */
export type BaseLocationBulkTarget = BaseLocation & BulkTarget

/** バッチ */
export type Batch = {
  /** ID */
  id: number
  /** バッチIDM */
  idm: string
  /** バッチ区分 */
  batch_type_cd1: string
  /** 業務区分 */
  batch_service_cd1: string
  /** バッチ名 */
  name: string
  /** 投入キュー名 */
  queue?: string | null | undefined
  /** 備考 */
  note?: string | null | undefined
} & BaseModel

/** バッチ実行権限 */
export type BatchAuthority = {
  /** ID */
  id: number
  /** バッチパラメータID */
  batch_parameter_id: number

  batch_parameter?: BatchParameter | undefined

  /** 担当者ID */
  user_id?: number | undefined

  user?: User | undefined

  /** 許可 */
  can_execute: boolean
} & BaseModel

/** バッチ実行権限一括操作対象 */
export type BatchAuthorityBulkTarget = BatchAuthority & BulkTarget

/** バッチカレンダー */
export type BatchCalendar = {
  /** ID */
  id: number
  /** バッチ実行日 */
  exec_on: string
  /** バッチカレンダー区分 */
  batch_calendar_cd1: string
  /** 祝日 */
  is_holiday: boolean
  /** 稼働 */
  enabled: boolean
  /** 備考 */
  note?: string | null | undefined
} & BaseModel

/** バッチカレンダー一括操作対象 */
export type BatchCalendarBulkTarget = BatchCalendar & BulkTarget

/** バッチパラメータ */
export type BatchParameter = {
  /** ID */
  id: number
  /** バッチパラメータIDM */
  idm: string
  /** バッチパラメータ名 */
  name: string
  /** バッチID */
  batch_id: number

  batch?: Batch | undefined

  /** パラメータ */
  parameter?: string | null | undefined
  /** 一時定義 */
  is_temp?: boolean | null | undefined
  /** 備考 */
  note?: string | null | undefined

  latest_batch_history?: BatchHistory | undefined
} & BaseModel

/** バッチパラメータ一括操作対象 */
export type BatchParameterBulkTarget = BatchParameter & BulkTarget

/** バッチスケジュール */
export type BatchSchedule = {
  /** ID */
  id: number
  /** バッチスケジュールIDM */
  idm: string
  /** バッチパラメータID */
  batch_parameter_id: number

  batch_parameter?: BatchParameter | undefined

  /** バッチスケジュール名 */
  name: string
  /** スケジュール区分 */
  batch_schedule_type_cd1: string
  /** メッセージグループID */
  message_group_id?: number | null | undefined

  message_group?: MessageGroup | undefined

  /** メールアドレス */
  email?: string | null | undefined
  /** 日曜日 */
  is_sunday: boolean
  /** 月曜日 */
  is_monday: boolean
  /** 火曜日 */
  is_tuesday: boolean
  /** 水曜日 */
  is_wednesday: boolean
  /** 木曜日 */
  is_thursday: boolean
  /** 金曜日 */
  is_friday: boolean
  /** 土曜日 */
  is_saturday: boolean
  /** バッチカレンダー区分 */
  batch_calendar_cd1?: string | null | undefined
  /** 開始時刻 */
  start_at?: string | null | undefined
  /** サイクル実行フラグ */
  is_repeat: boolean
  /** 実行間隔 */
  interval?: number | null | undefined
  /** 終了時刻 */
  end_at?: string | null | undefined
  /** 遅延監視フラグ */
  is_monitoring: boolean
  /** 遅延検知時間 */
  detection_minutes?: number | null | undefined
  /** スケジュール一時無効フラグ */
  is_disabled: boolean
  /** 適用開始日 */
  start_on: string
  /** 適用終了日 */
  end_on: string
  /** 前回実行日時 */
  executed_at?: string | null | undefined
  /** 備考 */
  note?: string | null | undefined
} & BaseModel

/** バッチスケジュール一括操作対象 */
export type BatchScheduleBulkTarget = BatchSchedule & BulkTarget

/** 一括表示仕様 */
export type BatchDisplay = {
  /** ID */
  id: number
  /** 一括表示仕様IDM */
  idm: string | null
  /** RBP/JBL区分 */
  rbp_jbl_type_cd1?: string | null | undefined
  /** RBP種別区分 */
  rbp_type_cd2?: string | null | undefined
  /** コンテナ仕様CD */
  rbp_container_type_cd1?: string | null | undefined
  /** アルコール要否区分 */
  rbp_alc_type_cd1?: string | null | undefined
  /** ARマーク区分 */
  rbp_ar_type_cd1?: string | null | undefined
  /** ワイン容量区分 */
  rbp_capacity_cd1?: string | null | undefined
  /** JANコード区分 */
  rbp_jan_cd1?: string | null | undefined
  /** 有機認証区分 */
  rbp_organic_cd1?: string | null | undefined
  /** 商品分類区分 */
  rbp_item_category_cd1?: string | null | undefined
  /** 酒税品目区分 */
  rbp_item_type_cd1?: string | null | undefined
  /** SO2区分 */
  rbp_so2_cd1?: string | null | undefined
  /** 炭酸ガス(CO2)区分 */
  rbp_co2_cd1?: string | null | undefined
  /** 添加物1ID */
  additive1_id?: number | null | undefined

  additive1?: Additive | undefined

  /** 添加物2ID */
  additive2_id?: number | null | undefined

  additive2?: Additive | undefined

  /** 添加物3ID */
  additive3_id?: number | null | undefined

  additive3?: Additive | undefined

  /** 添加物4ID */
  additive4_id?: number | null | undefined

  additive4?: Additive | undefined

  /** 添加物5ID */
  additive5_id?: number | null | undefined

  additive5?: Additive | undefined

  /** 添加物6ID */
  additive6_id?: number | null | undefined

  additive6?: Additive | undefined

  /** 添加物7ID */
  additive7_id?: number | null | undefined

  additive7?: Additive | undefined

  /** 添加物8ID */
  additive8_id?: number | null | undefined

  additive8?: Additive | undefined

  /** 添加物9ID */
  additive9_id?: number | null | undefined

  additive9?: Additive | undefined

  /** 添加物10ID */
  additive10_id?: number | null | undefined

  additive10?: Additive | undefined

  /** リサイクル法区分 */
  rbp_recycle_cd1?: string | null | undefined
  /** DBL有無区分 */
  rbp_dbl_cd1?: string | null | undefined
  /** ラベル仕様名(和文) */
  name_jp?: string | null | undefined
  /** ラベル仕様(英文) */
  name_en?: string | null | undefined
  /** ラベル仕様(仏文) */
  name_fr?: string | null | undefined
  /** シールID */
  seal_id?: number | null | undefined

  seal?: Seal | undefined

  /** 部材手配要フラグ */
  is_need_parts: boolean
  /** 備考 */
  note?: string | undefined
} & BaseModel

/** 一括表示仕様一括操作対象 */
export type BatchDisplayBulkTarget = BatchDisplay & BulkTarget

/** 容器サイズ */
export type BottleSize = {
  /** ID */
  id: number
  /** 容器IDM */
  idm: string
  /** 容器名 */
  name: string
  /** 容器幅 */
  width: number
  /** 容器高さ */
  height: number
  /** 容器奥行 */
  depth: number
  /** 容器重量 */
  weight: number
  /** 単品重量 */
  weight_single_item: number
} & BaseModel

/** 容器サイズ一括操作対象 */
export type BottleSizeBulkTarget = BottleSize & BulkTarget

/** カレンダー */
export type Calendar = {
  /** ID */
  id: number
  /** 日付 */
  on: string
  /** 配送区分 */
  haisou_cd1?: string | null | undefined
  /** 払出不可 */
  is_closed_for_pickup: boolean
  /** 入荷予定日 */
  will_arrive_on: string
  /** 売上日 */
  sales_on: string
  /** 着日1(翌日着) */
  arrival1_on: string
  /** 着日2(中1日着) */
  arrival2_on: string
  /** 着日3(中2日着) */
  arrival3_on: string
  /** 着日4(中3日着) */
  arrival4_on: string
} & BaseModel

/** カレンダー一括操作対象 */
export type CalendarBulkTarget = Calendar & BulkTarget

/** 荷受先 */
export type Consignee = {
  /** ID */
  id: number
  /** 得意先ID */
  customer_id: number

  customer?: Customer | undefined

  /** ドライ・リーファ */
  dry_refer?: string | null | undefined
  /** ドライ・リーファ(1ケース20kg以下) */
  dry_refer2?: string | null | undefined
  /** クール */
  cool?: string | null | undefined
  /** クール(1ケース20kg以下) */
  cool2?: string | null | undefined
  /** 引取 */
  hikitori?: string | null | undefined
  /** 宅配ドライ */
  takuhai_dry?: string | null | undefined
  /** 宅配クール */
  takuhai_cool?: string | null | undefined
  /** 代引ドライ */
  daibiki_dry?: string | null | undefined
  /** 代引ドライ路線コード */
  daibiki_dry_code?: string | null | undefined
  /** 代引クール */
  daibiki_cool?: string | null | undefined
  /** 代引クール路線コード */
  daibiki_cool_code?: string | null | undefined
  /** 予備1 */
  reserve1?: string | null | undefined
  /** 予備2 */
  reserve2?: string | null | undefined
} & BaseModel

/** 荷受先一括操作対象 */
export type ConsigneeBulkTarget = Consignee & BulkTarget

/** コントロール */
export type Control = {
  /** ID */
  id: number
  /** コントロールIDM */
  idm: string
  /** コントロール名称 */
  name: string
  control_authorities?: ControlAuthority[] | undefined
  control_details?: ControlDetail[] | undefined
} & BaseModel

/** コントロール権限 */
export type ControlAuthority = {
  /** ID */
  id: number
  /** コントロールID */
  control_id?: number | undefined

  control?: Control | undefined

  /** チームID */
  team_id?: number | null | undefined

  team?: Team | undefined

  /** 担当者ID */
  user_id?: number | null | undefined

  user?: User | undefined
} & BaseModel

/** コントロール明細 */
export type ControlDetail = {
  /** ID */
  id: number
  /** コントロールID */
  control_id?: number | undefined

  control?: Control | undefined

  /** コード1 */
  cd1: string
  /** コード2 */
  cd2?: string | null | undefined
  /** コード3 */
  cd3?: string | null | undefined
  /** 並び順 */
  display_order?: number | null | undefined
  /** 数値1 */
  decimal1?: string | null | undefined
  /** 数値2 */
  decimal2?: string | null | undefined
  /** 数値3 */
  decimal3?: string | null | undefined
  /** 数値4 */
  decimal4?: string | null | undefined
  /** 数値5 */
  decimal5?: string | null | undefined
  /** 数値6 */
  decimal6?: string | null | undefined
  /** 数値7 */
  decimal7?: string | null | undefined
  /** 数値8 */
  decimal8?: string | null | undefined
  /** 数値9 */
  decimal9?: string | null | undefined
  /** 数値10 */
  decimal10?: string | null | undefined
  /** 文字1 */
  string1?: string | null | undefined
  /** 文字2 */
  string2?: string | null | undefined
  /** 文字3 */
  string3?: string | null | undefined
  /** 文字4 */
  string4?: string | null | undefined
  /** 文字5 */
  string5?: string | null | undefined
  /** 文字6 */
  string6?: string | null | undefined
  /** 文字7 */
  string7?: string | null | undefined
  /** 文字8 */
  string8?: string | null | undefined
  /** 文字9 */
  string9?: string | null | undefined
  /** 文字10 */
  string10?: string | null | undefined
  /** 文字11 */
  string11?: string | null | undefined
  /** 文字12 */
  string12?: string | null | undefined
  /** 文字13 */
  string13?: string | null | undefined
  /** 文字14 */
  string14?: string | null | undefined
  /** 文字15 */
  string15?: string | null | undefined
  /** 備考1 */
  note1?: string | null | undefined
  /** 備考2 */
  note2?: string | null | undefined
} & BaseModel

/** コントロール一括操作対象 */
export type ControlBulkTarget = Control & {
  control_authorities: (ControlAuthority & BulkTarget)[]
  control_details: (ControlDetail & BulkTarget)[]
} & BulkTarget

/** 費用科目 */
export type CostSubject = {
  /** ID */
  id: number
  /** 費用科目IDM */
  idm: string
  /** 費用科目名 */
  name?: string | null | undefined
  /** 課税・非課税区分 */
  cost_taxation_type_cd1?: string | null | undefined
  /** 勘定科目ID */
  account_title_id?: number | null | undefined

  account_title?: AccountTitle | undefined

  /** 補助科目ID */
  sub_account_title_id?: number | null | undefined

  sub_account_title?: SubAccountTitle | undefined

  /** 支払連携FLG */
  is_payment: boolean
  /** 原価用科目分類 */
  cost_account_type_cd1?: string | null | undefined
} & BaseModel

/** 費用科目一括操作対象 */
export type CostSubjectBulkTarget = CostSubject & BulkTarget

/** 原産国 */
export type CountryOfOrigin = {
  /** ID */
  id: number
  /** 原産国IDM */
  idm: string
  /** 原産国名(和文) */
  name: string
  /** 原産国名(欧文) */
  name_en: string
  /** 原産国名(中国語) */
  name_zh?: string | null | undefined
  /** 原産国並び順 */
  display_order: number
} & BaseModel

/** 原産国一括操作対象 */
export type CountryOfOriginBulkTarget = CountryOfOrigin & BulkTarget

/** 原産国～村紐付 */
export type CountryVillageLink = {
  /** ID */
  id: number
  /** 原産国ID */
  country_of_origin_id: number

  country_of_origin?: CountryOfOrigin | undefined

  /** 地方ID */
  wine_area_id: number

  wine_area?: WineArea | undefined

  /** 地区ID */
  area_id?: number | null | undefined

  area?: Area | undefined

  /** 村ID */
  village_id?: number | null | undefined

  village?: Village | undefined
} & BaseModel

/** 原産国～村紐付一括操作対象 */
export type CountryVillageLinkBulkTarget = CountryVillageLink & BulkTarget

/** 原産国～格付紐付 */
export type CountryGradingLink = {
  /** ID */
  id: number
  /** 原産国ID */
  country_of_origin_id: number

  country_of_origin?: CountryOfOrigin | undefined

  /** 格付ID */
  grading_id: number

  grading?: Grading | undefined
} & BaseModel

/** 原産国～格付紐付一括操作対象 */
export type CountryGradingLinkBulkTarget = CountryGradingLink & BulkTarget

/** 原産国～原産地呼称紐付 */
export type CountryPlaceNameLink = {
  /** ID */
  id: number
  /** 原産国ID */
  country_of_origin_id: number

  country_of_origin?: CountryOfOrigin | undefined

  /** 原産地呼称ID */
  place_of_origin_name_id: number

  place_of_origin_name?: PlaceOfOriginName | undefined
} & BaseModel

/** 原産国～原産地呼称紐付一括操作対象 */
export type CountryPlaceNameLinkBulkTarget = CountryPlaceNameLink & BulkTarget

/** 得意先 */
export type Customer = {
  /** ID */
  id: number
  /** 得意先IDM */
  idm?: string | null | undefined
  /** マスタ管理CD */
  customer_type_cd1?: string | null | undefined
  /** 本登録フラグ */
  is_fixed: boolean
  /** 原産国ID */
  country_of_origin_id: number

  country_of_origin?: CountryOfOrigin | undefined

  /** 得意先名(カナ) */
  name_kana: string
  /** 得意先名(正式) */
  name_jp: string
  /** 得意先名(システム検索用) */
  name_system?: string | null | undefined
  /** 得意先名(略称) */
  name_abbr: string
  /** 得意先名(欧文) */
  name_en?: string | null | undefined
  /** 得意先名(中国語) */
  name_zh?: string | null | undefined
  /** 得意先名(他言語) */
  name_other?: string | null | undefined
  /** TEL */
  tel1: string
  /** FAX */
  fax1?: string | null | undefined
  /** 発注部署TEL */
  tel2?: string | null | undefined
  /** 発注部署FAX */
  fax2?: string | null | undefined
  /** 卸小売区分CD */
  retail_type_cd1: string
  /** 郵便番号 */
  zip: string
  /** 地方ID */
  wine_area_id: number

  wine_area?: WineArea | undefined

  /** 地区ID */
  area_id: number

  area?: Area | undefined

  /** 住所1 */
  address1: string
  /** 住所2 */
  address2: string
  /** 住所3 */
  address3?: string | null | undefined
  /** 通関担当者ID */
  customs_user_id?: number | null | undefined

  customs_user?: User | undefined

  /** 定休日メモ */
  holiday_note?: string | null | undefined
  /** 開店時間 */
  open_time?: string | null | undefined
  /** 業態CD */
  business_category_cd1: string
  /** 備考 */
  note?: string | null | undefined
  /** 価格グループID */
  price_group_id?: number | null | undefined

  price_group?: PriceGroup | undefined

  /** 顧客グループCD */
  client_group_cd1: string
  /** 売上税グループCD */
  sales_tax_type_cd1: string
  /** チームID */
  team_id?: number | null | undefined

  team?: Team | undefined

  /** 負担部門ID */
  cost_team_id?: number | null | undefined

  cost_team?: Team | undefined

  /** 通貨CD */
  currency_cd1: string
  /** 登録商品のみ出荷可能 */
  is_limited_shipping: boolean
  /** 代引・振確 受注案内区分CD */
  contact_type_cd1?: string | null | undefined
  /** 帳合先区分 */
  choai_cd1?: string | null | undefined
  /** 銀行コード(SWIFT CODE) */
  domestic_bank_cd1?: string | null | undefined
  /** 銀行支店(コード) */
  domestic_bank_branch_cd2?: string | null | undefined
  /** 口座振替 */
  is_transfer: boolean
  /** 口座振替開始年月 */
  transfer_start?: string | null | undefined
  /** 口座種類CD */
  bank_account_type_cd1?: string | null | undefined
  /** 口座番号 */
  bank_account_num?: string | null | undefined
  /** 預金者名 */
  bank_contact_person?: string | null | undefined
  /** 預金者名カナ */
  bank_contact_person_kana?: string | null | undefined
  /** 入金名義人 */
  bank_account_holder?: string | null | undefined
  /** 相手先入金担当者 */
  bank_personnel?: string | null | undefined
  /** 請求書OMR印字 */
  is_omr: boolean
  /** 専用口座番号 */
  dedicated_account?: string | null | undefined
  /** 請求書発行CD */
  invoice_print_type_cd1?: string | null | undefined
  /** 請求書FAX送信 */
  is_invoice_fax: boolean
  /** 請求書WEB送信 */
  is_invoice_web: boolean
  /** 請求書グループID */
  invoice_customer_id?: number | null | undefined

  invoice_customer?: Customer | undefined

  /** 入金先ID */
  payment_customer_id?: number | null | undefined

  payment_customer?: Customer | undefined

  /** 請求書宛名(原語) */
  invoice_addressee?: string | null | undefined
  /** 請求書宛名FAX番号 */
  invoice_fax?: string | null | undefined
  /** 請求書宛名肩書 */
  invoice_title?: string | null | undefined
  /** 請求書宛名E-MAIL */
  invoice_email?: string | null | undefined
  /** 経理備考 */
  accounting_note?: string | null | undefined
  /** 取引管理 */
  suspended_trade_cd1?: string | null | undefined
  /** 配送CD */
  haisou_cd1: string
  /** AMPM指定CD */
  arrival_request_am_pm_cd1?: string | null | undefined
  /** 納品時間帯(関西R)CD */
  arrival_request_kansai_cd1?: string | null | undefined
  /** 伝票種類CD */
  delivery_slip_cd1: string
  /** 発注書添付有 */
  is_order_sheet_required: boolean
  /** 返信用封筒要 */
  is_return_envelope_required: boolean
  /** 梱包ラベルCD */
  packing_label_cd1?: string | null | undefined
  /** 伝票郵送 */
  is_denpyo_post_required: boolean
  /** 納品データ送信区分 */
  send_data_type_cd1?: string | null | undefined
  /** 着日指定 */
  arrival_request: boolean
  /** 着日目安日数CD(伝発) */
  estimated_arrival_cd1?: string | null | undefined
  /** 着日目安日数CD(WEB) */
  web_estimated_arrival_cd1?: string | null | undefined
  /** 納品書備考欄 */
  delivery_slip_note?: string | null | undefined
  /** 納品書摘要欄 */
  delivery_slip_abstract?: string | null | undefined
  /** 別送納品書送付先 郵便番号 */
  add2_zip?: string | null | undefined
  /** 別送納品書送付先 住所1 */
  add2_add1?: string | null | undefined
  /** 別送納品書送付先 住所2 */
  add2_add2?: string | null | undefined
  /** 別送納品書送付先 住所3 */
  add2_add3?: string | null | undefined
  /** 別送納品書送付先 社名 */
  add2_company_name?: string | null | undefined
  /** 別送納品書送付先 宛名 */
  add2_name?: string | null | undefined
  /** 貿易条件CD */
  trade_term_cd1?: string | null | undefined
  /** refax */
  is_refax_required: boolean
  /** 欠品・年号変更時の出荷対応CD */
  stockout_contact_cd1?: string | null | undefined
  /** 欠品・年号変更時の連絡方法 */
  stockout_contact?: string | null | undefined
  /** ロット合わせの必要度CD */
  lot_necessary_cd1?: string | null | undefined
  /** ロット合わせの備考 */
  lot_note?: string | null | undefined
  /** 見積方法 */
  estimated?: string | null | undefined
  /** 見積定型フォーマットのパス */
  estimated_doc_path?: string | null | undefined
  /** 特別条件有無 */
  is_special_condition: boolean
  /** 有償サンプル比率(％) */
  sample_rate?: number | null | undefined
  /** 受注手配特記事項注意喚起 */
  is_order_remarks_mark: boolean
  /** 受注手配特記事項① */
  order_remarks1?: string | null | undefined
  /** 受注手配特記事項② */
  order_remarks2?: string | null | undefined
  /** 受注手配特記事項③ */
  order_remarks3?: string | null | undefined
  /** 受注手配特記予備1 */
  order_reserve1?: string | null | undefined
  /** 受注手配特記予備2 */
  order_reserve2?: string | null | undefined
  /** 受注手配特記予備3 */
  order_reserve3?: string | null | undefined
  /** 受注手配特記予備4 */
  order_reserve4?: string | null | undefined
  /** 受注手配特記予備5 */
  order_reserve5?: string | null | undefined
  /** 受注手配特記予備6 */
  order_reserve6?: string | null | undefined
  /** VINO取込締時刻設定CD */
  vino_tori_cd1?: string | null | undefined
  /** 販売可能蔵元・商品 */
  sake_note?: string | null | undefined
  /** 注意事項 */
  attention?: string | null | undefined
  /** 納品場所 */
  delivery_location?: string | null | undefined
  /** 店出場所 */
  shop_location?: string | null | undefined
  /** 売場名 */
  sales_floor_name?: string | null | undefined
  /** 店ID */
  shop_code?: string | null | undefined
  /** 部門 */
  shop_devision?: string | null | undefined
  /** 相手先得意先ID */
  customer_customer_id?: string | null | undefined
  /** 相手先売価印字 */
  is_customer_price_print: boolean
  /** チェーンストア社名 */
  chain_company_name?: string | null | undefined
  /** チェーンストア 商品CD印字CD */
  chain_itemid_print_cd1?: string | null | undefined
  /** チェーンストア 相手先売価印字 */
  is_chain_price_print: boolean
  /** 専用伝票備考 */
  exclusive_slip_note?: string | null | undefined
  /** 百貨店 店名 */
  depart_name?: string | null | undefined
  /** 百貨店 相手先売価印字 */
  is_depart_price_print: boolean
  /** 百貨店 百貨店ID */
  depart_depart_id?: string | null | undefined
  /** 百貨店 店別ID */
  depart_shop_id?: string | null | undefined
  /** 百貨店 相手先得意先ID */
  depart_customer_id?: string | null | undefined
  /** 百貨店 ヘッダー備考 */
  note_depart_header?: string | null | undefined
  /** 百貨店 品別番号 */
  customer_item_id?: string | null | undefined
  /** 担当者名 */
  personnel_name?: string | null | undefined
  /** WEB取引対象フラグ */
  is_web: boolean
  /** 運賃パターンIDM */
  fare_pattern_idm?: string | null | undefined
  fare_patterns?: FarePattern[] | undefined
  /** 受注案内E-MAIL1 */
  guide_email1?: string | null | undefined
  /** 受注案内E-MAIL2 */
  guide_email2?: string | null | undefined
  /** FAXサービス対象フラグ */
  is_fax: boolean
  /** FAXサービス 相手先担当者 */
  fax_personnel?: string | null | undefined
  /** FAXサービス FAX */
  fax_faxno?: string | null | undefined
  /** FAXサービス区分(ワイン)CD */
  fax_service_wine_cd1?: string | null | undefined
  /** FAXサービス区分(地酒)CD */
  fax_service_jplq_cd1?: string | null | undefined
  /** FAXサービス区分(その他)CD */
  fax_service_other_cd1?: string | null | undefined
  /** 価改・配送スケジュールCD */
  fax_service_schedule_cd1?: string | null | undefined
  /** バージョンCD(ワイン) */
  wine_pop_version_cd1?: string | null | undefined
  /** サイズ1CD(ワイン) */
  wine_pop_size1_cd1?: string | null | undefined
  /** サイズ2CD(ワイン) */
  wine_pop_size2_cd1?: string | null | undefined
  /** 税表記CD(ワイン) */
  wine_pop_disp_tax_cd1?: string | null | undefined
  /** 円未満処理CD(ワイン) */
  wine_rounding_type_cd1?: string | null | undefined
  /** 文字色CD(ワイン) */
  wine_pop_char_color_cd1?: string | null | undefined
  /** サイズCD(和酒) */
  jplq_pop_size_cd1?: string | null | undefined
  /** 税表記CD(和酒) */
  jplq_pop_disp_tax_cd1?: string | null | undefined
  /** 円未満処理CD(和酒) */
  jplq_rounding_type_cd1?: string | null | undefined
  /** 文字色CD(和酒) */
  jplq_pop_char_color_cd1?: string | null | undefined
  /** バージョンCD(食品) */
  food_pop_version_cd1?: string | null | undefined
  /** サイズCD(食品) */
  food_pop_size_cd1?: string | null | undefined
  /** 税表記CD(食品) */
  food_pop_disp_tax_cd1?: string | null | undefined
  /** 円未満処理CD(食品) */
  food_rounding_type_cd1?: string | null | undefined
  /** 文字色CD(食品) */
  food_pop_char_color_cd1?: string | null | undefined
  /** バージョンCD(その他) */
  other_pop_version_cd1?: string | null | undefined
  /** サイズCD(その他) */
  other_pop_size_cd1?: string | null | undefined
  /** 税表記CD(その他) */
  other_pop_disp_tax_cd1?: string | null | undefined
  /** 円未満処理CD(その他) */
  other_rounding_type_cd1?: string | null | undefined
  /** 文字色CD(その他) */
  other_pop_char_color_cd1?: string | null | undefined
  /** POPプライス備考 */
  pop_note1?: string | null | undefined
  /** POPプライス備考2 */
  pop_note2?: string | null | undefined
  /** 次回調整金額 */
  next_adjustment_amount?: string | null | undefined
  /** 次回調整備考 */
  next_adjustment_remarks?: string | null | undefined
  /** 得意先営業担当者。得意先一覧では無条件に取得されます。 */
  customer_sales?: CustomerSale[] | undefined
  /** 得意先先方担当者。得意先一覧では無条件に取得されます。 */
  customer_staffs?: CustomerStaff[] | undefined
  /** 得意先与信管理。得意先一覧では無条件に取得されます。 */
  customer_credits?: CustomerCredit[] | undefined

  customer_group?: CustomerGroup | undefined

  consignee?: Consignee | undefined

  /** 得意先（親）。得意先一覧では無条件に取得されます。 */
  parent_customer?: Customer | undefined

  updated_user?: User | undefined

  /** 得意先伝送管理の伝送NOCDの配列。得意先一覧、取得、一括操作APIでのみ取得されます。 */
  araki_bat_no_cd1_list?: string[] | undefined
  /** 得意先定休日の定休曜日CDの配列。得意先一覧、取得、一括操作APIでのみ取得されます。 */
  holiday_day_of_week_cd1_list?: string[] | undefined
  /** 得意先加盟団体の加盟団体CDの配列。得意先一覧、取得、一括操作APIでのみ取得されます。 */
  organization_cd1_list?: string[] | undefined
  /** 得意先WEB取込管理のVINO取込時刻設定CDの配列。得意先一覧、取得、一括操作APIでのみ取得されます。 */
  vino_tori_cd1_list?: string[] | undefined
} & BaseModel

/** 得意先営業担当者 */
export type CustomerSale = {
  /** ID */
  id: number
  /** 得意先ID */
  customer_id?: number | undefined

  customer?: Customer | undefined

  /** 担当者ID */
  user_id: number

  user?: User | undefined

  /** 担当アシスタントID */
  assistant_user_id: number

  assistant_user?: User | undefined

  /** サブアシスタントID */
  sub_assistant_user_id?: number | null | undefined

  sub_assistant_user?: User | undefined

  /** 変更日 */
  change_on: string
} & BaseModel

/** 得意先先方担当者 */
export type CustomerStaff = {
  /** ID */
  id: number
  /** 得意先ID */
  customer_id?: number | undefined

  customer?: Customer | undefined

  /** 担当者名 */
  name?: string | null | undefined
  /** 担当者名(カナ) */
  name_kana?: string | null | undefined
  /** 担当者部署 */
  post?: string | null | undefined
  /** 担当者肩書 */
  title?: string | null | undefined
  /** 担当者TEL */
  tel?: string | null | undefined
  /** 担当者内線 */
  ext?: string | null | undefined
  /** 担当者E-MAIL */
  email?: string | null | undefined
  /** 担当者備考 */
  note?: string | null | undefined
} & BaseModel

/** 得意先与信管理 */
export type CustomerCredit = {
  /** ID */
  id: number
  /** 得意先ID */
  customer_id?: number | undefined

  customer?: Customer | undefined

  /** 与信管理区分CD */
  yoshin_cd1: string
  /** 基準日CD */
  reference_pay_date_cd1?: string | null | undefined
  /** 締日1CD */
  closing_day1_cd1?: string | null | undefined
  /** 入金月1CD */
  payment_month1_cd1?: string | null | undefined
  /** 入金日1CD */
  payment_day1_cd1?: string | null | undefined
  /** 締日2CD */
  closing_day2_cd1?: string | null | undefined
  /** 入金月2CD */
  payment_month2_cd1?: string | null | undefined
  /** 入金日2CD */
  payment_day2_cd1?: string | null | undefined
  /** 変更日 */
  change_on: string
  /** 備考 */
  note?: string | null | undefined
} & BaseModel

/** 得意先伝送管理 */
export type CustomerBatch = {
  /** ID */
  id: number
  /** 得意先ID */
  customer_id: number

  customer?: Customer | undefined

  /** 伝送NOCD */
  araki_bat_no_cd1: string
} & BaseModel

/** 得意先定休日 */
export type CustomerHoliday = {
  /** ID */
  id: number
  /** 得意先ID */
  customer_id: number

  customer?: Customer | undefined

  /** 定休曜日CD */
  day_of_week_cd1: string
} & BaseModel

/** 得意先加盟団体 */
export type CustomerOrganization = {
  /** ID */
  id: number
  /** 得意先ID */
  customer_id: number

  customer?: Customer | undefined

  /** 加盟団体CD */
  organization_cd1: string
} & BaseModel

/** 得意先WEB取込管理 */
export type CustomerWebBatch = {
  /** ID */
  id: number
  /** 得意先ID */
  customer_id: number

  customer?: Customer | undefined

  /** VINO取込時刻設定CD */
  vino_tori_cd1: string
} & BaseModel

/** 得意先一括操作対象 */
export type CustomerBulkTarget = Customer & {
  customer_sales: (CustomerSale & BulkTarget)[]
  customer_staffs: (CustomerStaff & BulkTarget)[]
  customer_credits: (CustomerCredit & BulkTarget)[]
} & BulkTarget

/** 得意先与信管理一括操作対象 */
export type CustomerCreditBulkTarget = CustomerCredit & BulkTarget

/** 得意先グループ */
export type CustomerGroup = {
  /** ID */
  id: number
  /** 得意先ID */
  customer_id: number

  customer?: Customer | undefined

  /** 得意先グループCD */
  customer_group_cd1: string

  customer_group?: ControlDetail | undefined

  /** 受注ロット */
  num_reserve1?: number | null | undefined
  /** 数字予備1 */
  num_reserve2?: number | null | undefined
  /** 数字予備2 */
  num_reserve3?: number | null | undefined
  /** 店舗ID */
  shop_id?: string | null | undefined
  /** 店舗名略称 */
  str_reserve1?: string | null | undefined
  /** 会社ID */
  str_reserve2?: string | null | undefined
  /** 会社名 */
  str_reserve3?: string | null | undefined
} & BaseModel

/** 得意先グループ一括操作対象 */
export type CustomerGroupBulkTarget = CustomerGroup & BulkTarget

/** 得意先商品 */
export type CustomerInvent = {
  /** ID */
  id: number
  /** 得意先ID */
  customer_id: number

  customer?: Customer | undefined

  /** 商品ID */
  invent_id: number

  invent?: Invent | undefined

  /** 相手先商品CD */
  customer_item_cd?: string | null | undefined
  /** 相手先売価ケース */
  customer_item_price_case?: string | null | undefined
  /** 相手先売価バラ */
  customer_item_price_per?: string | null | undefined
} & BaseModel

/** 得意先商品一括操作対象 */
export type CustomerInventBulkTarget = CustomerInvent & BulkTarget

/** 得意先グループ商品 */
export type CustomerGroupInvent = {
  /** ID */
  id: number
  /** 得意先グループCD */
  customer_group_cd1: string
  /** 相手先商品CD */
  customer_item_cd: string
  /** 商品ID */
  invent_id: number

  invent?: Invent | undefined
} & BaseModel

/** 得意先グループ商品一括操作対象 */
export type CustomerGroupInventBulkTarget = CustomerGroupInvent & BulkTarget

/** 得意先営業担当者マスタ一括操作対象 */
export type CustomerSaleBulkTarget = CustomerSale & BulkTarget

/** 得意先先方担当者マスタ一括操作対象 */
export type CustomerStaffBulkTarget = CustomerStaff & BulkTarget

/** Eメールテンプレート */
export type EmailTemplate = {
  /** ID */
  id: number
  /** EメールテンプレートIDM */
  idm: string
  /** Eメールテンプレート名 */
  name: string
  /** 宛先 */
  to?: string | null | undefined
  /** CC */
  cc?: string | null | undefined
  /** BCC */
  bcc?: string | null | undefined
  /** FROM担当者ID */
  from_user_id?: number | null | undefined

  from_user?: User | undefined

  /** 件名 */
  title: string
  /** 本文 */
  body: string
} & BaseModel

/** Eメールテンプレート一括操作対象 */
export type EmailTemplateBulkTarget = EmailTemplate & BulkTarget

/** 運賃パターン */
export type FarePattern = {
  /** ID */
  id: number
  /** 運賃パターンIDM */
  idm: string
  /** 運賃パターン名 */
  name: string
  /** 運賃パターン区分 */
  fare_pattern_cd1: string
  /** 数量優先 */
  is_volume_basis: boolean
  /** 条件A */
  condition_a: string
  /** 条件B */
  condition_b: string
  /** 条件C */
  condition_c: string
  /** 条件D */
  condition_d: string
  /** 条件E */
  condition_e: string
  /** 条件F */
  condition_f: string
  /** 運賃A */
  fare_a: string
  /** 運賃B */
  fare_b: string
  /** 運賃C */
  fare_c: string
  /** 運賃D */
  fare_d: string
  /** 運賃E */
  fare_e: string
  /** 運賃F */
  fare_f: string
} & BaseModel

/** 運賃パターン一括操作対象 */
export type FarePatternBulkTarget = FarePattern & BulkTarget

/** 運賃確認 */
export type FareSummary = {
  /** ピッキング分類CD */
  picking_cd1?: string | undefined
  /** 商品ID */
  invent_id?: number | undefined

  invent?: Invent | undefined

  /** 入数 */
  quantity_per_case?: number | undefined
  /** ケース数 */
  case_count?: number | undefined
  /** バラ数 */
  bottle_count?: number | undefined
  /** 受注単価 */
  order_unit_price?: string | null | undefined
  /** 受注金額 */
  order_amount?: string | undefined
  /** クール便 */
  is_cool_transfer?: boolean | undefined
}

/** フォワーダー費用テンプレート */
export type ForwarderCost = {
  /** ID */
  id: number
  /** 仕入先ID */
  vendor_id?: number | null | undefined

  vendor?: Vendor | undefined

  /** 表示順 */
  display_order?: number | null | undefined
  /** 費用科目ID */
  cost_subject_id?: number | null | undefined

  cost_subject?: CostSubject | undefined

  /** 支払先ID */
  pay_vendor_id?: number | null | undefined

  pay_vendor?: Vendor | undefined

  /** 通貨CD */
  currency_cd1?: string | null | undefined
} & BaseModel

/** フォワーダー費用テンプレート一括操作対象 */
export type ForwarderCostBulkTarget = ForwarderCost & BulkTarget

/** フォワーダー採用 */
export type ForwarderRecruit = {
  /** ID */
  id: number
  /** 仕入先ID */
  vendor_id?: number | null | undefined

  vendor?: Vendor | undefined

  /** 見積採用期間開始日 */
  start_on?: string | null | undefined
  /** 見積採用期間終了日 */
  end_on?: string | null | undefined
  /** 船積オーダー記号 */
  mark?: string | null | undefined
  /** 出港地CD */
  departure_port_cd1?: string | null | undefined
  /** 入港地CD */
  arrival_port_cd1?: string | null | undefined
  /** コンテナサイズCD */
  container_size_cd1?: string | null | undefined
  /** コンテナ仕様CD */
  container_type_cd1?: string | null | undefined
  /** 運賃通貨 */
  ocean_freight_currency?: string | null | undefined
  /** Ocean freight */
  ocean_freight_cost?: string | null | undefined
  /** その他費用通貨 */
  other_currency?: string | null | undefined
  /** Other Cost */
  other_cost?: string | null | undefined
  /** 船社名 */
  boat_name?: string | null | undefined
  /** 接続回数 */
  count?: string | null | undefined
  /** 接続地 */
  place?: string | null | undefined
  /** 船足 */
  boat_speed?: string | null | undefined
  /** 採用備考 */
  note?: string | null | undefined
} & BaseModel

/** フォワーダー採用一括操作対象 */
export type ForwarderRecruitBulkTarget = ForwarderRecruit & BulkTarget

/** フリータイム */
export type FreeTime = {
  /** ID */
  id: number
  /** 船社ID */
  ship_company_id?: number | null | undefined

  ship_company?: ShipCompany | undefined

  /** コンテナサイズCD */
  container_size_cd1?: string | null | undefined
  /** コンテナ仕様CD */
  container_type_cd1?: string | null | undefined
  /** 適用開始日 */
  start_on?: string | null | undefined
  /** 適用終了日 */
  end_on?: string | null | undefined
  /** FT計算用土日含みフラグ */
  is_ft_calc_weekend_include: boolean
  /** FT計算用祝日含みフラグ */
  is_ft_calc_holiday_include: boolean
  /** 基準日区分 */
  freetime_base_date_cd1?: string | null | undefined
  /** 起算日計算区分 */
  freetime_start_date_cd1?: string | null | undefined
  /** 超過保管料 */
  excess_storage_amount?: string | null | undefined
  /** 超過保管料上限日数 */
  excess_storage_limit_days?: number | null | undefined
  /** 内部備考 */
  note?: string | null | undefined
} & BaseModel

/** フリータイム一括操作対象 */
export type FreeTimeBulkTarget = FreeTime & BulkTarget

/** フレイト */
export type Freight = {
  /** ID */
  id: number
  /** フレイト名称ID */
  freight_name_id?: number | undefined

  freight_name?: FreightName | undefined

  /** 改定日 */
  change_on: string
  /** フレイト */
  freight: string
  /** 内部備考 */
  note?: string | null | undefined
} & BaseModel

/** フレイト一括操作対象 */
export type FreightBulkTarget = Freight & BulkTarget

/** フレイト名称 */
export type FreightName = {
  /** ID */
  id: number
  /** 名称 */
  name: string
  /** コンテナ記号 */
  container?: string | null | undefined
  /** ドライ */
  dry?: string | null | undefined
  freights?: Freight[] | undefined
} & BaseModel

/** フレイト名称一括操作対象 */
export type FreightNameBulkTarget = FreightName & {
  freights: (Freight & BulkTarget)[]
} & BulkTarget

/** 格付 */
export type Grading = {
  /** ID */
  id: number
  /** 格付IDM */
  idm: string
  /** 格付名 */
  name: string
} & BaseModel

/** 格付一括操作対象 */
export type GradingBulkTarget = Grading & BulkTarget

/** コストデータ一括操作対象 */
export type ImportCostFileBulkTarget = ImportCost & BulkTarget

/** コスト通関データ一括操作対象 */
export type ImportCostCustomFileBulkTarget = ImportCostCustom & BulkTarget

/** 作業料（コスト）データ一括操作対象 */
export type ImportCheckCostFileBulkTarget = CheckCost & BulkTarget

/** 商品 */
export type Invent = {
  /** ID */
  id: number
  /** 自社ITFコード発行 */
  is_itf: boolean
  /** 生産者ID */
  maker_vendor_id?: number | null | undefined

  maker_vendor?: Vendor | undefined

  /** 国内品/海外品CD */
  invent_group_cd1?: string | null | undefined
  /** 社内公開 */
  is_registry: boolean
  /** 品番 */
  idm: string | null

  /** 運賃品目 */
  freight_cost?: ControlDetail | undefined

  /** 単品バーコード */
  barcode?: string | null | undefined
  /** ボールITFコード */
  ball_itf_code?: string | null | undefined
  /** ケースITFコード */
  case_itf_code?: string | null | undefined
  /** 原産地証明書要 */
  is_placeoforiginname_certificate: boolean
  /** 分析表不要 */
  is_not_analysis: boolean
  /** 原産国ID */
  country_of_origin_id?: number | null | undefined

  country_of_origin?: CountryOfOrigin | undefined

  /** 地方ID */
  wine_area_id?: number | null | undefined

  wine_area?: WineArea | undefined

  /** 地区ID */
  area_id?: number | null | undefined

  area?: Area | undefined

  /** 村ID */
  village_id?: number | null | undefined

  village?: Village | undefined

  /** 原産地呼称ID */
  place_of_origin_name_id?: number | null | undefined

  place_of_origin_name?: PlaceOfOriginName | undefined

  /** 格付ID */
  grading_id?: number | null | undefined

  grading?: Grading | undefined

  /** 商品名(正式/和文) */
  name_jp: string
  /** 商品名(正式/欧文) */
  name_en?: string | null | undefined
  /** 商品名(伝票印字品名) */
  name_denpatu?: string | null | undefined
  /** 商品名(略称) */
  name_abbr?: string | null | undefined
  /** 商品名(検索用カナ) */
  name_kana?: string | null | undefined
  /** 商品名(RBP用) */
  name_rbp?: string | null | undefined
  /** 商品名(値札工房用) */
  name_pc?: string | null | undefined
  /** 商品名(価格表用) */
  name_catalog?: string | null | undefined
  /** 商品名(別年号用) */
  name_yearly?: string | null | undefined
  /** 商品名(システム検索用) */
  name_system?: string | null | undefined
  /** WEB対象 */
  is_web: boolean
  /** ファーストラベル名 */
  first_label?: string | null | undefined
  /** 品目区分CD */
  item_group_cd1?: string | null | undefined
  /** 酒税名ID */
  liquor_tax_name_id?: number | null | undefined

  liquor_tax_name?: LiquorTaxName | undefined

  /** 酒税_備考 */
  liquor_tax_note?: string | null | undefined
  /** 商品分類CD */
  item_type_cd1?: string | null | undefined
  /** 仕入販売区分CD */
  siire_hanbaii_kbn_cd1?: string | null | undefined
  /** 販売区分CD */
  sales_category_cd1?: string | null | undefined
  /** 戦略分類CD */
  strategy_type_cd1?: string | null | undefined
  /** 社内公開日 */
  registry_on?: string | null | undefined
  /** Wine-Link登録 */
  is_wine_link: boolean
  /** ピッキング分類CD */
  picking_cd1?: string | null | undefined
  /** 年号 */
  vintage?: string | null | undefined
  /** 色 */
  color_cd1?: string | null | undefined
  /** 味のタイプCD */
  tasting_type_cd1?: string | null | undefined
  /** 飲用温度 */
  temperature?: string | null | undefined
  /** 発注先ID */
  order_vendor_id?: number | null | undefined

  order_vendor?: Vendor | undefined

  /** 支払先ID */
  pay_vendor_id?: number | null | undefined

  pay_vendor?: Vendor | undefined

  /** 集荷先ID */
  collection_vendor_id?: number | null | undefined

  collection_vendor?: Vendor | undefined

  /** CCID */
  cc_vendor_id?: number | null | undefined

  cc_vendor?: Vendor | undefined

  /** 発注書印刷単位ID */
  print_unit_vendor_id?: number | null | undefined

  print_unit_vendor?: Vendor | undefined

  /** 生産者DB書出ID */
  winary_comment_vendor_id?: number | null | undefined

  winary_comment_vendor?: Vendor | undefined

  /** 内容量(バラ) */
  volume?: number | null | undefined
  /** 内容量の単位CD */
  volume_unit_cd1?: string | null | undefined
  /** 登録入数 */
  quantity_per_case: number
  /** 現地実入数 */
  local_quantity_per_case?: number | null | undefined
  /** 入数(ボール) */
  quantity_per_ball?: number | null | undefined
  /** 最低出荷単位 */
  shipping_invent_unit_cd1?: string | null | undefined
  /** ケース発注必須区分 */
  is_caseorder_need: boolean
  /** 搬入時仕様チェック */
  is_check_installation: boolean
  /** LI */
  is_low_intervention: boolean
  /** 夏季ドライ出荷NG */
  is_summer_dry_ship_ng: boolean
  /** 協賛インボイス対象フラグ */
  is_cooperate_invoice: boolean
  /** 在庫管理対象 */
  is_stocked: boolean
  /** 送料集計単位CD */
  shipping_sum_unit_cd1?: string | null | undefined
  /** 顧客限定の内容 */
  custmer_limited?: string | null | undefined
  /** WEBあいまい検索キー */
  searchkey_vino?: string | null | undefined
  /** 産地別フラグCD */
  area_flg_cd1?: string | null | undefined
  /** 取置不可フラグ */
  is_not_sale_stock: boolean
  /** 割当フラグ */
  is_sale_stock: boolean
  /** 販売_終売フラグCD */
  discontinued_cd1?: string | null | undefined
  /** 終売日 */
  discontinued_on?: string | null | undefined
  /** 実在庫確認日 */
  inventory_confirm_on?: string | null | undefined
  /** バイヤーID */
  buyer_user_id?: number | null | undefined

  buyer_user?: User | undefined

  /** 実在庫確認日_備考 */
  inventory_confirmdate_note?: string | null | undefined
  /** 開発部門CD */
  development_cd1?: string | null | undefined
  /** オペレーターID */
  operator_user_id?: number | null | undefined

  operator_user?: User | undefined

  /** 販売ー品目売上税グループCD */
  sales_item_tax_type_cd1?: string | null | undefined
  /** 担当部署 */
  post_invent_cd1?: string | null | undefined
  /** 通関担当者ID */
  customs_user_id?: number | null | undefined

  customs_user?: User | undefined

  /** 購買ー品目売上税グループCD */
  purchase_item_tax_type_cd1?: string | null | undefined
  /** オープンプライス */
  is_open_price: boolean
  /** 希望小売プリント */
  is_print_sign: boolean
  /** HSコード(関税番号) */
  hs?: string | null | undefined
  /** 輸入統計品目CD */
  customs_itemname_cd1?: string | null | undefined
  /** 関税_備考 */
  customs_tax_note?: string | null | undefined
  /** 通貨CD */
  currency_cd1?: string | null | undefined
  /** 最終仕入単価 */
  purchase_unit_price?: string | null | undefined
  /** 前渡集計区分CD */
  advance_sum_cd1?: string | null | undefined
  /** SPT条件CD */
  spt_condition_cd1?: string | null | undefined
  /** 支払条件ID */
  payment_condition_id?: number | null | undefined

  payment_condition?: PaymentCondition | undefined

  /** 函数/1PT */
  box_per_pallet?: number | null | undefined
  /** 国内諸掛フラグ */
  is_various_expense: boolean
  /** 備考 */
  note?: string | null | undefined
  /** 年産数量 */
  yearly_production_qty?: string | null | undefined
  /** 年産数量の単位CD */
  yearly_volume_unit_cd1?: string | null | undefined
  /** 樹齢 */
  treeage?: string | null | undefined
  /** 平均収量 */
  yield_avg?: string | null | undefined
  /** 栽培面積 */
  growing_area?: string | null | undefined
  /** ノンフィルターチェック */
  is_nonfilter: boolean
  /** 土壌 */
  soil?: string | null | undefined
  /** 醗酵 */
  ferment?: string | null | undefined
  /** 熟成 */
  maturation?: string | null | undefined
  /** 品種 */
  varieties?: string | null | undefined
  /** 天然酵母使用 */
  is_natural_yeast: boolean
  /** 清澄剤不使用 */
  is_not_clarifier: boolean
  /** SO２添加時期（対象） */
  is_so2: boolean
  /** 収穫時(mg/l) */
  harvest_capacity?: number | null | undefined
  /** 破砕後(mg/l) */
  crushing_capacity?: number | null | undefined
  /** 醸造時(mg/l) */
  brewing_capacity?: number | null | undefined
  /** MLF時(mg/l) */
  mlf_capacity?: number | null | undefined
  /** 熟成時(mg/l) */
  ripening_capacity?: number | null | undefined
  /** 瓶詰め時(mg/l) */
  bottled_capacity?: number | null | undefined
  /** 原材料 */
  raw_materials?: string | null | undefined
  /** スペクテーター点 */
  spectators_score?: string | null | undefined
  /** スペクテーター年/月/日 */
  spectators_remarks?: string | null | undefined
  /** アドヴォケイト点 */
  advocate_score?: string | null | undefined
  /** アドヴォケイト年/月 */
  advocate_remarks?: string | null | undefined
  /** アドヴォケイト号 */
  advocate_issue?: string | null | undefined
  /** デキャンタ(点) */
  decanter_score?: string | null | undefined
  /** デキャンタ(備考) */
  decanter_remarks?: string | null | undefined
  /** サックリング(点) */
  suckling_score?: string | null | undefined
  /** サックリング(年/月) */
  suckling_remarks?: string | null | undefined
  /** 入賞歴(コンクール) */
  contest?: string | null | undefined
  /** 評価歴(海外専門誌) */
  evaluation_abroad?: string | null | undefined
  /** 評価歴(国内専門誌) */
  evaluation_domestic?: string | null | undefined
  /** 評価歴(その他) */
  evaluation_other?: string | null | undefined
  /** 評価情報履歴 */
  evaluation_journal?: string | null | undefined
  /** キャッチコピー */
  sales_copy?: string | null | undefined
  /** テイスティングコメント */
  comment_tasting?: string | null | undefined
  /** 定温保管優先順位 */
  priority_inventory2?: number | null | undefined
  /** ビオ農法CD */
  bio_cd1?: string | null | undefined
  /** ビオ認定機関CD */
  bio_accreditat_cd1?: string | null | undefined
  /** 倉庫依頼ID */
  order_warehouse_id?: number | null | undefined

  order_warehouse?: OrderWarehouse | undefined

  /** 生産者依頼ID */
  order_maker_id?: number | null | undefined

  order_maker?: OrderMaker | undefined

  /** 有機JAS認証 */
  is_organic_jas: boolean
  /** 有機JAS認証機関名CD */
  organic_jas_cd1?: string | null | undefined
  /** 発注者覚書ID */
  order_note_id?: number | null | undefined

  order_note?: OrderNote | undefined

  /** 発注者覚書(名称) */
  request_buyer?: string | null | undefined
  /** 容器仕様ID */
  bottle_size_id?: number | null | undefined

  bottle_size?: BottleSize | undefined

  /** 単品荷姿CD */
  per_style_cd1?: string | null | undefined
  /** 一括表示仕様ID */
  batch_display_id?: number | null | undefined

  batch_display?: BatchDisplay | undefined

  /** 化粧箱用シールCD */
  out_box_cd1?: string | null | undefined
  /** 一括表示名称CD */
  back_label_cd1?: string | null | undefined
  /** キャップ色 */
  cap_seal?: string | null | undefined
  /** 栓仕様CD */
  cork_spec_cd1?: string | null | undefined
  /** ボール荷姿CD */
  ball_style_cd1?: string | null | undefined
  /** ボールラベルCD */
  ball_label_cd1?: string | null | undefined
  /** 函荷姿CD */
  box_style_cd1?: string | null | undefined
  /** 函ラベル仕様ID */
  label_box_id?: number | null | undefined

  label_box?: LabelBox | undefined

  /** 瓶色CD */
  bottle_color_cd1?: string | null | undefined
  /** 1ケース重量 */
  outbox_weight?: string | null | undefined
  /** リサイクル法CD */
  recycle_law_cd1?: string | null | undefined
  /** ラベル記載ALC */
  alcohol_content?: string | null | undefined
  /** 熱量 */
  energy?: string | null | undefined
  /** 残糖度 */
  calory?: string | null | undefined
  /** 酸度 */
  additive?: string | null | undefined
  /** ブリックス値 */
  acid_degree?: string | null | undefined
  /** ガス圧 */
  gas_pressure?: string | null | undefined
  /** エキス分 */
  extracted_component?: string | null | undefined
  /** 発注君非表示 */
  haccyuu_kun?: string | null | undefined
  /** 一括表示記載添加物 */
  additive_other?: string | null | undefined
  /** プライスカード用の説明 */
  exp_price_card?: string | null | undefined
  /** カタログ用の説明 */
  exp_catalog?: string | null | undefined
  /** 商品説明_備考 */
  note_note?: string | null | undefined
  /** カタログ掲載フラグ */
  is_printing: boolean
  /** シリーズ/ブランド */
  brand?: string | null | undefined
  /** 取口賞味期限 */
  expiration_on?: string | null | undefined
  /** 賞味期限フォーマット */
  best_before_format_cd1?: string | null | undefined
  /** 賞味期限加算月数 */
  best_before_add_month?: number | null | undefined
  /** 賞味期限加算日数 */
  best_before_add_day?: number | null | undefined
  /** 賞味期限表示位置 */
  expiration_locate?: string | null | undefined
  /** 在庫・直送区分CD */
  stock_direct_type_cd1?: string | null | undefined
  /** アルコールの使用 */
  is_alcohol_use: boolean
  /** アルコール注意事項 */
  alcohol_note?: string | null | undefined
  /** 原材料アレルギー */
  raw_materials_allergy?: string | null | undefined
  /** 同製造設備アレルギー */
  equipment_allegry?: string | null | undefined
  /** 製造工程 */
  manufacturingprocess?: string | null | undefined
  /** 保存方法 */
  store_method?: string | null | undefined
  /** 添加物メモ */
  additive_note?: string | null | undefined
  /** 外函_高 */
  outbox_height?: number | null | undefined
  /** 外函_幅 */
  outbox_width?: number | null | undefined
  /** 外函_奥行 */
  outbox_depth?: number | null | undefined
  /** 脂質 */
  lipid?: string | null | undefined
  /** 食塩相当量 */
  natrium?: string | null | undefined
  /** たんぱく質 */
  protein?: string | null | undefined
  /** 炭水化物 */
  carbohydrate?: string | null | undefined
  /** 名門酒会 */
  is_meimon_liquor: boolean
  /** 仕入先品番 */
  vendor_product_no?: string | null | undefined
  /** 酒質CD */
  quality_of_liquor_cd1?: string | null | undefined
  /** 日本酒度 */
  jplq_acid_degree?: string | null | undefined
  /** 掛米の精米歩合 */
  jplq_ricemill_kake?: string | null | undefined
  /** 生貯などの区別CD */
  jplq_type_cd1?: string | null | undefined
  /** アミノ酸度 */
  jplq_aminoacid?: string | null | undefined
  /** 麹米の精米歩合 */
  jplq_ricemill_koji?: string | null | undefined
  /** 精米歩合 */
  jplq_ricemill?: string | null | undefined
  /** 新味(甘辛)CD */
  salted_sweetened_level_cd1?: string | null | undefined
  /** 新味(味わい)CD */
  taste_level_cd1?: string | null | undefined
  /** 新味(香り)CD */
  aroma_level_cd1?: string | null | undefined
  /** 風味 */
  flavor?: string | null | undefined
  /** 原材料名（裏ラベル表示用） */
  back_raw_materials?: string | null | undefined
  /** 酵母 */
  yeast?: string | null | undefined
  /** 仕込み水 */
  jplq_water?: string | null | undefined
  /** BY(酒造年度) */
  sake_brewing_year?: string | null | undefined
  /** 飲用温度CD(冷酒) */
  reisyu_good_for_drinking_cd1?: string | null | undefined
  /** 飲用温度CD(常温) */
  jyoon_good_for_drinking_cd1?: string | null | undefined
  /** 飲用温度CD(ぬる燗) */
  nurukan_good_for_drinking_cd1?: string | null | undefined
  /** 飲用温度CD(熱燗) */
  atukan_good_for_drinking_cd1?: string | null | undefined
  /** 直送ロット */
  direct_delivery?: string | null | undefined
  /** 直送ロット(備考) */
  direct_delivery_note?: string | null | undefined
  /** 直送ロット(出荷状況) */
  direct_delivery_status?: string | null | undefined
  /** 輸出用生産者名 */
  exp_makername?: string | null | undefined
  /** 商品名(輸出用/アルファベット) */
  itemname_import_en?: string | null | undefined
  /** 商品名(輸出用/中国語) */
  itemname_import_zh?: string | null | undefined
  /** 在中企業登録番号 */
  registration_number?: string | null | undefined
  /** 日本HS（9桁） */
  hs_jp?: string | null | undefined
  /** 中国HS（10桁） */
  hs_zh?: string | null | undefined
  /** 中国CIQ(3桁） */
  ciq_zh?: string | null | undefined
  /** 中国語ブドウ品種 */
  breed_zh?: string | null | undefined
  /** ブランド名英文 */
  brand_name_en?: string | null | undefined
  /** ブランド名中文 */
  brand_name_zh?: string | null | undefined
  /** ラベルサイズ（表） */
  label_size_front?: string | null | undefined
  /** ラベルサイズ（裏） */
  label_size_back?: string | null | undefined
  /** ラベルサイズ（他） */
  label_size_other?: string | null | undefined
  /** 英語ブドウ品種 */
  breed_en?: string | null | undefined
  /** 中国語製品流通ルート */
  product_root_zh?: string | null | undefined
  /** 中国語原材料流通ルート */
  raw_materials_root_zh?: string | null | undefined
  /** 成分割合(日本語) */
  composition_ratio_ja?: string | null | undefined
  /** 成分割合(中国語) */
  composition_ratio_zh?: string | null | undefined
  /** 商品名・ラベル 意味 */
  item_name_label?: string | null | undefined
  /** 考えられる問合せ・クレーム */
  claim?: string | null | undefined
  /** 相談室用メモ */
  counseling_memo?: string | null | undefined
  /** JAN出力日 */
  jan_exported_on?: string | null | undefined
  /** 販売元名 */
  distributor_name?: string | null | undefined
  /** 販売元担当者名 */
  distributor_pic_name?: string | null | undefined
  /** 販売元担当者メールアドレス */
  distributor_pic_mail?: string | null | undefined
  /** 販売元担当者TEL */
  distributor_pic_tel?: string | null | undefined
  /** 原材料名（中国語） */
  raw_materials_zh?: string | null | undefined
  /** 容量按分区分CD */
  distribute_volume_cd1?: string | null | undefined
  invent_web_cutouts?: InventWebCutout[] | undefined
  domestic_order_prices?: DomesticOrderPrice[] | undefined
  sales_prices?: SalesPrice[] | undefined
  import_prices?: ImportPrice[] | undefined
  invent_memos?: InventMemo[] | undefined
  mtx_campaigns?: MtxCampaign[] | undefined
  /** 商品原材料原産国の原産国IDの配列。商品一覧、取得、一括操作APIでのみ取得されます。 */
  raw_material_country_of_origin_id_list?: number[] | undefined
  /** 商品認証の認証CDの配列。商品一覧、取得、一括操作APIでのみ取得されます。 */
  certificate_type_cd1_list?: string[] | undefined
  /** 在庫ケース数。商品一覧、取得、一括操作APIでのみ取得されます。 */
  stock_case_count?: number | undefined
  /** 在庫バラ数。商品一覧、取得、一括操作APIでのみ取得されます。 */
  stock_bottle_count?: number | undefined
  monthly_whole_transaction_totals?: MonthlyWholeTransactionTotal[] | undefined
  shipping_order_details?: ShippingOrderDetail[] | undefined
  /** セット品フラグ */
  is_set?: boolean | undefined
  /** 品番固定 */
  is_fixed_idm: boolean
  /** 一括価格改定検討要フラグ */
  is_change_target: boolean
  /** 夏季限定 */
  is_summer_limited: boolean
  /** 冬季限定 */
  is_winter_limited: boolean
  /** 独占輸入 */
  is_monopolization: boolean
  /** 単独所有 */
  is_single: boolean
  /** 限定品 */
  is_limited: boolean
  /** 自社畑 */
  is_own: boolean
  /** カタログ用掲載荷姿 */
  catalog_box_style?: string | null | undefined
  /** カタログ用商品の最後に掲載事項 */
  catalog_last_note?: string | null | undefined
  /** カタログ予備1 */
  catalog_note1?: string | null | undefined
  /** カタログ予備2 */
  catalog_note2?: string | null | undefined
  /** 混載PTフラグ */
  is_mixed_pallet: boolean
  /** フレイト名称ID */
  freight_name_id?: number | null | undefined

  freight_name?: FreightName | undefined

  /** 特恵グループCD */
  preferential_treatment_group_cd1?: string | null | undefined
  customs_duties?: CustomsDuty[] | undefined
  /** 原料添加物(中国語) */
  material_additive_zh?: string | null | undefined
  /** 商品類型(中国語) */
  product_type_zh?: string | null | undefined
  /** RBPラベルレイアウトCD */
  exp_rbp_label_type_cd1?: string | null | undefined
} & BaseModel

/** WEB在庫切出 */
export type InventWebCutout = {
  /** ID */
  id: number
  /** 倉庫ID */
  location_id: number

  location?: Location | undefined

  /** 商品ID */
  invent_id?: number | undefined

  invent?: Invent | undefined

  /** Web切出率(%) */
  web_per?: number | null | undefined
  /** 最低切出バラ数 */
  web_qty_min?: number | null | undefined
} & BaseModel

/** WEB在庫切出一括操作対象 */
export type InventWebCutoutBulkTarget = InventWebCutout & BulkTarget

/** 国内発注単価 */
export type DomesticOrderPrice = {
  /** ID */
  id: number
  /** 商品ID */
  invent_id?: number | undefined

  invent?: Invent | undefined

  /** 改定日 */
  change_on: string
  /** バラ単価 */
  bottle_unit_price: string
  /** ケース単価 */
  case_unit_price?: string | null | undefined
  /** 価格単位CD */
  price_unit_cd1: string
} & BaseModel

/** 国内発注単価一括操作対象 */
export type DomesticOrderPriceBulkTarget = DomesticOrderPrice & BulkTarget

/** 販売単価 */
export type SalesPrice = {
  /** ID */
  id: number
  /** 商品ID */
  invent_id?: number | undefined

  invent?: Invent | undefined

  /** 改定日 */
  change_on: string
  /** バラ納価 */
  bottle_unit_price: string
  /** ケース納価 */
  case_unit_price: string
  /** 希望小売価格 */
  mrp?: string | null | undefined
  /** 参考価格 */
  reference_price?: string | null | undefined
  /** 価格設定時レート */
  rate?: string | null | undefined
  /** 価格設定時仕入単価 */
  setup_invent_price?: string | null | undefined
} & BaseModel

/** 販売単価一括操作対象 */
export type SalesPriceBulkTarget = SalesPrice & BulkTarget

/** 輸入購買単価 */
export type ImportPrice = {
  /** ID */
  id: number
  /** 商品ID */
  invent_id?: number | undefined

  invent?: Invent | undefined

  /** 改定日 */
  change_on: string
  /** 通貨 */
  currency_cd1: string
  /** 価格単位 */
  price_unit_cd1: string
  /** 現地単価 */
  local_unit_price: string
  /** 割引前単価 */
  pre_discount_unit_price: string
  /** 価格体系CD */
  price_system_cd1: string
} & BaseModel

/** 輸入購買単価一括操作対象 */
export type ImportPriceBulkTarget = ImportPrice & BulkTarget

/** 商品原材料原産国 */
export type InventRawMaterialCountry = {
  /** ID */
  id: number
  /** 商品ID */
  invent_id: number

  invent?: Invent | undefined

  /** 原産国ID */
  country_of_origin_id: number

  country_of_origin?: CountryOfOrigin | undefined
} & BaseModel

/** 商品認証 */
export type InventCertificate = {
  /** ID */
  id: number
  /** 商品ID */
  invent_id: number

  invent?: Invent | undefined

  /** 認証CD */
  certificate_type_cd1: string
} & BaseModel

/** 商品一括操作対象 */
export type InventBulkTarget = Invent & {
  invent_web_cutouts: (InventWebCutout & BulkTarget)[]
  domestic_order_prices: (DomesticOrderPrice & BulkTarget)[]
  sales_prices: (SalesPrice & BulkTarget)[]
  import_prices: (ImportPrice & BulkTarget)[]
} & BulkTarget

/** 部品表 */
export type InventComponent = {
  /** ID */
  id: number
  /** 親商品ID */
  parent_invent_id: number

  parent_invent?: Invent | undefined

  /** 子商品ID */
  child_invent_id: number

  child_invent?: Invent | undefined

  /** 構成比 */
  composition_ratio: number
  /** 納価比率 */
  sales_price_ratio: string
  /** 並び順 */
  display_order: number
} & BaseModel

/** 部品表一括操作対象 */
export type InventComponentBulkTarget = InventComponent & BulkTarget

/** JAN送付リスト出力結果 */
export type InventExportJanResult = {
  /** 品番 */
  idm: string
} & BulkTarget

/** 商品メモ */
export type InventMemo = {
  /** ID */
  id: number
  /** 商品ID */
  invent_id: number

  invent?: Invent | undefined

  /** 商品メモ */
  memo?: string | null | undefined
  /** メモ表示行No */
  line_no: number
} & BaseModel

/** 商品メモ一括操作対象 */
export type InventMemoBulkTarget = InventMemo & BulkTarget

/** 函ラベル */
export type LabelBox = {
  /** ID */
  id: number
  /** 函ラベルIDM */
  idm: string
  /** 和文 */
  name_jp?: string | null | undefined
  /** 英文 */
  name_en?: string | null | undefined
  /** 仏文 */
  name_fr?: string | null | undefined
  /** RBP/JBL区分 */
  rbp_jbl_type_cd1?: string | null | undefined
  /** 部材手配要フラグ */
  is_need_parts: boolean
  /** シールID */
  seal_id?: number | null | undefined

  seal?: Seal | undefined
} & BaseModel

/** 函ラベル一括操作対象 */
export type LabelBoxBulkTarget = LabelBox & BulkTarget

/** 酒税名 */
export type LiquorTaxName = {
  /** ID */
  id: number
  /** 酒税IDM */
  idm: string
  /** 酒税グループ */
  liquor_tax_group_cd1: string
  /** 酒税名 */
  name: string
  /** 酒税名略称 */
  name_abbr: string
  /** 集計対象 */
  for_summary: boolean
  liquor_taxes?: LiquorTax[] | undefined
} & BaseModel

/** 酒税名一括操作対象 */
export type LiquorTaxNameBulkTarget = LiquorTaxName & BulkTarget

/** 倉庫 */
export type Location = {
  /** ID */
  id: number
  /** 倉庫IDM */
  idm: string
  /** 倉庫名 */
  name: string
  /** 倉庫名(納品書印字用) */
  name_nouhin: string
  /** 棚卸対象 */
  is_inventory: boolean
  /** 出荷対象 */
  is_shipping: boolean
  /** 直送倉庫 */
  is_direct_delivery: boolean
  /** 表示順 */
  display_order: number
  /** 倉庫拠点ID */
  base_location_id: number

  base_location?: BaseLocation | undefined

  /** システム内部使用フラグ */
  is_system_use: boolean
} & BaseModel

/** 倉庫一括操作対象 */
export type LocationBulkTarget = Location & BulkTarget

/** メッセージ */
export type Message = {
  /** ID */
  id: number
  /** メッセージIDM */
  idm: string
  /** メッセージ区分 */
  message_type_cd1: string
  /** メッセージタイトル */
  title: string
  /** URL */
  url?: string | null | undefined
  /** 画面ID */
  page_id?: number | null | undefined

  page?: Page | undefined
} & BaseModel

/** メッセージグループ */
export type MessageGroup = {
  /** ID */
  id: number
  /** メッセージグループIDM */
  idm: string
  /** メッセージグループ名 */
  name: string
  message_group_user_links?: MessageGroupUserLink[] | undefined
} & BaseModel

/** メッセージグループ一括操作対象 */
export type MessageGroupBulkTarget = MessageGroup & {
  message_group_user_links?: (MessageGroupUserLink & {
    /** メッセージグループID */
    message_group_id?: number | undefined
  } & BulkTarget)[] | undefined
} & BulkTarget

/** メッセージグループ_担当者 */
export type MessageGroupUserLink = {
  /** ID */
  id: number
  /** メッセージグループID */
  message_group_id?: number | undefined

  message_group?: MessageGroup | undefined

  /** 担当者ID */
  user_id: number

  user?: User | undefined

  /** 適用開始日 */
  start_on: string
  /** 適用終了日 */
  end_on: string
} & BaseModel

/** メッセージグループ～担当者紐付一括操作対象 */
export type MessageGroupUserLinkBulkTarget = MessageGroupUserLink & BulkTarget

/** 月別商品別原価単価 */
export type MonthlyCostPrice = {
  /** ID */
  id: number
  /** 年月 */
  year_month: string
  /** 商品ID */
  invent_id: number

  invent?: Invent | undefined

  /** 原価単価 */
  local_unit_price: string
} & BaseModel

/** 名称 */
export type Name = {
  /** ID */
  id: number
  /** 名称区分 */
  name_type_cd1: string
  /** 名称 */
  name: string
} & BaseModel

/** 生産者依頼 */
export type OrderMaker = {
  /** ID */
  id: number
  /** 生産者依頼IDM */
  idm: string
  /** 和文 */
  name_jp?: string | null | undefined
  /** 英文 */
  name_en?: string | null | undefined
  /** 仏文 */
  name_fr?: string | null | undefined
} & BaseModel

/** 生産者依頼一括操作対象 */
export type OrderMakerBulkTarget = OrderMaker & BulkTarget

/** 発注者覚書 */
export type OrderNote = {
  /** ID */
  id: number
  /** 発注者覚書IDM */
  idm: string
  /** 発注者覚書 */
  name?: string | null | undefined
} & BaseModel

/** 生産者依頼一括操作対象 */
export type OrderNoteBulkTarget = OrderNote & BulkTarget

/** 倉庫依頼 */
export type OrderWarehouse = {
  /** ID */
  id: number
  /** 倉庫依頼IDM */
  idm: string
  /** 倉庫依頼 */
  name?: string | null | undefined
  /** 部材手配要フラグ */
  is_need_parts: boolean
} & BaseModel

/** 倉庫依頼一括操作対象 */
export type OrderWarehouseBulkTarget = OrderWarehouse & BulkTarget

/** 画面グループ */
export type PageGroup = {
  /** ID */
  id: number
  /** 画面グループIDM */
  idm: string
  /** 画面グループ名 */
  name: string
  /** 表示順 */
  display_order: number
  pages?: Page[] | undefined
} & BaseModel

/** 画面グループ一括操作対象 */
export type PageGroupBulkTarget = PageGroup & BulkTarget

/** 画面 */
export type Page = {
  /** ID */
  id: number
  /** 画面IDM */
  idm: string
  /** 画面グループID */
  page_group_id: number

  page_group?: PageGroup | undefined

  /** 画面名 */
  name: string
  /** ボタン名 */
  button_name: string
  /** URL */
  url: string
  /** 表示順 */
  display_order: number
} & BaseModel

/** 画面一括操作対象 */
export type PageBulkTarget = Page & BulkTarget

/** 画面リスト */
export type PageList = {
  /** ID */
  id: number
  /** 画面リストIDM */
  idm: string
  /** 画面リスト名 */
  name: string
  /** 検索件数閾値 */
  threshold?: number | null | undefined
} & BaseModel

/** 画面リスト一括操作対象 */
export type PageListBulkTarget = PageList & BulkTarget

/** 支払条件 */
export type PaymentCondition = {
  /** ID */
  id: number
  /** 支払条件IDM */
  idm: string
  /** 支払条件名 */
  name?: string | null | undefined
  /** 支払条件名(英文) */
  name_en?: string | null | undefined
  /** 支払条件名(仏文) */
  name_fr?: string | null | undefined
  /** 輸入・国内区分 */
  import_domestic_cd1?: string | null | undefined
  /** 締日区分 */
  closing_day_type_cd1?: string | null | undefined
  /** 支払月数区分 */
  payment_month_type_cd1?: string | null | undefined
  /** 支払日区分 */
  payment_day_type_cd1?: string | null | undefined
  /** 支払期日起算日条件１区分 */
  payment_base_date1_cd1?: string | null | undefined
  /** 支払期日起算日条件１支払日数 */
  payment_base_date1?: number | null | undefined
  /** 支払期日起算日条件２区分 */
  payment_base_date2_cd1?: string | null | undefined
  /** 支払期日起算日条件２支払日数 */
  payment_base_date2?: number | null | undefined
} & BaseModel

/** 支払条件一括操作対象 */
export type PaymentConditionBulkTarget = PaymentCondition & BulkTarget

/** 原産地呼称 */
export type PlaceOfOriginName = {
  /** ID */
  id: number
  /** 原産地呼称IDM */
  idm: string
  /** 原産地呼称名(和文) */
  name: string
  /** 原産地呼称名(欧文) */
  name_en: string
  /** 原産地呼称名(中文) */
  name_zh?: string | null | undefined
} & BaseModel

/** 原産地呼称一括操作対象 */
export type PlaceOfOriginNameBulkTarget = PlaceOfOriginName & BulkTarget

/** 価格グループ */
export type PriceGroup = {
  /** ID */
  id: number
  /** 価格グループIDM */
  idm: string
  /** 価格グループ名 */
  name: string
  /** 備考 */
  note?: string | null | undefined
} & BaseModel

/** 価格グループ一括操作対象 */
export type PriceGroupBulkTarget = PriceGroup & BulkTarget

/** プリンター */
export type Printer = {
  /** ID */
  id: number
  /** SVFプリンターID */
  svf_printer_id?: string | null | undefined
  /** プリンター名 */
  name?: string | null | undefined
  /** プリンターラベル */
  label?: string | null | undefined
  /** 備考 */
  description?: string | null | undefined
} & BaseModel

/** 入荷原価 */
export type PurchaseCost = {
  /** ID */
  id: number
  /** 取込日 */
  imported_on: string
  /** 船積オーダー明細ID */
  shipping_order_detail_id: number

  shipping_order_detail?: ShippingOrderDetail | undefined

  /** 在庫計上実績ID */
  purchase_result_id: number

  purchase_result?: PurchaseResult | undefined

  /** 原価総額（円貨） */
  amount?: string | null | undefined
  /** 原価単価（円貨） */
  unit_price?: string | null | undefined
  /** 船積オーダーID */
  shipping_order_id?: number | null | undefined

  shipping_order?: ShippingOrder | undefined

  /** 船積オーダーNo */
  no?: string | null | undefined
  /** 船積行No */
  line_no?: number | null | undefined
  /** 許可記号 */
  mark?: string | null | undefined
  /** 商品ID */
  invent_id?: number | null | undefined

  invent?: Invent | undefined

  /** 品番 */
  invent_idm?: string | null | undefined
  /** 計上総バラ数 */
  total_count?: number | null | undefined
  /** 商品金額JPY */
  invent_amount_jpy?: string | null | undefined
  /** 原価計算レート */
  rate?: string | null | undefined
  /** 海上運賃支払額JPY */
  marine_fare_jpy?: string | null | undefined
  /** 海上保険料支払額JPY */
  marine_insurance_jpy?: string | null | undefined
  /** 関税支払額 */
  customs_amount?: string | null | undefined
  /** 酒税支払額 */
  liquor_tax_amount?: string | null | undefined
  /** 原価消費税支払額 */
  consumption_tax_amount?: string | null | undefined
  /** 地方消費税支払額 */
  local_consumption_tax_amount?: string | null | undefined
  /** 港湾費用 */
  harbour_amount?: string | null | undefined
  /** 乙仲費用支払額 */
  shipping_brokers_amount?: string | null | undefined
  /** コンテナDEVAN料 */
  devan_amount?: string | null | undefined
  /** 通関前保管料 */
  customs_storage_amount?: string | null | undefined
  /** 検品作業料 */
  check_amount?: string | null | undefined
  /** その他原価 */
  other_amount?: string | null | undefined
  /** 海上運賃フラグ */
  is_marine: boolean
  /** 見積運賃 */
  estimated_fare?: string | null | undefined
  /** 価格設定時運賃テーブル年度 */
  fare_year?: string | null | undefined
} & BaseModel

/** 入荷原価:原価計算内容、計算反映結果を保持する。1.1次から使用。1.0次入荷原価(purchase_costs)のデータは当トランに引き継ぐ。 */
export type PurchasePrice = {
  /** ID */
  id: number
  /** 船積オーダーID */
  shipping_order_id: number | null

  shipping_order?: ShippingOrder | undefined

  /** 船積オーダーNo */
  display_no: string | null
  /** 許可記号 */
  mark: string | null
  /** 許可記号状況 */
  shipping_order_status_cd1: string | null
  /** 原価計算ステータス */
  cost_status_cd1: string
  /** 原価計算メッセージ */
  cost_message?: string | null | undefined
  /** 原価計算内部備考 */
  cost_note?: string | null | undefined
  /** 計算日 */
  calculated_on: string | null
  /** 原価反映日 */
  cost_updated_on?: string | null | undefined
  /** 通関許可日 */
  customs_release_on: string | null
  /** 通関レート通貨1 */
  custom_currency1_cd1?: string | null | undefined
  /** 通関レート1 */
  custom_rate1?: string | null | undefined
  /** 通関レート通貨2 */
  custom_currency2_cd1?: string | null | undefined
  /** 通関レート2 */
  custom_rate2?: string | null | undefined
  /** 通関レート通貨3 */
  custom_currency3_cd1?: string | null | undefined
  /** 通関レート3 */
  custom_rate3?: string | null | undefined
  /** 商品代金(JPY) */
  local_price_jpy: string | null
  /** 運賃(JPY) */
  fare_amount_jpy: string | null
  /** 保険(JPY) */
  insurance_amount_jpy: string | null
  /** 港湾費用(JPY) */
  harbour_amount_jpy: string | null
  /** 乙仲費用(JPY) */
  shipping_brokers_amount_jpy: string | null
  /** 関税(JPY) */
  customs_amount_jpy: string | null
  /** 酒税(JPY) */
  liquor_tax_amount_jpy: string | null
  /** 消費税(JPY) */
  consumption_tax_amount_jpy: string | null
  /** 地方消費税(JPY) */
  local_consumption_tax_amount_jpy: string | null
  /** コンテナDEVAN料(JPY) */
  devan_amount_jpy: string | null
  /** 通関前保管料(JPY) */
  customs_storage_amount_jpy: string | null
  /** 検品作業料(JPY) */
  check_amount_jpy: string | null
  /** 容量按分有無 */
  is_distribute_volume: boolean | null
  /** 数量按分有無 */
  is_distribute_count: boolean | null
  /** 仕入金額調整実行年月 */
  purchase_adj_on?: string | null | undefined
  purchase_price_details?: PurchasePriceDetail[] | undefined
  cost_taxes?: CostTax[] | undefined
} & BaseModel

/** 入荷原価一括操作対象 */
export type PurchasePriceBulkTarget = PurchasePrice & {
  purchase_price_details?: PurchasePriceDetailBulkTarget[] | undefined
  cost_taxes?: CostTaxBulkTarget[] | undefined
} & BulkTarget

/** 入荷原価明細:原価計算内容、計算反映結果を保持する。1.1次から使用。1.0次入荷原価(purchase_costs)のデータは当トランに引き継ぐ。 */
export type PurchasePriceDetail = {
  /** ID */
  id: number
  /** 入荷原価ヘッダID */
  purchase_price_id: number | null

  purchase_price?: PurchasePrice | undefined

  /** 船積オーダー明細ID */
  shipping_order_detail_id: number | null

  shipping_order_detail?: ShippingOrderDetail | undefined

  /** 在庫計上実績ID */
  purchase_result_id?: number | null | undefined

  purchase_result?: PurchaseResult | undefined

  /** 原価総額（円貨） */
  cost_price_jpy: string
  /** 原価単価（円貨） */
  cost_unit_price_jpy: string
  /** 船積行No */
  line_no: number | null
  /** 商品代金(JPY) */
  purchase_amount_jpy: string
  /** 容量按分追加費用 */
  distribute_volume_cost: string
  /** 数量按分追加費用 */
  distribute_count_cost: string
  /** 容量按分フラグ */
  is_distribute: boolean
  /** インボイス発行者ID */
  invoice_vendor_id?: number | null | undefined

  invoice_vendor?: Vendor | undefined

  /** フレイトID */
  freight_id?: number | null | undefined

  freight?: Freight | undefined

  /** 最終仕入単価反映フラグ */
  is_update: boolean
  purchase_price_detail_breakdowns?: PurchasePriceDetailBreakdown[] | undefined
} & BaseModel

/** 入荷原価明細一括操作対象 */
export type PurchasePriceDetailBulkTarget = PurchasePriceDetail & {
  purchase_price_detail_breakdowns?: PurchasePriceDetailBreakdownBulkTarget[] | undefined
} & BulkTarget

/** 入荷原価明細内訳:原価計算内容、計算反映結果を保持する。1.1次から使用。1.0次入荷原価(purchase_costs)のデータは当トランに引き継ぐ。 */
export type PurchasePriceDetailBreakdown = {
  /** ID */
  id: number
  /** 入荷原価明細ID */
  purchase_price_detail_id: number | null

  purchase_price_detail?: PurchasePriceDetail | undefined

  /** 商品ID */
  invent_id: number

  invent?: Invent | undefined

  /** 品番 */
  invent_idm: string
  /** 容量(ml) */
  volume: number
  /** 登録入数 */
  quantity_per_case: number
  /** 計上ケース数 */
  record_case_count: number
  /** 計上バラ数 */
  record_bottle_count: number
  /** 計上総バラ数 */
  total_count: number
  /** 通貨 */
  currency_cd1: string
  /** 現地単価(外貨) */
  local_unit_price: string
  /** 支払日 */
  paid_on?: string | null | undefined
  /** 原計レート */
  cost_rate?: string | null | undefined
  /** 現地単価(JPY) */
  local_unit_price_jpy: string
  /** 運賃(JPY) */
  fare_amount_jpy: string
  /** 保険(JPY) */
  insurance_amount_jpy: string
  /** 港湾費用(JPY) */
  harbour_amount_jpy: string
  /** 乙仲費用(JPY) */
  shipping_brokers_amount_jpy: string
  /** コンテナDEVAN料(JPY) */
  devan_amount_jpy: string
  /** 通関前保管料(JPY) */
  customs_storage_amount_jpy: string
  /** 検品作業料等(JPY) */
  check_amount_jpy: string
  /** 現地価格_通関(JPY) */
  local_price_customs_jpy: string
  /** 運賃_通関(JPY) */
  fare_amount_customs_jpy: string
  /** 保険_通関(JPY) */
  insurance_amount_customs_jpy: string
  /** 原価税ID */
  cost_tax_id: number

  cost_tax?: CostTax | undefined

  /** 関税ID */
  customs_duty_id?: number | null | undefined

  customs_duty?: CustomsDuty | undefined

  /** 関税(JPY) */
  customs_duty_jpy: string
  /** 酒税ID */
  liquor_tax_id?: number | null | undefined

  liquor_tax?: LiquorTax | undefined

  /** 酒税(JPY) */
  liquor_tax_jpy: string
  /** 消費税(JPY) */
  consumption_tax_amount_jpy: string
  /** 地方消費税(JPY) */
  local_consumption_tax_amount_jpy: string
  /** 自動計算時_現地単価(外貨) */
  calc_local_unit_price: string
  /** 自動計算時_容量(ml) */
  calc_volume: number
  /** 自動計算時_運賃_通関(JPY) */
  calc_fare_amount_customs_jpy: string
  /** 自動計算時_保険_通関(JPY) */
  calc_insurance_amount_customs_jpy: string
  /** 自動計算時_関税ID */
  calc_customs_duty_id?: number | null | undefined
  /** 自動計算時_関税(JPY) */
  calc_customs_duty_jpy: string
  /** 自動計算時_酒税ID */
  calc_liquor_tax_id?: number | null | undefined
  /** 自動計算時_酒税(JPY) */
  calc_liquor_tax_jpy: string
  /** 自動計算時_消費税額(JPY) */
  calc_consumption_tax_amount_jpy: string
  /** 自動計算時_地方消費税額(JPY) */
  calc_local_consumption_tax_amount_jpy: string
  /** 自動生成フラグ */
  auto_generated: boolean
  /** 価格単位CD */
  price_unit_cd1: string | null
  /** 関税適用区分 */
  customs_duty_application_cd1?: string | null | undefined
} & BaseModel

/** 入荷原価明細内訳一括操作対象 */
export type PurchasePriceDetailBreakdownBulkTarget = PurchasePriceDetailBreakdown & BulkTarget

/** 帳票 */
export type Report = {
  /** ID */
  id: number
  /** 帳票IDM */
  idm?: string | null | undefined
  /** 帳票名 */
  name?: string | null | undefined
  /** 様式ファイルパス */
  form?: string | null | undefined
  /** 様式ファイルパス(鏡) */
  cover_form?: string | null | undefined
  /** Excel出力可 */
  excel_enabled: boolean
  /** PDF出力可 */
  pdf_enabled: boolean
  /** 印刷可 */
  print_enabled: boolean
} & BaseModel

/** 帳票一括操作対象 */
export type ReportBulkTarget = Report & BulkTarget

/** シール */
export type Seal = {
  /** ID */
  id: number
  /** シールIDM */
  idm: string
  /** シール区分 */
  sticker_type_cd1?: string | null | undefined
  /** レイアウト名 */
  layout_name?: string | null | undefined
  /** 函バーコード区分 */
  sticker_layout_mod_type_cd1?: string | null | undefined
  /** レイアウト名出力除外FLG */
  is_not_name_output: boolean
} & BaseModel

/** シール一括操作対象 */
export type SealBulkTarget = Seal & BulkTarget

/** 検索 */
export type Search = {
  /** ID */
  id: number
  /** 検索IDM */
  idm: string
  /** 検索名 */
  name: string
  /** 検索文 */
  content: string
  /** 備考 */
  note?: string | null | undefined
  search_authorities?: SearchAuthority[] | undefined
  search_details?: SearchDetail[] | undefined
} & BaseModel

/** 検索一括操作対象 */
export type SearchBulkTarget = Search & {
  search_authorities?: (SearchAuthority & BulkTarget)[] | undefined
  search_details: (SearchDetail & BulkTarget)[]
} & BulkTarget

/** 検索権限 */
export type SearchAuthority = {
  /** ID */
  id: number
  /** チームID */
  team_id: number

  team?: Team | undefined

  /** 検索ID */
  search_id: number

  search?: Search | undefined

  /** 許可 */
  can_execute: boolean
} & BaseModel

/** 検索明細 */
export type SearchDetail = {
  /** ID */
  id: number
  /** 検索ID */
  search_id?: number | undefined

  search?: Search | undefined

  /** 物理名 */
  physic_name?: string | null | undefined
  /** 論理名 */
  logic_name?: string | null | undefined
  /** データ型 */
  data_type?: string | null | undefined
  /** 列順 */
  col_order?: number | null | undefined
  /** 行順 */
  row_order?: number | null | undefined
  /** 検索条件フラグ */
  is_cond: boolean
  /** 検索条件初期値 */
  init_value?: string | null | undefined
  /** 内部備考 */
  note?: string | null | undefined
} & BaseModel

/** 船社 */
export type ShipCompany = {
  /** ID */
  id: number
  /** 船社IDM */
  idm: string
  /** 船社名 */
  name?: string | null | undefined
  /** 内部備考 */
  note?: string | null | undefined
} & BaseModel

/** 船社一括操作対象 */
export type ShipCompanyBulkTarget = ShipCompany & BulkTarget

/** 船積オーダーラベル手配一括操作対象 */
export type ShippingOrderLabelBulkTarget = {
  /** ラベル外注フラグ */
  is_outsourcing?: boolean | null | undefined
  /** シール手配備考 */
  note?: string | null | undefined
  /** ラベル書出日 */
  output_on?: string | null | undefined
} & BulkTarget & BaseModel

/** 特別単価 */
export type SpecialPrice = {
  /** ID */
  id: number
  /** 特別単価IDM */
  idm: string | null
  /** 価格グループID */
  price_group_id?: number | null | undefined

  price_group?: PriceGroup | undefined

  /** 得意先ID */
  customer_id?: number | null | undefined

  customer?: Customer | undefined

  /** ピッキング分類CD */
  picking_cd1?: string | null | undefined
  /** 戦略分類CD */
  strategy_type_cd1?: string | null | undefined
  /** 商品ID */
  invent_id?: number | null | undefined

  invent?: Invent | undefined

  /** 通貨CD */
  currency_cd1: string
  /** 特別単価区分CD */
  special_price_type_cd1: string
  /** BT数量条件 */
  bt_requirement_volume: number
  /** CS数量条件 */
  cs_requirement_volume: number
  /** BT特別単価設定 */
  bt_adjusted_value: string
  /** CS特別単価設定 */
  cs_adjusted_value: string
  /** 特別単価基準金額CD */
  special_price_reference_cd1?: string | null | undefined
  /** 小数処理区分CD */
  rounding_type_cd1?: string | null | undefined
  /** 小数処理桁 */
  decimal_place?: number | null | undefined
  /** 適用開始日 */
  start_on: string
  /** 適用終了日 */
  end_on: string
  /** 備考 */
  note?: string | null | undefined
  special_price_exceptions?: SpecialPriceException[] | undefined

  updated_user?: User | undefined

  latest_special_price?: SpecialPrice | undefined
} & BaseModel

/** 特別単価除外 */
export type SpecialPriceException = {
  /** ID */
  id: number
  /** 特別単価除外IDM */
  idm: string | null
  /** 特別単価ID */
  special_price_id?: number | null | undefined

  special_price?: SpecialPrice | undefined

  /** 価格グループID */
  price_group_id?: number | null | undefined

  price_group?: PriceGroup | undefined

  /** 得意先ID */
  customer_id?: number | null | undefined

  customer?: Customer | undefined

  /** 戦略分類CD */
  strategy_type_cd1?: string | null | undefined
  /** 商品ID */
  invent_id?: number | null | undefined

  invent?: Invent | undefined

  /** 生産者ID */
  vendor_id?: number | null | undefined

  vendor?: Vendor | undefined

  /** 原産国ID */
  country_of_origin_id?: number | null | undefined

  country_of_origin?: CountryOfOrigin | undefined

  /** 備考 */
  note?: string | null | undefined
} & BaseModel

/** 特別単価一括操作対象 */
export type SpecialPriceBulkTarget = SpecialPrice & {
  special_price_exceptions?: (SpecialPriceException & BulkTarget)[] | undefined
} & BulkTarget

/** チーム */
export type Team = {
  /** ID */
  id: number
  /** チームIDM */
  idm: string
  /** チーム名 */
  name: string
  /** チーム名(略称) */
  name_abbr?: string | null | undefined
  /** 部署CD */
  post_cd1: string
  /** 拠点CD */
  business_location_cd1: string
  /** TEL */
  tel?: string | null | undefined
  /** FAX */
  fax?: string | null | undefined
  team_user_links?: TeamUserLink[] | undefined
} & BaseModel

/** チーム一括操作対象 */
export type TeamBulkTarget = Team & BulkTarget

/** 担当者 */
export type User = {
  /** ID */
  id: number
  /** 担当者IDM */
  idm?: string | null | undefined
  /** 担当者名(和文) */
  name: string
  /** 担当者名(欧文) */
  name_en?: string | null | undefined
  /** メールアドレス */
  email: string
  /** 署名(和文) */
  email_sign_jp?: string | null | undefined
  /** 署名(英文) */
  email_sign_en?: string | null | undefined
  /** オブジェクトGUID */
  guid?: string | null | undefined
  /** ドメイン */
  domain?: string | null | undefined
  /** プリンタID */
  printer_id?: number | null | undefined

  printer?: Printer | undefined

  team_user_links?: TeamUserLink[] | undefined
  assistants?: Assistant[] | undefined
  page_user_links?: PageUserLink[] | undefined
  page_list_user_links?: PageListUserLink[] | undefined
  message_group_user_links?: MessageGroupUserLink[] | undefined
  batch_authorities?: BatchAuthority[] | undefined
  available_batch_parameters?: BatchParameter[] | undefined
} & BaseModel

/** チーム_担当者 */
export type TeamUserLink = {
  /** ID */
  id: number
  /** 担当者ID */
  user_id?: number | undefined

  user?: User | undefined

  /** チームID */
  team_id: number

  team?: Team | undefined

  /** 変更日 */
  change_on: string
} & BaseModel

/** チーム担当者一括操作対象 */
export type TeamUserLinkBulkTarget = TeamUserLink & BulkTarget

/** 担当アシスタント */
export type Assistant = {
  /** ID */
  id: number
  /** 担当者ID */
  user_id?: number | undefined

  user?: User | undefined

  /** アシスタントID */
  assistant_user_id: number

  assistant_user?: User | undefined

  /** サブアシスタントID */
  sub_assistant_user_id?: number | null | undefined

  sub_assistant_user?: User | undefined

  /** 適用開始日 */
  start_on: string
  /** 適用終了日 */
  end_on: string
} & BaseModel

/** 担当アシスタント一括操作対象 */
export type AssistantBulkTarget = Assistant & BulkTarget

/** 画面制御 */
export type PageUserLink = {
  /** ID */
  id: number
  /** 画面ID */
  page_id: number

  page?: Page | undefined

  /** 担当者ID */
  user_id?: number | undefined

  user?: User | undefined

  /** 権限区分 */
  page_auth_cd1: string
} & BaseModel

/** 画面制御一括操作対象 */
export type PageUserLinkBulkTarget = PageUserLink & BulkTarget

/** 画面リスト制御 */
export type PageListUserLink = {
  /** ID */
  id: number
  /** 画面リストID */
  page_list_id: number

  page_list?: PageList | undefined

  /** 担当者ID */
  user_id?: number | undefined

  user?: User | undefined

  /** 画面リスト設定 */
  page_list_json: string
} & BaseModel

/** 担当者一括操作対象 */
export type UserBulkTarget = User & {
  team_user_links?: (TeamUserLink & BulkTarget)[] | undefined
  assistants?: (Assistant & BulkTarget)[] | undefined
  page_user_links?: (PageUserLink & BulkTarget)[] | undefined
  page_list_user_links?: (PageListUserLink & BulkTarget)[] | undefined
  batch_authorities?: (BatchAuthority & BulkTarget)[] | undefined
} & BulkTarget

/** 仕入先 */
export type Vendor = {
  /** ID */
  id: number
  /** 仕入先IDM */
  idm: string | null
  /** 原産国ID */
  country_of_origin_id?: number | null | undefined

  country_of_origin?: CountryOfOrigin | undefined

  /** 地方ID */
  wine_area_id?: number | null | undefined

  wine_area?: WineArea | undefined

  /** 地区ID */
  area_id?: number | null | undefined

  area?: Area | undefined

  /** 村ID */
  village_id?: number | null | undefined

  village?: Village | undefined

  /** 会社名(正式/和文) */
  name_jp?: string | null | undefined
  /** 会社名(システム検索用) */
  name_system?: string | null | undefined
  /** 会社名(正式/欧文) */
  name_en?: string | null | undefined
  /** 会社名(中国語) */
  name_zh?: string | null | undefined
  /** 会社名(略称/和文) */
  name_jp_abbr: string
  /** 会社名(略称/欧文) */
  name_en_abbr?: string | null | undefined
  /** 会社名(検索用カナ) */
  name_kana?: string | null | undefined
  /** エージェントID */
  agent_vendor_id?: number | null | undefined

  agent_vendor?: Vendor | undefined

  /** インボイス発行者ID */
  invoice_vendor_id?: number | null | undefined

  invoice_vendor?: Vendor | undefined

  /** インボイス発行者変換名 */
  invoice_vendor_change_name?: string | null | undefined
  /** TRADE TERM(集荷依頼)CD */
  price_system_cd1?: string | null | undefined
  /** DELIVERY(集荷依頼書) */
  delivery?: string | null | undefined
  /** 備考 */
  note?: string | null | undefined
  /** 主要銘柄名 */
  main_brand?: string | null | undefined
  /** 主要銘柄名(カナ) */
  main_brand_kana?: string | null | undefined
  /** ANNEX */
  is_annex: boolean
  /** 通貨CD */
  currency_cd1?: string | null | undefined
  /** 業態区分CD */
  gyotai_type_cd1?: string | null | undefined
  /** 書類言語区分CD */
  doc_lang_type_cd1?: string | null | undefined
  /** 取引有無 */
  is_account: boolean
  /** 仕入ロット */
  warehouse_lot?: string | null | undefined
  /** 国内発注書送付方法 */
  purchase_send_type_cd1?: string | null | undefined
  /** 支払条件ID */
  payment_condition_id?: number | null | undefined

  payment_condition?: PaymentCondition | undefined

  /** 海外-口座番号 */
  foreign_bank_account_no?: string | null | undefined
  /** 海外-口座名義(PAYEE) */
  foreign_bank_account_holder?: string | null | undefined
  /** 海外-受取人住所 */
  foreign_bank_account_address?: string | null | undefined
  /** 海外-受取人国名 */
  foreign_bank_account_country_name_bank_cd1?: string | null | undefined
  /** 海外-銀行名 */
  foreign_bank_name?: string | null | undefined
  /** 海外-支店名(BRANCH) */
  foreign_bank_branch?: string | null | undefined
  /** 海外-銀行コード(SWIFT CODE) */
  foreign_bank_swift?: string | null | undefined
  /** 海外-銀行国名 */
  foreign_country_name_bank_cd1?: string | null | undefined
  /** 海外-銀行住所 */
  foreign_bank_address?: string | null | undefined
  /** 海外-経由銀行名 */
  foreign_via_bank_name?: string | null | undefined
  /** 海外-経由支店名 */
  foreign_via_bank_branch?: string | null | undefined
  /** 海外-経由銀行住所 */
  foreign_via_bank_address?: string | null | undefined
  /** 海外-経由国名 */
  foreign_via_country_name_bank_cd1?: string | null | undefined
  /** 海外-経理備考 */
  foreign_accounting_note?: string | null | undefined
  /** 国内-銀行コード */
  domestic_bank_cd1?: string | null | undefined
  /** 国内-銀行支店コード */
  domestic_bank_branch_cd2?: string | null | undefined
  /** 国内-口座種類CD */
  domestic_bank_account_type_cd1?: string | null | undefined
  /** 国内-口座番号 */
  domestic_bank_account_no?: string | null | undefined
  /** 国内-口座名義(カナ) */
  domestic_bank_account_holder_kana?: string | null | undefined
  /** 国内-口座名義 */
  domestic_bank_account_holder?: string | null | undefined
  /** 国内-経理備考 */
  domestic_accounting_note?: string | null | undefined
  /** 郵便番号 */
  zip?: string | null | undefined
  /** 住所 */
  address?: string | null | undefined
  /** 住所(中国語) */
  address_zh?: string | null | undefined
  /** TEL */
  tel?: string | null | undefined
  /** FAX */
  fax?: string | null | undefined
  /** メモ */
  address_note?: string | null | undefined
  /** 集荷先-郵便番号 */
  pickup_zip?: string | null | undefined
  /** 集荷先-住所 */
  pickup_address?: string | null | undefined
  /** 集荷先-TEL */
  pickup_tel?: string | null | undefined
  /** 集荷先-FAX */
  pickup_fax?: string | null | undefined
  /** 集荷先-メモ */
  pickup_address_note?: string | null | undefined
  /** 顧客グループCD */
  client_group_cd1?: string | null | undefined
  /** 売上税グループCD */
  sales_tax_type_cd1?: string | null | undefined
  /** 直送連絡先TEL */
  direct_shipping_tel?: string | null | undefined
  /** 直送連絡先FAX */
  direct_shipping_fax?: string | null | undefined
  /** 直送連絡先担当者名 */
  direct_shipping_staff_name?: string | null | undefined
  /** サマリー対応フラグ */
  is_summary: boolean
  /** 適格事業者登録番号 */
  registration_number?: string | null | undefined
  /** 適格事業者登録年月 */
  registered_month?: string | null | undefined
  vendor_staffs?: VendorStaff[] | undefined
} & BaseModel

/** 仕入先担当者 */
export type VendorStaff = {
  /** ID */
  id: number
  /** 仕入先ID */
  vendor_id?: number | undefined

  vendor?: Vendor | undefined

  /** 担当者名 */
  name?: string | null | undefined
  /** 担当者名(カナ) */
  name_kana?: string | null | undefined
  /** 役割 */
  client_role_cd1?: string | null | undefined
  /** 肩書 */
  title?: string | null | undefined
  /** 担当者TEL */
  tel?: string | null | undefined
  /** 担当者E_MAIL */
  email?: string | null | undefined
  /** メイン担当者フラグ */
  is_leader?: boolean | null | undefined
  /** 表示順 */
  display_order?: number | null | undefined
  /** 備考 */
  note?: string | null | undefined
} & BaseModel

/** 仕入先一括操作対象 */
export type VendorBulkTarget = Vendor & {
  vendor_staffs: (VendorStaff & BulkTarget)[]
} & BulkTarget

/** 仕入先担当者マスタ一括操作対象 */
export type VendorStaffBulkTarget = VendorStaff & BulkTarget

/** 村 */
export type Village = {
  /** ID */
  id: number
  /** 村IDM */
  idm: string
  /** 村名(和文) */
  name: string
  /** 村名(欧文) */
  name_en: string
} & BaseModel

/** 村一括操作対象 */
export type VillageBulkTarget = Village & BulkTarget

/** 地方 */
export type WineArea = {
  /** ID */
  id: number
  /** 地方IDM */
  idm: string
  /** 地方名(和文) */
  name: string
  /** 地方名(欧文) */
  name_en: string
  /** 地方名(中国語) */
  name_zh?: string | null | undefined
  /** 地方並び順 */
  display_order: number
} & BaseModel

/** 地方一括操作対象 */
export type WineAreaBulkTarget = WineArea & BulkTarget

/** バッチ履歴 */
export type BatchHistory = {
  /** ID */
  id: number
  /** 担当者ID */
  user_id?: number | null | undefined

  user?: User | undefined

  /** バッチパラメータID */
  batch_parameter_id?: number | null | undefined

  batch_parameter?: BatchParameter | undefined

  /** バッチスケジュールID */
  batch_schedule_id?: number | null | undefined

  batch_schedule?: BatchSchedule | undefined

  /** 開始日時 */
  started_at: string
  /** 終了日時 */
  ended_at?: string | null | undefined
  /** 進捗率 */
  progress?: string | null | undefined
  /** メッセージID */
  message_id?: number | null | undefined

  message?: Message | undefined

  /** メッセージ詳細 */
  message_detail?: string | null | undefined
  /** 再処理可能 */
  is_restartable: boolean
  /** 再処理日時 */
  restarted_at?: string | null | undefined
  user_logs?: UserLog[] | undefined
} & BaseModel

/** 帳票履歴 */
export type ReportHistory = {
  /** ID */
  id: number
  /** 担当者ID */
  user_id?: number | null | undefined

  user?: User | undefined

  /** 帳票ID */
  report_id: number

  report?: Report | undefined

  /** プリンターID */
  printer_id?: number | null | undefined

  printer?: Printer | undefined

  /** 出力形式 */
  output_type_cd1: string
  /** 入力ファイル名 */
  input_file: string
  /** 入力フォルダパス */
  input_folder: string
  /** 出力ディスク */
  output_disk?: string | null | undefined
  /** 出力ファイル名 */
  output_file: string
  /** 出力フォルダパス */
  output_folder: string
  /** 開始日時 */
  started_at: string
  /** 終了日時 */
  ended_at?: string | null | undefined
  /** レスポンスコード */
  response_code?: string | null | undefined
  /** レスポンスLocation */
  response_location?: string | null | undefined
  /** メッセージID */
  message_id?: number | null | undefined

  message?: Message | undefined

  /** メッセージ詳細 */
  message_detail?: string | null | undefined
  /** 再処理可能 */
  is_restartable: boolean
  /** 再処理日時 */
  restarted_at?: string | null | undefined

  user_log?: UserLog | undefined
} & BaseModel

/** メッセージ履歴 */
export type MessageHistory = {
  /** ID */
  id: number
  /** 担当者ID */
  user_id?: number | null | undefined

  user?: User | undefined

  /** 送信元担当者ID */
  from_user_id?: number | null | undefined

  from_user?: User | undefined

  /** 送信日時 */
  sent_at?: string | null | undefined
  /** メッセージID */
  message_id?: number | null | undefined

  message?: Message | undefined

  /** メッセージパラメータ */
  message_parameter?: string | null | undefined
  /** メッセージ詳細 */
  message_detail?: string | null | undefined

  user_log?: UserLog | undefined
} & BaseModel

/** 利用者ログ */
export type UserLog = {
  /** ID */
  id: number
  /** 担当者ID */
  user_id?: number | null | undefined

  user?: User | undefined

  /** 帳票履歴ID */
  report_history_id?: number | null | undefined

  report_history?: ReportHistory | undefined

  /** バッチ履歴ID */
  batch_history_id?: number | null | undefined

  batch_history?: BatchHistory | undefined

  /** メッセージ履歴ID */
  message_history_id?: number | null | undefined

  message_history?: MessageHistory | undefined

  /** 閲覧日時 */
  seen_at?: string | null | undefined
} & BaseModel

/** 利用者ログ一括操作対象 */
export type UserLogBulkTarget = UserLog & BulkTarget

/** 口座振替データ受信 */
export type AccountTransferReceipt = {
  /** ID */
  id: number
  /** 入金先ID */
  deposit_customer_id?: number | null | undefined

  deposit_customer?: Customer | undefined

  /** 入金実績ID */
  deposit_result_id?: number | null | undefined

  deposit_result?: DepositResult | undefined

  /** 入金日 */
  deposit_on?: string | null | undefined
  /** 入金方法 */
  deposit_type_cd1?: string | null | undefined
  /** 通貨CD */
  currency_cd1?: string | null | undefined
  /** 入金額 */
  deposit_amount?: string | null | undefined
  /** 処理済フラグ */
  is_completed: boolean
  /** 銀行CD */
  bank_code?: string | null | undefined
  /** 銀行名 */
  bank_name?: string | null | undefined
  /** 支店CD */
  bank_branch_code?: string | null | undefined
  /** 支店名 */
  bank_branch_name?: string | null | undefined
  /** 口座種類 */
  bank_account_type_cd1?: string | null | undefined
  /** 口座番号 */
  bank_account_num?: string | null | undefined
  /** 口座名義人名 */
  bank_account_holder?: string | null | undefined
  /** 口座振替依頼明細ID */
  account_transfer_request_detail_id?: number | null | undefined

  account_transfer_request_detail?: AccountTransferRequestDetail | undefined

  /** 入金予定ID */
  deposit_schedule_id?: number | null | undefined

  deposit_schedule?: DepositSchedule | undefined

  /** 新規コード */
  new_code?: string | null | undefined
  /** 振替結果コード */
  bank_transfer_result_cd1?: string | null | undefined
} & BaseModel

/** 口座振替データ受信一括操作対象 */
export type AccountTransferReceiptBulkTarget = AccountTransferReceipt & BulkTarget

/** 口座振替データ受信入金登録操作対象 */
export type AccountTransferReceiptDepositTarget = AccountTransferReceipt & {
  deposit_customer?: {
    /** 入金先ID */
    id: number
    /** 入金先IDM */
    idm: string
  } | undefined
} & BulkTarget

/** 口座振替依頼明細 */
export type AccountTransferRequestDetail = {
  /** ID */
  id: number
  /** 口座振替依頼ID */
  account_transfer_request_id?: number | null | undefined

  account_transfer_request?: AccountTransferRequest | undefined

  /** 入金予定ID */
  deposit_schedule_id?: number | null | undefined

  deposit_schedule?: DepositSchedule | undefined

  /** 振替額 */
  amount?: string | null | undefined
  /** 口座種類 */
  bank_account_type_cd1?: string | null | undefined
  /** 口座番号 */
  number?: string | null | undefined
  /** 預金者名 */
  holder?: string | null | undefined
  /** 預金者名カナ */
  holder_kana?: string | null | undefined
  /** 委託者CD */
  consignor_cd?: string | null | undefined
  /** 委託者名 */
  consignor?: string | null | undefined
  /** 顧客番号 */
  customer_no?: string | null | undefined
  /** 対象外フラグ */
  is_not_target: boolean
  /** 合計請求額 */
  billing_amount?: string | null | undefined
  /** 銀行CD */
  bank_cd1?: string | null | undefined
  /** 銀行名カナ */
  bank_kana?: string | null | undefined
  /** 銀行支店CD */
  bank_branch_cd1?: string | null | undefined
  /** 銀行支店名カナ */
  bank_branch_kana?: string | null | undefined
  /** 入金額 */
  deposit_amount?: string | null | undefined
  /** 請求残額 */
  bill_balance?: string | null | undefined
  /** 請求残額 */
  difference_amount?: string | null | undefined
} & BaseModel

/** 口座振替依頼明細一括操作対象 */
export type AccountTransferRequestDetailBulkTarget = AccountTransferRequestDetail & BulkTarget

/** 口座振替依頼 */
export type AccountTransferRequest = {
  /** ID */
  id: number
  /** 振替伝送No */
  no?: string | null | undefined
  /** 入金予定日 */
  will_deposit_on?: string | null | undefined
  /** 振替日 */
  transfer_on?: string | null | undefined
  /** 出力日時 */
  output_at?: string | null | undefined
  /** ファイル名 */
  file_name?: string | null | undefined
  /** Backupファイル名 */
  backup_name?: string | null | undefined
  /** 作成件数 */
  count?: number | null | undefined
  /** 合計金額 */
  amount?: string | null | undefined
  /** ステータス */
  is_completed: boolean
  account_transfer_request_details?: AccountTransferRequestDetail[] | undefined
} & BaseModel

/** 口座振替依頼一括操作対象 */
export type AccountTransferRequestBulkTarget = AccountTransferRequest & {
  account_transfer_request_details: (AccountTransferRequestDetail & BulkTarget)[]
} & BulkTarget

/** 振込データ受信一括操作対象 */
export type BankTransferReceiptBulkTarget = BankTransferReceipt & BulkTarget

/** 振込データ受信入金登録操作対象 */
export type BankTransferReceiptDepositTarget = BankTransferReceipt & {
  deposit_customer?: {
    /** 入金先ID */
    id: number
    /** 入金先IDM */
    idm: string
  } | undefined
} & BulkTarget

/** 代引きデータ受信一括操作対象 */
export type CashOnDeliveryBulkTarget = {
  sagawa_delivery_detail?: (SagawaDeliveryDetail & BulkTarget)[] | undefined
  yamato_delivery_detail?: (YamatoDeliveryDetail & BulkTarget)[] | undefined
}

/** 代引きデータ受信入金登録操作対象 */
export type CashOnDeliveryDepositTarget = {
  sagawa_delivery_detail?: (SagawaDeliveryDetail & {
    deposit_customer?: {
      /** 入金先ID */
      id: number
      /** 入金先IDM */
      idm: string
    } | undefined
  } & BulkTarget)[] | undefined
  yamato_delivery_detail?: (YamatoDeliveryDetail & {
    deposit_customer?: {
      /** 入金先ID */
      id: number
      /** 入金先IDM */
      idm: string
    } | undefined
  } & BulkTarget)[] | undefined
}

/** 追加支払明細 */
export type AdditionalPayment = {
  /** ID */
  id: number
  /** 支払実績ID */
  payment_result_id?: number | null | undefined

  payment_result?: PaymentResult | undefined

  /** 負担部門ID */
  team_id?: number | null | undefined

  team?: Team | undefined

  /** 勘定科目ID */
  account_title_id?: number | null | undefined

  account_title?: AccountTitle | undefined

  /** 補助科目ID */
  sub_account_title_id?: number | null | undefined

  sub_account_title?: SubAccountTitle | undefined

  /** 追加支払金額 */
  addition_jpy?: string | null | undefined
  /** 仕訳明細摘要 */
  journal_note?: string | null | undefined
} & BaseModel

/** 支払予定一括操作対象 */
export type AdditionalPaymentBulkTarget = AdditionalPayment & BulkTarget

/** 代引データ荒木受信 */
export type ArakiDelivery = {
  /** ID */
  id: number
  /** 請求書NO */
  billing_no?: string | null | undefined
  /** 金額 */
  amount?: string | null | undefined
  /** 手数料 */
  delivery_charge?: string | null | undefined
  /** 請求金額 */
  billing_amount?: string | null | undefined
  /** 問合せNO */
  inquiry_no?: string | null | undefined
} & BaseModel

/** 在庫報告履歴_荒木 */
export type ArakiStockReport = {
  /** ID */
  id: number
  /** 取込日 */
  imported_on?: string | null | undefined
  /** 事業者コード */
  company?: string | null | undefined
  /** 事業者名 */
  company_name?: string | null | undefined
  /** 倉庫場所コード */
  warehouse?: string | null | undefined
  /** 倉庫場所名 */
  warehouse_name?: string | null | undefined
  /** 保管場所コード */
  storage?: string | null | undefined
  /** 保管場所名 */
  storage_name?: string | null | undefined
  /** 在庫区分 */
  stock?: string | null | undefined
  /** 在庫区分名 */
  stock_name?: string | null | undefined
  /** ロケーション区分 */
  location?: string | null | undefined
  /** ロケーション区分名 */
  location_name?: string | null | undefined
  /** ロケーションNo */
  location_no?: string | null | undefined
  /** 品番 */
  invent_idm?: string | null | undefined
  /** 商品名 */
  invent_name_jp?: string | null | undefined
  /** 年号 */
  vintage?: string | null | undefined
  /** バッチ番号(年号・賞味期限) */
  batch_vintage?: string | null | undefined
  /** 入庫日 */
  entered_on?: string | null | undefined
  /** 発注No */
  no?: string | null | undefined
  /** パレットNo */
  pallet_no?: string | null | undefined
  /** 数量 */
  count?: number | null | undefined
  /** 出荷引当優先No */
  shipping_priority_no?: string | null | undefined
  /** コンフィギュレーション(現物取置No) */
  configuration?: string | null | undefined
  /** 備考 */
  note?: string | null | undefined
  /** 在庫データ作成日時 */
  stock_reported_at?: string | null | undefined
} & BaseModel

/** BalanceBook明細 */
export type BalanceBookDetail = {
  /** ID */
  id: number
  /** BalanceBookID */
  balance_book_id?: number | null | undefined

  balance_book?: BalanceBook | undefined

  /** 発生船積オーダーID */
  shipping_order_id?: number | null | undefined

  shipping_order?: ShippingOrder | undefined

  /** 発生予約オーダーID */
  shipping_reservation_id?: number | null | undefined

  shipping_reservation?: ShippingReservation | undefined

  /** 船積オーダー明細ID */
  shipping_order_detail_id?: number | null | undefined

  shipping_order_detail?: ShippingOrderDetail | undefined

  /** 予約オーダー明細ID */
  shipping_reservation_detail_id?: number | null | undefined

  shipping_reservation_detail?: ShippingReservationDetail | undefined

  /** 支払先ID */
  vendor_id?: number | null | undefined

  vendor?: Vendor | undefined

  /** 商品ID */
  invent_id?: number | null | undefined

  invent?: Invent | undefined

  /** 年号 */
  vintage?: string | null | undefined
  /** 生産者ID */
  maker_vendor_id?: number | null | undefined

  maker_vendor?: Vendor | undefined

  /** 数量(バラ) */
  total_count?: number | null | undefined
  /** 単価 */
  unit_price?: string | null | undefined
  /** TTMレート */
  rate_ttm?: string | null | undefined
  /** 当時支払レート */
  rate_payment?: string | null | undefined
  /** 金額(外貨) */
  amount?: string | null | undefined
  /** 金額(JPY) */
  amount_jpy?: string | null | undefined
  /** INV明細摘要 */
  invoice_note?: string | null | undefined
  /** 内部備考 */
  note?: string | null | undefined

  compensation_shipping_order_detail?: ShippingOrderDetail | undefined
} & BaseModel

/** BalanceBook相殺先 */
export type BalanceBookOffset = {
  /** ID */
  id: number
  /** BalanceBookID */
  balance_book_id?: number | null | undefined

  balance_book?: BalanceBook | undefined

  /** 相殺船積オーダーID */
  shipping_order_id?: number | null | undefined

  shipping_order?: ShippingOrder | undefined

  /** 相殺予約オーダーID */
  shipping_reservation_id?: number | null | undefined

  shipping_reservation?: ShippingReservation | undefined

  /** 支払先ID */
  vendor_id?: number | null | undefined

  vendor?: Vendor | undefined

  /** 相殺消込済金額 */
  offset_amount?: string | null | undefined
  payment_offset_details?: PaymentOffsetDetail[] | undefined
} & BaseModel

/** BalanceBook */
export type BalanceBook = {
  /** ID */
  id: number
  /** BalanceBook日付 */
  balance_book_on?: string | null | undefined
  /** INVNo. */
  invoice_no?: string | null | undefined
  /** BB種別区分 */
  bb_type_cd1?: string | null | undefined
  /** 登録担当者ID */
  user_id?: number | null | undefined

  user?: User | undefined

  /** 処理区分CD */
  balance_book_type_cd1?: string | null | undefined
  /** 請求区分CD */
  balance_book_bill_type_cd1?: string | null | undefined
  /** INV発行日 */
  issuing_on?: string | null | undefined
  /** 支払先ID */
  vendor_id?: number | null | undefined

  vendor?: Vendor | undefined

  /** 通貨ID */
  currency_cd1?: string | null | undefined
  /** 通関申告有無フラグ */
  is_report_customs: boolean
  /** サインバック受領日 */
  receipt_sign_back_on?: string | null | undefined
  /** 外貨請求フラグ */
  is_foreign_currency_billing: boolean
  /** 管理部受領日 */
  receipt_management_on?: string | null | undefined
  /** 着金確認日 */
  check_payment_on?: string | null | undefined
  /** 内部備考 */
  note?: string | null | undefined
  balance_book_details?: BalanceBookDetail[] | undefined
  balance_book_offsets?: (BalanceBookOffset & {
    /** 予約オーダーの最大支払日 */
    shipping_reservation_payment_on?: string | null | undefined
    /** 船積オーダーの最大支払日 */
    shipping_order_payment_on?: string | null | undefined
  })[] | undefined
  /** 完了フラグ */
  is_complete?: boolean | undefined
  /** 運賃相殺完了フラグ */
  is_fare_offset_completed?: boolean | undefined
} & BaseModel

/** 振込データ受信 */
export type BankTransferReceipt = {
  /** ID */
  id: number
  /** 入金先ID */
  deposit_customer_id?: number | null | undefined

  deposit_customer?: Customer | undefined

  /** 入金実績ID */
  deposit_result_id?: number | null | undefined

  deposit_result?: DepositResult | undefined

  /** 入金日 */
  deposit_on?: string | null | undefined
  /** 入金方法 */
  deposit_type_cd1?: string | null | undefined
  /** 通貨CD */
  currency_cd1?: string | null | undefined
  /** 入金額 */
  deposit_amount?: string | null | undefined
  /** 処理済フラグ */
  is_completed: boolean
  /** 振込元銀行名 */
  bank_name?: string | null | undefined
  /** 振込元支店名 */
  bank_branch_name?: string | null | undefined
  /** 振込元名義人名 */
  bank_account_holder?: string | null | undefined
  /** なでしこNo */
  nadeshiko_no?: string | null | undefined
  /** 入金予定ID */
  deposit_schedule_id?: number | null | undefined

  deposit_schedule?: DepositSchedule | undefined

  /** 照会番号 */
  reference_number?: string | null | undefined
  /** 勘定日 */
  account_on?: string | null | undefined
  /** 預入・払出日 */
  payment_on?: string | null | undefined
  /** 入払区分 */
  in_out_type?: string | null | undefined
  /** 取引区分 */
  transaction_type?: string | null | undefined
  /** うち他店券金額 */
  another_shop_amount?: string | null | undefined
  /** 交換呈示日 */
  exchange_presentation_on?: string | null | undefined
  /** 不渡返還日 */
  dishonored_return_on?: string | null | undefined
  /** 僚店番号 */
  branch_number?: string | null | undefined
  /** 振込依頼人コード */
  client_cd?: string | null | undefined
  /** 振込依頼人名 */
  client_name?: string | null | undefined
  /** 摘要内容 */
  summary?: string | null | undefined
} & BaseModel

/** 代引きデータ受信 */
export type CashOnDelivery = {
  sagawa: (SagawaDeliveryDetail)[]
  yamato: (YamatoDeliveryDetail)[]
} & BaseModel

/** 請求実績 */
export type BillResult = {
  /** ID */
  id: number
  /** 請求締日 */
  billing_on: string
  /** 得意先ID */
  customer_id: number

  customer?: Customer | undefined

  /** 得意先IDM */
  customer_idm: string
  /** 前回請求金額 */
  prev_billing_amount?: string | null | undefined
  /** 今回入金額 */
  payment_amount?: string | null | undefined
  /** 繰越額 */
  carried_forward_amount?: string | null | undefined
  /** 当月売上額 */
  price?: string | null | undefined
  /** 当月消費税 */
  tax?: string | null | undefined
  /** 当月合計額 */
  price_incl_tax?: string | null | undefined
  /** 請求金額 */
  billing_amount?: string | null | undefined
  /** 請求書番号 */
  billing_no?: string | null | undefined
  /** 今回実入金額 */
  payment_deposit_amount?: string | null | undefined
  /** 今回入金値引額 */
  payment_discount?: string | null | undefined
  /** 今回その他金額 */
  payment_other?: string | null | undefined
  /** 今回振込手数料額 */
  payment_commission?: string | null | undefined
  /** 今回消費税調整 */
  payment_adjusted_tax?: string | null | undefined
  /** 完了フラグ */
  is_completed: boolean
  /** 出力日(紙) */
  output_on?: string | null | undefined
  /** 出力日(PDF(FAX)) */
  output_fax_on?: string | null | undefined
  /** 出力日(PDF(Web)) */
  output_web_on?: string | null | undefined
  /** 出力日(PDF(控え)) */
  output_copy_on?: string | null | undefined
} & BaseModel

/** 請求実績消費税計算明細 */
export type BillResultTaxDetail = {
  /** ID */
  id: number
  /** 請求実績ID */
  bill_result_id: number

  bill_result?: BillResult | undefined

  /** 販売ー品目売上税グループCD */
  sales_item_tax_type_cd1?: string | null | undefined
  /** 税率 */
  tax_rate?: string | null | undefined
  /** 税抜金額合計 */
  price?: string | null | undefined
  /** 消費税合計（積上） */
  tax_sum?: string | null | undefined
  /** 消費税額（合計計算） */
  tax_calculate?: string | null | undefined
  /** 消費税差額 */
  tax_difference?: string | null | undefined
} & BaseModel

/** 合計請求書グループ */
export type BillTotalGroup = {
  /** ID */
  id: number
  /** 得意先ID */
  customer_id: number

  customer?: Customer | undefined

  /** グループ名 */
  name: string
  /** 会社名 */
  company_name?: string | null | undefined
  /** 地区名 */
  area_name?: string | null | undefined
  /** 部署・営業所名 */
  post_name?: string | null | undefined
  /** 郵便番号 */
  zip?: string | null | undefined
  /** 送付住所1 */
  address1?: string | null | undefined
  /** 送付住所2 */
  address2?: string | null | undefined
  /** 送付先名1 */
  addressee1?: string | null | undefined
  /** 送付先名2 */
  addressee2?: string | null | undefined
  /** 送付先TEL */
  tel?: string | null | undefined
  /** 送付先FAX */
  fax?: string | null | undefined
  /** 備考 */
  note?: string | null | undefined
  /** 繰越金額0クリアーフラグ */
  is_clear: boolean
  /** フォーマット区分 */
  bill_total_format_cd1: string
  /** 明細集計有無フラグ */
  is_summary: boolean
  bill_total_group_details?: BillTotalGroupDetail[] | undefined
} & BaseModel

/** 合計請求書グループ明細 */
export type BillTotalGroupDetail = {
  /** ID */
  id: number
  /** 合計請求書グループID */
  bill_total_group_id?: number | undefined

  bill_total_group?: BillTotalGroup | undefined

  /** 得意先ID */
  customer_id: number

  customer?: Customer | undefined

  /** 代配店ID */
  child_customer_id?: number | null | undefined

  child_customer?: Customer | undefined

  /** 名称 */
  name?: string | null | undefined
  /** コード/No */
  code?: string | null | undefined
  /** 並び順 */
  display_order: number
} & BaseModel

/** 合計請求書グループ一括操作対象 */
export type BillTotalGroupBulkTarget = BillTotalGroup & {
  bill_total_group_details: (BillTotalGroupDetail & BulkTarget)[]
} & BulkTarget

/** 検品作業料明細 */
export type CheckCost = {
  /** ID */
  id: number
  /** 船積オーダー明細ID */
  shipping_order_detail_id: number | null

  shipping_order_detail?: ShippingOrderDetail | undefined

  /** 作業区分 */
  check_cd1: string
  /** 作業料 */
  check_amount: string
} & BaseModel

/** 売掛消込明細 */
export type ClearingDetail = {
  /** ID */
  id: number
  /** 入金実績ID */
  deposit_result_id?: number | null | undefined

  deposit_result?: DepositResult | undefined

  /** 入金予定ID */
  deposit_schedule_id?: number | null | undefined

  deposit_schedule?: DepositSchedule | undefined

  /** 得意先ID */
  customer_id?: number | null | undefined

  customer?: Customer | undefined

  /** 入金日 */
  deposit_on?: string | null | undefined
  /** 消込日 */
  clearing_on?: string | null | undefined
  /** 消込金額(JPY) */
  clearing_amount_jpy?: string | null | undefined
  /** その他金額合計(JPY) */
  other_amount_jpy?: string | null | undefined
  /** 消込金額(取引通貨) */
  clearing_amount?: string | null | undefined
  /** 入金額(取引通貨) */
  deposit_amount?: string | null | undefined
  /** 入金額(JPY) */
  deposit_amount_jpy?: string | null | undefined
  /** 値引き額1(取引通貨) */
  discount1?: string | null | undefined
  /** 値引き額1(JPY) */
  discount_jpy1?: string | null | undefined
  /** 値引き額2(取引通貨) */
  discount2?: string | null | undefined
  /** 値引き額2(JPY) */
  discount_jpy2?: string | null | undefined
  /** 値引き額3(取引通貨) */
  discount3?: string | null | undefined
  /** 値引き額3(JPY) */
  discount_jpy3?: string | null | undefined
  /** その他金額合計(取引通貨) */
  other_amount?: string | null | undefined
  /** 振込手数料(取引通貨) */
  commission?: string | null | undefined
  /** 振込手数料(JPY) */
  commission_jpy?: string | null | undefined
  /** 消費税調整額(取引通貨) */
  adjusted_tax?: string | null | undefined
  /** 消費税調整額(JPY) */
  adjusted_tax_jpy?: string | null | undefined
  /** 為替差損益 */
  exchange_gain_loss?: string | null | undefined
  /** 請求実績ID */
  bill_result_id?: number | null | undefined

  bill_result?: BillResult | undefined

  /** 通貨ID */
  currency_cd1?: string | null | undefined
  /** レート */
  rate?: string | null | undefined
} & BaseModel

/** 委託倉庫在庫報告集計 */
export type ContractStockTotal = {
  /** ID */
  id: number
  /** 集計日 */
  total_up_on?: string | null | undefined
  /** 委託倉庫CD */
  contract_location_cd1?: string | null | undefined
  /** 委託倉庫名 */
  contract_location_name?: string | null | undefined
  /** 在庫報告データ日時 */
  reported_at?: string | null | undefined
  /** 品番 */
  invent_idm?: string | null | undefined
  /** 在庫区分 */
  stock_type_cd1?: string | null | undefined
  /** 良品・不良品区分 */
  quality_type_cd1?: string | null | undefined
  /** 数量 */
  count?: number | null | undefined
} & BaseModel

/** 委託倉庫在庫 */
export type ContractStock = {
  /** ID */
  id: number
  /** 作成日 */
  compared_on?: string | null | undefined
  /** 委託倉庫CD */
  contract_location_cd1?: string | null | undefined
  /** 商品ID */
  invent_id?: number | null | undefined

  invent?: Invent | undefined

  /** 倉庫ID */
  location_id?: number | null | undefined

  location?: Location | undefined

  /** MTX現物在庫 */
  real_stock_count?: number | null | undefined
  /** 販売予定 */
  selling_count?: number | null | undefined
  /** MTX在庫 */
  stock_count?: number | null | undefined
  /** 通関済在庫未計上 */
  customs_count?: number | null | undefined
  /** MTX在庫(通関済数含む) */
  stock_customs_count?: number | null | undefined
  /** 委託倉庫在庫(良品) */
  araki_good_stock_count?: number | null | undefined
  /** 委託倉庫在庫(不良品) */
  araki_bad_stock_count?: number | null | undefined
  /** 委託倉庫在庫 */
  araki_count?: number | null | undefined
  /** 在庫差異 */
  difference_count?: number | null | undefined
  /** 通関済数含む差異 */
  difference_customs_count?: number | null | undefined
} & BaseModel

/** 原価税 */
export type CostTax = {
  /** ID */
  id: number
  /** 入荷原価ID */
  purchase_price_id: number

  purchase_price?: PurchasePrice | undefined

  /** 容量(ml) */
  volume: number
  /** 総バラ数 */
  total_count: number
  /** CIF(JPY) */
  cif: string
  /** 関税ID */
  customs_duty_id?: number | null | undefined

  customs_duty?: CustomsDuty | undefined

  /** 関税(JPY) */
  customs_duty_jpy: string
  /** 酒税ID */
  liquor_tax_id?: number | null | undefined

  liquor_tax?: LiquorTax | undefined

  /** 酒税(JPY) */
  liquor_tax_jpy: string
  /** 消費税(JPY) */
  consumption_tax_amount_jpy: string
  /** 地方消費税(JPY) */
  local_consumption_tax_amount_jpy: string
  /** 関税適用区分 */
  customs_duty_application_cd1?: string | null | undefined
} & BaseModel

/** 原価税一括操作対象 */
export type CostTaxBulkTarget = CostTax & BulkTarget

/** 入金実績 */
export type DepositResult = {
  /** ID */
  id: number
  /** 入金伝票No */
  no?: string | null | undefined
  /** 入金先ID */
  deposit_customer_id?: number | null | undefined

  deposit_customer?: Customer | undefined

  /** 入金先IDM */
  deposit_customer_idm?: string | null | undefined
  /** 入金日 */
  deposit_on?: string | null | undefined
  /** 入金方法 */
  deposit_type_cd1?: string | null | undefined
  /** 通貨CD */
  currency_cd1?: string | null | undefined
  /** 入金額(JPY) */
  deposit_amount_jpy?: string | null | undefined
  /** 値引き額1(JPY) */
  discount_jpy1?: string | null | undefined
  /** 値引き額2(JPY) */
  discount_jpy2?: string | null | undefined
  /** 値引き額3(JPY) */
  discount_jpy3?: string | null | undefined
  /** 振込手数料(JPY) */
  commission_jpy?: string | null | undefined
  /** 消費税調整額(JPY) */
  adjusted_tax_jpy?: string | null | undefined
  /** その他金額合計(JPY) */
  other_amount_jpy?: string | null | undefined
  /** 過入金金額合計(JPY) */
  over_amount_jpy?: string | null | undefined
  /** 消込対象金額(JPY) */
  clearing_target_amount_jpy?: string | null | undefined
  /** 消込金額(JPY) */
  clearing_amount_jpy?: string | null | undefined
  clearing_details?: ClearingDetail[] | undefined
  /** 顛末区分 */
  deposit_sts_cd1?: string | null | undefined
  /** レート */
  rate?: string | null | undefined
  /** 入金額(取引通貨) */
  deposit_amount?: string | null | undefined
  /** 値引き額1(取引通貨) */
  discount1?: string | null | undefined
  /** 値引き額2(取引通貨) */
  discount2?: string | null | undefined
  /** 値引き額3(取引通貨) */
  discount3?: string | null | undefined
  /** 振込手数料(取引通貨) */
  commission?: string | null | undefined
  /** 消費税調整額(取引通貨) */
  adjusted_tax?: string | null | undefined
  /** その他金額合計(取引通貨) */
  other_amount?: string | null | undefined
  /** 過入金金額合計(取引通貨) */
  over_amount?: string | null | undefined
  /** 消込対象金額(取引通貨) */
  clearing_target_amount?: string | null | undefined
  /** 消込金額(取引通貨) */
  clearing_amount?: string | null | undefined
  /** 入金予定ID */
  deposit_schedule_id?: number | null | undefined

  deposit_schedule?: DepositSchedule | undefined

  other_cost_results?: OtherCostResult[] | undefined
  over_payments?: OverPayment[] | undefined
} & BaseModel

/** 入金実績一括操作対象 */
export type DepositResultBulkTarget = DepositResult & {
  clearing_details: (ClearingDetail & BulkTarget)[]
  other_cost_results: (OtherCostResult & BulkTarget)[]
  over_payments: (OverPayment & BulkTarget)[]

  deposit_customer?: {
    /** ID */
    id?: number | undefined
    /** 得意先IDM */
    idm?: string | null | undefined
  } | undefined
} & BulkTarget

/** 入金予定 */
export type DepositSchedule = {
  /** ID */
  id: number
  /** 入金先ID */
  deposit_customer_id?: number | null | undefined

  deposit_customer?: Customer | undefined

  /** 入金先IDM */
  deposit_customer_idm?: string | null | undefined
  /** 得意先ID */
  customer_id?: number | null | undefined

  customer?: Customer | undefined

  /** 得意先IDM */
  customer_idm?: string | null | undefined
  /** 入金予定区分 */
  deposit_schedule_cd1?: string | null | undefined
  /** 与信管理区分 */
  yoshin_cd1?: string | null | undefined
  /** 発生請求締日 */
  bill_result_billing_on?: string | null | undefined
  /** 発生請求実績ID */
  bill_result_id?: number | null | undefined

  bill_result?: BillResult | undefined

  /** 入金予定日 */
  will_deposit_on?: string | null | undefined
  /** 入金方法 */
  deposit_type_cd1?: string | null | undefined
  /** 通貨CD */
  currency_cd1?: string | null | undefined
  /** 今回売上額(JPY) */
  sales_amount_jpy?: string | null | undefined
  /** 値引き額1(JPY) */
  discount_jpy1?: string | null | undefined
  /** 値引き額2(JPY) */
  discount_jpy2?: string | null | undefined
  /** 値引き額3(JPY) */
  discount_jpy3?: string | null | undefined
  /** 振込手数料(JPY) */
  commission_jpy?: string | null | undefined
  /** その他金額合計(JPY) */
  other_amount_jpy?: string | null | undefined
  /** 未入金予定額(JPY) */
  unpaid_amount_jpy?: string | null | undefined
  /** 入金予定金額(JPY) */
  deposit_amount_jpy?: string | null | undefined
  /** 入金消込額(JPY) */
  clearing_amount_jpy?: string | null | undefined
  /** 入金残額(JPY) */
  balance_amount_jpy?: string | null | undefined
  /** 今回売上額(取引通貨) */
  sales_amount?: string | null | undefined
  /** 値引き額1(取引通貨) */
  discount1?: string | null | undefined
  /** 値引き額2(取引通貨) */
  discount2?: string | null | undefined
  /** 値引き額3(取引通貨) */
  discount3?: string | null | undefined
  /** 振込手数料(取引通貨) */
  commission?: string | null | undefined
  /** その他金額合計(取引通貨) */
  other_amount?: string | null | undefined
  /** 未入金予定額(取引通貨) */
  unpaid_amount?: string | null | undefined
  /** 入金予定金額(取引通貨) */
  deposit_amount?: string | null | undefined
  /** 入金消込額(取引通貨) */
  clearing_amount?: string | null | undefined
  /** 入金残額(取引通貨) */
  balance_amount?: string | null | undefined
  /** 入金予定備考 */
  note?: string | null | undefined
  /** 口座振替作成済フラグ */
  is_created: boolean
  /** レート */
  rate?: string | null | undefined
  clearing_details?: ClearingDetail[] | undefined
  other_cost_schedules?: OtherCostSchedule[] | undefined
  /** 振確入金済通知フラグ */
  is_noticed?: boolean | null | undefined
} & BaseModel

/** 入金予定一括操作対象 */
export type DepositScheduleBulkTarget = DepositSchedule & {
  other_cost_schedules: (OtherCostSchedule & BulkTarget)[]
} & BulkTarget

/** 国内発注明細 */
export type DomesticOrderDetail = {
  /** ID */
  id: number
  /** 国内発注ID */
  domestic_order_id?: number | undefined

  domestic_order?: DomesticOrder | undefined

  /** 行No */
  line_no: number | null
  /** 表示順 */
  display_order?: number | null | undefined
  /** 商品ID */
  invent_id: number

  invent?: Invent | undefined

  /** 商品名(正式/和文) */
  name_jp: string
  /** 商品名(伝票印字品名) */
  name_denpatu?: string | null | undefined
  /** 年号 */
  vintage?: string | null | undefined
  /** 内容量 */
  volume?: number | null | undefined
  /** 登録入数 */
  quantity_per_case: number
  /** 実入数 */
  local_quantity_per_case?: number | null | undefined
  /** 登録ケース */
  case_count?: number | null | undefined
  /** 登録バラ */
  bottle_count?: number | null | undefined
  /** 実ケース */
  local_case_count?: number | null | undefined
  /** 実バラ */
  local_bottle_count?: number | null | undefined
  /** 総バラ数 */
  total_count?: number | null | undefined
  /** 通貨CD */
  currency_cd1?: string | null | undefined
  /** 価格単位 */
  invent_unit_cd1?: string | null | undefined
  /** 発注単価 */
  order_price?: string | null | undefined
  /** 発注金額 */
  order_amount?: string | null | undefined
  /** 発注書備考 */
  order_note?: string | null | undefined
  /** 入荷予定備考 */
  arrival_schedule_note?: string | null | undefined
  /** 内部備考 */
  note?: string | null | undefined
  /** 価格検討済フラグ */
  is_notice: boolean
  /** 国内受注明細ID */
  sales_order_detail_id?: number | null | undefined

  sales_order_detail?: SalesOrderDetail | undefined

  purchase_reservation?: PurchaseReservation | undefined

  payment_schedule?: PaymentSchedule | undefined
} & BaseModel

/** 国内発注 */
export type DomesticOrder = {
  /** ID */
  id: number
  /** 国内発注No */
  no: string | null
  /** 発注状況区分 */
  order_status_cd1: string
  /** 発注日 */
  ordered_on?: string | null | undefined
  /** 取引区分 */
  stock_trade_type_cd1: string
  /** 発注先ID */
  order_vendor_id?: number | null | undefined

  order_vendor?: Vendor | undefined

  /** 発注先担当者 */
  vendor_user_name?: string | null | undefined
  /** 支払先ID */
  pay_vendor_id?: number | null | undefined

  pay_vendor?: Vendor | undefined

  /** 支払条件ID */
  payment_condition_id?: number | null | undefined

  payment_condition?: PaymentCondition | undefined

  /** 支払期日(参考) */
  payment_on?: string | null | undefined
  /** 入荷予定倉庫ID */
  location_id?: number | null | undefined

  location?: Location | undefined

  /** 予定納期 */
  scheduled_delivery_on?: string | null | undefined
  /** 引取先ID */
  pickup_vendor_id?: number | null | undefined

  pickup_vendor?: Vendor | undefined

  /** 引取業者ID */
  collection_vendor_id?: number | null | undefined

  collection_vendor?: Vendor | undefined

  /** 引取日 */
  pickup_on?: string | null | undefined
  /** 発注担当者ID */
  user_id?: number | null | undefined

  user?: User | undefined

  /** 国内発注内部備考 */
  note?: string | null | undefined
  /** メールTO1 */
  mail_to1?: string | null | undefined
  /** メールCC1 */
  mail_cc1?: string | null | undefined
  /** メールTO2 */
  mail_to2?: string | null | undefined
  /** メールCC2 */
  mail_cc2?: string | null | undefined
  /** 発注書フォーマット */
  domestic_order_format_cd1?: string | null | undefined
  /** 国内発注書通信欄 */
  document_note?: string | null | undefined
  domestic_order_details?: DomesticOrderDetail[] | undefined
  sales_reservation_details?: SalesReservationDetail[] | undefined
  /** 予約可能数ケース */
  reservable_case_count?: number | null | undefined
  /** 予約可能数バラ */
  reservable_bottle_count?: number | null | undefined
} & BaseModel

/** 国内発注一括操作対象 */
export type DomesticOrderBulkTarget = DomesticOrder & {
  domestic_order_details: (DomesticOrderDetail & BulkTarget)[]
} & BulkTarget

/** 為替予約 */
export type ExchangeContract = {
  /** ID */
  id: number
  /** 購入予定年月日 */
  will_purchase_on?: string | null | undefined
  /** 購入年月 */
  purchase_year_month?: string | null | undefined
  /** 購入年月日 */
  purchase_on?: string | null | undefined
  /** 通貨CD */
  currency_cd1?: string | null | undefined
  /** 購入区分CD */
  foreign_currency_purchase_cd1?: string | null | undefined
  /** 契約名 */
  contract?: string | null | undefined
  /** 契約(予約)No */
  contract_no?: string | null | undefined
  /** 購入レート */
  purchase_rate?: string | null | undefined
  /** 購入金額 */
  purchase_amount?: string | null | undefined
  /** 購入銀行CD */
  purchase_currency_cd1?: string | null | undefined
  /** 購入銀行口座ID */
  purchase_bank_account_id?: number | null | undefined

  purchase_bank_account?: BankAccount | undefined

  /** 振替先銀行口座ID */
  transfer_to_bank_account_id?: number | null | undefined

  transfer_to_bank_account?: BankAccount | undefined

  /** 契約日 */
  contracted_on?: string | null | undefined
  /** 購入開始年月日 */
  purchase_start_on?: string | null | undefined
  /** 購入終了年月日 */
  purchase_end_on?: string | null | undefined
  /** 使用目的CD */
  foreign_currency_purpose_cd1?: string | null | undefined
  /** KOレート */
  ko_rate?: string | null | undefined
  /** 内部備考 */
  note?: string | null | undefined
  /** 消滅フラグ */
  is_out_of_contract: boolean
  /** 確定フラグ */
  is_confirmed: boolean
  /** 平均レート計算除外フラグ */
  is_exclusion: boolean
} & BaseModel

/** 為替予約一括操作対象 */
export type ExchangeContractBulkTarget = ExchangeContract & BulkTarget

/** 船積受注 */
export type ExportOrder = {
  /** ID */
  id: number
  /** 船積受注状況 */
  export_shipping_order_status_cd1?: string | null | undefined
  /** インボイスNo(記号) */
  mark: string
  /** インボイスNo(数字) */
  no: string
  /** インボイスNo(管理用) */
  display_no: string
  /** インボイス日付 */
  invoice_on?: string | null | undefined
  /** 前入力担当者ID */
  prev_operator_user_id?: number | null | undefined

  prev_operator_user?: User | undefined

  /** 前入力担当者IDM */
  prev_operator_user_idm?: string | null | undefined
  /** 前入力担当者名 */
  prev_operator_user_name?: string | null | undefined
  /** 入力担当者ID */
  operator_user_id?: number | null | undefined

  operator_user?: User | undefined

  /** 入力担当者IDM */
  operator_user_idm?: string | null | undefined
  /** 入力担当者名 */
  operator_user_name?: string | null | undefined
  /** 出荷日 */
  shipped_on?: string | null | undefined
  /** 受注日 */
  ordered_on?: string | null | undefined
  /** 売上日 */
  sold_on?: string | null | undefined
  /** 出港日 */
  etd_on?: string | null | undefined
  /** 入港日 */
  eta_on?: string | null | undefined
  /** 出港地 */
  departure_port_cd1?: string | null | undefined
  /** 入港地 */
  arrival_port_cd1?: string | null | undefined
  /** 船名 */
  ship_name?: string | null | undefined
  /** 与信管理区分 */
  yoshin_cd1?: string | null | undefined
  /** 入力得意先ID */
  customer_id?: number | null | undefined

  customer?: Customer | undefined

  /** 得意先IDM */
  parent_idm?: string | null | undefined
  /** 得意先名(カナ) */
  parent_name_kana?: string | null | undefined
  /** 得意先名(正式) */
  parent_name_jp?: string | null | undefined
  /** 得意先名(略称) */
  parent_name_abbr?: string | null | undefined
  /** 担当者ID */
  user_id?: number | null | undefined

  user?: User | undefined

  /** 担当者IDM */
  user_idm?: string | null | undefined
  /** 担当者名 */
  user_name?: string | null | undefined
  /** 担当者-チームIDM */
  team_department_idm?: string | null | undefined
  /** 担当者-チーム名 */
  team_department_name?: string | null | undefined
  /** 担当者-部署IDM */
  department_idm?: string | null | undefined
  /** 担当者-部署名 */
  department_name?: string | null | undefined
  /** 業態 */
  business_category_cd1?: string | null | undefined
  /** 総本数 */
  total_count: number
  /** 税抜金額 */
  price: string
  /** 取引通貨金額 */
  currency_price: string
  /** 得意先-地方IDM */
  parent_wine_area_idm?: string | null | undefined
  /** 得意先-地区IDM */
  parent_area_idm?: string | null | undefined
  /** 得意先-〒 */
  parent_zip?: string | null | undefined
  /** 得意先-GrpCD */
  parent_customer_group_cd1?: string | null | undefined
  /** 得意先-Grp名 */
  parent_customer_group_name?: string | null | undefined
  /** 得意先-住所1 */
  parent_address1?: string | null | undefined
  /** 得意先-住所2 */
  parent_address2?: string | null | undefined
  /** 得意先-住所3 */
  parent_address3?: string | null | undefined
  /** 得意先-TEL */
  parent_tel1?: string | null | undefined
  /** 得意先-FAX */
  parent_fax1?: string | null | undefined
  /** 得意先-定休日(曜日) */
  parent_holiday_of_week?: string | null | undefined
  /** 得意先-定休日(メモ) */
  parent_holiday_note?: string | null | undefined
  /** 得意先-返信FAX */
  is_parent_refax_required: boolean
  /** 得意先-特記事項 */
  parent_order_remarks?: string | null | undefined
  /** 得意先-専伝担当者名 */
  parent_personnel_name?: string | null | undefined
  /** 得意先-納品書備考欄 */
  parent_delivery_slip_note?: string | null | undefined
  /** 得意先-納品書摘要欄 */
  parent_delivery_slip_abstract?: string | null | undefined
  /** 得意先-ロット合わせの備考 */
  parent_lot_note?: string | null | undefined
  /** 得意先-欠品・年号変更時の出荷対応CD */
  parent_stockout_contact_cd1?: string | null | undefined
  /** 得意先-欠品・年号変更時の連絡方法 */
  parent_stockout_contact?: string | null | undefined
  /** 得意先-ファイルパス */
  parent_estimated_doc_path?: string | null | undefined
  /** 着日目安日数CD(伝発) */
  estimated_arrival_cd1?: string | null | undefined
  /** 着日目安日数CD(WEB) */
  web_estimated_arrival_cd1?: string | null | undefined
  /** 納品時間帯(関西Rのみ)CD */
  arrival_request_kansai_cd1?: string | null | undefined
  /** 基準日CD */
  reference_pay_date_cd1?: string | null | undefined
  /** 締日1CD */
  closing_day1_cd1?: string | null | undefined
  /** 入金月1CD */
  payment_month1_cd1?: string | null | undefined
  /** 入金日1CD */
  payment_day1_cd1?: string | null | undefined
  /** 社内備考 */
  internal_note?: string | null | undefined
  /** 入金予定ID */
  deposit_schedule_id?: number | null | undefined

  deposit_schedule?: DepositSchedule | undefined

  /** フォワーダーID */
  forwarder_vendor_id?: number | null | undefined

  forwarder_vendor?: Vendor | undefined

  /** フォワーダー名 */
  forwarder_name?: string | null | undefined
  /** コンテナサイズ */
  container_size_cd1?: string | null | undefined
  /** コンテナ仕様 */
  container_type_cd1?: string | null | undefined
  /** 通関担当者ID */
  customs_user_id?: number | null | undefined

  customs_user?: User | undefined

  /** 通関業者 */
  customs_broker_cd1?: string | null | undefined
  /** 貿易条件 */
  trade_term_cd1?: string | null | undefined
  /** 入金条件 */
  customer_payment_type_cd1?: string | null | undefined
  /** 通貨 */
  currency_cd1?: string | null | undefined
  /** レート */
  rate?: string | null | undefined
  /** シッピングマーク */
  shipping_mark?: string | null | undefined
  /** 全書類確認フラグ */
  is_document_checked: boolean
  /** PONo */
  po_no?: string | null | undefined
  export_order_details?: ExportOrderDetail[] | undefined
} & BaseModel

/** 船積受注一括操作対象 */
export type ExportOrderBulkTarget = ExportOrder & {
  export_order_details: (ExportOrderDetail & BulkTarget)[]
} & BulkTarget

/** 船積受注明細 */
export type ExportOrderDetail = {
  /** ID */
  id: number
  /** 船積受注ID */
  export_order_id: number

  export_order?: ExportOrder | undefined

  /** 確定フラグ */
  is_confirmed?: boolean | null | undefined
  /** 倉庫ID */
  location_id?: number | null | undefined

  location?: Location | undefined

  /** 倉庫IDM */
  location_idm?: string | null | undefined
  /** 倉庫名 */
  location_name?: string | null | undefined
  /** 商品名(正式/和文) */
  name_jp?: string | null | undefined
  /** 商品名(正式/欧文) */
  name_en?: string | null | undefined
  /** 商品名(伝票印字品名) */
  name_denpatu?: string | null | undefined
  /** 商品名(略称) */
  name_abbr?: string | null | undefined
  /** 商品名(カナ) */
  name_kana?: string | null | undefined
  /** 商品名(RBP用) */
  name_rbp?: string | null | undefined
  /** 商品名(値札工房用) */
  name_pc?: string | null | undefined
  /** 商品名(価格表用) */
  name_catalog?: string | null | undefined
  /** 商品名(別年号用) */
  name_yearly?: string | null | undefined
  /** 商品名(輸出用/アルファベット) */
  itemname_import_en?: string | null | undefined
  /** 商品名(中) */
  itemname_import_zh?: string | null | undefined
  /** 色 */
  color_cd1?: string | null | undefined
  /** 商品ID */
  invent_id?: number | null | undefined

  invent?: Invent | undefined

  /** 品番 */
  invent_idm?: string | null | undefined
  /** 得意先品番 */
  customer_item_cd?: string | null | undefined
  /** JAN */
  barcode?: string | null | undefined
  /** 年号 */
  vintage?: string | null | undefined
  /** 内容量 */
  volume?: number | null | undefined
  /** 内容量の単位 */
  volume_unit_cd1?: string | null | undefined
  /** 入数(ケース) */
  quantity_per_case?: number | null | undefined
  /** 入数(ボール) */
  quantity_per_ball?: number | null | undefined
  /** 実入数 */
  local_quantity_per_case?: number | null | undefined
  /** 生産者IDM */
  maker_vendor_idm?: string | null | undefined
  /** 生産者名(略称/和文) */
  maker_vendor_name_jp_abbr?: string | null | undefined
  /** 品目区分CD */
  item_group_cd1?: string | null | undefined
  /** 酒税品目IDM */
  liquor_tax_idm?: string | null | undefined
  /** 酒税名 */
  liquor_tax_name?: string | null | undefined
  /** 酒税名略称 */
  liquor_tax_name_abbr?: string | null | undefined
  /** 原産国IDM */
  country_of_origin_idm?: string | null | undefined
  /** 原産国名(和文) */
  country_of_origin_name?: string | null | undefined
  /** 地方IDM */
  wine_area_idm?: string | null | undefined
  /** 地方名(和文) */
  wine_area_name?: string | null | undefined
  /** 地区IDM */
  area_idm?: string | null | undefined
  /** 地区名(和文) */
  area_name?: string | null | undefined
  /** 村IDM */
  village_idm?: string | null | undefined
  /** 村名(和文) */
  village_name?: string | null | undefined
  /** 商品分類CD */
  item_type_cd1?: string | null | undefined
  /** 希望小売プリント */
  is_print_sign: boolean
  /** 最低出荷単位 */
  shipping_invent_unit_cd1?: string | null | undefined
  /** 戦略分類 */
  strategy_type_cd1?: string | null | undefined
  /** 希望数(バラ) */
  desire_bottle_count?: number | null | undefined
  /** ケース数 */
  case_count?: number | null | undefined
  /** バラ数 */
  bottle_count?: number | null | undefined
  /** 総バラ数 */
  total_count?: number | null | undefined
  /** ケース単価 */
  case_unit_price?: string | null | undefined
  /** バラ単価 */
  bottle_unit_price: string
  /** 在庫単価 */
  stock_price?: string | null | undefined
  /** 受注単価 */
  order_unit_price?: string | null | undefined
  /** 取引通貨受注単価 */
  currency_order_unit_price?: string | null | undefined
  /** 在庫金額 */
  stock_amount?: string | null | undefined
  /** 受注金額 */
  order_amount?: string | null | undefined
  /** 取引通貨受注金額 */
  currency_order_amount?: string | null | undefined
  /** 明細備考 */
  external_note?: string | null | undefined
  /** 小売単価 */
  retail_unit_price?: string | null | undefined
  /** 品切れフラグ */
  is_shortage: boolean
  /** 国内発注単価(バラ) */
  domestic_order_bottle_unit_price?: string | null | undefined
  /** 国内発注単価(ケース) */
  domestic_order_case_unit_price?: string | null | undefined
  /** 参考価格 */
  sales_price_reference_price?: string | null | undefined
  /** 価格設定時レート */
  sales_price_rate?: string | null | undefined
  /** 価格設定時仕入単価 */
  sales_price_setup_invent_price?: string | null | undefined
  /** 最終仕入単価 */
  sales_price_purchase_unit_price?: string | null | undefined
  /** 輸入購買-通貨 */
  import_price_currency_cd1?: string | null | undefined
  /** 輸入購買-価格単位 */
  import_price_price_unit_cd1?: string | null | undefined
  /** 輸入購買-現地単価 */
  import_price_local_unit_price?: string | null | undefined
  /** 輸入購買-割引前単価 */
  import_price_pre_discount_unit_price?: string | null | undefined
  /** ケース番号 */
  case_no?: string | null | undefined
  /** パレットNo */
  pallet_no?: string | null | undefined
  /** 瓶詰め日 */
  bottled_on?: string | null | undefined
  /** アルコール度数 */
  alcohol_content?: string | null | undefined
  /** 原産国インボイスNo */
  country_of_origin_invoice_no?: string | null | undefined
  /** 原産地証明書フラグ */
  is_placeoforiginname_certificate: boolean
  /** 船積オーダーID */
  shipping_order_id?: number | null | undefined

  shipping_order?: ShippingOrder | undefined

  /** 船積オーダー明細ID */
  shipping_order_detail_id?: number | null | undefined

  shipping_order_detail?: ShippingOrderDetail | undefined

  /** 変更前入港予定日 */
  before_eta_on?: string | null | undefined
  /** 分割期限 */
  split_deadline_on?: string | null | undefined
  /** 生産者名(英) */
  vendor_name_en?: string | null | undefined
  /** 生産者名(中) */
  vendor_name_zh?: string | null | undefined
  /** 生産者住所 */
  vendor_address?: string | null | undefined
  /** 生産者住所(中) */
  vendor_address_zh?: string | null | undefined
  /** HSコード */
  hscode?: string | null | undefined
  /** CIQコード */
  ciqcode?: string | null | undefined
  /** 在中登録番号 */
  registration_number?: string | null | undefined
  /** ラベルサイズ表 */
  label_size_front?: string | null | undefined
  /** ラベルサイズ裏 */
  label_size_back?: string | null | undefined
  /** 商品説明_備考 */
  note_note?: string | null | undefined
  /** 賞味期限 */
  expiration_on?: string | null | undefined
  /** 外ケース奥行 */
  depth?: number | null | undefined
  /** 外ケース幅 */
  width?: number | null | undefined
  /** 外ケース高 */
  height?: number | null | undefined
  /** グロスウェイト */
  gross_weight?: string | null | undefined
  /** 社内明細備考 */
  internal_note?: string | null | undefined
  /** 出荷バッチ処理区分 */
  shipping_bat_status_cd1?: string | null | undefined
  /** 販売元名 */
  distributor_name?: string | null | undefined
  /** 販売元担当者名 */
  distributor_pic_name?: string | null | undefined
  /** 販売元担当者メールアドレス */
  distributor_pic_mail?: string | null | undefined
  /** 販売元担当者TEL */
  distributor_pic_tel?: string | null | undefined
  /** 原材料名(中国語) */
  raw_materials_zh?: string | null | undefined
} & BaseModel

/** 外貨残高 */
export type ForeignCurrencyBalance = {
  /** ID */
  id: number
  /** 通貨CD */
  currency_cd1?: string | null | undefined
  /** 使用目的CD */
  foreign_currency_purpose_cd1?: string | null | undefined
  /** 銀行口座ID */
  bank_account_id?: number | null | undefined

  bank_account?: BankAccount | undefined

  /** 外貨購入ID */
  foreign_currency_purchase_id?: number | null | undefined

  foreign_currency_purchase?: ForeignCurrencyPurchase | undefined

  /** 残金額(外貨) */
  amount?: string | null | undefined
} & BaseModel

/** 外貨購入 */
export type ForeignCurrencyPurchase = {
  /** ID */
  id: number
  /** 取引区分 */
  foreign_currency_order_type_cd1?: string | null | undefined
  /** 計上日 */
  posted_on?: string | null | undefined
  /** 通貨CD */
  currency_cd1?: string | null | undefined
  /** 入金銀行口座ID */
  payment_bank_account_id?: number | null | undefined

  payment_bank_account?: BankAccount | undefined

  /** 入金使用目的CD */
  payment_foreign_currency_purpose_cd1?: string | null | undefined
  /** 入金レート */
  payment_rate?: string | null | undefined
  /** 購入・入金・振替金額 */
  amount?: string | null | undefined
  /** 振替元銀行口座ID */
  src_bank_account_id?: number | null | undefined

  src_bank_account?: BankAccount | undefined

  /** 振替元使用目的CD */
  src_foreign_currency_purpose_cd1?: string | null | undefined
  /** 振替元レート */
  src_rate?: string | null | undefined
  /** 振替先銀行口座ID */
  dest_bank_account_id?: number | null | undefined

  dest_bank_account?: BankAccount | undefined

  /** 振替先使用目的CD */
  dest_foreign_currency_purpose_cd1?: string | null | undefined
  /** 振替先レート */
  dest_rate?: string | null | undefined
  /** 内部備考 */
  note?: string | null | undefined
  /** 勘定科目ID(借方) */
  debit_account_title_id?: number | null | undefined
  /** 補助科目ID(借方) */
  debit_sub_account_title_id?: number | null | undefined
  /** 勘定科目ID(貸方) */
  credit_account_title_id?: number | null | undefined
  /** 補助科目ID(貸方) */
  credit_sub_account_title_id?: number | null | undefined
  /** レート計算除外フラグ */
  is_exclusion: boolean
  /** 為替予約ID */
  exchange_contract_id?: number | null | undefined

  exchange_contract?: ExchangeContract | undefined
} & BaseModel

/** 外貨購入一括操作対象 */
export type ForeignCurrencyPurchaseTarget = ForeignCurrencyPurchase & BulkTarget

/** 外貨資金繰り */
export type ForeignCurrencyManagement = {
  /** ID */
  id?: number | undefined
  /** 外貨購入ID */
  purchase_id?: number | null | undefined
  /** 受払区分 */
  receipt_or_payment?: string | null | undefined
  /** 日付 */
  date?: string | null | undefined
  /** 通貨 */
  currency_cd?: string | null | undefined
  /** 使用目的 */
  purpose_cd?: string | null | undefined
  /** 受払金額(外貨) */
  amount?: string | null | undefined
  /** 受払金額(円貨) */
  amount_jpy?: string | null | undefined
  /** 平均レート */
  average_rate?: string | null | undefined
  /** 残高(外貨) */
  balance?: string | null | undefined
  /** 残高(円貨) */
  balance_jpy?: string | null | undefined
  /** TTMレート */
  rate_ttm?: string | null | undefined
  /** 入出区分 */
  in_out_type?: number | null | undefined
  /** 受払レート */
  rate?: string | null | undefined
  /** 原産国ID */
  countory_of_origin_name?: string | null | undefined
  /** 支払予定 */
  payment_schedule?: boolean | null | undefined
  /** 支払対象区分 */
  payment_target_cd1?: string | null | undefined
  /** 予約オーダー支払対象フラグ */
  is_reserve?: boolean | null | undefined
}

/** 時点残高情報 */
export type ForeignCurrencyManagementBalance = {
  /** 銀行口座 */
  bank_account_id?: number | null | undefined
  /** 通貨 */
  currency_cd1?: string | null | undefined
  /** 使用目的 */
  foreign_currency_purpose_cd1?: string | null | undefined
  /** 購入日 */
  purchase_on?: string | null | undefined
  /** 時点平均レート */
  avg_rate?: string | null | undefined
  /** 月次残高金額 */
  monthly_foreign_currency_balance_amount?: string | null | undefined
}

/** 外貨受払 */
export type ForeignCurrencyTransaction = {
  /** ID */
  id: number
  /** 外貨受払区分 */
  foreign_currency_in_out_type_cd1?: string | null | undefined
  /** 外貨受払日 */
  transacted_on?: string | null | undefined
  /** 通貨CD */
  currency_cd1?: string | null | undefined
  /** 使用目的CD */
  foreign_currency_purpose_cd1?: string | null | undefined
  /** 銀行口座ID */
  bank_account_id?: number | null | undefined

  bank_account?: BankAccount | undefined

  /** 購入日 */
  purchase_on?: string | null | undefined
  /** 受払レート */
  transaction_rate?: string | null | undefined
  /** 受払金額 */
  transaction_amount?: string | null | undefined
  /** 平均レート */
  average_rate?: string | null | undefined
  /** 外貨購入ID */
  foreign_currency_purchase_id?: number | null | undefined

  foreign_currency_purchase?: ForeignCurrencyPurchase | undefined

  /** 支払実績ID */
  payment_result_id?: number | null | undefined

  payment_result?: PaymentResult | undefined

  /** 日次更新済フラグ */
  is_completed: boolean
} & BaseModel

/** 海外入金データ受信 */
export type ForeignDepositReceipt = {
  /** ID */
  id: number
  /** 入金先ID */
  deposit_customer_id?: number | null | undefined

  deposit_customer?: Customer | undefined

  /** 入金実績ID */
  deposit_result_id?: number | null | undefined

  deposit_result?: DepositResult | undefined

  /** 入金日 */
  deposit_on?: string | null | undefined
  /** 入金方法 */
  deposit_type_cd1?: string | null | undefined
  /** 通貨CD */
  currency_cd1?: string | null | undefined
  /** 入金額 */
  deposit_amount?: string | null | undefined
  /** 処理済フラグ */
  is_completed: boolean
  /** 送金依頼人名 */
  remitter?: string | null | undefined
  /** 貴社整理番号 */
  mtx_reference_no?: string | null | undefined
  /** ご照会番号 */
  bank_reference_no?: string | null | undefined
  /** 連絡事項 */
  message?: string | null | undefined
  /** 入金予定ID */
  deposit_schedule_id?: number | null | undefined

  deposit_schedule?: DepositSchedule | undefined

  /** 案内日 */
  information_on?: string | null | undefined
  /** 入金時レート */
  deposit_rate?: string | null | undefined
  /** 入金予定残額。海外入金データ受信確認_詳細API(検索)APIでのみ取得されます。 */
  deposit_schedule_balance?: string | null | undefined
  /** 差額。海外入金データ受信確認_詳細API(検索)APIでのみ取得されます。 */
  difference_amount?: string | null | undefined
} & BaseModel

/** 海外入金データ受信一括操作対象 */
export type ForeignDepositReceiptBulkTarget = ForeignDepositReceipt & BulkTarget

/** 海外入金データ受信入金登録操作対象 */
export type ForeignDepositReceiptDepositTarget = ForeignDepositReceipt & {
  deposit_customer?: {
    /** 入金先ID */
    id: number
    /** 入金先IDM */
    idm: string
  } | undefined
} & BulkTarget

/** コスト通関明細 */
export type ImportCostCustom = {
  /** ID */
  id: number
  /** コストID */
  import_cost_id?: number | null | undefined

  import_cost?: ImportCost | undefined

  /** 通関許可番号 */
  customs_no?: string | null | undefined
  /** 関税金額 */
  customs_amount?: string | null | undefined
  /** 酒税金額 */
  liquor_tax_amount?: string | null | undefined
  /** 原価消費税(合計) */
  consumption_tax_amount?: string | null | undefined
  /** 地方消費税(合計) */
  local_consumption_tax_amount?: string | null | undefined
  /** 原価消費税(免税額) */
  consumption_tax_duty_free?: string | null | undefined
  /** 地方消費税(免税額) */
  local_consumption_tax_duty_free?: string | null | undefined
  /** 原価消費税(通常) */
  consumption_tax?: string | null | undefined
  /** 地方消費税(通常) */
  local_consumption_tax?: string | null | undefined
  /** 税金額 */
  tax_amount?: string | null | undefined
  /** 海上保険金額 */
  insurance_amount?: string | null | undefined
  /** 保険申告日 */
  insurance_on?: string | null | undefined
  /** 申告重量 */
  report_weight?: string | null | undefined
  /** 申告運賃 */
  report_fare?: string | null | undefined
  /** レート通貨1CD */
  currency1_cd1?: string | null | undefined
  /** レート1 */
  rate1?: string | null | undefined
  /** レート通貨2CD */
  currency2_cd1?: string | null | undefined
  /** レート2 */
  rate2?: string | null | undefined
  /** レート通貨3CD */
  currency3_cd1?: string | null | undefined
  /** レート3 */
  rate3?: string | null | undefined
  /** 許可記号 */
  mark?: string | null | undefined
  /** 申告運賃通貨 */
  fare_currency_cd1?: string | null | undefined
  tax_payments?: TaxPayment[] | undefined
} & BaseModel

/** コスト通関明細一括操作対象 */
export type ImportCostCustomBulkTarget = ImportCostCustom & BulkTarget

/** コスト費用明細 */
export type ImportCostDetail = {
  /** ID */
  id: number
  /** コストID */
  import_cost_id?: number | null | undefined

  import_cost?: ImportCost | undefined

  /** 費用科目ID */
  cost_subject_id?: number | null | undefined

  cost_subject?: CostSubject | undefined

  /** 支払先ID */
  pay_vendor_id?: number | null | undefined

  pay_vendor?: Vendor | undefined

  /** 通貨CD */
  currency_cd1?: string | null | undefined
  /** 支払金額(外貨) */
  payment_amount?: string | null | undefined
  /** 輸入コスト支払依頼日 */
  request_payment_on?: string | null | undefined
  /** 許可記号 */
  mark?: string | null | undefined

  payment_schedule?: PaymentSchedule | undefined
} & BaseModel

/** コスト見出 */
export type ImportCost = {
  /** ID */
  id: number
  /** 船積オーダーID */
  shipping_order_id?: number | null | undefined

  shipping_order?: ShippingOrder | undefined

  /** 作成者ID */
  operator_user_id?: number | null | undefined

  operator_user?: User | undefined

  /** データ書出日 */
  output_on?: string | null | undefined
  /** 総重量 */
  total_weight?: string | null | undefined
  import_cost_details?: ImportCostDetail[] | undefined
  import_cost_customs?: ImportCostCustom[] | undefined
} & BaseModel

/** コスト一括操作対象 */
export type ImportCostBulkTarget = {
  /** 船積オーダーID */
  id?: number | undefined

  import_cost?: ImportCost & BulkTarget & {
    import_cost_details: (ImportCostDetail & BulkTarget)[]
    import_cost_customs: (ImportCostCustom & BulkTarget)[]
  } | undefined
}

/** 輸入支払予定 */
export type ImportPaymentItem = {
  /** 輸入・国内区分 */
  import_domestic_cd1?: string | null | undefined
  /** 支払確定No */
  payment_no?: string | null | undefined
  /** 支払実績ID */
  payment_result_id?: number | null | undefined

  payment_result?: PaymentResult | undefined

  /** 予約オーダー明細ID */
  import_reservation_detail_id?: number | null | undefined

  import_reservation_detail?: ShippingReservationDetail | undefined

  /** 船積オーダー明細ID */
  import_shipping_detail_id?: number | null | undefined

  import_shipping_detail?: ShippingOrderDetail | undefined

  /** 国内発注明細ID */
  domestic_order_detail_id?: number | null | undefined

  domestic_order_detail?: DomesticOrderDetail | undefined

  /** 仕入実績ID */
  purchase_result_id?: number | null | undefined

  purchase_result?: PurchaseResult | undefined

  /** コスト費用明細ID */
  import_cost_detail_id?: number | null | undefined

  import_cost_detail?: ImportCostDetail | undefined

  /** 支払対象区分 */
  payment_target_cd1?: string | null | undefined
  /** PF Invoice No. */
  invoice_no?: string | null | undefined
  /** 支払期日 */
  payment_on?: string | null | undefined
  /** 支払先ID */
  vendor_id?: number | null | undefined

  vendor?: Vendor | undefined

  /** 支払条件ID */
  payment_condition_id?: number | null | undefined

  payment_condition?: PaymentCondition | undefined

  /** 実入数 */
  local_quantity_per_case?: number | null | undefined
  /** 実ケース数 */
  local_case_count?: number | null | undefined
  /** 実バラ数 */
  local_bottle_count?: number | null | undefined
  /** 通貨CD */
  currency_cd1?: string | null | undefined
  /** 現地単価 */
  local_unit_price?: string | null | undefined
  /** 支払予定金額(外貨) */
  payment_amount?: string | null | undefined
  /** 期日確定区分 */
  fixed_payment_date_cd1?: string | null | undefined
  /** 管理部受領日 */
  receipt_management_on?: string | null | undefined
  /** 支払内部備考 */
  note?: string | null | undefined
  /** 外貨使用目的CD */
  foreign_currency_purpose_cd1?: string | null | undefined
  /** 税グループCD */
  sales_tax_type_cd1?: string | null | undefined
  /** 税区分 */
  item_tax_type_cd1?: string | null | undefined
  /** 税率 */
  tax_rate?: string | null | undefined
  /** 消費税額 */
  tax_price?: string | null | undefined
  /** 相殺のbalance_book_id */
  balance_book_ids?: string | null | undefined
  /** 相殺金額_支払相殺内訳 */
  offset?: string | null | undefined
  /** 船積オーダーNo */
  shipping_order_no?: string | null | undefined
}

/** 輸入支払予定一括操作対象 */
export type ImportPaymentBulkTarget = PaymentResult & {
  payment_offset_details?: (PaymentOffsetDetail & BulkTarget)[] | undefined
  balance_book_offsets?: (BalanceBookOffset & {
    /** 管理部受領 */
    is_receipt?: boolean | null | undefined
  } & BulkTarget)[] | undefined
  /** PF_Invoice_No. */
  invoice_no?: string | null | undefined
  /** 船積オーダーNo */
  shipping_order_no?: string | null | undefined
  /** 予約オーダー表示No */
  shipping_reservation_display_no?: string | null | undefined
} & BulkTarget

/** 相殺内訳一括操作対象 */
export type ImportPaymentOffsetBulkTarget = PaymentOffsetDetail & BulkTarget & {
  /** 管理部受領 */
  is_receipt?: boolean | null | undefined
}

/** 仕訳履歴 */
export type JournalEntryHistory = {
  /** ID */
  id?: number | undefined
  /** 検索ID */
  search_id?: number | undefined

  search?: Search | undefined

  /** 検索IDM */
  search_idm?: string | undefined
  /** 支払実績ID */
  payment_result_id?: number | undefined

  payment_result?: PaymentResult | undefined

  /** 入金実績ID */
  deposit_result_id?: number | undefined

  deposit_result?: DepositResult | undefined

  /** 取得元更新カウンタ */
  original_update_count?: number | undefined
  /** 伝票日付 */
  document_on?: string | null | undefined
  /** 受付番号 */
  receipt_no?: string | null | undefined
  /** 伝票番号 */
  document_no?: string | null | undefined
  /** 借方部門コード */
  debit_department_code?: string | null | undefined
  /** 借方取引先コード */
  debit_client_code?: string | null | undefined
  /** 借方科目コード */
  debit_account_code?: string | null | undefined
  /** 借方枝番コード */
  debit_sub_account_code?: string | null | undefined
  /** 借方税率 */
  debit_tax_rate?: string | null | undefined
  /** 借方課税区分 */
  debit_tax_type?: string | null | undefined
  /** 借方軽減税率区分 */
  debit_item_tax_type?: string | null | undefined
  /** 借方摘要(全角30文字) */
  debit_journal_note?: string | null | undefined
  /** 貸方部門コード */
  credit_department_code?: string | null | undefined
  /** 貸方取引先コード */
  credit_client_code?: string | null | undefined
  /** 貸方科目コード */
  credit_account_code?: string | null | undefined
  /** 貸方枝番コード */
  credit_sub_account_code?: string | null | undefined
  /** 貸方税率 */
  credit_tax_rate?: string | null | undefined
  /** 貸方課税区分 */
  credit_tax_type?: string | null | undefined
  /** 貸方軽減税率区分 */
  credit_item_tax_type?: string | null | undefined
  /** 貸方摘要(全角30文字) */
  credit_journal_note?: string | null | undefined
  /** 分離区分 */
  segregation_type?: string | null | undefined
  /** 金額 */
  total_amount_jpy?: string | null | undefined
  /** 税込金額 */
  total_tax_incl_amount_jpy?: string | null | undefined
}

/** 月次締め管理 */
export type MonthlyClosing = {
  /** ID */
  id: number
  /** 月次締め区分 */
  closing_type_cd1?: string | null | undefined
  /** 月次締め年月 */
  closed_on?: string | null | undefined
  /** 処理済フラグ */
  is_completed: boolean
} & BaseModel

/** 月次外貨残高 */
export type MonthlyForeignCurrencyBalance = {
  /** ID */
  id: number
  /** 外貨残高管理年月 */
  year_month?: string | null | undefined
  /** 通貨CD */
  currency_cd1?: string | null | undefined
  /** 使用目的CD */
  foreign_currency_purpose_cd1?: string | null | undefined
  /** 銀行口座ID */
  bank_account_id?: number | null | undefined

  bank_account?: BankAccount | undefined

  /** 外貨購入ID */
  foreign_currency_purchase_id?: number | null | undefined

  foreign_currency_purchase?: ForeignCurrencyPurchase | undefined

  /** 平均レート */
  average_rate?: string | null | undefined
  /** 月次残高金額 */
  amount?: string | null | undefined
} & BaseModel

/** 倉庫別月別在庫受払集計 */
export type MonthlyLocationTransactionTotal = {
  /** ID */
  id: number
  /** 年月 */
  year_month?: string | null | undefined
  /** 倉庫ID */
  location_id?: number | null | undefined

  location?: Location | undefined

  /** 商品ID */
  invent_id?: number | null | undefined

  invent?: Invent | undefined

  /** 担当部署 */
  post_invent_cd1?: string | null | undefined
  /** 戦略分類 */
  strategy_type_cd1?: string | null | undefined
  /** 戦略分類0 */
  strategy_type_string1?: string | null | undefined
  /** 戦略分類1 */
  strategy_type_string2?: string | null | undefined
  /** 戦略分類4 */
  strategy_type_string5?: string | null | undefined
  /** 月初在庫数量 */
  begin_stock_count?: number | null | undefined
  /** 月初在庫単価 */
  begin_stock_price?: string | null | undefined
  /** 月初在庫金額 */
  begin_stock_amount?: string | null | undefined
  /** 当月購入数量 */
  purchase_count?: number | null | undefined
  /** 当月購入単価 */
  purchase_price?: string | null | undefined
  /** 当月購入金額 */
  purchase_amount?: string | null | undefined
  /** 当月購入(返品)数量 */
  return_purchase_count?: number | null | undefined
  /** 当月購入(返品)単価 */
  return_purchase_price?: string | null | undefined
  /** 当月購入(返品)金額 */
  return_purchase_amount?: string | null | undefined
  /** 当月移動(入庫)数量 */
  in_movement_count?: number | null | undefined
  /** 当月移動(入庫)単価 */
  in_movement_price?: string | null | undefined
  /** 当月移動(入庫)金額 */
  in_movement_amount?: string | null | undefined
  /** 当月在庫振替(入庫)数量 */
  in_stock_change_count?: number | null | undefined
  /** 当月在庫振替(入庫)単価 */
  in_stock_change_price?: string | null | undefined
  /** 当月在庫振替(入庫)金額 */
  in_stock_change_amount?: string | null | undefined
  /** 当月在庫調整(入庫)数量 */
  in_stock_adj_count?: number | null | undefined
  /** 当月在庫調整(入庫)単価 */
  in_stock_adj_price?: string | null | undefined
  /** 当月在庫調整(入庫)金額 */
  in_stock_adj_amount?: string | null | undefined
  /** 当月棚差調整(入庫)数量 */
  in_shelf_adj_count?: number | null | undefined
  /** 当月棚差調整(入庫)単価 */
  in_shelf_adj_price?: string | null | undefined
  /** 当月棚差調整(入庫)金額 */
  in_shelf_adj_amount?: string | null | undefined
  /** 最終仕入単価 */
  purchase_unit_price?: string | null | undefined
  /** 当月売上数量 */
  sales_count?: number | null | undefined
  /** 当月売上単価 */
  sales_price?: string | null | undefined
  /** 当月売上金額 */
  sales_amount?: string | null | undefined
  /** 当月売上(返品)数量 */
  return_sales_count?: number | null | undefined
  /** 当月売上(返品)単価 */
  return_sales_price?: string | null | undefined
  /** 当月売上(返品)金額 */
  return_sales_amount?: string | null | undefined
  /** 当月売上(破損)数量 */
  damaged_sales_count?: number | null | undefined
  /** 当月売上(破損)単価 */
  damaged_sales_price?: string | null | undefined
  /** 当月売上(破損)金額 */
  damaged_sales_amount?: string | null | undefined
  /** 当月売上(社内使用)数量 */
  internal_sales_count?: number | null | undefined
  /** 当月売上(社内使用)単価 */
  internal_sales_price?: string | null | undefined
  /** 当月売上(社内使用)金額 */
  internal_sales_amount?: string | null | undefined
  /** 当月売上(現品付)数量 */
  actual_sales_count?: number | null | undefined
  /** 当月売上(現品付)単価 */
  actual_sales_price?: string | null | undefined
  /** 当月売上(現品付)金額 */
  actual_sales_amount?: string | null | undefined
  /** 当月移動(出庫)数量 */
  out_movement_count?: number | null | undefined
  /** 当月移動(出庫)単価 */
  out_movement_price?: string | null | undefined
  /** 当月移動(出庫)金額 */
  out_movement_amount?: string | null | undefined
  /** 当月在庫振替(出庫)数量 */
  out_stock_change_count?: number | null | undefined
  /** 当月在庫振替(出庫)単価 */
  out_stock_change_price?: string | null | undefined
  /** 当月在庫振替(出庫)金額 */
  out_stock_change_amount?: string | null | undefined
  /** 当月在庫調整(出庫)数量 */
  out_stock_adj_count?: number | null | undefined
  /** 当月在庫調整(出庫)単価 */
  out_stock_adj_price?: string | null | undefined
  /** 当月在庫調整(出庫)金額 */
  out_stock_adj_amount?: string | null | undefined
  /** 当月棚差調整(出庫)数量 */
  out_shelf_adj_count?: number | null | undefined
  /** 当月棚差調整(出庫)単価 */
  out_shelf_adj_price?: string | null | undefined
  /** 当月棚差調整(出庫)金額 */
  out_shelf_adj_amount?: string | null | undefined
  /** 月末在庫数量 */
  end_stock_count?: number | null | undefined
  /** 月末在庫単価 */
  end_stock_price?: string | null | undefined
  /** 月末在庫金額 */
  end_stock_amount?: string | null | undefined
} & BaseModel

/** 全社月別在庫受払集計 */
export type MonthlyWholeTransactionTotal = {
  /** ID */
  id: number
  /** 年月 */
  year_month?: string | null | undefined
  /** 商品ID */
  invent_id?: number | null | undefined

  invent?: Invent | undefined

  /** 担当部署 */
  post_invent_cd1?: string | null | undefined
  /** 戦略分類 */
  strategy_type_cd1?: string | null | undefined
  /** 戦略分類0 */
  strategy_type_string1?: string | null | undefined
  /** 戦略分類1 */
  strategy_type_string2?: string | null | undefined
  /** 戦略分類4 */
  strategy_type_string5?: string | null | undefined
  /** 月初在庫数量 */
  begin_stock_count?: number | null | undefined
  /** 月初在庫単価 */
  begin_stock_price?: string | null | undefined
  /** 月初在庫金額 */
  begin_stock_amount?: string | null | undefined
  /** 当月購入数量 */
  purchase_count?: number | null | undefined
  /** 当月購入単価 */
  purchase_price?: string | null | undefined
  /** 当月購入金額 */
  purchase_amount?: string | null | undefined
  /** 当月購入(返品)数量 */
  return_purchase_count?: number | null | undefined
  /** 当月購入(返品)単価 */
  return_purchase_price?: string | null | undefined
  /** 当月購入(返品)金額 */
  return_purchase_amount?: string | null | undefined
  /** 当月移動(入庫)数量 */
  in_movement_count?: number | null | undefined
  /** 当月移動(入庫)単価 */
  in_movement_price?: string | null | undefined
  /** 当月移動(入庫)金額 */
  in_movement_amount?: string | null | undefined
  /** 当月在庫振替(入庫)数量 */
  in_stock_change_count?: number | null | undefined
  /** 当月在庫振替(入庫)単価 */
  in_stock_change_price?: string | null | undefined
  /** 当月在庫振替(入庫)金額 */
  in_stock_change_amount?: string | null | undefined
  /** 当月在庫調整(入庫)数量 */
  in_stock_adj_count?: number | null | undefined
  /** 当月在庫調整(入庫)単価 */
  in_stock_adj_price?: string | null | undefined
  /** 当月在庫調整(入庫)金額 */
  in_stock_adj_amount?: string | null | undefined
  /** 当月棚差調整(入庫)数量 */
  in_shelf_adj_count?: number | null | undefined
  /** 当月棚差調整(入庫)単価 */
  in_shelf_adj_price?: string | null | undefined
  /** 当月棚差調整(入庫)金額 */
  in_shelf_adj_amount?: string | null | undefined
  /** 最終仕入単価 */
  purchase_unit_price?: string | null | undefined
  /** 当月売上数量 */
  sales_count?: number | null | undefined
  /** 当月売上単価 */
  sales_price?: string | null | undefined
  /** 当月売上金額 */
  sales_amount?: string | null | undefined
  /** 当月売上(返品)数量 */
  return_sales_count?: number | null | undefined
  /** 当月売上(返品)単価 */
  return_sales_price?: string | null | undefined
  /** 当月売上(返品)金額 */
  return_sales_amount?: string | null | undefined
  /** 当月売上(破損)数量 */
  damaged_sales_count?: number | null | undefined
  /** 当月売上(破損)単価 */
  damaged_sales_price?: string | null | undefined
  /** 当月売上(破損)金額 */
  damaged_sales_amount?: string | null | undefined
  /** 当月売上(社内使用)数量 */
  internal_sales_count?: number | null | undefined
  /** 当月売上(社内使用)単価 */
  internal_sales_price?: string | null | undefined
  /** 当月売上(社内使用)金額 */
  internal_sales_amount?: string | null | undefined
  /** 当月売上(現品付)数量 */
  actual_sales_count?: number | null | undefined
  /** 当月売上(現品付)単価 */
  actual_sales_price?: string | null | undefined
  /** 当月売上(現品付)金額 */
  actual_sales_amount?: string | null | undefined
  /** 当月移動(出庫)数量 */
  out_movement_count?: number | null | undefined
  /** 当月移動(出庫)単価 */
  out_movement_price?: string | null | undefined
  /** 当月移動(出庫)金額 */
  out_movement_amount?: string | null | undefined
  /** 当月在庫振替(出庫)数量 */
  out_stock_change_count?: number | null | undefined
  /** 当月在庫振替(出庫)単価 */
  out_stock_change_price?: string | null | undefined
  /** 当月在庫振替(出庫)金額 */
  out_stock_change_amount?: string | null | undefined
  /** 当月在庫調整(出庫)数量 */
  out_stock_adj_count?: number | null | undefined
  /** 当月在庫調整(出庫)単価 */
  out_stock_adj_price?: string | null | undefined
  /** 当月在庫調整(出庫)金額 */
  out_stock_adj_amount?: string | null | undefined
  /** 当月棚差調整(出庫)数量 */
  out_shelf_adj_count?: number | null | undefined
  /** 当月棚差調整(出庫)単価 */
  out_shelf_adj_price?: string | null | undefined
  /** 当月棚差調整(出庫)金額 */
  out_shelf_adj_amount?: string | null | undefined
  /** 月末在庫数量 */
  end_stock_count?: number | null | undefined
  /** 月末在庫単価 */
  end_stock_price?: string | null | undefined
  /** 月末在庫金額 */
  end_stock_amount?: string | null | undefined
  /** 当月購入調整金額 */
  purchase_adj_amount?: string | null | undefined
} & BaseModel

/** その他金額実績 */
export type OtherCostResult = {
  /** ID */
  id: number
  /** 入金実績ID */
  deposit_result_id?: number | null | undefined

  deposit_result?: DepositResult | undefined

  /** その他費用区分 */
  other_cost_type_cd1?: string | null | undefined
  /** その他金額（JPY） */
  other_amount_jpy?: string | null | undefined
  /** その他金額（取引通貨） */
  other_amount?: string | null | undefined
  /** 摘要 */
  abstract?: string | null | undefined
} & BaseModel

/** その他金額予定 */
export type OtherCostSchedule = {
  /** ID */
  id: number
  /** 入金予定ID */
  deposit_schedule_id?: number | null | undefined

  deposit_schedule?: DepositSchedule | undefined

  /** その他費用区分 */
  other_cost_type_cd1?: string | null | undefined
  /** その他金額（JPY） */
  other_amount_jpy?: string | null | undefined
  /** その他金額（取引通貨） */
  other_amount?: string | null | undefined
  /** 摘要 */
  abstract?: string | null | undefined
} & BaseModel

/** 過入金 */
export type OverPayment = {
  /** ID */
  id: number
  /** 入金実績ID */
  deposit_result_id?: number | null | undefined

  deposit_result?: DepositResult | undefined

  /** 過入金金額 */
  amount?: string | null | undefined
  /** 過入金区分 */
  over_received_type_cd1?: string | null | undefined
  /** 摘要 */
  abstract?: string | null | undefined
} & BaseModel

/** 買掛残高 */
export type PayableAccount = {
  /** ID */
  id: number
  /** 輸入・国内区分 */
  import_domestic_cd1?: string | null | undefined
  /** 仕入先ID */
  vendor_id?: number | null | undefined

  vendor?: Vendor | undefined

  /** 通貨CD */
  currency_cd1?: string | null | undefined
  /** 買掛年月 */
  purchase_year_month?: string | null | undefined
  /** 前月繰越金額(外貨) */
  pre_carried_forward?: string | null | undefined
  /** 前月繰越金額(JPY) */
  pre_carried_forward_jpy?: string | null | undefined
  /** 当月税込仕入金額１(外貨) */
  purchase_inc_tax1?: string | null | undefined
  /** 当月税込仕入金額１(JPY) */
  purchase_inc_tax_jpy1?: string | null | undefined
  /** 当月税込仕入金額２(外貨) */
  purchase_inc_tax2?: string | null | undefined
  /** 当月税込仕入金額２(JPY) */
  purchase_inc_tax_jpy2?: string | null | undefined
  /** 当月税込仕入金額３(外貨) */
  purchase_inc_tax3?: string | null | undefined
  /** 当月税込仕入金額３(JPY) */
  purchase_inc_tax_jpy3?: string | null | undefined
  /** 税抜仕入金額１(外貨) */
  purchase1?: string | null | undefined
  /** 税抜仕入金額１(JPY) */
  purchase_jpy1?: string | null | undefined
  /** 税抜仕入金額２(外貨) */
  purchase2?: string | null | undefined
  /** 税抜仕入金額２(JPY) */
  purchase_jpy2?: string | null | undefined
  /** 税抜仕入金額３(外貨) */
  purchase3?: string | null | undefined
  /** 税抜仕入金額３(JPY) */
  purchase_jpy3?: string | null | undefined
  /** 非課税仕入金額(外貨) */
  tax_exempt?: string | null | undefined
  /** 非課税仕入金額(JPY) */
  tax_exempt_jpy?: string | null | undefined
  /** 不課税仕入金額(外貨) */
  tax_free?: string | null | undefined
  /** 不課税仕入金額(JPY) */
  tax_free_jpy?: string | null | undefined
  /** 消費税金額１(外貨) */
  tax1?: string | null | undefined
  /** 消費税金額１(JPY) */
  tax_jpy1?: string | null | undefined
  /** 消費税金額２(外貨) */
  tax2?: string | null | undefined
  /** 消費税金額２(JPY) */
  tax_jpy2?: string | null | undefined
  /** 消費税金額３(外貨) */
  tax3?: string | null | undefined
  /** 消費税金額３(JPY) */
  tax_jpy3?: string | null | undefined
  /** 値引金額１(外貨) */
  discount1?: string | null | undefined
  /** 値引金額１(JPY) */
  discount_jpy1?: string | null | undefined
  /** 値引金額２(外貨) */
  discount2?: string | null | undefined
  /** 値引金額２(JPY) */
  discount_jpy2?: string | null | undefined
  /** 値引金額３(外貨) */
  discount3?: string | null | undefined
  /** 値引金額３(JPY) */
  discount_jpy3?: string | null | undefined
  /** 振込手数料(外貨) */
  commission?: string | null | undefined
  /** 振込手数料(JPY) */
  commission_jpy?: string | null | undefined
  /** 現金他(外貨) */
  cash?: string | null | undefined
  /** 現金他(JPY) */
  cash_jpy?: string | null | undefined
  /** 後払金額(外貨) */
  deferred_payment?: string | null | undefined
  /** 後払金額(JPY) */
  deferred_payment_jpy?: string | null | undefined
  /** 前渡金額(外貨) */
  deposit?: string | null | undefined
  /** 前渡金額(JPY) */
  deposit_jpy?: string | null | undefined
  /** 前払金額(外貨) */
  advance_payment?: string | null | undefined
  /** 前払金額(JPY) */
  advance_payment_jpy?: string | null | undefined
  /** 為替調整加算金額(JPY) */
  exchange_adjust_plus?: string | null | undefined
  /** 為替調整減算金額(JPY) */
  exchange_adjust_minus?: string | null | undefined
  /** その他金額(外貨) */
  other?: string | null | undefined
  /** その他金額(JPY) */
  other_jpy?: string | null | undefined
  /** 次月繰越金額(外貨) */
  next_carried_forward?: string | null | undefined
  /** 次月繰越金額(JPY) */
  next_carried_forward_jpy?: string | null | undefined
  /** 消費税調整金額(JPY) */
  adjust_tax?: string | null | undefined
} & BaseModel

/** 支払内訳 */
export type PaymentDetail = {
  /** ID */
  id: number
  /** 支払実績ID */
  payment_result_id?: number | null | undefined

  payment_result?: PaymentResult | undefined

  /** 負担部門ID */
  team_id?: number | null | undefined

  team?: Team | undefined

  /** 勘定科目ID */
  account_title_id?: number | null | undefined

  account_title?: AccountTitle | undefined

  /** 補助科目ID */
  sub_account_title_id?: number | null | undefined

  sub_account_title?: SubAccountTitle | undefined

  /** 仕訳明細摘要 */
  journal_note?: string | null | undefined
  /** レート */
  rate?: string | null | undefined
  /** 支払金額(外貨) */
  paid_amount?: string | null | undefined
  /** 支払金額(JPY) */
  paid_amount_jpy?: string | null | undefined
  /** 管理行No */
  line_no?: number | null | undefined
} & BaseModel

/** 支払予定一括操作対象 */
export type PaymentDetailBulkTarget = PaymentDetail & BulkTarget

/** 支払期日明細 */
export type PaymentDueDetail = {
  /** 支払予定ID */
  payment_schedule_id?: number | null | undefined

  payment_schedule?: PaymentSchedule | undefined

  /** 年号 */
  vintage?: string | null | undefined
  /** 函荷姿CD */
  box_style_cd1?: string | null | undefined
  /** 商品IDM */
  invent_idm?: string | null | undefined
  /** 商品名(伝票印字品名) */
  name_denpatu?: string | null | undefined
  /** INVNo. */
  invoice_no?: string | null | undefined
  /** 並び順 */
  display_order?: number | null | undefined
}

/** 支払期日 */
export type PaymentDueItem = {
  /** データ判別用(1:未確定予約/2:未確定船積/3:確定予約/4:確定船積) */
  data_type?: string | undefined
  /** 表示用No */
  display_no?: string | undefined
  /** 予約オーダーID */
  shipping_reservation_id?: number | null | undefined

  shipping_reservation?: ShippingReservation | undefined

  /** 船積オーダーID */
  shipping_order_id?: number | null | undefined

  shipping_order?: ShippingOrder | undefined

  /** 予約オーダーNo */
  shipping_reservation_display_no?: string | null | undefined
  /** 船積オーダーNo */
  shipping_order_display_no?: string | null | undefined
  /** バイヤーID */
  buyer_user_id?: number | null | undefined

  buyer_user?: User | undefined

  /** オペレーターID */
  operator_user_id?: number | null | undefined

  operator_user?: User | undefined

  /** 通関担当者ID */
  customs_user_id?: number | null | undefined

  customs_user?: User | undefined

  /** BY_名 */
  buyer_user_name?: string | null | undefined
  /** OP_名 */
  operator_user_name?: string | null | undefined
  /** CST_名 */
  customs_user_name?: string | null | undefined
  /** 相殺指定有フラグ */
  exist_balance_book_offset?: boolean | null | undefined
  /** 支払先ID */
  vendor_id?: number | null | undefined

  vendor?: Vendor | undefined

  /** 支払先IDM */
  vendor_idm?: string | null | undefined
  /** 支払先名 */
  vendor_name_jp_abbr?: string | null | undefined
  /** 支払条件ID */
  payment_condition_id?: number | null | undefined

  payment_condition?: PaymentCondition | undefined

  /** 支払条件IDM */
  payment_condition_idm?: string | null | undefined
  /** 支払条件名 */
  payment_condition_name?: string | null | undefined
  /** 支払期日 */
  payment_on?: string | null | undefined
  /** 期日確定区分 */
  fixed_payment_date_cd1?: string | null | undefined
  /** PF_Invoice_No. */
  invoice_no?: string | null | undefined
  /** 支払確定No */
  payment_no?: string | null | undefined
  /** 支払実績ID */
  payment_result_id?: number | null | undefined
  /** 管理部受領日 */
  receipt_management_on?: string | null | undefined
  /** 通貨CD */
  currency_cd1?: string | null | undefined
  /** 支払予定金額(外貨)合計 */
  payment_amount?: string | null | undefined
  /** 支払実行日 */
  paid_on?: string | null | undefined
  /** 入港日 */
  eta_on?: string | null | undefined
  /** 出港日 */
  etd_on?: string | null | undefined
}

/** 支払相殺内訳 */
export type PaymentOffsetDetail = {
  /** ID */
  id: number
  /** 支払実績ID */
  payment_result_id?: number | null | undefined

  payment_result?: PaymentResult | undefined

  /** BalanceBook相殺先ID */
  balance_book_offset_id?: number | null | undefined

  balance_book_offset?: BalanceBookOffset | undefined

  /** 相殺元レート */
  offset_rate?: string | null | undefined
  /** 相殺金額(外貨) */
  offset?: string | null | undefined
  /** 相殺金額(JPY) */
  offset_jpy?: string | null | undefined
  /** 負担部門ID */
  team_id?: number | null | undefined

  team?: Team | undefined

  /** 勘定科目ID */
  account_title_id?: number | null | undefined

  account_title?: AccountTitle | undefined

  /** 補助科目ID */
  sub_account_title_id?: number | null | undefined

  sub_account_title?: SubAccountTitle | undefined

  /** 仕訳明細摘要 */
  journal_note?: string | null | undefined
} & BaseModel

/** 支払実績見出 */
export type PaymentResult = {
  /** ID */
  id: number | null
  /** 輸入・国内区分 */
  import_domestic_cd1?: string | null | undefined
  /** 支払期日 */
  payment_on?: string | null | undefined
  /** 支払実行日 */
  paid_on?: string | null | undefined
  /** 支払区分 */
  payment_type_cd1?: string | null | undefined
  /** 支払対象区分 */
  payment_target_cd1?: string | null | undefined
  /** 支払実績登録担当者ID */
  user_id?: number | null | undefined

  user?: User | undefined

  /** 支払先ID */
  vendor_id?: number | null | undefined

  vendor?: Vendor | undefined

  /** 支払条件ID */
  payment_condition_id?: number | null | undefined

  payment_condition?: PaymentCondition | undefined

  /** 通貨CD */
  currency_cd1?: string | null | undefined
  /** 支払銀行口座ID */
  bank_account_id?: number | null | undefined

  bank_account?: BankAccount | undefined

  /** 使用目的CD */
  foreign_currency_purpose_cd1?: string | null | undefined
  /** 支払予定金額(外貨) */
  payment_amount?: string | null | undefined
  /** 支払予定金額(JPY) */
  payment_amount_jpy?: string | null | undefined
  /** 値引き額１(外貨) */
  discount1?: string | null | undefined
  /** 値引き額２(外貨) */
  discount2?: string | null | undefined
  /** 値引き額３(外貨) */
  discount3?: string | null | undefined
  /** 値引き額１(JPY) */
  discount_jpy1?: string | null | undefined
  /** 値引き額２(JPY) */
  discount_jpy2?: string | null | undefined
  /** 値引き額３(JPY) */
  discount_jpy3?: string | null | undefined
  /** 相殺金額(外貨) */
  offset?: string | null | undefined
  /** 相殺金額(JPY) */
  offset_jpy?: string | null | undefined
  /** 追加支払金額(外貨) */
  addition?: string | null | undefined
  /** 追加支払金額(JPY) */
  addition_jpy?: string | null | undefined
  /** 支払金額(外貨) */
  paid_amount?: string | null | undefined
  /** 支払金額(JPY) */
  paid_amount_jpy?: string | null | undefined
  /** 振込手数料(外貨) */
  commission?: string | null | undefined
  /** 振込手数料(JPY) */
  commission_jpy?: string | null | undefined
  /** 銀行送金金額(外貨) */
  cash_transfer?: string | null | undefined
  /** 銀行送金金額(JPY) */
  cash_transfer_jpy?: string | null | undefined
  /** 消費税調整金額 */
  adjust_tax?: string | null | undefined
  /** 支払レート */
  payment_rate?: string | null | undefined
  /** 原計レート */
  cost_rate?: string | null | undefined
  /** 仕訳摘要 */
  journal_note?: string | null | undefined
  /** 内部備考 */
  note?: string | null | undefined
  /** 銀行送金備考 */
  cash_transfer_note?: string | null | undefined
  /** 予定確定日 */
  fixed_schedule_on?: string | null | undefined
  /** 実績確定日 */
  fixed_result_on?: string | null | undefined
  /** 送金データ出力日 */
  output_on?: string | null | undefined
  /** 運賃相殺金額(外貨) */
  fare_offset?: string | null | undefined
  /** 運賃相殺金額(JPY) */
  fare_offset_jpy?: string | null | undefined
  /** 運賃相殺レート */
  fare_offset_rate?: string | null | undefined
  payment_schedules?: PaymentSchedule[] | undefined
  payment_offset_details?: PaymentOffsetDetail[] | undefined
  payment_details?: PaymentDetail[] | undefined
  /** 消費税額 */
  tax_price?: string | null | undefined
} & BaseModel

/** 支払予定一括操作対象 */
export type PaymentResultBulkTarget = PaymentResult & BulkTarget

/** 支払予定 */
export type PaymentSchedule = {
  /** ID */
  id: number
  /** 輸入・国内区分 */
  import_domestic_cd1?: string | null | undefined
  /** 支払確定No */
  payment_no?: string | null | undefined
  /** 支払実績ID */
  payment_result_id?: number | null | undefined

  payment_result?: PaymentResult | undefined

  /** 予約オーダー明細ID */
  import_reservation_detail_id?: number | null | undefined

  import_reservation_detail?: ShippingReservationDetail | undefined

  /** 船積オーダー明細ID */
  import_shipping_detail_id?: number | null | undefined

  import_shipping_detail?: ShippingOrderDetail | undefined

  /** 国内発注明細ID */
  domestic_order_detail_id?: number | null | undefined

  domestic_order_detail?: DomesticOrderDetail | undefined

  /** 仕入実績ID */
  purchase_result_id?: number | null | undefined

  purchase_result?: PurchaseResult | undefined

  /** コスト費用明細ID */
  import_cost_detail_id?: number | null | undefined

  import_cost_detail?: ImportCostDetail | undefined

  /** 支払対象区分 */
  payment_target_cd1?: string | null | undefined
  /** PF Invoice No. */
  invoice_no?: string | null | undefined
  /** 支払期日 */
  payment_on?: string | null | undefined
  /** 支払先ID */
  vendor_id?: number | null | undefined

  vendor?: Vendor | undefined

  /** 支払条件ID */
  payment_condition_id?: number | null | undefined

  payment_condition?: PaymentCondition | undefined

  /** 実入数 */
  local_quantity_per_case?: number | null | undefined
  /** 実ケース数 */
  local_case_count?: number | null | undefined
  /** 実バラ数 */
  local_bottle_count?: number | null | undefined
  /** 通貨CD */
  currency_cd1?: string | null | undefined
  /** 現地単価 */
  local_unit_price?: string | null | undefined
  /** 支払予定金額(外貨) */
  payment_amount?: string | null | undefined
  /** 期日確定区分 */
  fixed_payment_date_cd1?: string | null | undefined
  /** 管理部受領日 */
  receipt_management_on?: string | null | undefined
  /** 支払内部備考 */
  note?: string | null | undefined
  /** 外貨使用目的CD */
  foreign_currency_purpose_cd1?: string | null | undefined
  /** 税グループCD */
  sales_tax_type_cd1?: string | null | undefined
  /** 税区分 */
  item_tax_type_cd1?: string | null | undefined
  /** 税率 */
  tax_rate?: string | null | undefined
  /** 消費税額 */
  tax_price?: string | null | undefined
} & BaseModel

/** 支払予定一括操作対象 */
export type PaymentScheduleBulkTarget = PaymentSchedule & BulkTarget

/** 在庫・仕入計上予定 */
export type PurchaseReservation = {
  /** ID */
  id: number
  /** 船積オーダー明細ID */
  shipping_order_detail_id?: number | null | undefined

  shipping_order_detail?: ShippingOrderDetail | undefined

  /** 国内発注明細ID */
  domestic_order_detail_id?: number | null | undefined

  domestic_order_detail?: DomesticOrderDetail | undefined

  /** 取引区分 */
  stock_trade_type_cd1: string
  /** 仕入先ID */
  order_vendor_id: number

  order_vendor?: Vendor | undefined

  /** 支払先ID */
  pay_vendor_id: number

  pay_vendor?: Vendor | undefined

  /** 支払条件ID */
  payment_condition_id: number

  payment_condition?: PaymentCondition | undefined

  /** 予定倉庫ID */
  location_id?: number | null | undefined

  location?: Location | undefined

  /** 計上予定日 */
  will_record_on: string
  /** バイヤーID */
  buyer_user_id?: number | null | undefined

  buyer_user?: User | undefined

  /** 通貨CD */
  currency_cd1: string
  /** 在庫管理対象FLG */
  is_stock: boolean
  /** 商品ID */
  invent_id: number

  invent?: Invent | undefined

  /** 生産者ID */
  maker_vendor_id?: number | null | undefined

  maker_vendor?: Vendor | undefined

  /** 年号 */
  vintage?: string | null | undefined
  /** 内容量 */
  volume?: number | null | undefined
  /** 登録入数 */
  quantity_per_case: number
  /** 発注ケース数 */
  order_case_count: number
  /** 発注バラ数 */
  order_bottle_count: number
  /** 発注バラ合計 */
  order_total_count: number
  /** 実搬入ケース数 */
  real_case_count?: number | null | undefined
  /** 実搬入バラ数 */
  real_bottle_count?: number | null | undefined
  /** 実搬入バラ合計 */
  real_total_count?: number | null | undefined
  /** 差異バラ合計 */
  diff_total_count?: number | null | undefined
  /** 現地単価 */
  local_unit_price?: string | null | undefined
  /** 仕入予定金額(外貨) */
  purchase_amount?: string | null | undefined
  /** 備考(営業部) */
  note?: string | null | undefined
  /** 営業用予約受注不可フラグ */
  is_disabled_reservation: boolean
  /** 打切フラグ */
  is_quit: boolean

  purchase_result?: PurchaseResult | undefined
} & BaseModel

/** 在庫・仕入計上予定一括操作対象 */
export type PurchaseReservationBulkTarget = PurchaseReservation & BulkTarget

/** 在庫・仕入計上実績 */
export type PurchaseResult = {
  /** ID */
  id: number
  /** 在庫・仕入計上予定ID */
  purchase_reservation_id?: number | null | undefined

  purchase_reservation?: PurchaseReservation | undefined

  /** 取引区分 */
  stock_trade_type_cd1: string
  /** 仕入先ID */
  order_vendor_id?: number | null | undefined

  order_vendor?: Vendor | undefined

  /** 支払先ID */
  pay_vendor_id: number

  pay_vendor?: Vendor | undefined

  /** 支払条件ID */
  payment_condition_id: number

  payment_condition?: PaymentCondition | undefined

  /** 実績倉庫ID */
  location_id?: number | null | undefined

  location?: Location | undefined

  /** 計上日 */
  record_on: string
  /** 計上担当者ID */
  record_user_id: number

  record_user?: User | undefined

  /** 通貨CD */
  currency_cd1: string
  /** 在庫管理対象FLG */
  is_stock: boolean
  /** 商品ID */
  invent_id: number

  invent?: Invent | undefined

  /** 生産者ID */
  maker_vendor_id?: number | null | undefined

  maker_vendor?: Vendor | undefined

  /** 年号 */
  vintage?: string | null | undefined
  /** 内容量 */
  volume?: number | null | undefined
  /** 登録入数 */
  quantity_per_case: number
  /** 計上ケース数 */
  record_case_count: number
  /** 計上バラ数 */
  record_bottle_count: number
  /** 現地単価 */
  local_unit_price?: string | null | undefined
  /** 仕入金額(外貨) */
  purchase_amount?: string | null | undefined
  /** 仕入金額(JPY) */
  purchase_amount_jpy?: string | null | undefined
  /** 仕入時レート */
  purchase_rate?: string | null | undefined
  /** 仕入金額(原計レート) */
  purchase_rate_cost?: string | null | undefined
  /** 原計レート */
  rate_cost?: string | null | undefined
  /** 税グループCD */
  sales_tax_type_cd1?: string | null | undefined
  /** 税区分 */
  item_tax_type_cd1?: string | null | undefined
  /** 税率 */
  tax_rate?: string | null | undefined
  /** 消費税額 */
  tax_price?: string | null | undefined
  /** 支払実行区分 */
  payment_execution_type_cd1?: string | null | undefined
  /** 会計仕入金額(JPY) */
  account_purchase_amount_jpy?: string | null | undefined
  /** 内部備考 */
  note?: string | null | undefined

  payment_schedule?: PaymentSchedule | undefined

  purchase_cost?: PurchaseCost | undefined
} & BaseModel

/** 在庫・仕入計上実績一括操作対象 */
export type PurchaseResultBulkTarget = PurchaseResult & {
  /** 打切フラグ */
  is_quit?: boolean | undefined
} & BulkTarget

/** 売掛残高 */
export type ReceivableAccount = {
  /** 売掛残高ID */
  id: number
  /** 国内・海外区分 */
  domestic_foreign_cd1?: string | null | undefined
  /** 得意先ID */
  customer_id?: number | null | undefined

  customer?: Customer | undefined

  /** 通貨CD */
  currency_cd1?: string | null | undefined
  /** 売掛年月 */
  sale_year_month?: string | null | undefined
  /** 前月繰越金額 */
  pre_carried_forward?: string | null | undefined
  /** 当月売上金額 */
  current_sale_inc_tax?: string | null | undefined
  /** 課税売上1 */
  current_sale1?: string | null | undefined
  /** 課税売上2 */
  current_sale2?: string | null | undefined
  /** 課税売上3 */
  current_sale3?: string | null | undefined
  /** 非課税売上 */
  tax_exempt?: string | null | undefined
  /** 免税売上 */
  duty_free?: string | null | undefined
  /** 消費税1 */
  tax1?: string | null | undefined
  /** 消費税2 */
  tax2?: string | null | undefined
  /** 消費税3 */
  tax3?: string | null | undefined
  /** 消費税調整 */
  tax_adjustment?: string | null | undefined
  /** 入金 */
  deposit?: string | null | undefined
  /** 振込手数料 */
  commission?: string | null | undefined
  /** 値引1 */
  discount1?: string | null | undefined
  /** 値引2 */
  discount2?: string | null | undefined
  /** 値引3 */
  discount3?: string | null | undefined
  /** 為替調整加算 */
  currency_adjustment_plus?: string | null | undefined
  /** 為替調整減算 */
  currency_adjustment_minus?: string | null | undefined
  /** その他 */
  other?: string | null | undefined
  /** 次月繰越金額 */
  next_carried_forward?: string | null | undefined
  /** (取引通貨)前月繰越金額 */
  pre_carried_forward_trading_currency?: string | null | undefined
  /** (取引通貨)当月売上金額 */
  current_sale_inc_tax_trading_currency?: string | null | undefined
  /** (取引通貨)入金金額 */
  deposit_trading_currency?: string | null | undefined
  /** (取引通貨)その他 */
  other_trading_currency?: string | null | undefined
  /** (取引通貨)次月繰越金額 */
  next_carried_forward_trading_currency?: string | null | undefined
} & BaseModel

/** 直近出荷履歴 */
export type RecentShippingHistory = {
  /** ID */
  id: number
  /** 得意先ID */
  customer_id: number

  customer?: Customer | undefined

  /** 商品ID */
  invent_id: number

  invent?: Invent | undefined

  /** 備考 */
  memo?: string | null | undefined
  /** 備考更新日 */
  memo_updated_on?: string | null | undefined
} & BaseModel

/** 直近出荷履歴・国内受注 */
export type RecentShippingHistoryWithSalesOrder = {
  /** 直近出荷履歴ID */
  recent_shipping_history_id?: number | null | undefined
  /** 国内受注明細ID */
  sales_order_detail_id?: number | null | undefined
  /** 国内受注ヘッダID */
  sales_order_id?: number | null | undefined
  /** 得意先ID */
  customer_id?: number | null | undefined

  customer?: Customer | undefined

  /** 商品ID */
  invent_id?: number | null | undefined

  invent?: Invent | undefined

  /** 受注No */
  no?: string | null | undefined
  /** 備考 */
  memo?: string | null | undefined
  /** 備考更新日 */
  memo_updated_on?: string | null | undefined
  /** 内容量 */
  volume?: number | null | undefined
  /** 入数 */
  quantity_per_case?: number | null | undefined
  /** ケース数 */
  case_count?: number | null | undefined
  /** バラ数 */
  bottle_count?: number | null | undefined
  /** 総バラ数 */
  total_count?: number | null | undefined
  /** 最終売上日 */
  sold_on?: string | null | undefined
  /** 最低出荷単位 */
  shipping_invent_unit_cd1?: string | null | undefined
  /** 受注単価 */
  order_unit_price?: string | null | undefined
  /** 受注金額 */
  order_amount?: string | null | undefined
  /** ケース単価 */
  case_unit_price?: string | null | undefined
  /** バラ単価 */
  bottle_unit_price?: string | null | undefined
  /** 商品マスタ_年号 */
  invent_vintage?: string | null | undefined
  /** 国内受注明細_年号 */
  sales_order_detail_vintage?: string | null | undefined
  /** 直近出荷履歴非表示フラグ */
  is_shipping_history_hidden?: boolean | null | undefined
  /** 直近出荷履歴 更新カウンタ */
  recent_shipping_history_update_count?: number | null | undefined
  /** 国内受注明細 更新カウンタ */
  sales_order_detail_update_count?: number | null | undefined
}

/** 直近出荷履歴・国内受注 一括操作対象 */
export type RecentShippingHistoryWithSalesOrderBulkTarget = RecentShippingHistoryWithSalesOrder & BulkTarget

/** 入荷履歴 */
export type ArrivalHistoryList = {
  /** データ判別用 */
  data_type?: string | undefined
  /** 商品ID */
  invent_id?: number | undefined
  /** 品番 */
  invent_idm?: string | undefined
  /** 商品名 */
  invent_name_jp?: string | undefined
  /** ID */
  shipping_order_id?: number | null | undefined
  /** 許可記号別状況区分 */
  shipping_order_status_cd1?: string | null | undefined
  /** 表示用船積オーダーNo */
  display_no?: string | null | undefined
  /** 行No */
  line_no?: number | null | undefined
  /** 国内発注No */
  domestic_order_no?: string | null | undefined
  /** 国内発注明細No */
  domestic_order_detail_id?: number | null | undefined
  /** 出港日 */
  etd_on?: string | null | undefined
  /** 入港日 */
  eta_on?: string | null | undefined
  /** 予定納期 */
  scheduled_delivery_on?: string | null | undefined
  /** 年号 */
  vintage?: string | null | undefined
  /** 登録入数 */
  quantity_per_case?: number | null | undefined
  /** 登録ケース */
  case_count?: number | null | undefined
  /** 登録バラ */
  bottle_count?: number | null | undefined
  /** 実入数 */
  local_quantity_per_case?: number | null | undefined
  /** 実ケース */
  local_case_count?: number | null | undefined
  /** 実バラ */
  local_bottle_count?: number | null | undefined
  /** 搬入ケース */
  real_case_count?: number | null | undefined
  /** 搬入バラ */
  real_bottle_count?: number | null | undefined
  /** 通貨 */
  currency_cd1?: string | null | undefined
  /** 単価 */
  local_unit_price?: string | null | undefined
  /** 予約オーダー明細ID */
  shipping_reservation_detail_id?: number | null | undefined
  /** 支払区分 */
  payment_type_cd1?: string | null | undefined
  /** 支払レート */
  pay_rate?: string | null | undefined
  /** 設定レート */
  rate?: string | null | undefined
  /** 計上日 */
  record_on?: string | null | undefined
  /** 仕入先名 */
  vendor_name_jp_abbr?: string | null | undefined
  /** 発注先ID */
  order_vendor_id?: number | null | undefined
  /** OBフラグ */
  is_ob?: boolean | null | undefined
  /** 許可記号 */
  mark?: string | null | undefined
  /** 入荷予定通知フラグ */
  is_notice?: boolean | null | undefined
  /** 検品期日 */
  check_limit_on?: string | null | undefined
  /** 一括表示仕様名 */
  batch_display?: string | null | undefined
  /** 函ラベル名 */
  label_box?: string | null | undefined
  /** 倉庫依頼名 */
  order_warehouse?: string | null | undefined
  /** 表示用予約オーダーNo */
  shipping_reservation_display_no?: string | null | undefined
  /** 入荷予定備考 */
  arrival_schedule_note?: string | null | undefined
  /** 発注者覚書 */
  order_note?: string | null | undefined
  /** 撮影区分 */
  shoot_type_cd1?: string | null | undefined
  /** 新品番年号区分 */
  new_invent_vintage_cd1?: string | null | undefined
  /** 商品仕様備考 */
  invent_spec_note?: string | null | undefined
  /** アルコール度数 */
  alcohol_percentage?: string | null | undefined
  /** ガス圧 */
  gas_pressure?: string | null | undefined
  /** 添加物１ID */
  additive1_id?: number | null | undefined
  /** 数量１ */
  value1?: string | null | undefined
  /** 添加物２ID */
  additive2_id?: number | null | undefined
  /** 数量２ */
  value2?: string | null | undefined
  /** 添加物３ID */
  additive3_id?: number | null | undefined
  /** 数量３ */
  value3?: string | null | undefined
  /** 添加物４ID */
  additive4_id?: number | null | undefined
  /** 数量４ */
  value4?: string | null | undefined
  /** 添加物５ID */
  additive5_id?: number | null | undefined
  /** 数量５ */
  value5?: string | null | undefined
  /** 添加物６ID */
  additive6_id?: number | null | undefined
  /** 数量６ */
  value6?: string | null | undefined
  /** 添加物７ID */
  additive7_id?: number | null | undefined
  /** 数量７ */
  value7?: string | null | undefined
  /** 添加物８ID */
  additive8_id?: number | null | undefined
  /** 数量８ */
  value8?: string | null | undefined
  /** 添加物９ID */
  additive9_id?: number | null | undefined
  /** 数量９ */
  value9?: string | null | undefined
  /** 添加物１０ID */
  additive10_id?: number | null | undefined
  /** 数量１０ */
  value10?: string | null | undefined
  /** 通関書類内部備考 */
  note?: string | null | undefined
  /** 分析表内部備考 */
  analyze_note?: string | null | undefined
  /** 栓仕様ID */
  cork_spec_cd1?: string | null | undefined
  /** 内容量 */
  volume?: number | null | undefined
  /** 協賛インボイス対象フラグ */
  is_invoice?: boolean | null | undefined
  /** 函数/1PT */
  box_per_pallet?: number | null | undefined
  /** 予約受注総バラ数量 */
  detail_quantity?: number | null | undefined
  /** 商品登録入数 */
  invent_quantity_per_case?: number | null | undefined
  /** 搬入日 */
  carried_on?: string | null | undefined
  /** 通関許可日 */
  customs_release_on?: string | null | undefined
  /** 総バラ数 */
  total_count?: number | null | undefined
  /** 総搬入バラ数 */
  real_total_count?: number | null | undefined
}

/** 代引佐川受信明細 */
export type SagawaDeliveryDetail = {
  /** ID */
  id: number
  /** 入金先ID */
  deposit_customer_id?: number | null | undefined

  deposit_customer?: Customer | undefined

  /** 入金実績ID */
  deposit_result_id?: number | null | undefined

  deposit_result?: DepositResult | undefined

  /** 通貨CD */
  currency_cd1?: string | null | undefined
  /** 入金額 */
  deposit_amount?: string | null | undefined
  /** 代引佐川受信ヘッダID */
  sagawa_delivery_id?: number | null | undefined

  sagawa_delivery?: SagawaDelivery | undefined

  /** 原票No */
  original_number?: string | null | undefined
  /** 商品代金 */
  amount?: string | null | undefined
  /** 取扱手数料 */
  delivery_charge?: string | null | undefined
  /** 取扱手数料税額 */
  delivery_charge_tax?: string | null | undefined
  /** 印紙代 */
  stamp?: string | null | undefined
  /** 代引請求書No */
  cod_payment_request_no?: string | null | undefined
  /** 入金予定ID */
  deposit_schedule_id?: number | null | undefined

  deposit_schedule?: DepositSchedule | undefined

  /** 振込日 */
  deposit_on?: string | null | undefined
  /** お問い合せNo */
  inquiry_no?: string | null | undefined
  /** カード決済手数料 */
  card_fee?: string | null | undefined
  /** 入金額処理金額 */
  processing_amount?: string | null | undefined
  /** お客様コード(発送元) */
  client_cd?: string | null | undefined
  /** 発送日 */
  sended_on?: string | null | undefined
  /** 種類 */
  kind?: string | null | undefined
  /** 回収営業所 */
  collection_office?: string | null | undefined
  /** 訂正情報 */
  fix_info?: string | null | undefined
  /** 振込対象区分 */
  transfer_target?: string | null | undefined
  /** 代引手数料支払方法 */
  payment_method?: string | null | undefined
  /** 差額。代引きデータ受信確認_詳細API(検索)APIでのみ取得されます。 */
  difference_amount?: string | null | undefined
  /** 代引請求書.商品代金(税込)。代引きデータ受信確認_詳細API(検索)APIでのみ取得されます。 */
  cash_on_delivery_amount?: string | null | undefined
} & BaseModel

/** 国内受注 */
export type SalesOrder = {
  /** ID */
  id: number
  /** 受注状況CD */
  sales_order_status_cd1: string | null
  /** 登録区分CD */
  sales_order_type_cd1: string | null
  /** 直送区分CD */
  direct_shipping_cd1: string
  /** 受注No */
  no: string | null
  /** 倉庫ID */
  location_id: number

  location?: Location | undefined

  /** 倉庫IDM */
  location_idm: string
  /** 倉庫名 */
  location_name: string
  /** ピッキング分類CD */
  picking_cd1: string
  /** 前入力担当者ID */
  prev_operator_user_id?: number | null | undefined

  prev_operator_user?: User | undefined

  /** 前入力担当者IDM */
  prev_operator_user_idm?: string | null | undefined
  /** 前入力担当者名 */
  prev_operator_user_name?: string | null | undefined
  /** 入力担当者ID */
  operator_user_id?: number | null | undefined

  operator_user?: User | undefined

  /** 入力担当者IDM */
  operator_user_idm?: string | null | undefined
  /** 入力担当者名 */
  operator_user_name?: string | null | undefined
  /** 取置ID */
  sales_stock_id?: number | null | undefined

  sales_stock?: SalesStock | undefined

  /** 返品元受注ID */
  return_sales_order_id?: number | null | undefined

  return_sales_order?: SalesOrder | undefined

  /** 受注依頼ID */
  sales_order_request_id?: number | null | undefined
  /** 下書保存 */
  is_draft: boolean
  /** 伝送区分CD */
  shipping_transfer_cd1: string
  /** 伝送日時 */
  shipping_transferred_at?: string | null | undefined
  /** 専伝抽出CD */
  senden_printed_cd1?: string | null | undefined
  /** 取置引当て */
  is_sales_stock_reserved: boolean
  /** 出荷日 */
  shipped_on: string
  /** 受注日 */
  ordered_on: string
  /** 売上日 */
  sold_on: string
  /** 着日 */
  arrival_request_on?: string | null | undefined
  /** AM/PMCD */
  arrival_request_am_pm_cd1?: string | null | undefined
  /** 着指定CD */
  arrival_request_cd1?: string | null | undefined
  /** 配送時間帯CD */
  arrival_request_time_cd1?: string | null | undefined
  /** 伝送No */
  batch_no?: string | null | undefined
  /** 与信管理区分 */
  yoshin_cd1: string
  /** 入力得意先ID */
  customer_id: number

  customer?: Customer | undefined

  /** 売上税グループCD */
  sales_tax_type_cd1?: string | null | undefined
  /** 通貨CD */
  currency_cd1?: string | null | undefined
  /** 返信用封筒要 */
  is_return_envelope_required: boolean | null
  /** 梱包ラベルCD */
  packing_label_cd1?: string | null | undefined
  /** 得意先ID */
  parent_id?: number | null | undefined

  parent?: Customer | undefined

  /** 得意先IDM */
  parent_idm: string
  /** 得意先名(カナ) */
  parent_name_kana?: string | null | undefined
  /** 得意先名(正式) */
  parent_name_jp?: string | null | undefined
  /** 得意先名(略称) */
  parent_name_abbr?: string | null | undefined
  /** 配送区分CD */
  haisou_cd1?: string | null | undefined
  /** 名門酒販売 */
  is_meimon_only: boolean
  /** 負担部門ID */
  team_id?: number | null | undefined

  team?: Team | undefined

  /** 代配店ID */
  child_id?: number | null | undefined

  child?: Customer | undefined

  /** 代配店IDM */
  child_idm?: string | null | undefined
  /** 代配店名(カナ) */
  child_name_kana?: string | null | undefined
  /** 代配店名(正式) */
  child_name_jp?: string | null | undefined
  /** 代配店名(略称) */
  child_name_abbr?: string | null | undefined
  /** 伝票種類CD */
  delivery_slip_cd1?: string | null | undefined
  /** 指定リスト */
  is_order_sheet_required: boolean
  /** 伝票郵送 */
  is_denpyo_post_required: boolean
  /** 納品データ送信 */
  is_delivery_data_required: boolean
  /** 相手先売価印字 */
  is_customer_price_print: boolean
  /** 代配店帳合先CD */
  choai_cd1?: string | null | undefined
  /** 担当者ID */
  user_id: number

  user?: User | undefined

  /** 担当者IDM */
  user_idm: string
  /** 担当者名 */
  user_name?: string | null | undefined
  /** 担当者-チームIDM */
  team_department_idm?: string | null | undefined
  /** 担当者-チーム名 */
  team_department_name?: string | null | undefined
  /** 担当者-部署IDM */
  department_idm?: string | null | undefined
  /** 担当者-部署名 */
  department_name?: string | null | undefined
  /** アシスタントID */
  assistant_user_id: number

  assistant_user?: User | undefined

  /** アシスタントIDM */
  assistant_user_idm: string
  /** アシスタント名 */
  assistant_user_name?: string | null | undefined
  /** 業態 */
  business_category_cd1?: string | null | undefined
  /** 摘要CD1 */
  abstract1_cd1?: string | null | undefined
  /** 摘要1 */
  abstract1?: string | null | undefined
  /** 摘要CD2 */
  abstract2_cd1?: string | null | undefined
  /** 摘要2 */
  abstract2?: string | null | undefined
  /** 摘要CD3 */
  abstract3_cd1?: string | null | undefined
  /** 摘要3 */
  abstract3?: string | null | undefined
  /** 総本数 */
  total_count: number | null
  /** 税抜金額 */
  price: string | null
  /** 税金額 */
  tax: string | null
  /** 合計金額 */
  price_incl_tax: string | null
  /** 得意先-地方IDM */
  parent_wine_area_idm?: string | null | undefined
  /** 得意先-地区IDM */
  parent_area_idm?: string | null | undefined
  /** 得意先-〒 */
  parent_zip?: string | null | undefined
  /** 得意先-GrpCD */
  parent_customer_group_cd1?: string | null | undefined
  /** 得意先-Grp名 */
  parent_customer_group_name?: string | null | undefined
  /** 得意先-住所1 */
  parent_address1?: string | null | undefined
  /** 得意先-住所2 */
  parent_address2?: string | null | undefined
  /** 得意先-住所3 */
  parent_address3?: string | null | undefined
  /** 得意先-TEL */
  parent_tel1?: string | null | undefined
  /** 得意先-FAX */
  parent_fax1?: string | null | undefined
  /** 得意先-定休日(曜日) */
  parent_holiday_of_week?: string | null | undefined
  /** 得意先-定休日(メモ) */
  parent_holiday_note?: string | null | undefined
  /** 得意先-運賃パターンIDM */
  parent_fare_pattern_idm?: string | null | undefined
  parent_fare_patterns?: FarePattern[] | undefined
  /** 得意先-返信FAX */
  is_parent_refax_required: boolean
  /** 得意先-特記事項 */
  parent_order_remarks?: string | null | undefined
  /** 得意先-専伝担当者名 */
  parent_personnel_name?: string | null | undefined
  /** 代配店-地方IDM */
  child_wine_area_idm?: string | null | undefined
  /** 代配店-地区IDM */
  child_area_idm?: string | null | undefined
  /** 代配店-〒 */
  child_zip?: string | null | undefined
  /** 代配店-GrpCD */
  child_customer_group_cd1?: string | null | undefined
  /** 代配店-Grp名 */
  child_customer_group_name?: string | null | undefined
  /** 代配店-住所1 */
  child_address1?: string | null | undefined
  /** 代配店-住所2 */
  child_address2?: string | null | undefined
  /** 代配店-住所3 */
  child_address3?: string | null | undefined
  /** 代配店-TEL */
  child_tel1?: string | null | undefined
  /** 代配店-FAX */
  child_fax1?: string | null | undefined
  /** 代配店-定休日(曜日) */
  child_holiday_of_week?: string | null | undefined
  /** 代配店-定休日(メモ) */
  child_holiday_note?: string | null | undefined
  /** 代配店-運賃パターンIDM */
  child_fare_pattern_idm?: string | null | undefined
  child_fare_patterns?: FarePattern[] | undefined
  /** 代配店-返信FAX */
  is_child_refax_required: boolean
  /** 代配店-特記事項 */
  child_order_remarks?: string | null | undefined
  /** 代配店-専伝担当者名 */
  child_personnel_name?: string | null | undefined
  /** 得意先-納品書備考欄 */
  parent_delivery_slip_note?: string | null | undefined
  /** 得意先-納品書摘要欄 */
  parent_delivery_slip_abstract?: string | null | undefined
  /** 得意先-ロット合わせの備考 */
  parent_lot_note?: string | null | undefined
  /** 得意先-欠品・年号変更時の出荷対応CD */
  parent_stockout_contact_cd1?: string | null | undefined
  /** 得意先-欠品・年号変更時の連絡方法 */
  parent_stockout_contact?: string | null | undefined
  /** 得意先-ファイルパス */
  parent_estimated_doc_path?: string | null | undefined
  /** 代配店-納品書備考欄 */
  child_delivery_slip_note?: string | null | undefined
  /** 代配店-納品書摘要欄 */
  child_delivery_slip_abstract?: string | null | undefined
  /** 代配店-ロット合わせの備考 */
  child_lot_note?: string | null | undefined
  /** 代配店-欠品・年号変更時の出荷対応CD */
  child_stockout_contact_cd1?: string | null | undefined
  /** 代配店-欠品・年号変更時の連絡方法 */
  child_stockout_contact?: string | null | undefined
  /** 代配店-ファイルパス */
  child_estimated_doc_path?: string | null | undefined
  /** 宛名追記 */
  address_note?: string | null | undefined
  /** ピッキング指示 */
  picking_note?: string | null | undefined
  /** 着日目安日数CD(伝発) */
  estimated_arrival_cd1?: string | null | undefined
  /** 着日目安日数CD(WEB) */
  web_estimated_arrival_cd1?: string | null | undefined
  /** 納品時間帯(関西Rのみ)CD */
  arrival_request_kansai_cd1?: string | null | undefined
  /** 荷受先コード */
  consignees_code?: string | null | undefined
  /** 荷受先名 */
  consignees_name?: string | null | undefined
  /** 基準日CD */
  reference_pay_date_cd1?: string | null | undefined
  /** 締日1CD */
  closing_day1_cd1?: string | null | undefined
  /** 入金月1CD */
  payment_month1_cd1?: string | null | undefined
  /** 入金日1CD */
  payment_day1_cd1?: string | null | undefined
  /** 締日2CD */
  closing_day2_cd1?: string | null | undefined
  /** 入金月2CD */
  payment_month2_cd1?: string | null | undefined
  /** 入金日2CD */
  payment_day2_cd1?: string | null | undefined
  /** 入金予定ID */
  deposit_schedule_id?: number | null | undefined

  deposit_schedule?: DepositSchedule | undefined

  /** 振込依頼 */
  is_transfer_requested?: boolean | null | undefined
  /** 振込確認 */
  is_transfer_confirmed?: boolean | null | undefined
  /** 振込確認日 */
  transfer_confirmed_on?: string | null | undefined
  /** 代引連絡 */
  is_cod_contacted: boolean | null
  /** 代引請求金額 */
  cod_amount?: string | null | undefined
  /** 代引手数料(税込) */
  cod_fee?: string | null | undefined
  /** 代引請求No */
  cod_payment_request_no?: string | null | undefined
  /** 代引請求日 */
  cod_payment_request_on?: string | null | undefined
  /** 仕入先ID */
  vendor_id?: number | null | undefined

  vendor?: Vendor | undefined

  /** 発注書送付 */
  is_purchase_order_sent: boolean | null
  /** 発注書送付日 */
  purchase_order_sent_on?: string | null | undefined
  /** 納品書出力済 */
  is_delivery_printed: boolean | null
  /** 納品書出力日 */
  delivery_printed_on?: string | null | undefined
  /** 発注書備考 */
  domestic_order_note?: string | null | undefined
  /** 社内備考 */
  internal_note?: string | null | undefined
  /** Vinoforet仮取込 */
  is_vino_draft: boolean | null
  /** 請求締処理対象 */
  is_bill_closing: boolean | null
  /** 請求実績ID */
  bill_result_id?: number | null | undefined

  bill_result?: BillResult | undefined

  /** 税区分1 */
  item_tax_type1_cd1?: string | null | undefined
  /** 消費税率1 */
  tax_rate1?: string | null | undefined
  /** 消費税額1 */
  tax_price1?: string | null | undefined
  /** 課税対象額1 */
  tax_rate1_price?: string | null | undefined
  /** 税区分2 */
  item_tax_type2_cd1?: string | null | undefined
  /** 消費税率2 */
  tax_rate2?: string | null | undefined
  /** 消費税額2 */
  tax_price2?: string | null | undefined
  /** 課税対象額2 */
  tax_rate2_price?: string | null | undefined
  /** 税区分3 */
  item_tax_type3_cd1?: string | null | undefined
  /** 消費税率3 */
  tax_rate3?: string | null | undefined
  /** 消費税額3 */
  tax_price3?: string | null | undefined
  /** 課税対象額3 */
  tax_rate3_price?: string | null | undefined
  sales_order_details?: SalesOrderDetail[] | undefined
  shipping_files?: string[] | undefined
} & BaseModel

/** 国内受注明細 */
export type SalesOrderDetail = {
  /** ID */
  id: number
  /** 国内受注ID */
  sales_order_id?: number | undefined

  sales_order?: SalesOrder | undefined

  /** 行No */
  line_no: number | null
  /** 倉庫ID */
  location_id: number

  location?: Location | undefined

  /** 倉庫IDM */
  location_idm: string
  /** 倉庫名 */
  location_name?: string | null | undefined
  /** 取引区分 */
  sales_transaction_type_cd1: string
  /** 取引区分名 */
  sales_transaction_type_name?: string | null | undefined
  /** キャンペーンIDM */
  campaign_idm?: string | null | undefined
  /** 商品名(正式/和文) */
  name_jp?: string | null | undefined
  /** 商品名(正式/欧文) */
  name_en?: string | null | undefined
  /** 商品名(伝票印字品名) */
  name_denpatu?: string | null | undefined
  /** 商品名(略称) */
  name_abbr?: string | null | undefined
  /** 商品名(カナ) */
  name_kana?: string | null | undefined
  /** 商品名(RBP用) */
  name_rbp?: string | null | undefined
  /** 商品名(値札工房用) */
  name_pc?: string | null | undefined
  /** 商品名(価格表用) */
  name_catalog?: string | null | undefined
  /** 商品名(別年号用) */
  name_yearly?: string | null | undefined
  /** 商品ID */
  invent_id: number

  invent?: Invent | undefined

  /** 品番 */
  invent_idm: string
  /** 得意先品番 */
  customer_item_cd?: string | null | undefined
  /** 単品バーコード */
  barcode?: string | null | undefined
  /** ボールITFコード */
  ball_itf_code?: string | null | undefined
  /** ケースITFコード */
  case_itf_code?: string | null | undefined
  /** 年号 */
  vintage?: string | null | undefined
  /** 内容量 */
  volume?: number | null | undefined
  /** 内容量の単位CD */
  volume_unit_cd1?: string | null | undefined
  /** 入数(ケース) */
  quantity_per_case: number
  /** 入数(ボール) */
  quantity_per_ball?: number | null | undefined
  /** 生産者IDM */
  maker_vendor_idm?: string | null | undefined
  /** 生産者名(略称/和文) */
  maker_vendor_name_jp_abbr?: string | null | undefined
  /** 品目区分CD */
  item_group_cd1?: string | null | undefined
  /** 販売ー品目売上税グループCD */
  sales_item_tax_type_cd1?: string | null | undefined
  /** 酒税品目IDM */
  liquor_tax_idm?: string | null | undefined
  /** 酒税名 */
  liquor_tax_name?: string | null | undefined
  /** 酒税名略称 */
  liquor_tax_name_abbr?: string | null | undefined
  /** 原産国IDM */
  country_of_origin_idm?: string | null | undefined
  /** 原産国名(和文) */
  country_of_origin_name?: string | null | undefined
  /** 地方IDM */
  wine_area_idm?: string | null | undefined
  /** 地方名(和文) */
  wine_area_name?: string | null | undefined
  /** 地区IDM */
  area_idm?: string | null | undefined
  /** 地区名(和文) */
  area_name?: string | null | undefined
  /** 村IDM */
  village_idm?: string | null | undefined
  /** 村名(和文) */
  village_name?: string | null | undefined
  /** 商品分類CD */
  item_type_cd1?: string | null | undefined
  /** 希望小売プリント */
  is_print_sign: boolean
  /** 戦略分類 */
  strategy_type_cd1?: string | null | undefined
  /** 最低出荷単位 */
  shipping_invent_unit_cd1?: string | null | undefined
  /** 取置明細ID */
  sales_stock_detail_id?: number | null | undefined

  sales_stock_detail?: SalesStockDetail | undefined

  /** ケース数 */
  case_count: number
  /** バラ数 */
  bottle_count: number
  /** 総バラ数 */
  total_count: number
  /** ケース単価 */
  case_unit_price?: string | null | undefined
  /** バラ単価 */
  bottle_unit_price: string
  /** 在庫単価 */
  stock_price: string
  /** 受注単価 */
  order_unit_price: string
  /** 在庫金額 */
  stock_amount: string
  /** 受注金額 */
  order_amount: string
  /** ケース特単 */
  case_special_unit_price?: string | null | undefined
  /** バラ特単 */
  bottle_special_unit_price?: string | null | undefined
  /** 明細備考 */
  external_note?: string | null | undefined
  /** 割当担当者ID */
  stock_user_id?: number | null | undefined

  stock_user?: User | undefined

  /** 割当担当者IDM */
  stock_user_idm?: string | null | undefined
  /** 割当担当者名 */
  stock_user_name?: string | null | undefined
  /** 取置区分 */
  sales_stock_type_cd1?: string | null | undefined
  /** 割当区分 */
  allotment_cd1?: string | null | undefined
  /** 元伝票明細ID */
  return_sales_order_detail_id?: number | null | undefined

  return_sales_order_detail?: SalesOrderDetail | undefined

  /** 梱包分割 */
  packing_no?: number | null | undefined
  /** 相手先No */
  customer_order_no?: string | null | undefined
  /** 小売単価 */
  retail_unit_price?: string | null | undefined
  /** 仕入先ID */
  vendor_id?: number | null | undefined

  vendor?: Vendor | undefined

  /** 相手先ケース */
  customer_item_price_case?: string | null | undefined
  /** 相手先バラ */
  customer_item_price_bottle?: string | null | undefined
  /** 費用科目ID */
  cost_subject_id?: number | null | undefined

  cost_subject?: CostSubject | undefined

  /** Vinoforet発注No */
  vino_order_no?: string | null | undefined
  /** Vinoforet発注行No */
  vino_line_no?: number | null | undefined
  /** VinoforetキャンペーンフラグCD */
  vino_campain_cd1?: string | null | undefined
  /** 運賃無料区分CD */
  fare_free_cd1?: string | null | undefined
  /** おまけフラグ */
  is_addition: boolean
  /** クール無料期間フラグ */
  is_cool_transfer_free: boolean
  /** 運賃メールフラグ */
  is_send_fare_mail: boolean
  /** 税率 */
  tax_rate: string
  /** ピッキング分類CD */
  picking_cd1?: string | null | undefined
  /** 品切れフラグ */
  is_shortage: boolean | null
  /** 岡田商店送信済フラグ */
  is_sent_okada: boolean | null
  /** 国内発注単価(バラ) */
  domestic_order_bottle_unit_price?: string | null | undefined
  /** 国内発注単価(ケース) */
  domestic_order_case_unit_price?: string | null | undefined
  /** 参考価格 */
  sales_price_reference_price?: string | null | undefined
  /** 価格設定時レート */
  sales_price_rate?: string | null | undefined
  /** 価格設定時仕入単価 */
  sales_price_setup_invent_price?: string | null | undefined
  /** 最終仕入単価 */
  sales_price_purchase_unit_price?: string | null | undefined
  /** 輸入購買-通貨 */
  import_price_currency_cd1?: string | null | undefined
  /** 輸入購買-価格単位 */
  import_price_price_unit_cd1?: string | null | undefined
  /** 輸入購買-現地単価 */
  import_price_local_unit_price?: string | null | undefined
  /** 輸入購買-割引前単価 */
  import_price_pre_discount_unit_price?: string | null | undefined
  /** 直近出荷履歴非表示フラグ */
  is_shipping_history_hidden: boolean | null
  /** 出荷バッチ処理区分 */
  shipping_bat_status_cd1?: string | null | undefined

  /** 商品と倉庫に対する在庫。在庫が存在しない場合も数量0のオブジェクトが取得されます。国内受注一覧、取得APIでのみ取得されます。 */
  stock?: Stock | undefined

  /** 入荷予定日。国内受注一覧、取得APIでのみ取得されます。 */
  will_arrive_on?: string | null | undefined
  /** 入荷予定数。国内受注一覧、取得APIでのみ取得されます。 */
  arrival_count?: number | null | undefined
  /** 入荷予定備考。国内受注一覧、取得APIでのみ取得されます。 */
  arrival_schedule_note?: string | null | undefined
  /** 営業用入荷予定備考。国内受注一覧、取得APIでのみ取得されます。 */
  arrival_purchase_note?: string | null | undefined
  /** 直近受注単価。国内受注一覧、取得APIでのみ取得されます。 */
  latest_order_unit_price?: string | null | undefined
  /** 直近出荷年号。国内受注一覧、取得APIでのみ取得されます。 */
  latest_vintage?: string | null | undefined
  /** 直近出荷日。国内受注一覧、取得APIでのみ取得されます。 */
  latest_shipped_on?: string | null | undefined

  domestic_order_detail?: DomesticOrderDetail | undefined

  /** 内引分割明細。一括操作APIでのみ値が設定されます。 */
  is_split?: boolean | null | undefined
} & BaseModel

/** 国内受注一括操作対象 */
export type SalesOrderBulkTarget = SalesOrder & {
  sales_order_details: (SalesOrderDetail & BulkTarget)[]
  shipping_files_to_append?: string[] | undefined
  shipping_files_to_remove?: string[] | undefined
  /** 支払先ID */
  pay_vendor_id?: number | null | undefined
} & BulkTarget

/** 予約受注 */
export type SalesReservation = {
  /** ID */
  id: number
  /** 予約受注No */
  no?: string | null | undefined
  /** 予約受注取置依頼ID */
  sales_stock_request_id?: number | null | undefined
  /** 予約受注取置依頼No */
  sales_stock_request_no?: string | null | undefined
  /** 予約状況 */
  sales_reservation_stock_header_status_cd1?: string | null | undefined
  /** 倉庫ID */
  location_id: number

  location?: Location | undefined

  /** 倉庫IDM */
  location_idm: string
  /** 倉庫名 */
  location_name?: string | null | undefined
  /** ピッキング分類CD */
  picking_cd1: string
  /** 前入力担当者ID */
  prev_operator_user_id?: number | null | undefined

  prev_operator_user?: User | undefined

  /** 前入力担当者IDM */
  prev_operator_user_idm?: string | null | undefined
  /** 前入力担当者名 */
  prev_operator_user_name?: string | null | undefined
  /** 入力担当者ID */
  operator_user_id: number

  operator_user?: User | undefined

  /** 入力担当者IDM */
  operator_user_idm: string
  /** 入力担当者名 */
  operator_user_name?: string | null | undefined
  /** 予約受注日 */
  reservation_on: string
  /** 希望納期 */
  request_delivery_on: string
  /** 得意先グループCD */
  customer_group_cd1?: string | null | undefined
  /** 得意先グループ名 */
  customer_group_name?: string | null | undefined
  /** 入力得意先ID */
  customer_id?: number | null | undefined

  customer?: Customer | undefined

  /** 得意先ID */
  parent_id?: number | null | undefined

  parent?: Customer | undefined

  /** 得意先IDM */
  parent_idm?: string | null | undefined
  /** 得意先名(カナ) */
  parent_name_kana?: string | null | undefined
  /** 得意先名(正式) */
  parent_name_jp?: string | null | undefined
  /** 得意先名(略称) */
  parent_name_abbr?: string | null | undefined
  /** 代配先ID */
  child_id?: number | null | undefined

  child?: Customer | undefined

  /** 代配店IDM */
  child_idm?: string | null | undefined
  /** 代配店名(カナ) */
  child_name_kana?: string | null | undefined
  /** 代配店名(正式) */
  child_name_jp?: string | null | undefined
  /** 代配店名(略称) */
  child_name_abbr?: string | null | undefined
  /** 担当者ID */
  user_id?: number | null | undefined

  user?: User | undefined

  /** 担当者IDM */
  user_idm?: string | null | undefined
  /** 担当者名 */
  user_name?: string | null | undefined
  /** 担当者-チームIDM */
  team_department_idm?: string | null | undefined
  /** 担当者-チーム名 */
  team_department_name?: string | null | undefined
  /** 担当者-部署IDM */
  department_idm?: string | null | undefined
  /** 担当者-部署名 */
  department_name?: string | null | undefined
  /** 割当区分 */
  allotment_cd1?: string | null | undefined
  /** 割当名称 */
  allotment_name?: string | null | undefined
  /** 与信管理区分 */
  yoshin_cd1?: string | null | undefined
  /** 伝票種類CD */
  delivery_slip_cd1?: string | null | undefined
  /** WEB公開フラグ */
  is_web: boolean
  /** アシスタントID */
  assistant_user_id?: number | null | undefined

  assistant_user?: User | undefined

  /** アシスタントIDM */
  assistant_user_idm?: string | null | undefined
  /** アシスタント名 */
  assistant_user_name?: string | null | undefined
  /** 業態 */
  business_category_cd1?: string | null | undefined
  /** 社内備考 */
  internal_note?: string | null | undefined
  /** 摘要CD1 */
  abstract1_cd1?: string | null | undefined
  /** 摘要1 */
  abstract1?: string | null | undefined
  /** 摘要CD2 */
  abstract2_cd1?: string | null | undefined
  /** 摘要2 */
  abstract2?: string | null | undefined
  /** 摘要CD3 */
  abstract3_cd1?: string | null | undefined
  /** 摘要3 */
  abstract3?: string | null | undefined
  /** 総本数 */
  total_count?: number | null | undefined
  /** 税抜金額 */
  price?: string | null | undefined
  /** 得意先-〒 */
  parent_zip?: string | null | undefined
  /** 得意先-GrpCD */
  parent_customer_group_cd1?: string | null | undefined
  /** 得意先-Grp名 */
  parent_customer_group_name?: string | null | undefined
  /** 得意先-住所1 */
  parent_address1?: string | null | undefined
  /** 得意先-住所2 */
  parent_address2?: string | null | undefined
  /** 得意先-住所3 */
  parent_address3?: string | null | undefined
  /** 得意先-TEL */
  parent_tel1?: string | null | undefined
  /** 得意先-FAX */
  parent_fax1?: string | null | undefined
  /** 得意先-定休日(曜日) */
  parent_holiday_of_week?: string | null | undefined
  /** 得意先-定休日(メモ) */
  parent_holiday_note?: string | null | undefined
  /** 得意先-運賃パターンIDM */
  parent_fare_pattern_idm?: string | null | undefined
  parent_fare_patterns?: FarePattern[] | undefined
  /** 得意先-返信FAX */
  is_parent_refax_required: boolean
  /** 得意先-特記事項 */
  parent_order_remarks?: string | null | undefined
  /** 代配店-〒 */
  child_zip?: string | null | undefined
  /** 代配店-GrpCD */
  child_customer_group_cd1?: string | null | undefined
  /** 代配店-Grp名 */
  child_customer_group_name?: string | null | undefined
  /** 代配店-住所1 */
  child_address1?: string | null | undefined
  /** 代配店-住所2 */
  child_address2?: string | null | undefined
  /** 代配店-住所3 */
  child_address3?: string | null | undefined
  /** 代配店-TEL */
  child_tel1?: string | null | undefined
  /** 代配店-FAX */
  child_fax1?: string | null | undefined
  /** 代配店-定休日(曜日) */
  child_holiday_of_week?: string | null | undefined
  /** 代配店-定休日(メモ) */
  child_holiday_note?: string | null | undefined
  /** 代配店-運賃パターンIDM */
  child_fare_pattern_idm?: string | null | undefined
  child_fare_patterns?: FarePattern[] | undefined
  /** 代配店-返信FAX */
  is_child_refax_required: boolean
  /** 代配店-特記事項 */
  child_order_remarks?: string | null | undefined
  sales_reservation_details?: SalesReservationDetail[] | undefined
} & BaseModel

/** 予約受注明細 */
export type SalesReservationDetail = {
  /** ID */
  id: number
  /** 予約受注ID */
  sales_reservation_id?: number | undefined

  sales_reservation?: SalesReservation | undefined

  /** 予約受注取置依頼明細ID */
  sales_stock_request_detail_id?: number | null | undefined
  /** 行No */
  line_no?: number | null | undefined
  /** 予約状況 */
  sales_reservation_stock_status_cd1?: string | null | undefined
  /** 取引区分 */
  sales_transaction_type_cd1: string
  /** 取引区分名 */
  sales_transaction_type_name?: string | null | undefined
  /** 倉庫ID */
  location_id: number

  location?: Location | undefined

  /** 倉庫IDM */
  location_idm: string
  /** 倉庫名 */
  location_name?: string | null | undefined
  /** 商品名(正式/和文) */
  name_jp?: string | null | undefined
  /** 商品名(正式/欧文) */
  name_en?: string | null | undefined
  /** 商品名(伝票印字品名) */
  name_denpatu?: string | null | undefined
  /** 商品名(略称) */
  name_abbr?: string | null | undefined
  /** 商品名(カナ) */
  name_kana?: string | null | undefined
  /** 商品名(RBP用) */
  name_rbp?: string | null | undefined
  /** 商品名(値札工房用) */
  name_pc?: string | null | undefined
  /** 商品名(価格表用) */
  name_catalog?: string | null | undefined
  /** 商品名(別年号用) */
  name_yearly?: string | null | undefined
  /** 商品ID */
  invent_id: number

  invent?: Invent | undefined

  /** 品番 */
  invent_idm: string
  /** 得意先品番 */
  customer_item_cd?: string | null | undefined
  /** JAN */
  barcode?: string | null | undefined
  /** 年号 */
  vintage?: string | null | undefined
  /** 内容量 */
  volume?: number | null | undefined
  /** 入数(ケース) */
  quantity_per_case: number
  /** 入数(ボール) */
  quantity_per_ball?: number | null | undefined
  /** 生産者IDM */
  maker_vendor_idm?: string | null | undefined
  /** 生産者名(略称/和文) */
  maker_vendor_name_jp_abbr?: string | null | undefined
  /** 酒税品目IDM */
  liquor_tax_idm?: string | null | undefined
  /** 酒税名 */
  liquor_tax_name?: string | null | undefined
  /** 酒税名略称 */
  liquor_tax_name_abbr?: string | null | undefined
  /** 原産国IDM */
  country_of_origin_idm?: string | null | undefined
  /** 原産国名(和文) */
  country_of_origin_name?: string | null | undefined
  /** 地方IDM */
  wine_area_idm?: string | null | undefined
  /** 地方名(和文) */
  wine_area_name?: string | null | undefined
  /** 地区IDM */
  area_idm?: string | null | undefined
  /** 地区名(和文) */
  area_name?: string | null | undefined
  /** 村IDM */
  village_idm?: string | null | undefined
  /** 村名(和文) */
  village_name?: string | null | undefined
  /** 商品分類CD */
  item_type_cd1?: string | null | undefined
  /** 希望小売プリント */
  is_print_sign: boolean
  /** 最低出荷単位 */
  shipping_invent_unit_cd1?: string | null | undefined
  /** 戦略分類 */
  strategy_type_cd1?: string | null | undefined
  /** バラ数 */
  bottle_count: number
  /** ケース単価 */
  case_unit_price?: string | null | undefined
  /** バラ単価 */
  bottle_unit_price: string
  /** 在庫単価 */
  stock_price: string
  /** バラ予約単価 */
  reserved_bottle_unit_price: string
  /** 在庫残金額 */
  stock_balance_price: string
  /** 予約残金額 */
  reserved_balance_price: string
  /** 船積オーダーID */
  shipping_order_id?: number | null | undefined

  shipping_order?: ShippingOrder | undefined

  /** 船積オーダー記号 */
  shipping_order_symbol?: string | null | undefined
  /** 船積オーダーNo */
  shipping_order_no?: string | null | undefined
  /** 国内発注ID */
  domestic_order_id?: number | null | undefined

  domestic_order?: DomesticOrder | undefined

  /** 国内発注No */
  domestic_order_no?: string | null | undefined
  /** 発注時連絡フラグ */
  is_contact_order: boolean
  /** 入荷時連絡フラグ */
  is_contact_arrival: boolean
  /** 入荷時連絡備考 */
  arrival_contact_note?: string | null | undefined
  /** 取置明細ID */
  sales_stock_detail_id?: number | null | undefined

  sales_stock_detail?: SalesStockDetail | undefined

  /** 取置明細作成元である */
  is_sales_stock_detail_creator: boolean
  /** 割当使用可フラグ */
  is_free_stock: boolean
  /** 割当担当者ID */
  stock_user_id?: number | null | undefined

  stock_user?: User | undefined

  /** 割当担当者IDM */
  stock_user_idm?: string | null | undefined
  /** 割当担当者名 */
  stock_user_name?: string | null | undefined
  /** 割当元数量 */
  org_stock_count?: number | null | undefined
  /** 稟議承認済フラグ */
  is_approved: boolean
  /** 相手先ケース */
  customer_item_price_case?: string | null | undefined
  /** 相手先バラ */
  customer_item_price_bottle?: string | null | undefined
  /** 相手先No */
  customer_order_no?: string | null | undefined
  /** 明細備考 */
  external_note?: string | null | undefined
  /** 在庫振替ID */
  stock_change_id?: number | null | undefined

  stock_change?: StockChange | undefined

  /** 在庫振替No */
  stock_change_no?: string | null | undefined
  /** 入荷予定日 */
  will_arrive_on?: string | null | undefined

  /** 商品と倉庫に対する在庫。在庫が存在しない場合も数量0のオブジェクトが取得されます。 */
  stock?: Stock | undefined

  /** 商品と倉庫に対する在庫振替(在庫振替区分=セット組(01) 在庫振替依頼区分=01(依頼する) 完成状態=依頼確定(20)) */
  stock_changes?: StockChange[] | undefined
} & BaseModel

/** 予約受注一括操作対象 */
export type SalesReservationBulkTarget = SalesReservation & {
  sales_reservation_details: (SalesReservationDetail & BulkTarget)[]
} & BulkTarget

/** 現物取置依頼書 */
export type LayawayRequestForm = {
  /** 担当者名 */
  user_name?: string | undefined
  /** アシスタント名 */
  assistant_user_name?: string | undefined
  /** 取置期限 */
  stock_limit_on?: string | undefined
  /** 得意先IDM */
  customer_idm?: string | undefined
  /** 得意先名 */
  customer_name?: string | undefined
  /** 現物取置管理No */
  physical_stock_no?: string | null | undefined
  /** 移動元倉庫 */
  source_warehouse?: string | undefined
  /** 品番 */
  invent_idm?: string | undefined
  /** 年号 */
  vintage?: string | undefined
  /** 商品名 */
  invent_name?: string | undefined
  /** 入数 */
  quantity_per_case?: number | undefined
  /** バラ数 */
  bottle_count?: number | undefined
  /** 取置残数 */
  remaining_stock_count?: number | undefined
  /** 現物取置明細備考 */
  physical_stock_note?: string | null | undefined
  /** 国内受注No */
  sales_order_no?: string | null | undefined
  /** 国内受注:売上日 */
  sold_on?: string | null | undefined
  /** 国内受注:伝送No */
  batch_no?: string | null | undefined
  /** 国内受注:得意先IDM */
  order_customer_idm?: string | null | undefined
  /** 国内受注:得意先名 */
  order_customer_name?: string | null | undefined
  /** 国内受注:総バラ数 */
  total_bottle_count?: number | null | undefined
  /** 国内受注:取置残数 */
  order_remaining_stock_count?: number | null | undefined
  /** 国内受注:入力担当者 */
  order_user_name?: string | null | undefined
  /** 打切:取置残数 */
  cancel_remining_bottle_count?: number | undefined
  /** 打切:入力担当者 */
  cancel_user_name?: string | undefined
}

/** 取置 */
export type SalesStock = {
  /** ID */
  id: number
  /** 取置No */
  no: string | null
  /** 予約受注ID */
  sales_reservation_id?: number | null | undefined

  sales_reservation?: SalesReservation | undefined

  /** 予約受注No */
  sales_reservation_no?: string | null | undefined
  /** 予約受注取置依頼ID */
  sales_stock_request_id?: number | null | undefined
  /** 予約受注取置依頼No */
  sales_stock_request_no?: string | null | undefined
  /** 取置状況 */
  sales_reservation_stock_header_status_cd1?: string | null | undefined
  /** 倉庫ID */
  location_id: number

  location?: Location | undefined

  /** 倉庫IDM */
  location_idm: string
  /** 倉庫名 */
  location_name?: string | null | undefined
  /** ピッキング分類CD */
  picking_cd1: string
  /** 前入力担当者ID */
  prev_operator_user_id?: number | null | undefined

  prev_operator_user?: User | undefined

  /** 前入力担当者IDM */
  prev_operator_user_idm?: string | null | undefined
  /** 前入力担当者名 */
  prev_operator_user_name?: string | null | undefined
  /** 入力担当者ID */
  operator_user_id: number

  operator_user?: User | undefined

  /** 入力担当者IDM */
  operator_user_idm: string
  /** 入力担当者名 */
  operator_user_name?: string | null | undefined
  /** 取置日 */
  stock_on: string
  /** 取置期限 */
  stock_limit_on: string
  /** 得意先グループCD */
  customer_group_cd1?: string | null | undefined
  /** 得意先グループ名 */
  customer_group_name?: string | null | undefined
  /** 入力得意先ID */
  customer_id?: number | null | undefined

  customer?: Customer | undefined

  /** 得意先ID */
  parent_id?: number | null | undefined

  parent?: Customer | undefined

  /** 得意先IDM */
  parent_idm?: string | null | undefined
  /** 得意先名(カナ) */
  parent_name_kana?: string | null | undefined
  /** 得意先名(正式) */
  parent_name_jp?: string | null | undefined
  /** 得意先名(略称) */
  parent_name_abbr?: string | null | undefined
  /** 代配店ID */
  child_id?: number | null | undefined

  child?: Customer | undefined

  /** 代配店IDM */
  child_idm?: string | null | undefined
  /** 代配店名(カナ) */
  child_name_kana?: string | null | undefined
  /** 代配店名(正式) */
  child_name_jp?: string | null | undefined
  /** 代配店名(略称) */
  child_name_abbr?: string | null | undefined
  /** 担当者ID */
  user_id?: number | null | undefined

  user?: User | undefined

  /** 担当者IDM */
  user_idm?: string | null | undefined
  /** 担当者名 */
  user_name?: string | null | undefined
  /** 担当者-チームIDM */
  team_department_idm?: string | null | undefined
  /** 担当者-チーム名 */
  team_department_name?: string | null | undefined
  /** 担当者-部署IDM */
  department_idm?: string | null | undefined
  /** 担当者-部署名 */
  department_name?: string | null | undefined
  /** 割当区分 */
  allotment_cd1?: string | null | undefined
  /** 割当名称 */
  allotment_name?: string | null | undefined
  /** 与信管理区分 */
  yoshin_cd1?: string | null | undefined
  /** 伝票種類CD */
  delivery_slip_cd1?: string | null | undefined
  /** WEB公開フラグ */
  is_web: boolean
  /** 次回同送フラグ */
  is_next_shipping: boolean
  /** 現物取置フラグ */
  is_physical_stock: boolean
  /** 現物取置管理No */
  physical_stock_no?: string | null | undefined
  /** アシスタントID */
  assistant_user_id?: number | null | undefined

  assistant_user?: User | undefined

  /** アシスタントIDM */
  assistant_user_idm?: string | null | undefined
  /** アシスタント名 */
  assistant_user_name?: string | null | undefined
  /** 業態 */
  business_category_cd1?: string | null | undefined
  /** 社内備考 */
  internal_note?: string | null | undefined
  /** 摘要CD1 */
  abstract1_cd1?: string | null | undefined
  /** 摘要1 */
  abstract1?: string | null | undefined
  /** 摘要CD2 */
  abstract2_cd1?: string | null | undefined
  /** 摘要2 */
  abstract2?: string | null | undefined
  /** 摘要CD3 */
  abstract3_cd1?: string | null | undefined
  /** 摘要3 */
  abstract3?: string | null | undefined
  /** 総本数 */
  total_count?: number | null | undefined
  /** 税抜金額 */
  price?: string | null | undefined
  /** 得意先-〒 */
  parent_zip?: string | null | undefined
  /** 得意先-GrpCD */
  parent_customer_group_cd1?: string | null | undefined
  /** 得意先-Grp名 */
  parent_customer_group_name?: string | null | undefined
  /** 得意先-住所1 */
  parent_address1?: string | null | undefined
  /** 得意先-住所2 */
  parent_address2?: string | null | undefined
  /** 得意先-住所3 */
  parent_address3?: string | null | undefined
  /** 得意先-TEL */
  parent_tel1?: string | null | undefined
  /** 得意先-FAX */
  parent_fax1?: string | null | undefined
  /** 得意先-定休日(曜日) */
  parent_holiday_of_week?: string | null | undefined
  /** 得意先-定休日(メモ) */
  parent_holiday_note?: string | null | undefined
  /** 得意先-運賃パターンIDM */
  parent_fare_pattern_idm?: string | null | undefined
  parent_fare_patterns?: FarePattern[] | undefined
  /** 得意先-返信FAX */
  is_parent_refax_required: boolean
  /** 得意先-特記事項 */
  parent_order_remarks?: string | null | undefined
  /** 代配店-〒 */
  child_zip?: string | null | undefined
  /** 代配店-GrpCD */
  child_customer_group_cd1?: string | null | undefined
  /** 代配店-Grp名 */
  child_customer_group_name?: string | null | undefined
  /** 代配店-住所1 */
  child_address1?: string | null | undefined
  /** 代配店-住所2 */
  child_address2?: string | null | undefined
  /** 代配店-住所3 */
  child_address3?: string | null | undefined
  /** 代配店-TEL */
  child_tel1?: string | null | undefined
  /** 代配店-FAX */
  child_fax1?: string | null | undefined
  /** 代配店-定休日(曜日) */
  child_holiday_of_week?: string | null | undefined
  /** 代配店-定休日(メモ) */
  child_holiday_note?: string | null | undefined
  /** 代配店-運賃パターンIDM */
  child_fare_pattern_idm?: string | null | undefined
  child_fare_patterns?: FarePattern[] | undefined
  /** 代配店-返信FAX */
  is_child_refax_required: boolean
  /** 代配店-特記事項 */
  child_order_remarks?: string | null | undefined
  sales_stock_details?: SalesStockDetail[] | undefined
} & BaseModel

/** 取置明細 */
export type SalesStockDetail = {
  /** ID */
  id: number
  /** 取置ID */
  sales_stock_id?: number | undefined

  sales_stock?: SalesStock | undefined

  /** 予約受注取置依頼明細ID */
  sales_stock_request_detail_id?: number | null | undefined
  /** 行No */
  line_no?: number | null | undefined
  /** 取置状況 */
  sales_reservation_stock_status_cd1?: string | null | undefined
  /** 取置区分 */
  sales_stock_type_cd1?: string | null | undefined
  /** 取引区分 */
  sales_transaction_type_cd1: string
  /** 取引区分名 */
  sales_transaction_type_name?: string | null | undefined
  /** 倉庫ID */
  location_id: number

  location?: Location | undefined

  /** 倉庫IDM */
  location_idm: string
  /** 倉庫名 */
  location_name?: string | null | undefined
  /** 取置日 */
  stock_on?: string | null | undefined
  /** 商品名(正式/和文) */
  name_jp?: string | null | undefined
  /** 商品名(正式/欧文) */
  name_en?: string | null | undefined
  /** 商品名(伝票印字品名) */
  name_denpatu?: string | null | undefined
  /** 商品名(略称) */
  name_abbr?: string | null | undefined
  /** 商品名(カナ) */
  name_kana?: string | null | undefined
  /** 商品名(RBP用) */
  name_rbp?: string | null | undefined
  /** 商品名(値札工房用) */
  name_pc?: string | null | undefined
  /** 商品名(価格表用) */
  name_catalog?: string | null | undefined
  /** 商品名(別年号用) */
  name_yearly?: string | null | undefined
  /** 商品ID */
  invent_id: number

  invent?: Invent | undefined

  /** 品番 */
  invent_idm: string
  /** 得意先品番 */
  customer_item_cd?: string | null | undefined
  /** JAN */
  barcode?: string | null | undefined
  /** 年号 */
  vintage?: string | null | undefined
  /** 内容量 */
  volume?: number | null | undefined
  /** 入数(ケース) */
  quantity_per_case: number
  /** 入数(ボール) */
  quantity_per_ball?: number | null | undefined
  /** 生産者IDM */
  maker_vendor_idm?: string | null | undefined
  /** 生産者名(略称/和文) */
  maker_vendor_name_jp_abbr?: string | null | undefined
  /** 酒税品目IDM */
  liquor_tax_idm?: string | null | undefined
  /** 酒税名 */
  liquor_tax_name?: string | null | undefined
  /** 酒税名略称 */
  liquor_tax_name_abbr?: string | null | undefined
  /** 原産国IDM */
  country_of_origin_idm?: string | null | undefined
  /** 原産国名(和文) */
  country_of_origin_name?: string | null | undefined
  /** 地方IDM */
  wine_area_idm?: string | null | undefined
  /** 地方名(和文) */
  wine_area_name?: string | null | undefined
  /** 地区IDM */
  area_idm?: string | null | undefined
  /** 地区名(和文) */
  area_name?: string | null | undefined
  /** 村IDM */
  village_idm?: string | null | undefined
  /** 村名(和文) */
  village_name?: string | null | undefined
  /** 商品分類CD */
  item_type_cd1?: string | null | undefined
  /** 希望小売プリント */
  is_print_sign: boolean
  /** 最低出荷単位 */
  shipping_invent_unit_cd1?: string | null | undefined
  /** 戦略分類 */
  strategy_type_cd1?: string | null | undefined
  /** バラ数 */
  bottle_count: number
  /** 残バラ数量 */
  remaining_bottle_count?: number | null | undefined
  /** 打切数量 */
  abort_bottle_count?: number | null | undefined
  /** ケース単価 */
  case_unit_price?: string | null | undefined
  /** バラ単価 */
  bottle_unit_price: string
  /** 在庫単価 */
  stock_price: string
  /** バラ取置単価 */
  reserved_bottle_unit_price: string
  /** 在庫残金額 */
  stock_balance_price: string
  /** 取置残金額 */
  reserved_balance_price: string
  /** 割当使用可フラグ */
  is_free_stock: boolean
  /** 割当担当者ID */
  stock_user_id?: number | null | undefined

  stock_user?: User | undefined

  /** 割当担当者IDM */
  stock_user_idm?: string | null | undefined
  /** 割当担当者名 */
  stock_user_name?: string | null | undefined
  /** 割当元数量 */
  org_stock_count?: number | null | undefined
  /** 稟議承認済フラグ */
  is_approved: boolean
  /** 相手先ケース */
  customer_item_price_case?: string | null | undefined
  /** 相手先バラ */
  customer_item_price_bottle?: string | null | undefined
  /** 相手先No */
  customer_order_no?: string | null | undefined
  /** 明細備考 */
  external_note?: string | null | undefined
  /** 現物取置管理行No */
  physical_stock_line_no?: number | null | undefined
  /** 在庫移動明細ID */
  stock_transfer_detail_id?: number | null | undefined

  stock_transfer_detail?: StockTransferDetail | undefined

  /** 現物取置数量 */
  physical_stock_count?: number | null | undefined
  /** 現物取置明細備考 */
  physical_stock_note?: string | null | undefined
  /** 船積オーダーID */
  shipping_order_id?: number | null | undefined

  shipping_order?: ShippingOrder | undefined

  /** 船積オーダー記号 */
  shipping_order_symbol?: string | null | undefined
  /** 船積オーダーNo */
  shipping_order_no?: string | null | undefined
  /** 国内発注ID */
  domestic_order_id?: number | null | undefined

  domestic_order?: DomesticOrder | undefined

  /** 国内発注No */
  domestic_order_no?: string | null | undefined
  /** 受注引当不可 */
  is_not_sales_order: boolean
  sales_order_details?: SalesOrderDetail[] | undefined

  /** 商品と倉庫に対する在庫。在庫が存在しない場合も数量0のオブジェクトが取得されます。 */
  stock?: Stock | undefined
} & BaseModel

/** 取置一括操作対象 */
export type SalesStockBulkTarget = SalesStock & {
  sales_stock_details: (SalesStockDetail & BulkTarget)[]
} & BulkTarget

/** 予約受注/取置 */
export type VSalesReservationStock = {
  /** 伝票区分CD */
  reservation_or_stock_cd1: string
  /** 伝票区分CD + '-' + 予約受注ヘッダ/取置ヘッダのid */
  v_sales_reservation_stock_id?: string | null | undefined
  /** ID */
  id: number
  /** 予約受注No/取置No */
  no?: string | null | undefined
  /** 予約受注ID ※取置のみ */
  sales_reservation_id?: number | null | undefined

  sales_reservation?: SalesReservation | undefined

  /** 予約受注No ※取置のみ */
  sales_reservation_no?: string | null | undefined
  /** 予約受注取置依頼ID */
  sales_stock_request_id?: number | null | undefined
  /** 予約受注取置依頼No */
  sales_stock_request_no?: string | null | undefined
  /** 予約状況 */
  sales_reservation_stock_header_status_cd1?: string | null | undefined
  /** 倉庫ID */
  location_id: number

  location?: Location | undefined

  /** 倉庫IDM */
  location_idm: string
  /** 倉庫名 */
  location_name?: string | null | undefined
  /** ピッキング分類CD */
  picking_cd1: string
  /** 前入力担当者ID */
  prev_operator_user_id?: number | null | undefined

  prev_operator_user?: User | undefined

  /** 前入力担当者IDM */
  prev_operator_user_idm?: string | null | undefined
  /** 前入力担当者名 */
  prev_operator_user_name?: string | null | undefined
  /** 入力担当者ID */
  operator_user_id: number

  operator_user?: User | undefined

  /** 入力担当者IDM */
  operator_user_idm: string
  /** 入力担当者名 */
  operator_user_name?: string | null | undefined
  /** 予約受注日/取置日 */
  reservation_stock_on: string
  /** 希望納期/取置期限 */
  request_delivery_stock_limit_on: string
  /** 得意先グループCD */
  customer_group_cd1?: string | null | undefined
  /** 得意先グループ名 */
  customer_group_name?: string | null | undefined
  /** 入力得意先ID */
  customer_id?: number | null | undefined

  customer?: Customer | undefined

  /** 得意先ID */
  parent_id?: number | null | undefined

  parent?: Customer | undefined

  /** 得意先IDM */
  parent_idm?: string | null | undefined
  /** 得意先名(カナ) */
  parent_name_kana?: string | null | undefined
  /** 得意先名(正式) */
  parent_name_jp?: string | null | undefined
  /** 得意先名(略称) */
  parent_name_abbr?: string | null | undefined
  /** 代配先ID */
  child_id?: number | null | undefined

  child?: Customer | undefined

  /** 代配店IDM */
  child_idm?: string | null | undefined
  /** 代配店名(カナ) */
  child_name_kana?: string | null | undefined
  /** 代配店名(正式) */
  child_name_jp?: string | null | undefined
  /** 代配店名(略称) */
  child_name_abbr?: string | null | undefined
  /** 担当者ID */
  user_id?: number | null | undefined

  user?: User | undefined

  /** 担当者IDM */
  user_idm?: string | null | undefined
  /** 担当者名 */
  user_name?: string | null | undefined
  /** 担当者ID */
  current_user_id?: number | null | undefined

  current_user?: User | undefined

  /** 担当者IDM */
  current_user_idm?: string | null | undefined
  /** 担当者名 */
  current_user_name?: string | null | undefined
  /** 担当者-チームIDM */
  team_department_idm?: string | null | undefined
  /** 担当者-チーム名 */
  team_department_name?: string | null | undefined
  /** 担当者-部署IDM */
  department_idm?: string | null | undefined
  /** 担当者-部署名 */
  department_name?: string | null | undefined
  /** 割当区分 */
  allotment_cd1?: string | null | undefined
  /** 割当名称 */
  allotment_name?: string | null | undefined
  /** 与信管理区分 */
  yoshin_cd1?: string | null | undefined
  /** 伝票種類CD */
  delivery_slip_cd1?: string | null | undefined
  /** WEB公開フラグ */
  is_web: boolean
  /** 次回同送フラグ ※取置のみ */
  is_next_shipping: boolean
  /** 現物取置フラグ ※取置のみ */
  is_physical_stock: boolean
  /** 現物取置管理No ※取置のみ */
  physical_stock_no?: string | null | undefined
  /** アシスタントID */
  assistant_user_id?: number | null | undefined

  assistant_user?: User | undefined

  /** アシスタントIDM */
  assistant_user_idm?: string | null | undefined
  /** アシスタント名 */
  assistant_user_name?: string | null | undefined
  /** 業態 */
  business_category_cd1?: string | null | undefined
  /** 社内備考 */
  internal_note?: string | null | undefined
  /** 摘要CD1 */
  abstract1_cd1?: string | null | undefined
  /** 摘要1 */
  abstract1?: string | null | undefined
  /** 摘要CD2 */
  abstract2_cd1?: string | null | undefined
  /** 摘要2 */
  abstract2?: string | null | undefined
  /** 摘要CD3 */
  abstract3_cd1?: string | null | undefined
  /** 摘要3 */
  abstract3?: string | null | undefined
  /** 総本数 */
  total_count?: number | null | undefined
  /** 税抜金額 */
  price?: string | null | undefined
  /** 得意先-〒 */
  parent_zip?: string | null | undefined
  /** 得意先-GrpCD */
  parent_customer_group_cd1?: string | null | undefined
  /** 得意先-Grp名 */
  parent_customer_group_name?: string | null | undefined
  /** 得意先-住所1 */
  parent_address1?: string | null | undefined
  /** 得意先-住所2 */
  parent_address2?: string | null | undefined
  /** 得意先-住所3 */
  parent_address3?: string | null | undefined
  /** 得意先-TEL */
  parent_tel1?: string | null | undefined
  /** 得意先-FAX */
  parent_fax1?: string | null | undefined
  /** 得意先-定休日(曜日) */
  parent_holiday_of_week?: string | null | undefined
  /** 得意先-定休日(メモ) */
  parent_holiday_note?: string | null | undefined
  /** 得意先-運賃パターンIDM */
  parent_fare_pattern_idm?: string | null | undefined
  /** 得意先-返信FAX */
  is_parent_refax_required: boolean
  /** 得意先-特記事項 */
  parent_order_remarks?: string | null | undefined
  /** 代配店-〒 */
  child_zip?: string | null | undefined
  /** 代配店-GrpCD */
  child_customer_group_cd1?: string | null | undefined
  /** 代配店-Grp名 */
  child_customer_group_name?: string | null | undefined
  /** 代配店-住所1 */
  child_address1?: string | null | undefined
  /** 代配店-住所2 */
  child_address2?: string | null | undefined
  /** 代配店-住所3 */
  child_address3?: string | null | undefined
  /** 代配店-TEL */
  child_tel1?: string | null | undefined
  /** 代配店-FAX */
  child_fax1?: string | null | undefined
  /** 代配店-定休日(曜日) */
  child_holiday_of_week?: string | null | undefined
  /** 代配店-定休日(メモ) */
  child_holiday_note?: string | null | undefined
  /** 代配店-運賃パターンIDM */
  child_fare_pattern_idm?: string | null | undefined
  /** 代配店-返信FAX */
  is_child_refax_required: boolean
  /** 代配店-特記事項 */
  child_order_remarks?: string | null | undefined
  v_sales_reservation_stock_details?: VSalesReservationStockDetail[] | undefined
} & BaseModel

/** 予約受注/取置明細 */
export type VSalesReservationStockDetail = {
  /** ID */
  id: number
  /** 伝票区分CD + '-' + 予約受注明細/取置明細のid */
  v_sales_reservation_stock_detail_id?: string | null | undefined
  /** 伝票区分CD + '-' + 予約受注ヘッダ/取置ヘッダのid */
  v_sales_reservation_stock_id: string

  v_sales_reservation_stock?: VSalesReservationStock | undefined

  /** 予約受注ID ※予約受注のみ */
  sales_reservation_id?: number | null | undefined

  sales_reservation?: SalesReservation | undefined

  /** 予約受注明細ID ※予約受注のみ */
  sales_reservation_detail_id?: number | null | undefined
  /** 取置ID ※取置のみ */
  sales_stock_id?: number | null | undefined

  sales_stock?: SalesStock | undefined

  /** 取置明細ID ※取置のみ */
  sales_stock_detail_id?: number | null | undefined
  /** 予約受注取置依頼明細ID */
  sales_stock_request_detail_id?: number | null | undefined
  /** 行No */
  line_no: number | null
  /** 予約状況 */
  sales_reservation_stock_status_cd1?: string | null | undefined
  /** 取置区分 ※取置のみ */
  sales_stock_type_cd1?: string | null | undefined
  /** 取引区分 */
  sales_transaction_type_cd1: string
  /** 取引区分名 */
  sales_transaction_type_name?: string | null | undefined
  /** 倉庫ID */
  location_id: number

  location?: Location | undefined

  /** 倉庫IDM */
  location_idm: string
  /** 倉庫名 */
  location_name?: string | null | undefined
  /** 取置日 ※取置のみ */
  stock_on?: string | null | undefined
  /** 商品名(正式/和文) */
  name_jp?: string | null | undefined
  /** 商品名(正式/欧文) */
  name_en?: string | null | undefined
  /** 商品名(伝票印字品名) */
  name_denpatu?: string | null | undefined
  /** 商品名(略称) */
  name_abbr?: string | null | undefined
  /** 商品名(カナ) */
  name_kana?: string | null | undefined
  /** 商品名(RBP用) */
  name_rbp?: string | null | undefined
  /** 商品名(値札工房用) */
  name_pc?: string | null | undefined
  /** 商品名(価格表用) */
  name_catalog?: string | null | undefined
  /** 商品名(別年号用) */
  name_yearly?: string | null | undefined
  /** 商品ID */
  invent_id: number

  invent?: Invent | undefined

  /** 品番 */
  invent_idm: string
  /** 得意先品番 */
  customer_item_cd?: string | null | undefined
  /** JAN */
  barcode?: string | null | undefined
  /** 年号 */
  vintage?: string | null | undefined
  /** 内容量 */
  volume?: number | null | undefined
  /** 入数(ケース) */
  quantity_per_case: number
  /** 入数(ボール) */
  quantity_per_ball?: number | null | undefined
  /** 生産者IDM */
  maker_vendor_idm?: string | null | undefined
  /** 生産者名(略称/和文) */
  maker_vendor_name_jp_abbr?: string | null | undefined
  /** 酒税品目IDM */
  liquor_tax_idm?: string | null | undefined
  /** 酒税名 */
  liquor_tax_name?: string | null | undefined
  /** 酒税名略称 */
  liquor_tax_name_abbr?: string | null | undefined
  /** 原産国IDM */
  country_of_origin_idm?: string | null | undefined
  /** 原産国名(和文) */
  country_of_origin_name?: string | null | undefined
  /** 地方IDM */
  wine_area_idm?: string | null | undefined
  /** 地方名(和文) */
  wine_area_name?: string | null | undefined
  /** 地区IDM */
  area_idm?: string | null | undefined
  /** 地区名(和文) */
  area_name?: string | null | undefined
  /** 村IDM */
  village_idm?: string | null | undefined
  /** 村名(和文) */
  village_name?: string | null | undefined
  /** 商品分類CD */
  item_type_cd1?: string | null | undefined
  /** 希望小売プリント */
  is_print_sign: boolean
  /** 最低出荷単位 */
  shipping_invent_unit_cd1?: string | null | undefined
  /** 戦略分類 */
  strategy_type_cd1?: string | null | undefined
  /** バラ数 */
  bottle_count: number
  /** 残バラ数量 ※取置のみ */
  remaining_bottle_count?: number | null | undefined
  /** 打切数量 ※取置のみ */
  abort_bottle_count?: number | null | undefined
  /** ケース単価 */
  case_unit_price: string
  /** バラ単価 */
  bottle_unit_price: string
  /** 在庫単価 */
  stock_price: string
  /** バラ予約単価 */
  reserved_bottle_unit_price: string
  /** 在庫残金額 */
  stock_balance_price: string
  /** 予約残金額 */
  reserved_balance_price: string
  /** 船積オーダーID */
  shipping_order_id?: number | null | undefined

  shipping_order?: ShippingOrder | undefined

  /** 船積オーダー記号 */
  shipping_order_symbol?: string | null | undefined
  /** 船積オーダーNo */
  shipping_order_no?: string | null | undefined
  /** 国内発注ID */
  domestic_order_id?: number | null | undefined

  domestic_order?: DomesticOrder | undefined

  /** 国内発注No */
  domestic_order_no?: string | null | undefined
  /** 発注時連絡フラグ ※予約受注のみ */
  is_contact_order: boolean
  /** 割当使用可フラグ */
  is_free_stock: boolean
  /** 割当担当者ID */
  stock_user_id?: number | null | undefined

  stock_user?: User | undefined

  /** 割当担当者IDM */
  stock_user_idm?: string | null | undefined
  /** 割当担当者名 */
  stock_user_name?: string | null | undefined
  /** 割当元数量 */
  org_stock_count?: number | null | undefined
  /** 稟議承認済フラグ */
  is_approved: boolean
  /** 相手先ケース */
  customer_item_price_case?: string | null | undefined
  /** 相手先バラ */
  customer_item_price_bottle?: string | null | undefined
  /** 相手先No */
  customer_order_no?: string | null | undefined
  /** 明細備考 */
  external_note?: string | null | undefined
  /** 在庫振替ID ※予約受注のみ */
  stock_change_id?: number | null | undefined

  stock_change?: StockChange | undefined

  /** 在庫振替No ※予約受注のみ */
  stock_change_no?: string | null | undefined
  /** 入荷予定日 ※予約受注のみ */
  will_arrive_on?: string | null | undefined
  /** 入荷時連絡フラグ ※予約受注のみ */
  is_contact_arrival: boolean
  /** 入荷時連絡備考 ※予約受注のみ */
  arrival_contact_note?: string | null | undefined
  /** 取置明細ID ※予約受注のみ */
  reservation_sales_stock_detail_id?: number | null | undefined

  reservation_sales_stock_detail?: SalesStockDetail | undefined

  /** 取置明細作成元である ※予約受注のみ */
  is_sales_stock_detail_creator: boolean
  /** 現物取置管理行No ※取置のみ */
  physical_stock_line_no?: number | null | undefined
  /** 在庫移動明細ID ※取置のみ */
  stock_transfer_detail_id?: number | null | undefined

  stock_transfer_detail?: StockTransferDetail | undefined

  /** 現物取置数量 ※取置のみ */
  physical_stock_count?: number | null | undefined
  /** 現物取置明細備考 ※取置のみ */
  physical_stock_note?: string | null | undefined
  /** 受注引当不可 ※取置のみ */
  is_not_sales_order: boolean
  sales_order_details?: SalesOrderDetail[] | undefined
} & BaseModel

/** 予約受注取置一括操作対象 */
export type VSalesReservationStockBulkTarget = VSalesReservationStock & {
  v_sales_reservation_stock_details: (VSalesReservationStockDetail & BulkTarget)[]
} & BulkTarget

/** 代引佐川受信 */
export type SagawaDelivery = {
  /** ID */
  id: number
  /** 入金日 */
  deposit_on?: string | null | undefined
  /** 入金方法 */
  deposit_type_cd1?: string | null | undefined
  /** 合計件数 */
  number?: number | null | undefined
  /** 合計金額 */
  amount?: string | null | undefined
  /** 振込手数料 */
  commission?: string | null | undefined
  /** 商品代金計 */
  commodity_amount?: string | null | undefined
  /** 取扱手数料計 */
  delivery_charge?: string | null | undefined
  /** 取扱手数料税額計 */
  delivery_charge_tax?: string | null | undefined
  /** カード決済手数料計 */
  card_fee?: string | null | undefined
  /** 印紙代計 */
  stamp_duty?: string | null | undefined
  /** 処理済フラグ */
  is_completed: boolean
} & BaseModel

/** 出荷可能商品 */
export type ShippableInvent = {
  /** ID */
  id: number
  /** 得意先グループCD */
  customer_group_cd1?: string | null | undefined
  /** 得意先ID */
  customer_id?: number | null | undefined

  customer?: Customer | undefined

  /** 品目区分CD */
  item_group_cd1?: string | null | undefined
  /** 商品ID */
  invent_id?: number | null | undefined

  invent?: Invent | undefined
} & BaseModel

/** 出荷可能商品一括操作対象 */
export type ShippableInventBulkTarget = ShippableInvent & BulkTarget

/** 出荷指示データ連携履歴 */
export type ShippingLinkHistory = {
  /** ID */
  id: number
  /** 伝送年月日 */
  executed_on: string
  /** 伝送No */
  batch_no: string
  /** 連番 */
  serial_no: number
  /** 倉庫ID */
  location_id: number

  location?: Location | undefined
} & BaseModel

/** 船積オーダー明細 */
export type ShippingOrderDetail = {
  /** ID */
  id: number
  /** 分割元船積オーダー明細ID */
  shipping_order_detail_id?: number | null | undefined

  shipping_order_detail?: ShippingOrderDetail | undefined

  /** 船積オーダーID */
  shipping_order_id?: number | null | undefined

  shipping_order?: ShippingOrder | undefined

  /** 予約オーダー明細ID */
  shipping_reservation_detail_id?: number | null | undefined

  shipping_reservation_detail?: ShippingReservationDetail | undefined

  /** 行No */
  line_no?: number | null | undefined
  /** 許可記号状況 */
  shipping_order_status_cd1?: string | null | undefined
  /** 許可記号 */
  mark?: string | null | undefined

  purchase_price?: PurchasePrice | undefined

  /** 商品ID */
  invent_id?: number | null | undefined

  invent?: Invent | undefined

  /** 商品名(正式/和文) */
  invent_name_jp?: string | null | undefined
  /** 商品名(正式/欧文) */
  invent_name_en?: string | null | undefined
  /** 年号 */
  vintage?: string | null | undefined
  /** 内容量 */
  volume?: number | null | undefined
  /** 生産者ID */
  maker_vendor_id?: number | null | undefined

  maker_vendor?: Vendor | undefined

  /** 発注先ID */
  order_vendor_id?: number | null | undefined

  order_vendor?: Vendor | undefined

  /** CCID */
  cc_vendor_id?: number | null | undefined

  cc_vendor?: Vendor | undefined

  /** 発注単位ID */
  order_unit_vendor_id?: number | null | undefined

  order_unit_vendor?: Vendor | undefined

  /** 支払先ID */
  pay_vendor_id?: number | null | undefined

  pay_vendor?: Vendor | undefined

  /** 支払条件ID */
  payment_condition_id?: number | null | undefined

  payment_condition?: PaymentCondition | undefined

  /** 支払期日起算日条件区分 */
  payment_base_date_cd1?: string | null | undefined
  /** 集荷先ID */
  collection_vendor_id?: number | null | undefined

  collection_vendor?: Vendor | undefined

  /** 輸入統計品目CD */
  customs_itemname_cd1?: string | null | undefined
  /** 酒税名ID */
  liquor_tax_name_id?: number | null | undefined

  liquor_tax_name?: LiquorTaxName | undefined

  /** 価格単位CD */
  price_unit_cd1?: string | null | undefined
  /** 通貨CD */
  currency_cd1?: string | null | undefined
  /** 現地単価 */
  local_unit_price?: string | null | undefined
  /** 値引前単価 */
  local_regular_unit_price?: string | null | undefined
  /** 無償区分 */
  free_of_chage_type_cd1?: string | null | undefined
  /** 容量按分追加費用 */
  distribute_volume_cost?: string | null | undefined
  /** 容量按分対象フラグ */
  is_distribute_volume: boolean
  /** 数量按分追加費用 */
  distribute_count_cost?: string | null | undefined
  /** 数量按分対象フラグ */
  is_distribute_count: boolean
  /** 通関単価 */
  customs_unit_price?: string | null | undefined
  /** 通関金額 */
  customs_amount?: string | null | undefined
  /** 買入金額(外貨) */
  purchase_amount?: string | null | undefined
  /** 価格体系CD */
  price_system_cd1?: string | null | undefined
  /** 登録入数 */
  quantity_per_case?: number | null | undefined
  /** 登録ケース数 */
  case_count?: number | null | undefined
  /** 登録バラ数 */
  bottle_count?: number | null | undefined
  /** バラ合計 */
  total_count?: number | null | undefined
  /** 実入数 */
  local_quantity_per_case?: number | null | undefined
  /** 実ケース数 */
  local_case_count?: number | null | undefined
  /** 実バラ数 */
  local_bottle_count?: number | null | undefined
  /** 実搬入ケース数 */
  real_case_count?: number | null | undefined
  /** 実搬入バラ数 */
  real_bottle_count?: number | null | undefined
  /** 実搬入総バラ数 */
  real_total_count?: number | null | undefined
  /** 函数/1PT */
  box_per_pallet?: number | null | undefined
  /** パレット数 */
  pallet_count?: number | null | undefined
  /** 商品重量 */
  weight?: string | null | undefined
  /** 倉庫依頼ID */
  order_warehouse_id?: number | null | undefined

  order_warehouse?: OrderWarehouse | undefined

  /** 生産者依頼ID */
  order_maker_id?: number | null | undefined

  order_maker?: OrderMaker | undefined

  /** 発注者覚書 */
  order_note?: string | null | undefined
  /** 入荷予定備考 */
  arrival_schedule_note?: string | null | undefined
  /** 商品仕様備考 */
  invent_spec_note?: string | null | undefined
  /** 表示順 */
  display_order?: number | null | undefined
  /** 函荷姿CD */
  box_style_cd1?: string | null | undefined
  /** 一括表示仕様ID */
  batch_display_id?: number | null | undefined

  batch_display?: BatchDisplay | undefined

  /** 函ラベルID */
  label_box_id?: number | null | undefined

  label_box?: LabelBox | undefined

  /** 食品仕様書フラグ */
  is_food_spec: boolean
  /** 予備１フラグ */
  is_reserve1: boolean
  /** 撮影区分 */
  shoot_type_cd1?: string | null | undefined
  /** 検品期日 */
  check_limit_on?: string | null | undefined
  /** 価格検討済フラグ */
  is_notice: boolean
  /** 協賛インボイス対象フラグ */
  is_invoice: boolean
  /** SPT条件区分 */
  spt_condition_cd1?: string | null | undefined
  /** 栓仕様CD */
  cork_spec_cd1?: string | null | undefined
  /** 容器ID */
  bottle_size_id?: number | null | undefined

  bottle_size?: BottleSize | undefined

  /** 船積オーダー協賛インボイスID */
  shipping_order_invoice_id?: number | null | undefined

  shipping_order_invoice?: ShippingOrderInvoice | undefined

  /** 搬入時仕様チェック */
  is_carry_check: boolean
  /** 船積差異責任所在区分 */
  unmatch_responsibility_cd1?: string | null | undefined
  /** 船積差異理由区分 */
  unmatch_cause_cd1?: string | null | undefined
  /** BalanceBook明細ID */
  balance_book_detail_id?: number | null | undefined

  balance_book_detail?: BalanceBookDetail | undefined

  /** 倉庫ID */
  location_id?: number | null | undefined

  location?: Location | undefined

  /** 通関許可日 */
  customs_release_on?: string | null | undefined
  /** 新品番年号区分 */
  new_invent_vintage_cd1?: string | null | undefined
  /** 過払BB転記済フラグ */
  is_balance_book_posted?: boolean | undefined
  /** 同一品番年号予約残数 */
  residue_reservation_count_by_invent_vintage?: number | undefined
  /** 前回船積現地単価(同一別年号商品) */
  prev_local_unit_price?: string | undefined
  /** バックヴィンテージ存在フラグ(別年含まない) */
  is_back_vintage?: boolean | undefined
  /** バックヴィンテージ存在フラグ(別年含む) */
  is_back_vintage_name_yearly?: boolean | undefined
  /** 原価出力日 */
  cost_output_on?: string | null | undefined
  /** 容量按分単価 */
  distribute_volume_cost_unit_price?: string | null | undefined
  /** 数量按分単価 */
  distribute_count_cost_unit_price?: string | null | undefined
  /** 内容量（合計） */
  total_volume?: number | null | undefined
  /** 容量按分しない費用 */
  undistribute_volume_cost?: string | null | undefined

  overpayment_balance_book_detail?: BalanceBookDetail | undefined

  shipping_order_document?: ShippingOrderDocument | undefined

  shipping_order_lot?: ShippingOrderLot | undefined

  shipping_order_reports?: ShippingOrderReport[] | undefined

  payment_schedule?: PaymentSchedule | undefined

  purchase_reservation?: PurchaseReservation | undefined

  purchase_cost?: PurchaseCost | undefined

  check_costs?: CheckCost[] | undefined
} & BaseModel

/** 船積オーダー明細一括操作対象 */
export type ShippingOrderDetailBulkTarget = ShippingOrderDetail & BulkTarget

/** 船積オーダー過不足 */
export type ShippingOrderDifference = {
  /** ID */
  id: number
  /** 船積オーダーID */
  shipping_order_id?: number | null | undefined

  shipping_order?: ShippingOrder | undefined

  /** 船積オーダー明細ID */
  shipping_order_detail_id?: number | null | undefined

  shipping_order_detail?: ShippingOrderDetail | undefined

  /** 入庫報告書商品名 */
  invent_name?: string | null | undefined
  /** 実ケース数量 */
  local_case_count?: number | null | undefined
  /** 実バラ数量 */
  local_bottle_count?: number | null | undefined
  /** 実搬入ケース数 */
  real_case_count?: number | null | undefined
  /** 実搬入バラ数 */
  real_bottle_count?: number | null | undefined
  /** 差異ケース数 */
  diff_case_count?: number | null | undefined
  /** 差異バラ数 */
  diff_bottle_count?: number | null | undefined
  /** 過不足区分 */
  excess_or_deficiency_cd1?: string | null | undefined
} & BaseModel

/** 船積オーダー通関書類 */
export type ShippingOrderDocument = {
  /** ID */
  id: number
  /** 船積オーダー明細ID */
  shipping_order_detail_id?: number | null | undefined

  shipping_order_detail?: ShippingOrderDetail | undefined

  /** Invoiceフラグ */
  is_invoice: boolean
  /** 原産地証明書フラグ */
  is_placeoforiginname_certificate: boolean
  /** 予備１フラグ */
  is_reserve1: boolean
  /** 食品仕様書送付日 */
  food_spec_sent_on?: string | null | undefined
  /** Invoice番号 */
  invoice_no?: string | null | undefined
  /** Invoice発行日 */
  invoice_on?: string | null | undefined
  /** ロット番号 */
  lot_no?: string | null | undefined
  /** ボトリング日(代表) */
  bottling_on?: string | null | undefined
  /** 生産者賞味期限 */
  maker_best_before_on?: string | null | undefined
  /** ボトリングメモ */
  bottling_note?: string | null | undefined
  /** 通関書類内部備考 */
  note?: string | null | undefined
  /** 分析表フラグ */
  is_analyze: boolean
  /** 分析表検査日 */
  analyzed_on?: string | null | undefined
  /** アルコール度数 */
  alcohol_percentage?: string | null | undefined
  /** ガス圧 */
  gas_pressure?: string | null | undefined
  /** 分析表内部備考 */
  analyze_note?: string | null | undefined
  /** 添加物１ID */
  additive1_id?: number | null | undefined

  additive1?: Additive | undefined

  /** 数量１ */
  value1?: string | null | undefined
  /** 添加物２ID */
  additive2_id?: number | null | undefined

  additive2?: Additive | undefined

  /** 数量２ */
  value2?: string | null | undefined
  /** 添加物３ID */
  additive3_id?: number | null | undefined

  additive3?: Additive | undefined

  /** 数量３ */
  value3?: string | null | undefined
  /** 添加物４ID */
  additive4_id?: number | null | undefined

  additive4?: Additive | undefined

  /** 数量４ */
  value4?: string | null | undefined
  /** 添加物５ID */
  additive5_id?: number | null | undefined

  additive5?: Additive | undefined

  /** 数量５ */
  value5?: string | null | undefined
  /** 添加物６ID */
  additive6_id?: number | null | undefined

  additive6?: Additive | undefined

  /** 数量６ */
  value6?: string | null | undefined
  /** 添加物７ID */
  additive7_id?: number | null | undefined

  additive7?: Additive | undefined

  /** 数量７ */
  value7?: string | null | undefined
  /** 添加物８ID */
  additive8_id?: number | null | undefined

  additive8?: Additive | undefined

  /** 数量８ */
  value8?: string | null | undefined
  /** 添加物９ID */
  additive9_id?: number | null | undefined

  additive9?: Additive | undefined

  /** 数量９ */
  value9?: string | null | undefined
  /** 添加物１０ID */
  additive10_id?: number | null | undefined

  additive10?: Additive | undefined

  /** 数量１０ */
  value10?: string | null | undefined
} & BaseModel

/** 船積オーダー協賛インボイス */
export type ShippingOrderInvoice = {
  /** ID */
  id: number
  /** インボイスNo */
  no?: string | null | undefined
  /** 支払先ID */
  pay_vendor_id?: number | null | undefined

  pay_vendor?: Vendor | undefined
} & BaseModel

/** 船積オーダーラベル手配 */
export type ShippingOrderLabel = {
  /** ID */
  id: number
  /** 船積オーダーID */
  shipping_order_id?: number | null | undefined

  shipping_order?: ShippingOrder | undefined

  /** ラベル外注フラグ */
  is_outsourcing: boolean
  /** その他ラベルフラグ */
  is_other: boolean
  /** シール手配備考 */
  note?: string | null | undefined
  /** ラベル書出日 */
  output_on?: string | null | undefined
} & BaseModel

/** 船積オーダーロット分割 */
export type ShippingOrderLot = {
  /** ID */
  id: number
  /** 船積オーダー明細ID */
  shipping_order_detail_id?: number | null | undefined

  shipping_order_detail?: ShippingOrderDetail | undefined

  /** ケース数量 */
  case_count?: number | null | undefined
  /** バラ数量 */
  bottle_count?: number | null | undefined
  /** 現物賞味期限 */
  real_best_before_on?: string | null | undefined
  /** ラベル賞味期限 */
  label_best_before_on?: string | null | undefined
} & BaseModel

/** 船積オーダー入庫報告 */
export type ShippingOrderReport = {
  /** ID */
  id: number
  /** 船積オーダー明細ID */
  shipping_order_detail_id: number

  shipping_order_detail?: ShippingOrderDetail | undefined

  /** 商品ID */
  invent_id: number

  invent?: Invent | undefined

  /** 船積オーダーNo */
  shipping_order_no: string
  /** 再取込フラグ */
  is_imported: boolean
  /** 入庫年月日 */
  entered_on?: string | null | undefined
  /** 入港年月日 */
  eta_on?: string | null | undefined
  /** 積載船名 */
  ship_name?: string | null | undefined
  /** B/L No. */
  bl_no?: string | null | undefined
  /** 台帳番号 */
  ledger_no?: string | null | undefined
  /** No */
  imported_no?: number | null | undefined
  /** 行No */
  line_no: number
  /** 許可記号 */
  mark: string
  /** 許可記号状況名 */
  shipping_order_status_name?: string | null | undefined
  /** 品番 */
  invent_idm: string
  /** 生産者名 */
  maker_vendor_name_jp_abbr?: string | null | undefined
  /** 商品名 */
  invent_name_jp?: string | null | undefined
  /** 年号 */
  vintage?: string | null | undefined
  /** 容量 */
  volume?: number | null | undefined
  /** 入数 */
  quantity_per_case?: number | null | undefined
  /** 発注数(ケース) */
  case_count?: number | null | undefined
  /** 発注数(本) */
  bottle_count?: number | null | undefined
  /** 実入荷数(ケース) */
  real_case_count?: number | null | undefined
  /** 実入荷数(本) */
  real_bottle_count?: number | null | undefined
  /** 年号違い */
  changed_vintage?: string | null | undefined
  /** 入数違い */
  changed_quantity_per_case?: number | null | undefined
  /** アルコール度数 */
  alc?: string | null | undefined
  /** 画像有フラグ */
  is_image: boolean
  /** ラベル対応(裏(RBP/JBL)) */
  back_label_note?: string | null | undefined
  /** ラベル対応(函) */
  case_label_note?: string | null | undefined
  /** ラベル詳細 */
  label_detail_note?: string | null | undefined
  /** 仕様変更 */
  spec_change_note?: string | null | undefined
  /** 仕様詳細 */
  spec_change_detail_note?: string | null | undefined
  /** その他報告 */
  note?: string | null | undefined
  /** 予備1 */
  reserve1?: string | null | undefined
  /** 予備2 */
  reserve2?: string | null | undefined
  /** 予備3 */
  reserve3?: string | null | undefined
  /** 予備4 */
  reserve4?: string | null | undefined
  /** 賞味期限詳細1(ＣＳ) */
  expiry_case1?: number | null | undefined
  /** 賞味期限詳細1(本) */
  expiry_bottle1?: number | null | undefined
  /** 賞味期限詳細1(賞味期限) */
  expiry_on1?: string | null | undefined
  /** 賞味期限詳細2(ＣＳ) */
  expiry_case2?: number | null | undefined
  /** 賞味期限詳細2(本) */
  expiry_bottle2?: number | null | undefined
  /** 賞味期限詳細2(賞味期限) */
  expiry_on2?: string | null | undefined
  /** 賞味期限詳細3(ＣＳ) */
  expiry_case3?: number | null | undefined
  /** 賞味期限詳細3(本) */
  expiry_bottle3?: number | null | undefined
  /** 賞味期限詳細3(賞味期限) */
  expiry_on3?: string | null | undefined
  /** 賞味期限詳細4(ＣＳ) */
  expiry_case4?: number | null | undefined
  /** 賞味期限詳細4(本) */
  expiry_bottle4?: number | null | undefined
  /** 賞味期限詳細4(賞味期限) */
  expiry_on4?: string | null | undefined
  /** 賞味期限詳細5(ＣＳ) */
  expiry_case5?: number | null | undefined
  /** 賞味期限詳細5(本) */
  expiry_bottle5?: number | null | undefined
  /** 賞味期限詳細5(賞味期限) */
  expiry_on5?: string | null | undefined
  /** 賞味期限詳細6(ＣＳ) */
  expiry_case6?: number | null | undefined
  /** 賞味期限詳細6(本) */
  expiry_bottle6?: number | null | undefined
  /** 賞味期限詳細6(賞味期限) */
  expiry_on6?: string | null | undefined
  /** アルコール度数出力日 */
  alc_exported_on?: string | null | undefined
  /** 実入荷数登録日 */
  real_count_on?: string | null | undefined
  /** 差異有フラグ */
  is_difference: boolean
  /** 入庫報告メール送信日 */
  send_mail_on?: string | null | undefined
} & BaseModel

/** 船積オーダー搬入スケジュール */
export type ShippingOrderSchedule = {
  /** ID */
  id: number
  /** 船積オーダーID */
  shipping_order_id?: number | null | undefined

  shipping_order?: ShippingOrder | undefined

  /** 船名１ */
  ship_name1?: string | null | undefined
  /** 船名２ */
  ship_name2?: string | null | undefined
  /** 船名３ */
  ship_name3?: string | null | undefined
  /** 船名４ */
  ship_name4?: string | null | undefined
  /** 最終船名 */
  ship_name_last?: string | null | undefined
  /** 倉庫搬入日 */
  carried_on?: string | null | undefined
  /** 搬入スケジュール内部備考 */
  note?: string | null | undefined
  /** 通関期日 */
  customs_limit_on?: string | null | undefined
  /** 入港日 */
  eta_on?: string | null | undefined
  /** 一括搬入日 */
  imported_on?: string | null | undefined
  /** B/L番号 */
  bl_no?: string | null | undefined
  /** フリータイムID */
  free_time_id?: number | null | undefined

  free_time?: FreeTime | undefined

  /** FT最終日 */
  last_free_time_on?: string | null | undefined
  /** FT超過日数 */
  free_time_over_days?: number | null | undefined
  /** FT超過費用合計 */
  free_time_amount?: string | null | undefined
  /** ANフラグ */
  is_an: boolean
  /** BLフラグ */
  is_bl: boolean
  /** 搬入予定表備考 */
  timetable_note?: string | null | undefined
} & BaseModel

/** 船積オーダー */
export type ShippingOrder = {
  /** ID */
  id: number
  /** 船積オーダー記号 */
  mark?: string | null | undefined
  /** 船積オーダーNo */
  no?: string | undefined
  /** 表示用船積オーダーNo */
  display_no?: string | undefined
  /** 集荷依頼リバイス回数 */
  revision?: number | null | undefined
  /** 荷主CD */
  shipper_cd1?: string | null | undefined
  /** 輸入元CD */
  import_origin_cd1?: string | null | undefined
  /** 船社ID */
  ship_company_id?: number | null | undefined

  ship_company?: ShipCompany | undefined

  /** 作成日 */
  shipping_order_created_on?: string | null | undefined
  /** バイヤーID */
  buyer_user_id?: number | null | undefined

  buyer_user?: User | undefined

  /** オペレーターID */
  operator_user_id?: number | null | undefined

  operator_user?: User | undefined

  /** 通関担当者ID */
  customs_user_id?: number | null | undefined

  customs_user?: User | undefined

  /** コンテナサイズCD */
  container_size_cd1?: string | null | undefined
  /** コンテナ仕様CD */
  container_type_cd1?: string | null | undefined
  /** 通関業者CD */
  customs_broker_cd1?: string | null | undefined
  /** 出港地ID */
  departure_port_cd1?: string | null | undefined
  /** 出港希望日 */
  request_etd_on?: string | null | undefined
  /** 出港日 */
  etd_on?: string | null | undefined
  /** 経由地ID */
  stop_over_port_cd1?: string | null | undefined
  /** フォワーダーID */
  forwarder_vendor_id?: number | null | undefined

  forwarder_vendor?: Vendor | undefined

  /** 集荷期日 */
  pickup_on?: string | null | undefined
  /** 入港地CD */
  arrival_port_cd1?: string | null | undefined
  /** 入港希望日 */
  request_eta_on?: string | null | undefined
  /** プラグ区分 */
  plug_cd1?: string | null | undefined
  /** 単一/混載区分 */
  mitfhsmix_cd1?: string | null | undefined
  /** パレット使用なしフラグ */
  pallet_not_used: boolean
  /** 集荷依頼日 */
  order_pickup_on?: string | null | undefined
  /** 書類送付備考 */
  document_note?: string | null | undefined
  /** コンテナ番号 */
  container_no?: string | null | undefined
  /** 内部備考 */
  note?: string | null | undefined
  /** 書類完了フラグ */
  is_complete: boolean
  /** BCフラグ */
  is_bc: boolean
  /** OBフラグ */
  is_ob: boolean
  /** 入庫報告書取込済フラグ */
  is_imported: boolean

  shipping_order_label?: ShippingOrderLabel | undefined

  shipping_order_schedule?: ShippingOrderSchedule | undefined

  shipping_order_details?: ShippingOrderDetail[] | undefined
  sales_reservation_details?: SalesReservationDetail[] | undefined

  import_cost?: ImportCost | undefined
} & BaseModel

/** 船積オーダー一括操作対象 */
export type ShippingOrderBulkTarget = ShippingOrder & {
  shipping_order_label: ShippingOrderLabel & BulkTarget

  shipping_order_schedule: ShippingOrderSchedule & BulkTarget

  shipping_order_details: (ShippingOrderDetail & BulkTarget & {
    /** システム用_商品総重量 */
    all_weight?: number | undefined
  })[]
} & BulkTarget

/** 船積オーダー通関書類一括操作対象 */
export type ShippingOrderDocumentBulkTarget = {
  /** 船積オーダーID */
  id?: number | undefined
  shipping_order_details?: {
    /** 船積オーダー明細ID */
    id?: number | undefined

    shipping_order_document?: ShippingOrderDocument & BulkTarget | undefined
  }[] | undefined
}

/** 船積オーダースケジュール一括操作対象 */
export type ShippingOrderScheduleBulkTarget = {
  /** ID */
  id?: number | undefined

  shipping_order_schedule?: ShippingOrderSchedule & BulkTarget | undefined
}

/** 予約オーダー */
export type ShippingReservation = {
  /** ID */
  id: number
  /** 予約区分 */
  reserve_type_cd1?: string | null | undefined
  /** 予約オーダーNo */
  no?: string | null | undefined
  /** 表示用予約オーダーNo */
  display_no?: string | null | undefined
  /** 予約日 */
  reserved_on?: string | null | undefined
  /** 発注先ID */
  order_vendor_id?: number | null | undefined

  order_vendor?: Vendor | undefined

  /** CCID */
  cc_vendor_id?: number | null | undefined

  cc_vendor?: Vendor | undefined

  /** 発注単位ID */
  vendor_unit_id?: number | null | undefined

  vendor_unit?: Vendor | undefined

  /** 支払先ID */
  pay_vendor_id?: number | null | undefined

  pay_vendor?: Vendor | undefined

  /** 集荷先ID */
  collection_vendor_id?: number | null | undefined

  collection_vendor?: Vendor | undefined

  /** 支払条件ID */
  payment_condition_id?: number | null | undefined

  payment_condition?: PaymentCondition | undefined

  /** バイヤーID */
  buyer_user_id?: number | null | undefined

  buyer_user?: User | undefined

  /** オペレーターID */
  operator_user_id?: number | null | undefined

  operator_user?: User | undefined

  /** 通貨CD */
  currency_cd1?: string | null | undefined
  /** 価格体系CD */
  price_system_cd1?: string | null | undefined
  /** 予約オーダーリバイス回数 */
  revision?: number | null | undefined
  /** プリムールフラグ */
  is_primeur: boolean
  /** 内部備考 */
  note?: string | null | undefined
  /** Remarks */
  remarks?: string | null | undefined
  shipping_reservation_details?: ShippingReservationDetail[] | undefined
} & BaseModel

/** 予約オーダー明細 */
export type ShippingReservationDetail = {
  /** ID */
  id: number
  /** 予約オーダーID */
  shipping_reservation_id?: number | undefined

  shipping_reservation?: ShippingReservation | undefined

  /** 分割元予約オーダー明細ID */
  import_reservation_detail_id?: number | null | undefined
  /** 行No */
  line_no?: number | null | undefined
  /** 商品ID */
  invent_id?: number | null | undefined

  invent?: Invent | undefined

  /** 予約商品名 */
  reserve_item_name?: string | null | undefined
  /** 生産者ID */
  maker_vendor_id?: number | null | undefined

  maker_vendor?: Vendor | undefined

  /** 年号 */
  vintage?: string | null | undefined
  /** 内容量 */
  volume?: number | null | undefined
  /** 登録入数 */
  quantity_per_case?: number | null | undefined
  /** 登録ケース数 */
  case_count?: number | null | undefined
  /** 登録バラ数 */
  bottle_count?: number | null | undefined
  /** バラ合計 */
  total_count?: number | null | undefined
  /** 実入数 */
  local_quantity_per_case?: number | null | undefined
  /** 実ケース数 */
  local_case_count?: number | null | undefined
  /** 実バラ数 */
  local_bottle_count?: number | null | undefined
  /** 価格単位CD */
  price_unit_cd1?: string | null | undefined
  /** 現地単価 */
  local_unit_price?: string | null | undefined
  /** 値引前単価 */
  local_regular_unit_price?: string | null | undefined
  /** 無償区分 */
  free_of_chage_type_cd1?: string | null | undefined
  /** 購入金額(外貨) */
  purchase_amount?: string | null | undefined
  /** 函荷姿CD */
  box_style_cd1?: string | null | undefined
  /** 倉庫依頼ID */
  order_warehouse_id?: number | null | undefined

  order_warehouse?: OrderWarehouse | undefined

  /** 生産者依頼ID */
  order_maker_id?: number | null | undefined

  order_maker?: OrderMaker | undefined

  /** 発注者覚書 */
  order_note?: string | null | undefined
  /** 戦略分類CD */
  strategy_type_cd1?: string | null | undefined
  /** 設定レート */
  rate?: string | null | undefined
  /** 表示順 */
  display_order?: number | null | undefined
  /** 内部備考 */
  note?: string | null | undefined
  /** 打切フラグ */
  is_quit: boolean
  shipping_order_details?: ShippingOrderDetail[] | undefined
  /** 引当の合計 */
  allocation_total_count?: number | null | undefined
  /** 過払BB転記済フラグ */
  is_balance_book_posted?: boolean | undefined

  payment_schedule?: PaymentSchedule | undefined

  balance_book_detail?: BalanceBookDetail | undefined
} & BaseModel

/** 予約オーダー一括操作対象 */
export type ShippingReservationBulkTarget = ShippingReservation & {
  shipping_reservation_details: (ShippingReservationDetail & BulkTarget)[]
} & BulkTarget

/** バランスブック一括操作対象 */
export type BalanceBookBulkTarget = BalanceBook & {
  balance_book_details: (BalanceBookDetail & BulkTarget)[]
  balance_book_offsets?: (BalanceBookOffset & BulkTarget)[] | undefined
} & BulkTarget

/** 在庫調整 */
export type StockAdjustment = {
  /** ID */
  id: number
  /** 在庫調整区分 */
  stock_adjustment_type_cd1: string
  /** 在庫調整日 */
  adjusted_on?: string | null | undefined
  /** 取置明細ID */
  sales_stock_detail_id?: number | null | undefined

  sales_stock_detail?: SalesStockDetail | undefined

  /** 倉庫ID */
  location_id: number

  location?: Location | undefined

  /** 商品ID */
  invent_id: number

  invent?: Invent | undefined

  /** 商品名(伝票印字品名) */
  name_denpatu?: string | null | undefined
  /** 年号 */
  vintage?: string | null | undefined
  /** 容量 */
  volume?: number | null | undefined
  /** 登録入数 */
  quantity_per_case?: number | null | undefined
  /** ケース */
  case_count?: number | null | undefined
  /** バラ */
  bottle_count?: number | null | undefined
  /** 総バラ */
  total_count?: number | null | undefined
  /** 実施者ID */
  user_id: number

  user?: User | undefined

  /** 費用負担チームID */
  team_id?: number | null | undefined

  team?: Team | undefined

  /** 調整理由 */
  reason?: string | null | undefined
  /** 在庫調整内部備考 */
  note?: string | null | undefined
  /** 在庫・仕入計上実績ID */
  purchase_result_id?: number | null | undefined

  purchase_result?: PurchaseResult | undefined
} & BaseModel

/** 在庫調整一括操作対象 */
export type StockAdjustmentBulkTarget = StockAdjustment & BulkTarget

/** 在庫振替 */
export type StockChange = {
  /** ID */
  id: number
  /** 在庫振替No */
  no: string | null
  /** 担当部署CD */
  post_cd1: string
  /** 在庫振替区分 */
  stock_change_type_cd1: string
  /** 在庫振替依頼区分 */
  stock_change_request_type_cd1: string
  /** 完成状態 */
  stock_change_completion_status_cd1: string
  /** 品番-無 */
  is_non_invent: boolean
  /** 依頼日 */
  requested_on: string
  /** 依頼者ID */
  requested_user_id: number

  requested_user?: User | undefined

  /** 完成予定・実績倉庫ID */
  location_id: number

  location?: Location | undefined

  /** 作業完了希望日 */
  desired_completion_on?: string | null | undefined
  /** 委託倉庫了承済 */
  is_accepted: boolean
  /** 作業完了希望 */
  complete_note?: string | null | undefined
  /** 出荷予定日 */
  schedule_shipping_on?: string | null | undefined
  /** 振替完了日 */
  stock_changed_on?: string | null | undefined
  /** 振替者ID */
  stock_changed_user_id?: number | null | undefined

  stock_changed_user?: User | undefined

  /** 得意先ID */
  customer_id?: number | null | undefined

  customer?: Customer | undefined

  /** 営業担当者ID */
  sales_user_id?: number | null | undefined

  sales_user?: User | undefined

  /** アシスタントID */
  assistant_user_id?: number | null | undefined

  assistant_user?: User | undefined

  /** 親部品表ID */
  invent_component_id?: number | null | undefined

  invent_component?: InventComponent | undefined

  /** 親商品ID */
  invent_id?: number | null | undefined

  invent?: Invent | undefined

  /** 商品名(伝票印字品名) */
  name_denpatu?: string | null | undefined
  /** 容量 */
  volume?: number | null | undefined
  /** 在庫管理対象 */
  is_stocked: boolean
  /** 入数 */
  quantity_per_case?: number | null | undefined
  /** 年号 */
  vintage?: string | null | undefined
  /** 函 */
  case_count: number
  /** バラ */
  bottle_count: number
  /** 総バラ */
  total_count: number
  /** 価格採用基準日 */
  price_reference_on?: string | null | undefined
  /** 納価(バラ) */
  bottle_unit_price?: string | null | undefined
  /** 希望小売価格 */
  mrp?: string | null | undefined
  /** 納価金額 */
  total_unit_price?: string | null | undefined
  /** 在庫単価 */
  stock_price?: string | null | undefined
  /** セット箱仕様 */
  mastercarton_type_cd1?: string | null | undefined
  /** マスターカートン */
  mastercarton_note?: string | null | undefined
  /** 依頼書備考 */
  request_note?: string | null | undefined
  /** 依頼書社内備考 */
  internal_request_note?: string | null | undefined
  /** 内部備考 */
  note?: string | null | undefined
  /** 取置明細ID(解体時) */
  sales_stock_detail_id?: number | null | undefined

  sales_stock_detail?: SalesStockDetail | undefined

  /** 商品マスタ作成依頼備考 */
  request_invent_note?: string | null | undefined
  /** 予約・取置依頼備考 */
  request_sales_note?: string | undefined
  stock_change_details?: StockChangeDetail[] | undefined
} & BaseModel

/** 在庫振替明細 */
export type StockChangeDetail = {
  /** ID */
  id: number
  /** 在庫振替ID */
  stock_change_id?: number | undefined

  stock_change?: StockChange | undefined

  /** 行No */
  line_no?: number | null | undefined
  /** 品番-無 */
  is_non_invent: boolean
  /** 子部品表ID */
  invent_component_id?: number | null | undefined

  invent_component?: InventComponent | undefined

  /** 子商品ID */
  invent_id?: number | null | undefined

  invent?: Invent | undefined

  /** 商品名(伝票印字品名) */
  name_denpatu?: string | null | undefined
  /** 年号 */
  vintage?: string | null | undefined
  /** 容量 */
  volume?: number | null | undefined
  /** 登録入数 */
  quantity_per_case?: number | null | undefined
  /** ALC */
  alcohol_content?: string | null | undefined
  /** 在庫管理対象 */
  is_stocked: boolean
  /** 総バラ */
  total_count: number
  /** 構成比 */
  composition_ratio?: number | null | undefined
  /** 倉庫ID */
  location_id?: number | null | undefined

  location?: Location | undefined

  /** 在庫単価 */
  stock_price?: string | null | undefined
  /** 納価(バラ) */
  bottle_unit_price?: string | null | undefined
  /** 納価金額 */
  total_unit_price?: string | null | undefined
  /** 納価比率(%) */
  sales_price_ratio?: string | null | undefined
  /** 支給品 */
  is_supplied: boolean
  /** 依頼書備考 */
  request_note?: string | null | undefined
  /** 内部備考 */
  note?: string | null | undefined
  /** 取置明細ID */
  sales_stock_detail_id?: number | null | undefined

  sales_stock_detail?: SalesStockDetail | undefined

  /** 予約受注明細ID */
  sales_reservation_detail_id?: number | null | undefined

  sales_reservation_detail?: SalesReservationDetail | undefined

  /** お見積価格(バラ) */
  estimated_price?: string | null | undefined
  /** 現物取置 */
  physical_stock?: string | null | undefined
  /** 値引き率 */
  discount_rate?: string | null | undefined
} & BaseModel

/** 在庫振替一括操作対象 */
export type StockChangeBulkTarget = StockChange & {
  stock_change_details: (StockChangeDetail & BulkTarget)[]
} & BulkTarget

/** 在庫受払 */
export type StockTransaction = {
  /** ID */
  id: number
  /** 倉庫ID */
  location_id: number

  location?: Location | undefined

  /** 商品ID */
  invent_id: number

  invent?: Invent | undefined

  /** 受払日 */
  stock_transaction_on: string
  /** 受払区分 */
  transaction_type_cd1: string
  /** 受払実績数(バラ) */
  bottle_count: number
  /** 在庫・仕入計上実績ID */
  purchase_result_id?: number | null | undefined

  purchase_result?: PurchaseResult | undefined

  /** 国内受注明細ID */
  sales_order_detail_id?: number | null | undefined

  sales_order_detail?: SalesOrderDetail | undefined

  /** 船積受注明細ID */
  export_order_detail_id?: number | null | undefined

  export_order_detail?: ExportOrderDetail | undefined

  /** 在庫移動明細ID */
  stock_transfer_detail_id?: number | null | undefined

  stock_transfer_detail?: StockTransferDetail | undefined

  /** 在庫調整ID */
  stock_adjustment_id?: number | null | undefined

  stock_adjustment?: StockAdjustment | undefined

  /** 在庫振替ID */
  stock_change_id?: number | null | undefined

  stock_change?: StockChange | undefined

  /** 在庫振替明細ID */
  stock_change_detail_id?: number | null | undefined

  stock_change_detail?: StockChangeDetail | undefined
} & BaseModel

/** 在庫移動 */
export type StockTransfer = {
  /** ID */
  id: number
  /** 在庫移動No */
  no: string
  /** 移動日 */
  transferred_on: string
  /** 出庫倉庫ID */
  exit_location_id: number

  exit_location?: Location | undefined

  /** 入庫倉庫ID */
  entry_location_id: number

  entry_location?: Location | undefined

  /** 入庫方法 */
  entry_type_cd1: string
  /** 出荷指示連携有 */
  is_shipping_link: boolean
  /** 出庫希望日 */
  exit_request_on?: string | null | undefined
  /** 出荷先ID */
  customer_id?: number | null | undefined

  customer?: Customer | undefined

  /** 入庫予定日 */
  will_entry_on: string
  /** 出荷指示連携予定日 */
  will_shipping_link_on?: string | null | undefined
  /** 予定伝送No */
  batch_no?: string | null | undefined
  /** 出荷指示データ連携履歴ID */
  shipping_link_history_id?: number | null | undefined

  shipping_link_history?: ShippingLinkHistory | undefined

  /** 在庫移動内部備考(ヘッダー) */
  note?: string | null | undefined
  /** 訂正元在庫移動ID */
  org_stock_transfer_id?: number | null | undefined

  org_stock_transfer?: StockTransfer | undefined

  stock_transfer_details?: StockTransferDetail[] | undefined
} & BaseModel

/** 在庫移動明細 */
export type StockTransferDetail = {
  /** ID */
  id: number
  /** 在庫移動ID */
  stock_transfer_id?: number | undefined

  stock_transfer?: StockTransfer | undefined

  /** 行No */
  line_no?: number | null | undefined
  /** 取置明細ID */
  sales_stock_detail_id?: number | null | undefined

  sales_stock_detail?: SalesStockDetail | undefined

  /** 商品ID */
  invent_id: number

  invent?: Invent | undefined

  /** 商品名(伝票印字品名) */
  name_denpatu?: string | null | undefined
  /** 年号 */
  vintage?: string | null | undefined
  /** 容量 */
  volume?: number | null | undefined
  /** 登録入数 */
  quantity_per_case: number
  /** ケース */
  case_count: number
  /** バラ */
  bottle_count: number
  /** 総バラ */
  total_count: number
  /** 移動状態 */
  transfer_status_cd1: string | null
  /** 入庫日 */
  entered_on?: string | null | undefined
  /** 在庫移動内部備考(明細) */
  note?: string | null | undefined
  /** 訂正元在庫移動明細ID */
  org_stock_transfer_detail_id?: number | null | undefined

  org_stock_transfer_detail?: StockTransferDetail | undefined

  /** 移動後取置明細ID */
  transferred_sales_stock_detail_id?: number | null | undefined

  transferred_sales_stock_detail?: SalesStockDetail | undefined

  /** 有効在庫数(総バラ)  ※ 在庫移動一覧でのみ値取得 */
  effective_count?: number | null | undefined
} & BaseModel

/** 在庫移動一括操作対象 */
export type StockTransferBulkTarget = StockTransfer & {
  stock_transfer_details: (StockTransferDetail & BulkTarget)[]
} & BulkTarget

/** 在庫 */
export type Stock = {
  /** ID */
  id: number
  /** 倉庫ID */
  location_id: number

  location?: Location | undefined

  /** 商品ID */
  invent_id: number

  invent?: Invent | undefined

  /** 現物在庫数(函) */
  real_case_count: number
  /** 現物在庫数(バラ) */
  real_bottle_count: number
  /** 現物在庫数(総バラ) */
  real_count: number
  /** 受注引当数(函) */
  allocate_case_count: number
  /** 受注引当数(バラ) */
  allocate_bottle_count: number
  /** 受注引当数(総バラ) */
  allocate_count: number
  /** 取置数(函) */
  sales_stock_case_count: number
  /** 取置数(バラ) */
  sales_stock_bottle_count: number
  /** 取置数(総バラ) */
  sales_stock_count: number
  /** 実在庫数(函) */
  actual_case_count?: number | undefined
  /** 実在庫数(バラ) */
  actual_bottle_count?: number | undefined
  /** 実在庫数(総バラ) */
  actual_count?: number | undefined
  /** 販売可能数(函) */
  available_case_count: number
  /** 販売可能数(バラ) */
  available_bottle_count: number
  /** 販売可能数(総バラ) */
  available_count: number
  /** 有効在庫数(函) */
  effective_case_count: number
  /** 有効在庫数(バラ) */
  effective_bottle_count: number
  /** 有効在庫数(総バラ) */
  effective_count: number
  /** Web在庫数(函) */
  web_case_count: number
  /** Web在庫数(バラ) */
  web_bottle_count: number
  /** Web在庫数(総バラ) */
  web_count: number
} & BaseModel

/** 在庫報告履歴_鈴与 */
export type SuzuyoStockReport = {
  /** ID */
  id: number
  /** 取込日 */
  imported_on?: string | null | undefined
  /** 品目コード */
  invent_idm?: string | null | undefined
  /** 品目名称 */
  invent_name_jp?: string | null | undefined
  /** 在庫数量（荷姿１） */
  stock_count1?: string | null | undefined
  /** 単位（荷姿１） */
  stock_unit1?: number | null | undefined
  /** 在庫数量（荷姿２） */
  stock_count2?: string | null | undefined
  /** 単位（荷姿２） */
  stock_unit2?: number | null | undefined
  /** 在庫数量（荷姿３） */
  stock_count3?: string | null | undefined
  /** 単位（荷姿３） */
  stock_unit3?: number | null | undefined
  /** 在庫数量（バラ） */
  stock_total_count?: string | null | undefined
  /** 重量 */
  weight?: string | null | undefined
  /** 容積 */
  volume?: string | null | undefined
  /** 管理１ */
  control1?: string | null | undefined
  /** 管理２ */
  control2?: string | null | undefined
  /** 管理３ */
  control3?: string | null | undefined
  /** 管理４ */
  control4?: string | null | undefined
  /** 管理５ */
  control5?: string | null | undefined
  /** 良品・不良品区分 */
  quality_type?: string | null | undefined
  /** 出荷禁止区分 */
  shipping_ban?: string | null | undefined
  /** 格納予定（荷姿１） */
  stock_schedule_count1?: string | null | undefined
  /** 格納予定（荷姿２） */
  stock_schedule_count2?: string | null | undefined
  /** 格納予定（荷姿３） */
  stock_schedule_count3?: string | null | undefined
  /** 格納予定（バラ） */
  stock_schedule_total_count?: string | null | undefined
  /** 引当済（荷姿１） */
  allocate_count1?: string | null | undefined
  /** 引当済（荷姿２） */
  allocate_count2?: string | null | undefined
  /** 引当済（荷姿３） */
  allocate_count3?: string | null | undefined
  /** 引当済（バラ） */
  allocate_total_count?: string | null | undefined
  /** 論理在庫（荷姿１） */
  logical_count1?: string | null | undefined
  /** 論理在庫（荷姿２） */
  logical_count2?: string | null | undefined
  /** 論理在庫（荷姿３） */
  logical_count3?: string | null | undefined
  /** 論理在庫（バラ） */
  logical_total_count?: string | null | undefined
  /** 品目グループ */
  item_group?: string | null | undefined
  /** 入荷日 */
  entered_on?: string | null | undefined
  /** お客様番号 */
  customer_no?: string | null | undefined
  /** お客様名称 */
  customer_name?: string | null | undefined
} & BaseModel

/** 納税実績 */
export type TaxPayment = {
  /** ID */
  id: number
  /** コスト通関明細ID */
  import_cost_custom_id?: number | null | undefined

  import_cost_custom?: ImportCostCustom | undefined

  /** 支払実行日 */
  paid_on?: string | null | undefined
} & BaseModel

/** 納税実績一括操作対象 */
export type TaxPaymentBulkTarget = TaxPayment & BulkTarget

/** 代引ヤマト受信 */
export type YamatoDelivery = {
  /** ID */
  id: number
  /** 入金日 */
  deposit_on?: string | null | undefined
  /** 入金方法 */
  deposit_type_cd1?: string | null | undefined
  /** 合計件数 */
  number?: number | null | undefined
  /** 合計金額 */
  amount?: string | null | undefined
  /** 振込手数料 */
  commission?: string | null | undefined
  /** 商品代金計 */
  commodity_amount?: string | null | undefined
  /** 取扱手数料計 */
  delivery_charge?: string | null | undefined
  /** 取扱手数料税額計 */
  delivery_charge_tax?: string | null | undefined
  /** カード決済手数料計 */
  card_fee?: string | null | undefined
  /** 印紙代計 */
  stamp_duty?: string | null | undefined
  /** 処理済フラグ */
  is_completed: boolean
} & BaseModel

/** 代引ヤマト受信明細 */
export type YamatoDeliveryDetail = {
  /** ID */
  id: number
  /** 入金先ID */
  deposit_customer_id?: number | null | undefined

  deposit_customer?: Customer | undefined

  /** 入金実績ID */
  deposit_result_id?: number | null | undefined

  deposit_result?: DepositResult | undefined

  /** 通貨CD */
  currency_cd1?: string | null | undefined
  /** 入金額 */
  deposit_amount?: string | null | undefined
  /** 代引ヤマト受信ヘッダID */
  yamato_delivery_id?: number | null | undefined

  yamato_delivery?: YamatoDelivery | undefined

  /** 原票No */
  original_number?: string | null | undefined
  /** 商品代金 */
  amount?: string | null | undefined
  /** 取扱手数料 */
  delivery_charge?: string | null | undefined
  /** 取扱手数料税額 */
  delivery_charge_tax?: string | null | undefined
  /** 印紙代 */
  stamp?: string | null | undefined
  /** 代引請求書No */
  cod_payment_request_no?: string | null | undefined
  /** 入金予定ID */
  deposit_schedule_id?: number | null | undefined

  deposit_schedule?: DepositSchedule | undefined

  /** 発送日 */
  sended_on?: string | null | undefined
  /** 伝票番号 */
  slip_number?: string | null | undefined
  /** カード決済手数料 */
  card_fee?: string | null | undefined
  /** 入金額処理金額 */
  processing_amount?: string | null | undefined
  /** 振込日 */
  deposit_on?: string | null | undefined
  /** お客様コード */
  client_cd?: string | null | undefined
  /** データ区分 */
  data_type?: string | null | undefined
  /** 訂正区分 */
  fix_type?: string | null | undefined
  /** 利用サービス */
  service?: string | null | undefined
  /** 決済手段 */
  payment_method?: string | null | undefined
  /** 返品日 */
  return_on?: string | null | undefined
  /** 返品伝票番号 */
  return_slip_number?: string | null | undefined
  /** 電子マネー決済額 */
  e_money_payment?: string | null | undefined
  /** お客様管理番号 */
  client_management_cd?: string | null | undefined
  /** お届け先名 */
  send_to?: string | null | undefined
  /** (お届け先)郵便番号 */
  post_code?: string | null | undefined
  /** (お届け先)都道府県 */
  prefecture?: string | null | undefined
  /** (お届け先)市区郡町村 */
  city?: string | null | undefined
  /** 入金完了日 */
  deposit_complete_on?: string | null | undefined
  /** 差額。代引きデータ受信確認_詳細API(検索)APIでのみ取得されます。 */
  difference_amount?: string | null | undefined
  /** 代引請求書.商品代金(税込)。代引きデータ受信確認_詳細API(検索)APIでのみ取得されます。 */
  cash_on_delivery_amount?: string | null | undefined
} & BaseModel

/** キャンペーン */
export type MtxCampaign = {
  /** ID */
  id: number
  /** キャンペーンID */
  mtx_campaignitemid?: string | null | undefined
  /** キャンペーンタイトル */
  mtx_campaignname?: string | null | undefined
  /** 品番 */
  mtx_itemid?: string | null | undefined
  /** キャンペーン期間FROM */
  mtx_campaignstartdate?: string | null | undefined
  /** キャンペーン期間TO */
  mtx_campaignenddate?: string | null | undefined
  /** サンプル付き */
  mtx_campaigndivision01?: number | null | undefined
  /** ドライ送料無料 */
  mtx_campaigndivision02?: number | null | undefined
  /** 予約受注 */
  mtx_campaigndivision04?: number | null | undefined
  /** 特別価格 */
  mtx_campaigndivision06?: number | null | undefined
  /** クール送料無料 */
  mtx_campaigndivision07?: number | null | undefined
  /** 景品付き */
  mtx_campaigndivision08?: number | null | undefined
  /** 不明 */
  mtx_campaigndivision011?: number | null | undefined
  /** 得意先別キャンペーンフラグ */
  mtx_custcampaignflg?: number | null | undefined
  mtx_custcampaigns?: MtxCustcampaign[] | undefined

  invent?: Invent | undefined
} & BaseModel

/** キャンペーン得意先 */
export type MtxCustcampaign = {
  /** ID */
  id: number
  /** キャンペーンID */
  mtx_campaignitemid?: string | null | undefined
  /** 得意先IDM */
  mtx_custnum?: string | null | undefined

  customer?: Customer | undefined
} & BaseModel

/** キャンペーンマスタ(中間テーブル) */
export type MtxIntCampaign = {
  /** ID */
  id: number
  /** キャンペーンID */
  mtx_campaignitemid?: string | null | undefined
  /** キャンペーンタイトル */
  mtx_campaignname?: string | null | undefined
  /** 品番 */
  mtx_itemid?: string | null | undefined
  /** キャンペーン期間FROM */
  mtx_campaignstartdate?: string | null | undefined
  /** キャンペーン期間TO */
  mtx_campaignenddate?: string | null | undefined
  /** サンプル付き */
  mtx_campaigndivision01?: number | null | undefined
  /** ドライ送料無料 */
  mtx_campaigndivision02?: number | null | undefined
  /** 予約受注 */
  mtx_campaigndivision04?: number | null | undefined
  /** 特別価格 */
  mtx_campaigndivision06?: number | null | undefined
  /** クール送料無料 */
  mtx_campaigndivision07?: number | null | undefined
  /** 景品付き */
  mtx_campaigndivision08?: number | null | undefined
  /** 不明 */
  mtx_campaigndivision011?: number | null | undefined
  /** 得意先別キャンペーンフラグ */
  mtx_custcampaignflg?: number | null | undefined
} & BaseModel

/** キャンペーン得意先マスタ(中間テーブル) */
export type MtxIntCustcampaign = {
  /** ID */
  id: number
  /** キャンペーンID */
  mtx_campaignitemid?: string | null | undefined
  /** 得意先IDM */
  mtx_custnum?: string | null | undefined
} & BaseModel

/** メール送信連携テーブル */
export type MtxMailsend = {
  /** ID */
  id: number
  /** 売上NO */
  mtx_salesid?: string | null | undefined
  /** 行NO */
  mtx_linenum?: number | null | undefined
  /** VINO発注NO */
  mtx_webpono?: string | null | undefined
  /** VINO発注行NO */
  mtx_weblinenum?: number | null | undefined
} & BaseModel

/** WEB割当在庫連携テーブル */
export type MtxWebifAllocationstock = {
  /** ID */
  id: number
  /** JOBNO */
  mtx_jobno: string
  /** 倉庫IDM */
  mtx_inventlocationid: string
  /** 品番 */
  mtx_itemid: string
  /** WEB割当在庫数 */
  mtx_webresultqty: number
  /** 要求在庫数 */
  mtx_webqty: number
  /** WEB受注数 */
  mtx_weborderqty: number
  /** 切出前Vino受注数 */
  mtx_prewebsalescount: number
} & BaseModel

/** WEB要求在庫連携テーブル */
export type MtxWebifRequiredstock = {
  /** ID */
  id: number
  /** JOBNO */
  mtx_jobno?: string | null | undefined
  /** 倉庫IDM */
  mtx_inventlocationid?: string | null | undefined
  /** 品番 */
  mtx_itemid?: string | null | undefined
  /** 要求在庫数 */
  mtx_webqty?: number | null | undefined
  /** WEB受注数 */
  mtx_weborderqty?: number | null | undefined
} & BaseModel

/** WEB受注連携テーブル */
export type MtxWebifWeborder = {
  /** ID */
  id: number
  /** JOBNO */
  mtx_jobno?: string | null | undefined
  /** 発注NO */
  mtx_webpono?: string | null | undefined
  /** 行NO */
  mtx_linenum?: number | null | undefined
  /** 倉庫コード */
  mtx_inventlocationid?: string | null | undefined
  /** 得意先コード */
  mtx_custnum?: string | null | undefined
  /** クール便区分 */
  mtx_cooldelivery?: string | null | undefined
  /** 運賃無料区分 */
  mtx_vinofarefreeid?: string | null | undefined
  /** 取引区分 */
  mtx_torihikiid?: string | null | undefined
  /** 品番 */
  mtx_itemid?: string | null | undefined
  /** 入数 */
  mtx_qty_box?: number | null | undefined
  /** 売上単価 */
  mtx_orderprice?: string | null | undefined
  /** ケース数 */
  mtx_boxqty?: number | null | undefined
  /** バラ数 */
  mtx_perqty?: number | null | undefined
  /** キャンペーンフラグ */
  mtx_campaigntype?: number | null | undefined
  /** 備考 */
  mtx_remark?: string | null | undefined
  /** 取込フラグ */
  mtx_controlflg?: number | null | undefined
  /** 売上日 */
  mtx_salesdate?: string | null | undefined
  /** クール無料期間FLG */
  mtx_campaigndivision07?: number | null | undefined
  /** AM/PM指定ID */
  mtx_specifiedampm?: string | null | undefined
  /** 摘要ID3 */
  mtx_reserveid3?: string | null | undefined
  /** 摘要名3 */
  mtx_reservedesc3?: string | null | undefined
  /** おまけFLG */
  mtx_bonusflg?: number | null | undefined
  /** 摘要ID1 */
  mtx_reserveid1?: string | null | undefined
  /** 摘要名1 */
  mtx_reservedesc1?: string | null | undefined
  /** 摘要ID2 */
  mtx_reserveid2?: string | null | undefined
  /** 摘要名2 */
  mtx_reservedesc2?: string | null | undefined
  /** 相手先伝票番号 */
  mtx_custsalesordernum?: string | null | undefined
  /** 取置(受注)NO */
  mtx_salesordernum?: string | null | undefined
  /** 取置(受注)行NO */
  mtx_salesorderlinenum?: number | null | undefined
  /** キャンペーンID */
  mtx_campaignitemid?: string | null | undefined
  /** 伝送NO */
  mtx_arakibatchinput?: string | null | undefined
  /** 着日付 */
  mtx_receiptdaterequested?: string | null | undefined
  /** 必着区分 */
  mtx_mustarrive?: string | null | undefined
  /** 配送時間帯 */
  mtx_specifiedtime?: string | null | undefined
  /** バッチ番号 */
  mtx_inventbatchid?: string | null | undefined
  /** コンフィグレーション */
  mtx_configuration?: string | null | undefined
  /** 運賃メールフラグ */
  mtx_faremailflg?: number | null | undefined
  /** 伝送フラグ */
  mtx_transferflug?: number | null | undefined
  /** 出荷日 */
  mtx_packingslipdate?: string | null | undefined
} & BaseModel

/** WEB取置ロックテーブル */
export type MtxWebifWebsaleslock = {
  /** ID */
  id: number
  /** SEQNo */
  mtx_sequenceno: number
  /** 受注No */
  mtx_salesid: string
  /** 削除フラグ */
  mtx_deleteflg: number
} & BaseModel

/** WEB在庫連携データ管理テーブル */
export type MtxWebifmngRequiredstock = {
  /** ID */
  id: number
  /** JOBNO */
  mtx_jobno?: string | null | undefined
  /** 取込ステータス */
  mtx_impstatus?: number | null | undefined
} & BaseModel

/** WEB受注連携データ管理テーブル */
export type MtxWebifmngWeborder = {
  /** ID */
  id: number
  /** JOBNO */
  mtx_jobno?: string | null | undefined
  /** 売上日 */
  mtx_salesdate?: string | null | undefined
  /** 取込区分 */
  mtx_websalesimportid?: number | null | undefined
  /** 取込日 */
  mtx_specifieddate?: string | null | undefined
  /** 取込時間 */
  mtx_specifiedtime?: string | null | undefined
  /** 配送区分 */
  mtx_cooldelivery?: string | null | undefined
  /** 倉庫IDM */
  mtx_inventlocationid?: string | null | undefined
  /** 取込ステータス */
  mtx_impstatus?: number | null | undefined
} & BaseModel

/** WEB在庫テーブル */
export type MtxWebstocktable = {
  /** ID */
  id: number
  /** 倉庫IDM */
  mtx_inventlocationid: string
  /** 品番 */
  mtx_itemid: string
  /** Vino受注可能数 */
  mtx_transferqty: number
  /** Vino受注数 */
  mtx_websalescount: number
  /** 切出前Vino受注可能数 */
  mtx_pretransferqty: number
  /** WEB在庫切出NO */
  mtx_webstockno: string
  /** WEB在庫切出処理区分 */
  mtx_webstockoutputtype?: number | null | undefined
} & BaseModel

/** 荒木得意先マスタ連携 */
export type ArakiParentCustomer = {
  /** ID */
  id: number
  /** データ区分 */
  araki_data_type_cd1: string
  /** 新規変更削除区分 */
  araki_rec_type_cd1: string
  /** 得意先ID */
  idm: string
  /** カナ */
  name_kana?: string | null | undefined
  /** 正式名(原語) */
  name_jp?: string | null | undefined
  /** 略称名(原語) */
  name_abbr?: string | null | undefined
  /** 郵便番号 */
  zip?: string | null | undefined
  /** 地方/地区ID */
  wine_area_area?: string | null | undefined
  /** 住所1(原語) */
  address1?: string | null | undefined
  /** 住所2(原語) */
  address2?: string | null | undefined
  /** 住所3(原語) */
  address3?: string | null | undefined
  /** TEL */
  tel1?: string | null | undefined
  /** FAX */
  fax1?: string | null | undefined
  /** 定休日 */
  holiday_of_week?: string | null | undefined
  /** 定休日メモ */
  holiday_note?: string | null | undefined
  /** 開店時間 */
  open_time?: string | null | undefined
  /** 相手先売価印字区分 */
  is_customer_price_print: boolean
  /** 発注書添付有 */
  is_order_sheet_required: boolean
  /** 返信用封筒要 */
  is_return_envelope_required: boolean
  /** 梱包ラベル */
  packing_label_cd1?: string | null | undefined
  /** 伝票郵送 */
  is_denpyo_post_required: boolean
  /** 納品データ送信 */
  send_data_type_cd1?: string | null | undefined
  /** 伝票種類ID */
  delivery_slip_cd1?: string | null | undefined
} & BaseModel

/** 荒木代配店マスタ連携 */
export type ArakiChildCustomer = {
  /** ID */
  id: number
  /** データ区分 */
  araki_data_type_cd1: string
  /** 新規変更削除区分 */
  araki_rec_type_cd1: string
  /** 得意先ID */
  idm: string
  /** 代配店カナ */
  name_kana?: string | null | undefined
  /** 代配店名正式 */
  name_jp?: string | null | undefined
  /** 代配店名略称 */
  name_abbr?: string | null | undefined
  /** 郵便番号 */
  zip?: string | null | undefined
  /** 地方/地区ID */
  wine_area_area?: string | null | undefined
  /** 住所1(原語) */
  address1?: string | null | undefined
  /** 住所2(原語) */
  address2?: string | null | undefined
  /** 住所3(原語) */
  address3?: string | null | undefined
  /** TEL */
  tel1?: string | null | undefined
  /** FAX */
  fax1?: string | null | undefined
  /** [代配店]帳合先ID */
  choai_cd1?: string | null | undefined
  /** 定休日 */
  holiday_of_week?: string | null | undefined
  /** 定休日メモ */
  holiday_note?: string | null | undefined
  /** 開店時間 */
  open_time?: string | null | undefined
  /** 発注書添付有 */
  is_order_sheet_required: boolean
  /** 返信用封筒要 */
  is_return_envelope_required: boolean
  /** 梱包ラベル */
  packing_label_cd1?: string | null | undefined
  /** 伝票郵送 */
  is_denpyo_post_required: boolean
  /** 納品データ送信 */
  send_data_type_cd1?: string | null | undefined
} & BaseModel

/** 荒木商品マスタ連携 */
export type ArakiInvent = {
  /** ID */
  id: number
  /** データ区分 */
  araki_data_type_cd1: string
  /** 新規変更削除区分 */
  araki_rec_type_cd1: string
  /** 品番 */
  idm: string
  /** 商品名(正式/和文) */
  name_jp?: string | null | undefined
  /** 商品名 */
  name_denpatu?: string | null | undefined
  /** 商品名(略称) */
  name_abbr?: string | null | undefined
  /** 内容量(バラ･ボール) */
  volume?: number | null | undefined
  /** 入数(ケース･[ケース/ボール]) */
  quantity_per_case?: number | null | undefined
  /** チェーンストア用商品名 */
  dummy1?: string | null | undefined
  /** 百貨店用商品名 */
  dummy2?: string | null | undefined
  /** 商品名(カナ) */
  name_kana?: string | null | undefined
  /** 検索名 */
  dummy3?: string | null | undefined
  /** JAN・ボールITFコード */
  barcode?: string | null | undefined
  /** 納価(ケース) */
  case_unit_price?: string | null | undefined
  /** 納価(バラ･ボール) */
  bottle_unit_price?: string | null | undefined
  /** 納価改定日 */
  change_on?: string | null | undefined
  /** 改定後_納価(ケース) */
  after_case_unit_price?: string | null | undefined
  /** 改定後_納価(バラ･ボール) */
  after_bottle_unit_price?: string | null | undefined
  /** 最低出荷単位 */
  shipping_invent_unit_cd1?: string | null | undefined
  /** 希望小売プリント */
  is_print_sign: boolean
  /** ピッキング分類ID */
  picking_cd1?: string | null | undefined
  /** 年号 */
  vintage?: string | null | undefined
  /** ケースITFコード */
  case_itf_code?: string | null | undefined
} & BaseModel

/** ヴィンテージ報告 */
export type VintageReport = {
  /** ID */
  id: number
  /** 変更完了日 */
  completed_on: string
  /** 品番 */
  invent_idm: string
  /** 商品名 */
  invent_name?: string | null | undefined
  /** 容量 */
  volume?: number | null | undefined
  /** 旧年号 */
  old_vintage?: string | null | undefined
  /** 新年号 */
  new_vintage?: string | null | undefined
  /** 仕様変更 */
  content?: string | null | undefined
  /** 旧賞味期限 */
  old_expiration?: string | null | undefined
  /** 新賞味期限 */
  new_expiration?: string | null | undefined
  /** 倉庫 */
  location_name?: string | null | undefined
  /** 変更通知日時 */
  notified_at?: string | null | undefined
} & BaseModel

/** レート */
export type Rate = {
  /** ID */
  id: number
  /** 変更日 */
  change_on: string
  /** 通貨CD */
  currency_cd1: string
  /** TTMレート */
  rate_ttm: string
} & BaseModel

/** レート一括操作対象 */
export type RateBulkTarget = Rate & BulkTarget

/** TTMレートマスタ */
export type TtmRate = {
  /** ID */
  id: number
  /** 変更日 */
  change_on: string
  /** 通貨CD */
  currency_cd1: string
  /** TTMレート */
  rate_ttm: string
} & BaseModel

/** TTMレート一括操作対象 */
export type TtmRateBulkTarget = TtmRate & BulkTarget

/** 入荷予定 */
export type ArrivalScheduledStock = {
  /** 計上予定日 */
  will_record_on?: string | null | undefined
  /** 入荷予定日 */
  will_arrive_on?: string | null | undefined
  /** 取引区分 */
  stock_trade_type_cd1?: string | null | undefined
  /** 船積オーダーID */
  shipping_order_id?: number | null | undefined
  /** 船積オーダーNo */
  shipping_order_display_no?: string | null | undefined
  /** 国内発注ID */
  domestic_order_id?: number | null | undefined
  /** 国内発注No */
  domestic_order_no?: string | null | undefined
  /** 商品ID */
  invent_id?: number | undefined
  /** 年号 */
  vintage?: string | null | undefined
  /** ケース */
  case_count?: number | null | undefined
  /** バラ */
  bottle_count?: number | null | undefined
  /** 備考 */
  arrival_schedule_note?: string | null | undefined
  /** 備考(営業部) */
  note?: string | null | undefined
  /** 予約受注不可フラグ(営業部) */
  is_disabled_reservation?: boolean | undefined
  /** 価格検討済フラグ */
  considered_flag?: string | undefined
  /** 予約受注数(ケース) */
  reserved_case_count?: number | null | undefined
  /** 予約受注数(バラ) */
  reserved_bottle_count?: number | null | undefined
  /** 割当区分/割当名称 */
  allotment?: string | null | undefined
}

/** 入荷予定一括操作対象 */
export type ArrivalScheduledStockBulkTarget = ArrivalScheduledStock & {
  /** 操作 */
  operation?: Operation | null | undefined

  /** リクエストからレスポンスに渡す任意のデータ */
  cookie?: string | null | undefined
  /** 結果情報の配列 */
  results: AppResult[]
}

/** 請求締 */
export type BillClosing = {
  /** 請求締年月 */
  closed_on_year_month?: string | null | undefined
  /** 締日 */
  closing_day?: string | null | undefined
  /** 得意先IDM */
  customer_idm?: string | null | undefined
  /** 得意先名 */
  customer_name?: string | null | undefined
  /** ステータス */
  status?: string | null | undefined
  /** 得意先グループCD */
  customer_group_cd1?: string | null | undefined
  /** 得意先グループ名 */
  customer_group_name?: string | null | undefined
  /** 入金先IDM */
  payment_customer_idm?: string | null | undefined
  /** 入金先名 */
  payment_customer_name?: string | null | undefined
  /** 請求書発行CD */
  invoice_print_type_cd1?: string | null | undefined
  /** 請求書FAX送信 */
  is_invoice_fax?: boolean | undefined
  /** 請求書WEB送信 */
  is_invoice_web?: boolean | undefined
  /** 請求実績(紙) */
  is_output?: boolean | undefined
  /** 請求実績(FAX) */
  is_output_fax?: boolean | undefined
  /** 請求実績(Web) */
  is_output_web?: boolean | undefined
  /** 請求実績(控え) */
  is_output_copy?: boolean | undefined
}

/** 請求締一括操作対象 */
export type BillClosingBulkTarget = BillClosing & {
  /** 操作 */
  operation?: Operation | null | undefined

  /** リクエストからレスポンスに渡す任意のデータ */
  cookie?: string | null | undefined
  /** 結果情報の配列 */
  results: AppResult[]
}

/** WEB受注データ取込結果 */
export type WebSalesOrderBulkTarget = {
  /** WEB受注No */
  vino_order_no?: string | null | undefined
  /** WEB受注行No */
  vino_line_no?: string | null | undefined
  /** 受注No */
  order_no?: string | null | undefined
  /** 受注行No */
  line_no?: string | null | undefined
  /** 品番 */
  invent_idm?: string | null | undefined
  /** 品名 */
  invent_name?: string | null | undefined
  /** エラーメッセージ */
  error_message?: string | null | undefined
}

/** 通関許可メール履歴 */
export type CustomsReleaseMail = {
  /** ID */
  id: number
  /** 表示用船積オーダーNo */
  display_no: string
  /** 許可記号 */
  mark: string
  /** 送信日 */
  sent_on: string
} & BaseModel

/** 酒税 */
export type LiquorTax = {
  /** ID */
  id: number
  /** 酒税ID */
  liquor_tax_name_id: number

  liquor_tax_name?: LiquorTaxName | undefined

  /** アルコール度数 */
  alc?: string | null | undefined
  /** 酒税 */
  liquor_tax?: string | null | undefined
  /** 適用開始日 */
  start_on: string
  /** 適用終了日 */
  end_on: string
} & BaseModel

/** 酒税一括操作対象 */
export type LiquorTaxBulkTarget = LiquorTax & BulkTarget

/** 関税 */
export type CustomsDuty = {
  /** ID */
  id: number
  /** 特恵グループCD */
  preferential_treatment_group_cd1: string
  /** 輸入統計品目CD */
  customs_itemname_cd1: string
  /** 適用開始日 */
  start_on: string
  /** 適用終了日 */
  end_on: string
  /** 関税内容 */
  memo?: string | null | undefined
  /** 基本関税 */
  normal_customs_duty?: string | null | undefined
  /** 基本関税単位 */
  normal_customs_duty_unit_cd1?: string | null | undefined
  /** 上限関税 */
  upper_customs_duty?: string | null | undefined
  /** 上限関税単位 */
  upper_customs_duty_unit_cd1?: string | null | undefined
  /** 下限関税 */
  lower_customs_duty?: string | null | undefined
  /** 下限関税単位 */
  lower_customs_duty_unit_cd1?: string | null | undefined
} & BaseModel

/** 関税一括操作対象 */
export type CustomsDutyBulkTarget = CustomsDuty & BulkTarget

/** 棚卸実績 */
export type InventoryResult = {
  /** ID */
  id: number | null
  /** 棚卸月 */
  inventory_month: string
  /** 倉庫ID */
  location_id: number

  location?: Location | undefined

  /** 状況区分 */
  inventory_type_cd1: string
  /** 開始日 */
  start_on?: string | null | undefined
  /** 開始者ID */
  start_user_id?: number | null | undefined

  start_user?: User | undefined

  /** 完了日 */
  end_on?: string | null | undefined
  /** 完了者ID */
  end_user_id?: number | null | undefined

  end_user?: User | undefined

  inventory_result_details?: InventoryResultDetail[] | undefined
} & BaseModel

/** 棚卸実棚 */
export type InventoryResultDetail = {
  /** ID */
  id: number
  /** 棚卸実績ID */
  inventory_result_id: number

  inventory_result?: InventoryResult | undefined

  /** 商品ID */
  invent_id: number

  invent?: Invent | undefined

  /** 商品名(正式/和文) */
  name_jp?: string | null | undefined
  /** 内容量 */
  volume?: number | null | undefined
  /** 登録入数 */
  quantity_per_case?: number | null | undefined
  /** 理論在庫(ケース) */
  system_case_count?: number | null | undefined
  /** 理論在庫(バラ) */
  system_bottle_count?: number | null | undefined
  /** 理論在庫(総バラ) */
  system_total_count?: number | null | undefined
  /** 実棚数(ケース) */
  case_count?: number | null | undefined
  /** 実棚数(バラ) */
  bottle_count?: number | null | undefined
  /** 実棚数(総バラ) */
  total_count?: number | null | undefined
  /** 棚差(総バラ) */
  unmatch_total_count?: number | null | undefined
  /** 実棚日 */
  result_on?: string | null | undefined
  /** 実棚実施者ID */
  result_user_id?: number | null | undefined

  result_user?: User | undefined

  /** 在庫調整ID */
  stock_adjustment_id?: number | null | undefined

  stock_adjustment?: StockAdjustment | undefined
} & BaseModel

/** 棚卸実績一括操作対象 */
export type InventoryResultBulkTarget = InventoryResult & BulkTarget & {
  inventory_result_details?: (InventoryResultDetailBulkTarget)[] | undefined
}

/** 棚卸実棚一括操作対象 */
export type InventoryResultDetailBulkTarget = InventoryResultDetail & BulkTarget

/** ベースモデル */
export type BaseModel = {
  /** 更新カウンタ */
  update_count?: number | null | undefined
  /** 登録日時 */
  created_at: string | null
  /** 更新日時 */
  updated_at: string | null
  /** 削除日時 */
  deleted_at?: string | null | undefined
  /** 登録者 */
  created_by?: number | null | undefined
  /** 更新者 */
  updated_by?: number | null | undefined
  /** 削除者 */
  deleted_by?: number | null | undefined
}

/** 一括操作リクエスト */
export type BulkRequest = {
  /** 警告を無視するかどうか */
  forced?: boolean | undefined
}

/** 一括操作対象 */
export type BulkTarget = {
  /** ID */
  id?: number | null | undefined

  /** 操作 */
  operation?: Operation | null | undefined

  /** リクエストからレスポンスに渡す任意のデータ */
  cookie?: string | null | undefined
  /** 操作が拒否されたかどうか */
  operation_rejected?: boolean | null | undefined
  /** 結果情報の配列 */
  results: AppResult[]
}

/** 結果情報を持つオブジェクト */
export type HasResults = {
  /** 結果情報の配列 */
  results: AppResult[]
}

/** バリデーションエラー */
export type ValidationError = {
  /** エラーメッセージ */
  message: string

  /** エラー情報 */
  errors: {
    [key: string]: string[]
  }
}

/** 結果 */
export type AppResult = {
  type: ResultType
  code: ResultCode
  /** メッセージ */
  message: string
  /** ユーザ向けメッセージ */
  locale_message?: string | null | undefined
  /** 入力ファイル行番号 */
  file_line_no?: number | null | undefined
  [key: string]: any
}

/** E_LIMIT_EXCEEDED エラー */
export type LimitExceededError = AppResult & {
  /** 総レコード数 */
  total?: number | undefined
}

/** 原価計算メッセージ */
export type CostCalculationMessage = 'C01' | 'C02' | 'C03' | 'C04' | 'C05' | 'C06' | 'C07' | 'E01' | 'E02' | 'E03' | 'E04' | 'E05' | 'E06' | 'E07'

/** 操作 */
export type Operation = 'SAVE' | 'DELETE'

/** 輸入支払の操作種別 */
export type PaymentOperationType = 'RESERVATION' | 'REGISTRATION' | 'ACHIEVEMENT'

/** 結果種別 */
export type ResultType = 'ERROR' | 'WARNING' | 'INFO'

/** 結果コード */
export type ResultCode = 'E_DETAIL_ANOTHER_RELATION' | 'E_STALE_UPDATE' | 'E_TARGET_NOT_FOUND' | 'E_LIMIT_EXCEEDED' | 'E_UNIQUE_VIOLATION' | 'E_FOREIGN_KEY_VIOLATION' | 'E_NUMERIC_OUT_OF_RANGE' | 'E_MODEL_NOT_FOUND' | 'E_INVALID_TEXT_REPRESENTATION' | 'E_INVALID_MATCHING_EXPRESSION' | 'E_INVALID_REFERENCE' | 'E_FAILED_TO_LOCK' | 'E_LOCK_REQUIRED' | 'E_MONTHLY_CLOSED' | 'E_MONTHLY_CLOSING_NOT_FOUND' | 'E_CALENDAR_NOT_FOUND_FOR_SALES_DATE' | 'E_DEADLOCK_DETECTED' | 'E_EXAMPLE' | 'E_EXPORT_ORDER_EXISTS_DISPLAY_NO' | 'E_EXPORT_ORDER_INVALID_SOLD_DATE' | 'E_EXPORT_ORDER_NOT_BALL_UNIT' | 'E_EXPORT_ORDER_NOT_CASE_UNIT' | 'E_EXPORT_ORDER_NOT_ENTERED_PARENT_IDM' | 'E_EXPORT_ORDER_DETAIL_NOT_ENTERED_INVENT_ID' | 'E_SALES_ORDER_FAILED_TO_REMOVE_SHIPPING_FILE' | 'I_SALES_ORDER_SHIPPING_FILE_NOT_FOUND' | 'E_SALES_ORDER_UNEXPECTED_CUSTOMER' | 'E_SALES_ORDER_INSUFFICIENT_SALES_STOCK' | 'E_SALES_ORDER_CANNOT_ALLOCATE_SALES_STOCK_FOR_WEB' | 'E_SALES_ORDER_CANNOT_ALLOCATE_SALES_STOCK_FOR_OTHER_CUSTOMER' | 'E_SALES_ORDER_INVALID_SOLD_DATE' | 'E_SALES_ORDER_ALREADY_SENDEN_LINKED' | 'E_SALES_ORDER_DIRECT_SHIPPING_NOT_APPLICABLE' | 'W_SALES_ORDER_MEIMON_LIMITED' | 'E_SALES_ORDER_INVALID_LOCATION_FOR_DIRECT_SHIPPING' | 'E_SALES_ORDER_INVALID_LOCATION_FOR_NORMAL_SHIPPING' | 'E_SALES_ORDER_NOT_SHIPPABLE_INVENT' | 'E_SALES_ORDER_NOT_BALL_UNIT' | 'E_SALES_ORDER_INVALID_TRANSACTION_COMBINATION' | 'E_SALES_ORDER_INVALID_TRANSACTION_FOR_SHIPPING_LINK' | 'E_SALES_ORDER_NEGATIVE_AMOUNT_PER_LETTER' | 'E_SALES_ORDER_INVALID_LOCATION_COMBINATION' | 'E_SALES_ORDER_INVALID_LOCATION_FOR_SHIPPING_LINK' | 'E_SALES_ORDER_INVALID_YOSHIN' | 'E_SALES_ORDER_UPDATING_YOSHIN_FOR_DEPOSIT_SCHEDULED' | 'W_SALES_ORDER_DRY_SHIPPING_IN_SUMMER' | 'W_SALES_ORDER_PICKING_NOT_IDENTICAL' | 'W_SALES_ORDER_INSUFFICIENT_EFFECTIVE_STOCK' | 'W_SALES_ORDER_INSUFFICIENT_WEB_STOCK' | 'E_SALES_ORDER_CONSIGNEE_NOT_EXIST' | 'W_SALES_ORDER_COD_FEE_NOT_AVAILABLE' | 'W_SALES_ORDER_LESS_THAN_STOCK_PRICE' | 'W_SALES_ORDER_EMPTY_BATCH_NO' | 'E_SALES_ORDER_TAX_ADJUSTMENT_NOT_ALLOWED' | 'E_SALES_ORDER_ALREADY_PURCHASED_ON_UPDATE' | 'E_SALES_ORDER_ALREADY_PURCHASED_ON_DELETE' | 'E_SALES_ORDER_STATUS_CLOSED_ON_UPDATE' | 'E_SALES_ORDER_STATUS_CLOSED_ON_DELETE' | 'E_SALES_ORDER_ALREADY_DEPOSITED_ON_UPDATE' | 'E_SALES_ORDER_ALREADY_DEPOSITED_ON_DELETE' | 'E_SALES_ORDER_ALREADY_COD_CONTACTED' | 'E_SALES_ORDER_PARTIALLY_DELETING_COD_CONTACTED' | 'W_SALES_ORDER_PARTIALLY_DELETING_DETAILS' | 'W_SALES_ORDER_ENTIRELY_DELETING_DETAILS' | 'E_SALES_ORDER_HAS_NO_DOMESTIC_ORDER' | 'E_SALES_ORDER_INVALID_VENDOR_PAYMENT_CONDITION' | 'E_SALES_ORDER_EITHER_CASE_OR_BOTTLE_COUNT_MUST_BE_SPECIFIED' | 'W_SALES_ORDER_BOTTLE_COUNT_FOR_CASE_ORDER' | 'W_SALES_ORDER_NEXT_SHIPPING_SALES_STOCK_AVAILABLE' | 'W_SALES_ORDER_SOLD_ON_NOT_SALES_DATE' | 'W_SALES_ORDER_ON_HOLIDAY' | 'E_SALES_ORDER_INVALID_HAISOU_FOR_LOCATION' | 'W_SALES_ORDER_SAMPLE_RATE_NOT_DEFINED' | 'W_SALES_ORDER_NEXT_ADJUSTMENT_AMOUNT_NOT_ZERO' | 'E_SALES_ORDER_INVALID_YOSHIN_FOR_LOCATION' | 'E_SALES_ORDER_COD_FEE_NOT_AVAILABLE' | 'W_SALES_ORDER_UNSELECTED_DATA_EXISTS_IN_TARGETS_FOR_TRANSFER_REQUEST_OTHER_SOLD_ON' | 'W_SALES_ORDER_INCLUDED_TRANSFER_REQUESTED' | 'W_SALES_ORDER_INCLUDED_COD_CONTRACTED' | 'E_ALREADY_BILLED' | 'E_NOT_STOCKED_INVENT' | 'W_INSUFFICIENT_ACTUAL_STOCK' | 'E_INSUFFICIENT_ACTUAL_STOCK' | 'W_INSUFFICIENT_SALES_STOCK' | 'E_INSUFFICIENT_SALES_STOCK' | 'W_INSUFFICIENT_EFFECTIVE_STOCK' | 'E_INSUFFICIENT_EFFECTIVE_STOCK' | 'W_INSUFFICIENT_ACTUAL_AND_ARRIVING_STOCK' | 'E_INSUFFICIENT_ACTUAL_AND_ARRIVING_STOCK' | 'E_ALREADY_SHIPPING_LINKED' | 'E_INVALID_SALES_STOCK_DETAIL' | 'E_INVALID_SALES_STOCK_STATUS' | 'E_INVALID_SALES_STOCK_DETAIL_STATUS' | 'E_INSUFFICIENT_SALES_STOCK_DETAIL_REMAINING_BOTTLE_COUNT' | 'E_PHYSICAL_STOCK' | 'E_DOMESTIC_ORDER_PRICE_NOT_FOUND' | 'E_SHIPPING_RESERVATION_CURRENCY' | 'E_SHIPPING_RESERVATION_PAYMENT' | 'E_SHIPPING_RESERVATION_ALLOCATION' | 'E_SHIPPING_RESERVATION_ALLOCATION_DELETE' | 'E_SHIPPING_RESERVATION_ALLOCATION_SPLIT' | 'E_SHIPPING_RESERVATION_INVENT_END' | 'E_SHIPPING_RESERVATION_INVENT_IMPORT' | 'E_SHIPPING_RESERVATION_MINUS' | 'E_SHIPPING_RESERVATION_MINUS_BALL' | 'E_SHIPPING_RESERVATION_PURCHASE_AMOUNT' | 'E_SHIPPING_ORDER_DOCUMENT_PAYMENT_CONDITION' | 'E_SHIPPING_ORDER_DOCUMENT_CAN_NOT_USE_BASE_DATE' | 'W_EXAMPLE' | 'E_INVALID_BULK_FILE_FORMAT' | 'E_BULK_VALIDATION' | 'E_SHIPPING_ORDER_EXIST_BALANCE_BOOK_OFFSET' | 'E_SHIPPING_ORDER_DETAIL_OVER_RESERVATION' | 'W_SHIPPING_ORDER_DETAIL_EXIST_RESERVATION' | 'W_SHIPPING_ORDER_DETAIL_NEED_FOOD_SPEC' | 'W_SHIPPING_ORDER_DETAIL_RESPONSIBILITY_CONFIRMING' | 'W_SHIPPING_ORDER_DETAIL_DELETE_SALES_RESERVATION' | 'E_SHIPPING_ORDER_DETAIL_MOVE_SALES_RESERVATION' | 'E_SHIPPING_ORDER_DETAIL_NOT_DELETE_FIXED_PAYMENT_DATE' | 'E_SHIPPING_ORDER_DETAIL_NOT_DELETE_EXIST_PURCHASE_RESULT' | 'E_SHIPPING_ORDER_DETAIL_SPLIT_ORVER_ARRIVAL' | 'E_SHIPPING_ORDER_DETAIL_SPLIT_NOT_EQUAL' | 'E_SHIPPING_ORDER_DETAIL_PURCHASE_AMOUNT_NOT_CHANGE' | 'E_SHIPPING_ORDER_DETAIL_INVENTORIED_NOT_CHANGE' | 'E_PAYMENT_SCHEDULE_NOT_FOUND' | 'E_BALANCE_BOOK_IS_COMPENSATED' | 'E_BALANCE_BOOK_OFFSET' | 'E_BALANCE_BOOK_OVERPAYMENT_EXISTS' | 'E_BALANCE_BOOK_OFFSET_PAYMENT_FIXED' | 'E_BALANCE_BOOK_COMPENSATED_DETAIL_CAN_NOT_DELETE' | 'E_IMPORT_COST_DUPLICATION_NO' | 'E_IMPORT_COST_INVALID_FILE' | 'E_IMPORT_COST_INVALID_NO' | 'E_IMPORT_COST_INVALID_ROW' | 'E_IMPORT_COST_NOT_FOUND_MARK' | 'E_IMPORT_COST_PAYMENTED' | 'E_IMPORT_COST_TAX_PAYMENTED' | 'E_IMPORT_PAYMENT_FIXED_DATE' | 'E_IMPORT_PAYMENT_NOT_ENOUGH' | 'E_IMPORT_PAYMENT_NOT_FINISH' | 'E_IMPORT_PAYMENT_OUTPUT_PROCESSED' | 'E_ALREADY_CONSUMED' | 'E_ALREADY_DEPOSITED' | 'E_UPDATED_MONTHLY' | 'E_ALREADY_NEXT_BILL_RESULT' | 'E_FOREIGN_CURRENCY_PURCHASE_FOREIGN_CURRENCY_BALANCES_MINUS' | 'E_FOREGIN_CURRENCY_PURCHASE_DAILY_CLOSED' | 'E_SPECIAL_PRICE_CALCULATE_COUNT_REQUIRED' | 'E_PAYMENT_SCHEDULE_NOT_INPUT' | 'E_PAYMENT_SCHEDULE_NOT_INPUT_OFFSET' | 'E_PAYMENT_SCHEDULE_NOT_FOUND_DATE' | 'E_PAYMENT_SCHEDULE_NOT_FOUND_RATE' | 'E_PURCHASE_RESULT_PAYMENT_SCHEDULE_CONFIRMED' | 'E_PURCHASE_RESULT_NO_RESERVATION_IMPORT' | 'W_PURCHASE_RESULT_ALREADY_SALES_RESERVATION_CLOSED' | 'W_PURCHASE_RESULT_ALREADY_STOCK_ADJUSTED' | 'E_PURCHASE_RESULT_PURCHASE_UNIT_PRICE_NOT_REGISTERED' | 'E_PURCHASE_RESULT_CUSTOMS_RELEASE_ON_NOT_REGISTERED' | 'E_PURCHASE_RESULT_RATE_OF_PURCHASE_NOT_REGISTERED' | 'E_PURCHASE_RESULT_UNMATCH_RESPONSIBILITY_NOT_REGISTERED' | 'E_PURCHASE_RESULT_INSUFFICIENT_SALES_RESERVATION' | 'E_BATCH_CALENDAR_NOT_FOUND' | 'E_STOCK_CHANGE_DIFFERENT_CONFIGURATION_FROM_INVENT_COMPONENT' | 'E_STOCK_CHANGE_NOT_ACCEPTED' | 'W_STOCK_CHANGE_SHORT_TIME_BETWEEN_REQUESTED_ON_AND_DESIRED_COMPLETION_ON' | 'I_STOCK_CHANGE_CHECK_ALCOHOL_CONTENT_OF_INVENT' | 'W_SALES_RESERVATION_UNEXPECTED_CUSTOMER' | 'W_SALES_RESERVATION_NOT_BALL_UNIT' | 'W_SALES_RESERVATION_NOT_CASE_UNIT' | 'W_SALES_RESERVATION_MEIMON_LIMITED' | 'E_SALES_RESERVATION_SALES_NOT_FOR_WEB' | 'E_SALES_RESERVATION_NOT_IN_SHIPPING_ORDER' | 'E_SALES_RESERVATION_NOT_EQUAL_SHIPPING_ORDER' | 'E_SALES_RESERVATION_INSUFFICIENT_SHIPPING_ORDER_NUM' | 'E_SALES_RESERVATION_NOT_IN_DOMESTIC_ORDER' | 'E_SALES_RESERVATION_NOT_EQUAL_DOMESTIC_ORDER' | 'E_SALES_RESERVATION_INSUFFICIENT_DOMESTIC_ORDER_NUM' | 'E_SALES_RESERVATION_INSUFFICIENT_STOCK_CHANGE_NUM' | 'E_SALES_RESERVATION_NOT_FOUND_SALES_STOCK_DETAIL' | 'E_SALES_RESERVATION_NOT_MATCHING_SALES_STOCK_DETAIL' | 'E_SALES_RESERVATION_SALES_STOCK_DETAIL_IS_WEB' | 'E_SALES_RESERVATION_SALES_STOCK_DETAIL_CANCELLED' | 'E_SALES_RESERVATION_STATUS_CLOSED_ON_DELETE' | 'E_SALES_RESERVATION_STATUS_STOCKED_ON_DELETE' | 'E_SALES_RESERVATION_STATUS_STOCKED_ON_CREATE' | 'W_SALES_RESERVATION_NOT_ALLOWED_RESERVE_INVENT' | 'E_SALES_RESERVATION_CANNOT_SET_WEB_PUBLISHED' | 'W_SALES_STOCK_UNEXPECTED_CUSTOMER' | 'W_SALES_STOCK_NOT_BALL_UNIT' | 'W_SALES_STOCK_NOT_CASE_UNIT' | 'W_SALES_STOCK_MEIMON_LIMITED' | 'E_SALES_STOCK_SALES_NOT_FOR_WEB' | 'W_SALES_STOCK_INSUFFICIENT_EFFECTIVE_STOCK' | 'W_SALES_STOCK_REFERENCED_RESERVATION' | 'E_SALES_STOCK_REFERENCED_RESERVATION' | 'E_SALES_STOCK_STATUS_PARTIAL_ORDER_OR_CLOSED_ON_DELETE' | 'W_SALES_STOCK_NOT_ALLOWED_STOCK_INVENT' | 'E_SALES_STOCK_CANNOT_SET_WEB_PUBLISHED' | 'E_LATEST_SALES_PRICE_NOT_EXIST' | 'E_LATEST_DOMESTIC_ORDER_PRICE_NOT_EXIST' | 'E_LATEST_IMPORT_PRICE_NOT_EXIST' | 'NO_ACCOUNT_TRANSFER_DATA' | 'NO_UNTREATED_ACCOUNT_TRANSFER_DATA' | 'NO_PROCESSED_ACCOUNT_TRANSFER_DATA' | 'E_MONTHLY_SALE_MULTIPLE_CUSTOMER_TYPE' | 'W_SALES_ORDER_FREIGHT_COSTS_EQUAL_ZERO' | 'E_SHIPPING_ORDER_LABELS_NO_EXPORT_DATA' | 'E_MONTHLY_CLOSING_STOCK_BEFORE_SALES_OR_PURCHASE' | 'E_MONTHLY_CLOSING_DEPOSIT_BEFORE_SALES' | 'E_MONTHLY_CLOSING_PAYMENT_BEFORE_PURCHASE' | 'E_MONTHLY_CLOSING_DEPOSIT_NOT_CLEARED' | 'E_MONTHLY_UNCLOSING_SALES_BEFORE_STOCK' | 'E_MONTHLY_UNCLOSING_PURCHASE_BEFORE_STOCK' | 'E_MONTHLY_UNCLOSING_SALES_BEFORE_DEPOSIT' | 'E_MONTHLY_UNCLOSING_PURCHASE_BEFORE_PAYMENT' | 'E_SALES_ORDER_RETURN_SALES_ORDER_DETAIL_IS_REGISTERED' | 'W_PAYMENT_SCHEDULE_CHECK_LIST_DATA_NOT_FOUND' | 'E_SALES_ORDER_ALREADY_PREPAYMENT_CONTACTED' | 'E_SALES_ORDER_PARTIALLY_DELETING_PREPAYMENT_CONTACTED' | 'E_MULTIPLE_FILES_IN_THE_STORAGE_LOCATION' | 'E_IMPORT_FILE_MULTIPULE_EXISTS' | 'E_UPLOAD_FILE_NOT_FOUND' | 'E_FB_DATA_JPN_VALUE_INVALID' | 'E_BANK_TRANSFER_VALIDATION' | 'E_SPECIAL_PRICE_INVALID_DATE' | 'E_NO_BILLING_OBJECT' | 'E_FAILED_TO_BILLING_OBJECT' | 'W_EXPORT_ORDER_INSUFFICIENT_EFFECTIVE_STOCK' | 'E_SALES_STOCK_CANNOT_BE_UPDATED_DUE_TO_WEB_PUBLISHED' | 'W_SALES_ORDER_MIXED_INVENT_FROM_DIFFERENT_VENDOR' | 'E_SALES_ORDER_PARENT_CUSTOMER_TEAM_NOT_EXIST' | 'W_SALES_ORDER_ALREADY_SHIPPING_LINKED_ON_UPDATE' | 'E_SPECIAL_PRICE_EITHER_PRICE_GROUP_OR_CUSTOMER_MUST_BE_SPECIFIED' | 'E_ALREADY_NEXT_DEPOSIT_RESULT' | 'E_ALREADY_NEXT_DEPOSIT_RESULT_ON_UPDATE' | 'E_AMOUNT_REMAIN' | 'W_SALES_ORDER_CALENDAR_NOT_FOUND_FOR_ARRIVAL_REQUEST_ON' | 'E_PAYMENT_RESULT_VENDOR_DOMESTIC_BANK_NOT_EXIST' | 'E_UPLOAD_DIRECTORY_NOT_FOUND' | 'E_CUSTOMER_CREDIT_NOT_FOUND' | 'E_CUSTOMER_SALE_NOT_FOUND' | 'E_IMPORT_COST_DUPLICATE' | 'E_INVALID_EMAIL_SETTING' | 'E_EXPORT_JAN_INCOMPLETED_DATA' | 'W_EXPORT_JAN_INCOMPLETED_DATA' | 'E_USER_IDM_IS_NOT_SET' | 'E_USER_HAS_NOT_PAGE_LINKS' | 'W_SALES_ORDER_ALREADY_SHIPPING_LINKED' | 'W_ALREADY_SHIPPING_LINKED' | 'E_FOREIGN_CURRENCY_BALANCE_NOT_ENOUGH' | 'E_DEPOSIT_SCHEDULE_EXISTS' | 'W_PURCHASE_RESULT_UNSHIPPABLE_SALES_STOCK' | 'E_CUSTOMER_HAS_ORDER_ON_DELETE' | 'W_PURCHARE_RESERVATION_INCLUDED_STOCK_TRADE_TYPE_THAT_IS_NON_TARGET' | 'W_BATCH_DISPLAY_REGISTERED' | 'E_SALES_ORDER_REFERENCES_SALES_STOCK_FOR_WEB_ON_DELETE' | 'E_IMPORT_PAYMENT_PAID_ON_CLOSED' | 'E_SALES_ORDER_CUSTOMER_IS_NOT_FIXED' | 'E_SALES_ORDER_CANNOT_ALLOCATE_INVALID_SALES_STOCK' | 'E_INVENTORY_RESULT_DETAIL_CANNOT_BE_DELETED_DUE_TO_HAVING_SYSTEM_COUNT' | 'E_INVENTORY_RESULT_NOT_PERFORMED_MONTHLY_INVENTORY_COUNT' | 'E_INVENTORY_RESULT_DETAIL_NOT_ENTERED' | 'E_INVENTORY_LIST_NO_DATA' | 'E_IMPORT_CHECK_COST_DUPLICATION_CHECK_CODE' | 'E_ASSISTANT_INVALID_DATE' | 'E_ASSISTANT_DUPLICATE_DATE' | 'E_EXCEL_FORMAT_NOT_FOUND' | 'E_BATCH_DISPLAY_NAME_JP_CONFLICT'

/** JOB結果コード */
export type JobResultCode = 'BATCH_I_FINISHED' | 'BATCH_I_NO_RESULT' | 'BATCH_I_DISCONTINUED' | 'BATCH_W_FILE_NOT_FOUND' | 'BATCH_E_ALREADY_RUNNING' | 'BATCH_E_INVALID_PARAMETER' | 'BATCH_E_SQL_ERROR' | 'BATCH_E_EXCEL_FORMAT_NOT_FOUND' | 'BATCH_E_MAIL_TEMPLATE_NOT_FOUND' | 'BATCH_E_CONTROLMST_NOT_FOUND' | 'BATCH_E_SYSTEM_ERROR' | 'BATCH_E_ORGANIZATION_NOT_FOUND' | 'BATCH_E_CUSTOMER_ID_NOT_FOUND' | 'BATCH_E_INVALID_DAY' | 'BATCH_E_FTP_ERROR' | 'BATCH_E_INVALID_OPTION' | 'BATCH_E_VINOFORET_INVALID_DATA' | 'BATCH_E_INVALID_FAX' | 'BATCH_E_TOO_MANY_DATA' | 'BATCH_E_IMPORT_SHIPPING_ORDER' | 'BATCH_E_DELAY' | 'BATCH_W_RESERVATION_UNLINK_ORDER' | 'BATCH_E_COD_FEE_NOT_AVAILABLE' | 'BATCH_E_BEFORE_DATE' | 'BATCH_E_NOT_FIND_CLOSING' | 'BATCH_E_MONTHLY_CLOSED' | 'BATCH_E_ALREADY_BILLED'

/** コントロールIDM */
export type ControlIdm = 'ABSTRACT' | 'ADVANCE_SUM' | 'ALLOTMENT' | 'APPROVED' | 'ARAKI_BAT_NO' | 'ARAKI_DATA_TYPE' | 'ARAKI_REC_TYPE' | 'AREA_FLG' | 'AROMA_LEVEL' | 'ARRIVAL_PORT' | 'ARRIVAL_REQUEST' | 'ARRIVAL_REQUEST_AM_PM' | 'ARRIVAL_REQUEST_KANSAI' | 'ARRIVAL_REQUEST_TIME' | 'BACK_LABEL' | 'BACK_LBL_MASTER_HINT' | 'BALANCE_BOOK_BILL_TYPE' | 'BALANCE_BOOK_TYPE' | 'BALL_LABEL' | 'BALL_STYLE' | 'BANK' | 'BANK_ACCOUNT_TYPE' | 'BANK_BRANCH' | 'BANK_TRANSFER_ACCOUNT' | 'BANK_TRANSFER_RESULT' | 'BATCH_CALENDAR' | 'BATCH_SCHEDULE_TYPE' | 'BATCH_SERVICE' | 'BATCH_STATUS' | 'BATCH_TYPE' | 'BB_TYPE' | 'BEST_BEFORE_FORMAT' | 'BILLING_PRINTER' | 'BILLING_STATUS' | 'BILLING_TAX_ADJUST_ITM' | 'BILLING_TYPE' | 'BIO' | 'BIO_ACCREDITAT' | 'BOTTLE_COLOR' | 'BOX_STYLE' | 'BUSINESS_CATEGORY' | 'BUSINESS_CONDITION_GROUP' | 'BUSINESS_LOCATION' | 'CERTIFICATE_TYPE' | 'CHAIN_ITEMID_PRINT' | 'CHECK_TYPE' | 'CHECKLIST_OUTPUT_TARGET' | 'CHK_UNDERSTAN_DATE' | 'CHK_WORK_COMPLETION_DATE' | 'CHOAI' | 'CLIENT_GROUP' | 'CLIENT_ROLE' | 'CLOSING_DAY' | 'CLOSING_TYPE' | 'CODFEE' | 'COLOR' | 'CONSIGNMENT_LOCATION_ID' | 'CONSUMPTION_TAX' | 'CONTACT_TYPE' | 'CONTAINER_SIZE' | 'CONTAINER_TYPE' | 'CONTEST' | 'CONTRACT_LOCATION' | 'CORK_SPEC' | 'COST_ACCOUNT_TYPE' | 'COST_CONDITION' | 'COST_DATA_PATH' | 'COST_STATUS' | 'COST_TAXATION_TYPE' | 'COUNTRY_NAME_BANK' | 'CROSS_ACCOUNT_TRANSFER_REASON' | 'CROSS_ACCOUNT_TRANSFER_TYPE' | 'CS_CHECK_COL' | 'CURRENCY' | 'CUSTOMER_GROUP' | 'CUSTOMER_PAYMENT_TYPE' | 'CUSTOMER_TYPE' | 'CUSTOMS_BROKER' | 'CUSTOMS_DUTY_APPLICATION' | 'CUSTOMS_DUTY_UNIT' | 'CUSTOMS_ITEMNAME' | 'DAIBIKI_FILE_PATH' | 'DAY_OF_WEEK' | 'DEFAULT_SHIPPING_LOCATION' | 'DELIVERY_SLIP' | 'DEPARTURE_PORT' | 'DEPOSIT_SCHEDULE' | 'DEPOSIT_SCHE_HIT_INF' | 'DEPOSIT_TYPE' | 'DEVELOPMENT' | 'DIRECT_SHIPPING' | 'DISCONTINUED' | 'DISTRIBUTE_VOLUME' | 'DOC_LANG_TYPE' | 'DOMESTIC_FOREIGN' | 'DOMESTIC_ORDER_FORMAT' | 'DRY_SHIPPING_SUMMER_NGPERIOD' | 'ENTRY_TYPE' | 'EPOCH' | 'ESTIMATED_ARRIVAL' | 'EVALUATION_ABROAD' | 'EVALUATION_DOMESTIC' | 'EVALUATION_OTHER' | 'EXCESS_OR_DEFICIENCY' | 'EXPENSES_ACCOUNT' | 'EXPORT_DETAILS_CONFIRM' | 'EXPORT_SHIPPING_ORDER_STATUS' | 'FARE_FREE' | 'FARE_PATTERN' | 'FAX_SERVICE_JPLQ' | 'FAX_SERVICE_OTHER' | 'FAX_SERVICE_SCHEDULE' | 'FAX_SERVICE_WINE' | 'FB_DATA_JPN_VALUE' | 'FB_DATA_KAIGAI_TUKA_VALUE' | 'FB_DATA_KAIGAI_VALUE' | 'FILE_LIMIT' | 'FILE_PATH' | 'FIXED_PAYMENT_DATE' | 'FOLDER_PATH' | 'FOREIGN_CURRENCY_IN_OUT_TYPE' | 'FOREIGN_CURRENCY_ORDER_TYPE' | 'FOREIGN_CURRENCY_PURCHASE' | 'FOREIGN_CURRENCY_PURPOSE' | 'FREE_OF_CHAGE_TYPE' | 'FREETIME_BASE_DATE' | 'FREETIME_START_DATE' | 'FREIGHT_ACCOUNT' | 'FREIGHT_COSTS' | 'GOOD_FOR_DRINKING' | 'GYOTAI_TYPE' | 'HAISOU' | 'HURIKOMI_FILE_PATH' | 'IMPORT_DOMESTIC' | 'IMPORT_ORIGIN' | 'INVENT_GROUP' | 'INVENT_UNIT' | 'INVOICE_PRINT_TYPE' | 'INVOICE_REGISTRATION_NO' | 'INVOICE_REMARK' | 'ITEM_GROUP' | 'ITEM_TAX_TYPE' | 'ITEM_TYPE' | 'JOURNAL_ENTRY_SQL_DAILY' | 'JOURNAL_ENTRY_SQL_MONTHLY' | 'JOURNAL_ENTRY_SQL_YEARLY' | 'JPLQ_POP_SIZE' | 'JPLQ_TYPE' | 'KOFURIIRAI_INFO' | 'KOZA_FILE_PATH' | 'LABEL_DATA_OUTPUT_TYPE' | 'LABEL_DELIVERY_SHIP' | 'LIMITED_LOCATION_COMBINATION' | 'LIQUOR_TAX_GROUP' | 'LOCATION_INFO' | 'LOG_LIMIT' | 'LOT_NECESSARY' | 'MAKER_VENDOR_SANPELLEGRINO' | 'MASTERCARTON_TYPE' | 'MESSAGE_TYPE' | 'MITFHSMIX' | 'NAME_TYPE' | 'NEW_INVENT_VINTAGE' | 'NEXT_SHIPPING' | 'NG_LOCATION_HAISOU' | 'NG_LOCATION_YOSHIN' | 'NOT_DISTRIBUTION_ITEMS' | 'OKADA_SYOTEN' | 'OMR_PICTURE' | 'ORDER_STATUS' | 'ORGANIC_JAS' | 'ORGANIZATION' | 'OTHER_COST_TYPE' | 'OUT_BOX' | 'OUTPUT_TYPE' | 'OVER_RECEIVED_TYPE' | 'OVERSEAS_DEPOSIT_FILE_PATH' | 'PACKING_LABEL' | 'PAGE_AUTH' | 'PAYMENT_BASE_DATE' | 'PAYMENT_CONDITION_TRANSPORTATION_COST' | 'PAYMENT_DAY' | 'PAYMENT_MONTH' | 'PAYMENT_TARGET' | 'PAYMENT_TYPE' | 'PER_STYLE' | 'PERMISSIBLE_RANGE' | 'PHYSICAL_STOCK' | 'PICKING' | 'PLUG' | 'POP_CHAR_COLOR' | 'POP_DISP_TAX' | 'POP_SIZE' | 'POP_VERSION' | 'POST' | 'POST_INVENT' | 'PRICE_SYSTEM' | 'PRICE_UNIT' | 'PRINT_ADDRESS_TYPE' | 'PRODUCT_CALL_ID' | 'PURCHASE_SEND_TYPE' | 'QUALITY_OF_LIQUOR' | 'QUALITY_TYPE' | 'RBP_ALC_TYPE' | 'RBP_AR_TYPE' | 'RBP_CAPACITY' | 'RBP_CONTAINER_TYPE' | 'RBP_ITEM_CATEGORY' | 'RBP_ITEM_TYPE' | 'RBP_JAN' | 'RBP_JBL_TYPE' | 'RBP_ORGANIC' | 'RBP_RECYCLE' | 'RBP_SO2' | 'RBP_TYPE' | 'REASON_TXT' | 'RECYCLE_LAW' | 'REFERENCE_PAY_DATE' | 'REPRINT_TYPE' | 'RESERVATION_NOTICE' | 'RESERVE_TYPE' | 'RETAIL_TYPE' | 'ROUNDING_TYPE' | 'SALES_CATEGORY' | 'SALES_ORDER_STATUS' | 'SALES_ORDER_TYPE' | 'SALES_RESERVATION_STOCK_HEADER_STATUS' | 'SALES_RESERVATION_STOCK_STATUS' | 'SALES_STOCK_TYPE' | 'SALES_TAX_TYPE' | 'SALES_TRANSACTION_TYPE' | 'SALTED_SWEETENED_LEVEL' | 'SCHEDULE_ADD_NUM' | 'SCHEDULE_WS_INIT_VALUE' | 'SEARCH_CUSTOMER_CONDITIONS' | 'SEARCH_SALES_UNIT' | 'SEND_DATA_TYPE' | 'SENDEN_PRINTED' | 'SHERRY_CUSK' | 'SHIP_INSTRUCTION_ARAKI' | 'SHIP_NAME' | 'SHIPPER' | 'SHIPPING_BAT_STATUS' | 'SHIPPING_ORDER_STATUS' | 'SHIPPING_ORDER_UPPER_WEIGHT' | 'SHIPPING_PRINTER' | 'SHIPPING_STATUS' | 'SHIPPING_SUM_UNIT' | 'SHIPPING_TRANSFER' | 'SHIPMENT_LOCATION' | 'SHOOT_TYPE' | 'SIIRE_HANBAII_KBN' | 'SPECIAL_PRICE_REFERENCE' | 'SPECIAL_PRICE_TYPE' | 'SPT_CONDITION' | 'STICKER_LAYOUT_MOD_TYPE' | 'STICKER_TYPE' | 'STOCK_ADJUSTMENT_TYPE' | 'STOCK_CHANGE_COMPLETION_STATUS' | 'STOCK_CHANGE_POST_NO' | 'STOCK_CHANGE_REQUEST_TYPE' | 'STOCK_CHANGE_TYPE' | 'STOCK_DIRECT_TYPE' | 'STOCK_TRADE_TYPE' | 'STOCK_TYPE' | 'STOCKOUT_CONTACT' | 'STOP_OVER_PORT' | 'STRATEGY_TYPE' | 'STRATEGY_TYPE_NAME' | 'SUM_TYPE' | 'SUMMARY_TARGET_LOCATION' | 'SUNDRY_VENDOR' | 'SUSPENDED_TRADE' | 'TASTE_LEVEL' | 'TASTING_TYPE' | 'TAX_ADJUSTMENT' | 'TENKA_SIYO' | 'TOTAL_DISPLAY' | 'TRADE_TERM' | 'TRANSACTION_TYPE' | 'TRANSFER_FEE' | 'TRANSFER_STATUS' | 'UNMATCH_CAUSE' | 'UNMATCH_RESPONSIBILITY' | 'USER_LOG_TYPE' | 'VINO_CAMPAIN' | 'VINO_DATA_TYPE' | 'VINO_TORI' | 'VOLUME_UNIT' | 'WEB_INVENT_LOCATION_GROUP' | 'WEB_OPEN' | 'WEB_SALES_IMPORT' | 'YOSHIN' | 'FIAC_EMAIL_ADDRESS' | 'SEND_SALES_ORDER_EXCEL' | 'PREFERENTIAL_TREATMENT_GROUP' | 'EXP_RBP_LABEL_TYPE'

/** 画像種別 */
export type ImageType = 'NEXT' | 'CURRENT' | 'PREV' | 'C1' | 'B1' | 'L2' | 'L3' | 'L4' | 'L5' | 'L6' | 'L7' | 'L8'

/** 着指定 */
export type ArrivalRequestCd1 = '1' | '2'

/** AM/PM区分 */
export type ArrivalRequestAmPmCd1 = '1' | '2'

/** 配送時間帯 */
export type ArrivalRequestTimeCd1 = '1' | '2' | '3' | '4' | '5'

/** 荒木データ区分 */
export type ArakiDataTypeCd1 = '10' | '40' | '50' | '60'

/** 荒木レコード区分 */
export type ArakiRecTypeCd1 = '0' | '1' | '2' | '3'

/** BB処理区分CD */
export type BalanceBookTypeCd1 = '10' | '20' | '30' | '40'

/** 口座種類 */
export type BankAccountTypeCd1 = '1' | '2' | '9'

/** 口座振替結果 */
export type BankTransferResultCd1 = '0' | '1' | '2' | '3' | '4' | '8' | '9'

/** バッチカレンダー区分 */
export type BatchCalendarCd1 = '1' | '2' | '3' | '4'

/** BB種別区分 */
export type BbTypeCd1 = '1' | '2'

/** 請求書印刷プリンタ */
export type BillingPrinterCd1 = 'OMR_SMALL' | 'OMR_LARGE' | 'OMR_NONE'

/** 請求締状況 */
export type BillingStatus = '0' | '10'

/** 請求書タイプ */
export type BillingTypeCd1 = '10' | '20' | '30'

/** 合計請求書フォーマット区分 */
export type BillTotalFormatCd1 = '1' | '2'

/** 拠点情報 */
export type BusinessLocationCd1 = '1' | '2' | '3' | '4'

/** 拠点情報 */
export type BusinessLocationCd2 = 'JPN' | 'ENG'

/** 作業区分(荒木運輸) */
export type CheckCd1 = '1' | '2' | '3' | '4' | '10'

/** 顧客グループ */
export type ClientGroupCd1 = '1' | '2'

/** 顧客役割 */
export type ClientRoleCd1 = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '99'

/** 締日区分 */
export type ClosingDayTypeCd1 = '0' | '10' | '15' | '20' | '77' | '99'

/** 締め区分 */
export type ClosingTypeCd1 = '0' | '1' | '2' | '3' | '4' | '5' | '6'

/** 色 */
export type ColorCd1 = '0' | '1' | '2' | '3' | '4'

/** 代引・振確 受注案内区分CD */
export type ContractLocationCd1 = '1' | '2'

/** 代引・振確 受注案内区分CD */
export type ContactTypeCd1 = '0' | '1' | '2' | '3'

/** コンテナ仕様CD:1:REEFER/2:DRY/3:DRY/Thermal Insulator by Forwarder/5:AIR/6:DRY/Thermal Insulator by Shipper */
export type ContainerTypeCd1 = '1' | '2' | '3' | '5' | '6'

/** 原価用科目分類 */
export type CostAccountTypeCd1 = '1' | '2' | '3' | '4' | '5' | '6'

/** 原価計算ステータス */
export type CostStatusCd1 = '1' | '11' | '12' | '13' | '21' | '99'

/** 通貨 */
export type CurrencyCd1 = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '08' | '09' | '80' | '81' | '82' | '83' | '84' | '99'

/** 得意先区分 */
export type CustomerTypeCd1 = '1' | '2' | '3' | '4'

/** 関税適用区分 */
export type CustomsDutyApplicationCd1 = '1' | '2' | '3'

/** 関税単位 */
export type CustomsDutyUnitCd1 = '1' | '2'

/** 通関許可（搬入スケジュール用） */
export type CustomsReleaseType = '1' | '2' | '3'

/** 通関書類チェック列判定区分 */
export type CsCheckColCd1 = '10' | '20' | '30' | '40' | '50' | '99'

/** 代引き出力ファイルパス */
export type DaibikiFilePathCd1 = 'ARAKI_Receive' | 'ARAKI_ReceiveBackUp' | 'SAGAWA_Receive' | 'SAGAWA_ReceiveBackUp' | 'YAMATO_Receive' | 'YAMATO_ReceiveBackUp'

/** 曜日 */
export type DayOfWeek = '0' | '1' | '2' | '3' | '4' | '5' | '6'

/** 伝票種類 */
export type DeliverySlipCd1 = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '0'

/** 入金予定区分 */
export type DepositScheduleCd1 = '1' | '2' | '3'

/** 入金予定特定時情報 */
export type DepositScheHitInfCd1 = '1' | '2'

/** 顛末区分 */
export type DepositStsCd1 = '1' | '2' | '9'

/** 入金方法 */
export type DepositTypeCd1 = '52' | '41' | '50' | '55' | '49' | '48' | '47'

/** 受注直送区分 */
export type DirectShippingCd1 = '1' | '2'

/** 終売 */
export type DiscontinuedCd1 = '0' | '1' | '2' | '3'

/** 容量按分区分 */
export type DistributeVolumeCd1 = '1' | '2'

/** 国内発注書フォーマット */
export type DomesticOrderFormatCd1 = '1' | '2' | '3'

/** 夏季ドライ便出荷NG期間 */
export type DryShippingSummerNgperiodCd1 = 'From' | 'To'

/** EメールテンプレートIDM */
export type EmailTemplateIdm = 'BATCH_END_NOTIFY' | 'BATCH_DELAY_NOTIFY' | 'BATCH_IMPORT_SHIPPING_ORDER' | 'ARRIVAL_ORDER' | 'REQUEST_STOCK_CHANGE' | 'REQUEST_INVENT_INSERT' | 'REQUEST_SALES_RESERVATION_STOCKS_INSERT' | 'SHIPPING_ORDER_SCHEDULES' | 'SHIPPING_ORDER_CUSTOMS_RELEASE' | 'TRANSFER_REQUEST_OSAKA' | 'TRANSFER_REQUEST_TOKYO' | 'DELIVERY_GUIDANCE_OSAKA' | 'DELIVERY_GUIDANCE_TOKYO' | 'ORDER_NOTICE' | 'DOMESTIC_ORDER_MAIL1' | 'DOMESTIC_ORDER_MAIL2' | 'SHIPPING_ORDER' | 'SHIPPING_INSTRUCTION' | 'SHIPPING_ORDER_CUSTOMS_RELEASE_NO_CHECK_LIMIT' | 'IMPORT_PURCHASE_COSTS' | 'ARAKI_SHIPPING_NOTIFY' | 'SALES_ORDER' | 'DOMESTIC_ORDER_SCHEDULES' | 'INSERT_BATCH_DISPLAYS' | 'WEB_SALES_ORDER' | 'SHIPPING_ORDER_OB_UPDATE' | 'PURCHASE_UNIT_PRICE_UPDATED' | 'PURCHASE_PRICES_FOR_KAIRAN' | 'GROSS_MARGINS' | 'SHIPPING_RESERVATION_REMAINING_AMOUNT'

/** 在庫移動時入庫方法 */
export type EntryTypeCd1 = '1' | '2' | '3'

/** 着日目安 */
export type EstimatedArrivalCd1 = '0' | '1' | '2' | '3' | '4' | '9'

/** 船積受注状況 */
export type ExportShippingOrderStatusCd1 = '1' | '2'

/** 運賃パターン区分 */
export type FarePatternCd1 = '1' | '2' | '3'

/** ファイル保存設定 */
export type FileLimitCd1 = '10' | '20'

/** ファイルパス */
export type FilePathCd1 = '1'

/** 期日確定区分 */
export type FixedPaymentDateCd1 = '10' | '20'

/** フォルダ定義 */
export type FolderPathCd1 = 'BACKUP' | 'FORMAT' | 'IMAGE' | 'SVF_INPUT' | 'SVF_OUTPUT' | 'FAX' | 'RAKURAKU' | 'RBP_ORDER' | 'RBP_ORDER_DETAIL' | 'RBP_SEAL' | 'RBP_SEAL_DETAIL' | 'STORE' | 'USER' | 'SHIPPING_ORDER_SCHEDULES' | 'SHIPPING_ORDER_MANUAL' | 'CHECK_LIMITDATA' | 'SHIPPING_ORDER_OB_UPDATE' | 'REMAINING_AMOUNT'

/** フリータイム基準日区分 */
export type FreeTimeBaseDateCd1 = '10' | '20'

/** フリータイム起算日計算区分 */
export type FreeTimeStartDateCd1 = '10' | '20' | '30'

/** 外貨受払区分 */
export type ForeignCurrencyInOutTypeCd1 = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '08' | '09'

/** 外貨取引区分 */
export type ForeignCurrencyOrderTypeCd1 = '1' | '2' | '3' | '4' | '5' | '6' | '7'

/** 外貨使用目的 */
export type ForeignCurrencyPurchaseCd1 = '1' | '2' | '3' | '4' | '5' | '6'

/** 業態区分 */
export type GyotaiTypeCd1 = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8'

/** 配送区分 */
export type HaisouCd1 = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '9'

/** 振込出力ファイルパス */
export type HurikomiFilePathCd1 = 'Receive' | 'ReceiveBackUp'

/** 輸入・国内区分 */
export type ImportDomesticCd1 = '10' | '20'

/** 商品単位 */
export type InventUnitCd1 = '1' | '2' | '3'

/** 請求書発行 */
export type InvoicePrintTypeCd1 = '0' | '1'

/** 品目区分 */
export type ItemGroupCd1 = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | '13' | '14' | '15' | '16' | '17' | '18' | '19' | '20' | '21' | '22' | '23' | '24' | '25' | '26' | '27' | '40' | '41'

/** 品目税タイプ */
export type ItemTaxTypeCd1 = '1' | '2' | '3' | '4'

/** 口座振替出力ファイルパス */
export type KozaFilePathCd1 = 'Receive' | 'ReceiveBackUp' | 'Send' | 'SendBackUp'

/** ログ保存設定 */
export type LogLimitCd1 = '10' | '20' | '30'

/** メッセージIDM */
export type MessageIdm = 'ARRIVAL_ORDER' | 'SHIPPING_ORDER_SCHEDULE'

/** メッセージ区分 */
export type MessageTypeCd1 = '10' | '20' | '30'

/** 名称区分 */
export type NameTypeCd1 = '0' | '1' | '2' | '3'

/** 発注状況区分 */
export type OrderStatusCd1 = '10' | '20'

/** 新品番年号区分 */
export type NewInventVintageCd1 = '1' | '2'

/** OMR画像パス */
export type OmrPictureCd1 = 'NONE' | 'ONLY' | 'START' | 'MIDDLE' | 'LAST'

/** 出力形式 */
export type OutputTypeCd1 = '1' | '2' | '3'

/** 海外入金データ受信ファイルパス */
export type OverseasDepositFilePathCd1 = 'Receive' | 'ReceiveBackUp'

/** 梱包ラベル */
export type PackingLabelCd1 = '0' | '1' | '2'

/** 検索用支払状態区分 */
export type PaidType = '0' | '1' | '2'

/** 検索用管理部受領区分 */
export type PaymentAcType = '0' | '1' | '2'

/** 支払期日起算日条件区分 */
export type PaymentBaseDateCd1 = '10' | '20' | '30'

/** 支払日区分 */
export type PaymentDayTypeCd1 = '10' | '15' | '20' | '99'

/** 支払実行区分 */
export type PaymentExecutionTypeCd1 = '1' | '2' | '3' | '4'

/** 支払月数区分 */
export type PaymentMonthTypeCd1 = '0' | '1' | '2'

/** 検索用支払期日区分 */
export type PaymentMkType = '0' | '1' | '2'

/** 支払対象区分 */
export type PaymentTargetCd1 = '10' | '20' | '30' | '40' | '50'

/** 支払種別区分 */
export type PaymentTypeCd1 = '1' | '2' | '10' | '20' | '30' | '40'

/** 許容範囲 */
export type PermissibleRangeCd1 = '1'

/** ピッキング分類CD */
export type PickingTypeCd1 = '1' | '2' | '3'

/** 価格単位CD */
export type PriceUnitCd1 = '0' | '1'

/** 住所印字区分 */
export type PrintAddressTypeCd1 = '0' | '1' | '2'

/** 部署区分 */
export type PostCd1 = '2' | '3' | '5' | '08' | '99'

/** 担当部署 */
export type PostInventCd1 = '1' | '2' | '3' | '4' | '5' | '6' | '7'

/** 国内発注書送付方法 */
export type PurchaseSendTypeCd1 = '1' | '2' | '3'

/** RBP/JBL区分 */
export type RbpJblTypeCd1 = '10' | '20'

/** アルコール要否区分 */
export type RbpAlcTypeCd1 = '10' | '20'

/** 再印字区分 */
export type ReprintTypeCd1 = '0' | '1' | '2'

/** 予約区分 */
export type ReserveTypeCd1 = 'R' | 'P' | 'B' | 'Q'

/** 卸小売区分CD */
export type RetailTypeCd1 = '1' | '2' | '3'

/** 小数処理区分 */
export type RoundingTypeCd1 = '0' | '1' | '2' | '3'

/** 取置区分 */
export type SalesStockTypeCd1 = '1' | '2' | '3' | '4'

/** 売上税タイプ */
export type SalesTaxTypeCd1 = '1' | '2'

/** 出力区分(出荷指示データ連携) */
export type ShippingLinkType = '1' | '2'

/** 撮影区分 */
export type ShootTypeCd1 = '1' | '2' | '3' | '4'

/** 在庫振替区分 */
export type StockChangeTypeCd1 = '1' | '2' | '3'

/** 完成状態 */
export type StockChangeCompletionStatusCd1 = '10' | '20' | '30'

/** 在庫振替依頼・実績入力 */
export type StockChangeRequestTypeCd1 = '1' | '2'

/** 受払区分 */
export type TransactionTypeCd1 = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '08' | '09' | '10' | '11' | '12' | '13'

/** 移動状態 */
export type TransferStatusCd1 = '1' | '2'

/** 船積差異責任所在区分 */
export type UnmatchResponsibilityCd1 = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '08' | '09' | '99'

/** 利用者ログ区分 */
export type UserLogTypeCd1 = '10' | '20' | '30'

/** 販売区分 */
export type SalesCategoryCd1 = '1' | '2' | '3' | '4' | '5' | '6' | '8' | '9' | '11' | '12' | '13' | '14' | '15' | '16'

/** 受注状況 */
export type SalesOrderStatusCd1 = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8'

/** 登録区分 */
export type SalesOrderTypeCd1 = '1' | '2' | '3' | '4' | '5'

/** 予約受注・取置状況(ヘッダ) */
export type SalesReservationStockHeaderStatusCd1 = '1' | '8' | '9'

/** 予約受注・取置状況 */
export type SalesReservationStockStatusCd1 = '1' | '2' | '3' | '4' | '5' | '8' | '9'

/** 受注取引区分 */
export type SalesTransactionTypeCd1 = '10' | '11' | '14' | '15' | '16' | '17' | '18' | '20' | '21' | '22' | '30' | '31' | '55' | '57' | '50' | '90'

/** 一括表示仕様用SO2区分 */
export type RbpSo2Cd1 = '10' | '20' | '30'

/** 予約受注取置伝票区分 */
export type ReservationOrStockCd1 = '1' | '2'

/** 受注伝票検索単位 */
export type SearchSalesUnitCd1 = '1' | '2'

/** データ送信区分 */
export type SendDataTypeCd1 = '1' | '2' | '3'

/** 専伝抽出区分 */
export type SendenPrintedCd1 = '1' | '2'

/** 搬入スケジュール一括搬入日計算用加算日数 */
export type ScheduleAddNumCd1 = '1'

/** 出荷バッチ処理区分 */
export type ShippingBatStatusCd1 = '1' | '2'

/** 許可記号状況 */
export type ShippingOrderStatusCd1 = '0' | '1' | '2' | '3' | '4' | '5'

/** 伝送状態 */
export type ShippingStatusCd1 = '0' | '1' | '2'

/** 伝送区分 */
export type ShippingTransferCd1 = '0' | '1'

/** 特別単価基準金額 */
export type SpecialPriceReferenceCd1 = '1' | '2'

/** 特別単価区分 */
export type SpecialPriceTypeCd1 = '1' | '2' | '3'

/** 在庫調整区分 */
export type StockAdjustmentTypeCd1 = '1' | '2' | '3'

/** 在庫・仕入計上取引区分 */
export type StockTradeTypeCd1 = '1' | '2' | '3' | '4' | '5' | '6'

/** Vinoforetキャンペーンフラグ */
export type VinoCampaignCd1 = '0' | '1' | '2'

/** WEB受注取込タイプ */
export type VinoDataTypeCd1 = '1' | '2'

/** 容量単位 */
export type VolumeUnitCd1 = '1' | '2' | '3' | '4' | '09'

/** 与信管理区分 */
export type YoshinCd1 = '0' | '1' | '2' | '3' | '9'

/** 取込ステータス */
export type MtxImpstatus = 0 | 1 | 2 | 8 | 9

/** 取込フラグ */
export type MtxControlflg = 0 | 1 | 8 | 9

/** 棚卸実績状況区分 */
export type InventoryTypeCd1 = '10' | '20' | '30'
