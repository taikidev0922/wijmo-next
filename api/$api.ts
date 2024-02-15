import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_by08hd } from '.';
import type { Methods as Methods_1lh9l08 } from './api/account_titles';
import type { Methods as Methods_89egwl } from './api/account_titles/_account_title_id@number';
import type { Methods as Methods_saagxk } from './api/account_transfer_receipts';
import type { Methods as Methods_p5m3c } from './api/account_transfer_receipts/create_deposit';
import type { Methods as Methods_6eecu0 } from './api/account_transfer_receipts/print';
import type { Methods as Methods_p1u363 } from './api/account_transfer_requests';
import type { Methods as Methods_4xpjs } from './api/account_transfer_requests/create';
import type { Methods as Methods_asfp2y } from './api/account_transfer_requests/export';
import type { Methods as Methods_1uo9wat } from './api/account_transfer_requests/show';
import type { Methods as Methods_b4uqr4 } from './api/additional_payments';
import type { Methods as Methods_gdpp6c } from './api/additives';
import type { Methods as Methods_1emqkx7 } from './api/additives/_additive_id@number';
import type { Methods as Methods_1gju813 } from './api/areas';
import type { Methods as Methods_1uj11ql } from './api/areas/_area_id@number';
import type { Methods as Methods_1wnryle } from './api/arrival_scheduled_stocks';
import type { Methods as Methods_61e46 } from './api/assistants';
import type { Methods as Methods_1bybmg5 } from './api/assistants/_assistant_id@number';
import type { Methods as Methods_16cedj1 } from './api/auth';
import type { Methods as Methods_1v9mws3 } from './api/auth/login';
import type { Methods as Methods_1l8ghuo } from './api/auth/logout';
import type { Methods as Methods_1ll7yd0 } from './api/balance_books';
import type { Methods as Methods_14nt2d2 } from './api/balance_books/_invoice_no@string';
import type { Methods as Methods_1hfgbl8 } from './api/balance_books/print_invoice';
import type { Methods as Methods_ddlxmy } from './api/bank_accounts';
import type { Methods as Methods_14cgtlb } from './api/bank_accounts/_bank_account_id@number';
import type { Methods as Methods_hstxnv } from './api/bank_transfer_receipts';
import type { Methods as Methods_1wbq4d1 } from './api/bank_transfer_receipts/create_deposit';
import type { Methods as Methods_14awnj9 } from './api/base_locations';
import type { Methods as Methods_1l8t9hp } from './api/base_locations/_base_location_id@number';
import type { Methods as Methods_1od74s7 } from './api/batch_authorities';
import type { Methods as Methods_1y6ntyw } from './api/batch_authorities/_batch_authority_id@number';
import type { Methods as Methods_ilqdah } from './api/batch_calendars';
import type { Methods as Methods_f4dvql } from './api/batch_calendars/_batch_calendar_id@number';
import type { Methods as Methods_1lx8mi5 } from './api/batch_displays';
import type { Methods as Methods_1wd5g7h } from './api/batch_displays/_batch_display_id@number';
import type { Methods as Methods_1ve5uv2 } from './api/batch_histories';
import type { Methods as Methods_ju01mm } from './api/batch_parameters';
import type { Methods as Methods_he27sl } from './api/batch_parameters/_batch_parameter_id@string';
import type { Methods as Methods_1m9zlns } from './api/batch_schedules';
import type { Methods as Methods_hdfqwj } from './api/batch_schedules/_batch_schedule_id@string';
import type { Methods as Methods_nltu49 } from './api/batches';
import type { Methods as Methods_a7bgrs } from './api/batches/_batch_id@number';
import type { Methods as Methods_19p76uj } from './api/bill_closings';
import type { Methods as Methods_1eucba7 } from './api/bill_closings/bulk_async';
import type { Methods as Methods_118s64r } from './api/bill_results';
import type { Methods as Methods_ak7wzv } from './api/bill_results/print';
import type { Methods as Methods_2q8wwc } from './api/bill_total_groups';
import type { Methods as Methods_1l7hzar } from './api/bill_total_groups/_bill_total_group_id@number';
import type { Methods as Methods_s27qsf } from './api/bills/print';
import type { Methods as Methods_5j5z92 } from './api/bottle_sizes';
import type { Methods as Methods_1wssycp } from './api/bottle_sizes/_bottle_size_id@number';
import type { Methods as Methods_1acdzrq } from './api/calendars';
import type { Methods as Methods_qf0lgr } from './api/calendars/_calendar_id@number';
import type { Methods as Methods_1gofoy9 } from './api/cash_on_deliveries';
import type { Methods as Methods_tc5xwn } from './api/cash_on_deliveries/create_deposit';
import type { Methods as Methods_1lwepbj } from './api/consignees';
import type { Methods as Methods_k334bp } from './api/consignees/_consignee_id@number';
import type { Methods as Methods_uwr4k9 } from './api/contract_stocks';
import type { Methods as Methods_1or5z6t } from './api/contract_stocks/_contract_stock_id@number';
import type { Methods as Methods_5dqxqt } from './api/controls';
import type { Methods as Methods_mh88zx } from './api/controls/_control_id@number';
import type { Methods as Methods_1mb095j } from './api/cost_prices/export_cost_price_data';
import type { Methods as Methods_1spojqo } from './api/cost_prices/import_cost_price_data';
import type { Methods as Methods_zw0wve } from './api/cost_subjects';
import type { Methods as Methods_80vydn } from './api/cost_subjects/_cost_subject_id@number';
import type { Methods as Methods_1hdviig } from './api/costs/bulk_insert';
import type { Methods as Methods_1oxpqj8 } from './api/costs/bulk_insert_check_amount';
import type { Methods as Methods_dnqc5q } from './api/costs/bulk_insert_custom';
import type { Methods as Methods_w893si } from './api/country_grading_links';
import type { Methods as Methods_1epaqov } from './api/country_grading_links/_country_grading_link_id@number';
import type { Methods as Methods_mam12x } from './api/country_of_origins';
import type { Methods as Methods_whbjst } from './api/country_of_origins/_country_of_origin_id@number';
import type { Methods as Methods_ps8it9 } from './api/country_place_name_links';
import type { Methods as Methods_c5phn1 } from './api/country_place_name_links/_country_place_name_link_id@number';
import type { Methods as Methods_1jus0ru } from './api/country_village_links';
import type { Methods as Methods_qonttv } from './api/country_village_links/_country_village_link_id@number';
import type { Methods as Methods_17c99lr } from './api/customer_credits/bulk';
import type { Methods as Methods_qizgd } from './api/customer_group_invents';
import type { Methods as Methods_vt8w71 } from './api/customer_group_invents/_customer_group_invent_id@number';
import type { Methods as Methods_kt3vk8 } from './api/customer_groups';
import type { Methods as Methods_899nyj } from './api/customer_groups/_customer_group_id@number';
import type { Methods as Methods_1l1x8p } from './api/customer_invents';
import type { Methods as Methods_8kkbh9 } from './api/customer_invents/_customer_invent_id@number';
import type { Methods as Methods_1jnfmw5 } from './api/customer_sales/bulk';
import type { Methods as Methods_1wx5efw } from './api/customer_staffs/bulk';
import type { Methods as Methods_r36syk } from './api/customers';
import type { Methods as Methods_wf0acr } from './api/customers/_customer_id@number';
import type { Methods as Methods_1b33tdl } from './api/customers/_customer_id@number/inquire_haisou';
import type { Methods as Methods_fdqbgj } from './api/customers/bulk_insert';
import type { Methods as Methods_1i5yr2b } from './api/customers/bulk_update';
import type { Methods as Methods_1m06kkr } from './api/customers/next_idm';
import type { Methods as Methods_1cgpu6e } from './api/customs_duties';
import type { Methods as Methods_z037ik } from './api/customs_duties/_customs_duty_id@number';
import type { Methods as Methods_nyh6h2 } from './api/deposit_results';
import type { Methods as Methods_i7pr1o } from './api/deposit_results/execute_clearing';
import type { Methods as Methods_kadr1u } from './api/deposit_results/schedule';
import type { Methods as Methods_w1oms2 } from './api/deposit_schedules';
import type { Methods as Methods_1ep9sb6 } from './api/deposit_schedules/diff_customers';
import type { Methods as Methods_1kqxe6g } from './api/deposit_schedules/make_zero_schedule';
import type { Methods as Methods_1e7rz6 } from './api/domestic_order_prices/bulk_delete';
import type { Methods as Methods_1vw3zbt } from './api/domestic_orders';
import type { Methods as Methods_b9q4np } from './api/domestic_orders/_domestic_order_id@number';
import type { Methods as Methods_p80k7a } from './api/domestic_orders/print_purchase_order';
import type { Methods as Methods_17tyl6l } from './api/email_templates';
import type { Methods as Methods_1i5gfzh } from './api/email_templates/_email_template_id@number';
import type { Methods as Methods_xvjyry } from './api/exchange_contracts';
import type { Methods as Methods_1i1wwq9 } from './api/exchange_contracts/_exchange_contract_id@number';
import type { Methods as Methods_b3sx4r } from './api/export_orders';
import type { Methods as Methods_1mhtrxf } from './api/export_orders/_invoice_no@string';
import type { Methods as Methods_5zgg5v } from './api/export_orders/export_invent';
import type { Methods as Methods_1ofvmlf } from './api/fare_patterns';
import type { Methods as Methods_4bxz9p } from './api/fare_patterns/_fare_pattern_id@number';
import type { Methods as Methods_17hk18q } from './api/files';
import type { Methods as Methods_1tjwj7z } from './api/foreign_currency_balances';
import type { Methods as Methods_pnbu8p } from './api/foreign_currency_management';
import type { Methods as Methods_12evxi } from './api/foreign_currency_management/balance';
import type { Methods as Methods_x8fg1a } from './api/foreign_currency_purchases';
import type { Methods as Methods_188snr4 } from './api/foreign_currency_purchases/_foreign_currency_purchase_id';
import type { Methods as Methods_6dnb8 } from './api/foreign_deposit_receipts';
import type { Methods as Methods_1stqc44 } from './api/foreign_deposit_receipts/create_deposit';
import type { Methods as Methods_2a7k6q } from './api/forwarder_costs';
import type { Methods as Methods_1ve6yzv } from './api/forwarder_costs/_forwarder_cost_id@number';
import type { Methods as Methods_1y72xnb } from './api/forwarder_recruits';
import type { Methods as Methods_1qwcyj1 } from './api/forwarder_recruits/_forwarder_recruit_id@number';
import type { Methods as Methods_1ngz80 } from './api/free_times';
import type { Methods as Methods_1j2sau9 } from './api/free_times/_free_time_id@number';
import type { Methods as Methods_18x16dx } from './api/freight_names';
import type { Methods as Methods_19dtxda } from './api/generic_searches/_search_id@number';
import type { Methods as Methods_1111ebi } from './api/gradings';
import type { Methods as Methods_4kv451 } from './api/gradings/_grading_id@number';
import type { Methods as Methods_1gjdqz3 } from './api/import_costs';
import type { Methods as Methods_ge40bb } from './api/import_costs/_no@string';
import type { Methods as Methods_1fbucig } from './api/import_payments';
import type { Methods as Methods_qqvqv8 } from './api/import_payments/detail';
import type { Methods as Methods_1243qvu } from './api/import_payments/offset';
import type { Methods as Methods_1ncgoug } from './api/import_payments/output_payment_file';
import type { Methods as Methods_99yb81 } from './api/import_payments/print_payment_schedule_check_list';
import type { Methods as Methods_y7zikg } from './api/import_prices/bulk_delete';
import type { Methods as Methods_23oyra } from './api/invent_arrival_history';
import type { Methods as Methods_1k65e0d } from './api/invent_arrival_history_order';
import type { Methods as Methods_ar0npg } from './api/invent_components';
import type { Methods as Methods_lxgr2f } from './api/invent_components/_invent_component_id@number';
import type { Methods as Methods_jd3o97 } from './api/invent_memos';
import type { Methods as Methods_1sgyhnd } from './api/invent_memos/_invent_memo_id@number';
import type { Methods as Methods_1kq6ph1 } from './api/invent_web_cutouts/bulk';
import type { Methods as Methods_j3lfvq } from './api/inventory_result_details';
import type { Methods as Methods_11yy8z8 } from './api/inventory_results';
import type { Methods as Methods_1kgohir } from './api/inventory_results/_inventory_result_id@number';
import type { Methods as Methods_9y6ov4 } from './api/inventory_results/export_list';
import type { Methods as Methods_1nstg1g } from './api/invents';
import type { Methods as Methods_12391tz } from './api/invents/_invent_id@number';
import type { Methods as Methods_u1k3ol } from './api/invents/_invent_id@number/image';
import type { Methods as Methods_13n386z } from './api/invents/_invent_id@number/update_domestic_order_price';
import type { Methods as Methods_1samrrx } from './api/invents/_invent_id@number/update_import_price';
import type { Methods as Methods_uf28mc } from './api/invents/_invent_id@number/update_sales_price';
import type { Methods as Methods_11kq16j } from './api/invents/bulk_insert';
import type { Methods as Methods_1yzam1n } from './api/invents/bulk_update';
import type { Methods as Methods_13niho0 } from './api/invents/bulk_update_async';
import type { Methods as Methods_16wz06w } from './api/invents/export_idm';
import type { Methods as Methods_bsxz29 } from './api/invents/export_jan';
import type { Methods as Methods_ql0721 } from './api/label_boxes';
import type { Methods as Methods_1908li0 } from './api/label_boxes/_label_box_id@number';
import type { Methods as Methods_13zfhse } from './api/liquor_tax_names';
import type { Methods as Methods_14dce7x } from './api/liquor_tax_names/_liquor_tax_name_id@number';
import type { Methods as Methods_1f945pk } from './api/liquor_tax_reports/print_liquor_tax';
import type { Methods as Methods_3ll19x } from './api/liquor_taxes';
import type { Methods as Methods_vbdjy0 } from './api/liquor_taxes/_liquor_tax_id@number';
import type { Methods as Methods_1cigxz9 } from './api/locations';
import type { Methods as Methods_1bsycfh } from './api/locations/_location_id@number';
import type { Methods as Methods_divw6l } from './api/locks';
import type { Methods as Methods_1u6dxdu } from './api/locks/unlock';
import type { Methods as Methods_txvhjm } from './api/locks/unlock_by';
import type { Methods as Methods_bakjrf } from './api/maintenance/down';
import type { Methods as Methods_37cbl6 } from './api/maintenance/up';
import type { Methods as Methods_1mv35ha } from './api/message_group_user_links';
import type { Methods as Methods_1kd8jxh } from './api/message_group_user_links/_message_group_user_link_id@number';
import type { Methods as Methods_1am2667 } from './api/message_groups';
import type { Methods as Methods_1xqslvt } from './api/message_groups/_message_group_id@number';
import type { Methods as Methods_1jw8p0a } from './api/monthly_closings/close';
import type { Methods as Methods_1tla1ib } from './api/monthly_closings/next';
import type { Methods as Methods_mnx317 } from './api/monthly_cost_prices';
import type { Methods as Methods_76wwif } from './api/monthly_sales';
import type { Methods as Methods_pls8j7 } from './api/monthly_sales/arrival_schedule';
import type { Methods as Methods_1sgd813 } from './api/monthly_sales/other_vintage';
import type { Methods as Methods_feejpm } from './api/monthly_sales/print_stockout_vt_change';
import type { Methods as Methods_1xzi3fj } from './api/monthly_transaction_totals';
import type { Methods as Methods_13er6gn } from './api/monthly_transaction_totals/location';
import type { Methods as Methods_t18b3p } from './api/mtx_campaign';
import type { Methods as Methods_1xzdd5b } from './api/mtx_webifmng_weborder';
import type { Methods as Methods_72nb4x } from './api/names';
import type { Methods as Methods_1igz8tv } from './api/order_makers';
import type { Methods as Methods_apntr1 } from './api/order_makers/_order_maker_id@number';
import type { Methods as Methods_1vyl7x7 } from './api/order_notes';
import type { Methods as Methods_dx44v5 } from './api/order_notes/_order_note_id@number';
import type { Methods as Methods_kt45oq } from './api/order_warehouses';
import type { Methods as Methods_1pl6pl9 } from './api/order_warehouses/_order_warehouse_id@number';
import type { Methods as Methods_10ff2s4 } from './api/other_vintage_inquiry';
import type { Methods as Methods_1uzakjx } from './api/page_groups';
import type { Methods as Methods_1cme90t } from './api/page_groups/_page_group_id@number';
import type { Methods as Methods_qplfo6 } from './api/page_lists';
import type { Methods as Methods_1x93pwp } from './api/page_lists/_page_list_id@number';
import type { Methods as Methods_1ags7yg } from './api/page_user_links';
import type { Methods as Methods_1fpgte9 } from './api/pages';
import type { Methods as Methods_1hhj365 } from './api/pages/_page_id@number';
import type { Methods as Methods_jzpg0k } from './api/payable_accounts';
import type { Methods as Methods_17ss5ai } from './api/payment_conditions';
import type { Methods as Methods_4kfwgd } from './api/payment_conditions/_payment_condition_id@number';
import type { Methods as Methods_1o2m18k } from './api/payment_conditions/_payment_condition_id@number/due';
import type { Methods as Methods_1415a3i } from './api/payment_details';
import type { Methods as Methods_1fpgf86 } from './api/payment_results';
import type { Methods as Methods_1l7750x } from './api/payment_results/export';
import type { Methods as Methods_ti8ixu } from './api/payment_schedules';
import type { Methods as Methods_29b9 } from './api/payment_schedules/due_detail';
import type { Methods as Methods_12newds } from './api/payment_schedules/due_index';
import type { Methods as Methods_1tt4uxm } from './api/payment_schedules/print_check_list';
import type { Methods as Methods_buiqr4 } from './api/payment_schedules_payment_date';
import type { Methods as Methods_nxgddy } from './api/payment_schedules_payment_rate';
import type { Methods as Methods_1d37cu6 } from './api/place_of_origin_names';
import type { Methods as Methods_xgt1ez } from './api/place_of_origin_names/_place_of_origin_name_id@number';
import type { Methods as Methods_93kbop } from './api/price_groups';
import type { Methods as Methods_eef47h } from './api/price_groups/_price_group_id@number';
import type { Methods as Methods_17dn0c2 } from './api/printers';
import type { Methods as Methods_1py4z0d } from './api/printers/_printer_id@number';
import type { Methods as Methods_134i57j } from './api/purchase_prices';
import type { Methods as Methods_11hjw1t } from './api/purchase_prices/_purchase_price_id@number';
import type { Methods as Methods_58c8vg } from './api/purchase_prices/_purchase_price_id@number/re_calculate';
import type { Methods as Methods_1xzitpy } from './api/purchase_prices/export';
import type { Methods as Methods_flstsp } from './api/purchase_prices/export_gross_margins';
import type { Methods as Methods_chaixk } from './api/purchase_prices/update_costs';
import type { Methods as Methods_1a35ghm } from './api/purchase_reservations';
import type { Methods as Methods_1olvckj } from './api/purchase_reservations/_purchase_reservation_id@number';
import type { Methods as Methods_1xpao6p } from './api/purchase_reservations/export_arrival_schedule';
import type { Methods as Methods_sefh0z } from './api/purchase_reservations/export_schedule';
import type { Methods as Methods_rctdmx } from './api/purchase_results';
import type { Methods as Methods_x4bdzx } from './api/purchase_results/_purchase_result_id@number';
import type { Methods as Methods_7y2g26 } from './api/rates';
import type { Methods as Methods_s36l7u } from './api/rates/import';
import type { Methods as Methods_y8986e } from './api/receivable_accounts';
import type { Methods as Methods_sh4iqi } from './api/receivable_accounts/print';
import type { Methods as Methods_h005ii } from './api/recent_shipping_histories/with_sales_orders';
import type { Methods as Methods_tixex6 } from './api/reports';
import type { Methods as Methods_16tf5oj } from './api/reports/_report_id@number';
import type { Methods as Methods_104qhb5 } from './api/reservation_and_stocks';
import type { Methods as Methods_110w60e } from './api/reservation_and_stocks/domestic_orders';
import type { Methods as Methods_18kus44 } from './api/reservation_and_stocks/latest_arrival_domestic';
import type { Methods as Methods_vncmii } from './api/reservation_and_stocks/latest_arrival_shipping';
import type { Methods as Methods_1wh2dih } from './api/reservation_and_stocks/oldest_stock_change';
import type { Methods as Methods_7r9dal } from './api/reservation_and_stocks/print';
import type { Methods as Methods_1nauuak } from './api/reservation_and_stocks/shipping_orders';
import type { Methods as Methods_x3247n } from './api/sales_orders';
import type { Methods as Methods_1beqb7x } from './api/sales_orders/_sales_order_id@number';
import type { Methods as Methods_1mfq3xz } from './api/sales_orders/bulk_async';
import type { Methods as Methods_ok0ao0 } from './api/sales_orders/bulk_insert';
import type { Methods as Methods_1ypj8zr } from './api/sales_orders/bulk_insert_async';
import type { Methods as Methods_jd4jy } from './api/sales_orders/export_denpatu';
import type { Methods as Methods_9owpvf } from './api/sales_orders/fare_summary';
import type { Methods as Methods_am7j69 } from './api/sales_orders/get_invent_related';
import type { Methods as Methods_1yym8i3 } from './api/sales_orders/invent_sales';
import type { Methods as Methods_mywtg5 } from './api/sales_orders/invents';
import type { Methods as Methods_198i57f } from './api/sales_orders/print_delivery_guidance';
import type { Methods as Methods_1rqkf33 } from './api/sales_orders/print_delivery_slip';
import type { Methods as Methods_1dmq1vi } from './api/sales_orders/print_physical_stock_request';
import type { Methods as Methods_1lppv48 } from './api/sales_orders/print_purchase_order';
import type { Methods as Methods_qolqah } from './api/sales_orders/print_transfer_request';
import type { Methods as Methods_4m9z7l } from './api/sales_prices/bulk_delete';
import type { Methods as Methods_1bkcai5 } from './api/sales_reservations';
import type { Methods as Methods_13qzozx } from './api/sales_reservations/_sales_reservation_id@number';
import type { Methods as Methods_1dk3ni4 } from './api/sales_reservations/input_assist';
import type { Methods as Methods_1l5v6yp } from './api/sales_stock_details';
import type { Methods as Methods_795m20 } from './api/sales_stock_details/candidates';
import type { Methods as Methods_137e5zx } from './api/sales_stocks';
import type { Methods as Methods_1kgksu5 } from './api/sales_stocks/_sales_stock_id@number';
import type { Methods as Methods_1n3clhv } from './api/sales_stocks/layaway_request_form';
import type { Methods as Methods_17r4ujy } from './api/sanctum/csrf-cookie';
import type { Methods as Methods_1g2ywz7 } from './api/seals';
import type { Methods as Methods_136q9v9 } from './api/seals/_seal_id@number';
import type { Methods as Methods_1miwkay } from './api/search_details';
import type { Methods as Methods_82pp0r } from './api/searches';
import type { Methods as Methods_1vzhyv8 } from './api/searches/_search_id@number';
import type { Methods as Methods_3gnzhh } from './api/ship_companies';
import type { Methods as Methods_1qh1nm0 } from './api/ship_companies/_ship_company_id@number';
import type { Methods as Methods_3hmr15 } from './api/shippable_invents';
import type { Methods as Methods_1nhiaty } from './api/shipping_link/execute';
import type { Methods as Methods_cz2gtt } from './api/shipping_link_histories';
import type { Methods as Methods_1dixrao } from './api/shipping_link_histories/_shipping_link_history_id@number';
import type { Methods as Methods_1ady384 } from './api/shipping_order_detail/get_new_invent_vintage';
import type { Methods as Methods_o24bzt } from './api/shipping_order_details/bulk_update_check_limit_on';
import type { Methods as Methods_173omxf } from './api/shipping_order_details/export_check_limit_on';
import type { Methods as Methods_uff1bn } from './api/shipping_order_details/labels';
import type { Methods as Methods_1lxwben } from './api/shipping_order_documents';
import type { Methods as Methods_ivb8ce } from './api/shipping_order_documents/get_latest_analyzes';
import type { Methods as Methods_mc6l48 } from './api/shipping_order_labels';
import type { Methods as Methods_1x0nph7 } from './api/shipping_order_schedules';
import type { Methods as Methods_b72jhm } from './api/shipping_order_schedules/get_free_times';
import type { Methods as Methods_bmktcn } from './api/shipping_order_schedules/get_imported_on';
import type { Methods as Methods_skm7q9 } from './api/shipping_order_schedules/send_check_limit';
import type { Methods as Methods_abc6ed } from './api/shipping_order_schedules/send_delivery_schedule';
import type { Methods as Methods_1388v7m } from './api/shipping_order_schedules/send_shipping_order';
import type { Methods as Methods_11jc5cj } from './api/shipping_order_schedules/three_week_update';
import type { Methods as Methods_a03ziv } from './api/shipping_order_schedules/weekly';
import type { Methods as Methods_t1s887 } from './api/shipping_orders';
import type { Methods as Methods_b6d88v } from './api/shipping_orders/_no@string';
import type { Methods as Methods_1adlrrc } from './api/shipping_orders/_no@string/check';
import type { Methods as Methods_1yshnn1 } from './api/shipping_orders/_no@string/check_before_completion';
import type { Methods as Methods_8xwwso } from './api/shipping_orders/advance_payments';
import type { Methods as Methods_1ozpl1x } from './api/shipping_orders/amounts';
import type { Methods as Methods_eymdnw } from './api/shipping_orders/bulk_insert';
import type { Methods as Methods_16t0dfi } from './api/shipping_orders/details';
import type { Methods as Methods_1agzsmt } from './api/shipping_orders/fares';
import type { Methods as Methods_dj3jf3 } from './api/shipping_orders/labels';
import type { Methods as Methods_137rqjk } from './api/shipping_orders/labels/export_rbp_label';
import type { Methods as Methods_1ubmjju } from './api/shipping_orders/labels/export_seal';
import type { Methods as Methods_8rf9eo } from './api/shipping_orders/list';
import type { Methods as Methods_ckv4x1 } from './api/shipping_orders/move';
import type { Methods as Methods_wwpyq6 } from './api/shipping_orders/print_collection_request';
import type { Methods as Methods_1n2ohx0 } from './api/shipping_orders/print_order_form/domestic';
import type { Methods as Methods_bxjugg } from './api/shipping_orders/print_order_form/foreign';
import type { Methods as Methods_674ubm } from './api/shipping_reservation_details/_shipping_reservation_detail_id@number/shipping_order_details';
import type { Methods as Methods_1vdv6x5 } from './api/shipping_reservations';
import type { Methods as Methods_tc2cmt } from './api/shipping_reservations/_no@string';
import type { Methods as Methods_1mcn7t6 } from './api/shipping_reservations/bulk_insert';
import type { Methods as Methods_1g12l22 } from './api/shipping_reservations/output_remaining_shipping_reservation';
import type { Methods as Methods_1do3ve1 } from './api/shipping_reservations/print_order_form';
import type { Methods as Methods_10l7jid } from './api/shipping_reservations/vendors_with_remaining_shipping_reservation';
import type { Methods as Methods_1csno8e } from './api/shipping_reservations_summary';
import type { Methods as Methods_1mmtuoh } from './api/special_prices';
import type { Methods as Methods_tqg7w5 } from './api/special_prices/_special_price_id@number';
import type { Methods as Methods_btwo8w } from './api/special_prices/bulk_upsert';
import type { Methods as Methods_c0hubm } from './api/special_prices/calculate';
import type { Methods as Methods_15aznog } from './api/stock_adjustments';
import type { Methods as Methods_gdlmrj } from './api/stock_adjustments/_stock_adjustment_id@number';
import type { Methods as Methods_1lf8aep } from './api/stock_changes';
import type { Methods as Methods_1rbgbq5 } from './api/stock_changes/_stock_change_id@number';
import type { Methods as Methods_10jscdg } from './api/stock_changes/_stock_change_id@number/request_invent_insert';
import type { Methods as Methods_c8mwab } from './api/stock_changes/_stock_change_id@number/request_sales_reservation_stocks_insert';
import type { Methods as Methods_1nalug3 } from './api/stock_changes/print_stock_change_request';
import type { Methods as Methods_11ol7td } from './api/stock_transactions';
import type { Methods as Methods_ffo7bk } from './api/stock_transfers';
import type { Methods as Methods_rwzx93 } from './api/stock_transfers/_stock_transfer_id@number';
import type { Methods as Methods_2iizqi } from './api/stock_transfers/receive';
import type { Methods as Methods_16yz2f8 } from './api/stocks';
import type { Methods as Methods_m52t4l } from './api/stocks/_stock_id@number';
import type { Methods as Methods_de4tzr } from './api/sub_account_titles';
import type { Methods as Methods_1h2nfvp } from './api/sub_account_titles/_sub_account_title_id@number';
import type { Methods as Methods_1arxx4l } from './api/tables/_table_id@string';
import type { Methods as Methods_1o9zp0q } from './api/tax_payments';
import type { Methods as Methods_yy6yu2 } from './api/team_user_links';
import type { Methods as Methods_j9566n } from './api/team_user_links/_team_user_link_id@number';
import type { Methods as Methods_ay0ypn } from './api/teams';
import type { Methods as Methods_17ee4ap } from './api/teams/_team_id@number';
import type { Methods as Methods_1b7rjia } from './api/ttm_rates';
import type { Methods as Methods_fsxkjy } from './api/user_logs';
import type { Methods as Methods_lrzobn } from './api/user_logs/_user_log_id@number';
import type { Methods as Methods_13tgfop } from './api/user_logs/_user_log_id@number/output';
import type { Methods as Methods_fbem1r } from './api/user_logs/_user_log_id@number/restart';
import type { Methods as Methods_80a9vt } from './api/users';
import type { Methods as Methods_8cxs5p } from './api/users/_user_id@number';
import type { Methods as Methods_rr90cm } from './api/vendor_staffs/bulk';
import type { Methods as Methods_iucwhi } from './api/vendors';
import type { Methods as Methods_136xnz7 } from './api/vendors/_vendor_id@number';
import type { Methods as Methods_77thft } from './api/vendors/bulk_insert';
import type { Methods as Methods_m55rgt } from './api/vendors/bulk_update';
import type { Methods as Methods_c6rhui } from './api/villages';
import type { Methods as Methods_1ygxp21 } from './api/villages/_village_id@number';
import type { Methods as Methods_1jweeqc } from './api/web_sales_orders/import';
import type { Methods as Methods_24yjnv } from './api/web_sales_orders/import_async';
import type { Methods as Methods_1jrctgr } from './api/wine_areas';
import type { Methods as Methods_fp6xqt } from './api/wine_areas/_wine_area_id@number';
import type { Methods as Methods_1gp26ha } from './api/wine_areas/_wine_area_id@number/example_operation';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:80' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/account_titles';
  const PATH1 = '/api/account_transfer_receipts';
  const PATH2 = '/api/account_transfer_receipts/create_deposit';
  const PATH3 = '/api/account_transfer_receipts/print';
  const PATH4 = '/api/account_transfer_requests';
  const PATH5 = '/api/account_transfer_requests/create';
  const PATH6 = '/api/account_transfer_requests/export';
  const PATH7 = '/api/account_transfer_requests/show';
  const PATH8 = '/api/additional_payments';
  const PATH9 = '/api/additives';
  const PATH10 = '/api/areas';
  const PATH11 = '/api/arrival_scheduled_stocks';
  const PATH12 = '/api/assistants';
  const PATH13 = '/api/auth';
  const PATH14 = '/api/auth/login';
  const PATH15 = '/api/auth/logout';
  const PATH16 = '/api/balance_books';
  const PATH17 = '/api/balance_books/print_invoice';
  const PATH18 = '/api/bank_accounts';
  const PATH19 = '/api/bank_transfer_receipts';
  const PATH20 = '/api/bank_transfer_receipts/create_deposit';
  const PATH21 = '/api/base_locations';
  const PATH22 = '/api/batch_authorities';
  const PATH23 = '/api/batch_calendars';
  const PATH24 = '/api/batch_displays';
  const PATH25 = '/api/batch_histories';
  const PATH26 = '/api/batch_parameters';
  const PATH27 = '/api/batch_schedules';
  const PATH28 = '/api/batches';
  const PATH29 = '/api/bill_closings';
  const PATH30 = '/api/bill_closings/bulk_async';
  const PATH31 = '/api/bill_results';
  const PATH32 = '/api/bill_results/print';
  const PATH33 = '/api/bill_total_groups';
  const PATH34 = '/api/bills/print';
  const PATH35 = '/api/bottle_sizes';
  const PATH36 = '/api/calendars';
  const PATH37 = '/api/cash_on_deliveries';
  const PATH38 = '/api/cash_on_deliveries/create_deposit';
  const PATH39 = '/api/consignees';
  const PATH40 = '/api/contract_stocks';
  const PATH41 = '/api/controls';
  const PATH42 = '/api/cost_prices/export_cost_price_data';
  const PATH43 = '/api/cost_prices/import_cost_price_data';
  const PATH44 = '/api/cost_subjects';
  const PATH45 = '/api/costs/bulk_insert';
  const PATH46 = '/api/costs/bulk_insert_check_amount';
  const PATH47 = '/api/costs/bulk_insert_custom';
  const PATH48 = '/api/country_grading_links';
  const PATH49 = '/api/country_of_origins';
  const PATH50 = '/api/country_place_name_links';
  const PATH51 = '/api/country_village_links';
  const PATH52 = '/api/customer_credits/bulk';
  const PATH53 = '/api/customer_group_invents';
  const PATH54 = '/api/customer_groups';
  const PATH55 = '/api/customer_invents';
  const PATH56 = '/api/customer_sales/bulk';
  const PATH57 = '/api/customer_staffs/bulk';
  const PATH58 = '/api/customers';
  const PATH59 = '/inquire_haisou';
  const PATH60 = '/api/customers/bulk_insert';
  const PATH61 = '/api/customers/bulk_update';
  const PATH62 = '/api/customers/next_idm';
  const PATH63 = '/api/customs_duties';
  const PATH64 = '/api/deposit_results';
  const PATH65 = '/api/deposit_results/execute_clearing';
  const PATH66 = '/api/deposit_results/schedule';
  const PATH67 = '/api/deposit_schedules';
  const PATH68 = '/api/deposit_schedules/diff_customers';
  const PATH69 = '/api/deposit_schedules/make_zero_schedule';
  const PATH70 = '/api/domestic_order_prices/bulk_delete';
  const PATH71 = '/api/domestic_orders';
  const PATH72 = '/api/domestic_orders/print_purchase_order';
  const PATH73 = '/api/email_templates';
  const PATH74 = '/api/exchange_contracts';
  const PATH75 = '/api/export_orders';
  const PATH76 = '/api/export_orders/export_invent';
  const PATH77 = '/api/fare_patterns';
  const PATH78 = '/api/files';
  const PATH79 = '/api/foreign_currency_balances';
  const PATH80 = '/api/foreign_currency_management';
  const PATH81 = '/api/foreign_currency_management/balance';
  const PATH82 = '/api/foreign_currency_purchases';
  const PATH83 = '/api/foreign_deposit_receipts';
  const PATH84 = '/api/foreign_deposit_receipts/create_deposit';
  const PATH85 = '/api/forwarder_costs';
  const PATH86 = '/api/forwarder_recruits';
  const PATH87 = '/api/free_times';
  const PATH88 = '/api/freight_names';
  const PATH89 = '/api/generic_searches';
  const PATH90 = '/api/gradings';
  const PATH91 = '/api/import_costs';
  const PATH92 = '/api/import_payments';
  const PATH93 = '/api/import_payments/detail';
  const PATH94 = '/api/import_payments/offset';
  const PATH95 = '/api/import_payments/output_payment_file';
  const PATH96 = '/api/import_payments/print_payment_schedule_check_list';
  const PATH97 = '/api/import_prices/bulk_delete';
  const PATH98 = '/api/invent_arrival_history';
  const PATH99 = '/api/invent_arrival_history_order';
  const PATH100 = '/api/invent_components';
  const PATH101 = '/api/invent_memos';
  const PATH102 = '/api/invent_web_cutouts/bulk';
  const PATH103 = '/api/inventory_result_details';
  const PATH104 = '/api/inventory_results';
  const PATH105 = '/api/inventory_results/export_list';
  const PATH106 = '/api/invents';
  const PATH107 = '/image';
  const PATH108 = '/update_domestic_order_price';
  const PATH109 = '/update_import_price';
  const PATH110 = '/update_sales_price';
  const PATH111 = '/api/invents/bulk_insert';
  const PATH112 = '/api/invents/bulk_update';
  const PATH113 = '/api/invents/bulk_update_async';
  const PATH114 = '/api/invents/export_idm';
  const PATH115 = '/api/invents/export_jan';
  const PATH116 = '/api/label_boxes';
  const PATH117 = '/api/liquor_tax_names';
  const PATH118 = '/api/liquor_tax_reports/print_liquor_tax';
  const PATH119 = '/api/liquor_taxes';
  const PATH120 = '/api/locations';
  const PATH121 = '/api/locks';
  const PATH122 = '/api/locks/unlock';
  const PATH123 = '/api/locks/unlock_by';
  const PATH124 = '/api/maintenance/down';
  const PATH125 = '/api/maintenance/up';
  const PATH126 = '/api/message_group_user_links';
  const PATH127 = '/api/message_groups';
  const PATH128 = '/api/monthly_closings/close';
  const PATH129 = '/api/monthly_closings/next';
  const PATH130 = '/api/monthly_cost_prices';
  const PATH131 = '/api/monthly_sales';
  const PATH132 = '/api/monthly_sales/arrival_schedule';
  const PATH133 = '/api/monthly_sales/other_vintage';
  const PATH134 = '/api/monthly_sales/print_stockout_vt_change';
  const PATH135 = '/api/monthly_transaction_totals';
  const PATH136 = '/api/monthly_transaction_totals/location';
  const PATH137 = '/api/mtx_campaign';
  const PATH138 = '/api/mtx_webifmng_weborder';
  const PATH139 = '/api/names';
  const PATH140 = '/api/order_makers';
  const PATH141 = '/api/order_notes';
  const PATH142 = '/api/order_warehouses';
  const PATH143 = '/api/other_vintage_inquiry';
  const PATH144 = '/api/page_groups';
  const PATH145 = '/api/page_lists';
  const PATH146 = '/api/page_user_links';
  const PATH147 = '/api/pages';
  const PATH148 = '/api/payable_accounts';
  const PATH149 = '/api/payment_conditions';
  const PATH150 = '/due';
  const PATH151 = '/api/payment_details';
  const PATH152 = '/api/payment_results';
  const PATH153 = '/api/payment_results/export';
  const PATH154 = '/api/payment_schedules';
  const PATH155 = '/api/payment_schedules/due_detail';
  const PATH156 = '/api/payment_schedules/due_index';
  const PATH157 = '/api/payment_schedules/print_check_list';
  const PATH158 = '/api/payment_schedules_payment_date';
  const PATH159 = '/api/payment_schedules_payment_rate';
  const PATH160 = '/api/place_of_origin_names';
  const PATH161 = '/api/price_groups';
  const PATH162 = '/api/printers';
  const PATH163 = '/api/purchase_prices';
  const PATH164 = '/re_calculate';
  const PATH165 = '/api/purchase_prices/export';
  const PATH166 = '/api/purchase_prices/export_gross_margins';
  const PATH167 = '/api/purchase_prices/update_costs';
  const PATH168 = '/api/purchase_reservations';
  const PATH169 = '/api/purchase_reservations/export_arrival_schedule';
  const PATH170 = '/api/purchase_reservations/export_schedule';
  const PATH171 = '/api/purchase_results';
  const PATH172 = '/api/rates';
  const PATH173 = '/api/rates/import';
  const PATH174 = '/api/receivable_accounts';
  const PATH175 = '/api/receivable_accounts/print';
  const PATH176 = '/api/recent_shipping_histories/with_sales_orders';
  const PATH177 = '/api/reports';
  const PATH178 = '/api/reservation_and_stocks';
  const PATH179 = '/api/reservation_and_stocks/domestic_orders';
  const PATH180 = '/api/reservation_and_stocks/latest_arrival_domestic';
  const PATH181 = '/api/reservation_and_stocks/latest_arrival_shipping';
  const PATH182 = '/api/reservation_and_stocks/oldest_stock_change';
  const PATH183 = '/api/reservation_and_stocks/print';
  const PATH184 = '/api/reservation_and_stocks/shipping_orders';
  const PATH185 = '/api/sales_orders';
  const PATH186 = '/api/sales_orders/bulk_async';
  const PATH187 = '/api/sales_orders/bulk_insert';
  const PATH188 = '/api/sales_orders/bulk_insert_async';
  const PATH189 = '/api/sales_orders/export_denpatu';
  const PATH190 = '/api/sales_orders/fare_summary';
  const PATH191 = '/api/sales_orders/get_invent_related';
  const PATH192 = '/api/sales_orders/invent_sales';
  const PATH193 = '/api/sales_orders/invents';
  const PATH194 = '/api/sales_orders/print_delivery_guidance';
  const PATH195 = '/api/sales_orders/print_delivery_slip';
  const PATH196 = '/api/sales_orders/print_physical_stock_request';
  const PATH197 = '/api/sales_orders/print_purchase_order';
  const PATH198 = '/api/sales_orders/print_transfer_request';
  const PATH199 = '/api/sales_prices/bulk_delete';
  const PATH200 = '/api/sales_reservations';
  const PATH201 = '/api/sales_reservations/input_assist';
  const PATH202 = '/api/sales_stock_details';
  const PATH203 = '/api/sales_stock_details/candidates';
  const PATH204 = '/api/sales_stocks';
  const PATH205 = '/api/sales_stocks/layaway_request_form';
  const PATH206 = '/api/sanctum/csrf-cookie';
  const PATH207 = '/api/seals';
  const PATH208 = '/api/search_details';
  const PATH209 = '/api/searches';
  const PATH210 = '/api/ship_companies';
  const PATH211 = '/api/shippable_invents';
  const PATH212 = '/api/shipping_link/execute';
  const PATH213 = '/api/shipping_link_histories';
  const PATH214 = '/api/shipping_order_detail/get_new_invent_vintage';
  const PATH215 = '/api/shipping_order_details/bulk_update_check_limit_on';
  const PATH216 = '/api/shipping_order_details/export_check_limit_on';
  const PATH217 = '/api/shipping_order_details/labels';
  const PATH218 = '/api/shipping_order_documents';
  const PATH219 = '/api/shipping_order_documents/get_latest_analyzes';
  const PATH220 = '/api/shipping_order_labels';
  const PATH221 = '/api/shipping_order_schedules';
  const PATH222 = '/api/shipping_order_schedules/get_free_times';
  const PATH223 = '/api/shipping_order_schedules/get_imported_on';
  const PATH224 = '/api/shipping_order_schedules/send_check_limit';
  const PATH225 = '/api/shipping_order_schedules/send_delivery_schedule';
  const PATH226 = '/api/shipping_order_schedules/send_shipping_order';
  const PATH227 = '/api/shipping_order_schedules/three_week_update';
  const PATH228 = '/api/shipping_order_schedules/weekly';
  const PATH229 = '/api/shipping_orders';
  const PATH230 = '/check';
  const PATH231 = '/check_before_completion';
  const PATH232 = '/api/shipping_orders/advance_payments';
  const PATH233 = '/api/shipping_orders/amounts';
  const PATH234 = '/api/shipping_orders/bulk_insert';
  const PATH235 = '/api/shipping_orders/details';
  const PATH236 = '/api/shipping_orders/fares';
  const PATH237 = '/api/shipping_orders/labels';
  const PATH238 = '/api/shipping_orders/labels/export_rbp_label';
  const PATH239 = '/api/shipping_orders/labels/export_seal';
  const PATH240 = '/api/shipping_orders/list';
  const PATH241 = '/api/shipping_orders/move';
  const PATH242 = '/api/shipping_orders/print_collection_request';
  const PATH243 = '/api/shipping_orders/print_order_form/domestic';
  const PATH244 = '/api/shipping_orders/print_order_form/foreign';
  const PATH245 = '/api/shipping_reservation_details';
  const PATH246 = '/shipping_order_details';
  const PATH247 = '/api/shipping_reservations';
  const PATH248 = '/api/shipping_reservations/bulk_insert';
  const PATH249 = '/api/shipping_reservations/output_remaining_shipping_reservation';
  const PATH250 = '/api/shipping_reservations/print_order_form';
  const PATH251 = '/api/shipping_reservations/vendors_with_remaining_shipping_reservation';
  const PATH252 = '/api/shipping_reservations_summary';
  const PATH253 = '/api/special_prices';
  const PATH254 = '/api/special_prices/bulk_upsert';
  const PATH255 = '/api/special_prices/calculate';
  const PATH256 = '/api/stock_adjustments';
  const PATH257 = '/api/stock_changes';
  const PATH258 = '/request_invent_insert';
  const PATH259 = '/request_sales_reservation_stocks_insert';
  const PATH260 = '/api/stock_changes/print_stock_change_request';
  const PATH261 = '/api/stock_transactions';
  const PATH262 = '/api/stock_transfers';
  const PATH263 = '/api/stock_transfers/receive';
  const PATH264 = '/api/stocks';
  const PATH265 = '/api/sub_account_titles';
  const PATH266 = '/api/tables';
  const PATH267 = '/api/tax_payments';
  const PATH268 = '/api/team_user_links';
  const PATH269 = '/api/teams';
  const PATH270 = '/api/ttm_rates';
  const PATH271 = '/api/user_logs';
  const PATH272 = '/output';
  const PATH273 = '/restart';
  const PATH274 = '/api/users';
  const PATH275 = '/api/vendor_staffs/bulk';
  const PATH276 = '/api/vendors';
  const PATH277 = '/api/vendors/bulk_insert';
  const PATH278 = '/api/vendors/bulk_update';
  const PATH279 = '/api/villages';
  const PATH280 = '/api/web_sales_orders/import';
  const PATH281 = '/api/web_sales_orders/import_async';
  const PATH282 = '/api/wine_areas';
  const PATH283 = '/example_operation';
  const GET = 'GET';
  const POST = 'POST';
  const PUT = 'PUT';

  return {
    api: {
      account_titles: {
        _account_title_id: (val2: number) => {
          const prefix2 = `${PATH0}/${val2}`;

          return {
            /**
             * 勘定科目を取得します
             * @returns OK
             */
            get: (option?: { query?: Methods_89egwl['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_89egwl['get']['resBody'], BasicHeaders, Methods_89egwl['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * 勘定科目を取得します
             * @returns OK
             */
            $get: (option?: { query?: Methods_89egwl['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_89egwl['get']['resBody'], BasicHeaders, Methods_89egwl['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_89egwl['get']['query'] } | undefined) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          };
        },
        /**
         * 勘定科目一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_1lh9l08['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1lh9l08['get']['resBody'], BasicHeaders, Methods_1lh9l08['get']['status']>(prefix, PATH0, GET, option).json(),
        /**
         * 勘定科目一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_1lh9l08['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1lh9l08['get']['resBody'], BasicHeaders, Methods_1lh9l08['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_1lh9l08['get']['query'] } | undefined) =>
          `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      account_transfer_receipts: {
        create_deposit: {
          /**
           * 入荷予定に紐づいて、在庫・仕入計上予定を更新します。更新のみ可能です。
           * @returns OK
           */
          post: (option: { body: Methods_p5m3c['post']['reqBody'], query?: Methods_p5m3c['post']['query'] | undefined, config?: T | undefined }) =>
            fetch<Methods_p5m3c['post']['resBody'], BasicHeaders, Methods_p5m3c['post']['status']>(prefix, PATH2, POST, option).json(),
          /**
           * 入荷予定に紐づいて、在庫・仕入計上予定を更新します。更新のみ可能です。
           * @returns OK
           */
          $post: (option: { body: Methods_p5m3c['post']['reqBody'], query?: Methods_p5m3c['post']['query'] | undefined, config?: T | undefined }) =>
            fetch<Methods_p5m3c['post']['resBody'], BasicHeaders, Methods_p5m3c['post']['status']>(prefix, PATH2, POST, option).json().then(r => r.body),
          $path: (option?: { method: 'post'; query: Methods_p5m3c['post']['query'] } | undefined) =>
            `${prefix}${PATH2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
        print: {
          /**
           * 口座振替不能一覧データを出力します
           */
          post: (option: { body: Methods_6eecu0['post']['reqBody'], query?: Methods_6eecu0['post']['query'] | undefined, config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_6eecu0['post']['status']>(prefix, PATH3, POST, option).send(),
          /**
           * 口座振替不能一覧データを出力します
           */
          $post: (option: { body: Methods_6eecu0['post']['reqBody'], query?: Methods_6eecu0['post']['query'] | undefined, config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_6eecu0['post']['status']>(prefix, PATH3, POST, option).send().then(r => r.body),
          $path: (option?: { method: 'post'; query: Methods_6eecu0['post']['query'] } | undefined) =>
            `${prefix}${PATH3}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
        /**
         * 口座振替結果データを取り込みます
         * @returns OK
         */
        post: (option: { body: Methods_saagxk['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_saagxk['post']['resBody'], BasicHeaders, Methods_saagxk['post']['status']>(prefix, PATH1, POST, option, 'FormData').json(),
        /**
         * 口座振替結果データを取り込みます
         * @returns OK
         */
        $post: (option: { body: Methods_saagxk['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_saagxk['post']['resBody'], BasicHeaders, Methods_saagxk['post']['status']>(prefix, PATH1, POST, option, 'FormData').json().then(r => r.body),
        /**
         * 口座振替データ受信一覧データを取得します
         * @returns OK
         */
        get: (option: { query: Methods_saagxk['get']['query'], config?: T | undefined }) =>
          fetch<Methods_saagxk['get']['resBody'], BasicHeaders, Methods_saagxk['get']['status']>(prefix, PATH1, GET, option).json(),
        /**
         * 口座振替データ受信一覧データを取得します
         * @returns OK
         */
        $get: (option: { query: Methods_saagxk['get']['query'], config?: T | undefined }) =>
          fetch<Methods_saagxk['get']['resBody'], BasicHeaders, Methods_saagxk['get']['status']>(prefix, PATH1, GET, option).json().then(r => r.body),
        /**
         * 口座振替データ受信を削除します。
         * @returns OK
         */
        put: (option: { body: Methods_saagxk['put']['reqBody'], query?: Methods_saagxk['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_saagxk['put']['resBody'], BasicHeaders, Methods_saagxk['put']['status']>(prefix, PATH1, PUT, option).json(),
        /**
         * 口座振替データ受信を削除します。
         * @returns OK
         */
        $put: (option: { body: Methods_saagxk['put']['reqBody'], query?: Methods_saagxk['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_saagxk['put']['resBody'], BasicHeaders, Methods_saagxk['put']['status']>(prefix, PATH1, PUT, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_saagxk['get']['query'] } | { method: 'put'; query: Methods_saagxk['put']['query'] } | undefined) =>
          `${prefix}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      account_transfer_requests: {
        create: {
          /**
           * 口座振替依頼データを作成します。
           */
          post: (option: { body: Methods_4xpjs['post']['reqBody'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_4xpjs['post']['status']>(prefix, PATH5, POST, option).send(),
          /**
           * 口座振替依頼データを作成します。
           */
          $post: (option: { body: Methods_4xpjs['post']['reqBody'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_4xpjs['post']['status']>(prefix, PATH5, POST, option).send().then(r => r.body),
          $path: () => `${prefix}${PATH5}`,
        },
        export: {
          /**
           * 口座振替依頼データを出力します。
           */
          post: (option: { body: Methods_asfp2y['post']['reqBody'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_asfp2y['post']['status']>(prefix, PATH6, POST, option).send(),
          /**
           * 口座振替依頼データを出力します。
           */
          $post: (option: { body: Methods_asfp2y['post']['reqBody'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_asfp2y['post']['status']>(prefix, PATH6, POST, option).send().then(r => r.body),
          $path: () => `${prefix}${PATH6}`,
        },
        show: {
          /**
           * 口座振替データ一覧を取得します
           * @returns OK
           */
          get: (option: { query: Methods_1uo9wat['get']['query'], config?: T | undefined }) =>
            fetch<Methods_1uo9wat['get']['resBody'], BasicHeaders, Methods_1uo9wat['get']['status']>(prefix, PATH7, GET, option).json(),
          /**
           * 口座振替データ一覧を取得します
           * @returns OK
           */
          $get: (option: { query: Methods_1uo9wat['get']['query'], config?: T | undefined }) =>
            fetch<Methods_1uo9wat['get']['resBody'], BasicHeaders, Methods_1uo9wat['get']['status']>(prefix, PATH7, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_1uo9wat['get']['query'] } | undefined) =>
            `${prefix}${PATH7}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
        /**
         * 口座振替依頼一覧データを取得します
         * @returns OK
         */
        get: (option: { query: Methods_p1u363['get']['query'], config?: T | undefined }) =>
          fetch<Methods_p1u363['get']['resBody'], BasicHeaders, Methods_p1u363['get']['status']>(prefix, PATH4, GET, option).json(),
        /**
         * 口座振替依頼一覧データを取得します
         * @returns OK
         */
        $get: (option: { query: Methods_p1u363['get']['query'], config?: T | undefined }) =>
          fetch<Methods_p1u363['get']['resBody'], BasicHeaders, Methods_p1u363['get']['status']>(prefix, PATH4, GET, option).json().then(r => r.body),
        /**
         * 口座振替依頼を追加更新削除します。
         * @returns OK
         */
        put: (option: { body: Methods_p1u363['put']['reqBody'], query?: Methods_p1u363['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_p1u363['put']['resBody'], BasicHeaders, Methods_p1u363['put']['status']>(prefix, PATH4, PUT, option).json(),
        /**
         * 口座振替依頼を追加更新削除します。
         * @returns OK
         */
        $put: (option: { body: Methods_p1u363['put']['reqBody'], query?: Methods_p1u363['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_p1u363['put']['resBody'], BasicHeaders, Methods_p1u363['put']['status']>(prefix, PATH4, PUT, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_p1u363['get']['query'] } | { method: 'put'; query: Methods_p1u363['put']['query'] } | undefined) =>
          `${prefix}${PATH4}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      additional_payments: {
        /**
         * 国内支払追加支払内訳一覧を返します
         * @returns OK
         */
        get: (option?: { query?: Methods_b4uqr4['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_b4uqr4['get']['resBody'], BasicHeaders, Methods_b4uqr4['get']['status']>(prefix, PATH8, GET, option).json(),
        /**
         * 国内支払追加支払内訳一覧を返します
         * @returns OK
         */
        $get: (option?: { query?: Methods_b4uqr4['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_b4uqr4['get']['resBody'], BasicHeaders, Methods_b4uqr4['get']['status']>(prefix, PATH8, GET, option).json().then(r => r.body),
        /**
         * 国内支払追加支払内訳を追加更新削除します。
         * @returns OK
         */
        put: (option: { body: Methods_b4uqr4['put']['reqBody'], query?: Methods_b4uqr4['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_b4uqr4['put']['resBody'], BasicHeaders, Methods_b4uqr4['put']['status']>(prefix, PATH8, PUT, option).json(),
        /**
         * 国内支払追加支払内訳を追加更新削除します。
         * @returns OK
         */
        $put: (option: { body: Methods_b4uqr4['put']['reqBody'], query?: Methods_b4uqr4['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_b4uqr4['put']['resBody'], BasicHeaders, Methods_b4uqr4['put']['status']>(prefix, PATH8, PUT, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_b4uqr4['get']['query'] } | { method: 'put'; query: Methods_b4uqr4['put']['query'] } | undefined) =>
          `${prefix}${PATH8}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      additives: {
        _additive_id: (val2: number) => {
          const prefix2 = `${PATH9}/${val2}`;

          return {
            /**
             * 添加物を取得します
             * @returns OK
             */
            get: (option?: { query?: Methods_1emqkx7['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_1emqkx7['get']['resBody'], BasicHeaders, Methods_1emqkx7['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * 添加物を取得します
             * @returns OK
             */
            $get: (option?: { query?: Methods_1emqkx7['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_1emqkx7['get']['resBody'], BasicHeaders, Methods_1emqkx7['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_1emqkx7['get']['query'] } | undefined) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          };
        },
        /**
         * 添加物一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_gdpp6c['get']['query'], config?: T | undefined }) =>
          fetch<Methods_gdpp6c['get']['resBody'], BasicHeaders, Methods_gdpp6c['get']['status']>(prefix, PATH9, GET, option).json(),
        /**
         * 添加物一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_gdpp6c['get']['query'], config?: T | undefined }) =>
          fetch<Methods_gdpp6c['get']['resBody'], BasicHeaders, Methods_gdpp6c['get']['status']>(prefix, PATH9, GET, option).json().then(r => r.body),
        /**
         * 添加物を追加更新削除します。
         * @returns OK
         */
        put: (option: { body: Methods_gdpp6c['put']['reqBody'], query?: Methods_gdpp6c['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_gdpp6c['put']['resBody'], BasicHeaders, Methods_gdpp6c['put']['status']>(prefix, PATH9, PUT, option).json(),
        /**
         * 添加物を追加更新削除します。
         * @returns OK
         */
        $put: (option: { body: Methods_gdpp6c['put']['reqBody'], query?: Methods_gdpp6c['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_gdpp6c['put']['resBody'], BasicHeaders, Methods_gdpp6c['put']['status']>(prefix, PATH9, PUT, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_gdpp6c['get']['query'] } | { method: 'put'; query: Methods_gdpp6c['put']['query'] } | undefined) =>
          `${prefix}${PATH9}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      areas: {
        _area_id: (val2: number) => {
          const prefix2 = `${PATH10}/${val2}`;

          return {
            /**
             * 地区を取得します
             * @returns OK
             */
            get: (option?: { query?: Methods_1uj11ql['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_1uj11ql['get']['resBody'], BasicHeaders, Methods_1uj11ql['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * 地区を取得します
             * @returns OK
             */
            $get: (option?: { query?: Methods_1uj11ql['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_1uj11ql['get']['resBody'], BasicHeaders, Methods_1uj11ql['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_1uj11ql['get']['query'] } | undefined) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          };
        },
        /**
         * 地区一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_1gju813['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1gju813['get']['resBody'], BasicHeaders, Methods_1gju813['get']['status']>(prefix, PATH10, GET, option).json(),
        /**
         * 地区一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_1gju813['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1gju813['get']['resBody'], BasicHeaders, Methods_1gju813['get']['status']>(prefix, PATH10, GET, option).json().then(r => r.body),
        /**
         * 地区を追加更新削除します。
         * @returns OK
         */
        put: (option: { body: Methods_1gju813['put']['reqBody'], query?: Methods_1gju813['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1gju813['put']['resBody'], BasicHeaders, Methods_1gju813['put']['status']>(prefix, PATH10, PUT, option).json(),
        /**
         * 地区を追加更新削除します。
         * @returns OK
         */
        $put: (option: { body: Methods_1gju813['put']['reqBody'], query?: Methods_1gju813['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1gju813['put']['resBody'], BasicHeaders, Methods_1gju813['put']['status']>(prefix, PATH10, PUT, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_1gju813['get']['query'] } | { method: 'put'; query: Methods_1gju813['put']['query'] } | undefined) =>
          `${prefix}${PATH10}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      arrival_scheduled_stocks: {
        /**
         * 入荷予定一覧データを取得します
         * @returns OK
         */
        get: (option?: { query?: Methods_1wnryle['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_1wnryle['get']['resBody'], BasicHeaders, Methods_1wnryle['get']['status']>(prefix, PATH11, GET, option).json(),
        /**
         * 入荷予定一覧データを取得します
         * @returns OK
         */
        $get: (option?: { query?: Methods_1wnryle['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_1wnryle['get']['resBody'], BasicHeaders, Methods_1wnryle['get']['status']>(prefix, PATH11, GET, option).json().then(r => r.body),
        /**
         * 入荷予定に紐づいて、在庫・仕入計上予定を更新します。更新のみ可能です。
         * @returns OK
         */
        put: (option: { body: Methods_1wnryle['put']['reqBody'], query?: Methods_1wnryle['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1wnryle['put']['resBody'], BasicHeaders, Methods_1wnryle['put']['status']>(prefix, PATH11, PUT, option).json(),
        /**
         * 入荷予定に紐づいて、在庫・仕入計上予定を更新します。更新のみ可能です。
         * @returns OK
         */
        $put: (option: { body: Methods_1wnryle['put']['reqBody'], query?: Methods_1wnryle['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1wnryle['put']['resBody'], BasicHeaders, Methods_1wnryle['put']['status']>(prefix, PATH11, PUT, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_1wnryle['get']['query'] } | { method: 'put'; query: Methods_1wnryle['put']['query'] } | undefined) =>
          `${prefix}${PATH11}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      assistants: {
        _assistant_id: (val2: number) => {
          const prefix2 = `${PATH12}/${val2}`;

          return {
            /**
             * 担当アシスタントを取得します
             * @returns OK
             */
            get: (option?: { query?: Methods_1bybmg5['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_1bybmg5['get']['resBody'], BasicHeaders, Methods_1bybmg5['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * 担当アシスタントを取得します
             * @returns OK
             */
            $get: (option?: { query?: Methods_1bybmg5['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_1bybmg5['get']['resBody'], BasicHeaders, Methods_1bybmg5['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_1bybmg5['get']['query'] } | undefined) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          };
        },
        /**
         * 担当アシスタント一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_61e46['get']['query'], config?: T | undefined }) =>
          fetch<Methods_61e46['get']['resBody'], BasicHeaders, Methods_61e46['get']['status']>(prefix, PATH12, GET, option).json(),
        /**
         * 担当アシスタント一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_61e46['get']['query'], config?: T | undefined }) =>
          fetch<Methods_61e46['get']['resBody'], BasicHeaders, Methods_61e46['get']['status']>(prefix, PATH12, GET, option).json().then(r => r.body),
        /**
         * 担当アシスタントを追加更新削除します。
         * @returns OK
         */
        put: (option: { body: Methods_61e46['put']['reqBody'], query?: Methods_61e46['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_61e46['put']['resBody'], BasicHeaders, Methods_61e46['put']['status']>(prefix, PATH12, PUT, option).json(),
        /**
         * 担当アシスタントを追加更新削除します。
         * @returns OK
         */
        $put: (option: { body: Methods_61e46['put']['reqBody'], query?: Methods_61e46['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_61e46['put']['resBody'], BasicHeaders, Methods_61e46['put']['status']>(prefix, PATH12, PUT, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_61e46['get']['query'] } | { method: 'put'; query: Methods_61e46['put']['query'] } | undefined) =>
          `${prefix}${PATH12}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      auth: {
        login: {
          /**
           * ログインします。
           */
          post: (option: { body: Methods_1v9mws3['post']['reqBody'], config?: T | undefined }) =>
            fetch<void, Methods_1v9mws3['post']['resHeaders'], Methods_1v9mws3['post']['status']>(prefix, PATH14, POST, option).send(),
          /**
           * ログインします。
           */
          $post: (option: { body: Methods_1v9mws3['post']['reqBody'], config?: T | undefined }) =>
            fetch<void, Methods_1v9mws3['post']['resHeaders'], Methods_1v9mws3['post']['status']>(prefix, PATH14, POST, option).send().then(r => r.body),
          $path: () => `${prefix}${PATH14}`,
        },
        logout: {
          /**
           * ログアウトします。
           */
          post: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods_1l8ghuo['post']['status']>(prefix, PATH15, POST, option).send(),
          /**
           * ログアウトします。
           */
          $post: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods_1l8ghuo['post']['status']>(prefix, PATH15, POST, option).send().then(r => r.body),
          $path: () => `${prefix}${PATH15}`,
        },
        /**
         * ユーザー情報を取得します。
         * @returns OK
         */
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_16cedj1['get']['resBody'], BasicHeaders, Methods_16cedj1['get']['status']>(prefix, PATH13, GET, option).json(),
        /**
         * ユーザー情報を取得します。
         * @returns OK
         */
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_16cedj1['get']['resBody'], BasicHeaders, Methods_16cedj1['get']['status']>(prefix, PATH13, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH13}`,
      },
      balance_books: {
        _invoice_no: (val2: string) => {
          const prefix2 = `${PATH16}/${val2}`;

          return {
            /**
             * BalanceBookを取得します
             * @returns OK
             */
            get: (option?: { query?: Methods_14nt2d2['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_14nt2d2['get']['resBody'], BasicHeaders, Methods_14nt2d2['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * BalanceBookを取得します
             * @returns OK
             */
            $get: (option?: { query?: Methods_14nt2d2['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_14nt2d2['get']['resBody'], BasicHeaders, Methods_14nt2d2['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_14nt2d2['get']['query'] } | undefined) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          };
        },
        print_invoice: {
          /**
           * Invoice帳票を出力します。
           * @returns OK
           */
          post: (option: { body: Methods_1hfgbl8['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_1hfgbl8['post']['resBody'], BasicHeaders, Methods_1hfgbl8['post']['status']>(prefix, PATH17, POST, option).json(),
          /**
           * Invoice帳票を出力します。
           * @returns OK
           */
          $post: (option: { body: Methods_1hfgbl8['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_1hfgbl8['post']['resBody'], BasicHeaders, Methods_1hfgbl8['post']['status']>(prefix, PATH17, POST, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH17}`,
        },
        /**
         * BalanceBook一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_1ll7yd0['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1ll7yd0['get']['resBody'], BasicHeaders, Methods_1ll7yd0['get']['status']>(prefix, PATH16, GET, option).json(),
        /**
         * BalanceBook一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_1ll7yd0['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1ll7yd0['get']['resBody'], BasicHeaders, Methods_1ll7yd0['get']['status']>(prefix, PATH16, GET, option).json().then(r => r.body),
        /**
         * BalanceBookを追加更新削除します。
         * @returns OK
         */
        put: (option: { body: Methods_1ll7yd0['put']['reqBody'], query?: Methods_1ll7yd0['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1ll7yd0['put']['resBody'], BasicHeaders, Methods_1ll7yd0['put']['status']>(prefix, PATH16, PUT, option).json(),
        /**
         * BalanceBookを追加更新削除します。
         * @returns OK
         */
        $put: (option: { body: Methods_1ll7yd0['put']['reqBody'], query?: Methods_1ll7yd0['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1ll7yd0['put']['resBody'], BasicHeaders, Methods_1ll7yd0['put']['status']>(prefix, PATH16, PUT, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_1ll7yd0['get']['query'] } | { method: 'put'; query: Methods_1ll7yd0['put']['query'] } | undefined) =>
          `${prefix}${PATH16}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      bank_accounts: {
        _bank_account_id: (val2: number) => {
          const prefix2 = `${PATH18}/${val2}`;

          return {
            /**
             * 銀行口座を取得します
             * @returns OK
             */
            get: (option?: { query?: Methods_14cgtlb['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_14cgtlb['get']['resBody'], BasicHeaders, Methods_14cgtlb['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * 銀行口座を取得します
             * @returns OK
             */
            $get: (option?: { query?: Methods_14cgtlb['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_14cgtlb['get']['resBody'], BasicHeaders, Methods_14cgtlb['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_14cgtlb['get']['query'] } | undefined) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          };
        },
        /**
         * 銀行口座一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_ddlxmy['get']['query'], config?: T | undefined }) =>
          fetch<Methods_ddlxmy['get']['resBody'], BasicHeaders, Methods_ddlxmy['get']['status']>(prefix, PATH18, GET, option).json(),
        /**
         * 銀行口座一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_ddlxmy['get']['query'], config?: T | undefined }) =>
          fetch<Methods_ddlxmy['get']['resBody'], BasicHeaders, Methods_ddlxmy['get']['status']>(prefix, PATH18, GET, option).json().then(r => r.body),
        /**
         * 銀行口座を追加更新削除します。
         * @returns OK
         */
        put: (option: { body: Methods_ddlxmy['put']['reqBody'], query?: Methods_ddlxmy['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_ddlxmy['put']['resBody'], BasicHeaders, Methods_ddlxmy['put']['status']>(prefix, PATH18, PUT, option).json(),
        /**
         * 銀行口座を追加更新削除します。
         * @returns OK
         */
        $put: (option: { body: Methods_ddlxmy['put']['reqBody'], query?: Methods_ddlxmy['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_ddlxmy['put']['resBody'], BasicHeaders, Methods_ddlxmy['put']['status']>(prefix, PATH18, PUT, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_ddlxmy['get']['query'] } | { method: 'put'; query: Methods_ddlxmy['put']['query'] } | undefined) =>
          `${prefix}${PATH18}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      bank_transfer_receipts: {
        create_deposit: {
          /**
           * 振込データを取り込みます
           * @returns OK
           */
          post: (option: { body: Methods_1wbq4d1['post']['reqBody'], query?: Methods_1wbq4d1['post']['query'] | undefined, config?: T | undefined }) =>
            fetch<Methods_1wbq4d1['post']['resBody'], BasicHeaders, Methods_1wbq4d1['post']['status']>(prefix, PATH20, POST, option).json(),
          /**
           * 振込データを取り込みます
           * @returns OK
           */
          $post: (option: { body: Methods_1wbq4d1['post']['reqBody'], query?: Methods_1wbq4d1['post']['query'] | undefined, config?: T | undefined }) =>
            fetch<Methods_1wbq4d1['post']['resBody'], BasicHeaders, Methods_1wbq4d1['post']['status']>(prefix, PATH20, POST, option).json().then(r => r.body),
          $path: (option?: { method: 'post'; query: Methods_1wbq4d1['post']['query'] } | undefined) =>
            `${prefix}${PATH20}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
        /**
         * 振込データ受信一覧データを取得します
         * @returns OK
         */
        get: (option: { query: Methods_hstxnv['get']['query'], config?: T | undefined }) =>
          fetch<Methods_hstxnv['get']['resBody'], BasicHeaders, Methods_hstxnv['get']['status']>(prefix, PATH19, GET, option).json(),
        /**
         * 振込データ受信一覧データを取得します
         * @returns OK
         */
        $get: (option: { query: Methods_hstxnv['get']['query'], config?: T | undefined }) =>
          fetch<Methods_hstxnv['get']['resBody'], BasicHeaders, Methods_hstxnv['get']['status']>(prefix, PATH19, GET, option).json().then(r => r.body),
        /**
         * 振込データを取り込みます
         */
        post: (option: { body: Methods_hstxnv['post']['reqBody'], query?: Methods_hstxnv['post']['query'] | undefined, config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_hstxnv['post']['status']>(prefix, PATH19, POST, option, 'FormData').send(),
        /**
         * 振込データを取り込みます
         */
        $post: (option: { body: Methods_hstxnv['post']['reqBody'], query?: Methods_hstxnv['post']['query'] | undefined, config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_hstxnv['post']['status']>(prefix, PATH19, POST, option, 'FormData').send().then(r => r.body),
        /**
         * 振込データを取り込みます
         * @returns OK
         */
        put: (option: { body: Methods_hstxnv['put']['reqBody'], query?: Methods_hstxnv['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_hstxnv['put']['resBody'], BasicHeaders, Methods_hstxnv['put']['status']>(prefix, PATH19, PUT, option).json(),
        /**
         * 振込データを取り込みます
         * @returns OK
         */
        $put: (option: { body: Methods_hstxnv['put']['reqBody'], query?: Methods_hstxnv['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_hstxnv['put']['resBody'], BasicHeaders, Methods_hstxnv['put']['status']>(prefix, PATH19, PUT, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_hstxnv['get']['query'] } | { method: 'post'; query: Methods_hstxnv['post']['query'] } | { method: 'put'; query: Methods_hstxnv['put']['query'] } | undefined) =>
          `${prefix}${PATH19}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      base_locations: {
        _base_location_id: (val2: number) => {
          const prefix2 = `${PATH21}/${val2}`;

          return {
            /**
             * 倉庫拠点を取得します
             * @returns OK
             */
            get: (option?: { query?: Methods_1l8t9hp['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_1l8t9hp['get']['resBody'], BasicHeaders, Methods_1l8t9hp['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * 倉庫拠点を取得します
             * @returns OK
             */
            $get: (option?: { query?: Methods_1l8t9hp['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_1l8t9hp['get']['resBody'], BasicHeaders, Methods_1l8t9hp['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_1l8t9hp['get']['query'] } | undefined) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          };
        },
        /**
         * 倉庫拠点一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_14awnj9['get']['query'], config?: T | undefined }) =>
          fetch<Methods_14awnj9['get']['resBody'], BasicHeaders, Methods_14awnj9['get']['status']>(prefix, PATH21, GET, option).json(),
        /**
         * 倉庫拠点一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_14awnj9['get']['query'], config?: T | undefined }) =>
          fetch<Methods_14awnj9['get']['resBody'], BasicHeaders, Methods_14awnj9['get']['status']>(prefix, PATH21, GET, option).json().then(r => r.body),
        /**
         * 倉庫拠点を追加更新削除します。
         * @returns OK
         */
        put: (option: { body: Methods_14awnj9['put']['reqBody'], query?: Methods_14awnj9['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_14awnj9['put']['resBody'], BasicHeaders, Methods_14awnj9['put']['status']>(prefix, PATH21, PUT, option).json(),
        /**
         * 倉庫拠点を追加更新削除します。
         * @returns OK
         */
        $put: (option: { body: Methods_14awnj9['put']['reqBody'], query?: Methods_14awnj9['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_14awnj9['put']['resBody'], BasicHeaders, Methods_14awnj9['put']['status']>(prefix, PATH21, PUT, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_14awnj9['get']['query'] } | { method: 'put'; query: Methods_14awnj9['put']['query'] } | undefined) =>
          `${prefix}${PATH21}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      batch_authorities: {
        _batch_authority_id: (val2: number) => {
          const prefix2 = `${PATH22}/${val2}`;

          return {
            /**
             * バッチ実行権限を取得します
             * @returns OK
             */
            get: (option?: { query?: Methods_1y6ntyw['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_1y6ntyw['get']['resBody'], BasicHeaders, Methods_1y6ntyw['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * バッチ実行権限を取得します
             * @returns OK
             */
            $get: (option?: { query?: Methods_1y6ntyw['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_1y6ntyw['get']['resBody'], BasicHeaders, Methods_1y6ntyw['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_1y6ntyw['get']['query'] } | undefined) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          };
        },
        /**
         * バッチ実行権限一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_1od74s7['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1od74s7['get']['resBody'], BasicHeaders, Methods_1od74s7['get']['status']>(prefix, PATH22, GET, option).json(),
        /**
         * バッチ実行権限一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_1od74s7['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1od74s7['get']['resBody'], BasicHeaders, Methods_1od74s7['get']['status']>(prefix, PATH22, GET, option).json().then(r => r.body),
        /**
         * バッチ実行権限を追加更新削除します。
         * @returns OK
         */
        put: (option: { body: Methods_1od74s7['put']['reqBody'], query?: Methods_1od74s7['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1od74s7['put']['resBody'], BasicHeaders, Methods_1od74s7['put']['status']>(prefix, PATH22, PUT, option).json(),
        /**
         * バッチ実行権限を追加更新削除します。
         * @returns OK
         */
        $put: (option: { body: Methods_1od74s7['put']['reqBody'], query?: Methods_1od74s7['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1od74s7['put']['resBody'], BasicHeaders, Methods_1od74s7['put']['status']>(prefix, PATH22, PUT, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_1od74s7['get']['query'] } | { method: 'put'; query: Methods_1od74s7['put']['query'] } | undefined) =>
          `${prefix}${PATH22}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      batch_calendars: {
        _batch_calendar_id: (val2: number) => {
          const prefix2 = `${PATH23}/${val2}`;

          return {
            /**
             * バッチカレンダーを取得します
             * @returns OK
             */
            get: (option?: { query?: Methods_f4dvql['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_f4dvql['get']['resBody'], BasicHeaders, Methods_f4dvql['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * バッチカレンダーを取得します
             * @returns OK
             */
            $get: (option?: { query?: Methods_f4dvql['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_f4dvql['get']['resBody'], BasicHeaders, Methods_f4dvql['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_f4dvql['get']['query'] } | undefined) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          };
        },
        /**
         * バッチカレンダー一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_ilqdah['get']['query'], config?: T | undefined }) =>
          fetch<Methods_ilqdah['get']['resBody'], BasicHeaders, Methods_ilqdah['get']['status']>(prefix, PATH23, GET, option).json(),
        /**
         * バッチカレンダー一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_ilqdah['get']['query'], config?: T | undefined }) =>
          fetch<Methods_ilqdah['get']['resBody'], BasicHeaders, Methods_ilqdah['get']['status']>(prefix, PATH23, GET, option).json().then(r => r.body),
        /**
         * バッチカレンダーを追加更新削除します。
         * @returns OK
         */
        put: (option: { body: Methods_ilqdah['put']['reqBody'], query?: Methods_ilqdah['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_ilqdah['put']['resBody'], BasicHeaders, Methods_ilqdah['put']['status']>(prefix, PATH23, PUT, option).json(),
        /**
         * バッチカレンダーを追加更新削除します。
         * @returns OK
         */
        $put: (option: { body: Methods_ilqdah['put']['reqBody'], query?: Methods_ilqdah['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_ilqdah['put']['resBody'], BasicHeaders, Methods_ilqdah['put']['status']>(prefix, PATH23, PUT, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_ilqdah['get']['query'] } | { method: 'put'; query: Methods_ilqdah['put']['query'] } | undefined) =>
          `${prefix}${PATH23}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      batch_displays: {
        _batch_display_id: (val2: number) => {
          const prefix2 = `${PATH24}/${val2}`;

          return {
            /**
             * 一括表示仕様を取得します
             * @returns OK
             */
            get: (option?: { query?: Methods_1wd5g7h['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_1wd5g7h['get']['resBody'], BasicHeaders, Methods_1wd5g7h['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * 一括表示仕様を取得します
             * @returns OK
             */
            $get: (option?: { query?: Methods_1wd5g7h['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_1wd5g7h['get']['resBody'], BasicHeaders, Methods_1wd5g7h['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_1wd5g7h['get']['query'] } | undefined) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          };
        },
        /**
         * 一括表示仕様一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_1lx8mi5['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1lx8mi5['get']['resBody'], BasicHeaders, Methods_1lx8mi5['get']['status']>(prefix, PATH24, GET, option).json(),
        /**
         * 一括表示仕様一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_1lx8mi5['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1lx8mi5['get']['resBody'], BasicHeaders, Methods_1lx8mi5['get']['status']>(prefix, PATH24, GET, option).json().then(r => r.body),
        /**
         * 一括表示仕様を追加更新削除します。
         * @returns OK
         */
        put: (option: { body: Methods_1lx8mi5['put']['reqBody'], query?: Methods_1lx8mi5['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1lx8mi5['put']['resBody'], BasicHeaders, Methods_1lx8mi5['put']['status']>(prefix, PATH24, PUT, option).json(),
        /**
         * 一括表示仕様を追加更新削除します。
         * @returns OK
         */
        $put: (option: { body: Methods_1lx8mi5['put']['reqBody'], query?: Methods_1lx8mi5['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1lx8mi5['put']['resBody'], BasicHeaders, Methods_1lx8mi5['put']['status']>(prefix, PATH24, PUT, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_1lx8mi5['get']['query'] } | { method: 'put'; query: Methods_1lx8mi5['put']['query'] } | undefined) =>
          `${prefix}${PATH24}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      batch_histories: {
        /**
         * バッチ履歴一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_1ve5uv2['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1ve5uv2['get']['resBody'], BasicHeaders, Methods_1ve5uv2['get']['status']>(prefix, PATH25, GET, option).json(),
        /**
         * バッチ履歴一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_1ve5uv2['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1ve5uv2['get']['resBody'], BasicHeaders, Methods_1ve5uv2['get']['status']>(prefix, PATH25, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_1ve5uv2['get']['query'] } | undefined) =>
          `${prefix}${PATH25}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      batch_parameters: {
        _batch_parameter_id: (val2: string) => {
          const prefix2 = `${PATH26}/${val2}`;

          return {
            /**
             * バッチパラメータを取得します
             * @returns OK
             */
            get: (option?: { query?: Methods_he27sl['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_he27sl['get']['resBody'], BasicHeaders, Methods_he27sl['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * バッチパラメータを取得します
             * @returns OK
             */
            $get: (option?: { query?: Methods_he27sl['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_he27sl['get']['resBody'], BasicHeaders, Methods_he27sl['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            /**
             * バッチを実行します
             * @returns OK
             */
            post: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_he27sl['post']['resBody'], BasicHeaders, Methods_he27sl['post']['status']>(prefix, prefix2, POST, option).json(),
            /**
             * バッチを実行します
             * @returns OK
             */
            $post: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_he27sl['post']['resBody'], BasicHeaders, Methods_he27sl['post']['status']>(prefix, prefix2, POST, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_he27sl['get']['query'] } | undefined) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          };
        },
        /**
         * バッチパラメータ一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_ju01mm['get']['query'], config?: T | undefined }) =>
          fetch<Methods_ju01mm['get']['resBody'], BasicHeaders, Methods_ju01mm['get']['status']>(prefix, PATH26, GET, option).json(),
        /**
         * バッチパラメータ一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_ju01mm['get']['query'], config?: T | undefined }) =>
          fetch<Methods_ju01mm['get']['resBody'], BasicHeaders, Methods_ju01mm['get']['status']>(prefix, PATH26, GET, option).json().then(r => r.body),
        /**
         * バッチパラメータを追加更新削除します。
         * @returns OK
         */
        put: (option: { body: Methods_ju01mm['put']['reqBody'], query?: Methods_ju01mm['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_ju01mm['put']['resBody'], BasicHeaders, Methods_ju01mm['put']['status']>(prefix, PATH26, PUT, option).json(),
        /**
         * バッチパラメータを追加更新削除します。
         * @returns OK
         */
        $put: (option: { body: Methods_ju01mm['put']['reqBody'], query?: Methods_ju01mm['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_ju01mm['put']['resBody'], BasicHeaders, Methods_ju01mm['put']['status']>(prefix, PATH26, PUT, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_ju01mm['get']['query'] } | { method: 'put'; query: Methods_ju01mm['put']['query'] } | undefined) =>
          `${prefix}${PATH26}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      batch_schedules: {
        _batch_schedule_id: (val2: string) => {
          const prefix2 = `${PATH27}/${val2}`;

          return {
            /**
             * バッチスケジュールを取得します
             * @returns OK
             */
            get: (option?: { query?: Methods_hdfqwj['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_hdfqwj['get']['resBody'], BasicHeaders, Methods_hdfqwj['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * バッチスケジュールを取得します
             * @returns OK
             */
            $get: (option?: { query?: Methods_hdfqwj['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_hdfqwj['get']['resBody'], BasicHeaders, Methods_hdfqwj['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_hdfqwj['get']['query'] } | undefined) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          };
        },
        /**
         * バッチスケジュール一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_1m9zlns['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1m9zlns['get']['resBody'], BasicHeaders, Methods_1m9zlns['get']['status']>(prefix, PATH27, GET, option).json(),
        /**
         * バッチスケジュール一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_1m9zlns['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1m9zlns['get']['resBody'], BasicHeaders, Methods_1m9zlns['get']['status']>(prefix, PATH27, GET, option).json().then(r => r.body),
        /**
         * バッチスケジュールを追加更新削除します。
         * @returns OK
         */
        put: (option: { body: Methods_1m9zlns['put']['reqBody'], query?: Methods_1m9zlns['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1m9zlns['put']['resBody'], BasicHeaders, Methods_1m9zlns['put']['status']>(prefix, PATH27, PUT, option).json(),
        /**
         * バッチスケジュールを追加更新削除します。
         * @returns OK
         */
        $put: (option: { body: Methods_1m9zlns['put']['reqBody'], query?: Methods_1m9zlns['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1m9zlns['put']['resBody'], BasicHeaders, Methods_1m9zlns['put']['status']>(prefix, PATH27, PUT, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_1m9zlns['get']['query'] } | { method: 'put'; query: Methods_1m9zlns['put']['query'] } | undefined) =>
          `${prefix}${PATH27}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      batches: {
        _batch_id: (val2: number) => {
          const prefix2 = `${PATH28}/${val2}`;

          return {
            /**
             * バッチを取得します
             * @returns OK
             */
            get: (option?: { query?: Methods_a7bgrs['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_a7bgrs['get']['resBody'], BasicHeaders, Methods_a7bgrs['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * バッチを取得します
             * @returns OK
             */
            $get: (option?: { query?: Methods_a7bgrs['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_a7bgrs['get']['resBody'], BasicHeaders, Methods_a7bgrs['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_a7bgrs['get']['query'] } | undefined) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          };
        },
        /**
         * バッチ一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_nltu49['get']['query'], config?: T | undefined }) =>
          fetch<Methods_nltu49['get']['resBody'], BasicHeaders, Methods_nltu49['get']['status']>(prefix, PATH28, GET, option).json(),
        /**
         * バッチ一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_nltu49['get']['query'], config?: T | undefined }) =>
          fetch<Methods_nltu49['get']['resBody'], BasicHeaders, Methods_nltu49['get']['status']>(prefix, PATH28, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_nltu49['get']['query'] } | undefined) =>
          `${prefix}${PATH28}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      bill_closings: {
        bulk_async: {
          /**
           * 請求締一覧を一括処理します。応答には user_logs も含まれます。embed はバッチ出力に対する指示になります。
           * @returns OK
           */
          post: (option: { body: Methods_1eucba7['post']['reqBody'], query?: Methods_1eucba7['post']['query'] | undefined, config?: T | undefined }) =>
            fetch<Methods_1eucba7['post']['resBody'], BasicHeaders, Methods_1eucba7['post']['status']>(prefix, PATH30, POST, option).json(),
          /**
           * 請求締一覧を一括処理します。応答には user_logs も含まれます。embed はバッチ出力に対する指示になります。
           * @returns OK
           */
          $post: (option: { body: Methods_1eucba7['post']['reqBody'], query?: Methods_1eucba7['post']['query'] | undefined, config?: T | undefined }) =>
            fetch<Methods_1eucba7['post']['resBody'], BasicHeaders, Methods_1eucba7['post']['status']>(prefix, PATH30, POST, option).json().then(r => r.body),
          $path: (option?: { method: 'post'; query: Methods_1eucba7['post']['query'] } | undefined) =>
            `${prefix}${PATH30}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
        /**
         * 請求締一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_19p76uj['get']['query'], config?: T | undefined }) =>
          fetch<Methods_19p76uj['get']['resBody'], BasicHeaders, Methods_19p76uj['get']['status']>(prefix, PATH29, GET, option).json(),
        /**
         * 請求締一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_19p76uj['get']['query'], config?: T | undefined }) =>
          fetch<Methods_19p76uj['get']['resBody'], BasicHeaders, Methods_19p76uj['get']['status']>(prefix, PATH29, GET, option).json().then(r => r.body),
        /**
         * 請求締一覧を一括処理します。
         * @returns OK
         */
        put: (option: { body: Methods_19p76uj['put']['reqBody'], query?: Methods_19p76uj['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_19p76uj['put']['resBody'], BasicHeaders, Methods_19p76uj['put']['status']>(prefix, PATH29, PUT, option).json(),
        /**
         * 請求締一覧を一括処理します。
         * @returns OK
         */
        $put: (option: { body: Methods_19p76uj['put']['reqBody'], query?: Methods_19p76uj['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_19p76uj['put']['resBody'], BasicHeaders, Methods_19p76uj['put']['status']>(prefix, PATH29, PUT, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_19p76uj['get']['query'] } | { method: 'put'; query: Methods_19p76uj['put']['query'] } | undefined) =>
          `${prefix}${PATH29}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      bill_results: {
        print: {
          /**
           * 売掛金残高証明書を出力します。
           * @returns OK
           */
          post: (option: { body: Methods_ak7wzv['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_ak7wzv['post']['resBody'], BasicHeaders, Methods_ak7wzv['post']['status']>(prefix, PATH32, POST, option).json(),
          /**
           * 売掛金残高証明書を出力します。
           * @returns OK
           */
          $post: (option: { body: Methods_ak7wzv['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_ak7wzv['post']['resBody'], BasicHeaders, Methods_ak7wzv['post']['status']>(prefix, PATH32, POST, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH32}`,
        },
        /**
         * 請求実績を返します
         * @returns OK
         */
        get: (option: { query: Methods_118s64r['get']['query'], config?: T | undefined }) =>
          fetch<Methods_118s64r['get']['resBody'], BasicHeaders, Methods_118s64r['get']['status']>(prefix, PATH31, GET, option).json(),
        /**
         * 請求実績を返します
         * @returns OK
         */
        $get: (option: { query: Methods_118s64r['get']['query'], config?: T | undefined }) =>
          fetch<Methods_118s64r['get']['resBody'], BasicHeaders, Methods_118s64r['get']['status']>(prefix, PATH31, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_118s64r['get']['query'] } | undefined) =>
          `${prefix}${PATH31}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      bill_total_groups: {
        _bill_total_group_id: (val2: number) => {
          const prefix2 = `${PATH33}/${val2}`;

          return {
            /**
             * 合計請求書グループを取得します
             * @returns OK
             */
            get: (option?: { query?: Methods_1l7hzar['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_1l7hzar['get']['resBody'], BasicHeaders, Methods_1l7hzar['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * 合計請求書グループを取得します
             * @returns OK
             */
            $get: (option?: { query?: Methods_1l7hzar['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_1l7hzar['get']['resBody'], BasicHeaders, Methods_1l7hzar['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_1l7hzar['get']['query'] } | undefined) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          };
        },
        /**
         * 合計請求書グループ一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_2q8wwc['get']['query'], config?: T | undefined }) =>
          fetch<Methods_2q8wwc['get']['resBody'], BasicHeaders, Methods_2q8wwc['get']['status']>(prefix, PATH33, GET, option).json(),
        /**
         * 合計請求書グループ一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_2q8wwc['get']['query'], config?: T | undefined }) =>
          fetch<Methods_2q8wwc['get']['resBody'], BasicHeaders, Methods_2q8wwc['get']['status']>(prefix, PATH33, GET, option).json().then(r => r.body),
        /**
         * 合計請求書グループを追加更新削除します。
         * @returns OK
         */
        put: (option: { body: Methods_2q8wwc['put']['reqBody'], query?: Methods_2q8wwc['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_2q8wwc['put']['resBody'], BasicHeaders, Methods_2q8wwc['put']['status']>(prefix, PATH33, PUT, option).json(),
        /**
         * 合計請求書グループを追加更新削除します。
         * @returns OK
         */
        $put: (option: { body: Methods_2q8wwc['put']['reqBody'], query?: Methods_2q8wwc['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_2q8wwc['put']['resBody'], BasicHeaders, Methods_2q8wwc['put']['status']>(prefix, PATH33, PUT, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_2q8wwc['get']['query'] } | { method: 'put'; query: Methods_2q8wwc['put']['query'] } | undefined) =>
          `${prefix}${PATH33}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      bills: {
        print: {
          /**
           * 請求書を出力します。
           */
          post: (option: { body: Methods_s27qsf['post']['reqBody'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_s27qsf['post']['status']>(prefix, PATH34, POST, option).send(),
          /**
           * 請求書を出力します。
           */
          $post: (option: { body: Methods_s27qsf['post']['reqBody'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_s27qsf['post']['status']>(prefix, PATH34, POST, option).send().then(r => r.body),
          $path: () => `${prefix}${PATH34}`,
        },
      },
      bottle_sizes: {
        _bottle_size_id: (val2: number) => {
          const prefix2 = `${PATH35}/${val2}`;

          return {
            /**
             * 容器サイズを取得します
             * @returns OK
             */
            get: (option?: { query?: Methods_1wssycp['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_1wssycp['get']['resBody'], BasicHeaders, Methods_1wssycp['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * 容器サイズを取得します
             * @returns OK
             */
            $get: (option?: { query?: Methods_1wssycp['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_1wssycp['get']['resBody'], BasicHeaders, Methods_1wssycp['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_1wssycp['get']['query'] } | undefined) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          };
        },
        /**
         * 容器サイズ一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_5j5z92['get']['query'], config?: T | undefined }) =>
          fetch<Methods_5j5z92['get']['resBody'], BasicHeaders, Methods_5j5z92['get']['status']>(prefix, PATH35, GET, option).json(),
        /**
         * 容器サイズ一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_5j5z92['get']['query'], config?: T | undefined }) =>
          fetch<Methods_5j5z92['get']['resBody'], BasicHeaders, Methods_5j5z92['get']['status']>(prefix, PATH35, GET, option).json().then(r => r.body),
        /**
         * 容器サイズを追加更新削除します。
         * @returns OK
         */
        put: (option: { body: Methods_5j5z92['put']['reqBody'], query?: Methods_5j5z92['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_5j5z92['put']['resBody'], BasicHeaders, Methods_5j5z92['put']['status']>(prefix, PATH35, PUT, option).json(),
        /**
         * 容器サイズを追加更新削除します。
         * @returns OK
         */
        $put: (option: { body: Methods_5j5z92['put']['reqBody'], query?: Methods_5j5z92['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_5j5z92['put']['resBody'], BasicHeaders, Methods_5j5z92['put']['status']>(prefix, PATH35, PUT, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_5j5z92['get']['query'] } | { method: 'put'; query: Methods_5j5z92['put']['query'] } | undefined) =>
          `${prefix}${PATH35}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      calendars: {
        _calendar_id: (val2: number) => {
          const prefix2 = `${PATH36}/${val2}`;

          return {
            /**
             * カレンダーを取得します
             * @returns OK
             */
            get: (option?: { query?: Methods_qf0lgr['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_qf0lgr['get']['resBody'], BasicHeaders, Methods_qf0lgr['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * カレンダーを取得します
             * @returns OK
             */
            $get: (option?: { query?: Methods_qf0lgr['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_qf0lgr['get']['resBody'], BasicHeaders, Methods_qf0lgr['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_qf0lgr['get']['query'] } | undefined) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          };
        },
        /**
         * カレンダー一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_1acdzrq['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1acdzrq['get']['resBody'], BasicHeaders, Methods_1acdzrq['get']['status']>(prefix, PATH36, GET, option).json(),
        /**
         * カレンダー一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_1acdzrq['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1acdzrq['get']['resBody'], BasicHeaders, Methods_1acdzrq['get']['status']>(prefix, PATH36, GET, option).json().then(r => r.body),
        /**
         * カレンダーを追加更新削除します。
         * @returns OK
         */
        put: (option: { body: Methods_1acdzrq['put']['reqBody'], query?: Methods_1acdzrq['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1acdzrq['put']['resBody'], BasicHeaders, Methods_1acdzrq['put']['status']>(prefix, PATH36, PUT, option).json(),
        /**
         * カレンダーを追加更新削除します。
         * @returns OK
         */
        $put: (option: { body: Methods_1acdzrq['put']['reqBody'], query?: Methods_1acdzrq['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1acdzrq['put']['resBody'], BasicHeaders, Methods_1acdzrq['put']['status']>(prefix, PATH36, PUT, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_1acdzrq['get']['query'] } | { method: 'put'; query: Methods_1acdzrq['put']['query'] } | undefined) =>
          `${prefix}${PATH36}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      cash_on_deliveries: {
        create_deposit: {
          /**
           * 入荷予定に紐づいて、在庫・仕入計上予定を更新します。更新のみ可能です。
           * @returns OK
           */
          post: (option: { body: Methods_tc5xwn['post']['reqBody'], query?: Methods_tc5xwn['post']['query'] | undefined, config?: T | undefined }) =>
            fetch<Methods_tc5xwn['post']['resBody'], BasicHeaders, Methods_tc5xwn['post']['status']>(prefix, PATH38, POST, option).json(),
          /**
           * 入荷予定に紐づいて、在庫・仕入計上予定を更新します。更新のみ可能です。
           * @returns OK
           */
          $post: (option: { body: Methods_tc5xwn['post']['reqBody'], query?: Methods_tc5xwn['post']['query'] | undefined, config?: T | undefined }) =>
            fetch<Methods_tc5xwn['post']['resBody'], BasicHeaders, Methods_tc5xwn['post']['status']>(prefix, PATH38, POST, option).json().then(r => r.body),
          $path: (option?: { method: 'post'; query: Methods_tc5xwn['post']['query'] } | undefined) =>
            `${prefix}${PATH38}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
        /**
         * 振込データ受信一覧データを取得します
         * @returns OK
         */
        get: (option: { query: Methods_1gofoy9['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1gofoy9['get']['resBody'], BasicHeaders, Methods_1gofoy9['get']['status']>(prefix, PATH37, GET, option).json(),
        /**
         * 振込データ受信一覧データを取得します
         * @returns OK
         */
        $get: (option: { query: Methods_1gofoy9['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1gofoy9['get']['resBody'], BasicHeaders, Methods_1gofoy9['get']['status']>(prefix, PATH37, GET, option).json().then(r => r.body),
        /**
         * 振込データを取り込みます
         */
        post: (option: { body: Methods_1gofoy9['post']['reqBody'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_1gofoy9['post']['status']>(prefix, PATH37, POST, option, 'FormData').send(),
        /**
         * 振込データを取り込みます
         */
        $post: (option: { body: Methods_1gofoy9['post']['reqBody'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_1gofoy9['post']['status']>(prefix, PATH37, POST, option, 'FormData').send().then(r => r.body),
        /**
         * 入荷予定に紐づいて、在庫・仕入計上予定を更新します。更新のみ可能です。
         * @returns OK
         */
        put: (option: { body: Methods_1gofoy9['put']['reqBody'], query?: Methods_1gofoy9['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1gofoy9['put']['resBody'], BasicHeaders, Methods_1gofoy9['put']['status']>(prefix, PATH37, PUT, option).json(),
        /**
         * 入荷予定に紐づいて、在庫・仕入計上予定を更新します。更新のみ可能です。
         * @returns OK
         */
        $put: (option: { body: Methods_1gofoy9['put']['reqBody'], query?: Methods_1gofoy9['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1gofoy9['put']['resBody'], BasicHeaders, Methods_1gofoy9['put']['status']>(prefix, PATH37, PUT, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_1gofoy9['get']['query'] } | { method: 'put'; query: Methods_1gofoy9['put']['query'] } | undefined) =>
          `${prefix}${PATH37}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      consignees: {
        _consignee_id: (val2: number) => {
          const prefix2 = `${PATH39}/${val2}`;

          return {
            /**
             * 荷受先を取得します
             * @returns OK
             */
            get: (option?: { query?: Methods_k334bp['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_k334bp['get']['resBody'], BasicHeaders, Methods_k334bp['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * 荷受先を取得します
             * @returns OK
             */
            $get: (option?: { query?: Methods_k334bp['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_k334bp['get']['resBody'], BasicHeaders, Methods_k334bp['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_k334bp['get']['query'] } | undefined) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          };
        },
        /**
         * 荷受先一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_1lwepbj['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1lwepbj['get']['resBody'], BasicHeaders, Methods_1lwepbj['get']['status']>(prefix, PATH39, GET, option).json(),
        /**
         * 荷受先一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_1lwepbj['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1lwepbj['get']['resBody'], BasicHeaders, Methods_1lwepbj['get']['status']>(prefix, PATH39, GET, option).json().then(r => r.body),
        /**
         * 荷受先を追加更新削除します。
         * @returns OK
         */
        put: (option: { body: Methods_1lwepbj['put']['reqBody'], query?: Methods_1lwepbj['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1lwepbj['put']['resBody'], BasicHeaders, Methods_1lwepbj['put']['status']>(prefix, PATH39, PUT, option).json(),
        /**
         * 荷受先を追加更新削除します。
         * @returns OK
         */
        $put: (option: { body: Methods_1lwepbj['put']['reqBody'], query?: Methods_1lwepbj['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1lwepbj['put']['resBody'], BasicHeaders, Methods_1lwepbj['put']['status']>(prefix, PATH39, PUT, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_1lwepbj['get']['query'] } | { method: 'put'; query: Methods_1lwepbj['put']['query'] } | undefined) =>
          `${prefix}${PATH39}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      contract_stocks: {
        _contract_stock_id: (val2: number) => {
          const prefix2 = `${PATH40}/${val2}`;

          return {
            /**
             * 委託倉庫在庫を取得します
             * @returns OK
             */
            get: (option?: { query?: Methods_1or5z6t['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_1or5z6t['get']['resBody'], BasicHeaders, Methods_1or5z6t['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * 委託倉庫在庫を取得します
             * @returns OK
             */
            $get: (option?: { query?: Methods_1or5z6t['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_1or5z6t['get']['resBody'], BasicHeaders, Methods_1or5z6t['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_1or5z6t['get']['query'] } | undefined) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          };
        },
        /**
         * 委託倉庫在庫一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_uwr4k9['get']['query'], config?: T | undefined }) =>
          fetch<Methods_uwr4k9['get']['resBody'], BasicHeaders, Methods_uwr4k9['get']['status']>(prefix, PATH40, GET, option).json(),
        /**
         * 委託倉庫在庫一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_uwr4k9['get']['query'], config?: T | undefined }) =>
          fetch<Methods_uwr4k9['get']['resBody'], BasicHeaders, Methods_uwr4k9['get']['status']>(prefix, PATH40, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_uwr4k9['get']['query'] } | undefined) =>
          `${prefix}${PATH40}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      controls: {
        _control_id: (val2: number) => {
          const prefix2 = `${PATH41}/${val2}`;

          return {
            /**
             * コントロールを取得します
             * @returns OK
             */
            get: (option?: { query?: Methods_mh88zx['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_mh88zx['get']['resBody'], BasicHeaders, Methods_mh88zx['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * コントロールを取得します
             * @returns OK
             */
            $get: (option?: { query?: Methods_mh88zx['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_mh88zx['get']['resBody'], BasicHeaders, Methods_mh88zx['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_mh88zx['get']['query'] } | undefined) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          };
        },
        /**
         * コントロール一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_5dqxqt['get']['query'], config?: T | undefined }) =>
          fetch<Methods_5dqxqt['get']['resBody'], BasicHeaders, Methods_5dqxqt['get']['status']>(prefix, PATH41, GET, option).json(),
        /**
         * コントロール一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_5dqxqt['get']['query'], config?: T | undefined }) =>
          fetch<Methods_5dqxqt['get']['resBody'], BasicHeaders, Methods_5dqxqt['get']['status']>(prefix, PATH41, GET, option).json().then(r => r.body),
        /**
         * コントロールを追加更新削除します。
         * @returns OK
         */
        put: (option: { body: Methods_5dqxqt['put']['reqBody'], query?: Methods_5dqxqt['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_5dqxqt['put']['resBody'], BasicHeaders, Methods_5dqxqt['put']['status']>(prefix, PATH41, PUT, option).json(),
        /**
         * コントロールを追加更新削除します。
         * @returns OK
         */
        $put: (option: { body: Methods_5dqxqt['put']['reqBody'], query?: Methods_5dqxqt['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_5dqxqt['put']['resBody'], BasicHeaders, Methods_5dqxqt['put']['status']>(prefix, PATH41, PUT, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_5dqxqt['get']['query'] } | { method: 'put'; query: Methods_5dqxqt['put']['query'] } | undefined) =>
          `${prefix}${PATH41}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      cost_prices: {
        export_cost_price_data: {
          /**
           * 原価データを出力します。
           */
          post: (option: { body: Methods_1mb095j['post']['reqBody'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_1mb095j['post']['status']>(prefix, PATH42, POST, option).send(),
          /**
           * 原価データを出力します。
           */
          $post: (option: { body: Methods_1mb095j['post']['reqBody'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_1mb095j['post']['status']>(prefix, PATH42, POST, option).send().then(r => r.body),
          $path: () => `${prefix}${PATH42}`,
        },
        import_cost_price_data: {
          /**
           * 原価データを取り込みます。
           */
          post: (option: { body: Methods_1spojqo['post']['reqBody'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_1spojqo['post']['status']>(prefix, PATH43, POST, option).send(),
          /**
           * 原価データを取り込みます。
           */
          $post: (option: { body: Methods_1spojqo['post']['reqBody'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_1spojqo['post']['status']>(prefix, PATH43, POST, option).send().then(r => r.body),
          $path: () => `${prefix}${PATH43}`,
        },
      },
      cost_subjects: {
        _cost_subject_id: (val2: number) => {
          const prefix2 = `${PATH44}/${val2}`;

          return {
            /**
             * 費用科目を取得します
             * @returns OK
             */
            get: (option?: { query?: Methods_80vydn['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_80vydn['get']['resBody'], BasicHeaders, Methods_80vydn['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * 費用科目を取得します
             * @returns OK
             */
            $get: (option?: { query?: Methods_80vydn['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_80vydn['get']['resBody'], BasicHeaders, Methods_80vydn['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_80vydn['get']['query'] } | undefined) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          };
        },
        /**
         * 費用科目一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_zw0wve['get']['query'], config?: T | undefined }) =>
          fetch<Methods_zw0wve['get']['resBody'], BasicHeaders, Methods_zw0wve['get']['status']>(prefix, PATH44, GET, option).json(),
        /**
         * 費用科目一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_zw0wve['get']['query'], config?: T | undefined }) =>
          fetch<Methods_zw0wve['get']['resBody'], BasicHeaders, Methods_zw0wve['get']['status']>(prefix, PATH44, GET, option).json().then(r => r.body),
        /**
         * 費用科目を追加更新削除します。
         * @returns OK
         */
        put: (option: { body: Methods_zw0wve['put']['reqBody'], query?: Methods_zw0wve['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_zw0wve['put']['resBody'], BasicHeaders, Methods_zw0wve['put']['status']>(prefix, PATH44, PUT, option).json(),
        /**
         * 費用科目を追加更新削除します。
         * @returns OK
         */
        $put: (option: { body: Methods_zw0wve['put']['reqBody'], query?: Methods_zw0wve['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_zw0wve['put']['resBody'], BasicHeaders, Methods_zw0wve['put']['status']>(prefix, PATH44, PUT, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_zw0wve['get']['query'] } | { method: 'put'; query: Methods_zw0wve['put']['query'] } | undefined) =>
          `${prefix}${PATH44}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      costs: {
        bulk_insert: {
          /**
           * コストデータを取り込みます。
           * @returns OK
           */
          post: (option: { body: Methods_1hdviig['post']['reqBody'], query?: Methods_1hdviig['post']['query'] | undefined, config?: T | undefined }) =>
            fetch<Methods_1hdviig['post']['resBody'], BasicHeaders, Methods_1hdviig['post']['status']>(prefix, PATH45, POST, option, 'FormData').json(),
          /**
           * コストデータを取り込みます。
           * @returns OK
           */
          $post: (option: { body: Methods_1hdviig['post']['reqBody'], query?: Methods_1hdviig['post']['query'] | undefined, config?: T | undefined }) =>
            fetch<Methods_1hdviig['post']['resBody'], BasicHeaders, Methods_1hdviig['post']['status']>(prefix, PATH45, POST, option, 'FormData').json().then(r => r.body),
          $path: (option?: { method: 'post'; query: Methods_1hdviig['post']['query'] } | undefined) =>
            `${prefix}${PATH45}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
        bulk_insert_check_amount: {
          /**
           * 作業料（コスト）データを取り込みます。
           * @returns OK
           */
          post: (option: { body: Methods_1oxpqj8['post']['reqBody'], query?: Methods_1oxpqj8['post']['query'] | undefined, config?: T | undefined }) =>
            fetch<Methods_1oxpqj8['post']['resBody'], BasicHeaders, Methods_1oxpqj8['post']['status']>(prefix, PATH46, POST, option, 'FormData').json(),
          /**
           * 作業料（コスト）データを取り込みます。
           * @returns OK
           */
          $post: (option: { body: Methods_1oxpqj8['post']['reqBody'], query?: Methods_1oxpqj8['post']['query'] | undefined, config?: T | undefined }) =>
            fetch<Methods_1oxpqj8['post']['resBody'], BasicHeaders, Methods_1oxpqj8['post']['status']>(prefix, PATH46, POST, option, 'FormData').json().then(r => r.body),
          $path: (option?: { method: 'post'; query: Methods_1oxpqj8['post']['query'] } | undefined) =>
            `${prefix}${PATH46}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
        bulk_insert_custom: {
          /**
           * コスト通関データを取り込みます。
           * @returns OK
           */
          post: (option: { body: Methods_dnqc5q['post']['reqBody'], query?: Methods_dnqc5q['post']['query'] | undefined, config?: T | undefined }) =>
            fetch<Methods_dnqc5q['post']['resBody'], BasicHeaders, Methods_dnqc5q['post']['status']>(prefix, PATH47, POST, option, 'FormData').json(),
          /**
           * コスト通関データを取り込みます。
           * @returns OK
           */
          $post: (option: { body: Methods_dnqc5q['post']['reqBody'], query?: Methods_dnqc5q['post']['query'] | undefined, config?: T | undefined }) =>
            fetch<Methods_dnqc5q['post']['resBody'], BasicHeaders, Methods_dnqc5q['post']['status']>(prefix, PATH47, POST, option, 'FormData').json().then(r => r.body),
          $path: (option?: { method: 'post'; query: Methods_dnqc5q['post']['query'] } | undefined) =>
            `${prefix}${PATH47}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
      },
      country_grading_links: {
        _country_grading_link_id: (val2: number) => {
          const prefix2 = `${PATH48}/${val2}`;

          return {
            /**
             * 原産国～格付紐付を取得します
             * @returns OK
             */
            get: (option?: { query?: Methods_1epaqov['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_1epaqov['get']['resBody'], BasicHeaders, Methods_1epaqov['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * 原産国～格付紐付を取得します
             * @returns OK
             */
            $get: (option?: { query?: Methods_1epaqov['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_1epaqov['get']['resBody'], BasicHeaders, Methods_1epaqov['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_1epaqov['get']['query'] } | undefined) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          };
        },
        /**
         * 原産国～格付紐付一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_w893si['get']['query'], config?: T | undefined }) =>
          fetch<Methods_w893si['get']['resBody'], BasicHeaders, Methods_w893si['get']['status']>(prefix, PATH48, GET, option).json(),
        /**
         * 原産国～格付紐付一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_w893si['get']['query'], config?: T | undefined }) =>
          fetch<Methods_w893si['get']['resBody'], BasicHeaders, Methods_w893si['get']['status']>(prefix, PATH48, GET, option).json().then(r => r.body),
        /**
         * 原産国～格付紐付を追加更新削除します。
         * @returns OK
         */
        put: (option: { body: Methods_w893si['put']['reqBody'], query?: Methods_w893si['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_w893si['put']['resBody'], BasicHeaders, Methods_w893si['put']['status']>(prefix, PATH48, PUT, option).json(),
        /**
         * 原産国～格付紐付を追加更新削除します。
         * @returns OK
         */
        $put: (option: { body: Methods_w893si['put']['reqBody'], query?: Methods_w893si['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_w893si['put']['resBody'], BasicHeaders, Methods_w893si['put']['status']>(prefix, PATH48, PUT, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_w893si['get']['query'] } | { method: 'put'; query: Methods_w893si['put']['query'] } | undefined) =>
          `${prefix}${PATH48}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      country_of_origins: {
        _country_of_origin_id: (val2: number) => {
          const prefix2 = `${PATH49}/${val2}`;

          return {
            /**
             * 原産国を取得します
             * @returns OK
             */
            get: (option?: { query?: Methods_whbjst['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_whbjst['get']['resBody'], BasicHeaders, Methods_whbjst['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * 原産国を取得します
             * @returns OK
             */
            $get: (option?: { query?: Methods_whbjst['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_whbjst['get']['resBody'], BasicHeaders, Methods_whbjst['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_whbjst['get']['query'] } | undefined) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          };
        },
        /**
         * 原産国一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_mam12x['get']['query'], config?: T | undefined }) =>
          fetch<Methods_mam12x['get']['resBody'], BasicHeaders, Methods_mam12x['get']['status']>(prefix, PATH49, GET, option).json(),
        /**
         * 原産国一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_mam12x['get']['query'], config?: T | undefined }) =>
          fetch<Methods_mam12x['get']['resBody'], BasicHeaders, Methods_mam12x['get']['status']>(prefix, PATH49, GET, option).json().then(r => r.body),
        /**
         * 原産国を追加更新削除します。
         * @returns OK
         */
        put: (option: { body: Methods_mam12x['put']['reqBody'], query?: Methods_mam12x['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_mam12x['put']['resBody'], BasicHeaders, Methods_mam12x['put']['status']>(prefix, PATH49, PUT, option).json(),
        /**
         * 原産国を追加更新削除します。
         * @returns OK
         */
        $put: (option: { body: Methods_mam12x['put']['reqBody'], query?: Methods_mam12x['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_mam12x['put']['resBody'], BasicHeaders, Methods_mam12x['put']['status']>(prefix, PATH49, PUT, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_mam12x['get']['query'] } | { method: 'put'; query: Methods_mam12x['put']['query'] } | undefined) =>
          `${prefix}${PATH49}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      country_place_name_links: {
        _country_place_name_link_id: (val2: number) => {
          const prefix2 = `${PATH50}/${val2}`;

          return {
            /**
             * 原産国～原産地呼称紐付を取得します
             * @returns OK
             */
            get: (option?: { query?: Methods_c5phn1['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_c5phn1['get']['resBody'], BasicHeaders, Methods_c5phn1['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * 原産国～原産地呼称紐付を取得します
             * @returns OK
             */
            $get: (option?: { query?: Methods_c5phn1['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_c5phn1['get']['resBody'], BasicHeaders, Methods_c5phn1['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_c5phn1['get']['query'] } | undefined) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          };
        },
        /**
         * 原産国～原産地呼称紐付一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_ps8it9['get']['query'], config?: T | undefined }) =>
          fetch<Methods_ps8it9['get']['resBody'], BasicHeaders, Methods_ps8it9['get']['status']>(prefix, PATH50, GET, option).json(),
        /**
         * 原産国～原産地呼称紐付一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_ps8it9['get']['query'], config?: T | undefined }) =>
          fetch<Methods_ps8it9['get']['resBody'], BasicHeaders, Methods_ps8it9['get']['status']>(prefix, PATH50, GET, option).json().then(r => r.body),
        /**
         * 原産国～原産地呼称紐付を追加更新削除します。
         * @returns OK
         */
        put: (option: { body: Methods_ps8it9['put']['reqBody'], query?: Methods_ps8it9['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_ps8it9['put']['resBody'], BasicHeaders, Methods_ps8it9['put']['status']>(prefix, PATH50, PUT, option).json(),
        /**
         * 原産国～原産地呼称紐付を追加更新削除します。
         * @returns OK
         */
        $put: (option: { body: Methods_ps8it9['put']['reqBody'], query?: Methods_ps8it9['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_ps8it9['put']['resBody'], BasicHeaders, Methods_ps8it9['put']['status']>(prefix, PATH50, PUT, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_ps8it9['get']['query'] } | { method: 'put'; query: Methods_ps8it9['put']['query'] } | undefined) =>
          `${prefix}${PATH50}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      country_village_links: {
        _country_village_link_id: (val2: number) => {
          const prefix2 = `${PATH51}/${val2}`;

          return {
            /**
             * 原産国～村紐付を取得します
             * @returns OK
             */
            get: (option?: { query?: Methods_qonttv['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_qonttv['get']['resBody'], BasicHeaders, Methods_qonttv['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * 原産国～村紐付を取得します
             * @returns OK
             */
            $get: (option?: { query?: Methods_qonttv['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_qonttv['get']['resBody'], BasicHeaders, Methods_qonttv['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_qonttv['get']['query'] } | undefined) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          };
        },
        /**
         * 原産国～村紐付一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_1jus0ru['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1jus0ru['get']['resBody'], BasicHeaders, Methods_1jus0ru['get']['status']>(prefix, PATH51, GET, option).json(),
        /**
         * 原産国～村紐付一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_1jus0ru['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1jus0ru['get']['resBody'], BasicHeaders, Methods_1jus0ru['get']['status']>(prefix, PATH51, GET, option).json().then(r => r.body),
        /**
         * 原産国～村紐付を追加更新削除します。
         * @returns OK
         */
        put: (option: { body: Methods_1jus0ru['put']['reqBody'], query?: Methods_1jus0ru['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1jus0ru['put']['resBody'], BasicHeaders, Methods_1jus0ru['put']['status']>(prefix, PATH51, PUT, option).json(),
        /**
         * 原産国～村紐付を追加更新削除します。
         * @returns OK
         */
        $put: (option: { body: Methods_1jus0ru['put']['reqBody'], query?: Methods_1jus0ru['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1jus0ru['put']['resBody'], BasicHeaders, Methods_1jus0ru['put']['status']>(prefix, PATH51, PUT, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_1jus0ru['get']['query'] } | { method: 'put'; query: Methods_1jus0ru['put']['query'] } | undefined) =>
          `${prefix}${PATH51}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      customer_credits: {
        bulk: {
          /**
           * 得意先を一括更新します。
           * @returns OK
           */
          post: (option: { body: Methods_17c99lr['post']['reqBody'], query?: Methods_17c99lr['post']['query'] | undefined, config?: T | undefined }) =>
            fetch<Methods_17c99lr['post']['resBody'], BasicHeaders, Methods_17c99lr['post']['status']>(prefix, PATH52, POST, option, 'FormData').json(),
          /**
           * 得意先を一括更新します。
           * @returns OK
           */
          $post: (option: { body: Methods_17c99lr['post']['reqBody'], query?: Methods_17c99lr['post']['query'] | undefined, config?: T | undefined }) =>
            fetch<Methods_17c99lr['post']['resBody'], BasicHeaders, Methods_17c99lr['post']['status']>(prefix, PATH52, POST, option, 'FormData').json().then(r => r.body),
          $path: (option?: { method: 'post'; query: Methods_17c99lr['post']['query'] } | undefined) =>
            `${prefix}${PATH52}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
      },
      customer_group_invents: {
        _customer_group_invent_id: (val2: number) => {
          const prefix2 = `${PATH53}/${val2}`;

          return {
            /**
             * 得意先グループ商品を取得します
             * @returns OK
             */
            get: (option?: { query?: Methods_vt8w71['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_vt8w71['get']['resBody'], BasicHeaders, Methods_vt8w71['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * 得意先グループ商品を取得します
             * @returns OK
             */
            $get: (option?: { query?: Methods_vt8w71['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_vt8w71['get']['resBody'], BasicHeaders, Methods_vt8w71['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_vt8w71['get']['query'] } | undefined) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          };
        },
        /**
         * 得意先グループ商品一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_qizgd['get']['query'], config?: T | undefined }) =>
          fetch<Methods_qizgd['get']['resBody'], BasicHeaders, Methods_qizgd['get']['status']>(prefix, PATH53, GET, option).json(),
        /**
         * 得意先グループ商品一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_qizgd['get']['query'], config?: T | undefined }) =>
          fetch<Methods_qizgd['get']['resBody'], BasicHeaders, Methods_qizgd['get']['status']>(prefix, PATH53, GET, option).json().then(r => r.body),
        /**
         * 得意先グループ商品を追加更新削除します。
         * @returns OK
         */
        put: (option: { body: Methods_qizgd['put']['reqBody'], query?: Methods_qizgd['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_qizgd['put']['resBody'], BasicHeaders, Methods_qizgd['put']['status']>(prefix, PATH53, PUT, option).json(),
        /**
         * 得意先グループ商品を追加更新削除します。
         * @returns OK
         */
        $put: (option: { body: Methods_qizgd['put']['reqBody'], query?: Methods_qizgd['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_qizgd['put']['resBody'], BasicHeaders, Methods_qizgd['put']['status']>(prefix, PATH53, PUT, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_qizgd['get']['query'] } | { method: 'put'; query: Methods_qizgd['put']['query'] } | undefined) =>
          `${prefix}${PATH53}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      customer_groups: {
        _customer_group_id: (val2: number) => {
          const prefix2 = `${PATH54}/${val2}`;

          return {
            /**
             * 得意先グループを取得します
             * @returns OK
             */
            get: (option?: { query?: Methods_899nyj['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_899nyj['get']['resBody'], BasicHeaders, Methods_899nyj['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * 得意先グループを取得します
             * @returns OK
             */
            $get: (option?: { query?: Methods_899nyj['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_899nyj['get']['resBody'], BasicHeaders, Methods_899nyj['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_899nyj['get']['query'] } | undefined) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          };
        },
        /**
         * 得意先グループ一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_kt3vk8['get']['query'], config?: T | undefined }) =>
          fetch<Methods_kt3vk8['get']['resBody'], BasicHeaders, Methods_kt3vk8['get']['status']>(prefix, PATH54, GET, option).json(),
        /**
         * 得意先グループ一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_kt3vk8['get']['query'], config?: T | undefined }) =>
          fetch<Methods_kt3vk8['get']['resBody'], BasicHeaders, Methods_kt3vk8['get']['status']>(prefix, PATH54, GET, option).json().then(r => r.body),
        /**
         * 得意先グループを追加更新削除します。
         * @returns OK
         */
        put: (option: { body: Methods_kt3vk8['put']['reqBody'], query?: Methods_kt3vk8['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_kt3vk8['put']['resBody'], BasicHeaders, Methods_kt3vk8['put']['status']>(prefix, PATH54, PUT, option).json(),
        /**
         * 得意先グループを追加更新削除します。
         * @returns OK
         */
        $put: (option: { body: Methods_kt3vk8['put']['reqBody'], query?: Methods_kt3vk8['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_kt3vk8['put']['resBody'], BasicHeaders, Methods_kt3vk8['put']['status']>(prefix, PATH54, PUT, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_kt3vk8['get']['query'] } | { method: 'put'; query: Methods_kt3vk8['put']['query'] } | undefined) =>
          `${prefix}${PATH54}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      customer_invents: {
        _customer_invent_id: (val2: number) => {
          const prefix2 = `${PATH55}/${val2}`;

          return {
            /**
             * 得意先商品を取得します
             * @returns OK
             */
            get: (option?: { query?: Methods_8kkbh9['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_8kkbh9['get']['resBody'], BasicHeaders, Methods_8kkbh9['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * 得意先商品を取得します
             * @returns OK
             */
            $get: (option?: { query?: Methods_8kkbh9['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_8kkbh9['get']['resBody'], BasicHeaders, Methods_8kkbh9['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_8kkbh9['get']['query'] } | undefined) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          };
        },
        /**
         * 得意先商品一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_1l1x8p['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1l1x8p['get']['resBody'], BasicHeaders, Methods_1l1x8p['get']['status']>(prefix, PATH55, GET, option).json(),
        /**
         * 得意先商品一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_1l1x8p['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1l1x8p['get']['resBody'], BasicHeaders, Methods_1l1x8p['get']['status']>(prefix, PATH55, GET, option).json().then(r => r.body),
        /**
         * 得意先商品を追加更新削除します。
         * @returns OK
         */
        put: (option: { body: Methods_1l1x8p['put']['reqBody'], query?: Methods_1l1x8p['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1l1x8p['put']['resBody'], BasicHeaders, Methods_1l1x8p['put']['status']>(prefix, PATH55, PUT, option).json(),
        /**
         * 得意先商品を追加更新削除します。
         * @returns OK
         */
        $put: (option: { body: Methods_1l1x8p['put']['reqBody'], query?: Methods_1l1x8p['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1l1x8p['put']['resBody'], BasicHeaders, Methods_1l1x8p['put']['status']>(prefix, PATH55, PUT, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_1l1x8p['get']['query'] } | { method: 'put'; query: Methods_1l1x8p['put']['query'] } | undefined) =>
          `${prefix}${PATH55}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      customer_sales: {
        bulk: {
          /**
           * 得意先営業担当者を一括更新します。ロックの取得を指定した場合、ロックの取得に成功した後、直ちにそのロックは解放されます。
           * @returns OK
           */
          post: (option: { body: Methods_1jnfmw5['post']['reqBody'], query?: Methods_1jnfmw5['post']['query'] | undefined, config?: T | undefined }) =>
            fetch<Methods_1jnfmw5['post']['resBody'], BasicHeaders, Methods_1jnfmw5['post']['status']>(prefix, PATH56, POST, option, 'FormData').json(),
          /**
           * 得意先営業担当者を一括更新します。ロックの取得を指定した場合、ロックの取得に成功した後、直ちにそのロックは解放されます。
           * @returns OK
           */
          $post: (option: { body: Methods_1jnfmw5['post']['reqBody'], query?: Methods_1jnfmw5['post']['query'] | undefined, config?: T | undefined }) =>
            fetch<Methods_1jnfmw5['post']['resBody'], BasicHeaders, Methods_1jnfmw5['post']['status']>(prefix, PATH56, POST, option, 'FormData').json().then(r => r.body),
          $path: (option?: { method: 'post'; query: Methods_1jnfmw5['post']['query'] } | undefined) =>
            `${prefix}${PATH56}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
      },
      customer_staffs: {
        bulk: {
          /**
           * 得意先先方担当者を一括更新します。ロックの取得を指定した場合、ロックの取得に成功した後、直ちにそのロックは解放されます。
           * @returns OK
           */
          post: (option: { body: Methods_1wx5efw['post']['reqBody'], query?: Methods_1wx5efw['post']['query'] | undefined, config?: T | undefined }) =>
            fetch<Methods_1wx5efw['post']['resBody'], BasicHeaders, Methods_1wx5efw['post']['status']>(prefix, PATH57, POST, option, 'FormData').json(),
          /**
           * 得意先先方担当者を一括更新します。ロックの取得を指定した場合、ロックの取得に成功した後、直ちにそのロックは解放されます。
           * @returns OK
           */
          $post: (option: { body: Methods_1wx5efw['post']['reqBody'], query?: Methods_1wx5efw['post']['query'] | undefined, config?: T | undefined }) =>
            fetch<Methods_1wx5efw['post']['resBody'], BasicHeaders, Methods_1wx5efw['post']['status']>(prefix, PATH57, POST, option, 'FormData').json().then(r => r.body),
          $path: (option?: { method: 'post'; query: Methods_1wx5efw['post']['query'] } | undefined) =>
            `${prefix}${PATH57}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
      },
      customers: {
        _customer_id: (val2: number) => {
          const prefix2 = `${PATH58}/${val2}`;

          return {
            inquire_haisou: {
              /**
               * 得意先の配送区分確認依頼を行います。
               */
              post: (option?: { config?: T | undefined } | undefined) =>
                fetch<void, BasicHeaders, Methods_1b33tdl['post']['status']>(prefix, `${prefix2}${PATH59}`, POST, option).send(),
              /**
               * 得意先の配送区分確認依頼を行います。
               */
              $post: (option?: { config?: T | undefined } | undefined) =>
                fetch<void, BasicHeaders, Methods_1b33tdl['post']['status']>(prefix, `${prefix2}${PATH59}`, POST, option).send().then(r => r.body),
              $path: () => `${prefix}${prefix2}${PATH59}`,
            },
            /**
             * 得意先を取得します。新たなロックを取得する前に、同一テーブルの同一ロックキー1に対する同一担当者によるロックは解除されます。
             * @returns OK
             */
            get: (option?: { query?: Methods_wf0acr['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_wf0acr['get']['resBody'], BasicHeaders, Methods_wf0acr['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * 得意先を取得します。新たなロックを取得する前に、同一テーブルの同一ロックキー1に対する同一担当者によるロックは解除されます。
             * @returns OK
             */
            $get: (option?: { query?: Methods_wf0acr['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_wf0acr['get']['resBody'], BasicHeaders, Methods_wf0acr['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_wf0acr['get']['query'] } | undefined) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          };
        },
        bulk_insert: {
          /**
           * 得意先を一括更新します。
           * @returns OK
           */
          post: (option: { body: Methods_fdqbgj['post']['reqBody'], query?: Methods_fdqbgj['post']['query'] | undefined, config?: T | undefined }) =>
            fetch<Methods_fdqbgj['post']['resBody'], BasicHeaders, Methods_fdqbgj['post']['status']>(prefix, PATH60, POST, option, 'FormData').json(),
          /**
           * 得意先を一括更新します。
           * @returns OK
           */
          $post: (option: { body: Methods_fdqbgj['post']['reqBody'], query?: Methods_fdqbgj['post']['query'] | undefined, config?: T | undefined }) =>
            fetch<Methods_fdqbgj['post']['resBody'], BasicHeaders, Methods_fdqbgj['post']['status']>(prefix, PATH60, POST, option, 'FormData').json().then(r => r.body),
          $path: (option?: { method: 'post'; query: Methods_fdqbgj['post']['query'] } | undefined) =>
            `${prefix}${PATH60}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
        bulk_update: {
          /**
           * 得意先を一括更新します。ロックの取得を指定した場合、ロックの取得に成功した後、直ちにそのロックは解放されます。
           * @returns OK
           */
          post: (option: { body: Methods_1i5yr2b['post']['reqBody'], query?: Methods_1i5yr2b['post']['query'] | undefined, config?: T | undefined }) =>
            fetch<Methods_1i5yr2b['post']['resBody'], BasicHeaders, Methods_1i5yr2b['post']['status']>(prefix, PATH61, POST, option, 'FormData').json(),
          /**
           * 得意先を一括更新します。ロックの取得を指定した場合、ロックの取得に成功した後、直ちにそのロックは解放されます。
           * @returns OK
           */
          $post: (option: { body: Methods_1i5yr2b['post']['reqBody'], query?: Methods_1i5yr2b['post']['query'] | undefined, config?: T | undefined }) =>
            fetch<Methods_1i5yr2b['post']['resBody'], BasicHeaders, Methods_1i5yr2b['post']['status']>(prefix, PATH61, POST, option, 'FormData').json().then(r => r.body),
          $path: (option?: { method: 'post'; query: Methods_1i5yr2b['post']['query'] } | undefined) =>
            `${prefix}${PATH61}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
        next_idm: {
          /**
           * 空いている得意先IDMを取得します。
           * @returns OK
           */
          get: (option?: { query?: Methods_1m06kkr['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1m06kkr['get']['resBody'], BasicHeaders, Methods_1m06kkr['get']['status']>(prefix, PATH62, GET, option).json(),
          /**
           * 空いている得意先IDMを取得します。
           * @returns OK
           */
          $get: (option?: { query?: Methods_1m06kkr['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1m06kkr['get']['resBody'], BasicHeaders, Methods_1m06kkr['get']['status']>(prefix, PATH62, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_1m06kkr['get']['query'] } | undefined) =>
            `${prefix}${PATH62}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
        /**
         * 得意先一覧を返します。新たなロックを取得する前に、同一テーブルの同一ロックキー1に対する同一担当者によるロックは解除されます。
         * @returns OK
         */
        get: (option: { query: Methods_r36syk['get']['query'], config?: T | undefined }) =>
          fetch<Methods_r36syk['get']['resBody'], BasicHeaders, Methods_r36syk['get']['status']>(prefix, PATH58, GET, option).json(),
        /**
         * 得意先一覧を返します。新たなロックを取得する前に、同一テーブルの同一ロックキー1に対する同一担当者によるロックは解除されます。
         * @returns OK
         */
        $get: (option: { query: Methods_r36syk['get']['query'], config?: T | undefined }) =>
          fetch<Methods_r36syk['get']['resBody'], BasicHeaders, Methods_r36syk['get']['status']>(prefix, PATH58, GET, option).json().then(r => r.body),
        /**
         * 得意先を追加更新削除します。
         * @returns OK
         */
        put: (option: { body: Methods_r36syk['put']['reqBody'], query?: Methods_r36syk['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_r36syk['put']['resBody'], BasicHeaders, Methods_r36syk['put']['status']>(prefix, PATH58, PUT, option).json(),
        /**
         * 得意先を追加更新削除します。
         * @returns OK
         */
        $put: (option: { body: Methods_r36syk['put']['reqBody'], query?: Methods_r36syk['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_r36syk['put']['resBody'], BasicHeaders, Methods_r36syk['put']['status']>(prefix, PATH58, PUT, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_r36syk['get']['query'] } | { method: 'put'; query: Methods_r36syk['put']['query'] } | undefined) =>
          `${prefix}${PATH58}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      customs_duties: {
        _customs_duty_id: (val2: number) => {
          const prefix2 = `${PATH63}/${val2}`;

          return {
            /**
             * 関税を取得します
             * @returns OK
             */
            get: (option?: { query?: Methods_z037ik['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_z037ik['get']['resBody'], BasicHeaders, Methods_z037ik['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * 関税を取得します
             * @returns OK
             */
            $get: (option?: { query?: Methods_z037ik['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_z037ik['get']['resBody'], BasicHeaders, Methods_z037ik['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_z037ik['get']['query'] } | undefined) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          };
        },
        /**
         * 関税一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_1cgpu6e['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1cgpu6e['get']['resBody'], BasicHeaders, Methods_1cgpu6e['get']['status']>(prefix, PATH63, GET, option).json(),
        /**
         * 関税一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_1cgpu6e['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1cgpu6e['get']['resBody'], BasicHeaders, Methods_1cgpu6e['get']['status']>(prefix, PATH63, GET, option).json().then(r => r.body),
        /**
         * 関税を追加更新削除します。
         * @returns OK
         */
        put: (option: { body: Methods_1cgpu6e['put']['reqBody'], query?: Methods_1cgpu6e['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1cgpu6e['put']['resBody'], BasicHeaders, Methods_1cgpu6e['put']['status']>(prefix, PATH63, PUT, option).json(),
        /**
         * 関税を追加更新削除します。
         * @returns OK
         */
        $put: (option: { body: Methods_1cgpu6e['put']['reqBody'], query?: Methods_1cgpu6e['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1cgpu6e['put']['resBody'], BasicHeaders, Methods_1cgpu6e['put']['status']>(prefix, PATH63, PUT, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_1cgpu6e['get']['query'] } | { method: 'put'; query: Methods_1cgpu6e['put']['query'] } | undefined) =>
          `${prefix}${PATH63}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      deposit_results: {
        execute_clearing: {
          /**
           * 入金実績に対する消込処理をします
           */
          put: (option: { body: Methods_i7pr1o['put']['reqBody'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_i7pr1o['put']['status']>(prefix, PATH65, PUT, option).send(),
          /**
           * 入金実績に対する消込処理をします
           */
          $put: (option: { body: Methods_i7pr1o['put']['reqBody'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_i7pr1o['put']['status']>(prefix, PATH65, PUT, option).send().then(r => r.body),
          $path: () => `${prefix}${PATH65}`,
        },
        schedule: {
          /**
           * 入金予定を返します
           * @returns OK
           */
          get: (option?: { query?: Methods_kadr1u['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_kadr1u['get']['resBody'], BasicHeaders, Methods_kadr1u['get']['status']>(prefix, PATH66, GET, option).json(),
          /**
           * 入金予定を返します
           * @returns OK
           */
          $get: (option?: { query?: Methods_kadr1u['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_kadr1u['get']['resBody'], BasicHeaders, Methods_kadr1u['get']['status']>(prefix, PATH66, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_kadr1u['get']['query'] } | undefined) =>
            `${prefix}${PATH66}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
        /**
         * 入金実績一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_nyh6h2['get']['query'], config?: T | undefined }) =>
          fetch<Methods_nyh6h2['get']['resBody'], BasicHeaders, Methods_nyh6h2['get']['status']>(prefix, PATH64, GET, option).json(),
        /**
         * 入金実績一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_nyh6h2['get']['query'], config?: T | undefined }) =>
          fetch<Methods_nyh6h2['get']['resBody'], BasicHeaders, Methods_nyh6h2['get']['status']>(prefix, PATH64, GET, option).json().then(r => r.body),
        /**
         * 入金実績を追加更新削除します。
         * @returns OK
         */
        put: (option: { body: Methods_nyh6h2['put']['reqBody'], query?: Methods_nyh6h2['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_nyh6h2['put']['resBody'], BasicHeaders, Methods_nyh6h2['put']['status']>(prefix, PATH64, PUT, option).json(),
        /**
         * 入金実績を追加更新削除します。
         * @returns OK
         */
        $put: (option: { body: Methods_nyh6h2['put']['reqBody'], query?: Methods_nyh6h2['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_nyh6h2['put']['resBody'], BasicHeaders, Methods_nyh6h2['put']['status']>(prefix, PATH64, PUT, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_nyh6h2['get']['query'] } | { method: 'put'; query: Methods_nyh6h2['put']['query'] } | undefined) =>
          `${prefix}${PATH64}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      deposit_schedules: {
        diff_customers: {
          /**
           * 入金予定が未作成の得意先一覧を取得します
           * @returns OK
           */
          get: (option: { query: Methods_1ep9sb6['get']['query'], config?: T | undefined }) =>
            fetch<Methods_1ep9sb6['get']['resBody'], BasicHeaders, Methods_1ep9sb6['get']['status']>(prefix, PATH68, GET, option).json(),
          /**
           * 入金予定が未作成の得意先一覧を取得します
           * @returns OK
           */
          $get: (option: { query: Methods_1ep9sb6['get']['query'], config?: T | undefined }) =>
            fetch<Methods_1ep9sb6['get']['resBody'], BasicHeaders, Methods_1ep9sb6['get']['status']>(prefix, PATH68, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_1ep9sb6['get']['query'] } | undefined) =>
            `${prefix}${PATH68}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
        make_zero_schedule: {
          /**
           * 入金予定をゼロ円で作成します
           * @returns OK
           */
          post: (option: { body: Methods_1kqxe6g['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_1kqxe6g['post']['resBody'], BasicHeaders, Methods_1kqxe6g['post']['status']>(prefix, PATH69, POST, option).json(),
          /**
           * 入金予定をゼロ円で作成します
           * @returns OK
           */
          $post: (option: { body: Methods_1kqxe6g['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_1kqxe6g['post']['resBody'], BasicHeaders, Methods_1kqxe6g['post']['status']>(prefix, PATH69, POST, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH69}`,
        },
        /**
         * 入金予約一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_w1oms2['get']['query'], config?: T | undefined }) =>
          fetch<Methods_w1oms2['get']['resBody'], BasicHeaders, Methods_w1oms2['get']['status']>(prefix, PATH67, GET, option).json(),
        /**
         * 入金予約一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_w1oms2['get']['query'], config?: T | undefined }) =>
          fetch<Methods_w1oms2['get']['resBody'], BasicHeaders, Methods_w1oms2['get']['status']>(prefix, PATH67, GET, option).json().then(r => r.body),
        /**
         * 入金予約を追加更新削除します。
         * @returns OK
         */
        put: (option: { body: Methods_w1oms2['put']['reqBody'], query?: Methods_w1oms2['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_w1oms2['put']['resBody'], BasicHeaders, Methods_w1oms2['put']['status']>(prefix, PATH67, PUT, option).json(),
        /**
         * 入金予約を追加更新削除します。
         * @returns OK
         */
        $put: (option: { body: Methods_w1oms2['put']['reqBody'], query?: Methods_w1oms2['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_w1oms2['put']['resBody'], BasicHeaders, Methods_w1oms2['put']['status']>(prefix, PATH67, PUT, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_w1oms2['get']['query'] } | { method: 'put'; query: Methods_w1oms2['put']['query'] } | undefined) =>
          `${prefix}${PATH67}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      domestic_order_prices: {
        bulk_delete: {
          /**
           * 国内発注単価を削除します。
           * @returns OK
           */
          put: (option: { body: Methods_1e7rz6['put']['reqBody'], query?: Methods_1e7rz6['put']['query'] | undefined, config?: T | undefined }) =>
            fetch<Methods_1e7rz6['put']['resBody'], BasicHeaders, Methods_1e7rz6['put']['status']>(prefix, PATH70, PUT, option).json(),
          /**
           * 国内発注単価を削除します。
           * @returns OK
           */
          $put: (option: { body: Methods_1e7rz6['put']['reqBody'], query?: Methods_1e7rz6['put']['query'] | undefined, config?: T | undefined }) =>
            fetch<Methods_1e7rz6['put']['resBody'], BasicHeaders, Methods_1e7rz6['put']['status']>(prefix, PATH70, PUT, option).json().then(r => r.body),
          $path: (option?: { method: 'put'; query: Methods_1e7rz6['put']['query'] } | undefined) =>
            `${prefix}${PATH70}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
      },
      domestic_orders: {
        _domestic_order_id: (val2: number) => {
          const prefix2 = `${PATH71}/${val2}`;

          return {
            /**
             * 国内発注を取得します
             * @returns OK
             */
            get: (option?: { query?: Methods_b9q4np['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_b9q4np['get']['resBody'], BasicHeaders, Methods_b9q4np['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * 国内発注を取得します
             * @returns OK
             */
            $get: (option?: { query?: Methods_b9q4np['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_b9q4np['get']['resBody'], BasicHeaders, Methods_b9q4np['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_b9q4np['get']['query'] } | undefined) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          };
        },
        print_purchase_order: {
          /**
           * 国内発注書を出力します。
           * @returns OK
           */
          post: (option: { body: Methods_p80k7a['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_p80k7a['post']['resBody'], BasicHeaders, Methods_p80k7a['post']['status']>(prefix, PATH72, POST, option).json(),
          /**
           * 国内発注書を出力します。
           * @returns OK
           */
          $post: (option: { body: Methods_p80k7a['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_p80k7a['post']['resBody'], BasicHeaders, Methods_p80k7a['post']['status']>(prefix, PATH72, POST, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH72}`,
        },
        /**
         * 国内発注一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_1vw3zbt['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1vw3zbt['get']['resBody'], BasicHeaders, Methods_1vw3zbt['get']['status']>(prefix, PATH71, GET, option).json(),
        /**
         * 国内発注一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_1vw3zbt['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1vw3zbt['get']['resBody'], BasicHeaders, Methods_1vw3zbt['get']['status']>(prefix, PATH71, GET, option).json().then(r => r.body),
        /**
         * 国内発注を追加更新削除します。
         * @returns OK
         */
        put: (option: { body: Methods_1vw3zbt['put']['reqBody'], query?: Methods_1vw3zbt['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1vw3zbt['put']['resBody'], BasicHeaders, Methods_1vw3zbt['put']['status']>(prefix, PATH71, PUT, option).json(),
        /**
         * 国内発注を追加更新削除します。
         * @returns OK
         */
        $put: (option: { body: Methods_1vw3zbt['put']['reqBody'], query?: Methods_1vw3zbt['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1vw3zbt['put']['resBody'], BasicHeaders, Methods_1vw3zbt['put']['status']>(prefix, PATH71, PUT, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_1vw3zbt['get']['query'] } | { method: 'put'; query: Methods_1vw3zbt['put']['query'] } | undefined) =>
          `${prefix}${PATH71}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      email_templates: {
        _email_template_id: (val2: number) => {
          const prefix2 = `${PATH73}/${val2}`;

          return {
            /**
             * Eメールテンプレートを取得します
             * @returns OK
             */
            get: (option?: { query?: Methods_1i5gfzh['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_1i5gfzh['get']['resBody'], BasicHeaders, Methods_1i5gfzh['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * Eメールテンプレートを取得します
             * @returns OK
             */
            $get: (option?: { query?: Methods_1i5gfzh['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_1i5gfzh['get']['resBody'], BasicHeaders, Methods_1i5gfzh['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_1i5gfzh['get']['query'] } | undefined) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          };
        },
        /**
         * Eメールテンプレート一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_17tyl6l['get']['query'], config?: T | undefined }) =>
          fetch<Methods_17tyl6l['get']['resBody'], BasicHeaders, Methods_17tyl6l['get']['status']>(prefix, PATH73, GET, option).json(),
        /**
         * Eメールテンプレート一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_17tyl6l['get']['query'], config?: T | undefined }) =>
          fetch<Methods_17tyl6l['get']['resBody'], BasicHeaders, Methods_17tyl6l['get']['status']>(prefix, PATH73, GET, option).json().then(r => r.body),
        /**
         * Eメールテンプレートを追加更新削除します。
         * @returns OK
         */
        put: (option: { body: Methods_17tyl6l['put']['reqBody'], query?: Methods_17tyl6l['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_17tyl6l['put']['resBody'], BasicHeaders, Methods_17tyl6l['put']['status']>(prefix, PATH73, PUT, option).json(),
        /**
         * Eメールテンプレートを追加更新削除します。
         * @returns OK
         */
        $put: (option: { body: Methods_17tyl6l['put']['reqBody'], query?: Methods_17tyl6l['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_17tyl6l['put']['resBody'], BasicHeaders, Methods_17tyl6l['put']['status']>(prefix, PATH73, PUT, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_17tyl6l['get']['query'] } | { method: 'put'; query: Methods_17tyl6l['put']['query'] } | undefined) =>
          `${prefix}${PATH73}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      exchange_contracts: {
        _exchange_contract_id: (val2: number) => {
          const prefix2 = `${PATH74}/${val2}`;

          return {
            /**
             * 為替予約を取得します
             * @returns OK
             */
            get: (option?: { query?: Methods_1i1wwq9['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_1i1wwq9['get']['resBody'], BasicHeaders, Methods_1i1wwq9['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * 為替予約を取得します
             * @returns OK
             */
            $get: (option?: { query?: Methods_1i1wwq9['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_1i1wwq9['get']['resBody'], BasicHeaders, Methods_1i1wwq9['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_1i1wwq9['get']['query'] } | undefined) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          };
        },
        /**
         * 為替予約一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_xvjyry['get']['query'], config?: T | undefined }) =>
          fetch<Methods_xvjyry['get']['resBody'], BasicHeaders, Methods_xvjyry['get']['status']>(prefix, PATH74, GET, option).json(),
        /**
         * 為替予約一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_xvjyry['get']['query'], config?: T | undefined }) =>
          fetch<Methods_xvjyry['get']['resBody'], BasicHeaders, Methods_xvjyry['get']['status']>(prefix, PATH74, GET, option).json().then(r => r.body),
        /**
         * 為替予約を追加更新削除します。
         * @returns OK
         */
        put: (option: { body: Methods_xvjyry['put']['reqBody'], query?: Methods_xvjyry['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_xvjyry['put']['resBody'], BasicHeaders, Methods_xvjyry['put']['status']>(prefix, PATH74, PUT, option).json(),
        /**
         * 為替予約を追加更新削除します。
         * @returns OK
         */
        $put: (option: { body: Methods_xvjyry['put']['reqBody'], query?: Methods_xvjyry['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_xvjyry['put']['resBody'], BasicHeaders, Methods_xvjyry['put']['status']>(prefix, PATH74, PUT, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_xvjyry['get']['query'] } | { method: 'put'; query: Methods_xvjyry['put']['query'] } | undefined) =>
          `${prefix}${PATH74}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      export_orders: {
        _invoice_no: (val2: string) => {
          const prefix2 = `${PATH75}/${val2}`;

          return {
            /**
             * 船積受注を取得します
             * @returns OK
             */
            get: (option?: { query?: Methods_1mhtrxf['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_1mhtrxf['get']['resBody'], BasicHeaders, Methods_1mhtrxf['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * 船積受注を取得します
             * @returns OK
             */
            $get: (option?: { query?: Methods_1mhtrxf['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_1mhtrxf['get']['resBody'], BasicHeaders, Methods_1mhtrxf['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_1mhtrxf['get']['query'] } | undefined) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          };
        },
        export_invent: {
          /**
           * 商品マスタ登録用データを出力します。
           */
          post: (option: { body: Methods_5zgg5v['post']['reqBody'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_5zgg5v['post']['status']>(prefix, PATH76, POST, option).send(),
          /**
           * 商品マスタ登録用データを出力します。
           */
          $post: (option: { body: Methods_5zgg5v['post']['reqBody'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_5zgg5v['post']['status']>(prefix, PATH76, POST, option).send().then(r => r.body),
          $path: () => `${prefix}${PATH76}`,
        },
        /**
         * 船積受注一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_b3sx4r['get']['query'], config?: T | undefined }) =>
          fetch<Methods_b3sx4r['get']['resBody'], BasicHeaders, Methods_b3sx4r['get']['status']>(prefix, PATH75, GET, option).json(),
        /**
         * 船積受注一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_b3sx4r['get']['query'], config?: T | undefined }) =>
          fetch<Methods_b3sx4r['get']['resBody'], BasicHeaders, Methods_b3sx4r['get']['status']>(prefix, PATH75, GET, option).json().then(r => r.body),
        /**
         * 船積受注を追加更新削除します。
         * @returns OK
         */
        put: (option: { body: Methods_b3sx4r['put']['reqBody'], query?: Methods_b3sx4r['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_b3sx4r['put']['resBody'], BasicHeaders, Methods_b3sx4r['put']['status']>(prefix, PATH75, PUT, option).json(),
        /**
         * 船積受注を追加更新削除します。
         * @returns OK
         */
        $put: (option: { body: Methods_b3sx4r['put']['reqBody'], query?: Methods_b3sx4r['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_b3sx4r['put']['resBody'], BasicHeaders, Methods_b3sx4r['put']['status']>(prefix, PATH75, PUT, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_b3sx4r['get']['query'] } | { method: 'put'; query: Methods_b3sx4r['put']['query'] } | undefined) =>
          `${prefix}${PATH75}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      fare_patterns: {
        _fare_pattern_id: (val2: number) => {
          const prefix2 = `${PATH77}/${val2}`;

          return {
            /**
             * 運賃パターンを取得します
             * @returns OK
             */
            get: (option?: { query?: Methods_4bxz9p['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_4bxz9p['get']['resBody'], BasicHeaders, Methods_4bxz9p['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * 運賃パターンを取得します
             * @returns OK
             */
            $get: (option?: { query?: Methods_4bxz9p['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_4bxz9p['get']['resBody'], BasicHeaders, Methods_4bxz9p['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_4bxz9p['get']['query'] } | undefined) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          };
        },
        /**
         * 運賃パターン一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_1ofvmlf['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1ofvmlf['get']['resBody'], BasicHeaders, Methods_1ofvmlf['get']['status']>(prefix, PATH77, GET, option).json(),
        /**
         * 運賃パターン一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_1ofvmlf['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1ofvmlf['get']['resBody'], BasicHeaders, Methods_1ofvmlf['get']['status']>(prefix, PATH77, GET, option).json().then(r => r.body),
        /**
         * 運賃パターンを追加更新削除します。
         * @returns OK
         */
        put: (option: { body: Methods_1ofvmlf['put']['reqBody'], query?: Methods_1ofvmlf['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1ofvmlf['put']['resBody'], BasicHeaders, Methods_1ofvmlf['put']['status']>(prefix, PATH77, PUT, option).json(),
        /**
         * 運賃パターンを追加更新削除します。
         * @returns OK
         */
        $put: (option: { body: Methods_1ofvmlf['put']['reqBody'], query?: Methods_1ofvmlf['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1ofvmlf['put']['resBody'], BasicHeaders, Methods_1ofvmlf['put']['status']>(prefix, PATH77, PUT, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_1ofvmlf['get']['query'] } | { method: 'put'; query: Methods_1ofvmlf['put']['query'] } | undefined) =>
          `${prefix}${PATH77}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      files: {
        /**
         * ファイルをアップロードします。
         * @returns OK
         */
        post: (option: { body: Methods_17hk18q['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_17hk18q['post']['resBody'], BasicHeaders, Methods_17hk18q['post']['status']>(prefix, PATH78, POST, option, 'FormData').json(),
        /**
         * ファイルをアップロードします。
         * @returns OK
         */
        $post: (option: { body: Methods_17hk18q['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_17hk18q['post']['resBody'], BasicHeaders, Methods_17hk18q['post']['status']>(prefix, PATH78, POST, option, 'FormData').json().then(r => r.body),
        $path: () => `${prefix}${PATH78}`,
      },
      foreign_currency_balances: {
        /**
         * 外貨残高一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_1tjwj7z['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1tjwj7z['get']['resBody'], BasicHeaders, Methods_1tjwj7z['get']['status']>(prefix, PATH79, GET, option).json(),
        /**
         * 外貨残高一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_1tjwj7z['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1tjwj7z['get']['resBody'], BasicHeaders, Methods_1tjwj7z['get']['status']>(prefix, PATH79, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_1tjwj7z['get']['query'] } | undefined) =>
          `${prefix}${PATH79}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      foreign_currency_management: {
        balance: {
          /**
           * 時点残高情報一覧を返します
           * @returns OK
           */
          get: (option: { query: Methods_12evxi['get']['query'], config?: T | undefined }) =>
            fetch<Methods_12evxi['get']['resBody'], BasicHeaders, Methods_12evxi['get']['status']>(prefix, PATH81, GET, option).json(),
          /**
           * 時点残高情報一覧を返します
           * @returns OK
           */
          $get: (option: { query: Methods_12evxi['get']['query'], config?: T | undefined }) =>
            fetch<Methods_12evxi['get']['resBody'], BasicHeaders, Methods_12evxi['get']['status']>(prefix, PATH81, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_12evxi['get']['query'] } | undefined) =>
            `${prefix}${PATH81}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
        /**
         * 外貨資金繰り一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_pnbu8p['get']['query'], config?: T | undefined }) =>
          fetch<Methods_pnbu8p['get']['resBody'], BasicHeaders, Methods_pnbu8p['get']['status']>(prefix, PATH80, GET, option).json(),
        /**
         * 外貨資金繰り一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_pnbu8p['get']['query'], config?: T | undefined }) =>
          fetch<Methods_pnbu8p['get']['resBody'], BasicHeaders, Methods_pnbu8p['get']['status']>(prefix, PATH80, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_pnbu8p['get']['query'] } | undefined) =>
          `${prefix}${PATH80}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      foreign_currency_purchases: {
        _foreign_currency_purchase_id: (val2: number | string) => {
          const prefix2 = `${PATH82}/${val2}`;

          return {
            /**
             * 外貨購入を取得します
             * @returns OK
             */
            get: (option?: { query?: Methods_188snr4['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_188snr4['get']['resBody'], BasicHeaders, Methods_188snr4['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * 外貨購入を取得します
             * @returns OK
             */
            $get: (option?: { query?: Methods_188snr4['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_188snr4['get']['resBody'], BasicHeaders, Methods_188snr4['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_188snr4['get']['query'] } | undefined) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          };
        },
        /**
         * 外貨購入一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_x8fg1a['get']['query'], config?: T | undefined }) =>
          fetch<Methods_x8fg1a['get']['resBody'], BasicHeaders, Methods_x8fg1a['get']['status']>(prefix, PATH82, GET, option).json(),
        /**
         * 外貨購入一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_x8fg1a['get']['query'], config?: T | undefined }) =>
          fetch<Methods_x8fg1a['get']['resBody'], BasicHeaders, Methods_x8fg1a['get']['status']>(prefix, PATH82, GET, option).json().then(r => r.body),
        /**
         * 外貨購入を追加更新削除します。
         * @returns OK
         */
        put: (option: { body: Methods_x8fg1a['put']['reqBody'], query?: Methods_x8fg1a['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_x8fg1a['put']['resBody'], BasicHeaders, Methods_x8fg1a['put']['status']>(prefix, PATH82, PUT, option).json(),
        /**
         * 外貨購入を追加更新削除します。
         * @returns OK
         */
        $put: (option: { body: Methods_x8fg1a['put']['reqBody'], query?: Methods_x8fg1a['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_x8fg1a['put']['resBody'], BasicHeaders, Methods_x8fg1a['put']['status']>(prefix, PATH82, PUT, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_x8fg1a['get']['query'] } | { method: 'put'; query: Methods_x8fg1a['put']['query'] } | undefined) =>
          `${prefix}${PATH82}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      foreign_deposit_receipts: {
        create_deposit: {
          /**
           * 海外入金データの入金登録をします。
           * @returns OK
           */
          post: (option: { body: Methods_1stqc44['post']['reqBody'], query?: Methods_1stqc44['post']['query'] | undefined, config?: T | undefined }) =>
            fetch<Methods_1stqc44['post']['resBody'], BasicHeaders, Methods_1stqc44['post']['status']>(prefix, PATH84, POST, option).json(),
          /**
           * 海外入金データの入金登録をします。
           * @returns OK
           */
          $post: (option: { body: Methods_1stqc44['post']['reqBody'], query?: Methods_1stqc44['post']['query'] | undefined, config?: T | undefined }) =>
            fetch<Methods_1stqc44['post']['resBody'], BasicHeaders, Methods_1stqc44['post']['status']>(prefix, PATH84, POST, option).json().then(r => r.body),
          $path: (option?: { method: 'post'; query: Methods_1stqc44['post']['query'] } | undefined) =>
            `${prefix}${PATH84}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
        /**
         * 海外入金データ受信一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_6dnb8['get']['query'], config?: T | undefined }) =>
          fetch<Methods_6dnb8['get']['resBody'], BasicHeaders, Methods_6dnb8['get']['status']>(prefix, PATH83, GET, option).json(),
        /**
         * 海外入金データ受信一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_6dnb8['get']['query'], config?: T | undefined }) =>
          fetch<Methods_6dnb8['get']['resBody'], BasicHeaders, Methods_6dnb8['get']['status']>(prefix, PATH83, GET, option).json().then(r => r.body),
        /**
         * 海外入金データ受信を取り込みます。
         */
        post: (option: { body: Methods_6dnb8['post']['reqBody'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_6dnb8['post']['status']>(prefix, PATH83, POST, option, 'FormData').send(),
        /**
         * 海外入金データ受信を取り込みます。
         */
        $post: (option: { body: Methods_6dnb8['post']['reqBody'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_6dnb8['post']['status']>(prefix, PATH83, POST, option, 'FormData').send().then(r => r.body),
        /**
         * 海外入金データ受信を追加更新削除します。
         * @returns OK
         */
        put: (option: { body: Methods_6dnb8['put']['reqBody'], query?: Methods_6dnb8['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_6dnb8['put']['resBody'], BasicHeaders, Methods_6dnb8['put']['status']>(prefix, PATH83, PUT, option).json(),
        /**
         * 海外入金データ受信を追加更新削除します。
         * @returns OK
         */
        $put: (option: { body: Methods_6dnb8['put']['reqBody'], query?: Methods_6dnb8['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_6dnb8['put']['resBody'], BasicHeaders, Methods_6dnb8['put']['status']>(prefix, PATH83, PUT, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_6dnb8['get']['query'] } | { method: 'put'; query: Methods_6dnb8['put']['query'] } | undefined) =>
          `${prefix}${PATH83}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      forwarder_costs: {
        _forwarder_cost_id: (val2: number) => {
          const prefix2 = `${PATH85}/${val2}`;

          return {
            /**
             * フォワーダー費用テンプレートを取得します
             * @returns OK
             */
            get: (option?: { query?: Methods_1ve6yzv['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_1ve6yzv['get']['resBody'], BasicHeaders, Methods_1ve6yzv['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * フォワーダー費用テンプレートを取得します
             * @returns OK
             */
            $get: (option?: { query?: Methods_1ve6yzv['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_1ve6yzv['get']['resBody'], BasicHeaders, Methods_1ve6yzv['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_1ve6yzv['get']['query'] } | undefined) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          };
        },
        /**
         * フォワーダー費用テンプレート一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_2a7k6q['get']['query'], config?: T | undefined }) =>
          fetch<Methods_2a7k6q['get']['resBody'], BasicHeaders, Methods_2a7k6q['get']['status']>(prefix, PATH85, GET, option).json(),
        /**
         * フォワーダー費用テンプレート一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_2a7k6q['get']['query'], config?: T | undefined }) =>
          fetch<Methods_2a7k6q['get']['resBody'], BasicHeaders, Methods_2a7k6q['get']['status']>(prefix, PATH85, GET, option).json().then(r => r.body),
        /**
         * フォワーダー費用テンプレートを追加更新削除します。
         * @returns OK
         */
        put: (option: { body: Methods_2a7k6q['put']['reqBody'], query?: Methods_2a7k6q['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_2a7k6q['put']['resBody'], BasicHeaders, Methods_2a7k6q['put']['status']>(prefix, PATH85, PUT, option).json(),
        /**
         * フォワーダー費用テンプレートを追加更新削除します。
         * @returns OK
         */
        $put: (option: { body: Methods_2a7k6q['put']['reqBody'], query?: Methods_2a7k6q['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_2a7k6q['put']['resBody'], BasicHeaders, Methods_2a7k6q['put']['status']>(prefix, PATH85, PUT, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_2a7k6q['get']['query'] } | { method: 'put'; query: Methods_2a7k6q['put']['query'] } | undefined) =>
          `${prefix}${PATH85}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      forwarder_recruits: {
        _forwarder_recruit_id: (val2: number) => {
          const prefix2 = `${PATH86}/${val2}`;

          return {
            /**
             * フォワーダー採用を取得します
             * @returns OK
             */
            get: (option?: { query?: Methods_1qwcyj1['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_1qwcyj1['get']['resBody'], BasicHeaders, Methods_1qwcyj1['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * フォワーダー採用を取得します
             * @returns OK
             */
            $get: (option?: { query?: Methods_1qwcyj1['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_1qwcyj1['get']['resBody'], BasicHeaders, Methods_1qwcyj1['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_1qwcyj1['get']['query'] } | undefined) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          };
        },
        /**
         * フォワーダー採用一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_1y72xnb['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1y72xnb['get']['resBody'], BasicHeaders, Methods_1y72xnb['get']['status']>(prefix, PATH86, GET, option).json(),
        /**
         * フォワーダー採用一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_1y72xnb['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1y72xnb['get']['resBody'], BasicHeaders, Methods_1y72xnb['get']['status']>(prefix, PATH86, GET, option).json().then(r => r.body),
        /**
         * フォワーダー採用を追加更新削除します。
         * @returns OK
         */
        put: (option: { body: Methods_1y72xnb['put']['reqBody'], query?: Methods_1y72xnb['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1y72xnb['put']['resBody'], BasicHeaders, Methods_1y72xnb['put']['status']>(prefix, PATH86, PUT, option).json(),
        /**
         * フォワーダー採用を追加更新削除します。
         * @returns OK
         */
        $put: (option: { body: Methods_1y72xnb['put']['reqBody'], query?: Methods_1y72xnb['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1y72xnb['put']['resBody'], BasicHeaders, Methods_1y72xnb['put']['status']>(prefix, PATH86, PUT, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_1y72xnb['get']['query'] } | { method: 'put'; query: Methods_1y72xnb['put']['query'] } | undefined) =>
          `${prefix}${PATH86}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      free_times: {
        _free_time_id: (val2: number) => {
          const prefix2 = `${PATH87}/${val2}`;

          return {
            /**
             * フリータイムを取得します
             * @returns OK
             */
            get: (option?: { query?: Methods_1j2sau9['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_1j2sau9['get']['resBody'], BasicHeaders, Methods_1j2sau9['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * フリータイムを取得します
             * @returns OK
             */
            $get: (option?: { query?: Methods_1j2sau9['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_1j2sau9['get']['resBody'], BasicHeaders, Methods_1j2sau9['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_1j2sau9['get']['query'] } | undefined) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          };
        },
        /**
         * フリータイム一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_1ngz80['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1ngz80['get']['resBody'], BasicHeaders, Methods_1ngz80['get']['status']>(prefix, PATH87, GET, option).json(),
        /**
         * フリータイム一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_1ngz80['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1ngz80['get']['resBody'], BasicHeaders, Methods_1ngz80['get']['status']>(prefix, PATH87, GET, option).json().then(r => r.body),
        /**
         * フリータイムを追加更新削除します。
         * @returns OK
         */
        put: (option: { body: Methods_1ngz80['put']['reqBody'], query?: Methods_1ngz80['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1ngz80['put']['resBody'], BasicHeaders, Methods_1ngz80['put']['status']>(prefix, PATH87, PUT, option).json(),
        /**
         * フリータイムを追加更新削除します。
         * @returns OK
         */
        $put: (option: { body: Methods_1ngz80['put']['reqBody'], query?: Methods_1ngz80['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1ngz80['put']['resBody'], BasicHeaders, Methods_1ngz80['put']['status']>(prefix, PATH87, PUT, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_1ngz80['get']['query'] } | { method: 'put'; query: Methods_1ngz80['put']['query'] } | undefined) =>
          `${prefix}${PATH87}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      freight_names: {
        /**
         * フレイト名称一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_18x16dx['get']['query'], config?: T | undefined }) =>
          fetch<Methods_18x16dx['get']['resBody'], BasicHeaders, Methods_18x16dx['get']['status']>(prefix, PATH88, GET, option).json(),
        /**
         * フレイト名称一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_18x16dx['get']['query'], config?: T | undefined }) =>
          fetch<Methods_18x16dx['get']['resBody'], BasicHeaders, Methods_18x16dx['get']['status']>(prefix, PATH88, GET, option).json().then(r => r.body),
        /**
         * フレイト名称を追加更新削除します。
         * @returns OK
         */
        put: (option: { body: Methods_18x16dx['put']['reqBody'], query?: Methods_18x16dx['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_18x16dx['put']['resBody'], BasicHeaders, Methods_18x16dx['put']['status']>(prefix, PATH88, PUT, option).json(),
        /**
         * フレイト名称を追加更新削除します。
         * @returns OK
         */
        $put: (option: { body: Methods_18x16dx['put']['reqBody'], query?: Methods_18x16dx['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_18x16dx['put']['resBody'], BasicHeaders, Methods_18x16dx['put']['status']>(prefix, PATH88, PUT, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_18x16dx['get']['query'] } | { method: 'put'; query: Methods_18x16dx['put']['query'] } | undefined) =>
          `${prefix}${PATH88}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      generic_searches: {
        _search_id: (val2: number) => {
          const prefix2 = `${PATH89}/${val2}`;

          return {
            /**
             * 汎用データを取得します
             * @returns OK
             */
            get: (option: { query: Methods_19dtxda['get']['query'], config?: T | undefined }) =>
              fetch<Methods_19dtxda['get']['resBody'], BasicHeaders, Methods_19dtxda['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * 汎用データを取得します
             * @returns OK
             */
            $get: (option: { query: Methods_19dtxda['get']['query'], config?: T | undefined }) =>
              fetch<Methods_19dtxda['get']['resBody'], BasicHeaders, Methods_19dtxda['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_19dtxda['get']['query'] } | undefined) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          };
        },
      },
      gradings: {
        _grading_id: (val2: number) => {
          const prefix2 = `${PATH90}/${val2}`;

          return {
            /**
             * 格付を取得します
             * @returns OK
             */
            get: (option?: { query?: Methods_4kv451['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_4kv451['get']['resBody'], BasicHeaders, Methods_4kv451['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * 格付を取得します
             * @returns OK
             */
            $get: (option?: { query?: Methods_4kv451['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_4kv451['get']['resBody'], BasicHeaders, Methods_4kv451['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_4kv451['get']['query'] } | undefined) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          };
        },
        /**
         * 格付一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_1111ebi['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1111ebi['get']['resBody'], BasicHeaders, Methods_1111ebi['get']['status']>(prefix, PATH90, GET, option).json(),
        /**
         * 格付一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_1111ebi['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1111ebi['get']['resBody'], BasicHeaders, Methods_1111ebi['get']['status']>(prefix, PATH90, GET, option).json().then(r => r.body),
        /**
         * 格付を追加更新削除します。
         * @returns OK
         */
        put: (option: { body: Methods_1111ebi['put']['reqBody'], query?: Methods_1111ebi['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1111ebi['put']['resBody'], BasicHeaders, Methods_1111ebi['put']['status']>(prefix, PATH90, PUT, option).json(),
        /**
         * 格付を追加更新削除します。
         * @returns OK
         */
        $put: (option: { body: Methods_1111ebi['put']['reqBody'], query?: Methods_1111ebi['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1111ebi['put']['resBody'], BasicHeaders, Methods_1111ebi['put']['status']>(prefix, PATH90, PUT, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_1111ebi['get']['query'] } | { method: 'put'; query: Methods_1111ebi['put']['query'] } | undefined) =>
          `${prefix}${PATH90}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      import_costs: {
        _no: (val2: string) => {
          const prefix2 = `${PATH91}/${val2}`;

          return {
            /**
             * コストを取得します
             * @returns OK
             */
            get: (option?: { query?: Methods_ge40bb['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_ge40bb['get']['resBody'], BasicHeaders, Methods_ge40bb['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * コストを取得します
             * @returns OK
             */
            $get: (option?: { query?: Methods_ge40bb['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_ge40bb['get']['resBody'], BasicHeaders, Methods_ge40bb['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_ge40bb['get']['query'] } | undefined) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          };
        },
        /**
         * コストを追加更新削除します。
         * @returns OK
         */
        put: (option: { body: Methods_1gjdqz3['put']['reqBody'], query?: Methods_1gjdqz3['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1gjdqz3['put']['resBody'], BasicHeaders, Methods_1gjdqz3['put']['status']>(prefix, PATH91, PUT, option).json(),
        /**
         * コストを追加更新削除します。
         * @returns OK
         */
        $put: (option: { body: Methods_1gjdqz3['put']['reqBody'], query?: Methods_1gjdqz3['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1gjdqz3['put']['resBody'], BasicHeaders, Methods_1gjdqz3['put']['status']>(prefix, PATH91, PUT, option).json().then(r => r.body),
        $path: (option?: { method: 'put'; query: Methods_1gjdqz3['put']['query'] } | undefined) =>
          `${prefix}${PATH91}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      import_payments: {
        detail: {
          /**
           * 輸入支払予定・実績入力一覧
           * @returns OK
           */
          get: (option: { query: Methods_qqvqv8['get']['query'], config?: T | undefined }) =>
            fetch<Methods_qqvqv8['get']['resBody'], BasicHeaders, Methods_qqvqv8['get']['status']>(prefix, PATH93, GET, option).json(),
          /**
           * 輸入支払予定・実績入力一覧
           * @returns OK
           */
          $get: (option: { query: Methods_qqvqv8['get']['query'], config?: T | undefined }) =>
            fetch<Methods_qqvqv8['get']['resBody'], BasicHeaders, Methods_qqvqv8['get']['status']>(prefix, PATH93, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_qqvqv8['get']['query'] } | undefined) =>
            `${prefix}${PATH93}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
        offset: {
          /**
           * 輸入支払予定・実績入力一覧
           * @returns OK
           */
          get: (option: { query: Methods_1243qvu['get']['query'], config?: T | undefined }) =>
            fetch<Methods_1243qvu['get']['resBody'], BasicHeaders, Methods_1243qvu['get']['status']>(prefix, PATH94, GET, option).json(),
          /**
           * 輸入支払予定・実績入力一覧
           * @returns OK
           */
          $get: (option: { query: Methods_1243qvu['get']['query'], config?: T | undefined }) =>
            fetch<Methods_1243qvu['get']['resBody'], BasicHeaders, Methods_1243qvu['get']['status']>(prefix, PATH94, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_1243qvu['get']['query'] } | undefined) =>
            `${prefix}${PATH94}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
        output_payment_file: {
          /**
           * 海外のインターネットバンキング用支払データを出力します。
           */
          post: (option: { body: Methods_1ncgoug['post']['reqBody'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_1ncgoug['post']['status']>(prefix, PATH95, POST, option).send(),
          /**
           * 海外のインターネットバンキング用支払データを出力します。
           */
          $post: (option: { body: Methods_1ncgoug['post']['reqBody'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_1ncgoug['post']['status']>(prefix, PATH95, POST, option).send().then(r => r.body),
          $path: () => `${prefix}${PATH95}`,
        },
        print_payment_schedule_check_list: {
          /**
           * 支払予定チェックリストを出力します。
           * @returns OK
           */
          post: (option: { body: Methods_99yb81['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_99yb81['post']['resBody'], BasicHeaders, Methods_99yb81['post']['status']>(prefix, PATH96, POST, option).json(),
          /**
           * 支払予定チェックリストを出力します。
           * @returns OK
           */
          $post: (option: { body: Methods_99yb81['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_99yb81['post']['resBody'], BasicHeaders, Methods_99yb81['post']['status']>(prefix, PATH96, POST, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH96}`,
        },
        /**
         * 輸入支払予定・実績入力一覧
         * @returns OK
         */
        get: (option: { query: Methods_1fbucig['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1fbucig['get']['resBody'], BasicHeaders, Methods_1fbucig['get']['status']>(prefix, PATH92, GET, option).json(),
        /**
         * 輸入支払予定・実績入力一覧
         * @returns OK
         */
        $get: (option: { query: Methods_1fbucig['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1fbucig['get']['resBody'], BasicHeaders, Methods_1fbucig['get']['status']>(prefix, PATH92, GET, option).json().then(r => r.body),
        /**
         * 支払実績を追加更新削除します。
         * @returns OK
         */
        put: (option: { body: Methods_1fbucig['put']['reqBody'], query?: Methods_1fbucig['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1fbucig['put']['resBody'], BasicHeaders, Methods_1fbucig['put']['status']>(prefix, PATH92, PUT, option).json(),
        /**
         * 支払実績を追加更新削除します。
         * @returns OK
         */
        $put: (option: { body: Methods_1fbucig['put']['reqBody'], query?: Methods_1fbucig['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1fbucig['put']['resBody'], BasicHeaders, Methods_1fbucig['put']['status']>(prefix, PATH92, PUT, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_1fbucig['get']['query'] } | { method: 'put'; query: Methods_1fbucig['put']['query'] } | undefined) =>
          `${prefix}${PATH92}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      import_prices: {
        bulk_delete: {
          /**
           * 輸入購買単価を削除します。
           * @returns OK
           */
          put: (option: { body: Methods_y7zikg['put']['reqBody'], query?: Methods_y7zikg['put']['query'] | undefined, config?: T | undefined }) =>
            fetch<Methods_y7zikg['put']['resBody'], BasicHeaders, Methods_y7zikg['put']['status']>(prefix, PATH97, PUT, option).json(),
          /**
           * 輸入購買単価を削除します。
           * @returns OK
           */
          $put: (option: { body: Methods_y7zikg['put']['reqBody'], query?: Methods_y7zikg['put']['query'] | undefined, config?: T | undefined }) =>
            fetch<Methods_y7zikg['put']['resBody'], BasicHeaders, Methods_y7zikg['put']['status']>(prefix, PATH97, PUT, option).json().then(r => r.body),
          $path: (option?: { method: 'put'; query: Methods_y7zikg['put']['query'] } | undefined) =>
            `${prefix}${PATH97}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
      },
      invent_arrival_history: {
        /**
         * 商品入荷履歴取得一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_23oyra['get']['query'], config?: T | undefined }) =>
          fetch<Methods_23oyra['get']['resBody'], BasicHeaders, Methods_23oyra['get']['status']>(prefix, PATH98, GET, option).json(),
        /**
         * 商品入荷履歴取得一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_23oyra['get']['query'], config?: T | undefined }) =>
          fetch<Methods_23oyra['get']['resBody'], BasicHeaders, Methods_23oyra['get']['status']>(prefix, PATH98, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_23oyra['get']['query'] } | undefined) =>
          `${prefix}${PATH98}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      invent_arrival_history_order: {
        /**
         * 商品入荷履歴取得一覧を返します
         * @returns OK
         */
        get: (option?: { query?: Methods_1k65e0d['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_1k65e0d['get']['resBody'], BasicHeaders, Methods_1k65e0d['get']['status']>(prefix, PATH99, GET, option).json(),
        /**
         * 商品入荷履歴取得一覧を返します
         * @returns OK
         */
        $get: (option?: { query?: Methods_1k65e0d['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_1k65e0d['get']['resBody'], BasicHeaders, Methods_1k65e0d['get']['status']>(prefix, PATH99, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_1k65e0d['get']['query'] } | undefined) =>
          `${prefix}${PATH99}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      invent_components: {
        _invent_component_id: (val2: number) => {
          const prefix2 = `${PATH100}/${val2}`;

          return {
            /**
             * 部品表を取得します
             * @returns OK
             */
            get: (option?: { query?: Methods_lxgr2f['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_lxgr2f['get']['resBody'], BasicHeaders, Methods_lxgr2f['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * 部品表を取得します
             * @returns OK
             */
            $get: (option?: { query?: Methods_lxgr2f['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_lxgr2f['get']['resBody'], BasicHeaders, Methods_lxgr2f['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_lxgr2f['get']['query'] } | undefined) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          };
        },
        /**
         * 部品表一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_ar0npg['get']['query'], config?: T | undefined }) =>
          fetch<Methods_ar0npg['get']['resBody'], BasicHeaders, Methods_ar0npg['get']['status']>(prefix, PATH100, GET, option).json(),
        /**
         * 部品表一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_ar0npg['get']['query'], config?: T | undefined }) =>
          fetch<Methods_ar0npg['get']['resBody'], BasicHeaders, Methods_ar0npg['get']['status']>(prefix, PATH100, GET, option).json().then(r => r.body),
        /**
         * 部品表を追加更新削除します。
         * @returns OK
         */
        put: (option: { body: Methods_ar0npg['put']['reqBody'], query?: Methods_ar0npg['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_ar0npg['put']['resBody'], BasicHeaders, Methods_ar0npg['put']['status']>(prefix, PATH100, PUT, option).json(),
        /**
         * 部品表を追加更新削除します。
         * @returns OK
         */
        $put: (option: { body: Methods_ar0npg['put']['reqBody'], query?: Methods_ar0npg['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_ar0npg['put']['resBody'], BasicHeaders, Methods_ar0npg['put']['status']>(prefix, PATH100, PUT, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_ar0npg['get']['query'] } | { method: 'put'; query: Methods_ar0npg['put']['query'] } | undefined) =>
          `${prefix}${PATH100}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      invent_memos: {
        _invent_memo_id: (val2: number) => {
          const prefix2 = `${PATH101}/${val2}`;

          return {
            /**
             * 商品メモを取得します
             * @returns OK
             */
            get: (option?: { query?: Methods_1sgyhnd['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_1sgyhnd['get']['resBody'], BasicHeaders, Methods_1sgyhnd['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * 商品メモを取得します
             * @returns OK
             */
            $get: (option?: { query?: Methods_1sgyhnd['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_1sgyhnd['get']['resBody'], BasicHeaders, Methods_1sgyhnd['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_1sgyhnd['get']['query'] } | undefined) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          };
        },
        /**
         * 商品メモ一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_jd3o97['get']['query'], config?: T | undefined }) =>
          fetch<Methods_jd3o97['get']['resBody'], BasicHeaders, Methods_jd3o97['get']['status']>(prefix, PATH101, GET, option).json(),
        /**
         * 商品メモ一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_jd3o97['get']['query'], config?: T | undefined }) =>
          fetch<Methods_jd3o97['get']['resBody'], BasicHeaders, Methods_jd3o97['get']['status']>(prefix, PATH101, GET, option).json().then(r => r.body),
        /**
         * 商品メモを追加更新削除します。
         * @returns OK
         */
        put: (option: { body: Methods_jd3o97['put']['reqBody'], query?: Methods_jd3o97['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_jd3o97['put']['resBody'], BasicHeaders, Methods_jd3o97['put']['status']>(prefix, PATH101, PUT, option).json(),
        /**
         * 商品メモを追加更新削除します。
         * @returns OK
         */
        $put: (option: { body: Methods_jd3o97['put']['reqBody'], query?: Methods_jd3o97['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_jd3o97['put']['resBody'], BasicHeaders, Methods_jd3o97['put']['status']>(prefix, PATH101, PUT, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_jd3o97['get']['query'] } | { method: 'put'; query: Methods_jd3o97['put']['query'] } | undefined) =>
          `${prefix}${PATH101}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      invent_web_cutouts: {
        bulk: {
          /**
           * WEB在庫切出を一括登録更新します。ロックの取得を指定した場合、ロックの取得に成功した後、直ちにそのロックは解放されます。
           * @returns OK
           */
          post: (option: { body: Methods_1kq6ph1['post']['reqBody'], query?: Methods_1kq6ph1['post']['query'] | undefined, config?: T | undefined }) =>
            fetch<Methods_1kq6ph1['post']['resBody'], BasicHeaders, Methods_1kq6ph1['post']['status']>(prefix, PATH102, POST, option, 'FormData').json(),
          /**
           * WEB在庫切出を一括登録更新します。ロックの取得を指定した場合、ロックの取得に成功した後、直ちにそのロックは解放されます。
           * @returns OK
           */
          $post: (option: { body: Methods_1kq6ph1['post']['reqBody'], query?: Methods_1kq6ph1['post']['query'] | undefined, config?: T | undefined }) =>
            fetch<Methods_1kq6ph1['post']['resBody'], BasicHeaders, Methods_1kq6ph1['post']['status']>(prefix, PATH102, POST, option, 'FormData').json().then(r => r.body),
          $path: (option?: { method: 'post'; query: Methods_1kq6ph1['post']['query'] } | undefined) =>
            `${prefix}${PATH102}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
      },
      inventory_result_details: {
        /**
         * 棚卸実棚一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_j3lfvq['get']['query'], config?: T | undefined }) =>
          fetch<Methods_j3lfvq['get']['resBody'], BasicHeaders, Methods_j3lfvq['get']['status']>(prefix, PATH103, GET, option).json(),
        /**
         * 棚卸実棚一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_j3lfvq['get']['query'], config?: T | undefined }) =>
          fetch<Methods_j3lfvq['get']['resBody'], BasicHeaders, Methods_j3lfvq['get']['status']>(prefix, PATH103, GET, option).json().then(r => r.body),
        /**
         * 棚卸実棚を追加更新削除します。
         * @returns OK
         */
        put: (option: { body: Methods_j3lfvq['put']['reqBody'], query?: Methods_j3lfvq['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_j3lfvq['put']['resBody'], BasicHeaders, Methods_j3lfvq['put']['status']>(prefix, PATH103, PUT, option).json(),
        /**
         * 棚卸実棚を追加更新削除します。
         * @returns OK
         */
        $put: (option: { body: Methods_j3lfvq['put']['reqBody'], query?: Methods_j3lfvq['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_j3lfvq['put']['resBody'], BasicHeaders, Methods_j3lfvq['put']['status']>(prefix, PATH103, PUT, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_j3lfvq['get']['query'] } | { method: 'put'; query: Methods_j3lfvq['put']['query'] } | undefined) =>
          `${prefix}${PATH103}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      inventory_results: {
        _inventory_result_id: (val2: number) => {
          const prefix2 = `${PATH104}/${val2}`;

          return {
            /**
             * 棚卸情報を取得します
             * @returns OK
             */
            get: (option?: { query?: Methods_1kgohir['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_1kgohir['get']['resBody'], BasicHeaders, Methods_1kgohir['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * 棚卸情報を取得します
             * @returns OK
             */
            $get: (option?: { query?: Methods_1kgohir['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_1kgohir['get']['resBody'], BasicHeaders, Methods_1kgohir['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_1kgohir['get']['query'] } | undefined) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          };
        },
        export_list: {
          /**
           * 棚卸リストを出力します。
           */
          post: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods_9y6ov4['post']['status']>(prefix, PATH105, POST, option).send(),
          /**
           * 棚卸リストを出力します。
           */
          $post: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods_9y6ov4['post']['status']>(prefix, PATH105, POST, option).send().then(r => r.body),
          $path: () => `${prefix}${PATH105}`,
        },
        /**
         * 棚卸実績一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_11yy8z8['get']['query'], config?: T | undefined }) =>
          fetch<Methods_11yy8z8['get']['resBody'], BasicHeaders, Methods_11yy8z8['get']['status']>(prefix, PATH104, GET, option).json(),
        /**
         * 棚卸実績一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_11yy8z8['get']['query'], config?: T | undefined }) =>
          fetch<Methods_11yy8z8['get']['resBody'], BasicHeaders, Methods_11yy8z8['get']['status']>(prefix, PATH104, GET, option).json().then(r => r.body),
        /**
         * 棚卸実績を追加更新削除します。
         * @returns OK
         */
        put: (option: { body: Methods_11yy8z8['put']['reqBody'], query?: Methods_11yy8z8['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_11yy8z8['put']['resBody'], BasicHeaders, Methods_11yy8z8['put']['status']>(prefix, PATH104, PUT, option).json(),
        /**
         * 棚卸実績を追加更新削除します。
         * @returns OK
         */
        $put: (option: { body: Methods_11yy8z8['put']['reqBody'], query?: Methods_11yy8z8['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_11yy8z8['put']['resBody'], BasicHeaders, Methods_11yy8z8['put']['status']>(prefix, PATH104, PUT, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_11yy8z8['get']['query'] } | { method: 'put'; query: Methods_11yy8z8['put']['query'] } | undefined) =>
          `${prefix}${PATH104}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      invents: {
        _invent_id: (val2: number) => {
          const prefix2 = `${PATH106}/${val2}`;

          return {
            image: {
              /**
               * 商品画像を取得します
               * @returns OK
               */
              get: (option: { query: Methods_u1k3ol['get']['query'], config?: T | undefined }) =>
                fetch<Methods_u1k3ol['get']['resBody'], BasicHeaders, Methods_u1k3ol['get']['status']>(prefix, `${prefix2}${PATH107}`, GET, option).blob(),
              /**
               * 商品画像を取得します
               * @returns OK
               */
              $get: (option: { query: Methods_u1k3ol['get']['query'], config?: T | undefined }) =>
                fetch<Methods_u1k3ol['get']['resBody'], BasicHeaders, Methods_u1k3ol['get']['status']>(prefix, `${prefix2}${PATH107}`, GET, option).blob().then(r => r.body),
              $path: (option?: { method?: 'get' | undefined; query: Methods_u1k3ol['get']['query'] } | undefined) =>
                `${prefix}${prefix2}${PATH107}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
            },
            update_domestic_order_price: {
              /**
               * 国内発注単価単価を追加更新します。対象の商品のロックが取得されていなければ、失敗します。
               * @returns OK
               */
              post: (option: { body: Methods_13n386z['post']['reqBody'], config?: T | undefined }) =>
                fetch<Methods_13n386z['post']['resBody'], BasicHeaders, Methods_13n386z['post']['status']>(prefix, `${prefix2}${PATH108}`, POST, option).json(),
              /**
               * 国内発注単価単価を追加更新します。対象の商品のロックが取得されていなければ、失敗します。
               * @returns OK
               */
              $post: (option: { body: Methods_13n386z['post']['reqBody'], config?: T | undefined }) =>
                fetch<Methods_13n386z['post']['resBody'], BasicHeaders, Methods_13n386z['post']['status']>(prefix, `${prefix2}${PATH108}`, POST, option).json().then(r => r.body),
              $path: () => `${prefix}${prefix2}${PATH108}`,
            },
            update_import_price: {
              /**
               * 輸入購買単価を追加更新します。対象の商品のロックが取得されていなければ、失敗します。
               * @returns OK
               */
              post: (option: { body: Methods_1samrrx['post']['reqBody'], config?: T | undefined }) =>
                fetch<Methods_1samrrx['post']['resBody'], BasicHeaders, Methods_1samrrx['post']['status']>(prefix, `${prefix2}${PATH109}`, POST, option).json(),
              /**
               * 輸入購買単価を追加更新します。対象の商品のロックが取得されていなければ、失敗します。
               * @returns OK
               */
              $post: (option: { body: Methods_1samrrx['post']['reqBody'], config?: T | undefined }) =>
                fetch<Methods_1samrrx['post']['resBody'], BasicHeaders, Methods_1samrrx['post']['status']>(prefix, `${prefix2}${PATH109}`, POST, option).json().then(r => r.body),
              $path: () => `${prefix}${prefix2}${PATH109}`,
            },
            update_sales_price: {
              /**
               * 商品販売単価を追加更新します。対象の商品のロックが取得されていなければ、失敗します。
               * @returns OK
               */
              post: (option: { body: Methods_uf28mc['post']['reqBody'], config?: T | undefined }) =>
                fetch<Methods_uf28mc['post']['resBody'], BasicHeaders, Methods_uf28mc['post']['status']>(prefix, `${prefix2}${PATH110}`, POST, option).json(),
              /**
               * 商品販売単価を追加更新します。対象の商品のロックが取得されていなければ、失敗します。
               * @returns OK
               */
              $post: (option: { body: Methods_uf28mc['post']['reqBody'], config?: T | undefined }) =>
                fetch<Methods_uf28mc['post']['resBody'], BasicHeaders, Methods_uf28mc['post']['status']>(prefix, `${prefix2}${PATH110}`, POST, option).json().then(r => r.body),
              $path: () => `${prefix}${prefix2}${PATH110}`,
            },
            /**
             * 商品を取得します。新たなロックを取得する前に、同一テーブルの同一ロックキー1に対する同一担当者によるロックは解除されます。
             * @returns OK
             */
            get: (option?: { query?: Methods_12391tz['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_12391tz['get']['resBody'], BasicHeaders, Methods_12391tz['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * 商品を取得します。新たなロックを取得する前に、同一テーブルの同一ロックキー1に対する同一担当者によるロックは解除されます。
             * @returns OK
             */
            $get: (option?: { query?: Methods_12391tz['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_12391tz['get']['resBody'], BasicHeaders, Methods_12391tz['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_12391tz['get']['query'] } | undefined) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          };
        },
        bulk_insert: {
          /**
           * 商品を一括登録します。
           * @returns OK
           */
          post: (option: { body: Methods_11kq16j['post']['reqBody'], query?: Methods_11kq16j['post']['query'] | undefined, config?: T | undefined }) =>
            fetch<Methods_11kq16j['post']['resBody'], BasicHeaders, Methods_11kq16j['post']['status']>(prefix, PATH111, POST, option, 'FormData').json(),
          /**
           * 商品を一括登録します。
           * @returns OK
           */
          $post: (option: { body: Methods_11kq16j['post']['reqBody'], query?: Methods_11kq16j['post']['query'] | undefined, config?: T | undefined }) =>
            fetch<Methods_11kq16j['post']['resBody'], BasicHeaders, Methods_11kq16j['post']['status']>(prefix, PATH111, POST, option, 'FormData').json().then(r => r.body),
          $path: (option?: { method: 'post'; query: Methods_11kq16j['post']['query'] } | undefined) =>
            `${prefix}${PATH111}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
        bulk_update: {
          /**
           * 商品を一括更新します。ロックの取得を指定した場合、ロックの取得に成功した後、直ちにそのロックは解放されます。
           * @returns OK
           */
          post: (option: { body: Methods_1yzam1n['post']['reqBody'], query?: Methods_1yzam1n['post']['query'] | undefined, config?: T | undefined }) =>
            fetch<Methods_1yzam1n['post']['resBody'], BasicHeaders, Methods_1yzam1n['post']['status']>(prefix, PATH112, POST, option, 'FormData').json(),
          /**
           * 商品を一括更新します。ロックの取得を指定した場合、ロックの取得に成功した後、直ちにそのロックは解放されます。
           * @returns OK
           */
          $post: (option: { body: Methods_1yzam1n['post']['reqBody'], query?: Methods_1yzam1n['post']['query'] | undefined, config?: T | undefined }) =>
            fetch<Methods_1yzam1n['post']['resBody'], BasicHeaders, Methods_1yzam1n['post']['status']>(prefix, PATH112, POST, option, 'FormData').json().then(r => r.body),
          $path: (option?: { method: 'post'; query: Methods_1yzam1n['post']['query'] } | undefined) =>
            `${prefix}${PATH112}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
        bulk_update_async: {
          /**
           * 商品を一括更新します。応答には user_logs も含まれます。embed はバッチ出力に対する指示になります。
           * @returns OK
           */
          post: (option: { body: Methods_13niho0['post']['reqBody'], query?: Methods_13niho0['post']['query'] | undefined, config?: T | undefined }) =>
            fetch<Methods_13niho0['post']['resBody'], BasicHeaders, Methods_13niho0['post']['status']>(prefix, PATH113, POST, option, 'FormData').json(),
          /**
           * 商品を一括更新します。応答には user_logs も含まれます。embed はバッチ出力に対する指示になります。
           * @returns OK
           */
          $post: (option: { body: Methods_13niho0['post']['reqBody'], query?: Methods_13niho0['post']['query'] | undefined, config?: T | undefined }) =>
            fetch<Methods_13niho0['post']['resBody'], BasicHeaders, Methods_13niho0['post']['status']>(prefix, PATH113, POST, option, 'FormData').json().then(r => r.body),
          $path: (option?: { method: 'post'; query: Methods_13niho0['post']['query'] } | undefined) =>
            `${prefix}${PATH113}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
        export_idm: {
          /**
           * 品番データを出力します。
           */
          post: (option: { body: Methods_16wz06w['post']['reqBody'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_16wz06w['post']['status']>(prefix, PATH114, POST, option).send(),
          /**
           * 品番データを出力します。
           */
          $post: (option: { body: Methods_16wz06w['post']['reqBody'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_16wz06w['post']['status']>(prefix, PATH114, POST, option).send().then(r => r.body),
          $path: () => `${prefix}${PATH114}`,
        },
        export_jan: {
          /**
           * 商品JAN送付リストを出力します。ロックの取得を指定した場合、ロックの取得に成功した後、直ちにそのロックは解放されます。
           * @returns OK
           */
          post: (option?: { query?: Methods_bsxz29['post']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_bsxz29['post']['resBody'], BasicHeaders, Methods_bsxz29['post']['status']>(prefix, PATH115, POST, option).json(),
          /**
           * 商品JAN送付リストを出力します。ロックの取得を指定した場合、ロックの取得に成功した後、直ちにそのロックは解放されます。
           * @returns OK
           */
          $post: (option?: { query?: Methods_bsxz29['post']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_bsxz29['post']['resBody'], BasicHeaders, Methods_bsxz29['post']['status']>(prefix, PATH115, POST, option).json().then(r => r.body),
          $path: (option?: { method: 'post'; query: Methods_bsxz29['post']['query'] } | undefined) =>
            `${prefix}${PATH115}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
        /**
         * 商品一覧を返します。新たなロックを取得する前に、同一テーブルの同一ロックキー1に対する同一担当者によるロックは解除されます。
         * @returns OK
         */
        get: (option: { query: Methods_1nstg1g['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1nstg1g['get']['resBody'], BasicHeaders, Methods_1nstg1g['get']['status']>(prefix, PATH106, GET, option).json(),
        /**
         * 商品一覧を返します。新たなロックを取得する前に、同一テーブルの同一ロックキー1に対する同一担当者によるロックは解除されます。
         * @returns OK
         */
        $get: (option: { query: Methods_1nstg1g['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1nstg1g['get']['resBody'], BasicHeaders, Methods_1nstg1g['get']['status']>(prefix, PATH106, GET, option).json().then(r => r.body),
        /**
         * 商品を追加更新削除します。
         * @returns OK
         */
        put: (option: { body: Methods_1nstg1g['put']['reqBody'], query?: Methods_1nstg1g['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1nstg1g['put']['resBody'], BasicHeaders, Methods_1nstg1g['put']['status']>(prefix, PATH106, PUT, option).json(),
        /**
         * 商品を追加更新削除します。
         * @returns OK
         */
        $put: (option: { body: Methods_1nstg1g['put']['reqBody'], query?: Methods_1nstg1g['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1nstg1g['put']['resBody'], BasicHeaders, Methods_1nstg1g['put']['status']>(prefix, PATH106, PUT, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_1nstg1g['get']['query'] } | { method: 'put'; query: Methods_1nstg1g['put']['query'] } | undefined) =>
          `${prefix}${PATH106}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      label_boxes: {
        _label_box_id: (val2: number) => {
          const prefix2 = `${PATH116}/${val2}`;

          return {
            /**
             * 函ラベルを取得します
             * @returns OK
             */
            get: (option?: { query?: Methods_1908li0['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_1908li0['get']['resBody'], BasicHeaders, Methods_1908li0['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * 函ラベルを取得します
             * @returns OK
             */
            $get: (option?: { query?: Methods_1908li0['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_1908li0['get']['resBody'], BasicHeaders, Methods_1908li0['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_1908li0['get']['query'] } | undefined) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          };
        },
        /**
         * 函ラベル一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_ql0721['get']['query'], config?: T | undefined }) =>
          fetch<Methods_ql0721['get']['resBody'], BasicHeaders, Methods_ql0721['get']['status']>(prefix, PATH116, GET, option).json(),
        /**
         * 函ラベル一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_ql0721['get']['query'], config?: T | undefined }) =>
          fetch<Methods_ql0721['get']['resBody'], BasicHeaders, Methods_ql0721['get']['status']>(prefix, PATH116, GET, option).json().then(r => r.body),
        /**
         * 函ラベルを追加更新削除します。
         * @returns OK
         */
        put: (option: { body: Methods_ql0721['put']['reqBody'], query?: Methods_ql0721['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_ql0721['put']['resBody'], BasicHeaders, Methods_ql0721['put']['status']>(prefix, PATH116, PUT, option).json(),
        /**
         * 函ラベルを追加更新削除します。
         * @returns OK
         */
        $put: (option: { body: Methods_ql0721['put']['reqBody'], query?: Methods_ql0721['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_ql0721['put']['resBody'], BasicHeaders, Methods_ql0721['put']['status']>(prefix, PATH116, PUT, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_ql0721['get']['query'] } | { method: 'put'; query: Methods_ql0721['put']['query'] } | undefined) =>
          `${prefix}${PATH116}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      liquor_tax_names: {
        _liquor_tax_name_id: (val2: number) => {
          const prefix2 = `${PATH117}/${val2}`;

          return {
            /**
             * 酒税名を取得します
             * @returns OK
             */
            get: (option?: { query?: Methods_14dce7x['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_14dce7x['get']['resBody'], BasicHeaders, Methods_14dce7x['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * 酒税名を取得します
             * @returns OK
             */
            $get: (option?: { query?: Methods_14dce7x['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_14dce7x['get']['resBody'], BasicHeaders, Methods_14dce7x['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_14dce7x['get']['query'] } | undefined) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          };
        },
        /**
         * 酒税名一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_13zfhse['get']['query'], config?: T | undefined }) =>
          fetch<Methods_13zfhse['get']['resBody'], BasicHeaders, Methods_13zfhse['get']['status']>(prefix, PATH117, GET, option).json(),
        /**
         * 酒税名一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_13zfhse['get']['query'], config?: T | undefined }) =>
          fetch<Methods_13zfhse['get']['resBody'], BasicHeaders, Methods_13zfhse['get']['status']>(prefix, PATH117, GET, option).json().then(r => r.body),
        /**
         * 酒税名を追加更新削除します。
         * @returns OK
         */
        put: (option: { body: Methods_13zfhse['put']['reqBody'], query?: Methods_13zfhse['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_13zfhse['put']['resBody'], BasicHeaders, Methods_13zfhse['put']['status']>(prefix, PATH117, PUT, option).json(),
        /**
         * 酒税名を追加更新削除します。
         * @returns OK
         */
        $put: (option: { body: Methods_13zfhse['put']['reqBody'], query?: Methods_13zfhse['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_13zfhse['put']['resBody'], BasicHeaders, Methods_13zfhse['put']['status']>(prefix, PATH117, PUT, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_13zfhse['get']['query'] } | { method: 'put'; query: Methods_13zfhse['put']['query'] } | undefined) =>
          `${prefix}${PATH117}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      liquor_tax_reports: {
        print_liquor_tax: {
          /**
           * 酒税報告書（得意先向け・税務署&酒販組合向け）を出力します。
           * @returns OK
           */
          post: (option: { body: Methods_1f945pk['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_1f945pk['post']['resBody'], BasicHeaders, Methods_1f945pk['post']['status']>(prefix, PATH118, POST, option).json(),
          /**
           * 酒税報告書（得意先向け・税務署&酒販組合向け）を出力します。
           * @returns OK
           */
          $post: (option: { body: Methods_1f945pk['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_1f945pk['post']['resBody'], BasicHeaders, Methods_1f945pk['post']['status']>(prefix, PATH118, POST, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH118}`,
        },
      },
      liquor_taxes: {
        _liquor_tax_id: (val2: number) => {
          const prefix2 = `${PATH119}/${val2}`;

          return {
            /**
             * 酒税取得します
             * @returns OK
             */
            get: (option?: { query?: Methods_vbdjy0['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_vbdjy0['get']['resBody'], BasicHeaders, Methods_vbdjy0['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * 酒税取得します
             * @returns OK
             */
            $get: (option?: { query?: Methods_vbdjy0['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_vbdjy0['get']['resBody'], BasicHeaders, Methods_vbdjy0['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_vbdjy0['get']['query'] } | undefined) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          };
        },
        /**
         * 酒税一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_3ll19x['get']['query'], config?: T | undefined }) =>
          fetch<Methods_3ll19x['get']['resBody'], BasicHeaders, Methods_3ll19x['get']['status']>(prefix, PATH119, GET, option).json(),
        /**
         * 酒税一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_3ll19x['get']['query'], config?: T | undefined }) =>
          fetch<Methods_3ll19x['get']['resBody'], BasicHeaders, Methods_3ll19x['get']['status']>(prefix, PATH119, GET, option).json().then(r => r.body),
        /**
         * 酒税を追加更新削除します。
         * @returns OK
         */
        put: (option: { body: Methods_3ll19x['put']['reqBody'], query?: Methods_3ll19x['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_3ll19x['put']['resBody'], BasicHeaders, Methods_3ll19x['put']['status']>(prefix, PATH119, PUT, option).json(),
        /**
         * 酒税を追加更新削除します。
         * @returns OK
         */
        $put: (option: { body: Methods_3ll19x['put']['reqBody'], query?: Methods_3ll19x['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_3ll19x['put']['resBody'], BasicHeaders, Methods_3ll19x['put']['status']>(prefix, PATH119, PUT, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_3ll19x['get']['query'] } | { method: 'put'; query: Methods_3ll19x['put']['query'] } | undefined) =>
          `${prefix}${PATH119}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      locations: {
        _location_id: (val2: number) => {
          const prefix2 = `${PATH120}/${val2}`;

          return {
            /**
             * 倉庫を取得します
             * @returns OK
             */
            get: (option?: { query?: Methods_1bsycfh['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_1bsycfh['get']['resBody'], BasicHeaders, Methods_1bsycfh['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * 倉庫を取得します
             * @returns OK
             */
            $get: (option?: { query?: Methods_1bsycfh['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_1bsycfh['get']['resBody'], BasicHeaders, Methods_1bsycfh['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_1bsycfh['get']['query'] } | undefined) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          };
        },
        /**
         * 倉庫一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_1cigxz9['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1cigxz9['get']['resBody'], BasicHeaders, Methods_1cigxz9['get']['status']>(prefix, PATH120, GET, option).json(),
        /**
         * 倉庫一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_1cigxz9['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1cigxz9['get']['resBody'], BasicHeaders, Methods_1cigxz9['get']['status']>(prefix, PATH120, GET, option).json().then(r => r.body),
        /**
         * 倉庫を追加更新削除します。
         * @returns OK
         */
        put: (option: { body: Methods_1cigxz9['put']['reqBody'], query?: Methods_1cigxz9['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1cigxz9['put']['resBody'], BasicHeaders, Methods_1cigxz9['put']['status']>(prefix, PATH120, PUT, option).json(),
        /**
         * 倉庫を追加更新削除します。
         * @returns OK
         */
        $put: (option: { body: Methods_1cigxz9['put']['reqBody'], query?: Methods_1cigxz9['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1cigxz9['put']['resBody'], BasicHeaders, Methods_1cigxz9['put']['status']>(prefix, PATH120, PUT, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_1cigxz9['get']['query'] } | { method: 'put'; query: Methods_1cigxz9['put']['query'] } | undefined) =>
          `${prefix}${PATH120}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      locks: {
        unlock: {
          /**
           * ロックを解除します。
           * @returns OK
           */
          post: (option: { body: Methods_1u6dxdu['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_1u6dxdu['post']['resBody'], BasicHeaders, Methods_1u6dxdu['post']['status']>(prefix, PATH122, POST, option).json(),
          /**
           * ロックを解除します。
           * @returns OK
           */
          $post: (option: { body: Methods_1u6dxdu['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_1u6dxdu['post']['resBody'], BasicHeaders, Methods_1u6dxdu['post']['status']>(prefix, PATH122, POST, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH122}`,
        },
        unlock_by: {
          /**
           * 条件を指定してロックを解除します。
           */
          post: (option: { body: Methods_txvhjm['post']['reqBody'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_txvhjm['post']['status']>(prefix, PATH123, POST, option).send(),
          /**
           * 条件を指定してロックを解除します。
           */
          $post: (option: { body: Methods_txvhjm['post']['reqBody'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_txvhjm['post']['status']>(prefix, PATH123, POST, option).send().then(r => r.body),
          $path: () => `${prefix}${PATH123}`,
        },
        /**
         * ロック一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_divw6l['get']['query'], config?: T | undefined }) =>
          fetch<Methods_divw6l['get']['resBody'], BasicHeaders, Methods_divw6l['get']['status']>(prefix, PATH121, GET, option).json(),
        /**
         * ロック一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_divw6l['get']['query'], config?: T | undefined }) =>
          fetch<Methods_divw6l['get']['resBody'], BasicHeaders, Methods_divw6l['get']['status']>(prefix, PATH121, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_divw6l['get']['query'] } | undefined) =>
          `${prefix}${PATH121}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      maintenance: {
        down: {
          /**
           * メンテナンスモードを開始します。所定のユーザからのみ呼び出せます。
           */
          post: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods_bakjrf['post']['status']>(prefix, PATH124, POST, option).send(),
          /**
           * メンテナンスモードを開始します。所定のユーザからのみ呼び出せます。
           */
          $post: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods_bakjrf['post']['status']>(prefix, PATH124, POST, option).send().then(r => r.body),
          $path: () => `${prefix}${PATH124}`,
        },
        up: {
          /**
           * メンテナンスモードを終了します。所定のユーザからのみ呼び出せます。
           */
          post: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods_37cbl6['post']['status']>(prefix, PATH125, POST, option).send(),
          /**
           * メンテナンスモードを終了します。所定のユーザからのみ呼び出せます。
           */
          $post: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods_37cbl6['post']['status']>(prefix, PATH125, POST, option).send().then(r => r.body),
          $path: () => `${prefix}${PATH125}`,
        },
      },
      message_group_user_links: {
        _message_group_user_link_id: (val2: number) => {
          const prefix2 = `${PATH126}/${val2}`;

          return {
            /**
             * メッセージグループ～担当者紐付を取得します
             * @returns OK
             */
            get: (option?: { query?: Methods_1kd8jxh['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_1kd8jxh['get']['resBody'], BasicHeaders, Methods_1kd8jxh['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * メッセージグループ～担当者紐付を取得します
             * @returns OK
             */
            $get: (option?: { query?: Methods_1kd8jxh['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_1kd8jxh['get']['resBody'], BasicHeaders, Methods_1kd8jxh['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_1kd8jxh['get']['query'] } | undefined) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          };
        },
        /**
         * メッセージグループ～担当者紐付一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_1mv35ha['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1mv35ha['get']['resBody'], BasicHeaders, Methods_1mv35ha['get']['status']>(prefix, PATH126, GET, option).json(),
        /**
         * メッセージグループ～担当者紐付一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_1mv35ha['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1mv35ha['get']['resBody'], BasicHeaders, Methods_1mv35ha['get']['status']>(prefix, PATH126, GET, option).json().then(r => r.body),
        /**
         * メッセージグループ～担当者紐付を追加更新削除します。
         * @returns OK
         */
        put: (option: { body: Methods_1mv35ha['put']['reqBody'], query?: Methods_1mv35ha['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1mv35ha['put']['resBody'], BasicHeaders, Methods_1mv35ha['put']['status']>(prefix, PATH126, PUT, option).json(),
        /**
         * メッセージグループ～担当者紐付を追加更新削除します。
         * @returns OK
         */
        $put: (option: { body: Methods_1mv35ha['put']['reqBody'], query?: Methods_1mv35ha['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1mv35ha['put']['resBody'], BasicHeaders, Methods_1mv35ha['put']['status']>(prefix, PATH126, PUT, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_1mv35ha['get']['query'] } | { method: 'put'; query: Methods_1mv35ha['put']['query'] } | undefined) =>
          `${prefix}${PATH126}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      message_groups: {
        _message_group_id: (val2: number) => {
          const prefix2 = `${PATH127}/${val2}`;

          return {
            /**
             * メッセージグループを取得します
             * @returns OK
             */
            get: (option?: { query?: Methods_1xqslvt['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_1xqslvt['get']['resBody'], BasicHeaders, Methods_1xqslvt['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * メッセージグループを取得します
             * @returns OK
             */
            $get: (option?: { query?: Methods_1xqslvt['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_1xqslvt['get']['resBody'], BasicHeaders, Methods_1xqslvt['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_1xqslvt['get']['query'] } | undefined) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          };
        },
        /**
         * メッセージグループ一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_1am2667['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1am2667['get']['resBody'], BasicHeaders, Methods_1am2667['get']['status']>(prefix, PATH127, GET, option).json(),
        /**
         * メッセージグループ一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_1am2667['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1am2667['get']['resBody'], BasicHeaders, Methods_1am2667['get']['status']>(prefix, PATH127, GET, option).json().then(r => r.body),
        /**
         * メッセージグループを追加更新削除します。
         * @returns OK
         */
        put: (option: { body: Methods_1am2667['put']['reqBody'], query?: Methods_1am2667['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1am2667['put']['resBody'], BasicHeaders, Methods_1am2667['put']['status']>(prefix, PATH127, PUT, option).json(),
        /**
         * メッセージグループを追加更新削除します。
         * @returns OK
         */
        $put: (option: { body: Methods_1am2667['put']['reqBody'], query?: Methods_1am2667['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1am2667['put']['resBody'], BasicHeaders, Methods_1am2667['put']['status']>(prefix, PATH127, PUT, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_1am2667['get']['query'] } | { method: 'put'; query: Methods_1am2667['put']['query'] } | undefined) =>
          `${prefix}${PATH127}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      monthly_closings: {
        close: {
          /**
           * 月次締めもしくは解除を行います。
           */
          post: (option: { body: Methods_1jw8p0a['post']['reqBody'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_1jw8p0a['post']['status']>(prefix, PATH128, POST, option).send(),
          /**
           * 月次締めもしくは解除を行います。
           */
          $post: (option: { body: Methods_1jw8p0a['post']['reqBody'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_1jw8p0a['post']['status']>(prefix, PATH128, POST, option).send().then(r => r.body),
          $path: () => `${prefix}${PATH128}`,
        },
        next: {
          /**
           * 月次締めすべき年月を取得します。
           * @returns OK
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_1tla1ib['get']['resBody'], BasicHeaders, Methods_1tla1ib['get']['status']>(prefix, PATH129, GET, option).json(),
          /**
           * 月次締めすべき年月を取得します。
           * @returns OK
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_1tla1ib['get']['resBody'], BasicHeaders, Methods_1tla1ib['get']['status']>(prefix, PATH129, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH129}`,
        },
      },
      monthly_cost_prices: {
        /**
         * 月別商品別原価単価一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_mnx317['get']['query'], config?: T | undefined }) =>
          fetch<Methods_mnx317['get']['resBody'], BasicHeaders, Methods_mnx317['get']['status']>(prefix, PATH130, GET, option).json(),
        /**
         * 月別商品別原価単価一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_mnx317['get']['query'], config?: T | undefined }) =>
          fetch<Methods_mnx317['get']['resBody'], BasicHeaders, Methods_mnx317['get']['status']>(prefix, PATH130, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_mnx317['get']['query'] } | undefined) =>
          `${prefix}${PATH130}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      monthly_sales: {
        arrival_schedule: {
          /**
           * 次回以降入荷予定一覧データを取得します
           * @returns OK
           */
          get: (option: { query: Methods_pls8j7['get']['query'], config?: T | undefined }) =>
            fetch<Methods_pls8j7['get']['resBody'], BasicHeaders, Methods_pls8j7['get']['status']>(prefix, PATH132, GET, option).json(),
          /**
           * 次回以降入荷予定一覧データを取得します
           * @returns OK
           */
          $get: (option: { query: Methods_pls8j7['get']['query'], config?: T | undefined }) =>
            fetch<Methods_pls8j7['get']['resBody'], BasicHeaders, Methods_pls8j7['get']['status']>(prefix, PATH132, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_pls8j7['get']['query'] } | undefined) =>
            `${prefix}${PATH132}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
        other_vintage: {
          /**
           * 同一商品別年号一覧データを取得します
           * @returns OK
           */
          get: (option: { query: Methods_1sgd813['get']['query'], config?: T | undefined }) =>
            fetch<Methods_1sgd813['get']['resBody'], BasicHeaders, Methods_1sgd813['get']['status']>(prefix, PATH133, GET, option).json(),
          /**
           * 同一商品別年号一覧データを取得します
           * @returns OK
           */
          $get: (option: { query: Methods_1sgd813['get']['query'], config?: T | undefined }) =>
            fetch<Methods_1sgd813['get']['resBody'], BasicHeaders, Methods_1sgd813['get']['status']>(prefix, PATH133, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_1sgd813['get']['query'] } | undefined) =>
            `${prefix}${PATH133}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
        print_stockout_vt_change: {
          /**
           * 欠品VT変更案内を出力します。
           * @returns OK
           */
          post: (option: { body: Methods_feejpm['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_feejpm['post']['resBody'], BasicHeaders, Methods_feejpm['post']['status']>(prefix, PATH134, POST, option).json(),
          /**
           * 欠品VT変更案内を出力します。
           * @returns OK
           */
          $post: (option: { body: Methods_feejpm['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_feejpm['post']['resBody'], BasicHeaders, Methods_feejpm['post']['status']>(prefix, PATH134, POST, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH134}`,
        },
        /**
         * 得意先別月販一覧データを取得します
         * @returns OK
         */
        get: (option: { query: Methods_76wwif['get']['query'], config?: T | undefined }) =>
          fetch<Methods_76wwif['get']['resBody'], BasicHeaders, Methods_76wwif['get']['status']>(prefix, PATH131, GET, option).json(),
        /**
         * 得意先別月販一覧データを取得します
         * @returns OK
         */
        $get: (option: { query: Methods_76wwif['get']['query'], config?: T | undefined }) =>
          fetch<Methods_76wwif['get']['resBody'], BasicHeaders, Methods_76wwif['get']['status']>(prefix, PATH131, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_76wwif['get']['query'] } | undefined) =>
          `${prefix}${PATH131}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      monthly_transaction_totals: {
        location: {
          /**
           * 倉庫別月別在庫受払集計データを取得します
           * @returns OK
           */
          get: (option: { query: Methods_13er6gn['get']['query'], config?: T | undefined }) =>
            fetch<Methods_13er6gn['get']['resBody'], BasicHeaders, Methods_13er6gn['get']['status']>(prefix, PATH136, GET, option).json(),
          /**
           * 倉庫別月別在庫受払集計データを取得します
           * @returns OK
           */
          $get: (option: { query: Methods_13er6gn['get']['query'], config?: T | undefined }) =>
            fetch<Methods_13er6gn['get']['resBody'], BasicHeaders, Methods_13er6gn['get']['status']>(prefix, PATH136, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_13er6gn['get']['query'] } | undefined) =>
            `${prefix}${PATH136}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
        /**
         * 全社月別在庫受払集計データを取得します
         * @returns OK
         */
        get: (option: { query: Methods_1xzi3fj['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1xzi3fj['get']['resBody'], BasicHeaders, Methods_1xzi3fj['get']['status']>(prefix, PATH135, GET, option).json(),
        /**
         * 全社月別在庫受払集計データを取得します
         * @returns OK
         */
        $get: (option: { query: Methods_1xzi3fj['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1xzi3fj['get']['resBody'], BasicHeaders, Methods_1xzi3fj['get']['status']>(prefix, PATH135, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_1xzi3fj['get']['query'] } | undefined) =>
          `${prefix}${PATH135}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      mtx_campaign: {
        /**
         * キャンペーン一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_t18b3p['get']['query'], config?: T | undefined }) =>
          fetch<Methods_t18b3p['get']['resBody'], BasicHeaders, Methods_t18b3p['get']['status']>(prefix, PATH137, GET, option).json(),
        /**
         * キャンペーン一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_t18b3p['get']['query'], config?: T | undefined }) =>
          fetch<Methods_t18b3p['get']['resBody'], BasicHeaders, Methods_t18b3p['get']['status']>(prefix, PATH137, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_t18b3p['get']['query'] } | undefined) =>
          `${prefix}${PATH137}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      mtx_webifmng_weborder: {
        /**
         * WEB受注連携データ管理一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_1xzdd5b['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1xzdd5b['get']['resBody'], BasicHeaders, Methods_1xzdd5b['get']['status']>(prefix, PATH138, GET, option).json(),
        /**
         * WEB受注連携データ管理一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_1xzdd5b['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1xzdd5b['get']['resBody'], BasicHeaders, Methods_1xzdd5b['get']['status']>(prefix, PATH138, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_1xzdd5b['get']['query'] } | undefined) =>
          `${prefix}${PATH138}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      names: {
        /**
         * 名称一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_72nb4x['get']['query'], config?: T | undefined }) =>
          fetch<Methods_72nb4x['get']['resBody'], BasicHeaders, Methods_72nb4x['get']['status']>(prefix, PATH139, GET, option).json(),
        /**
         * 名称一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_72nb4x['get']['query'], config?: T | undefined }) =>
          fetch<Methods_72nb4x['get']['resBody'], BasicHeaders, Methods_72nb4x['get']['status']>(prefix, PATH139, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_72nb4x['get']['query'] } | undefined) =>
          `${prefix}${PATH139}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      order_makers: {
        _order_maker_id: (val2: number) => {
          const prefix2 = `${PATH140}/${val2}`;

          return {
            /**
             * 生産者依頼を取得します
             * @returns OK
             */
            get: (option?: { query?: Methods_apntr1['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_apntr1['get']['resBody'], BasicHeaders, Methods_apntr1['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * 生産者依頼を取得します
             * @returns OK
             */
            $get: (option?: { query?: Methods_apntr1['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_apntr1['get']['resBody'], BasicHeaders, Methods_apntr1['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_apntr1['get']['query'] } | undefined) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          };
        },
        /**
         * 生産者依頼一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_1igz8tv['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1igz8tv['get']['resBody'], BasicHeaders, Methods_1igz8tv['get']['status']>(prefix, PATH140, GET, option).json(),
        /**
         * 生産者依頼一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_1igz8tv['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1igz8tv['get']['resBody'], BasicHeaders, Methods_1igz8tv['get']['status']>(prefix, PATH140, GET, option).json().then(r => r.body),
        /**
         * 生産者依頼を追加更新削除します。
         * @returns OK
         */
        put: (option: { body: Methods_1igz8tv['put']['reqBody'], query?: Methods_1igz8tv['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1igz8tv['put']['resBody'], BasicHeaders, Methods_1igz8tv['put']['status']>(prefix, PATH140, PUT, option).json(),
        /**
         * 生産者依頼を追加更新削除します。
         * @returns OK
         */
        $put: (option: { body: Methods_1igz8tv['put']['reqBody'], query?: Methods_1igz8tv['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1igz8tv['put']['resBody'], BasicHeaders, Methods_1igz8tv['put']['status']>(prefix, PATH140, PUT, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_1igz8tv['get']['query'] } | { method: 'put'; query: Methods_1igz8tv['put']['query'] } | undefined) =>
          `${prefix}${PATH140}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      order_notes: {
        _order_note_id: (val2: number) => {
          const prefix2 = `${PATH141}/${val2}`;

          return {
            /**
             * 発注者覚書を取得します
             * @returns OK
             */
            get: (option?: { query?: Methods_dx44v5['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_dx44v5['get']['resBody'], BasicHeaders, Methods_dx44v5['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * 発注者覚書を取得します
             * @returns OK
             */
            $get: (option?: { query?: Methods_dx44v5['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_dx44v5['get']['resBody'], BasicHeaders, Methods_dx44v5['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_dx44v5['get']['query'] } | undefined) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          };
        },
        /**
         * 発注者覚書一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_1vyl7x7['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1vyl7x7['get']['resBody'], BasicHeaders, Methods_1vyl7x7['get']['status']>(prefix, PATH141, GET, option).json(),
        /**
         * 発注者覚書一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_1vyl7x7['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1vyl7x7['get']['resBody'], BasicHeaders, Methods_1vyl7x7['get']['status']>(prefix, PATH141, GET, option).json().then(r => r.body),
        /**
         * 発注者覚書を追加更新削除します。
         * @returns OK
         */
        put: (option: { body: Methods_1vyl7x7['put']['reqBody'], query?: Methods_1vyl7x7['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1vyl7x7['put']['resBody'], BasicHeaders, Methods_1vyl7x7['put']['status']>(prefix, PATH141, PUT, option).json(),
        /**
         * 発注者覚書を追加更新削除します。
         * @returns OK
         */
        $put: (option: { body: Methods_1vyl7x7['put']['reqBody'], query?: Methods_1vyl7x7['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1vyl7x7['put']['resBody'], BasicHeaders, Methods_1vyl7x7['put']['status']>(prefix, PATH141, PUT, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_1vyl7x7['get']['query'] } | { method: 'put'; query: Methods_1vyl7x7['put']['query'] } | undefined) =>
          `${prefix}${PATH141}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      order_warehouses: {
        _order_warehouse_id: (val2: number) => {
          const prefix2 = `${PATH142}/${val2}`;

          return {
            /**
             * 倉庫依頼を取得します
             * @returns OK
             */
            get: (option?: { query?: Methods_1pl6pl9['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_1pl6pl9['get']['resBody'], BasicHeaders, Methods_1pl6pl9['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * 倉庫依頼を取得します
             * @returns OK
             */
            $get: (option?: { query?: Methods_1pl6pl9['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_1pl6pl9['get']['resBody'], BasicHeaders, Methods_1pl6pl9['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_1pl6pl9['get']['query'] } | undefined) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          };
        },
        /**
         * 倉庫依頼一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_kt45oq['get']['query'], config?: T | undefined }) =>
          fetch<Methods_kt45oq['get']['resBody'], BasicHeaders, Methods_kt45oq['get']['status']>(prefix, PATH142, GET, option).json(),
        /**
         * 倉庫依頼一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_kt45oq['get']['query'], config?: T | undefined }) =>
          fetch<Methods_kt45oq['get']['resBody'], BasicHeaders, Methods_kt45oq['get']['status']>(prefix, PATH142, GET, option).json().then(r => r.body),
        /**
         * 倉庫依頼を追加更新削除します。
         * @returns OK
         */
        put: (option: { body: Methods_kt45oq['put']['reqBody'], query?: Methods_kt45oq['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_kt45oq['put']['resBody'], BasicHeaders, Methods_kt45oq['put']['status']>(prefix, PATH142, PUT, option).json(),
        /**
         * 倉庫依頼を追加更新削除します。
         * @returns OK
         */
        $put: (option: { body: Methods_kt45oq['put']['reqBody'], query?: Methods_kt45oq['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_kt45oq['put']['resBody'], BasicHeaders, Methods_kt45oq['put']['status']>(prefix, PATH142, PUT, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_kt45oq['get']['query'] } | { method: 'put'; query: Methods_kt45oq['put']['query'] } | undefined) =>
          `${prefix}${PATH142}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      other_vintage_inquiry: {
        /**
         * 年号別商品一覧データを取得します
         * @returns OK
         */
        get: (option: { query: Methods_10ff2s4['get']['query'], config?: T | undefined }) =>
          fetch<Methods_10ff2s4['get']['resBody'], BasicHeaders, Methods_10ff2s4['get']['status']>(prefix, PATH143, GET, option).json(),
        /**
         * 年号別商品一覧データを取得します
         * @returns OK
         */
        $get: (option: { query: Methods_10ff2s4['get']['query'], config?: T | undefined }) =>
          fetch<Methods_10ff2s4['get']['resBody'], BasicHeaders, Methods_10ff2s4['get']['status']>(prefix, PATH143, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_10ff2s4['get']['query'] } | undefined) =>
          `${prefix}${PATH143}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      page_groups: {
        _page_group_id: (val2: number) => {
          const prefix2 = `${PATH144}/${val2}`;

          return {
            /**
             * 画面グループを取得します
             * @returns OK
             */
            get: (option?: { query?: Methods_1cme90t['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_1cme90t['get']['resBody'], BasicHeaders, Methods_1cme90t['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * 画面グループを取得します
             * @returns OK
             */
            $get: (option?: { query?: Methods_1cme90t['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_1cme90t['get']['resBody'], BasicHeaders, Methods_1cme90t['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_1cme90t['get']['query'] } | undefined) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          };
        },
        /**
         * 画面グループ一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_1uzakjx['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1uzakjx['get']['resBody'], BasicHeaders, Methods_1uzakjx['get']['status']>(prefix, PATH144, GET, option).json(),
        /**
         * 画面グループ一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_1uzakjx['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1uzakjx['get']['resBody'], BasicHeaders, Methods_1uzakjx['get']['status']>(prefix, PATH144, GET, option).json().then(r => r.body),
        /**
         * 画面グループを追加更新削除します。
         * @returns OK
         */
        put: (option: { body: Methods_1uzakjx['put']['reqBody'], query?: Methods_1uzakjx['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1uzakjx['put']['resBody'], BasicHeaders, Methods_1uzakjx['put']['status']>(prefix, PATH144, PUT, option).json(),
        /**
         * 画面グループを追加更新削除します。
         * @returns OK
         */
        $put: (option: { body: Methods_1uzakjx['put']['reqBody'], query?: Methods_1uzakjx['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1uzakjx['put']['resBody'], BasicHeaders, Methods_1uzakjx['put']['status']>(prefix, PATH144, PUT, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_1uzakjx['get']['query'] } | { method: 'put'; query: Methods_1uzakjx['put']['query'] } | undefined) =>
          `${prefix}${PATH144}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      page_lists: {
        _page_list_id: (val2: number) => {
          const prefix2 = `${PATH145}/${val2}`;

          return {
            /**
             * 画面リストを取得します
             * @returns OK
             */
            get: (option?: { query?: Methods_1x93pwp['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_1x93pwp['get']['resBody'], BasicHeaders, Methods_1x93pwp['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * 画面リストを取得します
             * @returns OK
             */
            $get: (option?: { query?: Methods_1x93pwp['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_1x93pwp['get']['resBody'], BasicHeaders, Methods_1x93pwp['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_1x93pwp['get']['query'] } | undefined) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          };
        },
        /**
         * 画面リスト一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_qplfo6['get']['query'], config?: T | undefined }) =>
          fetch<Methods_qplfo6['get']['resBody'], BasicHeaders, Methods_qplfo6['get']['status']>(prefix, PATH145, GET, option).json(),
        /**
         * 画面リスト一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_qplfo6['get']['query'], config?: T | undefined }) =>
          fetch<Methods_qplfo6['get']['resBody'], BasicHeaders, Methods_qplfo6['get']['status']>(prefix, PATH145, GET, option).json().then(r => r.body),
        /**
         * 画面リストを追加更新削除します。
         * @returns OK
         */
        put: (option: { body: Methods_qplfo6['put']['reqBody'], query?: Methods_qplfo6['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_qplfo6['put']['resBody'], BasicHeaders, Methods_qplfo6['put']['status']>(prefix, PATH145, PUT, option).json(),
        /**
         * 画面リストを追加更新削除します。
         * @returns OK
         */
        $put: (option: { body: Methods_qplfo6['put']['reqBody'], query?: Methods_qplfo6['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_qplfo6['put']['resBody'], BasicHeaders, Methods_qplfo6['put']['status']>(prefix, PATH145, PUT, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_qplfo6['get']['query'] } | { method: 'put'; query: Methods_qplfo6['put']['query'] } | undefined) =>
          `${prefix}${PATH145}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      page_user_links: {
        /**
         * 画面制御一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_1ags7yg['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1ags7yg['get']['resBody'], BasicHeaders, Methods_1ags7yg['get']['status']>(prefix, PATH146, GET, option).json(),
        /**
         * 画面制御一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_1ags7yg['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1ags7yg['get']['resBody'], BasicHeaders, Methods_1ags7yg['get']['status']>(prefix, PATH146, GET, option).json().then(r => r.body),
        /**
         * 画面制御を追加更新削除します。
         * @returns OK
         */
        put: (option: { body: Methods_1ags7yg['put']['reqBody'], query?: Methods_1ags7yg['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1ags7yg['put']['resBody'], BasicHeaders, Methods_1ags7yg['put']['status']>(prefix, PATH146, PUT, option).json(),
        /**
         * 画面制御を追加更新削除します。
         * @returns OK
         */
        $put: (option: { body: Methods_1ags7yg['put']['reqBody'], query?: Methods_1ags7yg['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1ags7yg['put']['resBody'], BasicHeaders, Methods_1ags7yg['put']['status']>(prefix, PATH146, PUT, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_1ags7yg['get']['query'] } | { method: 'put'; query: Methods_1ags7yg['put']['query'] } | undefined) =>
          `${prefix}${PATH146}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      pages: {
        _page_id: (val2: number) => {
          const prefix2 = `${PATH147}/${val2}`;

          return {
            /**
             * 画面を取得します
             * @returns OK
             */
            get: (option?: { query?: Methods_1hhj365['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_1hhj365['get']['resBody'], BasicHeaders, Methods_1hhj365['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * 画面を取得します
             * @returns OK
             */
            $get: (option?: { query?: Methods_1hhj365['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_1hhj365['get']['resBody'], BasicHeaders, Methods_1hhj365['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_1hhj365['get']['query'] } | undefined) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          };
        },
        /**
         * 画面一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_1fpgte9['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1fpgte9['get']['resBody'], BasicHeaders, Methods_1fpgte9['get']['status']>(prefix, PATH147, GET, option).json(),
        /**
         * 画面一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_1fpgte9['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1fpgte9['get']['resBody'], BasicHeaders, Methods_1fpgte9['get']['status']>(prefix, PATH147, GET, option).json().then(r => r.body),
        /**
         * 画面を追加更新削除します。
         * @returns OK
         */
        put: (option: { body: Methods_1fpgte9['put']['reqBody'], query?: Methods_1fpgte9['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1fpgte9['put']['resBody'], BasicHeaders, Methods_1fpgte9['put']['status']>(prefix, PATH147, PUT, option).json(),
        /**
         * 画面を追加更新削除します。
         * @returns OK
         */
        $put: (option: { body: Methods_1fpgte9['put']['reqBody'], query?: Methods_1fpgte9['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1fpgte9['put']['resBody'], BasicHeaders, Methods_1fpgte9['put']['status']>(prefix, PATH147, PUT, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_1fpgte9['get']['query'] } | { method: 'put'; query: Methods_1fpgte9['put']['query'] } | undefined) =>
          `${prefix}${PATH147}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      payable_accounts: {
        /**
         * 買掛金一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_jzpg0k['get']['query'], config?: T | undefined }) =>
          fetch<Methods_jzpg0k['get']['resBody'], BasicHeaders, Methods_jzpg0k['get']['status']>(prefix, PATH148, GET, option).json(),
        /**
         * 買掛金一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_jzpg0k['get']['query'], config?: T | undefined }) =>
          fetch<Methods_jzpg0k['get']['resBody'], BasicHeaders, Methods_jzpg0k['get']['status']>(prefix, PATH148, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_jzpg0k['get']['query'] } | undefined) =>
          `${prefix}${PATH148}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      payment_conditions: {
        _payment_condition_id: (val2: number) => {
          const prefix2 = `${PATH149}/${val2}`;

          return {
            due: {
              /**
               * 支払条件を元に支払期日を取得します
               * @returns OK
               */
              get: (option?: { query?: Methods_1o2m18k['get']['query'] | undefined, config?: T | undefined } | undefined) =>
                fetch<Methods_1o2m18k['get']['resBody'], BasicHeaders, Methods_1o2m18k['get']['status']>(prefix, `${prefix2}${PATH150}`, GET, option).json(),
              /**
               * 支払条件を元に支払期日を取得します
               * @returns OK
               */
              $get: (option?: { query?: Methods_1o2m18k['get']['query'] | undefined, config?: T | undefined } | undefined) =>
                fetch<Methods_1o2m18k['get']['resBody'], BasicHeaders, Methods_1o2m18k['get']['status']>(prefix, `${prefix2}${PATH150}`, GET, option).json().then(r => r.body),
              $path: (option?: { method?: 'get' | undefined; query: Methods_1o2m18k['get']['query'] } | undefined) =>
                `${prefix}${prefix2}${PATH150}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
            },
            /**
             * 支払条件を取得します
             * @returns OK
             */
            get: (option?: { query?: Methods_4kfwgd['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_4kfwgd['get']['resBody'], BasicHeaders, Methods_4kfwgd['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * 支払条件を取得します
             * @returns OK
             */
            $get: (option?: { query?: Methods_4kfwgd['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_4kfwgd['get']['resBody'], BasicHeaders, Methods_4kfwgd['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_4kfwgd['get']['query'] } | undefined) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          };
        },
        /**
         * 支払条件一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_17ss5ai['get']['query'], config?: T | undefined }) =>
          fetch<Methods_17ss5ai['get']['resBody'], BasicHeaders, Methods_17ss5ai['get']['status']>(prefix, PATH149, GET, option).json(),
        /**
         * 支払条件一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_17ss5ai['get']['query'], config?: T | undefined }) =>
          fetch<Methods_17ss5ai['get']['resBody'], BasicHeaders, Methods_17ss5ai['get']['status']>(prefix, PATH149, GET, option).json().then(r => r.body),
        /**
         * 支払条件を追加更新削除します。
         * @returns OK
         */
        put: (option: { body: Methods_17ss5ai['put']['reqBody'], query?: Methods_17ss5ai['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_17ss5ai['put']['resBody'], BasicHeaders, Methods_17ss5ai['put']['status']>(prefix, PATH149, PUT, option).json(),
        /**
         * 支払条件を追加更新削除します。
         * @returns OK
         */
        $put: (option: { body: Methods_17ss5ai['put']['reqBody'], query?: Methods_17ss5ai['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_17ss5ai['put']['resBody'], BasicHeaders, Methods_17ss5ai['put']['status']>(prefix, PATH149, PUT, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_17ss5ai['get']['query'] } | { method: 'put'; query: Methods_17ss5ai['put']['query'] } | undefined) =>
          `${prefix}${PATH149}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      payment_details: {
        /**
         * 国内支払支払金額内訳一覧を返します
         * @returns OK
         */
        get: (option?: { query?: Methods_1415a3i['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_1415a3i['get']['resBody'], BasicHeaders, Methods_1415a3i['get']['status']>(prefix, PATH151, GET, option).json(),
        /**
         * 国内支払支払金額内訳一覧を返します
         * @returns OK
         */
        $get: (option?: { query?: Methods_1415a3i['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_1415a3i['get']['resBody'], BasicHeaders, Methods_1415a3i['get']['status']>(prefix, PATH151, GET, option).json().then(r => r.body),
        /**
         * 国内支払支払金額内訳を追加更新削除します。
         * @returns OK
         */
        put: (option: { body: Methods_1415a3i['put']['reqBody'], query?: Methods_1415a3i['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1415a3i['put']['resBody'], BasicHeaders, Methods_1415a3i['put']['status']>(prefix, PATH151, PUT, option).json(),
        /**
         * 国内支払支払金額内訳を追加更新削除します。
         * @returns OK
         */
        $put: (option: { body: Methods_1415a3i['put']['reqBody'], query?: Methods_1415a3i['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1415a3i['put']['resBody'], BasicHeaders, Methods_1415a3i['put']['status']>(prefix, PATH151, PUT, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_1415a3i['get']['query'] } | { method: 'put'; query: Methods_1415a3i['put']['query'] } | undefined) =>
          `${prefix}${PATH151}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      payment_results: {
        export: {
          /**
           * インターネットバンキング用支払いデータを出力します。
           */
          post: (option: { body: Methods_1l7750x['post']['reqBody'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_1l7750x['post']['status']>(prefix, PATH153, POST, option).send(),
          /**
           * インターネットバンキング用支払いデータを出力します。
           */
          $post: (option: { body: Methods_1l7750x['post']['reqBody'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_1l7750x['post']['status']>(prefix, PATH153, POST, option).send().then(r => r.body),
          $path: () => `${prefix}${PATH153}`,
        },
        /**
         * 国内支払予定・実績一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_1fpgf86['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1fpgf86['get']['resBody'], BasicHeaders, Methods_1fpgf86['get']['status']>(prefix, PATH152, GET, option).json(),
        /**
         * 国内支払予定・実績一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_1fpgf86['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1fpgf86['get']['resBody'], BasicHeaders, Methods_1fpgf86['get']['status']>(prefix, PATH152, GET, option).json().then(r => r.body),
        /**
         * 国内支払予定・実績を追加更新削除します。
         * @returns OK
         */
        put: (option: { body: Methods_1fpgf86['put']['reqBody'], query?: Methods_1fpgf86['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1fpgf86['put']['resBody'], BasicHeaders, Methods_1fpgf86['put']['status']>(prefix, PATH152, PUT, option).json(),
        /**
         * 国内支払予定・実績を追加更新削除します。
         * @returns OK
         */
        $put: (option: { body: Methods_1fpgf86['put']['reqBody'], query?: Methods_1fpgf86['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1fpgf86['put']['resBody'], BasicHeaders, Methods_1fpgf86['put']['status']>(prefix, PATH152, PUT, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_1fpgf86['get']['query'] } | { method: 'put'; query: Methods_1fpgf86['put']['query'] } | undefined) =>
          `${prefix}${PATH152}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      payment_schedules: {
        due_detail: {
          /**
           * 支払期日一覧明細
           * @returns OK
           */
          get: (option: { query: Methods_29b9['get']['query'], config?: T | undefined }) =>
            fetch<Methods_29b9['get']['resBody'], BasicHeaders, Methods_29b9['get']['status']>(prefix, PATH155, GET, option).json(),
          /**
           * 支払期日一覧明細
           * @returns OK
           */
          $get: (option: { query: Methods_29b9['get']['query'], config?: T | undefined }) =>
            fetch<Methods_29b9['get']['resBody'], BasicHeaders, Methods_29b9['get']['status']>(prefix, PATH155, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_29b9['get']['query'] } | undefined) =>
            `${prefix}${PATH155}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
        due_index: {
          /**
           * 支払期日一覧取得
           * @returns OK
           */
          get: (option: { query: Methods_12newds['get']['query'], config?: T | undefined }) =>
            fetch<Methods_12newds['get']['resBody'], BasicHeaders, Methods_12newds['get']['status']>(prefix, PATH156, GET, option).json(),
          /**
           * 支払期日一覧取得
           * @returns OK
           */
          $get: (option: { query: Methods_12newds['get']['query'], config?: T | undefined }) =>
            fetch<Methods_12newds['get']['resBody'], BasicHeaders, Methods_12newds['get']['status']>(prefix, PATH156, GET, option).json().then(r => r.body),
          /**
           * 支払予定を更新します。
           * @returns OK
           */
          put: (option: { body: Methods_12newds['put']['reqBody'], query?: Methods_12newds['put']['query'] | undefined, config?: T | undefined }) =>
            fetch<Methods_12newds['put']['resBody'], BasicHeaders, Methods_12newds['put']['status']>(prefix, PATH156, PUT, option).json(),
          /**
           * 支払予定を更新します。
           * @returns OK
           */
          $put: (option: { body: Methods_12newds['put']['reqBody'], query?: Methods_12newds['put']['query'] | undefined, config?: T | undefined }) =>
            fetch<Methods_12newds['put']['resBody'], BasicHeaders, Methods_12newds['put']['status']>(prefix, PATH156, PUT, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_12newds['get']['query'] } | { method: 'put'; query: Methods_12newds['put']['query'] } | undefined) =>
            `${prefix}${PATH156}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
        print_check_list: {
          /**
           * 支払予定チェックリストを出力します。
           * @returns OK
           */
          post: (option: { body: Methods_1tt4uxm['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_1tt4uxm['post']['resBody'], BasicHeaders, Methods_1tt4uxm['post']['status']>(prefix, PATH157, POST, option).json(),
          /**
           * 支払予定チェックリストを出力します。
           * @returns OK
           */
          $post: (option: { body: Methods_1tt4uxm['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_1tt4uxm['post']['resBody'], BasicHeaders, Methods_1tt4uxm['post']['status']>(prefix, PATH157, POST, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH157}`,
        },
        /**
         * 支払予定一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_ti8ixu['get']['query'], config?: T | undefined }) =>
          fetch<Methods_ti8ixu['get']['resBody'], BasicHeaders, Methods_ti8ixu['get']['status']>(prefix, PATH154, GET, option).json(),
        /**
         * 支払予定一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_ti8ixu['get']['query'], config?: T | undefined }) =>
          fetch<Methods_ti8ixu['get']['resBody'], BasicHeaders, Methods_ti8ixu['get']['status']>(prefix, PATH154, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_ti8ixu['get']['query'] } | undefined) =>
          `${prefix}${PATH154}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      payment_schedules_payment_date: {
        /**
         * 支払期日を取得します
         * @returns OK
         */
        get: (option?: { query?: Methods_buiqr4['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_buiqr4['get']['resBody'], BasicHeaders, Methods_buiqr4['get']['status']>(prefix, PATH158, GET, option).json(),
        /**
         * 支払期日を取得します
         * @returns OK
         */
        $get: (option?: { query?: Methods_buiqr4['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_buiqr4['get']['resBody'], BasicHeaders, Methods_buiqr4['get']['status']>(prefix, PATH158, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_buiqr4['get']['query'] } | undefined) =>
          `${prefix}${PATH158}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      payment_schedules_payment_rate: {
        /**
         * 支払レートを取得します
         * @returns OK
         */
        get: (option?: { query?: Methods_nxgddy['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_nxgddy['get']['resBody'], BasicHeaders, Methods_nxgddy['get']['status']>(prefix, PATH159, GET, option).json(),
        /**
         * 支払レートを取得します
         * @returns OK
         */
        $get: (option?: { query?: Methods_nxgddy['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_nxgddy['get']['resBody'], BasicHeaders, Methods_nxgddy['get']['status']>(prefix, PATH159, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_nxgddy['get']['query'] } | undefined) =>
          `${prefix}${PATH159}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      place_of_origin_names: {
        _place_of_origin_name_id: (val2: number) => {
          const prefix2 = `${PATH160}/${val2}`;

          return {
            /**
             * 原産地呼称を取得します
             * @returns OK
             */
            get: (option?: { query?: Methods_xgt1ez['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_xgt1ez['get']['resBody'], BasicHeaders, Methods_xgt1ez['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * 原産地呼称を取得します
             * @returns OK
             */
            $get: (option?: { query?: Methods_xgt1ez['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_xgt1ez['get']['resBody'], BasicHeaders, Methods_xgt1ez['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_xgt1ez['get']['query'] } | undefined) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          };
        },
        /**
         * 原産地呼称一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_1d37cu6['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1d37cu6['get']['resBody'], BasicHeaders, Methods_1d37cu6['get']['status']>(prefix, PATH160, GET, option).json(),
        /**
         * 原産地呼称一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_1d37cu6['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1d37cu6['get']['resBody'], BasicHeaders, Methods_1d37cu6['get']['status']>(prefix, PATH160, GET, option).json().then(r => r.body),
        /**
         * 原産地呼称を追加更新削除します。
         * @returns OK
         */
        put: (option: { body: Methods_1d37cu6['put']['reqBody'], query?: Methods_1d37cu6['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1d37cu6['put']['resBody'], BasicHeaders, Methods_1d37cu6['put']['status']>(prefix, PATH160, PUT, option).json(),
        /**
         * 原産地呼称を追加更新削除します。
         * @returns OK
         */
        $put: (option: { body: Methods_1d37cu6['put']['reqBody'], query?: Methods_1d37cu6['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1d37cu6['put']['resBody'], BasicHeaders, Methods_1d37cu6['put']['status']>(prefix, PATH160, PUT, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_1d37cu6['get']['query'] } | { method: 'put'; query: Methods_1d37cu6['put']['query'] } | undefined) =>
          `${prefix}${PATH160}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      price_groups: {
        _price_group_id: (val2: number) => {
          const prefix2 = `${PATH161}/${val2}`;

          return {
            /**
             * 価格グループを取得します
             * @returns OK
             */
            get: (option?: { query?: Methods_eef47h['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_eef47h['get']['resBody'], BasicHeaders, Methods_eef47h['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * 価格グループを取得します
             * @returns OK
             */
            $get: (option?: { query?: Methods_eef47h['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_eef47h['get']['resBody'], BasicHeaders, Methods_eef47h['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_eef47h['get']['query'] } | undefined) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          };
        },
        /**
         * 価格グループ一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_93kbop['get']['query'], config?: T | undefined }) =>
          fetch<Methods_93kbop['get']['resBody'], BasicHeaders, Methods_93kbop['get']['status']>(prefix, PATH161, GET, option).json(),
        /**
         * 価格グループ一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_93kbop['get']['query'], config?: T | undefined }) =>
          fetch<Methods_93kbop['get']['resBody'], BasicHeaders, Methods_93kbop['get']['status']>(prefix, PATH161, GET, option).json().then(r => r.body),
        /**
         * 価格グループを追加更新削除します。
         * @returns OK
         */
        put: (option: { body: Methods_93kbop['put']['reqBody'], query?: Methods_93kbop['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_93kbop['put']['resBody'], BasicHeaders, Methods_93kbop['put']['status']>(prefix, PATH161, PUT, option).json(),
        /**
         * 価格グループを追加更新削除します。
         * @returns OK
         */
        $put: (option: { body: Methods_93kbop['put']['reqBody'], query?: Methods_93kbop['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_93kbop['put']['resBody'], BasicHeaders, Methods_93kbop['put']['status']>(prefix, PATH161, PUT, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_93kbop['get']['query'] } | { method: 'put'; query: Methods_93kbop['put']['query'] } | undefined) =>
          `${prefix}${PATH161}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      printers: {
        _printer_id: (val2: number) => {
          const prefix2 = `${PATH162}/${val2}`;

          return {
            /**
             * プリンターを取得します
             * @returns OK
             */
            get: (option?: { query?: Methods_1py4z0d['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_1py4z0d['get']['resBody'], BasicHeaders, Methods_1py4z0d['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * プリンターを取得します
             * @returns OK
             */
            $get: (option?: { query?: Methods_1py4z0d['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_1py4z0d['get']['resBody'], BasicHeaders, Methods_1py4z0d['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_1py4z0d['get']['query'] } | undefined) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          };
        },
        /**
         * プリンター一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_17dn0c2['get']['query'], config?: T | undefined }) =>
          fetch<Methods_17dn0c2['get']['resBody'], BasicHeaders, Methods_17dn0c2['get']['status']>(prefix, PATH162, GET, option).json(),
        /**
         * プリンター一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_17dn0c2['get']['query'], config?: T | undefined }) =>
          fetch<Methods_17dn0c2['get']['resBody'], BasicHeaders, Methods_17dn0c2['get']['status']>(prefix, PATH162, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_17dn0c2['get']['query'] } | undefined) =>
          `${prefix}${PATH162}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      purchase_prices: {
        _purchase_price_id: (val2: number) => {
          const prefix2 = `${PATH163}/${val2}`;

          return {
            re_calculate: {
              /**
               * 入荷原価を再計算します
               * @returns OK
               */
              put: (option?: { query?: Methods_58c8vg['put']['query'] | undefined, config?: T | undefined } | undefined) =>
                fetch<Methods_58c8vg['put']['resBody'], BasicHeaders, Methods_58c8vg['put']['status']>(prefix, `${prefix2}${PATH164}`, PUT, option).json(),
              /**
               * 入荷原価を再計算します
               * @returns OK
               */
              $put: (option?: { query?: Methods_58c8vg['put']['query'] | undefined, config?: T | undefined } | undefined) =>
                fetch<Methods_58c8vg['put']['resBody'], BasicHeaders, Methods_58c8vg['put']['status']>(prefix, `${prefix2}${PATH164}`, PUT, option).json().then(r => r.body),
              $path: (option?: { method: 'put'; query: Methods_58c8vg['put']['query'] } | undefined) =>
                `${prefix}${prefix2}${PATH164}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
            },
            /**
             * 入荷原価を取得します
             * @returns OK
             */
            get: (option?: { query?: Methods_11hjw1t['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_11hjw1t['get']['resBody'], BasicHeaders, Methods_11hjw1t['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * 入荷原価を取得します
             * @returns OK
             */
            $get: (option?: { query?: Methods_11hjw1t['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_11hjw1t['get']['resBody'], BasicHeaders, Methods_11hjw1t['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_11hjw1t['get']['query'] } | undefined) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          };
        },
        export: {
          /**
           * 原価計算回覧用を出力します。
           */
          post: (option: { body: Methods_1xzitpy['post']['reqBody'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_1xzitpy['post']['status']>(prefix, PATH165, POST, option).send(),
          /**
           * 原価計算回覧用を出力します。
           */
          $post: (option: { body: Methods_1xzitpy['post']['reqBody'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_1xzitpy['post']['status']>(prefix, PATH165, POST, option).send().then(r => r.body),
          $path: () => `${prefix}${PATH165}`,
        },
        export_gross_margins: {
          /**
           * 粗利一覧を出力します。
           */
          post: (option: { body: Methods_flstsp['post']['reqBody'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_flstsp['post']['status']>(prefix, PATH166, POST, option).send(),
          /**
           * 粗利一覧を出力します。
           */
          $post: (option: { body: Methods_flstsp['post']['reqBody'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_flstsp['post']['status']>(prefix, PATH166, POST, option).send().then(r => r.body),
          $path: () => `${prefix}${PATH166}`,
        },
        update_costs: {
          /**
           * 在庫単価を確定し、商品マスタに最終仕入単価を設定します。ロックの取得を指定した場合、ロックの取得に成功した後、直ちにそのロックは解放されます。
           * @returns OK
           */
          post: (option: { body: Methods_chaixk['post']['reqBody'], query?: Methods_chaixk['post']['query'] | undefined, config?: T | undefined }) =>
            fetch<Methods_chaixk['post']['resBody'], BasicHeaders, Methods_chaixk['post']['status']>(prefix, PATH167, POST, option).json(),
          /**
           * 在庫単価を確定し、商品マスタに最終仕入単価を設定します。ロックの取得を指定した場合、ロックの取得に成功した後、直ちにそのロックは解放されます。
           * @returns OK
           */
          $post: (option: { body: Methods_chaixk['post']['reqBody'], query?: Methods_chaixk['post']['query'] | undefined, config?: T | undefined }) =>
            fetch<Methods_chaixk['post']['resBody'], BasicHeaders, Methods_chaixk['post']['status']>(prefix, PATH167, POST, option).json().then(r => r.body),
          $path: (option?: { method: 'post'; query: Methods_chaixk['post']['query'] } | undefined) =>
            `${prefix}${PATH167}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
        /**
         * 入荷原価一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_134i57j['get']['query'], config?: T | undefined }) =>
          fetch<Methods_134i57j['get']['resBody'], BasicHeaders, Methods_134i57j['get']['status']>(prefix, PATH163, GET, option).json(),
        /**
         * 入荷原価一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_134i57j['get']['query'], config?: T | undefined }) =>
          fetch<Methods_134i57j['get']['resBody'], BasicHeaders, Methods_134i57j['get']['status']>(prefix, PATH163, GET, option).json().then(r => r.body),
        /**
         * 入荷原価を追加更新削除します。
         * @returns OK
         */
        put: (option: { body: Methods_134i57j['put']['reqBody'], query?: Methods_134i57j['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_134i57j['put']['resBody'], BasicHeaders, Methods_134i57j['put']['status']>(prefix, PATH163, PUT, option).json(),
        /**
         * 入荷原価を追加更新削除します。
         * @returns OK
         */
        $put: (option: { body: Methods_134i57j['put']['reqBody'], query?: Methods_134i57j['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_134i57j['put']['resBody'], BasicHeaders, Methods_134i57j['put']['status']>(prefix, PATH163, PUT, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_134i57j['get']['query'] } | { method: 'put'; query: Methods_134i57j['put']['query'] } | undefined) =>
          `${prefix}${PATH163}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      purchase_reservations: {
        _purchase_reservation_id: (val2: number) => {
          const prefix2 = `${PATH168}/${val2}`;

          return {
            /**
             * 在庫・仕入計上予定を取得します
             * @returns OK
             */
            get: (option?: { query?: Methods_1olvckj['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_1olvckj['get']['resBody'], BasicHeaders, Methods_1olvckj['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * 在庫・仕入計上予定を取得します
             * @returns OK
             */
            $get: (option?: { query?: Methods_1olvckj['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_1olvckj['get']['resBody'], BasicHeaders, Methods_1olvckj['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_1olvckj['get']['query'] } | undefined) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          };
        },
        export_arrival_schedule: {
          /**
           * 入荷入予定表を出力します
           */
          post: (option: { body: Methods_1xpao6p['post']['reqBody'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_1xpao6p['post']['status']>(prefix, PATH169, POST, option).send(),
          /**
           * 入荷入予定表を出力します
           */
          $post: (option: { body: Methods_1xpao6p['post']['reqBody'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_1xpao6p['post']['status']>(prefix, PATH169, POST, option).send().then(r => r.body),
          $path: () => `${prefix}${PATH169}`,
        },
        export_schedule: {
          /**
           * 指定月以降の仕入予定表を出力します
           */
          post: (option: { body: Methods_sefh0z['post']['reqBody'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_sefh0z['post']['status']>(prefix, PATH170, POST, option).send(),
          /**
           * 指定月以降の仕入予定表を出力します
           */
          $post: (option: { body: Methods_sefh0z['post']['reqBody'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_sefh0z['post']['status']>(prefix, PATH170, POST, option).send().then(r => r.body),
          $path: () => `${prefix}${PATH170}`,
        },
        /**
         * 在庫・仕入計上予定一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_1a35ghm['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1a35ghm['get']['resBody'], BasicHeaders, Methods_1a35ghm['get']['status']>(prefix, PATH168, GET, option).json(),
        /**
         * 在庫・仕入計上予定一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_1a35ghm['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1a35ghm['get']['resBody'], BasicHeaders, Methods_1a35ghm['get']['status']>(prefix, PATH168, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_1a35ghm['get']['query'] } | undefined) =>
          `${prefix}${PATH168}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      purchase_results: {
        _purchase_result_id: (val2: number) => {
          const prefix2 = `${PATH171}/${val2}`;

          return {
            /**
             * 在庫・仕入計上実績を取得します
             * @returns OK
             */
            get: (option?: { query?: Methods_x4bdzx['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_x4bdzx['get']['resBody'], BasicHeaders, Methods_x4bdzx['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * 在庫・仕入計上実績を取得します
             * @returns OK
             */
            $get: (option?: { query?: Methods_x4bdzx['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_x4bdzx['get']['resBody'], BasicHeaders, Methods_x4bdzx['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_x4bdzx['get']['query'] } | undefined) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          };
        },
        /**
         * 在庫・仕入計上実績一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_rctdmx['get']['query'], config?: T | undefined }) =>
          fetch<Methods_rctdmx['get']['resBody'], BasicHeaders, Methods_rctdmx['get']['status']>(prefix, PATH171, GET, option).json(),
        /**
         * 在庫・仕入計上実績一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_rctdmx['get']['query'], config?: T | undefined }) =>
          fetch<Methods_rctdmx['get']['resBody'], BasicHeaders, Methods_rctdmx['get']['status']>(prefix, PATH171, GET, option).json().then(r => r.body),
        /**
         * 在庫・仕入計上予定を更新します。更新のみ可能です。
         * @returns OK
         */
        put: (option: { body: Methods_rctdmx['put']['reqBody'], query?: Methods_rctdmx['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_rctdmx['put']['resBody'], BasicHeaders, Methods_rctdmx['put']['status']>(prefix, PATH171, PUT, option).json(),
        /**
         * 在庫・仕入計上予定を更新します。更新のみ可能です。
         * @returns OK
         */
        $put: (option: { body: Methods_rctdmx['put']['reqBody'], query?: Methods_rctdmx['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_rctdmx['put']['resBody'], BasicHeaders, Methods_rctdmx['put']['status']>(prefix, PATH171, PUT, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_rctdmx['get']['query'] } | { method: 'put'; query: Methods_rctdmx['put']['query'] } | undefined) =>
          `${prefix}${PATH171}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      rates: {
        import: {
          /**
           * TTMレートデータを取り込みます。
           */
          post: (option: { body: Methods_s36l7u['post']['reqBody'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_s36l7u['post']['status']>(prefix, PATH173, POST, option, 'FormData').send(),
          /**
           * TTMレートデータを取り込みます。
           */
          $post: (option: { body: Methods_s36l7u['post']['reqBody'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_s36l7u['post']['status']>(prefix, PATH173, POST, option, 'FormData').send().then(r => r.body),
          $path: () => `${prefix}${PATH173}`,
        },
        /**
         * TTMレート一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_7y2g26['get']['query'], config?: T | undefined }) =>
          fetch<Methods_7y2g26['get']['resBody'], BasicHeaders, Methods_7y2g26['get']['status']>(prefix, PATH172, GET, option).json(),
        /**
         * TTMレート一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_7y2g26['get']['query'], config?: T | undefined }) =>
          fetch<Methods_7y2g26['get']['resBody'], BasicHeaders, Methods_7y2g26['get']['status']>(prefix, PATH172, GET, option).json().then(r => r.body),
        /**
         * レートを追加更新削除します。
         * @returns OK
         */
        put: (option: { body: Methods_7y2g26['put']['reqBody'], query?: Methods_7y2g26['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_7y2g26['put']['resBody'], BasicHeaders, Methods_7y2g26['put']['status']>(prefix, PATH172, PUT, option).json(),
        /**
         * レートを追加更新削除します。
         * @returns OK
         */
        $put: (option: { body: Methods_7y2g26['put']['reqBody'], query?: Methods_7y2g26['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_7y2g26['put']['resBody'], BasicHeaders, Methods_7y2g26['put']['status']>(prefix, PATH172, PUT, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_7y2g26['get']['query'] } | { method: 'put'; query: Methods_7y2g26['put']['query'] } | undefined) =>
          `${prefix}${PATH172}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      receivable_accounts: {
        print: {
          /**
           * 売掛金残高証明書出力を出力します
           */
          post: (option: { body: Methods_sh4iqi['post']['reqBody'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_sh4iqi['post']['status']>(prefix, PATH175, POST, option).send(),
          /**
           * 売掛金残高証明書出力を出力します
           */
          $post: (option: { body: Methods_sh4iqi['post']['reqBody'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_sh4iqi['post']['status']>(prefix, PATH175, POST, option).send().then(r => r.body),
          $path: () => `${prefix}${PATH175}`,
        },
        /**
         * 売掛残高一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_y8986e['get']['query'], config?: T | undefined }) =>
          fetch<Methods_y8986e['get']['resBody'], BasicHeaders, Methods_y8986e['get']['status']>(prefix, PATH174, GET, option).json(),
        /**
         * 売掛残高一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_y8986e['get']['query'], config?: T | undefined }) =>
          fetch<Methods_y8986e['get']['resBody'], BasicHeaders, Methods_y8986e['get']['status']>(prefix, PATH174, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_y8986e['get']['query'] } | undefined) =>
          `${prefix}${PATH174}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      recent_shipping_histories: {
        with_sales_orders: {
          /**
           * 直近出荷履歴・国内受注一覧を返します
           * @returns OK
           */
          get: (option: { query: Methods_h005ii['get']['query'], config?: T | undefined }) =>
            fetch<Methods_h005ii['get']['resBody'], BasicHeaders, Methods_h005ii['get']['status']>(prefix, PATH176, GET, option).json(),
          /**
           * 直近出荷履歴・国内受注一覧を返します
           * @returns OK
           */
          $get: (option: { query: Methods_h005ii['get']['query'], config?: T | undefined }) =>
            fetch<Methods_h005ii['get']['resBody'], BasicHeaders, Methods_h005ii['get']['status']>(prefix, PATH176, GET, option).json().then(r => r.body),
          /**
           * 直近出荷履歴・国内受注を追加更新削除します。
           * @returns OK
           */
          put: (option: { body: Methods_h005ii['put']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_h005ii['put']['resBody'], BasicHeaders, Methods_h005ii['put']['status']>(prefix, PATH176, PUT, option).json(),
          /**
           * 直近出荷履歴・国内受注を追加更新削除します。
           * @returns OK
           */
          $put: (option: { body: Methods_h005ii['put']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_h005ii['put']['resBody'], BasicHeaders, Methods_h005ii['put']['status']>(prefix, PATH176, PUT, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_h005ii['get']['query'] } | undefined) =>
            `${prefix}${PATH176}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
      },
      reports: {
        _report_id: (val2: number) => {
          const prefix2 = `${PATH177}/${val2}`;

          return {
            /**
             * 帳票を取得します
             * @returns OK
             */
            get: (option?: { query?: Methods_16tf5oj['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_16tf5oj['get']['resBody'], BasicHeaders, Methods_16tf5oj['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * 帳票を取得します
             * @returns OK
             */
            $get: (option?: { query?: Methods_16tf5oj['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_16tf5oj['get']['resBody'], BasicHeaders, Methods_16tf5oj['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_16tf5oj['get']['query'] } | undefined) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          };
        },
        /**
         * 帳票一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_tixex6['get']['query'], config?: T | undefined }) =>
          fetch<Methods_tixex6['get']['resBody'], BasicHeaders, Methods_tixex6['get']['status']>(prefix, PATH177, GET, option).json(),
        /**
         * 帳票一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_tixex6['get']['query'], config?: T | undefined }) =>
          fetch<Methods_tixex6['get']['resBody'], BasicHeaders, Methods_tixex6['get']['status']>(prefix, PATH177, GET, option).json().then(r => r.body),
        /**
         * 帳票を追加更新削除します。
         * @returns OK
         */
        put: (option: { body: Methods_tixex6['put']['reqBody'], query?: Methods_tixex6['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_tixex6['put']['resBody'], BasicHeaders, Methods_tixex6['put']['status']>(prefix, PATH177, PUT, option).json(),
        /**
         * 帳票を追加更新削除します。
         * @returns OK
         */
        $put: (option: { body: Methods_tixex6['put']['reqBody'], query?: Methods_tixex6['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_tixex6['put']['resBody'], BasicHeaders, Methods_tixex6['put']['status']>(prefix, PATH177, PUT, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_tixex6['get']['query'] } | { method: 'put'; query: Methods_tixex6['put']['query'] } | undefined) =>
          `${prefix}${PATH177}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      reservation_and_stocks: {
        domestic_orders: {
          /**
           * 指定条件の国内発注情報を取得します。
           * @returns OK
           */
          get: (option: { query: Methods_110w60e['get']['query'], config?: T | undefined }) =>
            fetch<Methods_110w60e['get']['resBody'], BasicHeaders, Methods_110w60e['get']['status']>(prefix, PATH179, GET, option).json(),
          /**
           * 指定条件の国内発注情報を取得します。
           * @returns OK
           */
          $get: (option: { query: Methods_110w60e['get']['query'], config?: T | undefined }) =>
            fetch<Methods_110w60e['get']['resBody'], BasicHeaders, Methods_110w60e['get']['status']>(prefix, PATH179, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_110w60e['get']['query'] } | undefined) =>
            `${prefix}${PATH179}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
        latest_arrival_domestic: {
          /**
           * 指定(なければ直近)の船積オーダーを取得します
           * @returns OK
           */
          get: (option?: { query?: Methods_18kus44['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_18kus44['get']['resBody'], BasicHeaders, Methods_18kus44['get']['status']>(prefix, PATH180, GET, option).json(),
          /**
           * 指定(なければ直近)の船積オーダーを取得します
           * @returns OK
           */
          $get: (option?: { query?: Methods_18kus44['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_18kus44['get']['resBody'], BasicHeaders, Methods_18kus44['get']['status']>(prefix, PATH180, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_18kus44['get']['query'] } | undefined) =>
            `${prefix}${PATH180}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
        latest_arrival_shipping: {
          /**
           * 指定(なければ直近)の船積オーダーを取得します
           * @returns OK
           */
          get: (option?: { query?: Methods_vncmii['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_vncmii['get']['resBody'], BasicHeaders, Methods_vncmii['get']['status']>(prefix, PATH181, GET, option).json(),
          /**
           * 指定(なければ直近)の船積オーダーを取得します
           * @returns OK
           */
          $get: (option?: { query?: Methods_vncmii['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_vncmii['get']['resBody'], BasicHeaders, Methods_vncmii['get']['status']>(prefix, PATH181, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_vncmii['get']['query'] } | undefined) =>
            `${prefix}${PATH181}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
        oldest_stock_change: {
          /**
           * 指定の品番、倉庫IDMに該当するうち、依頼日が最も古い在庫振替Noを取得します。
           * @returns OK
           */
          get: (option: { query: Methods_1wh2dih['get']['query'], config?: T | undefined }) =>
            fetch<Methods_1wh2dih['get']['resBody'], BasicHeaders, Methods_1wh2dih['get']['status']>(prefix, PATH182, GET, option).json(),
          /**
           * 指定の品番、倉庫IDMに該当するうち、依頼日が最も古い在庫振替Noを取得します。
           * @returns OK
           */
          $get: (option: { query: Methods_1wh2dih['get']['query'], config?: T | undefined }) =>
            fetch<Methods_1wh2dih['get']['resBody'], BasicHeaders, Methods_1wh2dih['get']['status']>(prefix, PATH182, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_1wh2dih['get']['query'] } | undefined) =>
            `${prefix}${PATH182}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
        print: {
          /**
           * 現物取置依頼書を出力します。
           * @returns OK
           */
          post: (option: { body: Methods_7r9dal['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_7r9dal['post']['resBody'], BasicHeaders, Methods_7r9dal['post']['status']>(prefix, PATH183, POST, option).json(),
          /**
           * 現物取置依頼書を出力します。
           * @returns OK
           */
          $post: (option: { body: Methods_7r9dal['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_7r9dal['post']['resBody'], BasicHeaders, Methods_7r9dal['post']['status']>(prefix, PATH183, POST, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH183}`,
        },
        shipping_orders: {
          /**
           * 指定条件の船積オーダー情報を取得します。
           * @returns OK
           */
          get: (option: { query: Methods_1nauuak['get']['query'], config?: T | undefined }) =>
            fetch<Methods_1nauuak['get']['resBody'], BasicHeaders, Methods_1nauuak['get']['status']>(prefix, PATH184, GET, option).json(),
          /**
           * 指定条件の船積オーダー情報を取得します。
           * @returns OK
           */
          $get: (option: { query: Methods_1nauuak['get']['query'], config?: T | undefined }) =>
            fetch<Methods_1nauuak['get']['resBody'], BasicHeaders, Methods_1nauuak['get']['status']>(prefix, PATH184, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_1nauuak['get']['query'] } | undefined) =>
            `${prefix}${PATH184}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
        /**
         * 予約受注/取置一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_104qhb5['get']['query'], config?: T | undefined }) =>
          fetch<Methods_104qhb5['get']['resBody'], BasicHeaders, Methods_104qhb5['get']['status']>(prefix, PATH178, GET, option).json(),
        /**
         * 予約受注/取置一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_104qhb5['get']['query'], config?: T | undefined }) =>
          fetch<Methods_104qhb5['get']['resBody'], BasicHeaders, Methods_104qhb5['get']['status']>(prefix, PATH178, GET, option).json().then(r => r.body),
        /**
         * 予約受注/取置を追加更新削除します。
         * @returns OK
         */
        put: (option: { body: Methods_104qhb5['put']['reqBody'], query?: Methods_104qhb5['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_104qhb5['put']['resBody'], BasicHeaders, Methods_104qhb5['put']['status']>(prefix, PATH178, PUT, option).json(),
        /**
         * 予約受注/取置を追加更新削除します。
         * @returns OK
         */
        $put: (option: { body: Methods_104qhb5['put']['reqBody'], query?: Methods_104qhb5['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_104qhb5['put']['resBody'], BasicHeaders, Methods_104qhb5['put']['status']>(prefix, PATH178, PUT, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_104qhb5['get']['query'] } | { method: 'put'; query: Methods_104qhb5['put']['query'] } | undefined) =>
          `${prefix}${PATH178}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      sales_orders: {
        _sales_order_id: (val2: number) => {
          const prefix2 = `${PATH185}/${val2}`;

          return {
            /**
             * 国内受注を取得します
             * @returns OK
             */
            get: (option?: { query?: Methods_1beqb7x['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_1beqb7x['get']['resBody'], BasicHeaders, Methods_1beqb7x['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * 国内受注を取得します
             * @returns OK
             */
            $get: (option?: { query?: Methods_1beqb7x['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_1beqb7x['get']['resBody'], BasicHeaders, Methods_1beqb7x['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_1beqb7x['get']['query'] } | undefined) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          };
        },
        bulk_async: {
          /**
           * 国内受注を追加更新削除します。応答には user_logs も含まれます。embed はバッチ出力に対する指示になります。
           * @returns OK
           */
          post: (option: { body: Methods_1mfq3xz['post']['reqBody'], query?: Methods_1mfq3xz['post']['query'] | undefined, config?: T | undefined }) =>
            fetch<Methods_1mfq3xz['post']['resBody'], BasicHeaders, Methods_1mfq3xz['post']['status']>(prefix, PATH186, POST, option).json(),
          /**
           * 国内受注を追加更新削除します。応答には user_logs も含まれます。embed はバッチ出力に対する指示になります。
           * @returns OK
           */
          $post: (option: { body: Methods_1mfq3xz['post']['reqBody'], query?: Methods_1mfq3xz['post']['query'] | undefined, config?: T | undefined }) =>
            fetch<Methods_1mfq3xz['post']['resBody'], BasicHeaders, Methods_1mfq3xz['post']['status']>(prefix, PATH186, POST, option).json().then(r => r.body),
          $path: (option?: { method: 'post'; query: Methods_1mfq3xz['post']['query'] } | undefined) =>
            `${prefix}${PATH186}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
        bulk_insert: {
          /**
           * 国内受注を受注データファイルから一括登録します。
           * @returns OK
           */
          post: (option: { body: Methods_ok0ao0['post']['reqBody'], query?: Methods_ok0ao0['post']['query'] | undefined, config?: T | undefined }) =>
            fetch<Methods_ok0ao0['post']['resBody'], BasicHeaders, Methods_ok0ao0['post']['status']>(prefix, PATH187, POST, option, 'FormData').json(),
          /**
           * 国内受注を受注データファイルから一括登録します。
           * @returns OK
           */
          $post: (option: { body: Methods_ok0ao0['post']['reqBody'], query?: Methods_ok0ao0['post']['query'] | undefined, config?: T | undefined }) =>
            fetch<Methods_ok0ao0['post']['resBody'], BasicHeaders, Methods_ok0ao0['post']['status']>(prefix, PATH187, POST, option, 'FormData').json().then(r => r.body),
          $path: (option?: { method: 'post'; query: Methods_ok0ao0['post']['query'] } | undefined) =>
            `${prefix}${PATH187}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
        bulk_insert_async: {
          /**
           * 国内受注を受注データファイルから一括登録します。応答には user_logs も含まれます。embed はバッチ出力に対する指示になります。
           * @returns OK
           */
          post: (option: { body: Methods_1ypj8zr['post']['reqBody'], query?: Methods_1ypj8zr['post']['query'] | undefined, config?: T | undefined }) =>
            fetch<Methods_1ypj8zr['post']['resBody'], BasicHeaders, Methods_1ypj8zr['post']['status']>(prefix, PATH188, POST, option, 'FormData').json(),
          /**
           * 国内受注を受注データファイルから一括登録します。応答には user_logs も含まれます。embed はバッチ出力に対する指示になります。
           * @returns OK
           */
          $post: (option: { body: Methods_1ypj8zr['post']['reqBody'], query?: Methods_1ypj8zr['post']['query'] | undefined, config?: T | undefined }) =>
            fetch<Methods_1ypj8zr['post']['resBody'], BasicHeaders, Methods_1ypj8zr['post']['status']>(prefix, PATH188, POST, option, 'FormData').json().then(r => r.body),
          $path: (option?: { method: 'post'; query: Methods_1ypj8zr['post']['query'] } | undefined) =>
            `${prefix}${PATH188}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
        export_denpatu: {
          /**
           * 伝発名人帳票データを出力します
           */
          post: (option: { body: Methods_jd4jy['post']['reqBody'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_jd4jy['post']['status']>(prefix, PATH189, POST, option).send(),
          /**
           * 伝発名人帳票データを出力します
           */
          $post: (option: { body: Methods_jd4jy['post']['reqBody'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_jd4jy['post']['status']>(prefix, PATH189, POST, option).send().then(r => r.body),
          $path: () => `${prefix}${PATH189}`,
        },
        fare_summary: {
          /**
           * 国内受注運賃確認用一覧を返します
           * @returns OK
           */
          get: (option: { query: Methods_9owpvf['get']['query'], config?: T | undefined }) =>
            fetch<Methods_9owpvf['get']['resBody'], BasicHeaders, Methods_9owpvf['get']['status']>(prefix, PATH190, GET, option).json(),
          /**
           * 国内受注運賃確認用一覧を返します
           * @returns OK
           */
          $get: (option: { query: Methods_9owpvf['get']['query'], config?: T | undefined }) =>
            fetch<Methods_9owpvf['get']['resBody'], BasicHeaders, Methods_9owpvf['get']['status']>(prefix, PATH190, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_9owpvf['get']['query'] } | undefined) =>
            `${prefix}${PATH190}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
        get_invent_related: {
          /**
           * 国内受注商品関連情報を取得します
           * @returns OK
           */
          post: (option: { body: Methods_am7j69['post']['reqBody'], query?: Methods_am7j69['post']['query'] | undefined, config?: T | undefined }) =>
            fetch<Methods_am7j69['post']['resBody'], BasicHeaders, Methods_am7j69['post']['status']>(prefix, PATH191, POST, option).json(),
          /**
           * 国内受注商品関連情報を取得します
           * @returns OK
           */
          $post: (option: { body: Methods_am7j69['post']['reqBody'], query?: Methods_am7j69['post']['query'] | undefined, config?: T | undefined }) =>
            fetch<Methods_am7j69['post']['resBody'], BasicHeaders, Methods_am7j69['post']['status']>(prefix, PATH191, POST, option).json().then(r => r.body),
          $path: (option?: { method: 'post'; query: Methods_am7j69['post']['query'] } | undefined) =>
            `${prefix}${PATH191}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
        invent_sales: {
          /**
           * 商品売上一覧を返します
           * @returns OK
           */
          get: (option: { query: Methods_1yym8i3['get']['query'], config?: T | undefined }) =>
            fetch<Methods_1yym8i3['get']['resBody'], BasicHeaders, Methods_1yym8i3['get']['status']>(prefix, PATH192, GET, option).json(),
          /**
           * 商品売上一覧を返します
           * @returns OK
           */
          $get: (option: { query: Methods_1yym8i3['get']['query'], config?: T | undefined }) =>
            fetch<Methods_1yym8i3['get']['resBody'], BasicHeaders, Methods_1yym8i3['get']['status']>(prefix, PATH192, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_1yym8i3['get']['query'] } | undefined) =>
            `${prefix}${PATH192}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
        invents: {
          /**
           * 販売管理用商品一覧を取得します
           * @returns OK
           */
          get: (option: { query: Methods_mywtg5['get']['query'], config?: T | undefined }) =>
            fetch<Methods_mywtg5['get']['resBody'], BasicHeaders, Methods_mywtg5['get']['status']>(prefix, PATH193, GET, option).json(),
          /**
           * 販売管理用商品一覧を取得します
           * @returns OK
           */
          $get: (option: { query: Methods_mywtg5['get']['query'], config?: T | undefined }) =>
            fetch<Methods_mywtg5['get']['resBody'], BasicHeaders, Methods_mywtg5['get']['status']>(prefix, PATH193, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_mywtg5['get']['query'] } | undefined) =>
            `${prefix}${PATH193}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
        print_delivery_guidance: {
          /**
           * 代引案内を出力します。
           * @returns OK
           */
          post: (option: { body: Methods_198i57f['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_198i57f['post']['resBody'], BasicHeaders, Methods_198i57f['post']['status']>(prefix, PATH194, POST, option).json(),
          /**
           * 代引案内を出力します。
           * @returns OK
           */
          $post: (option: { body: Methods_198i57f['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_198i57f['post']['resBody'], BasicHeaders, Methods_198i57f['post']['status']>(prefix, PATH194, POST, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH194}`,
        },
        print_delivery_slip: {
          /**
           * 納品書・商品明細書を出力します。
           * @returns OK
           */
          post: (option: { body: Methods_1rqkf33['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_1rqkf33['post']['resBody'], BasicHeaders, Methods_1rqkf33['post']['status']>(prefix, PATH195, POST, option).json(),
          /**
           * 納品書・商品明細書を出力します。
           * @returns OK
           */
          $post: (option: { body: Methods_1rqkf33['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_1rqkf33['post']['resBody'], BasicHeaders, Methods_1rqkf33['post']['status']>(prefix, PATH195, POST, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH195}`,
        },
        print_physical_stock_request: {
          /**
           * 現物取置依頼書を出力します。
           * @returns OK
           */
          post: (option: { body: Methods_1dmq1vi['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_1dmq1vi['post']['resBody'], BasicHeaders, Methods_1dmq1vi['post']['status']>(prefix, PATH196, POST, option).json(),
          /**
           * 現物取置依頼書を出力します。
           * @returns OK
           */
          $post: (option: { body: Methods_1dmq1vi['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_1dmq1vi['post']['resBody'], BasicHeaders, Methods_1dmq1vi['post']['status']>(prefix, PATH196, POST, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH196}`,
        },
        print_purchase_order: {
          /**
           * 発注書(直送)を出力します。
           * @returns OK
           */
          post: (option: { body: Methods_1lppv48['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_1lppv48['post']['resBody'], BasicHeaders, Methods_1lppv48['post']['status']>(prefix, PATH197, POST, option).json(),
          /**
           * 発注書(直送)を出力します。
           * @returns OK
           */
          $post: (option: { body: Methods_1lppv48['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_1lppv48['post']['resBody'], BasicHeaders, Methods_1lppv48['post']['status']>(prefix, PATH197, POST, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH197}`,
        },
        print_transfer_request: {
          /**
           * 振込依頼を出力します。
           * @returns OK
           */
          post: (option: { body: Methods_qolqah['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_qolqah['post']['resBody'], BasicHeaders, Methods_qolqah['post']['status']>(prefix, PATH198, POST, option).json(),
          /**
           * 振込依頼を出力します。
           * @returns OK
           */
          $post: (option: { body: Methods_qolqah['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_qolqah['post']['resBody'], BasicHeaders, Methods_qolqah['post']['status']>(prefix, PATH198, POST, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH198}`,
        },
        /**
         * 国内受注一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_x3247n['get']['query'], config?: T | undefined }) =>
          fetch<Methods_x3247n['get']['resBody'], BasicHeaders, Methods_x3247n['get']['status']>(prefix, PATH185, GET, option).json(),
        /**
         * 国内受注一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_x3247n['get']['query'], config?: T | undefined }) =>
          fetch<Methods_x3247n['get']['resBody'], BasicHeaders, Methods_x3247n['get']['status']>(prefix, PATH185, GET, option).json().then(r => r.body),
        /**
         * 国内受注を追加更新削除します。
         * @returns OK
         */
        put: (option: { body: Methods_x3247n['put']['reqBody'], query?: Methods_x3247n['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_x3247n['put']['resBody'], BasicHeaders, Methods_x3247n['put']['status']>(prefix, PATH185, PUT, option).json(),
        /**
         * 国内受注を追加更新削除します。
         * @returns OK
         */
        $put: (option: { body: Methods_x3247n['put']['reqBody'], query?: Methods_x3247n['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_x3247n['put']['resBody'], BasicHeaders, Methods_x3247n['put']['status']>(prefix, PATH185, PUT, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_x3247n['get']['query'] } | { method: 'put'; query: Methods_x3247n['put']['query'] } | undefined) =>
          `${prefix}${PATH185}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      sales_prices: {
        bulk_delete: {
          /**
           * 販売単価を削除します。
           * @returns OK
           */
          put: (option: { body: Methods_4m9z7l['put']['reqBody'], query?: Methods_4m9z7l['put']['query'] | undefined, config?: T | undefined }) =>
            fetch<Methods_4m9z7l['put']['resBody'], BasicHeaders, Methods_4m9z7l['put']['status']>(prefix, PATH199, PUT, option).json(),
          /**
           * 販売単価を削除します。
           * @returns OK
           */
          $put: (option: { body: Methods_4m9z7l['put']['reqBody'], query?: Methods_4m9z7l['put']['query'] | undefined, config?: T | undefined }) =>
            fetch<Methods_4m9z7l['put']['resBody'], BasicHeaders, Methods_4m9z7l['put']['status']>(prefix, PATH199, PUT, option).json().then(r => r.body),
          $path: (option?: { method: 'put'; query: Methods_4m9z7l['put']['query'] } | undefined) =>
            `${prefix}${PATH199}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
      },
      sales_reservations: {
        _sales_reservation_id: (val2: number) => {
          const prefix2 = `${PATH200}/${val2}`;

          return {
            /**
             * 予約受注を取得します
             * @returns OK
             */
            get: (option?: { query?: Methods_13qzozx['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_13qzozx['get']['resBody'], BasicHeaders, Methods_13qzozx['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * 予約受注を取得します
             * @returns OK
             */
            $get: (option?: { query?: Methods_13qzozx['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_13qzozx['get']['resBody'], BasicHeaders, Methods_13qzozx['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_13qzozx['get']['query'] } | undefined) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          };
        },
        input_assist: {
          /**
           * 入力補助用予約受注一覧を返します
           * @returns OK
           */
          get: (option: { query: Methods_1dk3ni4['get']['query'], config?: T | undefined }) =>
            fetch<Methods_1dk3ni4['get']['resBody'], BasicHeaders, Methods_1dk3ni4['get']['status']>(prefix, PATH201, GET, option).json(),
          /**
           * 入力補助用予約受注一覧を返します
           * @returns OK
           */
          $get: (option: { query: Methods_1dk3ni4['get']['query'], config?: T | undefined }) =>
            fetch<Methods_1dk3ni4['get']['resBody'], BasicHeaders, Methods_1dk3ni4['get']['status']>(prefix, PATH201, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_1dk3ni4['get']['query'] } | undefined) =>
            `${prefix}${PATH201}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
        /**
         * 予約受注一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_1bkcai5['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1bkcai5['get']['resBody'], BasicHeaders, Methods_1bkcai5['get']['status']>(prefix, PATH200, GET, option).json(),
        /**
         * 予約受注一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_1bkcai5['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1bkcai5['get']['resBody'], BasicHeaders, Methods_1bkcai5['get']['status']>(prefix, PATH200, GET, option).json().then(r => r.body),
        /**
         * 予約受注を追加更新削除します。
         * @returns OK
         */
        put: (option: { body: Methods_1bkcai5['put']['reqBody'], query?: Methods_1bkcai5['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1bkcai5['put']['resBody'], BasicHeaders, Methods_1bkcai5['put']['status']>(prefix, PATH200, PUT, option).json(),
        /**
         * 予約受注を追加更新削除します。
         * @returns OK
         */
        $put: (option: { body: Methods_1bkcai5['put']['reqBody'], query?: Methods_1bkcai5['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1bkcai5['put']['resBody'], BasicHeaders, Methods_1bkcai5['put']['status']>(prefix, PATH200, PUT, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_1bkcai5['get']['query'] } | { method: 'put'; query: Methods_1bkcai5['put']['query'] } | undefined) =>
          `${prefix}${PATH200}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      sales_stock_details: {
        candidates: {
          /**
           * 取置明細候補の一覧を返します。最大でも1件のみ取得されます。
           * @returns OK
           */
          get: (option: { query: Methods_795m20['get']['query'], config?: T | undefined }) =>
            fetch<Methods_795m20['get']['resBody'], BasicHeaders, Methods_795m20['get']['status']>(prefix, PATH203, GET, option).json(),
          /**
           * 取置明細候補の一覧を返します。最大でも1件のみ取得されます。
           * @returns OK
           */
          $get: (option: { query: Methods_795m20['get']['query'], config?: T | undefined }) =>
            fetch<Methods_795m20['get']['resBody'], BasicHeaders, Methods_795m20['get']['status']>(prefix, PATH203, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_795m20['get']['query'] } | undefined) =>
            `${prefix}${PATH203}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
        /**
         * 取置明細一覧を返します。
         * @returns OK
         */
        get: (option: { query: Methods_1l5v6yp['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1l5v6yp['get']['resBody'], BasicHeaders, Methods_1l5v6yp['get']['status']>(prefix, PATH202, GET, option).json(),
        /**
         * 取置明細一覧を返します。
         * @returns OK
         */
        $get: (option: { query: Methods_1l5v6yp['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1l5v6yp['get']['resBody'], BasicHeaders, Methods_1l5v6yp['get']['status']>(prefix, PATH202, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_1l5v6yp['get']['query'] } | undefined) =>
          `${prefix}${PATH202}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      sales_stocks: {
        _sales_stock_id: (val2: number) => {
          const prefix2 = `${PATH204}/${val2}`;

          return {
            /**
             * 取置を取得します
             * @returns OK
             */
            get: (option?: { query?: Methods_1kgksu5['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_1kgksu5['get']['resBody'], BasicHeaders, Methods_1kgksu5['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * 取置を取得します
             * @returns OK
             */
            $get: (option?: { query?: Methods_1kgksu5['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_1kgksu5['get']['resBody'], BasicHeaders, Methods_1kgksu5['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_1kgksu5['get']['query'] } | undefined) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          };
        },
        layaway_request_form: {
          /**
           * 現物取置依頼書用データを取得します
           * @returns OK
           */
          get: (option?: { query?: Methods_1n3clhv['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1n3clhv['get']['resBody'], BasicHeaders, Methods_1n3clhv['get']['status']>(prefix, PATH205, GET, option).json(),
          /**
           * 現物取置依頼書用データを取得します
           * @returns OK
           */
          $get: (option?: { query?: Methods_1n3clhv['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1n3clhv['get']['resBody'], BasicHeaders, Methods_1n3clhv['get']['status']>(prefix, PATH205, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_1n3clhv['get']['query'] } | undefined) =>
            `${prefix}${PATH205}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
        /**
         * 取置一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_137e5zx['get']['query'], config?: T | undefined }) =>
          fetch<Methods_137e5zx['get']['resBody'], BasicHeaders, Methods_137e5zx['get']['status']>(prefix, PATH204, GET, option).json(),
        /**
         * 取置一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_137e5zx['get']['query'], config?: T | undefined }) =>
          fetch<Methods_137e5zx['get']['resBody'], BasicHeaders, Methods_137e5zx['get']['status']>(prefix, PATH204, GET, option).json().then(r => r.body),
        /**
         * 取置を追加更新削除します。
         * @returns OK
         */
        put: (option: { body: Methods_137e5zx['put']['reqBody'], query?: Methods_137e5zx['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_137e5zx['put']['resBody'], BasicHeaders, Methods_137e5zx['put']['status']>(prefix, PATH204, PUT, option).json(),
        /**
         * 取置を追加更新削除します。
         * @returns OK
         */
        $put: (option: { body: Methods_137e5zx['put']['reqBody'], query?: Methods_137e5zx['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_137e5zx['put']['resBody'], BasicHeaders, Methods_137e5zx['put']['status']>(prefix, PATH204, PUT, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_137e5zx['get']['query'] } | { method: 'put'; query: Methods_137e5zx['put']['query'] } | undefined) =>
          `${prefix}${PATH204}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      sanctum: {
        csrf_cookie: {
          /**
           * CSRFトークンを取得します。
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, Methods_17r4ujy['get']['resHeaders'], Methods_17r4ujy['get']['status']>(prefix, PATH206, GET, option).send(),
          /**
           * CSRFトークンを取得します。
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, Methods_17r4ujy['get']['resHeaders'], Methods_17r4ujy['get']['status']>(prefix, PATH206, GET, option).send().then(r => r.body),
          $path: () => `${prefix}${PATH206}`,
        },
      },
      seals: {
        _seal_id: (val2: number) => {
          const prefix2 = `${PATH207}/${val2}`;

          return {
            /**
             * シールを取得します
             * @returns OK
             */
            get: (option?: { query?: Methods_136q9v9['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_136q9v9['get']['resBody'], BasicHeaders, Methods_136q9v9['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * シールを取得します
             * @returns OK
             */
            $get: (option?: { query?: Methods_136q9v9['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_136q9v9['get']['resBody'], BasicHeaders, Methods_136q9v9['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_136q9v9['get']['query'] } | undefined) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          };
        },
        /**
         * シール一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_1g2ywz7['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1g2ywz7['get']['resBody'], BasicHeaders, Methods_1g2ywz7['get']['status']>(prefix, PATH207, GET, option).json(),
        /**
         * シール一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_1g2ywz7['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1g2ywz7['get']['resBody'], BasicHeaders, Methods_1g2ywz7['get']['status']>(prefix, PATH207, GET, option).json().then(r => r.body),
        /**
         * シールを追加更新削除します。
         * @returns OK
         */
        put: (option: { body: Methods_1g2ywz7['put']['reqBody'], query?: Methods_1g2ywz7['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1g2ywz7['put']['resBody'], BasicHeaders, Methods_1g2ywz7['put']['status']>(prefix, PATH207, PUT, option).json(),
        /**
         * シールを追加更新削除します。
         * @returns OK
         */
        $put: (option: { body: Methods_1g2ywz7['put']['reqBody'], query?: Methods_1g2ywz7['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1g2ywz7['put']['resBody'], BasicHeaders, Methods_1g2ywz7['put']['status']>(prefix, PATH207, PUT, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_1g2ywz7['get']['query'] } | { method: 'put'; query: Methods_1g2ywz7['put']['query'] } | undefined) =>
          `${prefix}${PATH207}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      search_details: {
        /**
         * 検索明細一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_1miwkay['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1miwkay['get']['resBody'], BasicHeaders, Methods_1miwkay['get']['status']>(prefix, PATH208, GET, option).json(),
        /**
         * 検索明細一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_1miwkay['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1miwkay['get']['resBody'], BasicHeaders, Methods_1miwkay['get']['status']>(prefix, PATH208, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_1miwkay['get']['query'] } | undefined) =>
          `${prefix}${PATH208}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      searches: {
        _search_id: (val2: number) => {
          const prefix2 = `${PATH209}/${val2}`;

          return {
            /**
             * 検索を取得します
             * @returns OK
             */
            get: (option?: { query?: Methods_1vzhyv8['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_1vzhyv8['get']['resBody'], BasicHeaders, Methods_1vzhyv8['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * 検索を取得します
             * @returns OK
             */
            $get: (option?: { query?: Methods_1vzhyv8['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_1vzhyv8['get']['resBody'], BasicHeaders, Methods_1vzhyv8['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_1vzhyv8['get']['query'] } | undefined) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          };
        },
        /**
         * 検索一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_82pp0r['get']['query'], config?: T | undefined }) =>
          fetch<Methods_82pp0r['get']['resBody'], BasicHeaders, Methods_82pp0r['get']['status']>(prefix, PATH209, GET, option).json(),
        /**
         * 検索一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_82pp0r['get']['query'], config?: T | undefined }) =>
          fetch<Methods_82pp0r['get']['resBody'], BasicHeaders, Methods_82pp0r['get']['status']>(prefix, PATH209, GET, option).json().then(r => r.body),
        /**
         * 検索を追加更新削除します。
         * @returns OK
         */
        put: (option: { body: Methods_82pp0r['put']['reqBody'], query?: Methods_82pp0r['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_82pp0r['put']['resBody'], BasicHeaders, Methods_82pp0r['put']['status']>(prefix, PATH209, PUT, option).json(),
        /**
         * 検索を追加更新削除します。
         * @returns OK
         */
        $put: (option: { body: Methods_82pp0r['put']['reqBody'], query?: Methods_82pp0r['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_82pp0r['put']['resBody'], BasicHeaders, Methods_82pp0r['put']['status']>(prefix, PATH209, PUT, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_82pp0r['get']['query'] } | { method: 'put'; query: Methods_82pp0r['put']['query'] } | undefined) =>
          `${prefix}${PATH209}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      ship_companies: {
        _ship_company_id: (val2: number) => {
          const prefix2 = `${PATH210}/${val2}`;

          return {
            /**
             * 船社を取得します
             * @returns OK
             */
            get: (option?: { query?: Methods_1qh1nm0['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_1qh1nm0['get']['resBody'], BasicHeaders, Methods_1qh1nm0['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * 船社を取得します
             * @returns OK
             */
            $get: (option?: { query?: Methods_1qh1nm0['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_1qh1nm0['get']['resBody'], BasicHeaders, Methods_1qh1nm0['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_1qh1nm0['get']['query'] } | undefined) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          };
        },
        /**
         * 船社一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_3gnzhh['get']['query'], config?: T | undefined }) =>
          fetch<Methods_3gnzhh['get']['resBody'], BasicHeaders, Methods_3gnzhh['get']['status']>(prefix, PATH210, GET, option).json(),
        /**
         * 船社一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_3gnzhh['get']['query'], config?: T | undefined }) =>
          fetch<Methods_3gnzhh['get']['resBody'], BasicHeaders, Methods_3gnzhh['get']['status']>(prefix, PATH210, GET, option).json().then(r => r.body),
        /**
         * 船社を追加更新削除します。
         * @returns OK
         */
        put: (option: { body: Methods_3gnzhh['put']['reqBody'], query?: Methods_3gnzhh['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_3gnzhh['put']['resBody'], BasicHeaders, Methods_3gnzhh['put']['status']>(prefix, PATH210, PUT, option).json(),
        /**
         * 船社を追加更新削除します。
         * @returns OK
         */
        $put: (option: { body: Methods_3gnzhh['put']['reqBody'], query?: Methods_3gnzhh['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_3gnzhh['put']['resBody'], BasicHeaders, Methods_3gnzhh['put']['status']>(prefix, PATH210, PUT, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_3gnzhh['get']['query'] } | { method: 'put'; query: Methods_3gnzhh['put']['query'] } | undefined) =>
          `${prefix}${PATH210}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      shippable_invents: {
        /**
         * 出荷可能商品一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_3hmr15['get']['query'], config?: T | undefined }) =>
          fetch<Methods_3hmr15['get']['resBody'], BasicHeaders, Methods_3hmr15['get']['status']>(prefix, PATH211, GET, option).json(),
        /**
         * 出荷可能商品一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_3hmr15['get']['query'], config?: T | undefined }) =>
          fetch<Methods_3hmr15['get']['resBody'], BasicHeaders, Methods_3hmr15['get']['status']>(prefix, PATH211, GET, option).json().then(r => r.body),
        /**
         * 出荷可能商品を追加更新削除します。
         * @returns OK
         */
        put: (option: { body: Methods_3hmr15['put']['reqBody'], query?: Methods_3hmr15['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_3hmr15['put']['resBody'], BasicHeaders, Methods_3hmr15['put']['status']>(prefix, PATH211, PUT, option).json(),
        /**
         * 出荷可能商品を追加更新削除します。
         * @returns OK
         */
        $put: (option: { body: Methods_3hmr15['put']['reqBody'], query?: Methods_3hmr15['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_3hmr15['put']['resBody'], BasicHeaders, Methods_3hmr15['put']['status']>(prefix, PATH211, PUT, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_3hmr15['get']['query'] } | { method: 'put'; query: Methods_3hmr15['put']['query'] } | undefined) =>
          `${prefix}${PATH211}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      shipping_link: {
        execute: {
          /**
           * 出荷指示データ連携バッチを実行します。
           */
          post: (option: { body: Methods_1nhiaty['post']['reqBody'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_1nhiaty['post']['status']>(prefix, PATH212, POST, option).send(),
          /**
           * 出荷指示データ連携バッチを実行します。
           */
          $post: (option: { body: Methods_1nhiaty['post']['reqBody'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_1nhiaty['post']['status']>(prefix, PATH212, POST, option).send().then(r => r.body),
          $path: () => `${prefix}${PATH212}`,
        },
      },
      shipping_link_histories: {
        _shipping_link_history_id: (val2: number) => {
          const prefix2 = `${PATH213}/${val2}`;

          return {
            /**
             * 出荷指示データ連係履歴を取得します
             * @returns OK
             */
            get: (option?: { query?: Methods_1dixrao['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_1dixrao['get']['resBody'], BasicHeaders, Methods_1dixrao['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * 出荷指示データ連係履歴を取得します
             * @returns OK
             */
            $get: (option?: { query?: Methods_1dixrao['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_1dixrao['get']['resBody'], BasicHeaders, Methods_1dixrao['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_1dixrao['get']['query'] } | undefined) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          };
        },
        /**
         * 出荷指示データ連係履歴一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_cz2gtt['get']['query'], config?: T | undefined }) =>
          fetch<Methods_cz2gtt['get']['resBody'], BasicHeaders, Methods_cz2gtt['get']['status']>(prefix, PATH213, GET, option).json(),
        /**
         * 出荷指示データ連係履歴一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_cz2gtt['get']['query'], config?: T | undefined }) =>
          fetch<Methods_cz2gtt['get']['resBody'], BasicHeaders, Methods_cz2gtt['get']['status']>(prefix, PATH213, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_cz2gtt['get']['query'] } | undefined) =>
          `${prefix}${PATH213}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      shipping_order_detail: {
        get_new_invent_vintage: {
          /**
           * 船積オーダー明細新品番年号区分取得と撮影区分を返します
           * @returns OK
           */
          post: (option: { body: Methods_1ady384['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_1ady384['post']['resBody'], BasicHeaders, Methods_1ady384['post']['status']>(prefix, PATH214, POST, option).json(),
          /**
           * 船積オーダー明細新品番年号区分取得と撮影区分を返します
           * @returns OK
           */
          $post: (option: { body: Methods_1ady384['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_1ady384['post']['resBody'], BasicHeaders, Methods_1ady384['post']['status']>(prefix, PATH214, POST, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH214}`,
        },
      },
      shipping_order_details: {
        bulk_update_check_limit_on: {
          /**
           * 船積オーダー検品期日データを取り込みます。
           * @returns OK
           */
          post: (option: { body: Methods_o24bzt['post']['reqBody'], query?: Methods_o24bzt['post']['query'] | undefined, config?: T | undefined }) =>
            fetch<Methods_o24bzt['post']['resBody'], BasicHeaders, Methods_o24bzt['post']['status']>(prefix, PATH215, POST, option, 'FormData').json(),
          /**
           * 船積オーダー検品期日データを取り込みます。
           * @returns OK
           */
          $post: (option: { body: Methods_o24bzt['post']['reqBody'], query?: Methods_o24bzt['post']['query'] | undefined, config?: T | undefined }) =>
            fetch<Methods_o24bzt['post']['resBody'], BasicHeaders, Methods_o24bzt['post']['status']>(prefix, PATH215, POST, option, 'FormData').json().then(r => r.body),
          $path: (option?: { method: 'post'; query: Methods_o24bzt['post']['query'] } | undefined) =>
            `${prefix}${PATH215}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
        export_check_limit_on: {
          /**
           * 検品期日データを出力します。
           */
          post: (option: { body: Methods_173omxf['post']['reqBody'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_173omxf['post']['status']>(prefix, PATH216, POST, option).send(),
          /**
           * 検品期日データを出力します。
           */
          $post: (option: { body: Methods_173omxf['post']['reqBody'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_173omxf['post']['status']>(prefix, PATH216, POST, option).send().then(r => r.body),
          $path: () => `${prefix}${PATH216}`,
        },
        labels: {
          /**
           * ラベル手配管理対象の船積オーダー明細一覧を返します ※ embedを指定なしで船積オーダー明細と船積オーダー通関書類が返却される
           * @returns OK
           */
          get: (option: { query: Methods_uff1bn['get']['query'], config?: T | undefined }) =>
            fetch<Methods_uff1bn['get']['resBody'], BasicHeaders, Methods_uff1bn['get']['status']>(prefix, PATH217, GET, option).json(),
          /**
           * ラベル手配管理対象の船積オーダー明細一覧を返します ※ embedを指定なしで船積オーダー明細と船積オーダー通関書類が返却される
           * @returns OK
           */
          $get: (option: { query: Methods_uff1bn['get']['query'], config?: T | undefined }) =>
            fetch<Methods_uff1bn['get']['resBody'], BasicHeaders, Methods_uff1bn['get']['status']>(prefix, PATH217, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_uff1bn['get']['query'] } | undefined) =>
            `${prefix}${PATH217}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
      },
      shipping_order_documents: {
        get_latest_analyzes: {
          /**
           * 搬入スケジュールフリータイム計算を行い一覧で返します
           * @returns OK
           */
          post: (option: { body: Methods_ivb8ce['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_ivb8ce['post']['resBody'], BasicHeaders, Methods_ivb8ce['post']['status']>(prefix, PATH219, POST, option).json(),
          /**
           * 搬入スケジュールフリータイム計算を行い一覧で返します
           * @returns OK
           */
          $post: (option: { body: Methods_ivb8ce['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_ivb8ce['post']['resBody'], BasicHeaders, Methods_ivb8ce['post']['status']>(prefix, PATH219, POST, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH219}`,
        },
        /**
         * 船積オーダー通関書類一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_1lxwben['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1lxwben['get']['resBody'], BasicHeaders, Methods_1lxwben['get']['status']>(prefix, PATH218, GET, option).json(),
        /**
         * 船積オーダー通関書類一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_1lxwben['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1lxwben['get']['resBody'], BasicHeaders, Methods_1lxwben['get']['status']>(prefix, PATH218, GET, option).json().then(r => r.body),
        /**
         * 通関書類を一括更新します。
         * @returns OK
         */
        put: (option: { body: Methods_1lxwben['put']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_1lxwben['put']['resBody'], BasicHeaders, Methods_1lxwben['put']['status']>(prefix, PATH218, PUT, option).json(),
        /**
         * 通関書類を一括更新します。
         * @returns OK
         */
        $put: (option: { body: Methods_1lxwben['put']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_1lxwben['put']['resBody'], BasicHeaders, Methods_1lxwben['put']['status']>(prefix, PATH218, PUT, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_1lxwben['get']['query'] } | undefined) =>
          `${prefix}${PATH218}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      shipping_order_labels: {
        /**
         * 船積オーダーラベル手配を更新します。
         * @returns OK
         */
        put: (option: { body: Methods_mc6l48['put']['reqBody'], query?: Methods_mc6l48['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_mc6l48['put']['resBody'], BasicHeaders, Methods_mc6l48['put']['status']>(prefix, PATH220, PUT, option).json(),
        /**
         * 船積オーダーラベル手配を更新します。
         * @returns OK
         */
        $put: (option: { body: Methods_mc6l48['put']['reqBody'], query?: Methods_mc6l48['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_mc6l48['put']['resBody'], BasicHeaders, Methods_mc6l48['put']['status']>(prefix, PATH220, PUT, option).json().then(r => r.body),
        $path: (option?: { method: 'put'; query: Methods_mc6l48['put']['query'] } | undefined) =>
          `${prefix}${PATH220}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      shipping_order_schedules: {
        get_free_times: {
          /**
           * 搬入スケジュールフリータイム計算を行い一覧で返します
           * @returns OK
           */
          post: (option: { body: Methods_b72jhm['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_b72jhm['post']['resBody'], BasicHeaders, Methods_b72jhm['post']['status']>(prefix, PATH222, POST, option).json(),
          /**
           * 搬入スケジュールフリータイム計算を行い一覧で返します
           * @returns OK
           */
          $post: (option: { body: Methods_b72jhm['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_b72jhm['post']['resBody'], BasicHeaders, Methods_b72jhm['post']['status']>(prefix, PATH222, POST, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH222}`,
        },
        get_imported_on: {
          /**
           * 搬入スケジュール一括搬入日計算を行い一覧で返します
           * @returns OK
           */
          post: (option: { body: Methods_bmktcn['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_bmktcn['post']['resBody'], BasicHeaders, Methods_bmktcn['post']['status']>(prefix, PATH223, POST, option).json(),
          /**
           * 搬入スケジュール一括搬入日計算を行い一覧で返します
           * @returns OK
           */
          $post: (option: { body: Methods_bmktcn['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_bmktcn['post']['resBody'], BasicHeaders, Methods_bmktcn['post']['status']>(prefix, PATH223, POST, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH223}`,
        },
        send_check_limit: {
          /**
           * 検品期日_日別データ送信を実行します。
           */
          post: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods_skm7q9['post']['status']>(prefix, PATH224, POST, option).send(),
          /**
           * 検品期日_日別データ送信を実行します。
           */
          $post: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods_skm7q9['post']['status']>(prefix, PATH224, POST, option).send().then(r => r.body),
          $path: () => `${prefix}${PATH224}`,
        },
        send_delivery_schedule: {
          /**
           * 搬入予定表出力、送信を実行します。
           */
          post: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods_abc6ed['post']['status']>(prefix, PATH225, POST, option).send(),
          /**
           * 搬入予定表出力、送信を実行します。
           */
          $post: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods_abc6ed['post']['status']>(prefix, PATH225, POST, option).send().then(r => r.body),
          $path: () => `${prefix}${PATH225}`,
        },
        send_shipping_order: {
          /**
           * 船積明細データ送信を実行します。
           */
          post: (option: { body: Methods_1388v7m['post']['reqBody'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_1388v7m['post']['status']>(prefix, PATH226, POST, option).send(),
          /**
           * 船積明細データ送信を実行します。
           */
          $post: (option: { body: Methods_1388v7m['post']['reqBody'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_1388v7m['post']['status']>(prefix, PATH226, POST, option).send().then(r => r.body),
          $path: () => `${prefix}${PATH226}`,
        },
        three_week_update: {
          /**
           * ３週間先の日曜日までの倉庫搬入日もしくは、入港日の船積を対象に船積オーダーを整理して更新する
           */
          post: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods_11jc5cj['post']['status']>(prefix, PATH227, POST, option).send(),
          /**
           * ３週間先の日曜日までの倉庫搬入日もしくは、入港日の船積を対象に船積オーダーを整理して更新する
           */
          $post: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods_11jc5cj['post']['status']>(prefix, PATH227, POST, option).send().then(r => r.body),
          $path: () => `${prefix}${PATH227}`,
        },
        weekly: {
          /**
           * 搬入予定カレンダー、モトックスカレンダー一覧を返します
           * @returns OK
           */
          get: (option?: { query?: Methods_a03ziv['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_a03ziv['get']['resBody'], BasicHeaders, Methods_a03ziv['get']['status']>(prefix, PATH228, GET, option).json(),
          /**
           * 搬入予定カレンダー、モトックスカレンダー一覧を返します
           * @returns OK
           */
          $get: (option?: { query?: Methods_a03ziv['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_a03ziv['get']['resBody'], BasicHeaders, Methods_a03ziv['get']['status']>(prefix, PATH228, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_a03ziv['get']['query'] } | undefined) =>
            `${prefix}${PATH228}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
        /**
         * 船積オーダー搬入スケジュール一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_1x0nph7['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1x0nph7['get']['resBody'], BasicHeaders, Methods_1x0nph7['get']['status']>(prefix, PATH221, GET, option).json(),
        /**
         * 船積オーダー搬入スケジュール一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_1x0nph7['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1x0nph7['get']['resBody'], BasicHeaders, Methods_1x0nph7['get']['status']>(prefix, PATH221, GET, option).json().then(r => r.body),
        /**
         * 搬入スケジュールを一括更新します。
         * @returns OK
         */
        put: (option: { body: Methods_1x0nph7['put']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_1x0nph7['put']['resBody'], BasicHeaders, Methods_1x0nph7['put']['status']>(prefix, PATH221, PUT, option).json(),
        /**
         * 搬入スケジュールを一括更新します。
         * @returns OK
         */
        $put: (option: { body: Methods_1x0nph7['put']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_1x0nph7['put']['resBody'], BasicHeaders, Methods_1x0nph7['put']['status']>(prefix, PATH221, PUT, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_1x0nph7['get']['query'] } | undefined) =>
          `${prefix}${PATH221}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      shipping_orders: {
        _no: (val2: string) => {
          const prefix2 = `${PATH229}/${val2}`;

          return {
            check: {
              /**
               * 船積オーダーを取得します
               * @returns OK
               */
              get: (option?: { query?: Methods_1adlrrc['get']['query'] | undefined, config?: T | undefined } | undefined) =>
                fetch<Methods_1adlrrc['get']['resBody'], BasicHeaders, Methods_1adlrrc['get']['status']>(prefix, `${prefix2}${PATH230}`, GET, option).json(),
              /**
               * 船積オーダーを取得します
               * @returns OK
               */
              $get: (option?: { query?: Methods_1adlrrc['get']['query'] | undefined, config?: T | undefined } | undefined) =>
                fetch<Methods_1adlrrc['get']['resBody'], BasicHeaders, Methods_1adlrrc['get']['status']>(prefix, `${prefix2}${PATH230}`, GET, option).json().then(r => r.body),
              $path: (option?: { method?: 'get' | undefined; query: Methods_1adlrrc['get']['query'] } | undefined) =>
                `${prefix}${prefix2}${PATH230}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
            },
            check_before_completion: {
              /**
               * 船積オーダー通関書類の入力が終わっているかの真偽を返します
               * @returns OK
               */
              get: (option?: { config?: T | undefined } | undefined) =>
                fetch<Methods_1yshnn1['get']['resBody'], BasicHeaders, Methods_1yshnn1['get']['status']>(prefix, `${prefix2}${PATH231}`, GET, option).json(),
              /**
               * 船積オーダー通関書類の入力が終わっているかの真偽を返します
               * @returns OK
               */
              $get: (option?: { config?: T | undefined } | undefined) =>
                fetch<Methods_1yshnn1['get']['resBody'], BasicHeaders, Methods_1yshnn1['get']['status']>(prefix, `${prefix2}${PATH231}`, GET, option).json().then(r => r.body),
              $path: () => `${prefix}${prefix2}${PATH231}`,
            },
            /**
             * 船積オーダーを取得します。新たなロックを取得する前に、同一テーブルの同一ロックキー1に対する同一担当者によるロックは解除されます。
             * @returns OK
             */
            get: (option?: { query?: Methods_b6d88v['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_b6d88v['get']['resBody'], BasicHeaders, Methods_b6d88v['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * 船積オーダーを取得します。新たなロックを取得する前に、同一テーブルの同一ロックキー1に対する同一担当者によるロックは解除されます。
             * @returns OK
             */
            $get: (option?: { query?: Methods_b6d88v['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_b6d88v['get']['resBody'], BasicHeaders, Methods_b6d88v['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_b6d88v['get']['query'] } | undefined) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          };
        },
        advance_payments: {
          /**
           * 前払金一覧を返します
           * @returns OK
           */
          get: (option: { query: Methods_8xwwso['get']['query'], config?: T | undefined }) =>
            fetch<Methods_8xwwso['get']['resBody'], BasicHeaders, Methods_8xwwso['get']['status']>(prefix, PATH232, GET, option).json(),
          /**
           * 前払金一覧を返します
           * @returns OK
           */
          $get: (option: { query: Methods_8xwwso['get']['query'], config?: T | undefined }) =>
            fetch<Methods_8xwwso['get']['resBody'], BasicHeaders, Methods_8xwwso['get']['status']>(prefix, PATH232, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_8xwwso['get']['query'] } | undefined) =>
            `${prefix}${PATH232}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
        amounts: {
          /**
           * 商品代金一覧を返します
           * @returns OK
           */
          get: (option: { query: Methods_1ozpl1x['get']['query'], config?: T | undefined }) =>
            fetch<Methods_1ozpl1x['get']['resBody'], BasicHeaders, Methods_1ozpl1x['get']['status']>(prefix, PATH233, GET, option).json(),
          /**
           * 商品代金一覧を返します
           * @returns OK
           */
          $get: (option: { query: Methods_1ozpl1x['get']['query'], config?: T | undefined }) =>
            fetch<Methods_1ozpl1x['get']['resBody'], BasicHeaders, Methods_1ozpl1x['get']['status']>(prefix, PATH233, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_1ozpl1x['get']['query'] } | undefined) =>
            `${prefix}${PATH233}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
        bulk_insert: {
          /**
           * 船積オーダーデータを取り込みます。
           * @returns OK
           */
          post: (option: { body: Methods_eymdnw['post']['reqBody'], query?: Methods_eymdnw['post']['query'] | undefined, config?: T | undefined }) =>
            fetch<Methods_eymdnw['post']['resBody'], BasicHeaders, Methods_eymdnw['post']['status']>(prefix, PATH234, POST, option, 'FormData').json(),
          /**
           * 船積オーダーデータを取り込みます。
           * @returns OK
           */
          $post: (option: { body: Methods_eymdnw['post']['reqBody'], query?: Methods_eymdnw['post']['query'] | undefined, config?: T | undefined }) =>
            fetch<Methods_eymdnw['post']['resBody'], BasicHeaders, Methods_eymdnw['post']['status']>(prefix, PATH234, POST, option, 'FormData').json().then(r => r.body),
          $path: (option?: { method: 'post'; query: Methods_eymdnw['post']['query'] } | undefined) =>
            `${prefix}${PATH234}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
        details: {
          /**
           * 船積オーダー一覧を返します
           * @returns OK
           */
          get: (option: { query: Methods_16t0dfi['get']['query'], config?: T | undefined }) =>
            fetch<Methods_16t0dfi['get']['resBody'], BasicHeaders, Methods_16t0dfi['get']['status']>(prefix, PATH235, GET, option).json(),
          /**
           * 船積オーダー一覧を返します
           * @returns OK
           */
          $get: (option: { query: Methods_16t0dfi['get']['query'], config?: T | undefined }) =>
            fetch<Methods_16t0dfi['get']['resBody'], BasicHeaders, Methods_16t0dfi['get']['status']>(prefix, PATH235, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_16t0dfi['get']['query'] } | undefined) =>
            `${prefix}${PATH235}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
        fares: {
          /**
           * 運賃一覧を返します
           * @returns OK
           */
          get: (option: { query: Methods_1agzsmt['get']['query'], config?: T | undefined }) =>
            fetch<Methods_1agzsmt['get']['resBody'], BasicHeaders, Methods_1agzsmt['get']['status']>(prefix, PATH236, GET, option).json(),
          /**
           * 運賃一覧を返します
           * @returns OK
           */
          $get: (option: { query: Methods_1agzsmt['get']['query'], config?: T | undefined }) =>
            fetch<Methods_1agzsmt['get']['resBody'], BasicHeaders, Methods_1agzsmt['get']['status']>(prefix, PATH236, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_1agzsmt['get']['query'] } | undefined) =>
            `${prefix}${PATH236}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
        labels: {
          export_rbp_label: {
            /**
             * RBPラベルデータを出力します。
             */
            post: (option: { body: Methods_137rqjk['post']['reqBody'], config?: T | undefined }) =>
              fetch<void, BasicHeaders, Methods_137rqjk['post']['status']>(prefix, PATH238, POST, option).send(),
            /**
             * RBPラベルデータを出力します。
             */
            $post: (option: { body: Methods_137rqjk['post']['reqBody'], config?: T | undefined }) =>
              fetch<void, BasicHeaders, Methods_137rqjk['post']['status']>(prefix, PATH238, POST, option).send().then(r => r.body),
            $path: () => `${prefix}${PATH238}`,
          },
          export_seal: {
            /**
             * シール手配データを出力します。
             */
            post: (option: { body: Methods_1ubmjju['post']['reqBody'], config?: T | undefined }) =>
              fetch<void, BasicHeaders, Methods_1ubmjju['post']['status']>(prefix, PATH239, POST, option).send(),
            /**
             * シール手配データを出力します。
             */
            $post: (option: { body: Methods_1ubmjju['post']['reqBody'], config?: T | undefined }) =>
              fetch<void, BasicHeaders, Methods_1ubmjju['post']['status']>(prefix, PATH239, POST, option).send().then(r => r.body),
            $path: () => `${prefix}${PATH239}`,
          },
          /**
           * ラベル手配管理対象の船積オーダー一覧を返します ※ embedを指定なしで船積オーダー明細と船積オーダー通関書類が返却される
           * @returns OK
           */
          get: (option: { query: Methods_dj3jf3['get']['query'], config?: T | undefined }) =>
            fetch<Methods_dj3jf3['get']['resBody'], BasicHeaders, Methods_dj3jf3['get']['status']>(prefix, PATH237, GET, option).json(),
          /**
           * ラベル手配管理対象の船積オーダー一覧を返します ※ embedを指定なしで船積オーダー明細と船積オーダー通関書類が返却される
           * @returns OK
           */
          $get: (option: { query: Methods_dj3jf3['get']['query'], config?: T | undefined }) =>
            fetch<Methods_dj3jf3['get']['resBody'], BasicHeaders, Methods_dj3jf3['get']['status']>(prefix, PATH237, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_dj3jf3['get']['query'] } | undefined) =>
            `${prefix}${PATH237}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
        list: {
          /**
           * 船積オーダー一覧を返します
           * @returns OK
           */
          get: (option: { query: Methods_8rf9eo['get']['query'], config?: T | undefined }) =>
            fetch<Methods_8rf9eo['get']['resBody'], BasicHeaders, Methods_8rf9eo['get']['status']>(prefix, PATH240, GET, option).json(),
          /**
           * 船積オーダー一覧を返します
           * @returns OK
           */
          $get: (option: { query: Methods_8rf9eo['get']['query'], config?: T | undefined }) =>
            fetch<Methods_8rf9eo['get']['resBody'], BasicHeaders, Methods_8rf9eo['get']['status']>(prefix, PATH240, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_8rf9eo['get']['query'] } | undefined) =>
            `${prefix}${PATH240}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
        move: {
          /**
           * 船積オーダー明細を別な船積オーダーへ移動更新します
           * @returns OK
           */
          put: (option: { body: Methods_ckv4x1['put']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_ckv4x1['put']['resBody'], BasicHeaders, Methods_ckv4x1['put']['status']>(prefix, PATH241, PUT, option).json(),
          /**
           * 船積オーダー明細を別な船積オーダーへ移動更新します
           * @returns OK
           */
          $put: (option: { body: Methods_ckv4x1['put']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_ckv4x1['put']['resBody'], BasicHeaders, Methods_ckv4x1['put']['status']>(prefix, PATH241, PUT, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH241}`,
        },
        print_collection_request: {
          /**
           * 集荷依頼書を出力します。
           * @returns OK
           */
          post: (option: { body: Methods_wwpyq6['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_wwpyq6['post']['resBody'], BasicHeaders, Methods_wwpyq6['post']['status']>(prefix, PATH242, POST, option).json(),
          /**
           * 集荷依頼書を出力します。
           * @returns OK
           */
          $post: (option: { body: Methods_wwpyq6['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_wwpyq6['post']['resBody'], BasicHeaders, Methods_wwpyq6['post']['status']>(prefix, PATH242, POST, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH242}`,
        },
        print_order_form: {
          domestic: {
            /**
             * 船積オーダー書を出力します。
             * @returns OK
             */
            post: (option: { body: Methods_1n2ohx0['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods_1n2ohx0['post']['resBody'], BasicHeaders, Methods_1n2ohx0['post']['status']>(prefix, PATH243, POST, option).json(),
            /**
             * 船積オーダー書を出力します。
             * @returns OK
             */
            $post: (option: { body: Methods_1n2ohx0['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods_1n2ohx0['post']['resBody'], BasicHeaders, Methods_1n2ohx0['post']['status']>(prefix, PATH243, POST, option).json().then(r => r.body),
            $path: () => `${prefix}${PATH243}`,
          },
          foreign: {
            /**
             * 船積オーダー書を出力します。
             * @returns OK
             */
            post: (option: { body: Methods_bxjugg['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods_bxjugg['post']['resBody'], BasicHeaders, Methods_bxjugg['post']['status']>(prefix, PATH244, POST, option).json(),
            /**
             * 船積オーダー書を出力します。
             * @returns OK
             */
            $post: (option: { body: Methods_bxjugg['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods_bxjugg['post']['resBody'], BasicHeaders, Methods_bxjugg['post']['status']>(prefix, PATH244, POST, option).json().then(r => r.body),
            $path: () => `${prefix}${PATH244}`,
          },
        },
        /**
         * 船積オーダー一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_t1s887['get']['query'], config?: T | undefined }) =>
          fetch<Methods_t1s887['get']['resBody'], BasicHeaders, Methods_t1s887['get']['status']>(prefix, PATH229, GET, option).json(),
        /**
         * 船積オーダー一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_t1s887['get']['query'], config?: T | undefined }) =>
          fetch<Methods_t1s887['get']['resBody'], BasicHeaders, Methods_t1s887['get']['status']>(prefix, PATH229, GET, option).json().then(r => r.body),
        /**
         * 船積オーダーを追加更新削除します。
         * @returns OK
         */
        put: (option: { body: Methods_t1s887['put']['reqBody'], query?: Methods_t1s887['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_t1s887['put']['resBody'], BasicHeaders, Methods_t1s887['put']['status']>(prefix, PATH229, PUT, option).json(),
        /**
         * 船積オーダーを追加更新削除します。
         * @returns OK
         */
        $put: (option: { body: Methods_t1s887['put']['reqBody'], query?: Methods_t1s887['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_t1s887['put']['resBody'], BasicHeaders, Methods_t1s887['put']['status']>(prefix, PATH229, PUT, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_t1s887['get']['query'] } | { method: 'put'; query: Methods_t1s887['put']['query'] } | undefined) =>
          `${prefix}${PATH229}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      shipping_reservation_details: {
        _shipping_reservation_detail_id: (val2: number) => {
          const prefix2 = `${PATH245}/${val2}`;

          return {
            shipping_order_details: {
              /**
               * 船積発注明細一覧(前渡一覧)を返します
               * @returns OK
               */
              get: (option: { query: Methods_674ubm['get']['query'], config?: T | undefined }) =>
                fetch<Methods_674ubm['get']['resBody'], BasicHeaders, Methods_674ubm['get']['status']>(prefix, `${prefix2}${PATH246}`, GET, option).json(),
              /**
               * 船積発注明細一覧(前渡一覧)を返します
               * @returns OK
               */
              $get: (option: { query: Methods_674ubm['get']['query'], config?: T | undefined }) =>
                fetch<Methods_674ubm['get']['resBody'], BasicHeaders, Methods_674ubm['get']['status']>(prefix, `${prefix2}${PATH246}`, GET, option).json().then(r => r.body),
              $path: (option?: { method?: 'get' | undefined; query: Methods_674ubm['get']['query'] } | undefined) =>
                `${prefix}${prefix2}${PATH246}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
            },
          };
        },
      },
      shipping_reservations: {
        _no: (val2: string) => {
          const prefix2 = `${PATH247}/${val2}`;

          return {
            /**
             * 予約オーダーを取得します
             * @returns OK
             */
            get: (option?: { query?: Methods_tc2cmt['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_tc2cmt['get']['resBody'], BasicHeaders, Methods_tc2cmt['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * 予約オーダーを取得します
             * @returns OK
             */
            $get: (option?: { query?: Methods_tc2cmt['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_tc2cmt['get']['resBody'], BasicHeaders, Methods_tc2cmt['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_tc2cmt['get']['query'] } | undefined) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          };
        },
        bulk_insert: {
          /**
           * 予約オーダーデータを取り込みます。
           * @returns OK
           */
          post: (option: { body: Methods_1mcn7t6['post']['reqBody'], query?: Methods_1mcn7t6['post']['query'] | undefined, config?: T | undefined }) =>
            fetch<Methods_1mcn7t6['post']['resBody'], BasicHeaders, Methods_1mcn7t6['post']['status']>(prefix, PATH248, POST, option, 'FormData').json(),
          /**
           * 予約オーダーデータを取り込みます。
           * @returns OK
           */
          $post: (option: { body: Methods_1mcn7t6['post']['reqBody'], query?: Methods_1mcn7t6['post']['query'] | undefined, config?: T | undefined }) =>
            fetch<Methods_1mcn7t6['post']['resBody'], BasicHeaders, Methods_1mcn7t6['post']['status']>(prefix, PATH248, POST, option, 'FormData').json().then(r => r.body),
          $path: (option?: { method: 'post'; query: Methods_1mcn7t6['post']['query'] } | undefined) =>
            `${prefix}${PATH248}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
        output_remaining_shipping_reservation: {
          /**
           * 支払先別予約オーダー残データを出力します。
           * @returns OK
           */
          post: (option: { body: Methods_1g12l22['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_1g12l22['post']['resBody'], BasicHeaders, Methods_1g12l22['post']['status']>(prefix, PATH249, POST, option).json(),
          /**
           * 支払先別予約オーダー残データを出力します。
           * @returns OK
           */
          $post: (option: { body: Methods_1g12l22['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_1g12l22['post']['resBody'], BasicHeaders, Methods_1g12l22['post']['status']>(prefix, PATH249, POST, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH249}`,
        },
        print_order_form: {
          /**
           * 予約オーダー書を出力します。
           * @returns OK
           */
          post: (option: { body: Methods_1do3ve1['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_1do3ve1['post']['resBody'], BasicHeaders, Methods_1do3ve1['post']['status']>(prefix, PATH250, POST, option).json(),
          /**
           * 予約オーダー書を出力します。
           * @returns OK
           */
          $post: (option: { body: Methods_1do3ve1['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_1do3ve1['post']['resBody'], BasicHeaders, Methods_1do3ve1['post']['status']>(prefix, PATH250, POST, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH250}`,
        },
        vendors_with_remaining_shipping_reservation: {
          /**
           * 予約オーダー残有支払先の一覧を取得します。
           * @returns OK
           */
          get: (option?: { query?: Methods_10l7jid['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_10l7jid['get']['resBody'], BasicHeaders, Methods_10l7jid['get']['status']>(prefix, PATH251, GET, option).json(),
          /**
           * 予約オーダー残有支払先の一覧を取得します。
           * @returns OK
           */
          $get: (option?: { query?: Methods_10l7jid['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_10l7jid['get']['resBody'], BasicHeaders, Methods_10l7jid['get']['status']>(prefix, PATH251, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_10l7jid['get']['query'] } | undefined) =>
            `${prefix}${PATH251}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
        /**
         * 予約オーダー一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_1vdv6x5['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1vdv6x5['get']['resBody'], BasicHeaders, Methods_1vdv6x5['get']['status']>(prefix, PATH247, GET, option).json(),
        /**
         * 予約オーダー一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_1vdv6x5['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1vdv6x5['get']['resBody'], BasicHeaders, Methods_1vdv6x5['get']['status']>(prefix, PATH247, GET, option).json().then(r => r.body),
        /**
         * 予約オーダーを追加更新削除します。
         * @returns OK
         */
        put: (option: { body: Methods_1vdv6x5['put']['reqBody'], query?: Methods_1vdv6x5['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1vdv6x5['put']['resBody'], BasicHeaders, Methods_1vdv6x5['put']['status']>(prefix, PATH247, PUT, option).json(),
        /**
         * 予約オーダーを追加更新削除します。
         * @returns OK
         */
        $put: (option: { body: Methods_1vdv6x5['put']['reqBody'], query?: Methods_1vdv6x5['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1vdv6x5['put']['resBody'], BasicHeaders, Methods_1vdv6x5['put']['status']>(prefix, PATH247, PUT, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_1vdv6x5['get']['query'] } | { method: 'put'; query: Methods_1vdv6x5['put']['query'] } | undefined) =>
          `${prefix}${PATH247}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      shipping_reservations_summary: {
        /**
         * 船積みオーダーのサマリを取得します
         * @returns OK
         */
        get: (option: { query: Methods_1csno8e['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1csno8e['get']['resBody'], BasicHeaders, Methods_1csno8e['get']['status']>(prefix, PATH252, GET, option).json(),
        /**
         * 船積みオーダーのサマリを取得します
         * @returns OK
         */
        $get: (option: { query: Methods_1csno8e['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1csno8e['get']['resBody'], BasicHeaders, Methods_1csno8e['get']['status']>(prefix, PATH252, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_1csno8e['get']['query'] } | undefined) =>
          `${prefix}${PATH252}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      special_prices: {
        _special_price_id: (val2: number) => {
          const prefix2 = `${PATH253}/${val2}`;

          return {
            /**
             * 仕入先を取得します
             * @returns OK
             */
            get: (option?: { query?: Methods_tqg7w5['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_tqg7w5['get']['resBody'], BasicHeaders, Methods_tqg7w5['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * 仕入先を取得します
             * @returns OK
             */
            $get: (option?: { query?: Methods_tqg7w5['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_tqg7w5['get']['resBody'], BasicHeaders, Methods_tqg7w5['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_tqg7w5['get']['query'] } | undefined) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          };
        },
        bulk_upsert: {
          /**
           * 特別単価を一括登録更新します。
           * @returns OK
           */
          post: (option: { body: Methods_btwo8w['post']['reqBody'], query?: Methods_btwo8w['post']['query'] | undefined, config?: T | undefined }) =>
            fetch<Methods_btwo8w['post']['resBody'], BasicHeaders, Methods_btwo8w['post']['status']>(prefix, PATH254, POST, option, 'FormData').json(),
          /**
           * 特別単価を一括登録更新します。
           * @returns OK
           */
          $post: (option: { body: Methods_btwo8w['post']['reqBody'], query?: Methods_btwo8w['post']['query'] | undefined, config?: T | undefined }) =>
            fetch<Methods_btwo8w['post']['resBody'], BasicHeaders, Methods_btwo8w['post']['status']>(prefix, PATH254, POST, option, 'FormData').json().then(r => r.body),
          $path: (option?: { method: 'post'; query: Methods_btwo8w['post']['query'] } | undefined) =>
            `${prefix}${PATH254}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
        calculate: {
          /**
           * 計算した特別単価を返します
           * @returns OK
           */
          get: (option: { query: Methods_c0hubm['get']['query'], config?: T | undefined }) =>
            fetch<Methods_c0hubm['get']['resBody'], BasicHeaders, Methods_c0hubm['get']['status']>(prefix, PATH255, GET, option).json(),
          /**
           * 計算した特別単価を返します
           * @returns OK
           */
          $get: (option: { query: Methods_c0hubm['get']['query'], config?: T | undefined }) =>
            fetch<Methods_c0hubm['get']['resBody'], BasicHeaders, Methods_c0hubm['get']['status']>(prefix, PATH255, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_c0hubm['get']['query'] } | undefined) =>
            `${prefix}${PATH255}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
        /**
         * 特別単価一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_1mmtuoh['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1mmtuoh['get']['resBody'], BasicHeaders, Methods_1mmtuoh['get']['status']>(prefix, PATH253, GET, option).json(),
        /**
         * 特別単価一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_1mmtuoh['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1mmtuoh['get']['resBody'], BasicHeaders, Methods_1mmtuoh['get']['status']>(prefix, PATH253, GET, option).json().then(r => r.body),
        /**
         * 特別単価を追加更新削除します。
         * @returns OK
         */
        put: (option: { body: Methods_1mmtuoh['put']['reqBody'], query?: Methods_1mmtuoh['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1mmtuoh['put']['resBody'], BasicHeaders, Methods_1mmtuoh['put']['status']>(prefix, PATH253, PUT, option).json(),
        /**
         * 特別単価を追加更新削除します。
         * @returns OK
         */
        $put: (option: { body: Methods_1mmtuoh['put']['reqBody'], query?: Methods_1mmtuoh['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1mmtuoh['put']['resBody'], BasicHeaders, Methods_1mmtuoh['put']['status']>(prefix, PATH253, PUT, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_1mmtuoh['get']['query'] } | { method: 'put'; query: Methods_1mmtuoh['put']['query'] } | undefined) =>
          `${prefix}${PATH253}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      stock_adjustments: {
        _stock_adjustment_id: (val2: number) => {
          const prefix2 = `${PATH256}/${val2}`;

          return {
            /**
             * 在庫調整を取得します
             * @returns OK
             */
            get: (option?: { query?: Methods_gdlmrj['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_gdlmrj['get']['resBody'], BasicHeaders, Methods_gdlmrj['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * 在庫調整を取得します
             * @returns OK
             */
            $get: (option?: { query?: Methods_gdlmrj['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_gdlmrj['get']['resBody'], BasicHeaders, Methods_gdlmrj['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_gdlmrj['get']['query'] } | undefined) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          };
        },
        /**
         * 在庫調整一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_15aznog['get']['query'], config?: T | undefined }) =>
          fetch<Methods_15aznog['get']['resBody'], BasicHeaders, Methods_15aznog['get']['status']>(prefix, PATH256, GET, option).json(),
        /**
         * 在庫調整一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_15aznog['get']['query'], config?: T | undefined }) =>
          fetch<Methods_15aznog['get']['resBody'], BasicHeaders, Methods_15aznog['get']['status']>(prefix, PATH256, GET, option).json().then(r => r.body),
        /**
         * 在庫調整を追加更新削除します。
         * @returns OK
         */
        put: (option: { body: Methods_15aznog['put']['reqBody'], query?: Methods_15aznog['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_15aznog['put']['resBody'], BasicHeaders, Methods_15aznog['put']['status']>(prefix, PATH256, PUT, option).json(),
        /**
         * 在庫調整を追加更新削除します。
         * @returns OK
         */
        $put: (option: { body: Methods_15aznog['put']['reqBody'], query?: Methods_15aznog['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_15aznog['put']['resBody'], BasicHeaders, Methods_15aznog['put']['status']>(prefix, PATH256, PUT, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_15aznog['get']['query'] } | { method: 'put'; query: Methods_15aznog['put']['query'] } | undefined) =>
          `${prefix}${PATH256}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      stock_changes: {
        _stock_change_id: (val2: number) => {
          const prefix2 = `${PATH257}/${val2}`;

          return {
            request_invent_insert: {
              /**
               * 商品マスタ作成担当者へ、商品マスタ作成の依頼メールを送信します。
               */
              post: (option?: { config?: T | undefined } | undefined) =>
                fetch<void, BasicHeaders, Methods_10jscdg['post']['status']>(prefix, `${prefix2}${PATH258}`, POST, option).send(),
              /**
               * 商品マスタ作成担当者へ、商品マスタ作成の依頼メールを送信します。
               */
              $post: (option?: { config?: T | undefined } | undefined) =>
                fetch<void, BasicHeaders, Methods_10jscdg['post']['status']>(prefix, `${prefix2}${PATH258}`, POST, option).send().then(r => r.body),
              $path: () => `${prefix}${prefix2}${PATH258}`,
            },
            request_sales_reservation_stocks_insert: {
              /**
               * 予約・取置担当者へ、予約・取置の依頼メールを送信します。
               */
              post: (option?: { config?: T | undefined } | undefined) =>
                fetch<void, BasicHeaders, Methods_c8mwab['post']['status']>(prefix, `${prefix2}${PATH259}`, POST, option).send(),
              /**
               * 予約・取置担当者へ、予約・取置の依頼メールを送信します。
               */
              $post: (option?: { config?: T | undefined } | undefined) =>
                fetch<void, BasicHeaders, Methods_c8mwab['post']['status']>(prefix, `${prefix2}${PATH259}`, POST, option).send().then(r => r.body),
              $path: () => `${prefix}${prefix2}${PATH259}`,
            },
            /**
             * 在庫振替を取得します
             * @returns OK
             */
            get: (option?: { query?: Methods_1rbgbq5['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_1rbgbq5['get']['resBody'], BasicHeaders, Methods_1rbgbq5['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * 在庫振替を取得します
             * @returns OK
             */
            $get: (option?: { query?: Methods_1rbgbq5['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_1rbgbq5['get']['resBody'], BasicHeaders, Methods_1rbgbq5['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_1rbgbq5['get']['query'] } | undefined) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          };
        },
        print_stock_change_request: {
          /**
           * 在庫振替依頼書を出力します。
           * @returns OK
           */
          post: (option: { body: Methods_1nalug3['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_1nalug3['post']['resBody'], BasicHeaders, Methods_1nalug3['post']['status']>(prefix, PATH260, POST, option).json(),
          /**
           * 在庫振替依頼書を出力します。
           * @returns OK
           */
          $post: (option: { body: Methods_1nalug3['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_1nalug3['post']['resBody'], BasicHeaders, Methods_1nalug3['post']['status']>(prefix, PATH260, POST, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH260}`,
        },
        /**
         * 在庫振替一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_1lf8aep['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1lf8aep['get']['resBody'], BasicHeaders, Methods_1lf8aep['get']['status']>(prefix, PATH257, GET, option).json(),
        /**
         * 在庫振替一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_1lf8aep['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1lf8aep['get']['resBody'], BasicHeaders, Methods_1lf8aep['get']['status']>(prefix, PATH257, GET, option).json().then(r => r.body),
        /**
         * 在庫振替を追加更新削除します。
         * @returns OK
         */
        put: (option: { body: Methods_1lf8aep['put']['reqBody'], query?: Methods_1lf8aep['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1lf8aep['put']['resBody'], BasicHeaders, Methods_1lf8aep['put']['status']>(prefix, PATH257, PUT, option).json(),
        /**
         * 在庫振替を追加更新削除します。
         * @returns OK
         */
        $put: (option: { body: Methods_1lf8aep['put']['reqBody'], query?: Methods_1lf8aep['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1lf8aep['put']['resBody'], BasicHeaders, Methods_1lf8aep['put']['status']>(prefix, PATH257, PUT, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_1lf8aep['get']['query'] } | { method: 'put'; query: Methods_1lf8aep['put']['query'] } | undefined) =>
          `${prefix}${PATH257}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      stock_transactions: {
        /**
         * 在庫受払一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_11ol7td['get']['query'], config?: T | undefined }) =>
          fetch<Methods_11ol7td['get']['resBody'], BasicHeaders, Methods_11ol7td['get']['status']>(prefix, PATH261, GET, option).json(),
        /**
         * 在庫受払一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_11ol7td['get']['query'], config?: T | undefined }) =>
          fetch<Methods_11ol7td['get']['resBody'], BasicHeaders, Methods_11ol7td['get']['status']>(prefix, PATH261, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_11ol7td['get']['query'] } | undefined) =>
          `${prefix}${PATH261}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      stock_transfers: {
        _stock_transfer_id: (val2: number) => {
          const prefix2 = `${PATH262}/${val2}`;

          return {
            /**
             * 在庫移動を取得します
             * @returns OK
             */
            get: (option?: { query?: Methods_rwzx93['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_rwzx93['get']['resBody'], BasicHeaders, Methods_rwzx93['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * 在庫移動を取得します
             * @returns OK
             */
            $get: (option?: { query?: Methods_rwzx93['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_rwzx93['get']['resBody'], BasicHeaders, Methods_rwzx93['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_rwzx93['get']['query'] } | undefined) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          };
        },
        receive: {
          /**
           * 在庫移動を更新します。更新のみ可能です。
           * @returns OK
           */
          put: (option: { body: Methods_2iizqi['put']['reqBody'], query?: Methods_2iizqi['put']['query'] | undefined, config?: T | undefined }) =>
            fetch<Methods_2iizqi['put']['resBody'], BasicHeaders, Methods_2iizqi['put']['status']>(prefix, PATH263, PUT, option).json(),
          /**
           * 在庫移動を更新します。更新のみ可能です。
           * @returns OK
           */
          $put: (option: { body: Methods_2iizqi['put']['reqBody'], query?: Methods_2iizqi['put']['query'] | undefined, config?: T | undefined }) =>
            fetch<Methods_2iizqi['put']['resBody'], BasicHeaders, Methods_2iizqi['put']['status']>(prefix, PATH263, PUT, option).json().then(r => r.body),
          $path: (option?: { method: 'put'; query: Methods_2iizqi['put']['query'] } | undefined) =>
            `${prefix}${PATH263}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
        /**
         * 在庫移動一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_ffo7bk['get']['query'], config?: T | undefined }) =>
          fetch<Methods_ffo7bk['get']['resBody'], BasicHeaders, Methods_ffo7bk['get']['status']>(prefix, PATH262, GET, option).json(),
        /**
         * 在庫移動一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_ffo7bk['get']['query'], config?: T | undefined }) =>
          fetch<Methods_ffo7bk['get']['resBody'], BasicHeaders, Methods_ffo7bk['get']['status']>(prefix, PATH262, GET, option).json().then(r => r.body),
        /**
         * 在庫移動を追加します。追加のみ可能です。
         * @returns OK
         */
        put: (option: { body: Methods_ffo7bk['put']['reqBody'], query?: Methods_ffo7bk['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_ffo7bk['put']['resBody'], BasicHeaders, Methods_ffo7bk['put']['status']>(prefix, PATH262, PUT, option).json(),
        /**
         * 在庫移動を追加します。追加のみ可能です。
         * @returns OK
         */
        $put: (option: { body: Methods_ffo7bk['put']['reqBody'], query?: Methods_ffo7bk['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_ffo7bk['put']['resBody'], BasicHeaders, Methods_ffo7bk['put']['status']>(prefix, PATH262, PUT, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_ffo7bk['get']['query'] } | { method: 'put'; query: Methods_ffo7bk['put']['query'] } | undefined) =>
          `${prefix}${PATH262}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      stocks: {
        _stock_id: (val2: number) => {
          const prefix2 = `${PATH264}/${val2}`;

          return {
            /**
             * 在庫を取得します
             * @returns OK
             */
            get: (option?: { query?: Methods_m52t4l['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_m52t4l['get']['resBody'], BasicHeaders, Methods_m52t4l['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * 在庫を取得します
             * @returns OK
             */
            $get: (option?: { query?: Methods_m52t4l['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_m52t4l['get']['resBody'], BasicHeaders, Methods_m52t4l['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_m52t4l['get']['query'] } | undefined) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          };
        },
        /**
         * 在庫一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_16yz2f8['get']['query'], config?: T | undefined }) =>
          fetch<Methods_16yz2f8['get']['resBody'], BasicHeaders, Methods_16yz2f8['get']['status']>(prefix, PATH264, GET, option).json(),
        /**
         * 在庫一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_16yz2f8['get']['query'], config?: T | undefined }) =>
          fetch<Methods_16yz2f8['get']['resBody'], BasicHeaders, Methods_16yz2f8['get']['status']>(prefix, PATH264, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_16yz2f8['get']['query'] } | undefined) =>
          `${prefix}${PATH264}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      sub_account_titles: {
        _sub_account_title_id: (val2: number) => {
          const prefix2 = `${PATH265}/${val2}`;

          return {
            /**
             * 補助科目を取得します
             * @returns OK
             */
            get: (option?: { query?: Methods_1h2nfvp['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_1h2nfvp['get']['resBody'], BasicHeaders, Methods_1h2nfvp['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * 補助科目を取得します
             * @returns OK
             */
            $get: (option?: { query?: Methods_1h2nfvp['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_1h2nfvp['get']['resBody'], BasicHeaders, Methods_1h2nfvp['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_1h2nfvp['get']['query'] } | undefined) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          };
        },
        /**
         * 補助科目一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_de4tzr['get']['query'], config?: T | undefined }) =>
          fetch<Methods_de4tzr['get']['resBody'], BasicHeaders, Methods_de4tzr['get']['status']>(prefix, PATH265, GET, option).json(),
        /**
         * 補助科目一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_de4tzr['get']['query'], config?: T | undefined }) =>
          fetch<Methods_de4tzr['get']['resBody'], BasicHeaders, Methods_de4tzr['get']['status']>(prefix, PATH265, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_de4tzr['get']['query'] } | undefined) =>
          `${prefix}${PATH265}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      tables: {
        _table_id: (val2: string) => {
          const prefix2 = `${PATH266}/${val2}`;

          return {
            /**
             * 単一テーブルのデータを一覧で取得し返却します
             * @returns OK
             */
            get: (option?: { query?: Methods_1arxx4l['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_1arxx4l['get']['resBody'], BasicHeaders, Methods_1arxx4l['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * 単一テーブルのデータを一覧で取得し返却します
             * @returns OK
             */
            $get: (option?: { query?: Methods_1arxx4l['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_1arxx4l['get']['resBody'], BasicHeaders, Methods_1arxx4l['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_1arxx4l['get']['query'] } | undefined) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          };
        },
      },
      tax_payments: {
        /**
         * 納税実績一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_1o9zp0q['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1o9zp0q['get']['resBody'], BasicHeaders, Methods_1o9zp0q['get']['status']>(prefix, PATH267, GET, option).json(),
        /**
         * 納税実績一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_1o9zp0q['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1o9zp0q['get']['resBody'], BasicHeaders, Methods_1o9zp0q['get']['status']>(prefix, PATH267, GET, option).json().then(r => r.body),
        /**
         * 納税実績を追加します。
         * @returns OK
         */
        put: (option: { body: Methods_1o9zp0q['put']['reqBody'], query?: Methods_1o9zp0q['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1o9zp0q['put']['resBody'], BasicHeaders, Methods_1o9zp0q['put']['status']>(prefix, PATH267, PUT, option).json(),
        /**
         * 納税実績を追加します。
         * @returns OK
         */
        $put: (option: { body: Methods_1o9zp0q['put']['reqBody'], query?: Methods_1o9zp0q['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1o9zp0q['put']['resBody'], BasicHeaders, Methods_1o9zp0q['put']['status']>(prefix, PATH267, PUT, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_1o9zp0q['get']['query'] } | { method: 'put'; query: Methods_1o9zp0q['put']['query'] } | undefined) =>
          `${prefix}${PATH267}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      team_user_links: {
        _team_user_link_id: (val2: number) => {
          const prefix2 = `${PATH268}/${val2}`;

          return {
            /**
             * チーム担当者を取得します
             * @returns OK
             */
            get: (option?: { query?: Methods_j9566n['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_j9566n['get']['resBody'], BasicHeaders, Methods_j9566n['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * チーム担当者を取得します
             * @returns OK
             */
            $get: (option?: { query?: Methods_j9566n['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_j9566n['get']['resBody'], BasicHeaders, Methods_j9566n['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_j9566n['get']['query'] } | undefined) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          };
        },
        /**
         * チーム担当者一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_yy6yu2['get']['query'], config?: T | undefined }) =>
          fetch<Methods_yy6yu2['get']['resBody'], BasicHeaders, Methods_yy6yu2['get']['status']>(prefix, PATH268, GET, option).json(),
        /**
         * チーム担当者一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_yy6yu2['get']['query'], config?: T | undefined }) =>
          fetch<Methods_yy6yu2['get']['resBody'], BasicHeaders, Methods_yy6yu2['get']['status']>(prefix, PATH268, GET, option).json().then(r => r.body),
        /**
         * チーム担当者を追加更新削除します。
         * @returns OK
         */
        put: (option: { body: Methods_yy6yu2['put']['reqBody'], query?: Methods_yy6yu2['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_yy6yu2['put']['resBody'], BasicHeaders, Methods_yy6yu2['put']['status']>(prefix, PATH268, PUT, option).json(),
        /**
         * チーム担当者を追加更新削除します。
         * @returns OK
         */
        $put: (option: { body: Methods_yy6yu2['put']['reqBody'], query?: Methods_yy6yu2['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_yy6yu2['put']['resBody'], BasicHeaders, Methods_yy6yu2['put']['status']>(prefix, PATH268, PUT, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_yy6yu2['get']['query'] } | { method: 'put'; query: Methods_yy6yu2['put']['query'] } | undefined) =>
          `${prefix}${PATH268}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      teams: {
        _team_id: (val2: number) => {
          const prefix2 = `${PATH269}/${val2}`;

          return {
            /**
             * チームを取得します
             * @returns OK
             */
            get: (option?: { query?: Methods_17ee4ap['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_17ee4ap['get']['resBody'], BasicHeaders, Methods_17ee4ap['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * チームを取得します
             * @returns OK
             */
            $get: (option?: { query?: Methods_17ee4ap['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_17ee4ap['get']['resBody'], BasicHeaders, Methods_17ee4ap['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_17ee4ap['get']['query'] } | undefined) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          };
        },
        /**
         * チーム一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_ay0ypn['get']['query'], config?: T | undefined }) =>
          fetch<Methods_ay0ypn['get']['resBody'], BasicHeaders, Methods_ay0ypn['get']['status']>(prefix, PATH269, GET, option).json(),
        /**
         * チーム一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_ay0ypn['get']['query'], config?: T | undefined }) =>
          fetch<Methods_ay0ypn['get']['resBody'], BasicHeaders, Methods_ay0ypn['get']['status']>(prefix, PATH269, GET, option).json().then(r => r.body),
        /**
         * チームを追加更新削除します。
         * @returns OK
         */
        put: (option: { body: Methods_ay0ypn['put']['reqBody'], query?: Methods_ay0ypn['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_ay0ypn['put']['resBody'], BasicHeaders, Methods_ay0ypn['put']['status']>(prefix, PATH269, PUT, option).json(),
        /**
         * チームを追加更新削除します。
         * @returns OK
         */
        $put: (option: { body: Methods_ay0ypn['put']['reqBody'], query?: Methods_ay0ypn['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_ay0ypn['put']['resBody'], BasicHeaders, Methods_ay0ypn['put']['status']>(prefix, PATH269, PUT, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_ay0ypn['get']['query'] } | { method: 'put'; query: Methods_ay0ypn['put']['query'] } | undefined) =>
          `${prefix}${PATH269}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      ttm_rates: {
        /**
         * TTMレート一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_1b7rjia['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1b7rjia['get']['resBody'], BasicHeaders, Methods_1b7rjia['get']['status']>(prefix, PATH270, GET, option).json(),
        /**
         * TTMレート一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_1b7rjia['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1b7rjia['get']['resBody'], BasicHeaders, Methods_1b7rjia['get']['status']>(prefix, PATH270, GET, option).json().then(r => r.body),
        /**
         * TTMレートを追加更新削除します。
         * @returns OK
         */
        put: (option: { body: Methods_1b7rjia['put']['reqBody'], query?: Methods_1b7rjia['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1b7rjia['put']['resBody'], BasicHeaders, Methods_1b7rjia['put']['status']>(prefix, PATH270, PUT, option).json(),
        /**
         * TTMレートを追加更新削除します。
         * @returns OK
         */
        $put: (option: { body: Methods_1b7rjia['put']['reqBody'], query?: Methods_1b7rjia['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1b7rjia['put']['resBody'], BasicHeaders, Methods_1b7rjia['put']['status']>(prefix, PATH270, PUT, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_1b7rjia['get']['query'] } | { method: 'put'; query: Methods_1b7rjia['put']['query'] } | undefined) =>
          `${prefix}${PATH270}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      user_logs: {
        _user_log_id: (val2: number) => {
          const prefix2 = `${PATH271}/${val2}`;

          return {
            output: {
              /**
               * 利用者ログの出力を取得します。HTTPステータスコードも出力結果を反映したものになります。
               * @returns OK
               */
              get: (option?: { config?: T | undefined } | undefined) =>
                fetch<Methods_13tgfop['get']['resBody'], BasicHeaders, Methods_13tgfop['get']['status']>(prefix, `${prefix2}${PATH272}`, GET, option).json(),
              /**
               * 利用者ログの出力を取得します。HTTPステータスコードも出力結果を反映したものになります。
               * @returns OK
               */
              $get: (option?: { config?: T | undefined } | undefined) =>
                fetch<Methods_13tgfop['get']['resBody'], BasicHeaders, Methods_13tgfop['get']['status']>(prefix, `${prefix2}${PATH272}`, GET, option).json().then(r => r.body),
              $path: () => `${prefix}${prefix2}${PATH272}`,
            },
            restart: {
              /**
               * 利用者ログを生成した処理を再度実行します。
               */
              post: (option?: { config?: T | undefined } | undefined) =>
                fetch<void, BasicHeaders, Methods_fbem1r['post']['status']>(prefix, `${prefix2}${PATH273}`, POST, option).send(),
              /**
               * 利用者ログを生成した処理を再度実行します。
               */
              $post: (option?: { config?: T | undefined } | undefined) =>
                fetch<void, BasicHeaders, Methods_fbem1r['post']['status']>(prefix, `${prefix2}${PATH273}`, POST, option).send().then(r => r.body),
              $path: () => `${prefix}${prefix2}${PATH273}`,
            },
            /**
             * 利用者ログを取得します
             * @returns OK
             */
            get: (option?: { query?: Methods_lrzobn['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_lrzobn['get']['resBody'], BasicHeaders, Methods_lrzobn['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * 利用者ログを取得します
             * @returns OK
             */
            $get: (option?: { query?: Methods_lrzobn['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_lrzobn['get']['resBody'], BasicHeaders, Methods_lrzobn['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_lrzobn['get']['query'] } | undefined) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          };
        },
        /**
         * 利用者ログ一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_fsxkjy['get']['query'], config?: T | undefined }) =>
          fetch<Methods_fsxkjy['get']['resBody'], BasicHeaders, Methods_fsxkjy['get']['status']>(prefix, PATH271, GET, option).json(),
        /**
         * 利用者ログ一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_fsxkjy['get']['query'], config?: T | undefined }) =>
          fetch<Methods_fsxkjy['get']['resBody'], BasicHeaders, Methods_fsxkjy['get']['status']>(prefix, PATH271, GET, option).json().then(r => r.body),
        /**
         * 利用者ログを追加更新削除します。
         * @returns OK
         */
        put: (option: { body: Methods_fsxkjy['put']['reqBody'], query?: Methods_fsxkjy['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_fsxkjy['put']['resBody'], BasicHeaders, Methods_fsxkjy['put']['status']>(prefix, PATH271, PUT, option).json(),
        /**
         * 利用者ログを追加更新削除します。
         * @returns OK
         */
        $put: (option: { body: Methods_fsxkjy['put']['reqBody'], query?: Methods_fsxkjy['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_fsxkjy['put']['resBody'], BasicHeaders, Methods_fsxkjy['put']['status']>(prefix, PATH271, PUT, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_fsxkjy['get']['query'] } | { method: 'put'; query: Methods_fsxkjy['put']['query'] } | undefined) =>
          `${prefix}${PATH271}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      users: {
        _user_id: (val2: number) => {
          const prefix2 = `${PATH274}/${val2}`;

          return {
            /**
             * 担当者を取得します
             * @returns OK
             */
            get: (option?: { query?: Methods_8cxs5p['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_8cxs5p['get']['resBody'], BasicHeaders, Methods_8cxs5p['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * 担当者を取得します
             * @returns OK
             */
            $get: (option?: { query?: Methods_8cxs5p['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_8cxs5p['get']['resBody'], BasicHeaders, Methods_8cxs5p['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_8cxs5p['get']['query'] } | undefined) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          };
        },
        /**
         * 担当者一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_80a9vt['get']['query'], config?: T | undefined }) =>
          fetch<Methods_80a9vt['get']['resBody'], BasicHeaders, Methods_80a9vt['get']['status']>(prefix, PATH274, GET, option).json(),
        /**
         * 担当者一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_80a9vt['get']['query'], config?: T | undefined }) =>
          fetch<Methods_80a9vt['get']['resBody'], BasicHeaders, Methods_80a9vt['get']['status']>(prefix, PATH274, GET, option).json().then(r => r.body),
        /**
         * 担当者を更新します。追加削除はできません。
         * @returns OK
         */
        put: (option: { body: Methods_80a9vt['put']['reqBody'], query?: Methods_80a9vt['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_80a9vt['put']['resBody'], BasicHeaders, Methods_80a9vt['put']['status']>(prefix, PATH274, PUT, option).json(),
        /**
         * 担当者を更新します。追加削除はできません。
         * @returns OK
         */
        $put: (option: { body: Methods_80a9vt['put']['reqBody'], query?: Methods_80a9vt['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_80a9vt['put']['resBody'], BasicHeaders, Methods_80a9vt['put']['status']>(prefix, PATH274, PUT, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_80a9vt['get']['query'] } | { method: 'put'; query: Methods_80a9vt['put']['query'] } | undefined) =>
          `${prefix}${PATH274}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      vendor_staffs: {
        bulk: {
          /**
           * 仕入先担当者を一括更新します。ロックの取得を指定した場合、ロックの取得に成功した後、直ちにそのロックは解放されます。
           * @returns OK
           */
          post: (option: { body: Methods_rr90cm['post']['reqBody'], query?: Methods_rr90cm['post']['query'] | undefined, config?: T | undefined }) =>
            fetch<Methods_rr90cm['post']['resBody'], BasicHeaders, Methods_rr90cm['post']['status']>(prefix, PATH275, POST, option, 'FormData').json(),
          /**
           * 仕入先担当者を一括更新します。ロックの取得を指定した場合、ロックの取得に成功した後、直ちにそのロックは解放されます。
           * @returns OK
           */
          $post: (option: { body: Methods_rr90cm['post']['reqBody'], query?: Methods_rr90cm['post']['query'] | undefined, config?: T | undefined }) =>
            fetch<Methods_rr90cm['post']['resBody'], BasicHeaders, Methods_rr90cm['post']['status']>(prefix, PATH275, POST, option, 'FormData').json().then(r => r.body),
          $path: (option?: { method: 'post'; query: Methods_rr90cm['post']['query'] } | undefined) =>
            `${prefix}${PATH275}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
      },
      vendors: {
        _vendor_id: (val2: number) => {
          const prefix2 = `${PATH276}/${val2}`;

          return {
            /**
             * 仕入先を取得します。新たなロックを取得する前に、同一テーブルの同一ロックキー1に対する同一担当者によるロックは解除されます。
             * @returns OK
             */
            get: (option?: { query?: Methods_136xnz7['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_136xnz7['get']['resBody'], BasicHeaders, Methods_136xnz7['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * 仕入先を取得します。新たなロックを取得する前に、同一テーブルの同一ロックキー1に対する同一担当者によるロックは解除されます。
             * @returns OK
             */
            $get: (option?: { query?: Methods_136xnz7['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_136xnz7['get']['resBody'], BasicHeaders, Methods_136xnz7['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_136xnz7['get']['query'] } | undefined) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          };
        },
        bulk_insert: {
          /**
           * 仕入先を一括登録します。
           * @returns OK
           */
          post: (option: { body: Methods_77thft['post']['reqBody'], query?: Methods_77thft['post']['query'] | undefined, config?: T | undefined }) =>
            fetch<Methods_77thft['post']['resBody'], BasicHeaders, Methods_77thft['post']['status']>(prefix, PATH277, POST, option, 'FormData').json(),
          /**
           * 仕入先を一括登録します。
           * @returns OK
           */
          $post: (option: { body: Methods_77thft['post']['reqBody'], query?: Methods_77thft['post']['query'] | undefined, config?: T | undefined }) =>
            fetch<Methods_77thft['post']['resBody'], BasicHeaders, Methods_77thft['post']['status']>(prefix, PATH277, POST, option, 'FormData').json().then(r => r.body),
          $path: (option?: { method: 'post'; query: Methods_77thft['post']['query'] } | undefined) =>
            `${prefix}${PATH277}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
        bulk_update: {
          /**
           * 仕入先を一括更新します。ロックの取得を指定した場合、ロックの取得に成功した後、直ちにそのロックは解放されます。
           * @returns OK
           */
          post: (option: { body: Methods_m55rgt['post']['reqBody'], query?: Methods_m55rgt['post']['query'] | undefined, config?: T | undefined }) =>
            fetch<Methods_m55rgt['post']['resBody'], BasicHeaders, Methods_m55rgt['post']['status']>(prefix, PATH278, POST, option, 'FormData').json(),
          /**
           * 仕入先を一括更新します。ロックの取得を指定した場合、ロックの取得に成功した後、直ちにそのロックは解放されます。
           * @returns OK
           */
          $post: (option: { body: Methods_m55rgt['post']['reqBody'], query?: Methods_m55rgt['post']['query'] | undefined, config?: T | undefined }) =>
            fetch<Methods_m55rgt['post']['resBody'], BasicHeaders, Methods_m55rgt['post']['status']>(prefix, PATH278, POST, option, 'FormData').json().then(r => r.body),
          $path: (option?: { method: 'post'; query: Methods_m55rgt['post']['query'] } | undefined) =>
            `${prefix}${PATH278}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
        /**
         * 仕入先一覧を返します。新たなロックを取得する前に、同一テーブルの同一ロックキー1に対する同一担当者によるロックは解除されます。
         * @returns OK
         */
        get: (option: { query: Methods_iucwhi['get']['query'], config?: T | undefined }) =>
          fetch<Methods_iucwhi['get']['resBody'], BasicHeaders, Methods_iucwhi['get']['status']>(prefix, PATH276, GET, option).json(),
        /**
         * 仕入先一覧を返します。新たなロックを取得する前に、同一テーブルの同一ロックキー1に対する同一担当者によるロックは解除されます。
         * @returns OK
         */
        $get: (option: { query: Methods_iucwhi['get']['query'], config?: T | undefined }) =>
          fetch<Methods_iucwhi['get']['resBody'], BasicHeaders, Methods_iucwhi['get']['status']>(prefix, PATH276, GET, option).json().then(r => r.body),
        /**
         * 仕入先を追加更新削除します。
         * @returns OK
         */
        put: (option: { body: Methods_iucwhi['put']['reqBody'], query?: Methods_iucwhi['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_iucwhi['put']['resBody'], BasicHeaders, Methods_iucwhi['put']['status']>(prefix, PATH276, PUT, option).json(),
        /**
         * 仕入先を追加更新削除します。
         * @returns OK
         */
        $put: (option: { body: Methods_iucwhi['put']['reqBody'], query?: Methods_iucwhi['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_iucwhi['put']['resBody'], BasicHeaders, Methods_iucwhi['put']['status']>(prefix, PATH276, PUT, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_iucwhi['get']['query'] } | { method: 'put'; query: Methods_iucwhi['put']['query'] } | undefined) =>
          `${prefix}${PATH276}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      villages: {
        _village_id: (val2: number) => {
          const prefix2 = `${PATH279}/${val2}`;

          return {
            /**
             * 村を取得します
             * @returns OK
             */
            get: (option?: { query?: Methods_1ygxp21['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_1ygxp21['get']['resBody'], BasicHeaders, Methods_1ygxp21['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * 村を取得します
             * @returns OK
             */
            $get: (option?: { query?: Methods_1ygxp21['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_1ygxp21['get']['resBody'], BasicHeaders, Methods_1ygxp21['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_1ygxp21['get']['query'] } | undefined) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          };
        },
        /**
         * 村一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_c6rhui['get']['query'], config?: T | undefined }) =>
          fetch<Methods_c6rhui['get']['resBody'], BasicHeaders, Methods_c6rhui['get']['status']>(prefix, PATH279, GET, option).json(),
        /**
         * 村一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_c6rhui['get']['query'], config?: T | undefined }) =>
          fetch<Methods_c6rhui['get']['resBody'], BasicHeaders, Methods_c6rhui['get']['status']>(prefix, PATH279, GET, option).json().then(r => r.body),
        /**
         * 村を追加更新削除します。
         * @returns OK
         */
        put: (option: { body: Methods_c6rhui['put']['reqBody'], query?: Methods_c6rhui['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_c6rhui['put']['resBody'], BasicHeaders, Methods_c6rhui['put']['status']>(prefix, PATH279, PUT, option).json(),
        /**
         * 村を追加更新削除します。
         * @returns OK
         */
        $put: (option: { body: Methods_c6rhui['put']['reqBody'], query?: Methods_c6rhui['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_c6rhui['put']['resBody'], BasicHeaders, Methods_c6rhui['put']['status']>(prefix, PATH279, PUT, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_c6rhui['get']['query'] } | { method: 'put'; query: Methods_c6rhui['put']['query'] } | undefined) =>
          `${prefix}${PATH279}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      web_sales_orders: {
        import: {
          /**
           * WEB受注データを取り込ます。
           * @returns OK
           */
          post: (option: { body: Methods_1jweeqc['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_1jweeqc['post']['resBody'], BasicHeaders, Methods_1jweeqc['post']['status']>(prefix, PATH280, POST, option).json(),
          /**
           * WEB受注データを取り込ます。
           * @returns OK
           */
          $post: (option: { body: Methods_1jweeqc['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_1jweeqc['post']['resBody'], BasicHeaders, Methods_1jweeqc['post']['status']>(prefix, PATH280, POST, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH280}`,
        },
        import_async: {
          /**
           * WEB受注データを取り込ます。
           * @returns OK
           */
          post: (option: { body: Methods_24yjnv['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_24yjnv['post']['resBody'], BasicHeaders, Methods_24yjnv['post']['status']>(prefix, PATH281, POST, option).json(),
          /**
           * WEB受注データを取り込ます。
           * @returns OK
           */
          $post: (option: { body: Methods_24yjnv['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_24yjnv['post']['resBody'], BasicHeaders, Methods_24yjnv['post']['status']>(prefix, PATH281, POST, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH281}`,
        },
      },
      wine_areas: {
        _wine_area_id: (val2: number) => {
          const prefix2 = `${PATH282}/${val2}`;

          return {
            example_operation: {
              /**
               * 地方のサンプルAPI
               * @returns OK
               */
              post: (option: { body: Methods_1gp26ha['post']['reqBody'], config?: T | undefined }) =>
                fetch<Methods_1gp26ha['post']['resBody'], BasicHeaders, Methods_1gp26ha['post']['status']>(prefix, `${prefix2}${PATH283}`, POST, option).json(),
              /**
               * 地方のサンプルAPI
               * @returns OK
               */
              $post: (option: { body: Methods_1gp26ha['post']['reqBody'], config?: T | undefined }) =>
                fetch<Methods_1gp26ha['post']['resBody'], BasicHeaders, Methods_1gp26ha['post']['status']>(prefix, `${prefix2}${PATH283}`, POST, option).json().then(r => r.body),
              $path: () => `${prefix}${prefix2}${PATH283}`,
            },
            /**
             * 地方を取得します
             * @returns OK
             */
            get: (option?: { query?: Methods_fp6xqt['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_fp6xqt['get']['resBody'], BasicHeaders, Methods_fp6xqt['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * 地方を取得します
             * @returns OK
             */
            $get: (option?: { query?: Methods_fp6xqt['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_fp6xqt['get']['resBody'], BasicHeaders, Methods_fp6xqt['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_fp6xqt['get']['query'] } | undefined) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          };
        },
        /**
         * 地方一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_1jrctgr['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1jrctgr['get']['resBody'], BasicHeaders, Methods_1jrctgr['get']['status']>(prefix, PATH282, GET, option).json(),
        /**
         * 地方一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_1jrctgr['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1jrctgr['get']['resBody'], BasicHeaders, Methods_1jrctgr['get']['status']>(prefix, PATH282, GET, option).json().then(r => r.body),
        /**
         * 地方を追加更新削除します。
         * @returns OK
         */
        put: (option: { body: Methods_1jrctgr['put']['reqBody'], query?: Methods_1jrctgr['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1jrctgr['put']['resBody'], BasicHeaders, Methods_1jrctgr['put']['status']>(prefix, PATH282, PUT, option).json(),
        /**
         * 地方を追加更新削除します。
         * @returns OK
         */
        $put: (option: { body: Methods_1jrctgr['put']['reqBody'], query?: Methods_1jrctgr['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1jrctgr['put']['resBody'], BasicHeaders, Methods_1jrctgr['put']['status']>(prefix, PATH282, PUT, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_1jrctgr['get']['query'] } | { method: 'put'; query: Methods_1jrctgr['put']['query'] } | undefined) =>
          `${prefix}${PATH282}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
    },
    /**
     * システム状態を取得します。
     * @returns OK
     */
    get: (option?: { config?: T | undefined } | undefined) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, '', GET, option).json(),
    /**
     * システム状態を取得します。
     * @returns OK
     */
    $get: (option?: { config?: T | undefined } | undefined) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, '', GET, option).json().then(r => r.body),
    $path: () => `${prefix}`,
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
