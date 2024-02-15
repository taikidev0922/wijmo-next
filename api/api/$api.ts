import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_1odzd75 } from './account_titles';
import type { Methods as Methods_cf1jbi } from './account_titles/_account_title_id@number';
import type { Methods as Methods_k75w67 } from './account_transfer_receipts';
import type { Methods as Methods_12jmjtl } from './account_transfer_receipts/create_deposit';
import type { Methods as Methods_61dv3r } from './account_transfer_receipts/print';
import type { Methods as Methods_gxou74 } from './account_transfer_requests';
import type { Methods as Methods_5srrn9 } from './account_transfer_requests/create';
import type { Methods as Methods_1xwtudn } from './account_transfer_requests/export';
import type { Methods as Methods_60ehp0 } from './account_transfer_requests/show';
import type { Methods as Methods_qe17l3 } from './additional_payments';
import type { Methods as Methods_x515k3 } from './additives';
import type { Methods as Methods_jf8aw8 } from './additives/_additive_id@number';
import type { Methods as Methods_5c51wk } from './areas';
import type { Methods as Methods_1wul3li } from './areas/_area_id@number';
import type { Methods as Methods_d1rs8r } from './arrival_scheduled_stocks';
import type { Methods as Methods_c37vfz } from './assistants';
import type { Methods as Methods_gybmqu } from './assistants/_assistant_id@number';
import type { Methods as Methods_163xhtc } from './auth';
import type { Methods as Methods_19l45fu } from './auth/login';
import type { Methods as Methods_85qyf7 } from './auth/logout';
import type { Methods as Methods_1hg9xjr } from './balance_books';
import type { Methods as Methods_11pfvb } from './balance_books/_invoice_no@string';
import type { Methods as Methods_1thfgub } from './balance_books/print_invoice';
import type { Methods as Methods_zg99j5 } from './bank_accounts';
import type { Methods as Methods_fmxj6w } from './bank_accounts/_bank_account_id@number';
import type { Methods as Methods_14wsgau } from './bank_transfer_receipts';
import type { Methods as Methods_1xzer16 } from './bank_transfer_receipts/create_deposit';
import type { Methods as Methods_1pe6fas } from './base_locations';
import type { Methods as Methods_2bo3x2 } from './base_locations/_base_location_id@number';
import type { Methods as Methods_1bn0bsk } from './batch_authorities';
import type { Methods as Methods_hjmtdl } from './batch_authorities/_batch_authority_id@number';
import type { Methods as Methods_s8r0wu } from './batch_calendars';
import type { Methods as Methods_pilfh6 } from './batch_calendars/_batch_calendar_id@number';
import type { Methods as Methods_14lqwh4 } from './batch_displays';
import type { Methods as Methods_1w2vkwe } from './batch_displays/_batch_display_id@number';
import type { Methods as Methods_cikjq1 } from './batch_histories';
import type { Methods as Methods_12v7sn7 } from './batch_parameters';
import type { Methods as Methods_12precq } from './batch_parameters/_batch_parameter_id@string';
import type { Methods as Methods_3s0g0z } from './batch_schedules';
import type { Methods as Methods_1qtiy44 } from './batch_schedules/_batch_schedule_id@string';
import type { Methods as Methods_ewnplq } from './batches';
import type { Methods as Methods_h6wikl } from './batches/_batch_id@number';
import type { Methods as Methods_1ehg4zk } from './bill_closings';
import type { Methods as Methods_wnzgoi } from './bill_closings/bulk_async';
import type { Methods as Methods_144g8y2 } from './bill_results';
import type { Methods as Methods_115tepy } from './bill_results/print';
import type { Methods as Methods_3q2wvn } from './bill_total_groups';
import type { Methods as Methods_59uhyg } from './bill_total_groups/_bill_total_group_id@number';
import type { Methods as Methods_1oak6kw } from './bills/print';
import type { Methods as Methods_1355bcv } from './bottle_sizes';
import type { Methods as Methods_6uxyca } from './bottle_sizes/_bottle_size_id@number';
import type { Methods as Methods_1nhtobh } from './calendars';
import type { Methods as Methods_1ctaes8 } from './calendars/_calendar_id@number';
import type { Methods as Methods_1hufusc } from './cash_on_deliveries';
import type { Methods as Methods_zq2nss } from './cash_on_deliveries/create_deposit';
import type { Methods as Methods_1m9wy4y } from './consignees';
import type { Methods as Methods_he73lq } from './consignees/_consignee_id@number';
import type { Methods as Methods_18ysf42 } from './contract_stocks';
import type { Methods as Methods_r4f60q } from './contract_stocks/_contract_stock_id@number';
import type { Methods as Methods_1vqfcuc } from './controls';
import type { Methods as Methods_1xw4eye } from './controls/_control_id@number';
import type { Methods as Methods_1ll3u7e } from './cost_prices/export_cost_price_data';
import type { Methods as Methods_zirfep } from './cost_prices/import_cost_price_data';
import type { Methods as Methods_155si51 } from './cost_subjects';
import type { Methods as Methods_1lwwyrw } from './cost_subjects/_cost_subject_id@number';
import type { Methods as Methods_xehksn } from './costs/bulk_insert';
import type { Methods as Methods_1t5qilt } from './costs/bulk_insert_check_amount';
import type { Methods as Methods_eocu3n } from './costs/bulk_insert_custom';
import type { Methods as Methods_gkal3t } from './country_grading_links';
import type { Methods as Methods_1w0pty0 } from './country_grading_links/_country_grading_link_id@number';
import type { Methods as Methods_1dxbjf0 } from './country_of_origins';
import type { Methods as Methods_18p6e86 } from './country_of_origins/_country_of_origin_id@number';
import type { Methods as Methods_10qqa3k } from './country_place_name_links';
import type { Methods as Methods_flmsvi } from './country_place_name_links/_country_place_name_link_id@number';
import type { Methods as Methods_ssddcd } from './country_village_links';
import type { Methods as Methods_kiyr7o } from './country_village_links/_country_village_link_id@number';
import type { Methods as Methods_17pp3us } from './customer_credits/bulk';
import type { Methods as Methods_1m8n618 } from './customer_group_invents';
import type { Methods as Methods_1e3ht5y } from './customer_group_invents/_customer_group_invent_id@number';
import type { Methods as Methods_1ea72i7 } from './customer_groups';
import type { Methods as Methods_x5pf5o } from './customer_groups/_customer_group_id@number';
import type { Methods as Methods_b886wg } from './customer_invents';
import type { Methods as Methods_1un37om } from './customer_invents/_customer_invent_id@number';
import type { Methods as Methods_sb0qw2 } from './customer_sales/bulk';
import type { Methods as Methods_1um468t } from './customer_staffs/bulk';
import type { Methods as Methods_1hcjyrv } from './customers';
import type { Methods as Methods_wn45gk } from './customers/_customer_id@number';
import type { Methods as Methods_1hqols0 } from './customers/_customer_id@number/inquire_haisou';
import type { Methods as Methods_14n0y8o } from './customers/bulk_insert';
import type { Methods as Methods_xaa278 } from './customers/bulk_update';
import type { Methods as Methods_our6ai } from './customers/next_idm';
import type { Methods as Methods_qh5flr } from './customs_duties';
import type { Methods as Methods_1skxqd } from './customs_duties/_customs_duty_id@number';
import type { Methods as Methods_1j2uy15 } from './deposit_results';
import type { Methods as Methods_sr80it } from './deposit_results/execute_clearing';
import type { Methods as Methods_1vc9xzr } from './deposit_results/schedule';
import type { Methods as Methods_rrzch5 } from './deposit_schedules';
import type { Methods as Methods_qziqhv } from './deposit_schedules/diff_customers';
import type { Methods as Methods_m8ghhl } from './deposit_schedules/make_zero_schedule';
import type { Methods as Methods_1p07pvd } from './domestic_order_prices/bulk_delete';
import type { Methods as Methods_128cola } from './domestic_orders';
import type { Methods as Methods_1twa6um } from './domestic_orders/_domestic_order_id@number';
import type { Methods as Methods_1domdcn } from './domestic_orders/print_purchase_order';
import type { Methods as Methods_1vzc24u } from './email_templates';
import type { Methods as Methods_1sqbvae } from './email_templates/_email_template_id@number';
import type { Methods as Methods_1776cx3 } from './exchange_contracts';
import type { Methods as Methods_1kl9go2 } from './exchange_contracts/_exchange_contract_id@number';
import type { Methods as Methods_eef3yk } from './export_orders';
import type { Methods as Methods_1823izy } from './export_orders/_invoice_no@string';
import type { Methods as Methods_1jodqu0 } from './export_orders/export_invent';
import type { Methods as Methods_uq0g28 } from './fare_patterns';
import type { Methods as Methods_sk2rry } from './fare_patterns/_fare_pattern_id@number';
import type { Methods as Methods_19v0g2l } from './files';
import type { Methods as Methods_1at9l18 } from './foreign_currency_balances';
import type { Methods as Methods_y90soy } from './foreign_currency_management';
import type { Methods as Methods_1cau0fp } from './foreign_currency_management/balance';
import type { Methods as Methods_ahiabb } from './foreign_currency_purchases';
import type { Methods as Methods_hp6awp } from './foreign_currency_purchases/_foreign_currency_purchase_id';
import type { Methods as Methods_kv9veh } from './foreign_deposit_receipts';
import type { Methods as Methods_1211dtr } from './foreign_deposit_receipts/create_deposit';
import type { Methods as Methods_lfhonh } from './forwarder_costs';
import type { Methods as Methods_17wg1gs } from './forwarder_costs/_forwarder_cost_id@number';
import type { Methods as Methods_89v1pu } from './forwarder_recruits';
import type { Methods as Methods_107m0hq } from './forwarder_recruits/_forwarder_recruit_id@number';
import type { Methods as Methods_g0gb4t } from './free_times';
import type { Methods as Methods_1anmaaq } from './free_times/_free_time_id@number';
import type { Methods as Methods_182fuey } from './freight_names';
import type { Methods as Methods_1ej4ncz } from './generic_searches/_search_id@number';
import type { Methods as Methods_q7gm3j } from './gradings';
import type { Methods as Methods_vhur5i } from './gradings/_grading_id@number';
import type { Methods as Methods_xfhc62 } from './import_costs';
import type { Methods as Methods_lj8le8 } from './import_costs/_no@string';
import type { Methods as Methods_19llun3 } from './import_payments';
import type { Methods as Methods_8we0sx } from './import_payments/detail';
import type { Methods as Methods_f36y0j } from './import_payments/offset';
import type { Methods as Methods_vg5pmf } from './import_payments/output_payment_file';
import type { Methods as Methods_qyhyda } from './import_payments/print_payment_schedule_check_list';
import type { Methods as Methods_1hayn83 } from './import_prices/bulk_delete';
import type { Methods as Methods_13ulb8f } from './invent_arrival_history';
import type { Methods as Methods_1svstlk } from './invent_arrival_history_order';
import type { Methods as Methods_eqqw93 } from './invent_components';
import type { Methods as Methods_1tyliz8 } from './invent_components/_invent_component_id@number';
import type { Methods as Methods_t34gga } from './invent_memos';
import type { Methods as Methods_14avhgq } from './invent_memos/_invent_memo_id@number';
import type { Methods as Methods_gsajym } from './invent_web_cutouts/bulk';
import type { Methods as Methods_1urcjhj } from './inventory_result_details';
import type { Methods as Methods_7jpxgb } from './inventory_results';
import type { Methods as Methods_1r7z938 } from './inventory_results/_inventory_result_id@number';
import type { Methods as Methods_b18j07 } from './inventory_results/export_list';
import type { Methods as Methods_azrjx3 } from './invents';
import type { Methods as Methods_1gs8hxo } from './invents/_invent_id@number';
import type { Methods as Methods_1wrlike } from './invents/_invent_id@number/image';
import type { Methods as Methods_1k42cf0 } from './invents/_invent_id@number/update_domestic_order_price';
import type { Methods as Methods_ufa386 } from './invents/_invent_id@number/update_import_price';
import type { Methods as Methods_1icuu85 } from './invents/_invent_id@number/update_sales_price';
import type { Methods as Methods_182a0fw } from './invents/bulk_insert';
import type { Methods as Methods_r0txs0 } from './invents/bulk_update';
import type { Methods as Methods_q6k77r } from './invents/bulk_update_async';
import type { Methods as Methods_o4qvw9 } from './invents/export_idm';
import type { Methods as Methods_1yw7u8 } from './invents/export_jan';
import type { Methods as Methods_190ifze } from './label_boxes';
import type { Methods as Methods_olhs0t } from './label_boxes/_label_box_id@number';
import type { Methods as Methods_1g4sx3v } from './liquor_tax_names';
import type { Methods as Methods_1urzyk6 } from './liquor_tax_names/_liquor_tax_name_id@number';
import type { Methods as Methods_119pznn } from './liquor_tax_reports/print_liquor_tax';
import type { Methods as Methods_7az87k } from './liquor_taxes';
import type { Methods as Methods_wpjuvl } from './liquor_taxes/_liquor_tax_id@number';
import type { Methods as Methods_8dakku } from './locations';
import type { Methods as Methods_1pmpalm } from './locations/_location_id@number';
import type { Methods as Methods_1qotqia } from './locks';
import type { Methods as Methods_v5qitb } from './locks/unlock';
import type { Methods as Methods_10jw631 } from './locks/unlock_by';
import type { Methods as Methods_1a7q67y } from './maintenance/down';
import type { Methods as Methods_e4oe0b } from './maintenance/up';
import type { Methods as Methods_s4h2cr } from './message_group_user_links';
import type { Methods as Methods_nyo3i6 } from './message_group_user_links/_message_group_user_link_id@number';
import type { Methods as Methods_1699tay } from './message_groups';
import type { Methods as Methods_f0w23m } from './message_groups/_message_group_id@number';
import type { Methods as Methods_5zhn83 } from './monthly_closings/close';
import type { Methods as Methods_1rlbuhk } from './monthly_closings/next';
import type { Methods as Methods_jn7js } from './monthly_cost_prices';
import type { Methods as Methods_1dq3n1o } from './monthly_sales';
import type { Methods as Methods_1ffn96i } from './monthly_sales/arrival_schedule';
import type { Methods as Methods_unbeqk } from './monthly_sales/other_vintage';
import type { Methods as Methods_9a6l9b } from './monthly_sales/print_stockout_vt_change';
import type { Methods as Methods_14g5t06 } from './monthly_transaction_totals';
import type { Methods as Methods_r84xzw } from './monthly_transaction_totals/location';
import type { Methods as Methods_nryjh4 } from './mtx_campaign';
import type { Methods as Methods_1fclfr0 } from './mtx_webifmng_weborder';
import type { Methods as Methods_1hjjgja } from './names';
import type { Methods as Methods_11gzvbm } from './order_makers';
import type { Methods as Methods_1e798di } from './order_makers/_order_maker_id@number';
import type { Methods as Methods_1muwo9o } from './order_notes';
import type { Methods as Methods_1sgtx5i } from './order_notes/_order_note_id@number';
import type { Methods as Methods_1xgpj83 } from './order_warehouses';
import type { Methods as Methods_ytceym } from './order_warehouses/_order_warehouse_id@number';
import type { Methods as Methods_1owvxi3 } from './other_vintage_inquiry';
import type { Methods as Methods_anw1qy } from './page_groups';
import type { Methods as Methods_58wm06 } from './page_groups/_page_group_id@number';
import type { Methods as Methods_1d9cqpr } from './page_lists';
import type { Methods as Methods_ya1r7m } from './page_lists/_page_list_id@number';
import type { Methods as Methods_1jcbhsn } from './page_user_links';
import type { Methods as Methods_5y6xxy } from './pages';
import type { Methods as Methods_o1kh0u } from './pages/_page_id@number';
import type { Methods as Methods_9o4rmx } from './payable_accounts';
import type { Methods as Methods_154scin } from './payment_conditions';
import type { Methods as Methods_1f5koum } from './payment_conditions/_payment_condition_id@number';
import type { Methods as Methods_ykscxr } from './payment_conditions/_payment_condition_id@number/due';
import type { Methods as Methods_ocpsal } from './payment_details';
import type { Methods as Methods_117lnnh } from './payment_results';
import type { Methods as Methods_ox9r18 } from './payment_results/export';
import type { Methods as Methods_no0udh } from './payment_schedules';
import type { Methods as Methods_ay05lk } from './payment_schedules/due_detail';
import type { Methods as Methods_1l44xcv } from './payment_schedules/due_index';
import type { Methods as Methods_w95oof } from './payment_schedules/print_check_list';
import type { Methods as Methods_1qv84t1 } from './payment_schedules_payment_date';
import type { Methods as Methods_ydwih7 } from './payment_schedules_payment_rate';
import type { Methods as Methods_1bx0e4l } from './place_of_origin_names';
import type { Methods as Methods_1mgqvtk } from './place_of_origin_names/_place_of_origin_name_id@number';
import type { Methods as Methods_1n6zxfo } from './price_groups';
import type { Methods as Methods_136t67q } from './price_groups/_price_group_id@number';
import type { Methods as Methods_1ygzbb } from './printers';
import type { Methods as Methods_arijd2 } from './printers/_printer_id@number';
import type { Methods as Methods_bu0lk } from './purchase_prices';
import type { Methods as Methods_ltl32u } from './purchase_prices/_purchase_price_id@number';
import type { Methods as Methods_pdc1w5 } from './purchase_prices/_purchase_price_id@number/re_calculate';
import type { Methods as Methods_sfex1v } from './purchase_prices/export';
import type { Methods as Methods_11rxog8 } from './purchase_prices/export_gross_margins';
import type { Methods as Methods_1ukyzzp } from './purchase_prices/update_costs';
import type { Methods as Methods_1l1ykwt } from './purchase_reservations';
import type { Methods as Methods_1bj7oj8 } from './purchase_reservations/_purchase_reservation_id@number';
import type { Methods as Methods_1bo1btm } from './purchase_reservations/export_arrival_schedule';
import type { Methods as Methods_130fjs8 } from './purchase_reservations/export_schedule';
import type { Methods as Methods_1ls2myo } from './purchase_results';
import type { Methods as Methods_103869i } from './purchase_results/_purchase_result_id@number';
import type { Methods as Methods_1s67nk1 } from './rates';
import type { Methods as Methods_14ma0d3 } from './rates/import';
import type { Methods as Methods_17sj47x } from './receivable_accounts';
import type { Methods as Methods_fs0029 } from './receivable_accounts/print';
import type { Methods as Methods_1uoyobl } from './recent_shipping_histories/with_sales_orders';
import type { Methods as Methods_1a564p } from './reports';
import type { Methods as Methods_hm0cpk } from './reports/_report_id@number';
import type { Methods as Methods_foyqc8 } from './reservation_and_stocks';
import type { Methods as Methods_rjs8sn } from './reservation_and_stocks/domestic_orders';
import type { Methods as Methods_nahfit } from './reservation_and_stocks/latest_arrival_domestic';
import type { Methods as Methods_lxp7hn } from './reservation_and_stocks/latest_arrival_shipping';
import type { Methods as Methods_1uzc7ew } from './reservation_and_stocks/oldest_stock_change';
import type { Methods as Methods_cfs23c } from './reservation_and_stocks/print';
import type { Methods as Methods_1kd6zq5 } from './reservation_and_stocks/shipping_orders';
import type { Methods as Methods_u8jan6 } from './sales_orders';
import type { Methods as Methods_5vrwnq } from './sales_orders/_sales_order_id@number';
import type { Methods as Methods_1b52r4c } from './sales_orders/bulk_async';
import type { Methods as Methods_d9j7z1 } from './sales_orders/bulk_insert';
import type { Methods as Methods_1fgtra2 } from './sales_orders/bulk_insert_async';
import type { Methods as Methods_1w8zs1h } from './sales_orders/export_denpatu';
import type { Methods as Methods_n2br5g } from './sales_orders/fare_summary';
import type { Methods as Methods_11ad2v2 } from './sales_orders/get_invent_related';
import type { Methods as Methods_iupkuk } from './sales_orders/invent_sales';
import type { Methods as Methods_109kte0 } from './sales_orders/invents';
import type { Methods as Methods_yswje } from './sales_orders/print_delivery_guidance';
import type { Methods as Methods_36szey } from './sales_orders/print_delivery_slip';
import type { Methods as Methods_1w9b5yx } from './sales_orders/print_physical_stock_request';
import type { Methods as Methods_ps95lv } from './sales_orders/print_purchase_order';
import type { Methods as Methods_1vi961u } from './sales_orders/print_transfer_request';
import type { Methods as Methods_1hccyu4 } from './sales_prices/bulk_delete';
import type { Methods as Methods_1qbsxf4 } from './sales_reservations';
import type { Methods as Methods_1ehgg3q } from './sales_reservations/_sales_reservation_id@number';
import type { Methods as Methods_1qndiw3 } from './sales_reservations/input_assist';
import type { Methods as Methods_ndog5y } from './sales_stock_details';
import type { Methods as Methods_1bftwi5 } from './sales_stock_details/candidates';
import type { Methods as Methods_pm4n7o } from './sales_stocks';
import type { Methods as Methods_19es3ti } from './sales_stocks/_sales_stock_id@number';
import type { Methods as Methods_d0jse4 } from './sales_stocks/layaway_request_form';
import type { Methods as Methods_1kk25z5 } from './sanctum/csrf-cookie';
import type { Methods as Methods_1cbl1fg } from './seals';
import type { Methods as Methods_k6d41y } from './seals/_seal_id@number';
import type { Methods as Methods_18ii4xr } from './search_details';
import type { Methods as Methods_10x5g36 } from './searches';
import type { Methods as Methods_1a3e3wd } from './searches/_search_id@number';
import type { Methods as Methods_11jnudc } from './ship_companies';
import type { Methods as Methods_fhamih } from './ship_companies/_ship_company_id@number';
import type { Methods as Methods_r33c2i } from './shippable_invents';
import type { Methods as Methods_1clml69 } from './shipping_link/execute';
import type { Methods as Methods_spcdle } from './shipping_link_histories';
import type { Methods as Methods_1pqoob1 } from './shipping_link_histories/_shipping_link_history_id@number';
import type { Methods as Methods_16ja1i9 } from './shipping_order_detail/get_new_invent_vintage';
import type { Methods as Methods_12qeru6 } from './shipping_order_details/bulk_update_check_limit_on';
import type { Methods as Methods_1ekyqgi } from './shipping_order_details/export_check_limit_on';
import type { Methods as Methods_1y4c42w } from './shipping_order_details/labels';
import type { Methods as Methods_1pfbkzq } from './shipping_order_documents';
import type { Methods as Methods_8m041z } from './shipping_order_documents/get_latest_analyzes';
import type { Methods as Methods_17jtd2n } from './shipping_order_labels';
import type { Methods as Methods_1pxbsde } from './shipping_order_schedules';
import type { Methods as Methods_xc2znh } from './shipping_order_schedules/get_free_times';
import type { Methods as Methods_1skas7q } from './shipping_order_schedules/get_imported_on';
import type { Methods as Methods_1v9bnsq } from './shipping_order_schedules/send_check_limit';
import type { Methods as Methods_iefit2 } from './shipping_order_schedules/send_delivery_schedule';
import type { Methods as Methods_yxjtmf } from './shipping_order_schedules/send_shipping_order';
import type { Methods as Methods_o2nq0m } from './shipping_order_schedules/three_week_update';
import type { Methods as Methods_1pbzwsw } from './shipping_order_schedules/weekly';
import type { Methods as Methods_1ju32do } from './shipping_orders';
import type { Methods as Methods_1oi2vkm } from './shipping_orders/_no@string';
import type { Methods as Methods_o3ovrh } from './shipping_orders/_no@string/check';
import type { Methods as Methods_9yme34 } from './shipping_orders/_no@string/check_before_completion';
import type { Methods as Methods_1qfhwmp } from './shipping_orders/advance_payments';
import type { Methods as Methods_15gd2oi } from './shipping_orders/amounts';
import type { Methods as Methods_1ct0ivn } from './shipping_orders/bulk_insert';
import type { Methods as Methods_1p60etd } from './shipping_orders/details';
import type { Methods as Methods_lbxu82 } from './shipping_orders/fares';
import type { Methods as Methods_1egx98m } from './shipping_orders/labels';
import type { Methods as Methods_1vugmfb } from './shipping_orders/labels/export_rbp_label';
import type { Methods as Methods_skuj1j } from './shipping_orders/labels/export_seal';
import type { Methods as Methods_70icv9 } from './shipping_orders/list';
import type { Methods as Methods_15a3h7c } from './shipping_orders/move';
import type { Methods as Methods_4rfopv } from './shipping_orders/print_collection_request';
import type { Methods as Methods_l1e89v } from './shipping_orders/print_order_form/domestic';
import type { Methods as Methods_brucn9 } from './shipping_orders/print_order_form/foreign';
import type { Methods as Methods_1796cyr } from './shipping_reservation_details/_shipping_reservation_detail_id@number/shipping_order_details';
import type { Methods as Methods_1i1uswu } from './shipping_reservations';
import type { Methods as Methods_i1simc } from './shipping_reservations/_no@string';
import type { Methods as Methods_15ynjrl } from './shipping_reservations/bulk_insert';
import type { Methods as Methods_ftkztp } from './shipping_reservations/output_remaining_shipping_reservation';
import type { Methods as Methods_vjtd38 } from './shipping_reservations/print_order_form';
import type { Methods as Methods_jhx7ay } from './shipping_reservations/vendors_with_remaining_shipping_reservation';
import type { Methods as Methods_1m9w28d } from './shipping_reservations_summary';
import type { Methods as Methods_1wklfbc } from './special_prices';
import type { Methods as Methods_tiaxn2 } from './special_prices/_special_price_id@number';
import type { Methods as Methods_1pudpdd } from './special_prices/bulk_upsert';
import type { Methods as Methods_1xskyvj } from './special_prices/calculate';
import type { Methods as Methods_1l2yu3v } from './stock_adjustments';
import type { Methods as Methods_bht36o } from './stock_adjustments/_stock_adjustment_id@number';
import type { Methods as Methods_diqou6 } from './stock_changes';
import type { Methods as Methods_154wzdu } from './stock_changes/_stock_change_id@number';
import type { Methods as Methods_625gk7 } from './stock_changes/_stock_change_id@number/request_invent_insert';
import type { Methods as Methods_15gu87w } from './stock_changes/_stock_change_id@number/request_sales_reservation_stocks_insert';
import type { Methods as Methods_ffhilq } from './stock_changes/print_stock_change_request';
import type { Methods as Methods_upgol8 } from './stock_transactions';
import type { Methods as Methods_1vp19cb } from './stock_transfers';
import type { Methods as Methods_1e3xlfk } from './stock_transfers/_stock_transfer_id@number';
import type { Methods as Methods_1mlbn1d } from './stock_transfers/receive';
import type { Methods as Methods_id4au5 } from './stocks';
import type { Methods as Methods_7y5by6 } from './stocks/_stock_id@number';
import type { Methods as Methods_1urszuq } from './sub_account_titles';
import type { Methods as Methods_bqnuri } from './sub_account_titles/_sub_account_title_id@number';
import type { Methods as Methods_1mq4sc2 } from './tables/_table_id@string';
import type { Methods as Methods_10bmibn } from './tax_payments';
import type { Methods as Methods_2f6m3t } from './team_user_links';
import type { Methods as Methods_gpj3lk } from './team_user_links/_team_user_link_id@number';
import type { Methods as Methods_1klvb2w } from './teams';
import type { Methods as Methods_1k36fem } from './teams/_team_id@number';
import type { Methods as Methods_1vj5rod } from './ttm_rates';
import type { Methods as Methods_1b7kctp } from './user_logs';
import type { Methods as Methods_vgxy8w } from './user_logs/_user_log_id@number';
import type { Methods as Methods_qcxp7w } from './user_logs/_user_log_id@number/output';
import type { Methods as Methods_1c8qk8k } from './user_logs/_user_log_id@number/restart';
import type { Methods as Methods_1xhiioa } from './users';
import type { Methods as Methods_8ls8pm } from './users/_user_id@number';
import type { Methods as Methods_1409xf } from './vendor_staffs/bulk';
import type { Methods as Methods_ermpuh } from './vendors';
import type { Methods as Methods_1d5w75o } from './vendors/_vendor_id@number';
import type { Methods as Methods_xqb2m2 } from './vendors/bulk_insert';
import type { Methods as Methods_xqyj0q } from './vendors/bulk_update';
import type { Methods as Methods_1vtg1k7 } from './villages';
import type { Methods as Methods_1exroyi } from './villages/_village_id@number';
import type { Methods as Methods_ace4nf } from './web_sales_orders/import';
import type { Methods as Methods_1dasfuo } from './web_sales_orders/import_async';
import type { Methods as Methods_mi8m5m } from './wine_areas';
import type { Methods as Methods_7hxhrq } from './wine_areas/_wine_area_id@number';
import type { Methods as Methods_13sqot1 } from './wine_areas/_wine_area_id@number/example_operation';

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
    account_titles: {
      _account_title_id: (val1: number) => {
        const prefix1 = `${PATH0}/${val1}`;

        return {
          /**
           * 勘定科目を取得します
           * @returns OK
           */
          get: (option?: { query?: Methods_cf1jbi['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_cf1jbi['get']['resBody'], BasicHeaders, Methods_cf1jbi['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * 勘定科目を取得します
           * @returns OK
           */
          $get: (option?: { query?: Methods_cf1jbi['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_cf1jbi['get']['resBody'], BasicHeaders, Methods_cf1jbi['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_cf1jbi['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
      /**
       * 勘定科目一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_1odzd75['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1odzd75['get']['resBody'], BasicHeaders, Methods_1odzd75['get']['status']>(prefix, PATH0, GET, option).json(),
      /**
       * 勘定科目一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_1odzd75['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1odzd75['get']['resBody'], BasicHeaders, Methods_1odzd75['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_1odzd75['get']['query'] } | undefined) =>
        `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    account_transfer_receipts: {
      create_deposit: {
        /**
         * 入荷予定に紐づいて、在庫・仕入計上予定を更新します。更新のみ可能です。
         * @returns OK
         */
        post: (option: { body: Methods_12jmjtl['post']['reqBody'], query?: Methods_12jmjtl['post']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_12jmjtl['post']['resBody'], BasicHeaders, Methods_12jmjtl['post']['status']>(prefix, PATH2, POST, option).json(),
        /**
         * 入荷予定に紐づいて、在庫・仕入計上予定を更新します。更新のみ可能です。
         * @returns OK
         */
        $post: (option: { body: Methods_12jmjtl['post']['reqBody'], query?: Methods_12jmjtl['post']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_12jmjtl['post']['resBody'], BasicHeaders, Methods_12jmjtl['post']['status']>(prefix, PATH2, POST, option).json().then(r => r.body),
        $path: (option?: { method: 'post'; query: Methods_12jmjtl['post']['query'] } | undefined) =>
          `${prefix}${PATH2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      print: {
        /**
         * 口座振替不能一覧データを出力します
         */
        post: (option: { body: Methods_61dv3r['post']['reqBody'], query?: Methods_61dv3r['post']['query'] | undefined, config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_61dv3r['post']['status']>(prefix, PATH3, POST, option).send(),
        /**
         * 口座振替不能一覧データを出力します
         */
        $post: (option: { body: Methods_61dv3r['post']['reqBody'], query?: Methods_61dv3r['post']['query'] | undefined, config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_61dv3r['post']['status']>(prefix, PATH3, POST, option).send().then(r => r.body),
        $path: (option?: { method: 'post'; query: Methods_61dv3r['post']['query'] } | undefined) =>
          `${prefix}${PATH3}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      /**
       * 口座振替結果データを取り込みます
       * @returns OK
       */
      post: (option: { body: Methods_k75w67['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_k75w67['post']['resBody'], BasicHeaders, Methods_k75w67['post']['status']>(prefix, PATH1, POST, option, 'FormData').json(),
      /**
       * 口座振替結果データを取り込みます
       * @returns OK
       */
      $post: (option: { body: Methods_k75w67['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_k75w67['post']['resBody'], BasicHeaders, Methods_k75w67['post']['status']>(prefix, PATH1, POST, option, 'FormData').json().then(r => r.body),
      /**
       * 口座振替データ受信一覧データを取得します
       * @returns OK
       */
      get: (option: { query: Methods_k75w67['get']['query'], config?: T | undefined }) =>
        fetch<Methods_k75w67['get']['resBody'], BasicHeaders, Methods_k75w67['get']['status']>(prefix, PATH1, GET, option).json(),
      /**
       * 口座振替データ受信一覧データを取得します
       * @returns OK
       */
      $get: (option: { query: Methods_k75w67['get']['query'], config?: T | undefined }) =>
        fetch<Methods_k75w67['get']['resBody'], BasicHeaders, Methods_k75w67['get']['status']>(prefix, PATH1, GET, option).json().then(r => r.body),
      /**
       * 口座振替データ受信を削除します。
       * @returns OK
       */
      put: (option: { body: Methods_k75w67['put']['reqBody'], query?: Methods_k75w67['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_k75w67['put']['resBody'], BasicHeaders, Methods_k75w67['put']['status']>(prefix, PATH1, PUT, option).json(),
      /**
       * 口座振替データ受信を削除します。
       * @returns OK
       */
      $put: (option: { body: Methods_k75w67['put']['reqBody'], query?: Methods_k75w67['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_k75w67['put']['resBody'], BasicHeaders, Methods_k75w67['put']['status']>(prefix, PATH1, PUT, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_k75w67['get']['query'] } | { method: 'put'; query: Methods_k75w67['put']['query'] } | undefined) =>
        `${prefix}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    account_transfer_requests: {
      create: {
        /**
         * 口座振替依頼データを作成します。
         */
        post: (option: { body: Methods_5srrn9['post']['reqBody'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_5srrn9['post']['status']>(prefix, PATH5, POST, option).send(),
        /**
         * 口座振替依頼データを作成します。
         */
        $post: (option: { body: Methods_5srrn9['post']['reqBody'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_5srrn9['post']['status']>(prefix, PATH5, POST, option).send().then(r => r.body),
        $path: () => `${prefix}${PATH5}`,
      },
      export: {
        /**
         * 口座振替依頼データを出力します。
         */
        post: (option: { body: Methods_1xwtudn['post']['reqBody'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_1xwtudn['post']['status']>(prefix, PATH6, POST, option).send(),
        /**
         * 口座振替依頼データを出力します。
         */
        $post: (option: { body: Methods_1xwtudn['post']['reqBody'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_1xwtudn['post']['status']>(prefix, PATH6, POST, option).send().then(r => r.body),
        $path: () => `${prefix}${PATH6}`,
      },
      show: {
        /**
         * 口座振替データ一覧を取得します
         * @returns OK
         */
        get: (option: { query: Methods_60ehp0['get']['query'], config?: T | undefined }) =>
          fetch<Methods_60ehp0['get']['resBody'], BasicHeaders, Methods_60ehp0['get']['status']>(prefix, PATH7, GET, option).json(),
        /**
         * 口座振替データ一覧を取得します
         * @returns OK
         */
        $get: (option: { query: Methods_60ehp0['get']['query'], config?: T | undefined }) =>
          fetch<Methods_60ehp0['get']['resBody'], BasicHeaders, Methods_60ehp0['get']['status']>(prefix, PATH7, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_60ehp0['get']['query'] } | undefined) =>
          `${prefix}${PATH7}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      /**
       * 口座振替依頼一覧データを取得します
       * @returns OK
       */
      get: (option: { query: Methods_gxou74['get']['query'], config?: T | undefined }) =>
        fetch<Methods_gxou74['get']['resBody'], BasicHeaders, Methods_gxou74['get']['status']>(prefix, PATH4, GET, option).json(),
      /**
       * 口座振替依頼一覧データを取得します
       * @returns OK
       */
      $get: (option: { query: Methods_gxou74['get']['query'], config?: T | undefined }) =>
        fetch<Methods_gxou74['get']['resBody'], BasicHeaders, Methods_gxou74['get']['status']>(prefix, PATH4, GET, option).json().then(r => r.body),
      /**
       * 口座振替依頼を追加更新削除します。
       * @returns OK
       */
      put: (option: { body: Methods_gxou74['put']['reqBody'], query?: Methods_gxou74['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_gxou74['put']['resBody'], BasicHeaders, Methods_gxou74['put']['status']>(prefix, PATH4, PUT, option).json(),
      /**
       * 口座振替依頼を追加更新削除します。
       * @returns OK
       */
      $put: (option: { body: Methods_gxou74['put']['reqBody'], query?: Methods_gxou74['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_gxou74['put']['resBody'], BasicHeaders, Methods_gxou74['put']['status']>(prefix, PATH4, PUT, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_gxou74['get']['query'] } | { method: 'put'; query: Methods_gxou74['put']['query'] } | undefined) =>
        `${prefix}${PATH4}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    additional_payments: {
      /**
       * 国内支払追加支払内訳一覧を返します
       * @returns OK
       */
      get: (option?: { query?: Methods_qe17l3['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_qe17l3['get']['resBody'], BasicHeaders, Methods_qe17l3['get']['status']>(prefix, PATH8, GET, option).json(),
      /**
       * 国内支払追加支払内訳一覧を返します
       * @returns OK
       */
      $get: (option?: { query?: Methods_qe17l3['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_qe17l3['get']['resBody'], BasicHeaders, Methods_qe17l3['get']['status']>(prefix, PATH8, GET, option).json().then(r => r.body),
      /**
       * 国内支払追加支払内訳を追加更新削除します。
       * @returns OK
       */
      put: (option: { body: Methods_qe17l3['put']['reqBody'], query?: Methods_qe17l3['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_qe17l3['put']['resBody'], BasicHeaders, Methods_qe17l3['put']['status']>(prefix, PATH8, PUT, option).json(),
      /**
       * 国内支払追加支払内訳を追加更新削除します。
       * @returns OK
       */
      $put: (option: { body: Methods_qe17l3['put']['reqBody'], query?: Methods_qe17l3['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_qe17l3['put']['resBody'], BasicHeaders, Methods_qe17l3['put']['status']>(prefix, PATH8, PUT, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_qe17l3['get']['query'] } | { method: 'put'; query: Methods_qe17l3['put']['query'] } | undefined) =>
        `${prefix}${PATH8}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    additives: {
      _additive_id: (val1: number) => {
        const prefix1 = `${PATH9}/${val1}`;

        return {
          /**
           * 添加物を取得します
           * @returns OK
           */
          get: (option?: { query?: Methods_jf8aw8['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_jf8aw8['get']['resBody'], BasicHeaders, Methods_jf8aw8['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * 添加物を取得します
           * @returns OK
           */
          $get: (option?: { query?: Methods_jf8aw8['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_jf8aw8['get']['resBody'], BasicHeaders, Methods_jf8aw8['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_jf8aw8['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
      /**
       * 添加物一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_x515k3['get']['query'], config?: T | undefined }) =>
        fetch<Methods_x515k3['get']['resBody'], BasicHeaders, Methods_x515k3['get']['status']>(prefix, PATH9, GET, option).json(),
      /**
       * 添加物一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_x515k3['get']['query'], config?: T | undefined }) =>
        fetch<Methods_x515k3['get']['resBody'], BasicHeaders, Methods_x515k3['get']['status']>(prefix, PATH9, GET, option).json().then(r => r.body),
      /**
       * 添加物を追加更新削除します。
       * @returns OK
       */
      put: (option: { body: Methods_x515k3['put']['reqBody'], query?: Methods_x515k3['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_x515k3['put']['resBody'], BasicHeaders, Methods_x515k3['put']['status']>(prefix, PATH9, PUT, option).json(),
      /**
       * 添加物を追加更新削除します。
       * @returns OK
       */
      $put: (option: { body: Methods_x515k3['put']['reqBody'], query?: Methods_x515k3['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_x515k3['put']['resBody'], BasicHeaders, Methods_x515k3['put']['status']>(prefix, PATH9, PUT, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_x515k3['get']['query'] } | { method: 'put'; query: Methods_x515k3['put']['query'] } | undefined) =>
        `${prefix}${PATH9}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    areas: {
      _area_id: (val1: number) => {
        const prefix1 = `${PATH10}/${val1}`;

        return {
          /**
           * 地区を取得します
           * @returns OK
           */
          get: (option?: { query?: Methods_1wul3li['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1wul3li['get']['resBody'], BasicHeaders, Methods_1wul3li['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * 地区を取得します
           * @returns OK
           */
          $get: (option?: { query?: Methods_1wul3li['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1wul3li['get']['resBody'], BasicHeaders, Methods_1wul3li['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_1wul3li['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
      /**
       * 地区一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_5c51wk['get']['query'], config?: T | undefined }) =>
        fetch<Methods_5c51wk['get']['resBody'], BasicHeaders, Methods_5c51wk['get']['status']>(prefix, PATH10, GET, option).json(),
      /**
       * 地区一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_5c51wk['get']['query'], config?: T | undefined }) =>
        fetch<Methods_5c51wk['get']['resBody'], BasicHeaders, Methods_5c51wk['get']['status']>(prefix, PATH10, GET, option).json().then(r => r.body),
      /**
       * 地区を追加更新削除します。
       * @returns OK
       */
      put: (option: { body: Methods_5c51wk['put']['reqBody'], query?: Methods_5c51wk['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_5c51wk['put']['resBody'], BasicHeaders, Methods_5c51wk['put']['status']>(prefix, PATH10, PUT, option).json(),
      /**
       * 地区を追加更新削除します。
       * @returns OK
       */
      $put: (option: { body: Methods_5c51wk['put']['reqBody'], query?: Methods_5c51wk['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_5c51wk['put']['resBody'], BasicHeaders, Methods_5c51wk['put']['status']>(prefix, PATH10, PUT, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_5c51wk['get']['query'] } | { method: 'put'; query: Methods_5c51wk['put']['query'] } | undefined) =>
        `${prefix}${PATH10}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    arrival_scheduled_stocks: {
      /**
       * 入荷予定一覧データを取得します
       * @returns OK
       */
      get: (option?: { query?: Methods_d1rs8r['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_d1rs8r['get']['resBody'], BasicHeaders, Methods_d1rs8r['get']['status']>(prefix, PATH11, GET, option).json(),
      /**
       * 入荷予定一覧データを取得します
       * @returns OK
       */
      $get: (option?: { query?: Methods_d1rs8r['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_d1rs8r['get']['resBody'], BasicHeaders, Methods_d1rs8r['get']['status']>(prefix, PATH11, GET, option).json().then(r => r.body),
      /**
       * 入荷予定に紐づいて、在庫・仕入計上予定を更新します。更新のみ可能です。
       * @returns OK
       */
      put: (option: { body: Methods_d1rs8r['put']['reqBody'], query?: Methods_d1rs8r['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_d1rs8r['put']['resBody'], BasicHeaders, Methods_d1rs8r['put']['status']>(prefix, PATH11, PUT, option).json(),
      /**
       * 入荷予定に紐づいて、在庫・仕入計上予定を更新します。更新のみ可能です。
       * @returns OK
       */
      $put: (option: { body: Methods_d1rs8r['put']['reqBody'], query?: Methods_d1rs8r['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_d1rs8r['put']['resBody'], BasicHeaders, Methods_d1rs8r['put']['status']>(prefix, PATH11, PUT, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_d1rs8r['get']['query'] } | { method: 'put'; query: Methods_d1rs8r['put']['query'] } | undefined) =>
        `${prefix}${PATH11}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    assistants: {
      _assistant_id: (val1: number) => {
        const prefix1 = `${PATH12}/${val1}`;

        return {
          /**
           * 担当アシスタントを取得します
           * @returns OK
           */
          get: (option?: { query?: Methods_gybmqu['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_gybmqu['get']['resBody'], BasicHeaders, Methods_gybmqu['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * 担当アシスタントを取得します
           * @returns OK
           */
          $get: (option?: { query?: Methods_gybmqu['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_gybmqu['get']['resBody'], BasicHeaders, Methods_gybmqu['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_gybmqu['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
      /**
       * 担当アシスタント一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_c37vfz['get']['query'], config?: T | undefined }) =>
        fetch<Methods_c37vfz['get']['resBody'], BasicHeaders, Methods_c37vfz['get']['status']>(prefix, PATH12, GET, option).json(),
      /**
       * 担当アシスタント一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_c37vfz['get']['query'], config?: T | undefined }) =>
        fetch<Methods_c37vfz['get']['resBody'], BasicHeaders, Methods_c37vfz['get']['status']>(prefix, PATH12, GET, option).json().then(r => r.body),
      /**
       * 担当アシスタントを追加更新削除します。
       * @returns OK
       */
      put: (option: { body: Methods_c37vfz['put']['reqBody'], query?: Methods_c37vfz['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_c37vfz['put']['resBody'], BasicHeaders, Methods_c37vfz['put']['status']>(prefix, PATH12, PUT, option).json(),
      /**
       * 担当アシスタントを追加更新削除します。
       * @returns OK
       */
      $put: (option: { body: Methods_c37vfz['put']['reqBody'], query?: Methods_c37vfz['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_c37vfz['put']['resBody'], BasicHeaders, Methods_c37vfz['put']['status']>(prefix, PATH12, PUT, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_c37vfz['get']['query'] } | { method: 'put'; query: Methods_c37vfz['put']['query'] } | undefined) =>
        `${prefix}${PATH12}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    auth: {
      login: {
        /**
         * ログインします。
         */
        post: (option: { body: Methods_19l45fu['post']['reqBody'], config?: T | undefined }) =>
          fetch<void, Methods_19l45fu['post']['resHeaders'], Methods_19l45fu['post']['status']>(prefix, PATH14, POST, option).send(),
        /**
         * ログインします。
         */
        $post: (option: { body: Methods_19l45fu['post']['reqBody'], config?: T | undefined }) =>
          fetch<void, Methods_19l45fu['post']['resHeaders'], Methods_19l45fu['post']['status']>(prefix, PATH14, POST, option).send().then(r => r.body),
        $path: () => `${prefix}${PATH14}`,
      },
      logout: {
        /**
         * ログアウトします。
         */
        post: (option?: { config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods_85qyf7['post']['status']>(prefix, PATH15, POST, option).send(),
        /**
         * ログアウトします。
         */
        $post: (option?: { config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods_85qyf7['post']['status']>(prefix, PATH15, POST, option).send().then(r => r.body),
        $path: () => `${prefix}${PATH15}`,
      },
      /**
       * ユーザー情報を取得します。
       * @returns OK
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_163xhtc['get']['resBody'], BasicHeaders, Methods_163xhtc['get']['status']>(prefix, PATH13, GET, option).json(),
      /**
       * ユーザー情報を取得します。
       * @returns OK
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_163xhtc['get']['resBody'], BasicHeaders, Methods_163xhtc['get']['status']>(prefix, PATH13, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH13}`,
    },
    balance_books: {
      _invoice_no: (val1: string) => {
        const prefix1 = `${PATH16}/${val1}`;

        return {
          /**
           * BalanceBookを取得します
           * @returns OK
           */
          get: (option?: { query?: Methods_11pfvb['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_11pfvb['get']['resBody'], BasicHeaders, Methods_11pfvb['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * BalanceBookを取得します
           * @returns OK
           */
          $get: (option?: { query?: Methods_11pfvb['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_11pfvb['get']['resBody'], BasicHeaders, Methods_11pfvb['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_11pfvb['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
      print_invoice: {
        /**
         * Invoice帳票を出力します。
         * @returns OK
         */
        post: (option: { body: Methods_1thfgub['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_1thfgub['post']['resBody'], BasicHeaders, Methods_1thfgub['post']['status']>(prefix, PATH17, POST, option).json(),
        /**
         * Invoice帳票を出力します。
         * @returns OK
         */
        $post: (option: { body: Methods_1thfgub['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_1thfgub['post']['resBody'], BasicHeaders, Methods_1thfgub['post']['status']>(prefix, PATH17, POST, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH17}`,
      },
      /**
       * BalanceBook一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_1hg9xjr['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1hg9xjr['get']['resBody'], BasicHeaders, Methods_1hg9xjr['get']['status']>(prefix, PATH16, GET, option).json(),
      /**
       * BalanceBook一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_1hg9xjr['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1hg9xjr['get']['resBody'], BasicHeaders, Methods_1hg9xjr['get']['status']>(prefix, PATH16, GET, option).json().then(r => r.body),
      /**
       * BalanceBookを追加更新削除します。
       * @returns OK
       */
      put: (option: { body: Methods_1hg9xjr['put']['reqBody'], query?: Methods_1hg9xjr['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1hg9xjr['put']['resBody'], BasicHeaders, Methods_1hg9xjr['put']['status']>(prefix, PATH16, PUT, option).json(),
      /**
       * BalanceBookを追加更新削除します。
       * @returns OK
       */
      $put: (option: { body: Methods_1hg9xjr['put']['reqBody'], query?: Methods_1hg9xjr['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1hg9xjr['put']['resBody'], BasicHeaders, Methods_1hg9xjr['put']['status']>(prefix, PATH16, PUT, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_1hg9xjr['get']['query'] } | { method: 'put'; query: Methods_1hg9xjr['put']['query'] } | undefined) =>
        `${prefix}${PATH16}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    bank_accounts: {
      _bank_account_id: (val1: number) => {
        const prefix1 = `${PATH18}/${val1}`;

        return {
          /**
           * 銀行口座を取得します
           * @returns OK
           */
          get: (option?: { query?: Methods_fmxj6w['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_fmxj6w['get']['resBody'], BasicHeaders, Methods_fmxj6w['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * 銀行口座を取得します
           * @returns OK
           */
          $get: (option?: { query?: Methods_fmxj6w['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_fmxj6w['get']['resBody'], BasicHeaders, Methods_fmxj6w['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_fmxj6w['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
      /**
       * 銀行口座一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_zg99j5['get']['query'], config?: T | undefined }) =>
        fetch<Methods_zg99j5['get']['resBody'], BasicHeaders, Methods_zg99j5['get']['status']>(prefix, PATH18, GET, option).json(),
      /**
       * 銀行口座一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_zg99j5['get']['query'], config?: T | undefined }) =>
        fetch<Methods_zg99j5['get']['resBody'], BasicHeaders, Methods_zg99j5['get']['status']>(prefix, PATH18, GET, option).json().then(r => r.body),
      /**
       * 銀行口座を追加更新削除します。
       * @returns OK
       */
      put: (option: { body: Methods_zg99j5['put']['reqBody'], query?: Methods_zg99j5['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_zg99j5['put']['resBody'], BasicHeaders, Methods_zg99j5['put']['status']>(prefix, PATH18, PUT, option).json(),
      /**
       * 銀行口座を追加更新削除します。
       * @returns OK
       */
      $put: (option: { body: Methods_zg99j5['put']['reqBody'], query?: Methods_zg99j5['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_zg99j5['put']['resBody'], BasicHeaders, Methods_zg99j5['put']['status']>(prefix, PATH18, PUT, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_zg99j5['get']['query'] } | { method: 'put'; query: Methods_zg99j5['put']['query'] } | undefined) =>
        `${prefix}${PATH18}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    bank_transfer_receipts: {
      create_deposit: {
        /**
         * 振込データを取り込みます
         * @returns OK
         */
        post: (option: { body: Methods_1xzer16['post']['reqBody'], query?: Methods_1xzer16['post']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1xzer16['post']['resBody'], BasicHeaders, Methods_1xzer16['post']['status']>(prefix, PATH20, POST, option).json(),
        /**
         * 振込データを取り込みます
         * @returns OK
         */
        $post: (option: { body: Methods_1xzer16['post']['reqBody'], query?: Methods_1xzer16['post']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1xzer16['post']['resBody'], BasicHeaders, Methods_1xzer16['post']['status']>(prefix, PATH20, POST, option).json().then(r => r.body),
        $path: (option?: { method: 'post'; query: Methods_1xzer16['post']['query'] } | undefined) =>
          `${prefix}${PATH20}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      /**
       * 振込データ受信一覧データを取得します
       * @returns OK
       */
      get: (option: { query: Methods_14wsgau['get']['query'], config?: T | undefined }) =>
        fetch<Methods_14wsgau['get']['resBody'], BasicHeaders, Methods_14wsgau['get']['status']>(prefix, PATH19, GET, option).json(),
      /**
       * 振込データ受信一覧データを取得します
       * @returns OK
       */
      $get: (option: { query: Methods_14wsgau['get']['query'], config?: T | undefined }) =>
        fetch<Methods_14wsgau['get']['resBody'], BasicHeaders, Methods_14wsgau['get']['status']>(prefix, PATH19, GET, option).json().then(r => r.body),
      /**
       * 振込データを取り込みます
       */
      post: (option: { body: Methods_14wsgau['post']['reqBody'], query?: Methods_14wsgau['post']['query'] | undefined, config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods_14wsgau['post']['status']>(prefix, PATH19, POST, option, 'FormData').send(),
      /**
       * 振込データを取り込みます
       */
      $post: (option: { body: Methods_14wsgau['post']['reqBody'], query?: Methods_14wsgau['post']['query'] | undefined, config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods_14wsgau['post']['status']>(prefix, PATH19, POST, option, 'FormData').send().then(r => r.body),
      /**
       * 振込データを取り込みます
       * @returns OK
       */
      put: (option: { body: Methods_14wsgau['put']['reqBody'], query?: Methods_14wsgau['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_14wsgau['put']['resBody'], BasicHeaders, Methods_14wsgau['put']['status']>(prefix, PATH19, PUT, option).json(),
      /**
       * 振込データを取り込みます
       * @returns OK
       */
      $put: (option: { body: Methods_14wsgau['put']['reqBody'], query?: Methods_14wsgau['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_14wsgau['put']['resBody'], BasicHeaders, Methods_14wsgau['put']['status']>(prefix, PATH19, PUT, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_14wsgau['get']['query'] } | { method: 'post'; query: Methods_14wsgau['post']['query'] } | { method: 'put'; query: Methods_14wsgau['put']['query'] } | undefined) =>
        `${prefix}${PATH19}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    base_locations: {
      _base_location_id: (val1: number) => {
        const prefix1 = `${PATH21}/${val1}`;

        return {
          /**
           * 倉庫拠点を取得します
           * @returns OK
           */
          get: (option?: { query?: Methods_2bo3x2['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_2bo3x2['get']['resBody'], BasicHeaders, Methods_2bo3x2['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * 倉庫拠点を取得します
           * @returns OK
           */
          $get: (option?: { query?: Methods_2bo3x2['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_2bo3x2['get']['resBody'], BasicHeaders, Methods_2bo3x2['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_2bo3x2['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
      /**
       * 倉庫拠点一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_1pe6fas['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1pe6fas['get']['resBody'], BasicHeaders, Methods_1pe6fas['get']['status']>(prefix, PATH21, GET, option).json(),
      /**
       * 倉庫拠点一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_1pe6fas['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1pe6fas['get']['resBody'], BasicHeaders, Methods_1pe6fas['get']['status']>(prefix, PATH21, GET, option).json().then(r => r.body),
      /**
       * 倉庫拠点を追加更新削除します。
       * @returns OK
       */
      put: (option: { body: Methods_1pe6fas['put']['reqBody'], query?: Methods_1pe6fas['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1pe6fas['put']['resBody'], BasicHeaders, Methods_1pe6fas['put']['status']>(prefix, PATH21, PUT, option).json(),
      /**
       * 倉庫拠点を追加更新削除します。
       * @returns OK
       */
      $put: (option: { body: Methods_1pe6fas['put']['reqBody'], query?: Methods_1pe6fas['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1pe6fas['put']['resBody'], BasicHeaders, Methods_1pe6fas['put']['status']>(prefix, PATH21, PUT, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_1pe6fas['get']['query'] } | { method: 'put'; query: Methods_1pe6fas['put']['query'] } | undefined) =>
        `${prefix}${PATH21}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    batch_authorities: {
      _batch_authority_id: (val1: number) => {
        const prefix1 = `${PATH22}/${val1}`;

        return {
          /**
           * バッチ実行権限を取得します
           * @returns OK
           */
          get: (option?: { query?: Methods_hjmtdl['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_hjmtdl['get']['resBody'], BasicHeaders, Methods_hjmtdl['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * バッチ実行権限を取得します
           * @returns OK
           */
          $get: (option?: { query?: Methods_hjmtdl['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_hjmtdl['get']['resBody'], BasicHeaders, Methods_hjmtdl['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_hjmtdl['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
      /**
       * バッチ実行権限一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_1bn0bsk['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1bn0bsk['get']['resBody'], BasicHeaders, Methods_1bn0bsk['get']['status']>(prefix, PATH22, GET, option).json(),
      /**
       * バッチ実行権限一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_1bn0bsk['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1bn0bsk['get']['resBody'], BasicHeaders, Methods_1bn0bsk['get']['status']>(prefix, PATH22, GET, option).json().then(r => r.body),
      /**
       * バッチ実行権限を追加更新削除します。
       * @returns OK
       */
      put: (option: { body: Methods_1bn0bsk['put']['reqBody'], query?: Methods_1bn0bsk['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1bn0bsk['put']['resBody'], BasicHeaders, Methods_1bn0bsk['put']['status']>(prefix, PATH22, PUT, option).json(),
      /**
       * バッチ実行権限を追加更新削除します。
       * @returns OK
       */
      $put: (option: { body: Methods_1bn0bsk['put']['reqBody'], query?: Methods_1bn0bsk['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1bn0bsk['put']['resBody'], BasicHeaders, Methods_1bn0bsk['put']['status']>(prefix, PATH22, PUT, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_1bn0bsk['get']['query'] } | { method: 'put'; query: Methods_1bn0bsk['put']['query'] } | undefined) =>
        `${prefix}${PATH22}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    batch_calendars: {
      _batch_calendar_id: (val1: number) => {
        const prefix1 = `${PATH23}/${val1}`;

        return {
          /**
           * バッチカレンダーを取得します
           * @returns OK
           */
          get: (option?: { query?: Methods_pilfh6['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_pilfh6['get']['resBody'], BasicHeaders, Methods_pilfh6['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * バッチカレンダーを取得します
           * @returns OK
           */
          $get: (option?: { query?: Methods_pilfh6['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_pilfh6['get']['resBody'], BasicHeaders, Methods_pilfh6['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_pilfh6['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
      /**
       * バッチカレンダー一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_s8r0wu['get']['query'], config?: T | undefined }) =>
        fetch<Methods_s8r0wu['get']['resBody'], BasicHeaders, Methods_s8r0wu['get']['status']>(prefix, PATH23, GET, option).json(),
      /**
       * バッチカレンダー一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_s8r0wu['get']['query'], config?: T | undefined }) =>
        fetch<Methods_s8r0wu['get']['resBody'], BasicHeaders, Methods_s8r0wu['get']['status']>(prefix, PATH23, GET, option).json().then(r => r.body),
      /**
       * バッチカレンダーを追加更新削除します。
       * @returns OK
       */
      put: (option: { body: Methods_s8r0wu['put']['reqBody'], query?: Methods_s8r0wu['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_s8r0wu['put']['resBody'], BasicHeaders, Methods_s8r0wu['put']['status']>(prefix, PATH23, PUT, option).json(),
      /**
       * バッチカレンダーを追加更新削除します。
       * @returns OK
       */
      $put: (option: { body: Methods_s8r0wu['put']['reqBody'], query?: Methods_s8r0wu['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_s8r0wu['put']['resBody'], BasicHeaders, Methods_s8r0wu['put']['status']>(prefix, PATH23, PUT, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_s8r0wu['get']['query'] } | { method: 'put'; query: Methods_s8r0wu['put']['query'] } | undefined) =>
        `${prefix}${PATH23}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    batch_displays: {
      _batch_display_id: (val1: number) => {
        const prefix1 = `${PATH24}/${val1}`;

        return {
          /**
           * 一括表示仕様を取得します
           * @returns OK
           */
          get: (option?: { query?: Methods_1w2vkwe['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1w2vkwe['get']['resBody'], BasicHeaders, Methods_1w2vkwe['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * 一括表示仕様を取得します
           * @returns OK
           */
          $get: (option?: { query?: Methods_1w2vkwe['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1w2vkwe['get']['resBody'], BasicHeaders, Methods_1w2vkwe['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_1w2vkwe['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
      /**
       * 一括表示仕様一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_14lqwh4['get']['query'], config?: T | undefined }) =>
        fetch<Methods_14lqwh4['get']['resBody'], BasicHeaders, Methods_14lqwh4['get']['status']>(prefix, PATH24, GET, option).json(),
      /**
       * 一括表示仕様一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_14lqwh4['get']['query'], config?: T | undefined }) =>
        fetch<Methods_14lqwh4['get']['resBody'], BasicHeaders, Methods_14lqwh4['get']['status']>(prefix, PATH24, GET, option).json().then(r => r.body),
      /**
       * 一括表示仕様を追加更新削除します。
       * @returns OK
       */
      put: (option: { body: Methods_14lqwh4['put']['reqBody'], query?: Methods_14lqwh4['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_14lqwh4['put']['resBody'], BasicHeaders, Methods_14lqwh4['put']['status']>(prefix, PATH24, PUT, option).json(),
      /**
       * 一括表示仕様を追加更新削除します。
       * @returns OK
       */
      $put: (option: { body: Methods_14lqwh4['put']['reqBody'], query?: Methods_14lqwh4['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_14lqwh4['put']['resBody'], BasicHeaders, Methods_14lqwh4['put']['status']>(prefix, PATH24, PUT, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_14lqwh4['get']['query'] } | { method: 'put'; query: Methods_14lqwh4['put']['query'] } | undefined) =>
        `${prefix}${PATH24}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    batch_histories: {
      /**
       * バッチ履歴一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_cikjq1['get']['query'], config?: T | undefined }) =>
        fetch<Methods_cikjq1['get']['resBody'], BasicHeaders, Methods_cikjq1['get']['status']>(prefix, PATH25, GET, option).json(),
      /**
       * バッチ履歴一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_cikjq1['get']['query'], config?: T | undefined }) =>
        fetch<Methods_cikjq1['get']['resBody'], BasicHeaders, Methods_cikjq1['get']['status']>(prefix, PATH25, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_cikjq1['get']['query'] } | undefined) =>
        `${prefix}${PATH25}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    batch_parameters: {
      _batch_parameter_id: (val1: string) => {
        const prefix1 = `${PATH26}/${val1}`;

        return {
          /**
           * バッチパラメータを取得します
           * @returns OK
           */
          get: (option?: { query?: Methods_12precq['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_12precq['get']['resBody'], BasicHeaders, Methods_12precq['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * バッチパラメータを取得します
           * @returns OK
           */
          $get: (option?: { query?: Methods_12precq['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_12precq['get']['resBody'], BasicHeaders, Methods_12precq['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          /**
           * バッチを実行します
           * @returns OK
           */
          post: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_12precq['post']['resBody'], BasicHeaders, Methods_12precq['post']['status']>(prefix, prefix1, POST, option).json(),
          /**
           * バッチを実行します
           * @returns OK
           */
          $post: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_12precq['post']['resBody'], BasicHeaders, Methods_12precq['post']['status']>(prefix, prefix1, POST, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_12precq['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
      /**
       * バッチパラメータ一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_12v7sn7['get']['query'], config?: T | undefined }) =>
        fetch<Methods_12v7sn7['get']['resBody'], BasicHeaders, Methods_12v7sn7['get']['status']>(prefix, PATH26, GET, option).json(),
      /**
       * バッチパラメータ一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_12v7sn7['get']['query'], config?: T | undefined }) =>
        fetch<Methods_12v7sn7['get']['resBody'], BasicHeaders, Methods_12v7sn7['get']['status']>(prefix, PATH26, GET, option).json().then(r => r.body),
      /**
       * バッチパラメータを追加更新削除します。
       * @returns OK
       */
      put: (option: { body: Methods_12v7sn7['put']['reqBody'], query?: Methods_12v7sn7['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_12v7sn7['put']['resBody'], BasicHeaders, Methods_12v7sn7['put']['status']>(prefix, PATH26, PUT, option).json(),
      /**
       * バッチパラメータを追加更新削除します。
       * @returns OK
       */
      $put: (option: { body: Methods_12v7sn7['put']['reqBody'], query?: Methods_12v7sn7['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_12v7sn7['put']['resBody'], BasicHeaders, Methods_12v7sn7['put']['status']>(prefix, PATH26, PUT, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_12v7sn7['get']['query'] } | { method: 'put'; query: Methods_12v7sn7['put']['query'] } | undefined) =>
        `${prefix}${PATH26}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    batch_schedules: {
      _batch_schedule_id: (val1: string) => {
        const prefix1 = `${PATH27}/${val1}`;

        return {
          /**
           * バッチスケジュールを取得します
           * @returns OK
           */
          get: (option?: { query?: Methods_1qtiy44['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1qtiy44['get']['resBody'], BasicHeaders, Methods_1qtiy44['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * バッチスケジュールを取得します
           * @returns OK
           */
          $get: (option?: { query?: Methods_1qtiy44['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1qtiy44['get']['resBody'], BasicHeaders, Methods_1qtiy44['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_1qtiy44['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
      /**
       * バッチスケジュール一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_3s0g0z['get']['query'], config?: T | undefined }) =>
        fetch<Methods_3s0g0z['get']['resBody'], BasicHeaders, Methods_3s0g0z['get']['status']>(prefix, PATH27, GET, option).json(),
      /**
       * バッチスケジュール一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_3s0g0z['get']['query'], config?: T | undefined }) =>
        fetch<Methods_3s0g0z['get']['resBody'], BasicHeaders, Methods_3s0g0z['get']['status']>(prefix, PATH27, GET, option).json().then(r => r.body),
      /**
       * バッチスケジュールを追加更新削除します。
       * @returns OK
       */
      put: (option: { body: Methods_3s0g0z['put']['reqBody'], query?: Methods_3s0g0z['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_3s0g0z['put']['resBody'], BasicHeaders, Methods_3s0g0z['put']['status']>(prefix, PATH27, PUT, option).json(),
      /**
       * バッチスケジュールを追加更新削除します。
       * @returns OK
       */
      $put: (option: { body: Methods_3s0g0z['put']['reqBody'], query?: Methods_3s0g0z['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_3s0g0z['put']['resBody'], BasicHeaders, Methods_3s0g0z['put']['status']>(prefix, PATH27, PUT, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_3s0g0z['get']['query'] } | { method: 'put'; query: Methods_3s0g0z['put']['query'] } | undefined) =>
        `${prefix}${PATH27}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    batches: {
      _batch_id: (val1: number) => {
        const prefix1 = `${PATH28}/${val1}`;

        return {
          /**
           * バッチを取得します
           * @returns OK
           */
          get: (option?: { query?: Methods_h6wikl['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_h6wikl['get']['resBody'], BasicHeaders, Methods_h6wikl['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * バッチを取得します
           * @returns OK
           */
          $get: (option?: { query?: Methods_h6wikl['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_h6wikl['get']['resBody'], BasicHeaders, Methods_h6wikl['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_h6wikl['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
      /**
       * バッチ一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_ewnplq['get']['query'], config?: T | undefined }) =>
        fetch<Methods_ewnplq['get']['resBody'], BasicHeaders, Methods_ewnplq['get']['status']>(prefix, PATH28, GET, option).json(),
      /**
       * バッチ一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_ewnplq['get']['query'], config?: T | undefined }) =>
        fetch<Methods_ewnplq['get']['resBody'], BasicHeaders, Methods_ewnplq['get']['status']>(prefix, PATH28, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_ewnplq['get']['query'] } | undefined) =>
        `${prefix}${PATH28}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    bill_closings: {
      bulk_async: {
        /**
         * 請求締一覧を一括処理します。応答には user_logs も含まれます。embed はバッチ出力に対する指示になります。
         * @returns OK
         */
        post: (option: { body: Methods_wnzgoi['post']['reqBody'], query?: Methods_wnzgoi['post']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_wnzgoi['post']['resBody'], BasicHeaders, Methods_wnzgoi['post']['status']>(prefix, PATH30, POST, option).json(),
        /**
         * 請求締一覧を一括処理します。応答には user_logs も含まれます。embed はバッチ出力に対する指示になります。
         * @returns OK
         */
        $post: (option: { body: Methods_wnzgoi['post']['reqBody'], query?: Methods_wnzgoi['post']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_wnzgoi['post']['resBody'], BasicHeaders, Methods_wnzgoi['post']['status']>(prefix, PATH30, POST, option).json().then(r => r.body),
        $path: (option?: { method: 'post'; query: Methods_wnzgoi['post']['query'] } | undefined) =>
          `${prefix}${PATH30}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      /**
       * 請求締一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_1ehg4zk['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1ehg4zk['get']['resBody'], BasicHeaders, Methods_1ehg4zk['get']['status']>(prefix, PATH29, GET, option).json(),
      /**
       * 請求締一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_1ehg4zk['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1ehg4zk['get']['resBody'], BasicHeaders, Methods_1ehg4zk['get']['status']>(prefix, PATH29, GET, option).json().then(r => r.body),
      /**
       * 請求締一覧を一括処理します。
       * @returns OK
       */
      put: (option: { body: Methods_1ehg4zk['put']['reqBody'], query?: Methods_1ehg4zk['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1ehg4zk['put']['resBody'], BasicHeaders, Methods_1ehg4zk['put']['status']>(prefix, PATH29, PUT, option).json(),
      /**
       * 請求締一覧を一括処理します。
       * @returns OK
       */
      $put: (option: { body: Methods_1ehg4zk['put']['reqBody'], query?: Methods_1ehg4zk['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1ehg4zk['put']['resBody'], BasicHeaders, Methods_1ehg4zk['put']['status']>(prefix, PATH29, PUT, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_1ehg4zk['get']['query'] } | { method: 'put'; query: Methods_1ehg4zk['put']['query'] } | undefined) =>
        `${prefix}${PATH29}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    bill_results: {
      print: {
        /**
         * 売掛金残高証明書を出力します。
         * @returns OK
         */
        post: (option: { body: Methods_115tepy['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_115tepy['post']['resBody'], BasicHeaders, Methods_115tepy['post']['status']>(prefix, PATH32, POST, option).json(),
        /**
         * 売掛金残高証明書を出力します。
         * @returns OK
         */
        $post: (option: { body: Methods_115tepy['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_115tepy['post']['resBody'], BasicHeaders, Methods_115tepy['post']['status']>(prefix, PATH32, POST, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH32}`,
      },
      /**
       * 請求実績を返します
       * @returns OK
       */
      get: (option: { query: Methods_144g8y2['get']['query'], config?: T | undefined }) =>
        fetch<Methods_144g8y2['get']['resBody'], BasicHeaders, Methods_144g8y2['get']['status']>(prefix, PATH31, GET, option).json(),
      /**
       * 請求実績を返します
       * @returns OK
       */
      $get: (option: { query: Methods_144g8y2['get']['query'], config?: T | undefined }) =>
        fetch<Methods_144g8y2['get']['resBody'], BasicHeaders, Methods_144g8y2['get']['status']>(prefix, PATH31, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_144g8y2['get']['query'] } | undefined) =>
        `${prefix}${PATH31}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    bill_total_groups: {
      _bill_total_group_id: (val1: number) => {
        const prefix1 = `${PATH33}/${val1}`;

        return {
          /**
           * 合計請求書グループを取得します
           * @returns OK
           */
          get: (option?: { query?: Methods_59uhyg['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_59uhyg['get']['resBody'], BasicHeaders, Methods_59uhyg['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * 合計請求書グループを取得します
           * @returns OK
           */
          $get: (option?: { query?: Methods_59uhyg['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_59uhyg['get']['resBody'], BasicHeaders, Methods_59uhyg['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_59uhyg['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
      /**
       * 合計請求書グループ一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_3q2wvn['get']['query'], config?: T | undefined }) =>
        fetch<Methods_3q2wvn['get']['resBody'], BasicHeaders, Methods_3q2wvn['get']['status']>(prefix, PATH33, GET, option).json(),
      /**
       * 合計請求書グループ一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_3q2wvn['get']['query'], config?: T | undefined }) =>
        fetch<Methods_3q2wvn['get']['resBody'], BasicHeaders, Methods_3q2wvn['get']['status']>(prefix, PATH33, GET, option).json().then(r => r.body),
      /**
       * 合計請求書グループを追加更新削除します。
       * @returns OK
       */
      put: (option: { body: Methods_3q2wvn['put']['reqBody'], query?: Methods_3q2wvn['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_3q2wvn['put']['resBody'], BasicHeaders, Methods_3q2wvn['put']['status']>(prefix, PATH33, PUT, option).json(),
      /**
       * 合計請求書グループを追加更新削除します。
       * @returns OK
       */
      $put: (option: { body: Methods_3q2wvn['put']['reqBody'], query?: Methods_3q2wvn['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_3q2wvn['put']['resBody'], BasicHeaders, Methods_3q2wvn['put']['status']>(prefix, PATH33, PUT, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_3q2wvn['get']['query'] } | { method: 'put'; query: Methods_3q2wvn['put']['query'] } | undefined) =>
        `${prefix}${PATH33}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    bills: {
      print: {
        /**
         * 請求書を出力します。
         */
        post: (option: { body: Methods_1oak6kw['post']['reqBody'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_1oak6kw['post']['status']>(prefix, PATH34, POST, option).send(),
        /**
         * 請求書を出力します。
         */
        $post: (option: { body: Methods_1oak6kw['post']['reqBody'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_1oak6kw['post']['status']>(prefix, PATH34, POST, option).send().then(r => r.body),
        $path: () => `${prefix}${PATH34}`,
      },
    },
    bottle_sizes: {
      _bottle_size_id: (val1: number) => {
        const prefix1 = `${PATH35}/${val1}`;

        return {
          /**
           * 容器サイズを取得します
           * @returns OK
           */
          get: (option?: { query?: Methods_6uxyca['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_6uxyca['get']['resBody'], BasicHeaders, Methods_6uxyca['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * 容器サイズを取得します
           * @returns OK
           */
          $get: (option?: { query?: Methods_6uxyca['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_6uxyca['get']['resBody'], BasicHeaders, Methods_6uxyca['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_6uxyca['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
      /**
       * 容器サイズ一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_1355bcv['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1355bcv['get']['resBody'], BasicHeaders, Methods_1355bcv['get']['status']>(prefix, PATH35, GET, option).json(),
      /**
       * 容器サイズ一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_1355bcv['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1355bcv['get']['resBody'], BasicHeaders, Methods_1355bcv['get']['status']>(prefix, PATH35, GET, option).json().then(r => r.body),
      /**
       * 容器サイズを追加更新削除します。
       * @returns OK
       */
      put: (option: { body: Methods_1355bcv['put']['reqBody'], query?: Methods_1355bcv['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1355bcv['put']['resBody'], BasicHeaders, Methods_1355bcv['put']['status']>(prefix, PATH35, PUT, option).json(),
      /**
       * 容器サイズを追加更新削除します。
       * @returns OK
       */
      $put: (option: { body: Methods_1355bcv['put']['reqBody'], query?: Methods_1355bcv['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1355bcv['put']['resBody'], BasicHeaders, Methods_1355bcv['put']['status']>(prefix, PATH35, PUT, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_1355bcv['get']['query'] } | { method: 'put'; query: Methods_1355bcv['put']['query'] } | undefined) =>
        `${prefix}${PATH35}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    calendars: {
      _calendar_id: (val1: number) => {
        const prefix1 = `${PATH36}/${val1}`;

        return {
          /**
           * カレンダーを取得します
           * @returns OK
           */
          get: (option?: { query?: Methods_1ctaes8['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1ctaes8['get']['resBody'], BasicHeaders, Methods_1ctaes8['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * カレンダーを取得します
           * @returns OK
           */
          $get: (option?: { query?: Methods_1ctaes8['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1ctaes8['get']['resBody'], BasicHeaders, Methods_1ctaes8['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_1ctaes8['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
      /**
       * カレンダー一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_1nhtobh['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1nhtobh['get']['resBody'], BasicHeaders, Methods_1nhtobh['get']['status']>(prefix, PATH36, GET, option).json(),
      /**
       * カレンダー一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_1nhtobh['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1nhtobh['get']['resBody'], BasicHeaders, Methods_1nhtobh['get']['status']>(prefix, PATH36, GET, option).json().then(r => r.body),
      /**
       * カレンダーを追加更新削除します。
       * @returns OK
       */
      put: (option: { body: Methods_1nhtobh['put']['reqBody'], query?: Methods_1nhtobh['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1nhtobh['put']['resBody'], BasicHeaders, Methods_1nhtobh['put']['status']>(prefix, PATH36, PUT, option).json(),
      /**
       * カレンダーを追加更新削除します。
       * @returns OK
       */
      $put: (option: { body: Methods_1nhtobh['put']['reqBody'], query?: Methods_1nhtobh['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1nhtobh['put']['resBody'], BasicHeaders, Methods_1nhtobh['put']['status']>(prefix, PATH36, PUT, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_1nhtobh['get']['query'] } | { method: 'put'; query: Methods_1nhtobh['put']['query'] } | undefined) =>
        `${prefix}${PATH36}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    cash_on_deliveries: {
      create_deposit: {
        /**
         * 入荷予定に紐づいて、在庫・仕入計上予定を更新します。更新のみ可能です。
         * @returns OK
         */
        post: (option: { body: Methods_zq2nss['post']['reqBody'], query?: Methods_zq2nss['post']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_zq2nss['post']['resBody'], BasicHeaders, Methods_zq2nss['post']['status']>(prefix, PATH38, POST, option).json(),
        /**
         * 入荷予定に紐づいて、在庫・仕入計上予定を更新します。更新のみ可能です。
         * @returns OK
         */
        $post: (option: { body: Methods_zq2nss['post']['reqBody'], query?: Methods_zq2nss['post']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_zq2nss['post']['resBody'], BasicHeaders, Methods_zq2nss['post']['status']>(prefix, PATH38, POST, option).json().then(r => r.body),
        $path: (option?: { method: 'post'; query: Methods_zq2nss['post']['query'] } | undefined) =>
          `${prefix}${PATH38}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      /**
       * 振込データ受信一覧データを取得します
       * @returns OK
       */
      get: (option: { query: Methods_1hufusc['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1hufusc['get']['resBody'], BasicHeaders, Methods_1hufusc['get']['status']>(prefix, PATH37, GET, option).json(),
      /**
       * 振込データ受信一覧データを取得します
       * @returns OK
       */
      $get: (option: { query: Methods_1hufusc['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1hufusc['get']['resBody'], BasicHeaders, Methods_1hufusc['get']['status']>(prefix, PATH37, GET, option).json().then(r => r.body),
      /**
       * 振込データを取り込みます
       */
      post: (option: { body: Methods_1hufusc['post']['reqBody'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods_1hufusc['post']['status']>(prefix, PATH37, POST, option, 'FormData').send(),
      /**
       * 振込データを取り込みます
       */
      $post: (option: { body: Methods_1hufusc['post']['reqBody'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods_1hufusc['post']['status']>(prefix, PATH37, POST, option, 'FormData').send().then(r => r.body),
      /**
       * 入荷予定に紐づいて、在庫・仕入計上予定を更新します。更新のみ可能です。
       * @returns OK
       */
      put: (option: { body: Methods_1hufusc['put']['reqBody'], query?: Methods_1hufusc['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1hufusc['put']['resBody'], BasicHeaders, Methods_1hufusc['put']['status']>(prefix, PATH37, PUT, option).json(),
      /**
       * 入荷予定に紐づいて、在庫・仕入計上予定を更新します。更新のみ可能です。
       * @returns OK
       */
      $put: (option: { body: Methods_1hufusc['put']['reqBody'], query?: Methods_1hufusc['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1hufusc['put']['resBody'], BasicHeaders, Methods_1hufusc['put']['status']>(prefix, PATH37, PUT, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_1hufusc['get']['query'] } | { method: 'put'; query: Methods_1hufusc['put']['query'] } | undefined) =>
        `${prefix}${PATH37}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    consignees: {
      _consignee_id: (val1: number) => {
        const prefix1 = `${PATH39}/${val1}`;

        return {
          /**
           * 荷受先を取得します
           * @returns OK
           */
          get: (option?: { query?: Methods_he73lq['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_he73lq['get']['resBody'], BasicHeaders, Methods_he73lq['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * 荷受先を取得します
           * @returns OK
           */
          $get: (option?: { query?: Methods_he73lq['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_he73lq['get']['resBody'], BasicHeaders, Methods_he73lq['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_he73lq['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
      /**
       * 荷受先一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_1m9wy4y['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1m9wy4y['get']['resBody'], BasicHeaders, Methods_1m9wy4y['get']['status']>(prefix, PATH39, GET, option).json(),
      /**
       * 荷受先一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_1m9wy4y['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1m9wy4y['get']['resBody'], BasicHeaders, Methods_1m9wy4y['get']['status']>(prefix, PATH39, GET, option).json().then(r => r.body),
      /**
       * 荷受先を追加更新削除します。
       * @returns OK
       */
      put: (option: { body: Methods_1m9wy4y['put']['reqBody'], query?: Methods_1m9wy4y['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1m9wy4y['put']['resBody'], BasicHeaders, Methods_1m9wy4y['put']['status']>(prefix, PATH39, PUT, option).json(),
      /**
       * 荷受先を追加更新削除します。
       * @returns OK
       */
      $put: (option: { body: Methods_1m9wy4y['put']['reqBody'], query?: Methods_1m9wy4y['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1m9wy4y['put']['resBody'], BasicHeaders, Methods_1m9wy4y['put']['status']>(prefix, PATH39, PUT, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_1m9wy4y['get']['query'] } | { method: 'put'; query: Methods_1m9wy4y['put']['query'] } | undefined) =>
        `${prefix}${PATH39}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    contract_stocks: {
      _contract_stock_id: (val1: number) => {
        const prefix1 = `${PATH40}/${val1}`;

        return {
          /**
           * 委託倉庫在庫を取得します
           * @returns OK
           */
          get: (option?: { query?: Methods_r4f60q['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_r4f60q['get']['resBody'], BasicHeaders, Methods_r4f60q['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * 委託倉庫在庫を取得します
           * @returns OK
           */
          $get: (option?: { query?: Methods_r4f60q['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_r4f60q['get']['resBody'], BasicHeaders, Methods_r4f60q['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_r4f60q['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
      /**
       * 委託倉庫在庫一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_18ysf42['get']['query'], config?: T | undefined }) =>
        fetch<Methods_18ysf42['get']['resBody'], BasicHeaders, Methods_18ysf42['get']['status']>(prefix, PATH40, GET, option).json(),
      /**
       * 委託倉庫在庫一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_18ysf42['get']['query'], config?: T | undefined }) =>
        fetch<Methods_18ysf42['get']['resBody'], BasicHeaders, Methods_18ysf42['get']['status']>(prefix, PATH40, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_18ysf42['get']['query'] } | undefined) =>
        `${prefix}${PATH40}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    controls: {
      _control_id: (val1: number) => {
        const prefix1 = `${PATH41}/${val1}`;

        return {
          /**
           * コントロールを取得します
           * @returns OK
           */
          get: (option?: { query?: Methods_1xw4eye['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1xw4eye['get']['resBody'], BasicHeaders, Methods_1xw4eye['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * コントロールを取得します
           * @returns OK
           */
          $get: (option?: { query?: Methods_1xw4eye['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1xw4eye['get']['resBody'], BasicHeaders, Methods_1xw4eye['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_1xw4eye['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
      /**
       * コントロール一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_1vqfcuc['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1vqfcuc['get']['resBody'], BasicHeaders, Methods_1vqfcuc['get']['status']>(prefix, PATH41, GET, option).json(),
      /**
       * コントロール一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_1vqfcuc['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1vqfcuc['get']['resBody'], BasicHeaders, Methods_1vqfcuc['get']['status']>(prefix, PATH41, GET, option).json().then(r => r.body),
      /**
       * コントロールを追加更新削除します。
       * @returns OK
       */
      put: (option: { body: Methods_1vqfcuc['put']['reqBody'], query?: Methods_1vqfcuc['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1vqfcuc['put']['resBody'], BasicHeaders, Methods_1vqfcuc['put']['status']>(prefix, PATH41, PUT, option).json(),
      /**
       * コントロールを追加更新削除します。
       * @returns OK
       */
      $put: (option: { body: Methods_1vqfcuc['put']['reqBody'], query?: Methods_1vqfcuc['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1vqfcuc['put']['resBody'], BasicHeaders, Methods_1vqfcuc['put']['status']>(prefix, PATH41, PUT, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_1vqfcuc['get']['query'] } | { method: 'put'; query: Methods_1vqfcuc['put']['query'] } | undefined) =>
        `${prefix}${PATH41}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    cost_prices: {
      export_cost_price_data: {
        /**
         * 原価データを出力します。
         */
        post: (option: { body: Methods_1ll3u7e['post']['reqBody'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_1ll3u7e['post']['status']>(prefix, PATH42, POST, option).send(),
        /**
         * 原価データを出力します。
         */
        $post: (option: { body: Methods_1ll3u7e['post']['reqBody'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_1ll3u7e['post']['status']>(prefix, PATH42, POST, option).send().then(r => r.body),
        $path: () => `${prefix}${PATH42}`,
      },
      import_cost_price_data: {
        /**
         * 原価データを取り込みます。
         */
        post: (option: { body: Methods_zirfep['post']['reqBody'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_zirfep['post']['status']>(prefix, PATH43, POST, option).send(),
        /**
         * 原価データを取り込みます。
         */
        $post: (option: { body: Methods_zirfep['post']['reqBody'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_zirfep['post']['status']>(prefix, PATH43, POST, option).send().then(r => r.body),
        $path: () => `${prefix}${PATH43}`,
      },
    },
    cost_subjects: {
      _cost_subject_id: (val1: number) => {
        const prefix1 = `${PATH44}/${val1}`;

        return {
          /**
           * 費用科目を取得します
           * @returns OK
           */
          get: (option?: { query?: Methods_1lwwyrw['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1lwwyrw['get']['resBody'], BasicHeaders, Methods_1lwwyrw['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * 費用科目を取得します
           * @returns OK
           */
          $get: (option?: { query?: Methods_1lwwyrw['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1lwwyrw['get']['resBody'], BasicHeaders, Methods_1lwwyrw['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_1lwwyrw['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
      /**
       * 費用科目一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_155si51['get']['query'], config?: T | undefined }) =>
        fetch<Methods_155si51['get']['resBody'], BasicHeaders, Methods_155si51['get']['status']>(prefix, PATH44, GET, option).json(),
      /**
       * 費用科目一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_155si51['get']['query'], config?: T | undefined }) =>
        fetch<Methods_155si51['get']['resBody'], BasicHeaders, Methods_155si51['get']['status']>(prefix, PATH44, GET, option).json().then(r => r.body),
      /**
       * 費用科目を追加更新削除します。
       * @returns OK
       */
      put: (option: { body: Methods_155si51['put']['reqBody'], query?: Methods_155si51['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_155si51['put']['resBody'], BasicHeaders, Methods_155si51['put']['status']>(prefix, PATH44, PUT, option).json(),
      /**
       * 費用科目を追加更新削除します。
       * @returns OK
       */
      $put: (option: { body: Methods_155si51['put']['reqBody'], query?: Methods_155si51['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_155si51['put']['resBody'], BasicHeaders, Methods_155si51['put']['status']>(prefix, PATH44, PUT, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_155si51['get']['query'] } | { method: 'put'; query: Methods_155si51['put']['query'] } | undefined) =>
        `${prefix}${PATH44}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    costs: {
      bulk_insert: {
        /**
         * コストデータを取り込みます。
         * @returns OK
         */
        post: (option: { body: Methods_xehksn['post']['reqBody'], query?: Methods_xehksn['post']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_xehksn['post']['resBody'], BasicHeaders, Methods_xehksn['post']['status']>(prefix, PATH45, POST, option, 'FormData').json(),
        /**
         * コストデータを取り込みます。
         * @returns OK
         */
        $post: (option: { body: Methods_xehksn['post']['reqBody'], query?: Methods_xehksn['post']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_xehksn['post']['resBody'], BasicHeaders, Methods_xehksn['post']['status']>(prefix, PATH45, POST, option, 'FormData').json().then(r => r.body),
        $path: (option?: { method: 'post'; query: Methods_xehksn['post']['query'] } | undefined) =>
          `${prefix}${PATH45}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      bulk_insert_check_amount: {
        /**
         * 作業料（コスト）データを取り込みます。
         * @returns OK
         */
        post: (option: { body: Methods_1t5qilt['post']['reqBody'], query?: Methods_1t5qilt['post']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1t5qilt['post']['resBody'], BasicHeaders, Methods_1t5qilt['post']['status']>(prefix, PATH46, POST, option, 'FormData').json(),
        /**
         * 作業料（コスト）データを取り込みます。
         * @returns OK
         */
        $post: (option: { body: Methods_1t5qilt['post']['reqBody'], query?: Methods_1t5qilt['post']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1t5qilt['post']['resBody'], BasicHeaders, Methods_1t5qilt['post']['status']>(prefix, PATH46, POST, option, 'FormData').json().then(r => r.body),
        $path: (option?: { method: 'post'; query: Methods_1t5qilt['post']['query'] } | undefined) =>
          `${prefix}${PATH46}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      bulk_insert_custom: {
        /**
         * コスト通関データを取り込みます。
         * @returns OK
         */
        post: (option: { body: Methods_eocu3n['post']['reqBody'], query?: Methods_eocu3n['post']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_eocu3n['post']['resBody'], BasicHeaders, Methods_eocu3n['post']['status']>(prefix, PATH47, POST, option, 'FormData').json(),
        /**
         * コスト通関データを取り込みます。
         * @returns OK
         */
        $post: (option: { body: Methods_eocu3n['post']['reqBody'], query?: Methods_eocu3n['post']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_eocu3n['post']['resBody'], BasicHeaders, Methods_eocu3n['post']['status']>(prefix, PATH47, POST, option, 'FormData').json().then(r => r.body),
        $path: (option?: { method: 'post'; query: Methods_eocu3n['post']['query'] } | undefined) =>
          `${prefix}${PATH47}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
    },
    country_grading_links: {
      _country_grading_link_id: (val1: number) => {
        const prefix1 = `${PATH48}/${val1}`;

        return {
          /**
           * 原産国～格付紐付を取得します
           * @returns OK
           */
          get: (option?: { query?: Methods_1w0pty0['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1w0pty0['get']['resBody'], BasicHeaders, Methods_1w0pty0['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * 原産国～格付紐付を取得します
           * @returns OK
           */
          $get: (option?: { query?: Methods_1w0pty0['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1w0pty0['get']['resBody'], BasicHeaders, Methods_1w0pty0['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_1w0pty0['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
      /**
       * 原産国～格付紐付一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_gkal3t['get']['query'], config?: T | undefined }) =>
        fetch<Methods_gkal3t['get']['resBody'], BasicHeaders, Methods_gkal3t['get']['status']>(prefix, PATH48, GET, option).json(),
      /**
       * 原産国～格付紐付一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_gkal3t['get']['query'], config?: T | undefined }) =>
        fetch<Methods_gkal3t['get']['resBody'], BasicHeaders, Methods_gkal3t['get']['status']>(prefix, PATH48, GET, option).json().then(r => r.body),
      /**
       * 原産国～格付紐付を追加更新削除します。
       * @returns OK
       */
      put: (option: { body: Methods_gkal3t['put']['reqBody'], query?: Methods_gkal3t['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_gkal3t['put']['resBody'], BasicHeaders, Methods_gkal3t['put']['status']>(prefix, PATH48, PUT, option).json(),
      /**
       * 原産国～格付紐付を追加更新削除します。
       * @returns OK
       */
      $put: (option: { body: Methods_gkal3t['put']['reqBody'], query?: Methods_gkal3t['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_gkal3t['put']['resBody'], BasicHeaders, Methods_gkal3t['put']['status']>(prefix, PATH48, PUT, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_gkal3t['get']['query'] } | { method: 'put'; query: Methods_gkal3t['put']['query'] } | undefined) =>
        `${prefix}${PATH48}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    country_of_origins: {
      _country_of_origin_id: (val1: number) => {
        const prefix1 = `${PATH49}/${val1}`;

        return {
          /**
           * 原産国を取得します
           * @returns OK
           */
          get: (option?: { query?: Methods_18p6e86['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_18p6e86['get']['resBody'], BasicHeaders, Methods_18p6e86['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * 原産国を取得します
           * @returns OK
           */
          $get: (option?: { query?: Methods_18p6e86['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_18p6e86['get']['resBody'], BasicHeaders, Methods_18p6e86['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_18p6e86['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
      /**
       * 原産国一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_1dxbjf0['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1dxbjf0['get']['resBody'], BasicHeaders, Methods_1dxbjf0['get']['status']>(prefix, PATH49, GET, option).json(),
      /**
       * 原産国一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_1dxbjf0['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1dxbjf0['get']['resBody'], BasicHeaders, Methods_1dxbjf0['get']['status']>(prefix, PATH49, GET, option).json().then(r => r.body),
      /**
       * 原産国を追加更新削除します。
       * @returns OK
       */
      put: (option: { body: Methods_1dxbjf0['put']['reqBody'], query?: Methods_1dxbjf0['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1dxbjf0['put']['resBody'], BasicHeaders, Methods_1dxbjf0['put']['status']>(prefix, PATH49, PUT, option).json(),
      /**
       * 原産国を追加更新削除します。
       * @returns OK
       */
      $put: (option: { body: Methods_1dxbjf0['put']['reqBody'], query?: Methods_1dxbjf0['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1dxbjf0['put']['resBody'], BasicHeaders, Methods_1dxbjf0['put']['status']>(prefix, PATH49, PUT, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_1dxbjf0['get']['query'] } | { method: 'put'; query: Methods_1dxbjf0['put']['query'] } | undefined) =>
        `${prefix}${PATH49}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    country_place_name_links: {
      _country_place_name_link_id: (val1: number) => {
        const prefix1 = `${PATH50}/${val1}`;

        return {
          /**
           * 原産国～原産地呼称紐付を取得します
           * @returns OK
           */
          get: (option?: { query?: Methods_flmsvi['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_flmsvi['get']['resBody'], BasicHeaders, Methods_flmsvi['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * 原産国～原産地呼称紐付を取得します
           * @returns OK
           */
          $get: (option?: { query?: Methods_flmsvi['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_flmsvi['get']['resBody'], BasicHeaders, Methods_flmsvi['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_flmsvi['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
      /**
       * 原産国～原産地呼称紐付一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_10qqa3k['get']['query'], config?: T | undefined }) =>
        fetch<Methods_10qqa3k['get']['resBody'], BasicHeaders, Methods_10qqa3k['get']['status']>(prefix, PATH50, GET, option).json(),
      /**
       * 原産国～原産地呼称紐付一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_10qqa3k['get']['query'], config?: T | undefined }) =>
        fetch<Methods_10qqa3k['get']['resBody'], BasicHeaders, Methods_10qqa3k['get']['status']>(prefix, PATH50, GET, option).json().then(r => r.body),
      /**
       * 原産国～原産地呼称紐付を追加更新削除します。
       * @returns OK
       */
      put: (option: { body: Methods_10qqa3k['put']['reqBody'], query?: Methods_10qqa3k['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_10qqa3k['put']['resBody'], BasicHeaders, Methods_10qqa3k['put']['status']>(prefix, PATH50, PUT, option).json(),
      /**
       * 原産国～原産地呼称紐付を追加更新削除します。
       * @returns OK
       */
      $put: (option: { body: Methods_10qqa3k['put']['reqBody'], query?: Methods_10qqa3k['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_10qqa3k['put']['resBody'], BasicHeaders, Methods_10qqa3k['put']['status']>(prefix, PATH50, PUT, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_10qqa3k['get']['query'] } | { method: 'put'; query: Methods_10qqa3k['put']['query'] } | undefined) =>
        `${prefix}${PATH50}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    country_village_links: {
      _country_village_link_id: (val1: number) => {
        const prefix1 = `${PATH51}/${val1}`;

        return {
          /**
           * 原産国～村紐付を取得します
           * @returns OK
           */
          get: (option?: { query?: Methods_kiyr7o['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_kiyr7o['get']['resBody'], BasicHeaders, Methods_kiyr7o['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * 原産国～村紐付を取得します
           * @returns OK
           */
          $get: (option?: { query?: Methods_kiyr7o['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_kiyr7o['get']['resBody'], BasicHeaders, Methods_kiyr7o['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_kiyr7o['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
      /**
       * 原産国～村紐付一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_ssddcd['get']['query'], config?: T | undefined }) =>
        fetch<Methods_ssddcd['get']['resBody'], BasicHeaders, Methods_ssddcd['get']['status']>(prefix, PATH51, GET, option).json(),
      /**
       * 原産国～村紐付一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_ssddcd['get']['query'], config?: T | undefined }) =>
        fetch<Methods_ssddcd['get']['resBody'], BasicHeaders, Methods_ssddcd['get']['status']>(prefix, PATH51, GET, option).json().then(r => r.body),
      /**
       * 原産国～村紐付を追加更新削除します。
       * @returns OK
       */
      put: (option: { body: Methods_ssddcd['put']['reqBody'], query?: Methods_ssddcd['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_ssddcd['put']['resBody'], BasicHeaders, Methods_ssddcd['put']['status']>(prefix, PATH51, PUT, option).json(),
      /**
       * 原産国～村紐付を追加更新削除します。
       * @returns OK
       */
      $put: (option: { body: Methods_ssddcd['put']['reqBody'], query?: Methods_ssddcd['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_ssddcd['put']['resBody'], BasicHeaders, Methods_ssddcd['put']['status']>(prefix, PATH51, PUT, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_ssddcd['get']['query'] } | { method: 'put'; query: Methods_ssddcd['put']['query'] } | undefined) =>
        `${prefix}${PATH51}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    customer_credits: {
      bulk: {
        /**
         * 得意先を一括更新します。
         * @returns OK
         */
        post: (option: { body: Methods_17pp3us['post']['reqBody'], query?: Methods_17pp3us['post']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_17pp3us['post']['resBody'], BasicHeaders, Methods_17pp3us['post']['status']>(prefix, PATH52, POST, option, 'FormData').json(),
        /**
         * 得意先を一括更新します。
         * @returns OK
         */
        $post: (option: { body: Methods_17pp3us['post']['reqBody'], query?: Methods_17pp3us['post']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_17pp3us['post']['resBody'], BasicHeaders, Methods_17pp3us['post']['status']>(prefix, PATH52, POST, option, 'FormData').json().then(r => r.body),
        $path: (option?: { method: 'post'; query: Methods_17pp3us['post']['query'] } | undefined) =>
          `${prefix}${PATH52}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
    },
    customer_group_invents: {
      _customer_group_invent_id: (val1: number) => {
        const prefix1 = `${PATH53}/${val1}`;

        return {
          /**
           * 得意先グループ商品を取得します
           * @returns OK
           */
          get: (option?: { query?: Methods_1e3ht5y['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1e3ht5y['get']['resBody'], BasicHeaders, Methods_1e3ht5y['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * 得意先グループ商品を取得します
           * @returns OK
           */
          $get: (option?: { query?: Methods_1e3ht5y['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1e3ht5y['get']['resBody'], BasicHeaders, Methods_1e3ht5y['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_1e3ht5y['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
      /**
       * 得意先グループ商品一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_1m8n618['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1m8n618['get']['resBody'], BasicHeaders, Methods_1m8n618['get']['status']>(prefix, PATH53, GET, option).json(),
      /**
       * 得意先グループ商品一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_1m8n618['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1m8n618['get']['resBody'], BasicHeaders, Methods_1m8n618['get']['status']>(prefix, PATH53, GET, option).json().then(r => r.body),
      /**
       * 得意先グループ商品を追加更新削除します。
       * @returns OK
       */
      put: (option: { body: Methods_1m8n618['put']['reqBody'], query?: Methods_1m8n618['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1m8n618['put']['resBody'], BasicHeaders, Methods_1m8n618['put']['status']>(prefix, PATH53, PUT, option).json(),
      /**
       * 得意先グループ商品を追加更新削除します。
       * @returns OK
       */
      $put: (option: { body: Methods_1m8n618['put']['reqBody'], query?: Methods_1m8n618['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1m8n618['put']['resBody'], BasicHeaders, Methods_1m8n618['put']['status']>(prefix, PATH53, PUT, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_1m8n618['get']['query'] } | { method: 'put'; query: Methods_1m8n618['put']['query'] } | undefined) =>
        `${prefix}${PATH53}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    customer_groups: {
      _customer_group_id: (val1: number) => {
        const prefix1 = `${PATH54}/${val1}`;

        return {
          /**
           * 得意先グループを取得します
           * @returns OK
           */
          get: (option?: { query?: Methods_x5pf5o['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_x5pf5o['get']['resBody'], BasicHeaders, Methods_x5pf5o['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * 得意先グループを取得します
           * @returns OK
           */
          $get: (option?: { query?: Methods_x5pf5o['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_x5pf5o['get']['resBody'], BasicHeaders, Methods_x5pf5o['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_x5pf5o['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
      /**
       * 得意先グループ一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_1ea72i7['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1ea72i7['get']['resBody'], BasicHeaders, Methods_1ea72i7['get']['status']>(prefix, PATH54, GET, option).json(),
      /**
       * 得意先グループ一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_1ea72i7['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1ea72i7['get']['resBody'], BasicHeaders, Methods_1ea72i7['get']['status']>(prefix, PATH54, GET, option).json().then(r => r.body),
      /**
       * 得意先グループを追加更新削除します。
       * @returns OK
       */
      put: (option: { body: Methods_1ea72i7['put']['reqBody'], query?: Methods_1ea72i7['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1ea72i7['put']['resBody'], BasicHeaders, Methods_1ea72i7['put']['status']>(prefix, PATH54, PUT, option).json(),
      /**
       * 得意先グループを追加更新削除します。
       * @returns OK
       */
      $put: (option: { body: Methods_1ea72i7['put']['reqBody'], query?: Methods_1ea72i7['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1ea72i7['put']['resBody'], BasicHeaders, Methods_1ea72i7['put']['status']>(prefix, PATH54, PUT, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_1ea72i7['get']['query'] } | { method: 'put'; query: Methods_1ea72i7['put']['query'] } | undefined) =>
        `${prefix}${PATH54}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    customer_invents: {
      _customer_invent_id: (val1: number) => {
        const prefix1 = `${PATH55}/${val1}`;

        return {
          /**
           * 得意先商品を取得します
           * @returns OK
           */
          get: (option?: { query?: Methods_1un37om['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1un37om['get']['resBody'], BasicHeaders, Methods_1un37om['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * 得意先商品を取得します
           * @returns OK
           */
          $get: (option?: { query?: Methods_1un37om['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1un37om['get']['resBody'], BasicHeaders, Methods_1un37om['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_1un37om['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
      /**
       * 得意先商品一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_b886wg['get']['query'], config?: T | undefined }) =>
        fetch<Methods_b886wg['get']['resBody'], BasicHeaders, Methods_b886wg['get']['status']>(prefix, PATH55, GET, option).json(),
      /**
       * 得意先商品一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_b886wg['get']['query'], config?: T | undefined }) =>
        fetch<Methods_b886wg['get']['resBody'], BasicHeaders, Methods_b886wg['get']['status']>(prefix, PATH55, GET, option).json().then(r => r.body),
      /**
       * 得意先商品を追加更新削除します。
       * @returns OK
       */
      put: (option: { body: Methods_b886wg['put']['reqBody'], query?: Methods_b886wg['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_b886wg['put']['resBody'], BasicHeaders, Methods_b886wg['put']['status']>(prefix, PATH55, PUT, option).json(),
      /**
       * 得意先商品を追加更新削除します。
       * @returns OK
       */
      $put: (option: { body: Methods_b886wg['put']['reqBody'], query?: Methods_b886wg['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_b886wg['put']['resBody'], BasicHeaders, Methods_b886wg['put']['status']>(prefix, PATH55, PUT, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_b886wg['get']['query'] } | { method: 'put'; query: Methods_b886wg['put']['query'] } | undefined) =>
        `${prefix}${PATH55}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    customer_sales: {
      bulk: {
        /**
         * 得意先営業担当者を一括更新します。ロックの取得を指定した場合、ロックの取得に成功した後、直ちにそのロックは解放されます。
         * @returns OK
         */
        post: (option: { body: Methods_sb0qw2['post']['reqBody'], query?: Methods_sb0qw2['post']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_sb0qw2['post']['resBody'], BasicHeaders, Methods_sb0qw2['post']['status']>(prefix, PATH56, POST, option, 'FormData').json(),
        /**
         * 得意先営業担当者を一括更新します。ロックの取得を指定した場合、ロックの取得に成功した後、直ちにそのロックは解放されます。
         * @returns OK
         */
        $post: (option: { body: Methods_sb0qw2['post']['reqBody'], query?: Methods_sb0qw2['post']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_sb0qw2['post']['resBody'], BasicHeaders, Methods_sb0qw2['post']['status']>(prefix, PATH56, POST, option, 'FormData').json().then(r => r.body),
        $path: (option?: { method: 'post'; query: Methods_sb0qw2['post']['query'] } | undefined) =>
          `${prefix}${PATH56}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
    },
    customer_staffs: {
      bulk: {
        /**
         * 得意先先方担当者を一括更新します。ロックの取得を指定した場合、ロックの取得に成功した後、直ちにそのロックは解放されます。
         * @returns OK
         */
        post: (option: { body: Methods_1um468t['post']['reqBody'], query?: Methods_1um468t['post']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1um468t['post']['resBody'], BasicHeaders, Methods_1um468t['post']['status']>(prefix, PATH57, POST, option, 'FormData').json(),
        /**
         * 得意先先方担当者を一括更新します。ロックの取得を指定した場合、ロックの取得に成功した後、直ちにそのロックは解放されます。
         * @returns OK
         */
        $post: (option: { body: Methods_1um468t['post']['reqBody'], query?: Methods_1um468t['post']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1um468t['post']['resBody'], BasicHeaders, Methods_1um468t['post']['status']>(prefix, PATH57, POST, option, 'FormData').json().then(r => r.body),
        $path: (option?: { method: 'post'; query: Methods_1um468t['post']['query'] } | undefined) =>
          `${prefix}${PATH57}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
    },
    customers: {
      _customer_id: (val1: number) => {
        const prefix1 = `${PATH58}/${val1}`;

        return {
          inquire_haisou: {
            /**
             * 得意先の配送区分確認依頼を行います。
             */
            post: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods_1hqols0['post']['status']>(prefix, `${prefix1}${PATH59}`, POST, option).send(),
            /**
             * 得意先の配送区分確認依頼を行います。
             */
            $post: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods_1hqols0['post']['status']>(prefix, `${prefix1}${PATH59}`, POST, option).send().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH59}`,
          },
          /**
           * 得意先を取得します。新たなロックを取得する前に、同一テーブルの同一ロックキー1に対する同一担当者によるロックは解除されます。
           * @returns OK
           */
          get: (option?: { query?: Methods_wn45gk['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_wn45gk['get']['resBody'], BasicHeaders, Methods_wn45gk['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * 得意先を取得します。新たなロックを取得する前に、同一テーブルの同一ロックキー1に対する同一担当者によるロックは解除されます。
           * @returns OK
           */
          $get: (option?: { query?: Methods_wn45gk['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_wn45gk['get']['resBody'], BasicHeaders, Methods_wn45gk['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_wn45gk['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
      bulk_insert: {
        /**
         * 得意先を一括更新します。
         * @returns OK
         */
        post: (option: { body: Methods_14n0y8o['post']['reqBody'], query?: Methods_14n0y8o['post']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_14n0y8o['post']['resBody'], BasicHeaders, Methods_14n0y8o['post']['status']>(prefix, PATH60, POST, option, 'FormData').json(),
        /**
         * 得意先を一括更新します。
         * @returns OK
         */
        $post: (option: { body: Methods_14n0y8o['post']['reqBody'], query?: Methods_14n0y8o['post']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_14n0y8o['post']['resBody'], BasicHeaders, Methods_14n0y8o['post']['status']>(prefix, PATH60, POST, option, 'FormData').json().then(r => r.body),
        $path: (option?: { method: 'post'; query: Methods_14n0y8o['post']['query'] } | undefined) =>
          `${prefix}${PATH60}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      bulk_update: {
        /**
         * 得意先を一括更新します。ロックの取得を指定した場合、ロックの取得に成功した後、直ちにそのロックは解放されます。
         * @returns OK
         */
        post: (option: { body: Methods_xaa278['post']['reqBody'], query?: Methods_xaa278['post']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_xaa278['post']['resBody'], BasicHeaders, Methods_xaa278['post']['status']>(prefix, PATH61, POST, option, 'FormData').json(),
        /**
         * 得意先を一括更新します。ロックの取得を指定した場合、ロックの取得に成功した後、直ちにそのロックは解放されます。
         * @returns OK
         */
        $post: (option: { body: Methods_xaa278['post']['reqBody'], query?: Methods_xaa278['post']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_xaa278['post']['resBody'], BasicHeaders, Methods_xaa278['post']['status']>(prefix, PATH61, POST, option, 'FormData').json().then(r => r.body),
        $path: (option?: { method: 'post'; query: Methods_xaa278['post']['query'] } | undefined) =>
          `${prefix}${PATH61}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      next_idm: {
        /**
         * 空いている得意先IDMを取得します。
         * @returns OK
         */
        get: (option?: { query?: Methods_our6ai['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_our6ai['get']['resBody'], BasicHeaders, Methods_our6ai['get']['status']>(prefix, PATH62, GET, option).json(),
        /**
         * 空いている得意先IDMを取得します。
         * @returns OK
         */
        $get: (option?: { query?: Methods_our6ai['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_our6ai['get']['resBody'], BasicHeaders, Methods_our6ai['get']['status']>(prefix, PATH62, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_our6ai['get']['query'] } | undefined) =>
          `${prefix}${PATH62}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      /**
       * 得意先一覧を返します。新たなロックを取得する前に、同一テーブルの同一ロックキー1に対する同一担当者によるロックは解除されます。
       * @returns OK
       */
      get: (option: { query: Methods_1hcjyrv['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1hcjyrv['get']['resBody'], BasicHeaders, Methods_1hcjyrv['get']['status']>(prefix, PATH58, GET, option).json(),
      /**
       * 得意先一覧を返します。新たなロックを取得する前に、同一テーブルの同一ロックキー1に対する同一担当者によるロックは解除されます。
       * @returns OK
       */
      $get: (option: { query: Methods_1hcjyrv['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1hcjyrv['get']['resBody'], BasicHeaders, Methods_1hcjyrv['get']['status']>(prefix, PATH58, GET, option).json().then(r => r.body),
      /**
       * 得意先を追加更新削除します。
       * @returns OK
       */
      put: (option: { body: Methods_1hcjyrv['put']['reqBody'], query?: Methods_1hcjyrv['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1hcjyrv['put']['resBody'], BasicHeaders, Methods_1hcjyrv['put']['status']>(prefix, PATH58, PUT, option).json(),
      /**
       * 得意先を追加更新削除します。
       * @returns OK
       */
      $put: (option: { body: Methods_1hcjyrv['put']['reqBody'], query?: Methods_1hcjyrv['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1hcjyrv['put']['resBody'], BasicHeaders, Methods_1hcjyrv['put']['status']>(prefix, PATH58, PUT, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_1hcjyrv['get']['query'] } | { method: 'put'; query: Methods_1hcjyrv['put']['query'] } | undefined) =>
        `${prefix}${PATH58}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    customs_duties: {
      _customs_duty_id: (val1: number) => {
        const prefix1 = `${PATH63}/${val1}`;

        return {
          /**
           * 関税を取得します
           * @returns OK
           */
          get: (option?: { query?: Methods_1skxqd['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1skxqd['get']['resBody'], BasicHeaders, Methods_1skxqd['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * 関税を取得します
           * @returns OK
           */
          $get: (option?: { query?: Methods_1skxqd['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1skxqd['get']['resBody'], BasicHeaders, Methods_1skxqd['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_1skxqd['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
      /**
       * 関税一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_qh5flr['get']['query'], config?: T | undefined }) =>
        fetch<Methods_qh5flr['get']['resBody'], BasicHeaders, Methods_qh5flr['get']['status']>(prefix, PATH63, GET, option).json(),
      /**
       * 関税一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_qh5flr['get']['query'], config?: T | undefined }) =>
        fetch<Methods_qh5flr['get']['resBody'], BasicHeaders, Methods_qh5flr['get']['status']>(prefix, PATH63, GET, option).json().then(r => r.body),
      /**
       * 関税を追加更新削除します。
       * @returns OK
       */
      put: (option: { body: Methods_qh5flr['put']['reqBody'], query?: Methods_qh5flr['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_qh5flr['put']['resBody'], BasicHeaders, Methods_qh5flr['put']['status']>(prefix, PATH63, PUT, option).json(),
      /**
       * 関税を追加更新削除します。
       * @returns OK
       */
      $put: (option: { body: Methods_qh5flr['put']['reqBody'], query?: Methods_qh5flr['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_qh5flr['put']['resBody'], BasicHeaders, Methods_qh5flr['put']['status']>(prefix, PATH63, PUT, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_qh5flr['get']['query'] } | { method: 'put'; query: Methods_qh5flr['put']['query'] } | undefined) =>
        `${prefix}${PATH63}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    deposit_results: {
      execute_clearing: {
        /**
         * 入金実績に対する消込処理をします
         */
        put: (option: { body: Methods_sr80it['put']['reqBody'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_sr80it['put']['status']>(prefix, PATH65, PUT, option).send(),
        /**
         * 入金実績に対する消込処理をします
         */
        $put: (option: { body: Methods_sr80it['put']['reqBody'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_sr80it['put']['status']>(prefix, PATH65, PUT, option).send().then(r => r.body),
        $path: () => `${prefix}${PATH65}`,
      },
      schedule: {
        /**
         * 入金予定を返します
         * @returns OK
         */
        get: (option?: { query?: Methods_1vc9xzr['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_1vc9xzr['get']['resBody'], BasicHeaders, Methods_1vc9xzr['get']['status']>(prefix, PATH66, GET, option).json(),
        /**
         * 入金予定を返します
         * @returns OK
         */
        $get: (option?: { query?: Methods_1vc9xzr['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_1vc9xzr['get']['resBody'], BasicHeaders, Methods_1vc9xzr['get']['status']>(prefix, PATH66, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_1vc9xzr['get']['query'] } | undefined) =>
          `${prefix}${PATH66}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      /**
       * 入金実績一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_1j2uy15['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1j2uy15['get']['resBody'], BasicHeaders, Methods_1j2uy15['get']['status']>(prefix, PATH64, GET, option).json(),
      /**
       * 入金実績一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_1j2uy15['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1j2uy15['get']['resBody'], BasicHeaders, Methods_1j2uy15['get']['status']>(prefix, PATH64, GET, option).json().then(r => r.body),
      /**
       * 入金実績を追加更新削除します。
       * @returns OK
       */
      put: (option: { body: Methods_1j2uy15['put']['reqBody'], query?: Methods_1j2uy15['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1j2uy15['put']['resBody'], BasicHeaders, Methods_1j2uy15['put']['status']>(prefix, PATH64, PUT, option).json(),
      /**
       * 入金実績を追加更新削除します。
       * @returns OK
       */
      $put: (option: { body: Methods_1j2uy15['put']['reqBody'], query?: Methods_1j2uy15['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1j2uy15['put']['resBody'], BasicHeaders, Methods_1j2uy15['put']['status']>(prefix, PATH64, PUT, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_1j2uy15['get']['query'] } | { method: 'put'; query: Methods_1j2uy15['put']['query'] } | undefined) =>
        `${prefix}${PATH64}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    deposit_schedules: {
      diff_customers: {
        /**
         * 入金予定が未作成の得意先一覧を取得します
         * @returns OK
         */
        get: (option: { query: Methods_qziqhv['get']['query'], config?: T | undefined }) =>
          fetch<Methods_qziqhv['get']['resBody'], BasicHeaders, Methods_qziqhv['get']['status']>(prefix, PATH68, GET, option).json(),
        /**
         * 入金予定が未作成の得意先一覧を取得します
         * @returns OK
         */
        $get: (option: { query: Methods_qziqhv['get']['query'], config?: T | undefined }) =>
          fetch<Methods_qziqhv['get']['resBody'], BasicHeaders, Methods_qziqhv['get']['status']>(prefix, PATH68, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_qziqhv['get']['query'] } | undefined) =>
          `${prefix}${PATH68}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      make_zero_schedule: {
        /**
         * 入金予定をゼロ円で作成します
         * @returns OK
         */
        post: (option: { body: Methods_m8ghhl['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_m8ghhl['post']['resBody'], BasicHeaders, Methods_m8ghhl['post']['status']>(prefix, PATH69, POST, option).json(),
        /**
         * 入金予定をゼロ円で作成します
         * @returns OK
         */
        $post: (option: { body: Methods_m8ghhl['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_m8ghhl['post']['resBody'], BasicHeaders, Methods_m8ghhl['post']['status']>(prefix, PATH69, POST, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH69}`,
      },
      /**
       * 入金予約一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_rrzch5['get']['query'], config?: T | undefined }) =>
        fetch<Methods_rrzch5['get']['resBody'], BasicHeaders, Methods_rrzch5['get']['status']>(prefix, PATH67, GET, option).json(),
      /**
       * 入金予約一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_rrzch5['get']['query'], config?: T | undefined }) =>
        fetch<Methods_rrzch5['get']['resBody'], BasicHeaders, Methods_rrzch5['get']['status']>(prefix, PATH67, GET, option).json().then(r => r.body),
      /**
       * 入金予約を追加更新削除します。
       * @returns OK
       */
      put: (option: { body: Methods_rrzch5['put']['reqBody'], query?: Methods_rrzch5['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_rrzch5['put']['resBody'], BasicHeaders, Methods_rrzch5['put']['status']>(prefix, PATH67, PUT, option).json(),
      /**
       * 入金予約を追加更新削除します。
       * @returns OK
       */
      $put: (option: { body: Methods_rrzch5['put']['reqBody'], query?: Methods_rrzch5['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_rrzch5['put']['resBody'], BasicHeaders, Methods_rrzch5['put']['status']>(prefix, PATH67, PUT, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_rrzch5['get']['query'] } | { method: 'put'; query: Methods_rrzch5['put']['query'] } | undefined) =>
        `${prefix}${PATH67}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    domestic_order_prices: {
      bulk_delete: {
        /**
         * 国内発注単価を削除します。
         * @returns OK
         */
        put: (option: { body: Methods_1p07pvd['put']['reqBody'], query?: Methods_1p07pvd['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1p07pvd['put']['resBody'], BasicHeaders, Methods_1p07pvd['put']['status']>(prefix, PATH70, PUT, option).json(),
        /**
         * 国内発注単価を削除します。
         * @returns OK
         */
        $put: (option: { body: Methods_1p07pvd['put']['reqBody'], query?: Methods_1p07pvd['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1p07pvd['put']['resBody'], BasicHeaders, Methods_1p07pvd['put']['status']>(prefix, PATH70, PUT, option).json().then(r => r.body),
        $path: (option?: { method: 'put'; query: Methods_1p07pvd['put']['query'] } | undefined) =>
          `${prefix}${PATH70}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
    },
    domestic_orders: {
      _domestic_order_id: (val1: number) => {
        const prefix1 = `${PATH71}/${val1}`;

        return {
          /**
           * 国内発注を取得します
           * @returns OK
           */
          get: (option?: { query?: Methods_1twa6um['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1twa6um['get']['resBody'], BasicHeaders, Methods_1twa6um['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * 国内発注を取得します
           * @returns OK
           */
          $get: (option?: { query?: Methods_1twa6um['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1twa6um['get']['resBody'], BasicHeaders, Methods_1twa6um['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_1twa6um['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
      print_purchase_order: {
        /**
         * 国内発注書を出力します。
         * @returns OK
         */
        post: (option: { body: Methods_1domdcn['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_1domdcn['post']['resBody'], BasicHeaders, Methods_1domdcn['post']['status']>(prefix, PATH72, POST, option).json(),
        /**
         * 国内発注書を出力します。
         * @returns OK
         */
        $post: (option: { body: Methods_1domdcn['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_1domdcn['post']['resBody'], BasicHeaders, Methods_1domdcn['post']['status']>(prefix, PATH72, POST, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH72}`,
      },
      /**
       * 国内発注一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_128cola['get']['query'], config?: T | undefined }) =>
        fetch<Methods_128cola['get']['resBody'], BasicHeaders, Methods_128cola['get']['status']>(prefix, PATH71, GET, option).json(),
      /**
       * 国内発注一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_128cola['get']['query'], config?: T | undefined }) =>
        fetch<Methods_128cola['get']['resBody'], BasicHeaders, Methods_128cola['get']['status']>(prefix, PATH71, GET, option).json().then(r => r.body),
      /**
       * 国内発注を追加更新削除します。
       * @returns OK
       */
      put: (option: { body: Methods_128cola['put']['reqBody'], query?: Methods_128cola['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_128cola['put']['resBody'], BasicHeaders, Methods_128cola['put']['status']>(prefix, PATH71, PUT, option).json(),
      /**
       * 国内発注を追加更新削除します。
       * @returns OK
       */
      $put: (option: { body: Methods_128cola['put']['reqBody'], query?: Methods_128cola['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_128cola['put']['resBody'], BasicHeaders, Methods_128cola['put']['status']>(prefix, PATH71, PUT, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_128cola['get']['query'] } | { method: 'put'; query: Methods_128cola['put']['query'] } | undefined) =>
        `${prefix}${PATH71}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    email_templates: {
      _email_template_id: (val1: number) => {
        const prefix1 = `${PATH73}/${val1}`;

        return {
          /**
           * Eメールテンプレートを取得します
           * @returns OK
           */
          get: (option?: { query?: Methods_1sqbvae['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1sqbvae['get']['resBody'], BasicHeaders, Methods_1sqbvae['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * Eメールテンプレートを取得します
           * @returns OK
           */
          $get: (option?: { query?: Methods_1sqbvae['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1sqbvae['get']['resBody'], BasicHeaders, Methods_1sqbvae['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_1sqbvae['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
      /**
       * Eメールテンプレート一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_1vzc24u['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1vzc24u['get']['resBody'], BasicHeaders, Methods_1vzc24u['get']['status']>(prefix, PATH73, GET, option).json(),
      /**
       * Eメールテンプレート一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_1vzc24u['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1vzc24u['get']['resBody'], BasicHeaders, Methods_1vzc24u['get']['status']>(prefix, PATH73, GET, option).json().then(r => r.body),
      /**
       * Eメールテンプレートを追加更新削除します。
       * @returns OK
       */
      put: (option: { body: Methods_1vzc24u['put']['reqBody'], query?: Methods_1vzc24u['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1vzc24u['put']['resBody'], BasicHeaders, Methods_1vzc24u['put']['status']>(prefix, PATH73, PUT, option).json(),
      /**
       * Eメールテンプレートを追加更新削除します。
       * @returns OK
       */
      $put: (option: { body: Methods_1vzc24u['put']['reqBody'], query?: Methods_1vzc24u['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1vzc24u['put']['resBody'], BasicHeaders, Methods_1vzc24u['put']['status']>(prefix, PATH73, PUT, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_1vzc24u['get']['query'] } | { method: 'put'; query: Methods_1vzc24u['put']['query'] } | undefined) =>
        `${prefix}${PATH73}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    exchange_contracts: {
      _exchange_contract_id: (val1: number) => {
        const prefix1 = `${PATH74}/${val1}`;

        return {
          /**
           * 為替予約を取得します
           * @returns OK
           */
          get: (option?: { query?: Methods_1kl9go2['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1kl9go2['get']['resBody'], BasicHeaders, Methods_1kl9go2['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * 為替予約を取得します
           * @returns OK
           */
          $get: (option?: { query?: Methods_1kl9go2['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1kl9go2['get']['resBody'], BasicHeaders, Methods_1kl9go2['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_1kl9go2['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
      /**
       * 為替予約一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_1776cx3['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1776cx3['get']['resBody'], BasicHeaders, Methods_1776cx3['get']['status']>(prefix, PATH74, GET, option).json(),
      /**
       * 為替予約一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_1776cx3['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1776cx3['get']['resBody'], BasicHeaders, Methods_1776cx3['get']['status']>(prefix, PATH74, GET, option).json().then(r => r.body),
      /**
       * 為替予約を追加更新削除します。
       * @returns OK
       */
      put: (option: { body: Methods_1776cx3['put']['reqBody'], query?: Methods_1776cx3['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1776cx3['put']['resBody'], BasicHeaders, Methods_1776cx3['put']['status']>(prefix, PATH74, PUT, option).json(),
      /**
       * 為替予約を追加更新削除します。
       * @returns OK
       */
      $put: (option: { body: Methods_1776cx3['put']['reqBody'], query?: Methods_1776cx3['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1776cx3['put']['resBody'], BasicHeaders, Methods_1776cx3['put']['status']>(prefix, PATH74, PUT, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_1776cx3['get']['query'] } | { method: 'put'; query: Methods_1776cx3['put']['query'] } | undefined) =>
        `${prefix}${PATH74}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    export_orders: {
      _invoice_no: (val1: string) => {
        const prefix1 = `${PATH75}/${val1}`;

        return {
          /**
           * 船積受注を取得します
           * @returns OK
           */
          get: (option?: { query?: Methods_1823izy['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1823izy['get']['resBody'], BasicHeaders, Methods_1823izy['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * 船積受注を取得します
           * @returns OK
           */
          $get: (option?: { query?: Methods_1823izy['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1823izy['get']['resBody'], BasicHeaders, Methods_1823izy['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_1823izy['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
      export_invent: {
        /**
         * 商品マスタ登録用データを出力します。
         */
        post: (option: { body: Methods_1jodqu0['post']['reqBody'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_1jodqu0['post']['status']>(prefix, PATH76, POST, option).send(),
        /**
         * 商品マスタ登録用データを出力します。
         */
        $post: (option: { body: Methods_1jodqu0['post']['reqBody'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_1jodqu0['post']['status']>(prefix, PATH76, POST, option).send().then(r => r.body),
        $path: () => `${prefix}${PATH76}`,
      },
      /**
       * 船積受注一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_eef3yk['get']['query'], config?: T | undefined }) =>
        fetch<Methods_eef3yk['get']['resBody'], BasicHeaders, Methods_eef3yk['get']['status']>(prefix, PATH75, GET, option).json(),
      /**
       * 船積受注一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_eef3yk['get']['query'], config?: T | undefined }) =>
        fetch<Methods_eef3yk['get']['resBody'], BasicHeaders, Methods_eef3yk['get']['status']>(prefix, PATH75, GET, option).json().then(r => r.body),
      /**
       * 船積受注を追加更新削除します。
       * @returns OK
       */
      put: (option: { body: Methods_eef3yk['put']['reqBody'], query?: Methods_eef3yk['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_eef3yk['put']['resBody'], BasicHeaders, Methods_eef3yk['put']['status']>(prefix, PATH75, PUT, option).json(),
      /**
       * 船積受注を追加更新削除します。
       * @returns OK
       */
      $put: (option: { body: Methods_eef3yk['put']['reqBody'], query?: Methods_eef3yk['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_eef3yk['put']['resBody'], BasicHeaders, Methods_eef3yk['put']['status']>(prefix, PATH75, PUT, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_eef3yk['get']['query'] } | { method: 'put'; query: Methods_eef3yk['put']['query'] } | undefined) =>
        `${prefix}${PATH75}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    fare_patterns: {
      _fare_pattern_id: (val1: number) => {
        const prefix1 = `${PATH77}/${val1}`;

        return {
          /**
           * 運賃パターンを取得します
           * @returns OK
           */
          get: (option?: { query?: Methods_sk2rry['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_sk2rry['get']['resBody'], BasicHeaders, Methods_sk2rry['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * 運賃パターンを取得します
           * @returns OK
           */
          $get: (option?: { query?: Methods_sk2rry['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_sk2rry['get']['resBody'], BasicHeaders, Methods_sk2rry['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_sk2rry['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
      /**
       * 運賃パターン一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_uq0g28['get']['query'], config?: T | undefined }) =>
        fetch<Methods_uq0g28['get']['resBody'], BasicHeaders, Methods_uq0g28['get']['status']>(prefix, PATH77, GET, option).json(),
      /**
       * 運賃パターン一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_uq0g28['get']['query'], config?: T | undefined }) =>
        fetch<Methods_uq0g28['get']['resBody'], BasicHeaders, Methods_uq0g28['get']['status']>(prefix, PATH77, GET, option).json().then(r => r.body),
      /**
       * 運賃パターンを追加更新削除します。
       * @returns OK
       */
      put: (option: { body: Methods_uq0g28['put']['reqBody'], query?: Methods_uq0g28['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_uq0g28['put']['resBody'], BasicHeaders, Methods_uq0g28['put']['status']>(prefix, PATH77, PUT, option).json(),
      /**
       * 運賃パターンを追加更新削除します。
       * @returns OK
       */
      $put: (option: { body: Methods_uq0g28['put']['reqBody'], query?: Methods_uq0g28['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_uq0g28['put']['resBody'], BasicHeaders, Methods_uq0g28['put']['status']>(prefix, PATH77, PUT, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_uq0g28['get']['query'] } | { method: 'put'; query: Methods_uq0g28['put']['query'] } | undefined) =>
        `${prefix}${PATH77}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    files: {
      /**
       * ファイルをアップロードします。
       * @returns OK
       */
      post: (option: { body: Methods_19v0g2l['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_19v0g2l['post']['resBody'], BasicHeaders, Methods_19v0g2l['post']['status']>(prefix, PATH78, POST, option, 'FormData').json(),
      /**
       * ファイルをアップロードします。
       * @returns OK
       */
      $post: (option: { body: Methods_19v0g2l['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_19v0g2l['post']['resBody'], BasicHeaders, Methods_19v0g2l['post']['status']>(prefix, PATH78, POST, option, 'FormData').json().then(r => r.body),
      $path: () => `${prefix}${PATH78}`,
    },
    foreign_currency_balances: {
      /**
       * 外貨残高一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_1at9l18['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1at9l18['get']['resBody'], BasicHeaders, Methods_1at9l18['get']['status']>(prefix, PATH79, GET, option).json(),
      /**
       * 外貨残高一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_1at9l18['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1at9l18['get']['resBody'], BasicHeaders, Methods_1at9l18['get']['status']>(prefix, PATH79, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_1at9l18['get']['query'] } | undefined) =>
        `${prefix}${PATH79}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    foreign_currency_management: {
      balance: {
        /**
         * 時点残高情報一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_1cau0fp['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1cau0fp['get']['resBody'], BasicHeaders, Methods_1cau0fp['get']['status']>(prefix, PATH81, GET, option).json(),
        /**
         * 時点残高情報一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_1cau0fp['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1cau0fp['get']['resBody'], BasicHeaders, Methods_1cau0fp['get']['status']>(prefix, PATH81, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_1cau0fp['get']['query'] } | undefined) =>
          `${prefix}${PATH81}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      /**
       * 外貨資金繰り一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_y90soy['get']['query'], config?: T | undefined }) =>
        fetch<Methods_y90soy['get']['resBody'], BasicHeaders, Methods_y90soy['get']['status']>(prefix, PATH80, GET, option).json(),
      /**
       * 外貨資金繰り一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_y90soy['get']['query'], config?: T | undefined }) =>
        fetch<Methods_y90soy['get']['resBody'], BasicHeaders, Methods_y90soy['get']['status']>(prefix, PATH80, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_y90soy['get']['query'] } | undefined) =>
        `${prefix}${PATH80}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    foreign_currency_purchases: {
      _foreign_currency_purchase_id: (val1: number | string) => {
        const prefix1 = `${PATH82}/${val1}`;

        return {
          /**
           * 外貨購入を取得します
           * @returns OK
           */
          get: (option?: { query?: Methods_hp6awp['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_hp6awp['get']['resBody'], BasicHeaders, Methods_hp6awp['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * 外貨購入を取得します
           * @returns OK
           */
          $get: (option?: { query?: Methods_hp6awp['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_hp6awp['get']['resBody'], BasicHeaders, Methods_hp6awp['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_hp6awp['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
      /**
       * 外貨購入一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_ahiabb['get']['query'], config?: T | undefined }) =>
        fetch<Methods_ahiabb['get']['resBody'], BasicHeaders, Methods_ahiabb['get']['status']>(prefix, PATH82, GET, option).json(),
      /**
       * 外貨購入一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_ahiabb['get']['query'], config?: T | undefined }) =>
        fetch<Methods_ahiabb['get']['resBody'], BasicHeaders, Methods_ahiabb['get']['status']>(prefix, PATH82, GET, option).json().then(r => r.body),
      /**
       * 外貨購入を追加更新削除します。
       * @returns OK
       */
      put: (option: { body: Methods_ahiabb['put']['reqBody'], query?: Methods_ahiabb['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_ahiabb['put']['resBody'], BasicHeaders, Methods_ahiabb['put']['status']>(prefix, PATH82, PUT, option).json(),
      /**
       * 外貨購入を追加更新削除します。
       * @returns OK
       */
      $put: (option: { body: Methods_ahiabb['put']['reqBody'], query?: Methods_ahiabb['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_ahiabb['put']['resBody'], BasicHeaders, Methods_ahiabb['put']['status']>(prefix, PATH82, PUT, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_ahiabb['get']['query'] } | { method: 'put'; query: Methods_ahiabb['put']['query'] } | undefined) =>
        `${prefix}${PATH82}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    foreign_deposit_receipts: {
      create_deposit: {
        /**
         * 海外入金データの入金登録をします。
         * @returns OK
         */
        post: (option: { body: Methods_1211dtr['post']['reqBody'], query?: Methods_1211dtr['post']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1211dtr['post']['resBody'], BasicHeaders, Methods_1211dtr['post']['status']>(prefix, PATH84, POST, option).json(),
        /**
         * 海外入金データの入金登録をします。
         * @returns OK
         */
        $post: (option: { body: Methods_1211dtr['post']['reqBody'], query?: Methods_1211dtr['post']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1211dtr['post']['resBody'], BasicHeaders, Methods_1211dtr['post']['status']>(prefix, PATH84, POST, option).json().then(r => r.body),
        $path: (option?: { method: 'post'; query: Methods_1211dtr['post']['query'] } | undefined) =>
          `${prefix}${PATH84}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      /**
       * 海外入金データ受信一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_kv9veh['get']['query'], config?: T | undefined }) =>
        fetch<Methods_kv9veh['get']['resBody'], BasicHeaders, Methods_kv9veh['get']['status']>(prefix, PATH83, GET, option).json(),
      /**
       * 海外入金データ受信一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_kv9veh['get']['query'], config?: T | undefined }) =>
        fetch<Methods_kv9veh['get']['resBody'], BasicHeaders, Methods_kv9veh['get']['status']>(prefix, PATH83, GET, option).json().then(r => r.body),
      /**
       * 海外入金データ受信を取り込みます。
       */
      post: (option: { body: Methods_kv9veh['post']['reqBody'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods_kv9veh['post']['status']>(prefix, PATH83, POST, option, 'FormData').send(),
      /**
       * 海外入金データ受信を取り込みます。
       */
      $post: (option: { body: Methods_kv9veh['post']['reqBody'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods_kv9veh['post']['status']>(prefix, PATH83, POST, option, 'FormData').send().then(r => r.body),
      /**
       * 海外入金データ受信を追加更新削除します。
       * @returns OK
       */
      put: (option: { body: Methods_kv9veh['put']['reqBody'], query?: Methods_kv9veh['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_kv9veh['put']['resBody'], BasicHeaders, Methods_kv9veh['put']['status']>(prefix, PATH83, PUT, option).json(),
      /**
       * 海外入金データ受信を追加更新削除します。
       * @returns OK
       */
      $put: (option: { body: Methods_kv9veh['put']['reqBody'], query?: Methods_kv9veh['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_kv9veh['put']['resBody'], BasicHeaders, Methods_kv9veh['put']['status']>(prefix, PATH83, PUT, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_kv9veh['get']['query'] } | { method: 'put'; query: Methods_kv9veh['put']['query'] } | undefined) =>
        `${prefix}${PATH83}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    forwarder_costs: {
      _forwarder_cost_id: (val1: number) => {
        const prefix1 = `${PATH85}/${val1}`;

        return {
          /**
           * フォワーダー費用テンプレートを取得します
           * @returns OK
           */
          get: (option?: { query?: Methods_17wg1gs['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_17wg1gs['get']['resBody'], BasicHeaders, Methods_17wg1gs['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * フォワーダー費用テンプレートを取得します
           * @returns OK
           */
          $get: (option?: { query?: Methods_17wg1gs['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_17wg1gs['get']['resBody'], BasicHeaders, Methods_17wg1gs['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_17wg1gs['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
      /**
       * フォワーダー費用テンプレート一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_lfhonh['get']['query'], config?: T | undefined }) =>
        fetch<Methods_lfhonh['get']['resBody'], BasicHeaders, Methods_lfhonh['get']['status']>(prefix, PATH85, GET, option).json(),
      /**
       * フォワーダー費用テンプレート一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_lfhonh['get']['query'], config?: T | undefined }) =>
        fetch<Methods_lfhonh['get']['resBody'], BasicHeaders, Methods_lfhonh['get']['status']>(prefix, PATH85, GET, option).json().then(r => r.body),
      /**
       * フォワーダー費用テンプレートを追加更新削除します。
       * @returns OK
       */
      put: (option: { body: Methods_lfhonh['put']['reqBody'], query?: Methods_lfhonh['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_lfhonh['put']['resBody'], BasicHeaders, Methods_lfhonh['put']['status']>(prefix, PATH85, PUT, option).json(),
      /**
       * フォワーダー費用テンプレートを追加更新削除します。
       * @returns OK
       */
      $put: (option: { body: Methods_lfhonh['put']['reqBody'], query?: Methods_lfhonh['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_lfhonh['put']['resBody'], BasicHeaders, Methods_lfhonh['put']['status']>(prefix, PATH85, PUT, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_lfhonh['get']['query'] } | { method: 'put'; query: Methods_lfhonh['put']['query'] } | undefined) =>
        `${prefix}${PATH85}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    forwarder_recruits: {
      _forwarder_recruit_id: (val1: number) => {
        const prefix1 = `${PATH86}/${val1}`;

        return {
          /**
           * フォワーダー採用を取得します
           * @returns OK
           */
          get: (option?: { query?: Methods_107m0hq['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_107m0hq['get']['resBody'], BasicHeaders, Methods_107m0hq['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * フォワーダー採用を取得します
           * @returns OK
           */
          $get: (option?: { query?: Methods_107m0hq['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_107m0hq['get']['resBody'], BasicHeaders, Methods_107m0hq['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_107m0hq['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
      /**
       * フォワーダー採用一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_89v1pu['get']['query'], config?: T | undefined }) =>
        fetch<Methods_89v1pu['get']['resBody'], BasicHeaders, Methods_89v1pu['get']['status']>(prefix, PATH86, GET, option).json(),
      /**
       * フォワーダー採用一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_89v1pu['get']['query'], config?: T | undefined }) =>
        fetch<Methods_89v1pu['get']['resBody'], BasicHeaders, Methods_89v1pu['get']['status']>(prefix, PATH86, GET, option).json().then(r => r.body),
      /**
       * フォワーダー採用を追加更新削除します。
       * @returns OK
       */
      put: (option: { body: Methods_89v1pu['put']['reqBody'], query?: Methods_89v1pu['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_89v1pu['put']['resBody'], BasicHeaders, Methods_89v1pu['put']['status']>(prefix, PATH86, PUT, option).json(),
      /**
       * フォワーダー採用を追加更新削除します。
       * @returns OK
       */
      $put: (option: { body: Methods_89v1pu['put']['reqBody'], query?: Methods_89v1pu['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_89v1pu['put']['resBody'], BasicHeaders, Methods_89v1pu['put']['status']>(prefix, PATH86, PUT, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_89v1pu['get']['query'] } | { method: 'put'; query: Methods_89v1pu['put']['query'] } | undefined) =>
        `${prefix}${PATH86}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    free_times: {
      _free_time_id: (val1: number) => {
        const prefix1 = `${PATH87}/${val1}`;

        return {
          /**
           * フリータイムを取得します
           * @returns OK
           */
          get: (option?: { query?: Methods_1anmaaq['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1anmaaq['get']['resBody'], BasicHeaders, Methods_1anmaaq['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * フリータイムを取得します
           * @returns OK
           */
          $get: (option?: { query?: Methods_1anmaaq['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1anmaaq['get']['resBody'], BasicHeaders, Methods_1anmaaq['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_1anmaaq['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
      /**
       * フリータイム一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_g0gb4t['get']['query'], config?: T | undefined }) =>
        fetch<Methods_g0gb4t['get']['resBody'], BasicHeaders, Methods_g0gb4t['get']['status']>(prefix, PATH87, GET, option).json(),
      /**
       * フリータイム一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_g0gb4t['get']['query'], config?: T | undefined }) =>
        fetch<Methods_g0gb4t['get']['resBody'], BasicHeaders, Methods_g0gb4t['get']['status']>(prefix, PATH87, GET, option).json().then(r => r.body),
      /**
       * フリータイムを追加更新削除します。
       * @returns OK
       */
      put: (option: { body: Methods_g0gb4t['put']['reqBody'], query?: Methods_g0gb4t['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_g0gb4t['put']['resBody'], BasicHeaders, Methods_g0gb4t['put']['status']>(prefix, PATH87, PUT, option).json(),
      /**
       * フリータイムを追加更新削除します。
       * @returns OK
       */
      $put: (option: { body: Methods_g0gb4t['put']['reqBody'], query?: Methods_g0gb4t['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_g0gb4t['put']['resBody'], BasicHeaders, Methods_g0gb4t['put']['status']>(prefix, PATH87, PUT, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_g0gb4t['get']['query'] } | { method: 'put'; query: Methods_g0gb4t['put']['query'] } | undefined) =>
        `${prefix}${PATH87}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    freight_names: {
      /**
       * フレイト名称一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_182fuey['get']['query'], config?: T | undefined }) =>
        fetch<Methods_182fuey['get']['resBody'], BasicHeaders, Methods_182fuey['get']['status']>(prefix, PATH88, GET, option).json(),
      /**
       * フレイト名称一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_182fuey['get']['query'], config?: T | undefined }) =>
        fetch<Methods_182fuey['get']['resBody'], BasicHeaders, Methods_182fuey['get']['status']>(prefix, PATH88, GET, option).json().then(r => r.body),
      /**
       * フレイト名称を追加更新削除します。
       * @returns OK
       */
      put: (option: { body: Methods_182fuey['put']['reqBody'], query?: Methods_182fuey['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_182fuey['put']['resBody'], BasicHeaders, Methods_182fuey['put']['status']>(prefix, PATH88, PUT, option).json(),
      /**
       * フレイト名称を追加更新削除します。
       * @returns OK
       */
      $put: (option: { body: Methods_182fuey['put']['reqBody'], query?: Methods_182fuey['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_182fuey['put']['resBody'], BasicHeaders, Methods_182fuey['put']['status']>(prefix, PATH88, PUT, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_182fuey['get']['query'] } | { method: 'put'; query: Methods_182fuey['put']['query'] } | undefined) =>
        `${prefix}${PATH88}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    generic_searches: {
      _search_id: (val1: number) => {
        const prefix1 = `${PATH89}/${val1}`;

        return {
          /**
           * 汎用データを取得します
           * @returns OK
           */
          get: (option: { query: Methods_1ej4ncz['get']['query'], config?: T | undefined }) =>
            fetch<Methods_1ej4ncz['get']['resBody'], BasicHeaders, Methods_1ej4ncz['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * 汎用データを取得します
           * @returns OK
           */
          $get: (option: { query: Methods_1ej4ncz['get']['query'], config?: T | undefined }) =>
            fetch<Methods_1ej4ncz['get']['resBody'], BasicHeaders, Methods_1ej4ncz['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_1ej4ncz['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
    },
    gradings: {
      _grading_id: (val1: number) => {
        const prefix1 = `${PATH90}/${val1}`;

        return {
          /**
           * 格付を取得します
           * @returns OK
           */
          get: (option?: { query?: Methods_vhur5i['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_vhur5i['get']['resBody'], BasicHeaders, Methods_vhur5i['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * 格付を取得します
           * @returns OK
           */
          $get: (option?: { query?: Methods_vhur5i['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_vhur5i['get']['resBody'], BasicHeaders, Methods_vhur5i['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_vhur5i['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
      /**
       * 格付一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_q7gm3j['get']['query'], config?: T | undefined }) =>
        fetch<Methods_q7gm3j['get']['resBody'], BasicHeaders, Methods_q7gm3j['get']['status']>(prefix, PATH90, GET, option).json(),
      /**
       * 格付一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_q7gm3j['get']['query'], config?: T | undefined }) =>
        fetch<Methods_q7gm3j['get']['resBody'], BasicHeaders, Methods_q7gm3j['get']['status']>(prefix, PATH90, GET, option).json().then(r => r.body),
      /**
       * 格付を追加更新削除します。
       * @returns OK
       */
      put: (option: { body: Methods_q7gm3j['put']['reqBody'], query?: Methods_q7gm3j['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_q7gm3j['put']['resBody'], BasicHeaders, Methods_q7gm3j['put']['status']>(prefix, PATH90, PUT, option).json(),
      /**
       * 格付を追加更新削除します。
       * @returns OK
       */
      $put: (option: { body: Methods_q7gm3j['put']['reqBody'], query?: Methods_q7gm3j['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_q7gm3j['put']['resBody'], BasicHeaders, Methods_q7gm3j['put']['status']>(prefix, PATH90, PUT, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_q7gm3j['get']['query'] } | { method: 'put'; query: Methods_q7gm3j['put']['query'] } | undefined) =>
        `${prefix}${PATH90}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    import_costs: {
      _no: (val1: string) => {
        const prefix1 = `${PATH91}/${val1}`;

        return {
          /**
           * コストを取得します
           * @returns OK
           */
          get: (option?: { query?: Methods_lj8le8['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_lj8le8['get']['resBody'], BasicHeaders, Methods_lj8le8['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * コストを取得します
           * @returns OK
           */
          $get: (option?: { query?: Methods_lj8le8['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_lj8le8['get']['resBody'], BasicHeaders, Methods_lj8le8['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_lj8le8['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
      /**
       * コストを追加更新削除します。
       * @returns OK
       */
      put: (option: { body: Methods_xfhc62['put']['reqBody'], query?: Methods_xfhc62['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_xfhc62['put']['resBody'], BasicHeaders, Methods_xfhc62['put']['status']>(prefix, PATH91, PUT, option).json(),
      /**
       * コストを追加更新削除します。
       * @returns OK
       */
      $put: (option: { body: Methods_xfhc62['put']['reqBody'], query?: Methods_xfhc62['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_xfhc62['put']['resBody'], BasicHeaders, Methods_xfhc62['put']['status']>(prefix, PATH91, PUT, option).json().then(r => r.body),
      $path: (option?: { method: 'put'; query: Methods_xfhc62['put']['query'] } | undefined) =>
        `${prefix}${PATH91}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    import_payments: {
      detail: {
        /**
         * 輸入支払予定・実績入力一覧
         * @returns OK
         */
        get: (option: { query: Methods_8we0sx['get']['query'], config?: T | undefined }) =>
          fetch<Methods_8we0sx['get']['resBody'], BasicHeaders, Methods_8we0sx['get']['status']>(prefix, PATH93, GET, option).json(),
        /**
         * 輸入支払予定・実績入力一覧
         * @returns OK
         */
        $get: (option: { query: Methods_8we0sx['get']['query'], config?: T | undefined }) =>
          fetch<Methods_8we0sx['get']['resBody'], BasicHeaders, Methods_8we0sx['get']['status']>(prefix, PATH93, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_8we0sx['get']['query'] } | undefined) =>
          `${prefix}${PATH93}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      offset: {
        /**
         * 輸入支払予定・実績入力一覧
         * @returns OK
         */
        get: (option: { query: Methods_f36y0j['get']['query'], config?: T | undefined }) =>
          fetch<Methods_f36y0j['get']['resBody'], BasicHeaders, Methods_f36y0j['get']['status']>(prefix, PATH94, GET, option).json(),
        /**
         * 輸入支払予定・実績入力一覧
         * @returns OK
         */
        $get: (option: { query: Methods_f36y0j['get']['query'], config?: T | undefined }) =>
          fetch<Methods_f36y0j['get']['resBody'], BasicHeaders, Methods_f36y0j['get']['status']>(prefix, PATH94, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_f36y0j['get']['query'] } | undefined) =>
          `${prefix}${PATH94}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      output_payment_file: {
        /**
         * 海外のインターネットバンキング用支払データを出力します。
         */
        post: (option: { body: Methods_vg5pmf['post']['reqBody'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_vg5pmf['post']['status']>(prefix, PATH95, POST, option).send(),
        /**
         * 海外のインターネットバンキング用支払データを出力します。
         */
        $post: (option: { body: Methods_vg5pmf['post']['reqBody'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_vg5pmf['post']['status']>(prefix, PATH95, POST, option).send().then(r => r.body),
        $path: () => `${prefix}${PATH95}`,
      },
      print_payment_schedule_check_list: {
        /**
         * 支払予定チェックリストを出力します。
         * @returns OK
         */
        post: (option: { body: Methods_qyhyda['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_qyhyda['post']['resBody'], BasicHeaders, Methods_qyhyda['post']['status']>(prefix, PATH96, POST, option).json(),
        /**
         * 支払予定チェックリストを出力します。
         * @returns OK
         */
        $post: (option: { body: Methods_qyhyda['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_qyhyda['post']['resBody'], BasicHeaders, Methods_qyhyda['post']['status']>(prefix, PATH96, POST, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH96}`,
      },
      /**
       * 輸入支払予定・実績入力一覧
       * @returns OK
       */
      get: (option: { query: Methods_19llun3['get']['query'], config?: T | undefined }) =>
        fetch<Methods_19llun3['get']['resBody'], BasicHeaders, Methods_19llun3['get']['status']>(prefix, PATH92, GET, option).json(),
      /**
       * 輸入支払予定・実績入力一覧
       * @returns OK
       */
      $get: (option: { query: Methods_19llun3['get']['query'], config?: T | undefined }) =>
        fetch<Methods_19llun3['get']['resBody'], BasicHeaders, Methods_19llun3['get']['status']>(prefix, PATH92, GET, option).json().then(r => r.body),
      /**
       * 支払実績を追加更新削除します。
       * @returns OK
       */
      put: (option: { body: Methods_19llun3['put']['reqBody'], query?: Methods_19llun3['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_19llun3['put']['resBody'], BasicHeaders, Methods_19llun3['put']['status']>(prefix, PATH92, PUT, option).json(),
      /**
       * 支払実績を追加更新削除します。
       * @returns OK
       */
      $put: (option: { body: Methods_19llun3['put']['reqBody'], query?: Methods_19llun3['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_19llun3['put']['resBody'], BasicHeaders, Methods_19llun3['put']['status']>(prefix, PATH92, PUT, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_19llun3['get']['query'] } | { method: 'put'; query: Methods_19llun3['put']['query'] } | undefined) =>
        `${prefix}${PATH92}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    import_prices: {
      bulk_delete: {
        /**
         * 輸入購買単価を削除します。
         * @returns OK
         */
        put: (option: { body: Methods_1hayn83['put']['reqBody'], query?: Methods_1hayn83['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1hayn83['put']['resBody'], BasicHeaders, Methods_1hayn83['put']['status']>(prefix, PATH97, PUT, option).json(),
        /**
         * 輸入購買単価を削除します。
         * @returns OK
         */
        $put: (option: { body: Methods_1hayn83['put']['reqBody'], query?: Methods_1hayn83['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1hayn83['put']['resBody'], BasicHeaders, Methods_1hayn83['put']['status']>(prefix, PATH97, PUT, option).json().then(r => r.body),
        $path: (option?: { method: 'put'; query: Methods_1hayn83['put']['query'] } | undefined) =>
          `${prefix}${PATH97}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
    },
    invent_arrival_history: {
      /**
       * 商品入荷履歴取得一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_13ulb8f['get']['query'], config?: T | undefined }) =>
        fetch<Methods_13ulb8f['get']['resBody'], BasicHeaders, Methods_13ulb8f['get']['status']>(prefix, PATH98, GET, option).json(),
      /**
       * 商品入荷履歴取得一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_13ulb8f['get']['query'], config?: T | undefined }) =>
        fetch<Methods_13ulb8f['get']['resBody'], BasicHeaders, Methods_13ulb8f['get']['status']>(prefix, PATH98, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_13ulb8f['get']['query'] } | undefined) =>
        `${prefix}${PATH98}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    invent_arrival_history_order: {
      /**
       * 商品入荷履歴取得一覧を返します
       * @returns OK
       */
      get: (option?: { query?: Methods_1svstlk['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_1svstlk['get']['resBody'], BasicHeaders, Methods_1svstlk['get']['status']>(prefix, PATH99, GET, option).json(),
      /**
       * 商品入荷履歴取得一覧を返します
       * @returns OK
       */
      $get: (option?: { query?: Methods_1svstlk['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_1svstlk['get']['resBody'], BasicHeaders, Methods_1svstlk['get']['status']>(prefix, PATH99, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_1svstlk['get']['query'] } | undefined) =>
        `${prefix}${PATH99}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    invent_components: {
      _invent_component_id: (val1: number) => {
        const prefix1 = `${PATH100}/${val1}`;

        return {
          /**
           * 部品表を取得します
           * @returns OK
           */
          get: (option?: { query?: Methods_1tyliz8['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1tyliz8['get']['resBody'], BasicHeaders, Methods_1tyliz8['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * 部品表を取得します
           * @returns OK
           */
          $get: (option?: { query?: Methods_1tyliz8['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1tyliz8['get']['resBody'], BasicHeaders, Methods_1tyliz8['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_1tyliz8['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
      /**
       * 部品表一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_eqqw93['get']['query'], config?: T | undefined }) =>
        fetch<Methods_eqqw93['get']['resBody'], BasicHeaders, Methods_eqqw93['get']['status']>(prefix, PATH100, GET, option).json(),
      /**
       * 部品表一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_eqqw93['get']['query'], config?: T | undefined }) =>
        fetch<Methods_eqqw93['get']['resBody'], BasicHeaders, Methods_eqqw93['get']['status']>(prefix, PATH100, GET, option).json().then(r => r.body),
      /**
       * 部品表を追加更新削除します。
       * @returns OK
       */
      put: (option: { body: Methods_eqqw93['put']['reqBody'], query?: Methods_eqqw93['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_eqqw93['put']['resBody'], BasicHeaders, Methods_eqqw93['put']['status']>(prefix, PATH100, PUT, option).json(),
      /**
       * 部品表を追加更新削除します。
       * @returns OK
       */
      $put: (option: { body: Methods_eqqw93['put']['reqBody'], query?: Methods_eqqw93['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_eqqw93['put']['resBody'], BasicHeaders, Methods_eqqw93['put']['status']>(prefix, PATH100, PUT, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_eqqw93['get']['query'] } | { method: 'put'; query: Methods_eqqw93['put']['query'] } | undefined) =>
        `${prefix}${PATH100}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    invent_memos: {
      _invent_memo_id: (val1: number) => {
        const prefix1 = `${PATH101}/${val1}`;

        return {
          /**
           * 商品メモを取得します
           * @returns OK
           */
          get: (option?: { query?: Methods_14avhgq['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_14avhgq['get']['resBody'], BasicHeaders, Methods_14avhgq['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * 商品メモを取得します
           * @returns OK
           */
          $get: (option?: { query?: Methods_14avhgq['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_14avhgq['get']['resBody'], BasicHeaders, Methods_14avhgq['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_14avhgq['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
      /**
       * 商品メモ一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_t34gga['get']['query'], config?: T | undefined }) =>
        fetch<Methods_t34gga['get']['resBody'], BasicHeaders, Methods_t34gga['get']['status']>(prefix, PATH101, GET, option).json(),
      /**
       * 商品メモ一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_t34gga['get']['query'], config?: T | undefined }) =>
        fetch<Methods_t34gga['get']['resBody'], BasicHeaders, Methods_t34gga['get']['status']>(prefix, PATH101, GET, option).json().then(r => r.body),
      /**
       * 商品メモを追加更新削除します。
       * @returns OK
       */
      put: (option: { body: Methods_t34gga['put']['reqBody'], query?: Methods_t34gga['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_t34gga['put']['resBody'], BasicHeaders, Methods_t34gga['put']['status']>(prefix, PATH101, PUT, option).json(),
      /**
       * 商品メモを追加更新削除します。
       * @returns OK
       */
      $put: (option: { body: Methods_t34gga['put']['reqBody'], query?: Methods_t34gga['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_t34gga['put']['resBody'], BasicHeaders, Methods_t34gga['put']['status']>(prefix, PATH101, PUT, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_t34gga['get']['query'] } | { method: 'put'; query: Methods_t34gga['put']['query'] } | undefined) =>
        `${prefix}${PATH101}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    invent_web_cutouts: {
      bulk: {
        /**
         * WEB在庫切出を一括登録更新します。ロックの取得を指定した場合、ロックの取得に成功した後、直ちにそのロックは解放されます。
         * @returns OK
         */
        post: (option: { body: Methods_gsajym['post']['reqBody'], query?: Methods_gsajym['post']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_gsajym['post']['resBody'], BasicHeaders, Methods_gsajym['post']['status']>(prefix, PATH102, POST, option, 'FormData').json(),
        /**
         * WEB在庫切出を一括登録更新します。ロックの取得を指定した場合、ロックの取得に成功した後、直ちにそのロックは解放されます。
         * @returns OK
         */
        $post: (option: { body: Methods_gsajym['post']['reqBody'], query?: Methods_gsajym['post']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_gsajym['post']['resBody'], BasicHeaders, Methods_gsajym['post']['status']>(prefix, PATH102, POST, option, 'FormData').json().then(r => r.body),
        $path: (option?: { method: 'post'; query: Methods_gsajym['post']['query'] } | undefined) =>
          `${prefix}${PATH102}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
    },
    inventory_result_details: {
      /**
       * 棚卸実棚一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_1urcjhj['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1urcjhj['get']['resBody'], BasicHeaders, Methods_1urcjhj['get']['status']>(prefix, PATH103, GET, option).json(),
      /**
       * 棚卸実棚一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_1urcjhj['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1urcjhj['get']['resBody'], BasicHeaders, Methods_1urcjhj['get']['status']>(prefix, PATH103, GET, option).json().then(r => r.body),
      /**
       * 棚卸実棚を追加更新削除します。
       * @returns OK
       */
      put: (option: { body: Methods_1urcjhj['put']['reqBody'], query?: Methods_1urcjhj['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1urcjhj['put']['resBody'], BasicHeaders, Methods_1urcjhj['put']['status']>(prefix, PATH103, PUT, option).json(),
      /**
       * 棚卸実棚を追加更新削除します。
       * @returns OK
       */
      $put: (option: { body: Methods_1urcjhj['put']['reqBody'], query?: Methods_1urcjhj['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1urcjhj['put']['resBody'], BasicHeaders, Methods_1urcjhj['put']['status']>(prefix, PATH103, PUT, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_1urcjhj['get']['query'] } | { method: 'put'; query: Methods_1urcjhj['put']['query'] } | undefined) =>
        `${prefix}${PATH103}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    inventory_results: {
      _inventory_result_id: (val1: number) => {
        const prefix1 = `${PATH104}/${val1}`;

        return {
          /**
           * 棚卸情報を取得します
           * @returns OK
           */
          get: (option?: { query?: Methods_1r7z938['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1r7z938['get']['resBody'], BasicHeaders, Methods_1r7z938['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * 棚卸情報を取得します
           * @returns OK
           */
          $get: (option?: { query?: Methods_1r7z938['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1r7z938['get']['resBody'], BasicHeaders, Methods_1r7z938['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_1r7z938['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
      export_list: {
        /**
         * 棚卸リストを出力します。
         */
        post: (option?: { config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods_b18j07['post']['status']>(prefix, PATH105, POST, option).send(),
        /**
         * 棚卸リストを出力します。
         */
        $post: (option?: { config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods_b18j07['post']['status']>(prefix, PATH105, POST, option).send().then(r => r.body),
        $path: () => `${prefix}${PATH105}`,
      },
      /**
       * 棚卸実績一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_7jpxgb['get']['query'], config?: T | undefined }) =>
        fetch<Methods_7jpxgb['get']['resBody'], BasicHeaders, Methods_7jpxgb['get']['status']>(prefix, PATH104, GET, option).json(),
      /**
       * 棚卸実績一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_7jpxgb['get']['query'], config?: T | undefined }) =>
        fetch<Methods_7jpxgb['get']['resBody'], BasicHeaders, Methods_7jpxgb['get']['status']>(prefix, PATH104, GET, option).json().then(r => r.body),
      /**
       * 棚卸実績を追加更新削除します。
       * @returns OK
       */
      put: (option: { body: Methods_7jpxgb['put']['reqBody'], query?: Methods_7jpxgb['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_7jpxgb['put']['resBody'], BasicHeaders, Methods_7jpxgb['put']['status']>(prefix, PATH104, PUT, option).json(),
      /**
       * 棚卸実績を追加更新削除します。
       * @returns OK
       */
      $put: (option: { body: Methods_7jpxgb['put']['reqBody'], query?: Methods_7jpxgb['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_7jpxgb['put']['resBody'], BasicHeaders, Methods_7jpxgb['put']['status']>(prefix, PATH104, PUT, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_7jpxgb['get']['query'] } | { method: 'put'; query: Methods_7jpxgb['put']['query'] } | undefined) =>
        `${prefix}${PATH104}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    invents: {
      _invent_id: (val1: number) => {
        const prefix1 = `${PATH106}/${val1}`;

        return {
          image: {
            /**
             * 商品画像を取得します
             * @returns OK
             */
            get: (option: { query: Methods_1wrlike['get']['query'], config?: T | undefined }) =>
              fetch<Methods_1wrlike['get']['resBody'], BasicHeaders, Methods_1wrlike['get']['status']>(prefix, `${prefix1}${PATH107}`, GET, option).blob(),
            /**
             * 商品画像を取得します
             * @returns OK
             */
            $get: (option: { query: Methods_1wrlike['get']['query'], config?: T | undefined }) =>
              fetch<Methods_1wrlike['get']['resBody'], BasicHeaders, Methods_1wrlike['get']['status']>(prefix, `${prefix1}${PATH107}`, GET, option).blob().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_1wrlike['get']['query'] } | undefined) =>
              `${prefix}${prefix1}${PATH107}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          },
          update_domestic_order_price: {
            /**
             * 国内発注単価単価を追加更新します。対象の商品のロックが取得されていなければ、失敗します。
             * @returns OK
             */
            post: (option: { body: Methods_1k42cf0['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods_1k42cf0['post']['resBody'], BasicHeaders, Methods_1k42cf0['post']['status']>(prefix, `${prefix1}${PATH108}`, POST, option).json(),
            /**
             * 国内発注単価単価を追加更新します。対象の商品のロックが取得されていなければ、失敗します。
             * @returns OK
             */
            $post: (option: { body: Methods_1k42cf0['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods_1k42cf0['post']['resBody'], BasicHeaders, Methods_1k42cf0['post']['status']>(prefix, `${prefix1}${PATH108}`, POST, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH108}`,
          },
          update_import_price: {
            /**
             * 輸入購買単価を追加更新します。対象の商品のロックが取得されていなければ、失敗します。
             * @returns OK
             */
            post: (option: { body: Methods_ufa386['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods_ufa386['post']['resBody'], BasicHeaders, Methods_ufa386['post']['status']>(prefix, `${prefix1}${PATH109}`, POST, option).json(),
            /**
             * 輸入購買単価を追加更新します。対象の商品のロックが取得されていなければ、失敗します。
             * @returns OK
             */
            $post: (option: { body: Methods_ufa386['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods_ufa386['post']['resBody'], BasicHeaders, Methods_ufa386['post']['status']>(prefix, `${prefix1}${PATH109}`, POST, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH109}`,
          },
          update_sales_price: {
            /**
             * 商品販売単価を追加更新します。対象の商品のロックが取得されていなければ、失敗します。
             * @returns OK
             */
            post: (option: { body: Methods_1icuu85['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods_1icuu85['post']['resBody'], BasicHeaders, Methods_1icuu85['post']['status']>(prefix, `${prefix1}${PATH110}`, POST, option).json(),
            /**
             * 商品販売単価を追加更新します。対象の商品のロックが取得されていなければ、失敗します。
             * @returns OK
             */
            $post: (option: { body: Methods_1icuu85['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods_1icuu85['post']['resBody'], BasicHeaders, Methods_1icuu85['post']['status']>(prefix, `${prefix1}${PATH110}`, POST, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH110}`,
          },
          /**
           * 商品を取得します。新たなロックを取得する前に、同一テーブルの同一ロックキー1に対する同一担当者によるロックは解除されます。
           * @returns OK
           */
          get: (option?: { query?: Methods_1gs8hxo['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1gs8hxo['get']['resBody'], BasicHeaders, Methods_1gs8hxo['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * 商品を取得します。新たなロックを取得する前に、同一テーブルの同一ロックキー1に対する同一担当者によるロックは解除されます。
           * @returns OK
           */
          $get: (option?: { query?: Methods_1gs8hxo['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1gs8hxo['get']['resBody'], BasicHeaders, Methods_1gs8hxo['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_1gs8hxo['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
      bulk_insert: {
        /**
         * 商品を一括登録します。
         * @returns OK
         */
        post: (option: { body: Methods_182a0fw['post']['reqBody'], query?: Methods_182a0fw['post']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_182a0fw['post']['resBody'], BasicHeaders, Methods_182a0fw['post']['status']>(prefix, PATH111, POST, option, 'FormData').json(),
        /**
         * 商品を一括登録します。
         * @returns OK
         */
        $post: (option: { body: Methods_182a0fw['post']['reqBody'], query?: Methods_182a0fw['post']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_182a0fw['post']['resBody'], BasicHeaders, Methods_182a0fw['post']['status']>(prefix, PATH111, POST, option, 'FormData').json().then(r => r.body),
        $path: (option?: { method: 'post'; query: Methods_182a0fw['post']['query'] } | undefined) =>
          `${prefix}${PATH111}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      bulk_update: {
        /**
         * 商品を一括更新します。ロックの取得を指定した場合、ロックの取得に成功した後、直ちにそのロックは解放されます。
         * @returns OK
         */
        post: (option: { body: Methods_r0txs0['post']['reqBody'], query?: Methods_r0txs0['post']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_r0txs0['post']['resBody'], BasicHeaders, Methods_r0txs0['post']['status']>(prefix, PATH112, POST, option, 'FormData').json(),
        /**
         * 商品を一括更新します。ロックの取得を指定した場合、ロックの取得に成功した後、直ちにそのロックは解放されます。
         * @returns OK
         */
        $post: (option: { body: Methods_r0txs0['post']['reqBody'], query?: Methods_r0txs0['post']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_r0txs0['post']['resBody'], BasicHeaders, Methods_r0txs0['post']['status']>(prefix, PATH112, POST, option, 'FormData').json().then(r => r.body),
        $path: (option?: { method: 'post'; query: Methods_r0txs0['post']['query'] } | undefined) =>
          `${prefix}${PATH112}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      bulk_update_async: {
        /**
         * 商品を一括更新します。応答には user_logs も含まれます。embed はバッチ出力に対する指示になります。
         * @returns OK
         */
        post: (option: { body: Methods_q6k77r['post']['reqBody'], query?: Methods_q6k77r['post']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_q6k77r['post']['resBody'], BasicHeaders, Methods_q6k77r['post']['status']>(prefix, PATH113, POST, option, 'FormData').json(),
        /**
         * 商品を一括更新します。応答には user_logs も含まれます。embed はバッチ出力に対する指示になります。
         * @returns OK
         */
        $post: (option: { body: Methods_q6k77r['post']['reqBody'], query?: Methods_q6k77r['post']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_q6k77r['post']['resBody'], BasicHeaders, Methods_q6k77r['post']['status']>(prefix, PATH113, POST, option, 'FormData').json().then(r => r.body),
        $path: (option?: { method: 'post'; query: Methods_q6k77r['post']['query'] } | undefined) =>
          `${prefix}${PATH113}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      export_idm: {
        /**
         * 品番データを出力します。
         */
        post: (option: { body: Methods_o4qvw9['post']['reqBody'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_o4qvw9['post']['status']>(prefix, PATH114, POST, option).send(),
        /**
         * 品番データを出力します。
         */
        $post: (option: { body: Methods_o4qvw9['post']['reqBody'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_o4qvw9['post']['status']>(prefix, PATH114, POST, option).send().then(r => r.body),
        $path: () => `${prefix}${PATH114}`,
      },
      export_jan: {
        /**
         * 商品JAN送付リストを出力します。ロックの取得を指定した場合、ロックの取得に成功した後、直ちにそのロックは解放されます。
         * @returns OK
         */
        post: (option?: { query?: Methods_1yw7u8['post']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_1yw7u8['post']['resBody'], BasicHeaders, Methods_1yw7u8['post']['status']>(prefix, PATH115, POST, option).json(),
        /**
         * 商品JAN送付リストを出力します。ロックの取得を指定した場合、ロックの取得に成功した後、直ちにそのロックは解放されます。
         * @returns OK
         */
        $post: (option?: { query?: Methods_1yw7u8['post']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_1yw7u8['post']['resBody'], BasicHeaders, Methods_1yw7u8['post']['status']>(prefix, PATH115, POST, option).json().then(r => r.body),
        $path: (option?: { method: 'post'; query: Methods_1yw7u8['post']['query'] } | undefined) =>
          `${prefix}${PATH115}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      /**
       * 商品一覧を返します。新たなロックを取得する前に、同一テーブルの同一ロックキー1に対する同一担当者によるロックは解除されます。
       * @returns OK
       */
      get: (option: { query: Methods_azrjx3['get']['query'], config?: T | undefined }) =>
        fetch<Methods_azrjx3['get']['resBody'], BasicHeaders, Methods_azrjx3['get']['status']>(prefix, PATH106, GET, option).json(),
      /**
       * 商品一覧を返します。新たなロックを取得する前に、同一テーブルの同一ロックキー1に対する同一担当者によるロックは解除されます。
       * @returns OK
       */
      $get: (option: { query: Methods_azrjx3['get']['query'], config?: T | undefined }) =>
        fetch<Methods_azrjx3['get']['resBody'], BasicHeaders, Methods_azrjx3['get']['status']>(prefix, PATH106, GET, option).json().then(r => r.body),
      /**
       * 商品を追加更新削除します。
       * @returns OK
       */
      put: (option: { body: Methods_azrjx3['put']['reqBody'], query?: Methods_azrjx3['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_azrjx3['put']['resBody'], BasicHeaders, Methods_azrjx3['put']['status']>(prefix, PATH106, PUT, option).json(),
      /**
       * 商品を追加更新削除します。
       * @returns OK
       */
      $put: (option: { body: Methods_azrjx3['put']['reqBody'], query?: Methods_azrjx3['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_azrjx3['put']['resBody'], BasicHeaders, Methods_azrjx3['put']['status']>(prefix, PATH106, PUT, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_azrjx3['get']['query'] } | { method: 'put'; query: Methods_azrjx3['put']['query'] } | undefined) =>
        `${prefix}${PATH106}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    label_boxes: {
      _label_box_id: (val1: number) => {
        const prefix1 = `${PATH116}/${val1}`;

        return {
          /**
           * 函ラベルを取得します
           * @returns OK
           */
          get: (option?: { query?: Methods_olhs0t['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_olhs0t['get']['resBody'], BasicHeaders, Methods_olhs0t['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * 函ラベルを取得します
           * @returns OK
           */
          $get: (option?: { query?: Methods_olhs0t['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_olhs0t['get']['resBody'], BasicHeaders, Methods_olhs0t['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_olhs0t['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
      /**
       * 函ラベル一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_190ifze['get']['query'], config?: T | undefined }) =>
        fetch<Methods_190ifze['get']['resBody'], BasicHeaders, Methods_190ifze['get']['status']>(prefix, PATH116, GET, option).json(),
      /**
       * 函ラベル一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_190ifze['get']['query'], config?: T | undefined }) =>
        fetch<Methods_190ifze['get']['resBody'], BasicHeaders, Methods_190ifze['get']['status']>(prefix, PATH116, GET, option).json().then(r => r.body),
      /**
       * 函ラベルを追加更新削除します。
       * @returns OK
       */
      put: (option: { body: Methods_190ifze['put']['reqBody'], query?: Methods_190ifze['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_190ifze['put']['resBody'], BasicHeaders, Methods_190ifze['put']['status']>(prefix, PATH116, PUT, option).json(),
      /**
       * 函ラベルを追加更新削除します。
       * @returns OK
       */
      $put: (option: { body: Methods_190ifze['put']['reqBody'], query?: Methods_190ifze['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_190ifze['put']['resBody'], BasicHeaders, Methods_190ifze['put']['status']>(prefix, PATH116, PUT, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_190ifze['get']['query'] } | { method: 'put'; query: Methods_190ifze['put']['query'] } | undefined) =>
        `${prefix}${PATH116}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    liquor_tax_names: {
      _liquor_tax_name_id: (val1: number) => {
        const prefix1 = `${PATH117}/${val1}`;

        return {
          /**
           * 酒税名を取得します
           * @returns OK
           */
          get: (option?: { query?: Methods_1urzyk6['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1urzyk6['get']['resBody'], BasicHeaders, Methods_1urzyk6['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * 酒税名を取得します
           * @returns OK
           */
          $get: (option?: { query?: Methods_1urzyk6['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1urzyk6['get']['resBody'], BasicHeaders, Methods_1urzyk6['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_1urzyk6['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
      /**
       * 酒税名一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_1g4sx3v['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1g4sx3v['get']['resBody'], BasicHeaders, Methods_1g4sx3v['get']['status']>(prefix, PATH117, GET, option).json(),
      /**
       * 酒税名一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_1g4sx3v['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1g4sx3v['get']['resBody'], BasicHeaders, Methods_1g4sx3v['get']['status']>(prefix, PATH117, GET, option).json().then(r => r.body),
      /**
       * 酒税名を追加更新削除します。
       * @returns OK
       */
      put: (option: { body: Methods_1g4sx3v['put']['reqBody'], query?: Methods_1g4sx3v['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1g4sx3v['put']['resBody'], BasicHeaders, Methods_1g4sx3v['put']['status']>(prefix, PATH117, PUT, option).json(),
      /**
       * 酒税名を追加更新削除します。
       * @returns OK
       */
      $put: (option: { body: Methods_1g4sx3v['put']['reqBody'], query?: Methods_1g4sx3v['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1g4sx3v['put']['resBody'], BasicHeaders, Methods_1g4sx3v['put']['status']>(prefix, PATH117, PUT, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_1g4sx3v['get']['query'] } | { method: 'put'; query: Methods_1g4sx3v['put']['query'] } | undefined) =>
        `${prefix}${PATH117}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    liquor_tax_reports: {
      print_liquor_tax: {
        /**
         * 酒税報告書（得意先向け・税務署&酒販組合向け）を出力します。
         * @returns OK
         */
        post: (option: { body: Methods_119pznn['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_119pznn['post']['resBody'], BasicHeaders, Methods_119pznn['post']['status']>(prefix, PATH118, POST, option).json(),
        /**
         * 酒税報告書（得意先向け・税務署&酒販組合向け）を出力します。
         * @returns OK
         */
        $post: (option: { body: Methods_119pznn['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_119pznn['post']['resBody'], BasicHeaders, Methods_119pznn['post']['status']>(prefix, PATH118, POST, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH118}`,
      },
    },
    liquor_taxes: {
      _liquor_tax_id: (val1: number) => {
        const prefix1 = `${PATH119}/${val1}`;

        return {
          /**
           * 酒税取得します
           * @returns OK
           */
          get: (option?: { query?: Methods_wpjuvl['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_wpjuvl['get']['resBody'], BasicHeaders, Methods_wpjuvl['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * 酒税取得します
           * @returns OK
           */
          $get: (option?: { query?: Methods_wpjuvl['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_wpjuvl['get']['resBody'], BasicHeaders, Methods_wpjuvl['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_wpjuvl['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
      /**
       * 酒税一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_7az87k['get']['query'], config?: T | undefined }) =>
        fetch<Methods_7az87k['get']['resBody'], BasicHeaders, Methods_7az87k['get']['status']>(prefix, PATH119, GET, option).json(),
      /**
       * 酒税一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_7az87k['get']['query'], config?: T | undefined }) =>
        fetch<Methods_7az87k['get']['resBody'], BasicHeaders, Methods_7az87k['get']['status']>(prefix, PATH119, GET, option).json().then(r => r.body),
      /**
       * 酒税を追加更新削除します。
       * @returns OK
       */
      put: (option: { body: Methods_7az87k['put']['reqBody'], query?: Methods_7az87k['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_7az87k['put']['resBody'], BasicHeaders, Methods_7az87k['put']['status']>(prefix, PATH119, PUT, option).json(),
      /**
       * 酒税を追加更新削除します。
       * @returns OK
       */
      $put: (option: { body: Methods_7az87k['put']['reqBody'], query?: Methods_7az87k['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_7az87k['put']['resBody'], BasicHeaders, Methods_7az87k['put']['status']>(prefix, PATH119, PUT, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_7az87k['get']['query'] } | { method: 'put'; query: Methods_7az87k['put']['query'] } | undefined) =>
        `${prefix}${PATH119}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    locations: {
      _location_id: (val1: number) => {
        const prefix1 = `${PATH120}/${val1}`;

        return {
          /**
           * 倉庫を取得します
           * @returns OK
           */
          get: (option?: { query?: Methods_1pmpalm['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1pmpalm['get']['resBody'], BasicHeaders, Methods_1pmpalm['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * 倉庫を取得します
           * @returns OK
           */
          $get: (option?: { query?: Methods_1pmpalm['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1pmpalm['get']['resBody'], BasicHeaders, Methods_1pmpalm['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_1pmpalm['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
      /**
       * 倉庫一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_8dakku['get']['query'], config?: T | undefined }) =>
        fetch<Methods_8dakku['get']['resBody'], BasicHeaders, Methods_8dakku['get']['status']>(prefix, PATH120, GET, option).json(),
      /**
       * 倉庫一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_8dakku['get']['query'], config?: T | undefined }) =>
        fetch<Methods_8dakku['get']['resBody'], BasicHeaders, Methods_8dakku['get']['status']>(prefix, PATH120, GET, option).json().then(r => r.body),
      /**
       * 倉庫を追加更新削除します。
       * @returns OK
       */
      put: (option: { body: Methods_8dakku['put']['reqBody'], query?: Methods_8dakku['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_8dakku['put']['resBody'], BasicHeaders, Methods_8dakku['put']['status']>(prefix, PATH120, PUT, option).json(),
      /**
       * 倉庫を追加更新削除します。
       * @returns OK
       */
      $put: (option: { body: Methods_8dakku['put']['reqBody'], query?: Methods_8dakku['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_8dakku['put']['resBody'], BasicHeaders, Methods_8dakku['put']['status']>(prefix, PATH120, PUT, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_8dakku['get']['query'] } | { method: 'put'; query: Methods_8dakku['put']['query'] } | undefined) =>
        `${prefix}${PATH120}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    locks: {
      unlock: {
        /**
         * ロックを解除します。
         * @returns OK
         */
        post: (option: { body: Methods_v5qitb['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_v5qitb['post']['resBody'], BasicHeaders, Methods_v5qitb['post']['status']>(prefix, PATH122, POST, option).json(),
        /**
         * ロックを解除します。
         * @returns OK
         */
        $post: (option: { body: Methods_v5qitb['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_v5qitb['post']['resBody'], BasicHeaders, Methods_v5qitb['post']['status']>(prefix, PATH122, POST, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH122}`,
      },
      unlock_by: {
        /**
         * 条件を指定してロックを解除します。
         */
        post: (option: { body: Methods_10jw631['post']['reqBody'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_10jw631['post']['status']>(prefix, PATH123, POST, option).send(),
        /**
         * 条件を指定してロックを解除します。
         */
        $post: (option: { body: Methods_10jw631['post']['reqBody'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_10jw631['post']['status']>(prefix, PATH123, POST, option).send().then(r => r.body),
        $path: () => `${prefix}${PATH123}`,
      },
      /**
       * ロック一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_1qotqia['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1qotqia['get']['resBody'], BasicHeaders, Methods_1qotqia['get']['status']>(prefix, PATH121, GET, option).json(),
      /**
       * ロック一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_1qotqia['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1qotqia['get']['resBody'], BasicHeaders, Methods_1qotqia['get']['status']>(prefix, PATH121, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_1qotqia['get']['query'] } | undefined) =>
        `${prefix}${PATH121}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    maintenance: {
      down: {
        /**
         * メンテナンスモードを開始します。所定のユーザからのみ呼び出せます。
         */
        post: (option?: { config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods_1a7q67y['post']['status']>(prefix, PATH124, POST, option).send(),
        /**
         * メンテナンスモードを開始します。所定のユーザからのみ呼び出せます。
         */
        $post: (option?: { config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods_1a7q67y['post']['status']>(prefix, PATH124, POST, option).send().then(r => r.body),
        $path: () => `${prefix}${PATH124}`,
      },
      up: {
        /**
         * メンテナンスモードを終了します。所定のユーザからのみ呼び出せます。
         */
        post: (option?: { config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods_e4oe0b['post']['status']>(prefix, PATH125, POST, option).send(),
        /**
         * メンテナンスモードを終了します。所定のユーザからのみ呼び出せます。
         */
        $post: (option?: { config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods_e4oe0b['post']['status']>(prefix, PATH125, POST, option).send().then(r => r.body),
        $path: () => `${prefix}${PATH125}`,
      },
    },
    message_group_user_links: {
      _message_group_user_link_id: (val1: number) => {
        const prefix1 = `${PATH126}/${val1}`;

        return {
          /**
           * メッセージグループ～担当者紐付を取得します
           * @returns OK
           */
          get: (option?: { query?: Methods_nyo3i6['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_nyo3i6['get']['resBody'], BasicHeaders, Methods_nyo3i6['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * メッセージグループ～担当者紐付を取得します
           * @returns OK
           */
          $get: (option?: { query?: Methods_nyo3i6['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_nyo3i6['get']['resBody'], BasicHeaders, Methods_nyo3i6['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_nyo3i6['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
      /**
       * メッセージグループ～担当者紐付一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_s4h2cr['get']['query'], config?: T | undefined }) =>
        fetch<Methods_s4h2cr['get']['resBody'], BasicHeaders, Methods_s4h2cr['get']['status']>(prefix, PATH126, GET, option).json(),
      /**
       * メッセージグループ～担当者紐付一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_s4h2cr['get']['query'], config?: T | undefined }) =>
        fetch<Methods_s4h2cr['get']['resBody'], BasicHeaders, Methods_s4h2cr['get']['status']>(prefix, PATH126, GET, option).json().then(r => r.body),
      /**
       * メッセージグループ～担当者紐付を追加更新削除します。
       * @returns OK
       */
      put: (option: { body: Methods_s4h2cr['put']['reqBody'], query?: Methods_s4h2cr['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_s4h2cr['put']['resBody'], BasicHeaders, Methods_s4h2cr['put']['status']>(prefix, PATH126, PUT, option).json(),
      /**
       * メッセージグループ～担当者紐付を追加更新削除します。
       * @returns OK
       */
      $put: (option: { body: Methods_s4h2cr['put']['reqBody'], query?: Methods_s4h2cr['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_s4h2cr['put']['resBody'], BasicHeaders, Methods_s4h2cr['put']['status']>(prefix, PATH126, PUT, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_s4h2cr['get']['query'] } | { method: 'put'; query: Methods_s4h2cr['put']['query'] } | undefined) =>
        `${prefix}${PATH126}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    message_groups: {
      _message_group_id: (val1: number) => {
        const prefix1 = `${PATH127}/${val1}`;

        return {
          /**
           * メッセージグループを取得します
           * @returns OK
           */
          get: (option?: { query?: Methods_f0w23m['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_f0w23m['get']['resBody'], BasicHeaders, Methods_f0w23m['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * メッセージグループを取得します
           * @returns OK
           */
          $get: (option?: { query?: Methods_f0w23m['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_f0w23m['get']['resBody'], BasicHeaders, Methods_f0w23m['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_f0w23m['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
      /**
       * メッセージグループ一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_1699tay['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1699tay['get']['resBody'], BasicHeaders, Methods_1699tay['get']['status']>(prefix, PATH127, GET, option).json(),
      /**
       * メッセージグループ一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_1699tay['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1699tay['get']['resBody'], BasicHeaders, Methods_1699tay['get']['status']>(prefix, PATH127, GET, option).json().then(r => r.body),
      /**
       * メッセージグループを追加更新削除します。
       * @returns OK
       */
      put: (option: { body: Methods_1699tay['put']['reqBody'], query?: Methods_1699tay['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1699tay['put']['resBody'], BasicHeaders, Methods_1699tay['put']['status']>(prefix, PATH127, PUT, option).json(),
      /**
       * メッセージグループを追加更新削除します。
       * @returns OK
       */
      $put: (option: { body: Methods_1699tay['put']['reqBody'], query?: Methods_1699tay['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1699tay['put']['resBody'], BasicHeaders, Methods_1699tay['put']['status']>(prefix, PATH127, PUT, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_1699tay['get']['query'] } | { method: 'put'; query: Methods_1699tay['put']['query'] } | undefined) =>
        `${prefix}${PATH127}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    monthly_closings: {
      close: {
        /**
         * 月次締めもしくは解除を行います。
         */
        post: (option: { body: Methods_5zhn83['post']['reqBody'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_5zhn83['post']['status']>(prefix, PATH128, POST, option).send(),
        /**
         * 月次締めもしくは解除を行います。
         */
        $post: (option: { body: Methods_5zhn83['post']['reqBody'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_5zhn83['post']['status']>(prefix, PATH128, POST, option).send().then(r => r.body),
        $path: () => `${prefix}${PATH128}`,
      },
      next: {
        /**
         * 月次締めすべき年月を取得します。
         * @returns OK
         */
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_1rlbuhk['get']['resBody'], BasicHeaders, Methods_1rlbuhk['get']['status']>(prefix, PATH129, GET, option).json(),
        /**
         * 月次締めすべき年月を取得します。
         * @returns OK
         */
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_1rlbuhk['get']['resBody'], BasicHeaders, Methods_1rlbuhk['get']['status']>(prefix, PATH129, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH129}`,
      },
    },
    monthly_cost_prices: {
      /**
       * 月別商品別原価単価一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_jn7js['get']['query'], config?: T | undefined }) =>
        fetch<Methods_jn7js['get']['resBody'], BasicHeaders, Methods_jn7js['get']['status']>(prefix, PATH130, GET, option).json(),
      /**
       * 月別商品別原価単価一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_jn7js['get']['query'], config?: T | undefined }) =>
        fetch<Methods_jn7js['get']['resBody'], BasicHeaders, Methods_jn7js['get']['status']>(prefix, PATH130, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_jn7js['get']['query'] } | undefined) =>
        `${prefix}${PATH130}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    monthly_sales: {
      arrival_schedule: {
        /**
         * 次回以降入荷予定一覧データを取得します
         * @returns OK
         */
        get: (option: { query: Methods_1ffn96i['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1ffn96i['get']['resBody'], BasicHeaders, Methods_1ffn96i['get']['status']>(prefix, PATH132, GET, option).json(),
        /**
         * 次回以降入荷予定一覧データを取得します
         * @returns OK
         */
        $get: (option: { query: Methods_1ffn96i['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1ffn96i['get']['resBody'], BasicHeaders, Methods_1ffn96i['get']['status']>(prefix, PATH132, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_1ffn96i['get']['query'] } | undefined) =>
          `${prefix}${PATH132}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      other_vintage: {
        /**
         * 同一商品別年号一覧データを取得します
         * @returns OK
         */
        get: (option: { query: Methods_unbeqk['get']['query'], config?: T | undefined }) =>
          fetch<Methods_unbeqk['get']['resBody'], BasicHeaders, Methods_unbeqk['get']['status']>(prefix, PATH133, GET, option).json(),
        /**
         * 同一商品別年号一覧データを取得します
         * @returns OK
         */
        $get: (option: { query: Methods_unbeqk['get']['query'], config?: T | undefined }) =>
          fetch<Methods_unbeqk['get']['resBody'], BasicHeaders, Methods_unbeqk['get']['status']>(prefix, PATH133, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_unbeqk['get']['query'] } | undefined) =>
          `${prefix}${PATH133}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      print_stockout_vt_change: {
        /**
         * 欠品VT変更案内を出力します。
         * @returns OK
         */
        post: (option: { body: Methods_9a6l9b['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_9a6l9b['post']['resBody'], BasicHeaders, Methods_9a6l9b['post']['status']>(prefix, PATH134, POST, option).json(),
        /**
         * 欠品VT変更案内を出力します。
         * @returns OK
         */
        $post: (option: { body: Methods_9a6l9b['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_9a6l9b['post']['resBody'], BasicHeaders, Methods_9a6l9b['post']['status']>(prefix, PATH134, POST, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH134}`,
      },
      /**
       * 得意先別月販一覧データを取得します
       * @returns OK
       */
      get: (option: { query: Methods_1dq3n1o['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1dq3n1o['get']['resBody'], BasicHeaders, Methods_1dq3n1o['get']['status']>(prefix, PATH131, GET, option).json(),
      /**
       * 得意先別月販一覧データを取得します
       * @returns OK
       */
      $get: (option: { query: Methods_1dq3n1o['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1dq3n1o['get']['resBody'], BasicHeaders, Methods_1dq3n1o['get']['status']>(prefix, PATH131, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_1dq3n1o['get']['query'] } | undefined) =>
        `${prefix}${PATH131}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    monthly_transaction_totals: {
      location: {
        /**
         * 倉庫別月別在庫受払集計データを取得します
         * @returns OK
         */
        get: (option: { query: Methods_r84xzw['get']['query'], config?: T | undefined }) =>
          fetch<Methods_r84xzw['get']['resBody'], BasicHeaders, Methods_r84xzw['get']['status']>(prefix, PATH136, GET, option).json(),
        /**
         * 倉庫別月別在庫受払集計データを取得します
         * @returns OK
         */
        $get: (option: { query: Methods_r84xzw['get']['query'], config?: T | undefined }) =>
          fetch<Methods_r84xzw['get']['resBody'], BasicHeaders, Methods_r84xzw['get']['status']>(prefix, PATH136, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_r84xzw['get']['query'] } | undefined) =>
          `${prefix}${PATH136}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      /**
       * 全社月別在庫受払集計データを取得します
       * @returns OK
       */
      get: (option: { query: Methods_14g5t06['get']['query'], config?: T | undefined }) =>
        fetch<Methods_14g5t06['get']['resBody'], BasicHeaders, Methods_14g5t06['get']['status']>(prefix, PATH135, GET, option).json(),
      /**
       * 全社月別在庫受払集計データを取得します
       * @returns OK
       */
      $get: (option: { query: Methods_14g5t06['get']['query'], config?: T | undefined }) =>
        fetch<Methods_14g5t06['get']['resBody'], BasicHeaders, Methods_14g5t06['get']['status']>(prefix, PATH135, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_14g5t06['get']['query'] } | undefined) =>
        `${prefix}${PATH135}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    mtx_campaign: {
      /**
       * キャンペーン一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_nryjh4['get']['query'], config?: T | undefined }) =>
        fetch<Methods_nryjh4['get']['resBody'], BasicHeaders, Methods_nryjh4['get']['status']>(prefix, PATH137, GET, option).json(),
      /**
       * キャンペーン一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_nryjh4['get']['query'], config?: T | undefined }) =>
        fetch<Methods_nryjh4['get']['resBody'], BasicHeaders, Methods_nryjh4['get']['status']>(prefix, PATH137, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_nryjh4['get']['query'] } | undefined) =>
        `${prefix}${PATH137}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    mtx_webifmng_weborder: {
      /**
       * WEB受注連携データ管理一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_1fclfr0['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1fclfr0['get']['resBody'], BasicHeaders, Methods_1fclfr0['get']['status']>(prefix, PATH138, GET, option).json(),
      /**
       * WEB受注連携データ管理一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_1fclfr0['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1fclfr0['get']['resBody'], BasicHeaders, Methods_1fclfr0['get']['status']>(prefix, PATH138, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_1fclfr0['get']['query'] } | undefined) =>
        `${prefix}${PATH138}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    names: {
      /**
       * 名称一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_1hjjgja['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1hjjgja['get']['resBody'], BasicHeaders, Methods_1hjjgja['get']['status']>(prefix, PATH139, GET, option).json(),
      /**
       * 名称一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_1hjjgja['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1hjjgja['get']['resBody'], BasicHeaders, Methods_1hjjgja['get']['status']>(prefix, PATH139, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_1hjjgja['get']['query'] } | undefined) =>
        `${prefix}${PATH139}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    order_makers: {
      _order_maker_id: (val1: number) => {
        const prefix1 = `${PATH140}/${val1}`;

        return {
          /**
           * 生産者依頼を取得します
           * @returns OK
           */
          get: (option?: { query?: Methods_1e798di['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1e798di['get']['resBody'], BasicHeaders, Methods_1e798di['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * 生産者依頼を取得します
           * @returns OK
           */
          $get: (option?: { query?: Methods_1e798di['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1e798di['get']['resBody'], BasicHeaders, Methods_1e798di['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_1e798di['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
      /**
       * 生産者依頼一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_11gzvbm['get']['query'], config?: T | undefined }) =>
        fetch<Methods_11gzvbm['get']['resBody'], BasicHeaders, Methods_11gzvbm['get']['status']>(prefix, PATH140, GET, option).json(),
      /**
       * 生産者依頼一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_11gzvbm['get']['query'], config?: T | undefined }) =>
        fetch<Methods_11gzvbm['get']['resBody'], BasicHeaders, Methods_11gzvbm['get']['status']>(prefix, PATH140, GET, option).json().then(r => r.body),
      /**
       * 生産者依頼を追加更新削除します。
       * @returns OK
       */
      put: (option: { body: Methods_11gzvbm['put']['reqBody'], query?: Methods_11gzvbm['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_11gzvbm['put']['resBody'], BasicHeaders, Methods_11gzvbm['put']['status']>(prefix, PATH140, PUT, option).json(),
      /**
       * 生産者依頼を追加更新削除します。
       * @returns OK
       */
      $put: (option: { body: Methods_11gzvbm['put']['reqBody'], query?: Methods_11gzvbm['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_11gzvbm['put']['resBody'], BasicHeaders, Methods_11gzvbm['put']['status']>(prefix, PATH140, PUT, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_11gzvbm['get']['query'] } | { method: 'put'; query: Methods_11gzvbm['put']['query'] } | undefined) =>
        `${prefix}${PATH140}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    order_notes: {
      _order_note_id: (val1: number) => {
        const prefix1 = `${PATH141}/${val1}`;

        return {
          /**
           * 発注者覚書を取得します
           * @returns OK
           */
          get: (option?: { query?: Methods_1sgtx5i['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1sgtx5i['get']['resBody'], BasicHeaders, Methods_1sgtx5i['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * 発注者覚書を取得します
           * @returns OK
           */
          $get: (option?: { query?: Methods_1sgtx5i['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1sgtx5i['get']['resBody'], BasicHeaders, Methods_1sgtx5i['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_1sgtx5i['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
      /**
       * 発注者覚書一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_1muwo9o['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1muwo9o['get']['resBody'], BasicHeaders, Methods_1muwo9o['get']['status']>(prefix, PATH141, GET, option).json(),
      /**
       * 発注者覚書一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_1muwo9o['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1muwo9o['get']['resBody'], BasicHeaders, Methods_1muwo9o['get']['status']>(prefix, PATH141, GET, option).json().then(r => r.body),
      /**
       * 発注者覚書を追加更新削除します。
       * @returns OK
       */
      put: (option: { body: Methods_1muwo9o['put']['reqBody'], query?: Methods_1muwo9o['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1muwo9o['put']['resBody'], BasicHeaders, Methods_1muwo9o['put']['status']>(prefix, PATH141, PUT, option).json(),
      /**
       * 発注者覚書を追加更新削除します。
       * @returns OK
       */
      $put: (option: { body: Methods_1muwo9o['put']['reqBody'], query?: Methods_1muwo9o['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1muwo9o['put']['resBody'], BasicHeaders, Methods_1muwo9o['put']['status']>(prefix, PATH141, PUT, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_1muwo9o['get']['query'] } | { method: 'put'; query: Methods_1muwo9o['put']['query'] } | undefined) =>
        `${prefix}${PATH141}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    order_warehouses: {
      _order_warehouse_id: (val1: number) => {
        const prefix1 = `${PATH142}/${val1}`;

        return {
          /**
           * 倉庫依頼を取得します
           * @returns OK
           */
          get: (option?: { query?: Methods_ytceym['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_ytceym['get']['resBody'], BasicHeaders, Methods_ytceym['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * 倉庫依頼を取得します
           * @returns OK
           */
          $get: (option?: { query?: Methods_ytceym['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_ytceym['get']['resBody'], BasicHeaders, Methods_ytceym['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_ytceym['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
      /**
       * 倉庫依頼一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_1xgpj83['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1xgpj83['get']['resBody'], BasicHeaders, Methods_1xgpj83['get']['status']>(prefix, PATH142, GET, option).json(),
      /**
       * 倉庫依頼一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_1xgpj83['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1xgpj83['get']['resBody'], BasicHeaders, Methods_1xgpj83['get']['status']>(prefix, PATH142, GET, option).json().then(r => r.body),
      /**
       * 倉庫依頼を追加更新削除します。
       * @returns OK
       */
      put: (option: { body: Methods_1xgpj83['put']['reqBody'], query?: Methods_1xgpj83['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1xgpj83['put']['resBody'], BasicHeaders, Methods_1xgpj83['put']['status']>(prefix, PATH142, PUT, option).json(),
      /**
       * 倉庫依頼を追加更新削除します。
       * @returns OK
       */
      $put: (option: { body: Methods_1xgpj83['put']['reqBody'], query?: Methods_1xgpj83['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1xgpj83['put']['resBody'], BasicHeaders, Methods_1xgpj83['put']['status']>(prefix, PATH142, PUT, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_1xgpj83['get']['query'] } | { method: 'put'; query: Methods_1xgpj83['put']['query'] } | undefined) =>
        `${prefix}${PATH142}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    other_vintage_inquiry: {
      /**
       * 年号別商品一覧データを取得します
       * @returns OK
       */
      get: (option: { query: Methods_1owvxi3['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1owvxi3['get']['resBody'], BasicHeaders, Methods_1owvxi3['get']['status']>(prefix, PATH143, GET, option).json(),
      /**
       * 年号別商品一覧データを取得します
       * @returns OK
       */
      $get: (option: { query: Methods_1owvxi3['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1owvxi3['get']['resBody'], BasicHeaders, Methods_1owvxi3['get']['status']>(prefix, PATH143, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_1owvxi3['get']['query'] } | undefined) =>
        `${prefix}${PATH143}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    page_groups: {
      _page_group_id: (val1: number) => {
        const prefix1 = `${PATH144}/${val1}`;

        return {
          /**
           * 画面グループを取得します
           * @returns OK
           */
          get: (option?: { query?: Methods_58wm06['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_58wm06['get']['resBody'], BasicHeaders, Methods_58wm06['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * 画面グループを取得します
           * @returns OK
           */
          $get: (option?: { query?: Methods_58wm06['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_58wm06['get']['resBody'], BasicHeaders, Methods_58wm06['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_58wm06['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
      /**
       * 画面グループ一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_anw1qy['get']['query'], config?: T | undefined }) =>
        fetch<Methods_anw1qy['get']['resBody'], BasicHeaders, Methods_anw1qy['get']['status']>(prefix, PATH144, GET, option).json(),
      /**
       * 画面グループ一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_anw1qy['get']['query'], config?: T | undefined }) =>
        fetch<Methods_anw1qy['get']['resBody'], BasicHeaders, Methods_anw1qy['get']['status']>(prefix, PATH144, GET, option).json().then(r => r.body),
      /**
       * 画面グループを追加更新削除します。
       * @returns OK
       */
      put: (option: { body: Methods_anw1qy['put']['reqBody'], query?: Methods_anw1qy['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_anw1qy['put']['resBody'], BasicHeaders, Methods_anw1qy['put']['status']>(prefix, PATH144, PUT, option).json(),
      /**
       * 画面グループを追加更新削除します。
       * @returns OK
       */
      $put: (option: { body: Methods_anw1qy['put']['reqBody'], query?: Methods_anw1qy['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_anw1qy['put']['resBody'], BasicHeaders, Methods_anw1qy['put']['status']>(prefix, PATH144, PUT, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_anw1qy['get']['query'] } | { method: 'put'; query: Methods_anw1qy['put']['query'] } | undefined) =>
        `${prefix}${PATH144}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    page_lists: {
      _page_list_id: (val1: number) => {
        const prefix1 = `${PATH145}/${val1}`;

        return {
          /**
           * 画面リストを取得します
           * @returns OK
           */
          get: (option?: { query?: Methods_ya1r7m['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_ya1r7m['get']['resBody'], BasicHeaders, Methods_ya1r7m['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * 画面リストを取得します
           * @returns OK
           */
          $get: (option?: { query?: Methods_ya1r7m['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_ya1r7m['get']['resBody'], BasicHeaders, Methods_ya1r7m['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_ya1r7m['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
      /**
       * 画面リスト一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_1d9cqpr['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1d9cqpr['get']['resBody'], BasicHeaders, Methods_1d9cqpr['get']['status']>(prefix, PATH145, GET, option).json(),
      /**
       * 画面リスト一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_1d9cqpr['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1d9cqpr['get']['resBody'], BasicHeaders, Methods_1d9cqpr['get']['status']>(prefix, PATH145, GET, option).json().then(r => r.body),
      /**
       * 画面リストを追加更新削除します。
       * @returns OK
       */
      put: (option: { body: Methods_1d9cqpr['put']['reqBody'], query?: Methods_1d9cqpr['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1d9cqpr['put']['resBody'], BasicHeaders, Methods_1d9cqpr['put']['status']>(prefix, PATH145, PUT, option).json(),
      /**
       * 画面リストを追加更新削除します。
       * @returns OK
       */
      $put: (option: { body: Methods_1d9cqpr['put']['reqBody'], query?: Methods_1d9cqpr['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1d9cqpr['put']['resBody'], BasicHeaders, Methods_1d9cqpr['put']['status']>(prefix, PATH145, PUT, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_1d9cqpr['get']['query'] } | { method: 'put'; query: Methods_1d9cqpr['put']['query'] } | undefined) =>
        `${prefix}${PATH145}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    page_user_links: {
      /**
       * 画面制御一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_1jcbhsn['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1jcbhsn['get']['resBody'], BasicHeaders, Methods_1jcbhsn['get']['status']>(prefix, PATH146, GET, option).json(),
      /**
       * 画面制御一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_1jcbhsn['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1jcbhsn['get']['resBody'], BasicHeaders, Methods_1jcbhsn['get']['status']>(prefix, PATH146, GET, option).json().then(r => r.body),
      /**
       * 画面制御を追加更新削除します。
       * @returns OK
       */
      put: (option: { body: Methods_1jcbhsn['put']['reqBody'], query?: Methods_1jcbhsn['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1jcbhsn['put']['resBody'], BasicHeaders, Methods_1jcbhsn['put']['status']>(prefix, PATH146, PUT, option).json(),
      /**
       * 画面制御を追加更新削除します。
       * @returns OK
       */
      $put: (option: { body: Methods_1jcbhsn['put']['reqBody'], query?: Methods_1jcbhsn['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1jcbhsn['put']['resBody'], BasicHeaders, Methods_1jcbhsn['put']['status']>(prefix, PATH146, PUT, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_1jcbhsn['get']['query'] } | { method: 'put'; query: Methods_1jcbhsn['put']['query'] } | undefined) =>
        `${prefix}${PATH146}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    pages: {
      _page_id: (val1: number) => {
        const prefix1 = `${PATH147}/${val1}`;

        return {
          /**
           * 画面を取得します
           * @returns OK
           */
          get: (option?: { query?: Methods_o1kh0u['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_o1kh0u['get']['resBody'], BasicHeaders, Methods_o1kh0u['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * 画面を取得します
           * @returns OK
           */
          $get: (option?: { query?: Methods_o1kh0u['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_o1kh0u['get']['resBody'], BasicHeaders, Methods_o1kh0u['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_o1kh0u['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
      /**
       * 画面一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_5y6xxy['get']['query'], config?: T | undefined }) =>
        fetch<Methods_5y6xxy['get']['resBody'], BasicHeaders, Methods_5y6xxy['get']['status']>(prefix, PATH147, GET, option).json(),
      /**
       * 画面一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_5y6xxy['get']['query'], config?: T | undefined }) =>
        fetch<Methods_5y6xxy['get']['resBody'], BasicHeaders, Methods_5y6xxy['get']['status']>(prefix, PATH147, GET, option).json().then(r => r.body),
      /**
       * 画面を追加更新削除します。
       * @returns OK
       */
      put: (option: { body: Methods_5y6xxy['put']['reqBody'], query?: Methods_5y6xxy['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_5y6xxy['put']['resBody'], BasicHeaders, Methods_5y6xxy['put']['status']>(prefix, PATH147, PUT, option).json(),
      /**
       * 画面を追加更新削除します。
       * @returns OK
       */
      $put: (option: { body: Methods_5y6xxy['put']['reqBody'], query?: Methods_5y6xxy['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_5y6xxy['put']['resBody'], BasicHeaders, Methods_5y6xxy['put']['status']>(prefix, PATH147, PUT, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_5y6xxy['get']['query'] } | { method: 'put'; query: Methods_5y6xxy['put']['query'] } | undefined) =>
        `${prefix}${PATH147}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    payable_accounts: {
      /**
       * 買掛金一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_9o4rmx['get']['query'], config?: T | undefined }) =>
        fetch<Methods_9o4rmx['get']['resBody'], BasicHeaders, Methods_9o4rmx['get']['status']>(prefix, PATH148, GET, option).json(),
      /**
       * 買掛金一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_9o4rmx['get']['query'], config?: T | undefined }) =>
        fetch<Methods_9o4rmx['get']['resBody'], BasicHeaders, Methods_9o4rmx['get']['status']>(prefix, PATH148, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_9o4rmx['get']['query'] } | undefined) =>
        `${prefix}${PATH148}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    payment_conditions: {
      _payment_condition_id: (val1: number) => {
        const prefix1 = `${PATH149}/${val1}`;

        return {
          due: {
            /**
             * 支払条件を元に支払期日を取得します
             * @returns OK
             */
            get: (option?: { query?: Methods_ykscxr['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_ykscxr['get']['resBody'], BasicHeaders, Methods_ykscxr['get']['status']>(prefix, `${prefix1}${PATH150}`, GET, option).json(),
            /**
             * 支払条件を元に支払期日を取得します
             * @returns OK
             */
            $get: (option?: { query?: Methods_ykscxr['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_ykscxr['get']['resBody'], BasicHeaders, Methods_ykscxr['get']['status']>(prefix, `${prefix1}${PATH150}`, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_ykscxr['get']['query'] } | undefined) =>
              `${prefix}${prefix1}${PATH150}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          },
          /**
           * 支払条件を取得します
           * @returns OK
           */
          get: (option?: { query?: Methods_1f5koum['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1f5koum['get']['resBody'], BasicHeaders, Methods_1f5koum['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * 支払条件を取得します
           * @returns OK
           */
          $get: (option?: { query?: Methods_1f5koum['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1f5koum['get']['resBody'], BasicHeaders, Methods_1f5koum['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_1f5koum['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
      /**
       * 支払条件一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_154scin['get']['query'], config?: T | undefined }) =>
        fetch<Methods_154scin['get']['resBody'], BasicHeaders, Methods_154scin['get']['status']>(prefix, PATH149, GET, option).json(),
      /**
       * 支払条件一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_154scin['get']['query'], config?: T | undefined }) =>
        fetch<Methods_154scin['get']['resBody'], BasicHeaders, Methods_154scin['get']['status']>(prefix, PATH149, GET, option).json().then(r => r.body),
      /**
       * 支払条件を追加更新削除します。
       * @returns OK
       */
      put: (option: { body: Methods_154scin['put']['reqBody'], query?: Methods_154scin['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_154scin['put']['resBody'], BasicHeaders, Methods_154scin['put']['status']>(prefix, PATH149, PUT, option).json(),
      /**
       * 支払条件を追加更新削除します。
       * @returns OK
       */
      $put: (option: { body: Methods_154scin['put']['reqBody'], query?: Methods_154scin['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_154scin['put']['resBody'], BasicHeaders, Methods_154scin['put']['status']>(prefix, PATH149, PUT, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_154scin['get']['query'] } | { method: 'put'; query: Methods_154scin['put']['query'] } | undefined) =>
        `${prefix}${PATH149}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    payment_details: {
      /**
       * 国内支払支払金額内訳一覧を返します
       * @returns OK
       */
      get: (option?: { query?: Methods_ocpsal['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_ocpsal['get']['resBody'], BasicHeaders, Methods_ocpsal['get']['status']>(prefix, PATH151, GET, option).json(),
      /**
       * 国内支払支払金額内訳一覧を返します
       * @returns OK
       */
      $get: (option?: { query?: Methods_ocpsal['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_ocpsal['get']['resBody'], BasicHeaders, Methods_ocpsal['get']['status']>(prefix, PATH151, GET, option).json().then(r => r.body),
      /**
       * 国内支払支払金額内訳を追加更新削除します。
       * @returns OK
       */
      put: (option: { body: Methods_ocpsal['put']['reqBody'], query?: Methods_ocpsal['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_ocpsal['put']['resBody'], BasicHeaders, Methods_ocpsal['put']['status']>(prefix, PATH151, PUT, option).json(),
      /**
       * 国内支払支払金額内訳を追加更新削除します。
       * @returns OK
       */
      $put: (option: { body: Methods_ocpsal['put']['reqBody'], query?: Methods_ocpsal['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_ocpsal['put']['resBody'], BasicHeaders, Methods_ocpsal['put']['status']>(prefix, PATH151, PUT, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_ocpsal['get']['query'] } | { method: 'put'; query: Methods_ocpsal['put']['query'] } | undefined) =>
        `${prefix}${PATH151}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    payment_results: {
      export: {
        /**
         * インターネットバンキング用支払いデータを出力します。
         */
        post: (option: { body: Methods_ox9r18['post']['reqBody'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_ox9r18['post']['status']>(prefix, PATH153, POST, option).send(),
        /**
         * インターネットバンキング用支払いデータを出力します。
         */
        $post: (option: { body: Methods_ox9r18['post']['reqBody'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_ox9r18['post']['status']>(prefix, PATH153, POST, option).send().then(r => r.body),
        $path: () => `${prefix}${PATH153}`,
      },
      /**
       * 国内支払予定・実績一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_117lnnh['get']['query'], config?: T | undefined }) =>
        fetch<Methods_117lnnh['get']['resBody'], BasicHeaders, Methods_117lnnh['get']['status']>(prefix, PATH152, GET, option).json(),
      /**
       * 国内支払予定・実績一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_117lnnh['get']['query'], config?: T | undefined }) =>
        fetch<Methods_117lnnh['get']['resBody'], BasicHeaders, Methods_117lnnh['get']['status']>(prefix, PATH152, GET, option).json().then(r => r.body),
      /**
       * 国内支払予定・実績を追加更新削除します。
       * @returns OK
       */
      put: (option: { body: Methods_117lnnh['put']['reqBody'], query?: Methods_117lnnh['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_117lnnh['put']['resBody'], BasicHeaders, Methods_117lnnh['put']['status']>(prefix, PATH152, PUT, option).json(),
      /**
       * 国内支払予定・実績を追加更新削除します。
       * @returns OK
       */
      $put: (option: { body: Methods_117lnnh['put']['reqBody'], query?: Methods_117lnnh['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_117lnnh['put']['resBody'], BasicHeaders, Methods_117lnnh['put']['status']>(prefix, PATH152, PUT, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_117lnnh['get']['query'] } | { method: 'put'; query: Methods_117lnnh['put']['query'] } | undefined) =>
        `${prefix}${PATH152}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    payment_schedules: {
      due_detail: {
        /**
         * 支払期日一覧明細
         * @returns OK
         */
        get: (option: { query: Methods_ay05lk['get']['query'], config?: T | undefined }) =>
          fetch<Methods_ay05lk['get']['resBody'], BasicHeaders, Methods_ay05lk['get']['status']>(prefix, PATH155, GET, option).json(),
        /**
         * 支払期日一覧明細
         * @returns OK
         */
        $get: (option: { query: Methods_ay05lk['get']['query'], config?: T | undefined }) =>
          fetch<Methods_ay05lk['get']['resBody'], BasicHeaders, Methods_ay05lk['get']['status']>(prefix, PATH155, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_ay05lk['get']['query'] } | undefined) =>
          `${prefix}${PATH155}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      due_index: {
        /**
         * 支払期日一覧取得
         * @returns OK
         */
        get: (option: { query: Methods_1l44xcv['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1l44xcv['get']['resBody'], BasicHeaders, Methods_1l44xcv['get']['status']>(prefix, PATH156, GET, option).json(),
        /**
         * 支払期日一覧取得
         * @returns OK
         */
        $get: (option: { query: Methods_1l44xcv['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1l44xcv['get']['resBody'], BasicHeaders, Methods_1l44xcv['get']['status']>(prefix, PATH156, GET, option).json().then(r => r.body),
        /**
         * 支払予定を更新します。
         * @returns OK
         */
        put: (option: { body: Methods_1l44xcv['put']['reqBody'], query?: Methods_1l44xcv['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1l44xcv['put']['resBody'], BasicHeaders, Methods_1l44xcv['put']['status']>(prefix, PATH156, PUT, option).json(),
        /**
         * 支払予定を更新します。
         * @returns OK
         */
        $put: (option: { body: Methods_1l44xcv['put']['reqBody'], query?: Methods_1l44xcv['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1l44xcv['put']['resBody'], BasicHeaders, Methods_1l44xcv['put']['status']>(prefix, PATH156, PUT, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_1l44xcv['get']['query'] } | { method: 'put'; query: Methods_1l44xcv['put']['query'] } | undefined) =>
          `${prefix}${PATH156}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      print_check_list: {
        /**
         * 支払予定チェックリストを出力します。
         * @returns OK
         */
        post: (option: { body: Methods_w95oof['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_w95oof['post']['resBody'], BasicHeaders, Methods_w95oof['post']['status']>(prefix, PATH157, POST, option).json(),
        /**
         * 支払予定チェックリストを出力します。
         * @returns OK
         */
        $post: (option: { body: Methods_w95oof['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_w95oof['post']['resBody'], BasicHeaders, Methods_w95oof['post']['status']>(prefix, PATH157, POST, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH157}`,
      },
      /**
       * 支払予定一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_no0udh['get']['query'], config?: T | undefined }) =>
        fetch<Methods_no0udh['get']['resBody'], BasicHeaders, Methods_no0udh['get']['status']>(prefix, PATH154, GET, option).json(),
      /**
       * 支払予定一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_no0udh['get']['query'], config?: T | undefined }) =>
        fetch<Methods_no0udh['get']['resBody'], BasicHeaders, Methods_no0udh['get']['status']>(prefix, PATH154, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_no0udh['get']['query'] } | undefined) =>
        `${prefix}${PATH154}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    payment_schedules_payment_date: {
      /**
       * 支払期日を取得します
       * @returns OK
       */
      get: (option?: { query?: Methods_1qv84t1['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_1qv84t1['get']['resBody'], BasicHeaders, Methods_1qv84t1['get']['status']>(prefix, PATH158, GET, option).json(),
      /**
       * 支払期日を取得します
       * @returns OK
       */
      $get: (option?: { query?: Methods_1qv84t1['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_1qv84t1['get']['resBody'], BasicHeaders, Methods_1qv84t1['get']['status']>(prefix, PATH158, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_1qv84t1['get']['query'] } | undefined) =>
        `${prefix}${PATH158}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    payment_schedules_payment_rate: {
      /**
       * 支払レートを取得します
       * @returns OK
       */
      get: (option?: { query?: Methods_ydwih7['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_ydwih7['get']['resBody'], BasicHeaders, Methods_ydwih7['get']['status']>(prefix, PATH159, GET, option).json(),
      /**
       * 支払レートを取得します
       * @returns OK
       */
      $get: (option?: { query?: Methods_ydwih7['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_ydwih7['get']['resBody'], BasicHeaders, Methods_ydwih7['get']['status']>(prefix, PATH159, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_ydwih7['get']['query'] } | undefined) =>
        `${prefix}${PATH159}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    place_of_origin_names: {
      _place_of_origin_name_id: (val1: number) => {
        const prefix1 = `${PATH160}/${val1}`;

        return {
          /**
           * 原産地呼称を取得します
           * @returns OK
           */
          get: (option?: { query?: Methods_1mgqvtk['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1mgqvtk['get']['resBody'], BasicHeaders, Methods_1mgqvtk['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * 原産地呼称を取得します
           * @returns OK
           */
          $get: (option?: { query?: Methods_1mgqvtk['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1mgqvtk['get']['resBody'], BasicHeaders, Methods_1mgqvtk['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_1mgqvtk['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
      /**
       * 原産地呼称一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_1bx0e4l['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1bx0e4l['get']['resBody'], BasicHeaders, Methods_1bx0e4l['get']['status']>(prefix, PATH160, GET, option).json(),
      /**
       * 原産地呼称一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_1bx0e4l['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1bx0e4l['get']['resBody'], BasicHeaders, Methods_1bx0e4l['get']['status']>(prefix, PATH160, GET, option).json().then(r => r.body),
      /**
       * 原産地呼称を追加更新削除します。
       * @returns OK
       */
      put: (option: { body: Methods_1bx0e4l['put']['reqBody'], query?: Methods_1bx0e4l['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1bx0e4l['put']['resBody'], BasicHeaders, Methods_1bx0e4l['put']['status']>(prefix, PATH160, PUT, option).json(),
      /**
       * 原産地呼称を追加更新削除します。
       * @returns OK
       */
      $put: (option: { body: Methods_1bx0e4l['put']['reqBody'], query?: Methods_1bx0e4l['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1bx0e4l['put']['resBody'], BasicHeaders, Methods_1bx0e4l['put']['status']>(prefix, PATH160, PUT, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_1bx0e4l['get']['query'] } | { method: 'put'; query: Methods_1bx0e4l['put']['query'] } | undefined) =>
        `${prefix}${PATH160}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    price_groups: {
      _price_group_id: (val1: number) => {
        const prefix1 = `${PATH161}/${val1}`;

        return {
          /**
           * 価格グループを取得します
           * @returns OK
           */
          get: (option?: { query?: Methods_136t67q['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_136t67q['get']['resBody'], BasicHeaders, Methods_136t67q['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * 価格グループを取得します
           * @returns OK
           */
          $get: (option?: { query?: Methods_136t67q['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_136t67q['get']['resBody'], BasicHeaders, Methods_136t67q['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_136t67q['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
      /**
       * 価格グループ一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_1n6zxfo['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1n6zxfo['get']['resBody'], BasicHeaders, Methods_1n6zxfo['get']['status']>(prefix, PATH161, GET, option).json(),
      /**
       * 価格グループ一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_1n6zxfo['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1n6zxfo['get']['resBody'], BasicHeaders, Methods_1n6zxfo['get']['status']>(prefix, PATH161, GET, option).json().then(r => r.body),
      /**
       * 価格グループを追加更新削除します。
       * @returns OK
       */
      put: (option: { body: Methods_1n6zxfo['put']['reqBody'], query?: Methods_1n6zxfo['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1n6zxfo['put']['resBody'], BasicHeaders, Methods_1n6zxfo['put']['status']>(prefix, PATH161, PUT, option).json(),
      /**
       * 価格グループを追加更新削除します。
       * @returns OK
       */
      $put: (option: { body: Methods_1n6zxfo['put']['reqBody'], query?: Methods_1n6zxfo['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1n6zxfo['put']['resBody'], BasicHeaders, Methods_1n6zxfo['put']['status']>(prefix, PATH161, PUT, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_1n6zxfo['get']['query'] } | { method: 'put'; query: Methods_1n6zxfo['put']['query'] } | undefined) =>
        `${prefix}${PATH161}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    printers: {
      _printer_id: (val1: number) => {
        const prefix1 = `${PATH162}/${val1}`;

        return {
          /**
           * プリンターを取得します
           * @returns OK
           */
          get: (option?: { query?: Methods_arijd2['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_arijd2['get']['resBody'], BasicHeaders, Methods_arijd2['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * プリンターを取得します
           * @returns OK
           */
          $get: (option?: { query?: Methods_arijd2['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_arijd2['get']['resBody'], BasicHeaders, Methods_arijd2['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_arijd2['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
      /**
       * プリンター一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_1ygzbb['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1ygzbb['get']['resBody'], BasicHeaders, Methods_1ygzbb['get']['status']>(prefix, PATH162, GET, option).json(),
      /**
       * プリンター一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_1ygzbb['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1ygzbb['get']['resBody'], BasicHeaders, Methods_1ygzbb['get']['status']>(prefix, PATH162, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_1ygzbb['get']['query'] } | undefined) =>
        `${prefix}${PATH162}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    purchase_prices: {
      _purchase_price_id: (val1: number) => {
        const prefix1 = `${PATH163}/${val1}`;

        return {
          re_calculate: {
            /**
             * 入荷原価を再計算します
             * @returns OK
             */
            put: (option?: { query?: Methods_pdc1w5['put']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_pdc1w5['put']['resBody'], BasicHeaders, Methods_pdc1w5['put']['status']>(prefix, `${prefix1}${PATH164}`, PUT, option).json(),
            /**
             * 入荷原価を再計算します
             * @returns OK
             */
            $put: (option?: { query?: Methods_pdc1w5['put']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_pdc1w5['put']['resBody'], BasicHeaders, Methods_pdc1w5['put']['status']>(prefix, `${prefix1}${PATH164}`, PUT, option).json().then(r => r.body),
            $path: (option?: { method: 'put'; query: Methods_pdc1w5['put']['query'] } | undefined) =>
              `${prefix}${prefix1}${PATH164}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          },
          /**
           * 入荷原価を取得します
           * @returns OK
           */
          get: (option?: { query?: Methods_ltl32u['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_ltl32u['get']['resBody'], BasicHeaders, Methods_ltl32u['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * 入荷原価を取得します
           * @returns OK
           */
          $get: (option?: { query?: Methods_ltl32u['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_ltl32u['get']['resBody'], BasicHeaders, Methods_ltl32u['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_ltl32u['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
      export: {
        /**
         * 原価計算回覧用を出力します。
         */
        post: (option: { body: Methods_sfex1v['post']['reqBody'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_sfex1v['post']['status']>(prefix, PATH165, POST, option).send(),
        /**
         * 原価計算回覧用を出力します。
         */
        $post: (option: { body: Methods_sfex1v['post']['reqBody'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_sfex1v['post']['status']>(prefix, PATH165, POST, option).send().then(r => r.body),
        $path: () => `${prefix}${PATH165}`,
      },
      export_gross_margins: {
        /**
         * 粗利一覧を出力します。
         */
        post: (option: { body: Methods_11rxog8['post']['reqBody'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_11rxog8['post']['status']>(prefix, PATH166, POST, option).send(),
        /**
         * 粗利一覧を出力します。
         */
        $post: (option: { body: Methods_11rxog8['post']['reqBody'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_11rxog8['post']['status']>(prefix, PATH166, POST, option).send().then(r => r.body),
        $path: () => `${prefix}${PATH166}`,
      },
      update_costs: {
        /**
         * 在庫単価を確定し、商品マスタに最終仕入単価を設定します。ロックの取得を指定した場合、ロックの取得に成功した後、直ちにそのロックは解放されます。
         * @returns OK
         */
        post: (option: { body: Methods_1ukyzzp['post']['reqBody'], query?: Methods_1ukyzzp['post']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1ukyzzp['post']['resBody'], BasicHeaders, Methods_1ukyzzp['post']['status']>(prefix, PATH167, POST, option).json(),
        /**
         * 在庫単価を確定し、商品マスタに最終仕入単価を設定します。ロックの取得を指定した場合、ロックの取得に成功した後、直ちにそのロックは解放されます。
         * @returns OK
         */
        $post: (option: { body: Methods_1ukyzzp['post']['reqBody'], query?: Methods_1ukyzzp['post']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1ukyzzp['post']['resBody'], BasicHeaders, Methods_1ukyzzp['post']['status']>(prefix, PATH167, POST, option).json().then(r => r.body),
        $path: (option?: { method: 'post'; query: Methods_1ukyzzp['post']['query'] } | undefined) =>
          `${prefix}${PATH167}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      /**
       * 入荷原価一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_bu0lk['get']['query'], config?: T | undefined }) =>
        fetch<Methods_bu0lk['get']['resBody'], BasicHeaders, Methods_bu0lk['get']['status']>(prefix, PATH163, GET, option).json(),
      /**
       * 入荷原価一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_bu0lk['get']['query'], config?: T | undefined }) =>
        fetch<Methods_bu0lk['get']['resBody'], BasicHeaders, Methods_bu0lk['get']['status']>(prefix, PATH163, GET, option).json().then(r => r.body),
      /**
       * 入荷原価を追加更新削除します。
       * @returns OK
       */
      put: (option: { body: Methods_bu0lk['put']['reqBody'], query?: Methods_bu0lk['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_bu0lk['put']['resBody'], BasicHeaders, Methods_bu0lk['put']['status']>(prefix, PATH163, PUT, option).json(),
      /**
       * 入荷原価を追加更新削除します。
       * @returns OK
       */
      $put: (option: { body: Methods_bu0lk['put']['reqBody'], query?: Methods_bu0lk['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_bu0lk['put']['resBody'], BasicHeaders, Methods_bu0lk['put']['status']>(prefix, PATH163, PUT, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_bu0lk['get']['query'] } | { method: 'put'; query: Methods_bu0lk['put']['query'] } | undefined) =>
        `${prefix}${PATH163}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    purchase_reservations: {
      _purchase_reservation_id: (val1: number) => {
        const prefix1 = `${PATH168}/${val1}`;

        return {
          /**
           * 在庫・仕入計上予定を取得します
           * @returns OK
           */
          get: (option?: { query?: Methods_1bj7oj8['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1bj7oj8['get']['resBody'], BasicHeaders, Methods_1bj7oj8['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * 在庫・仕入計上予定を取得します
           * @returns OK
           */
          $get: (option?: { query?: Methods_1bj7oj8['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1bj7oj8['get']['resBody'], BasicHeaders, Methods_1bj7oj8['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_1bj7oj8['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
      export_arrival_schedule: {
        /**
         * 入荷入予定表を出力します
         */
        post: (option: { body: Methods_1bo1btm['post']['reqBody'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_1bo1btm['post']['status']>(prefix, PATH169, POST, option).send(),
        /**
         * 入荷入予定表を出力します
         */
        $post: (option: { body: Methods_1bo1btm['post']['reqBody'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_1bo1btm['post']['status']>(prefix, PATH169, POST, option).send().then(r => r.body),
        $path: () => `${prefix}${PATH169}`,
      },
      export_schedule: {
        /**
         * 指定月以降の仕入予定表を出力します
         */
        post: (option: { body: Methods_130fjs8['post']['reqBody'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_130fjs8['post']['status']>(prefix, PATH170, POST, option).send(),
        /**
         * 指定月以降の仕入予定表を出力します
         */
        $post: (option: { body: Methods_130fjs8['post']['reqBody'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_130fjs8['post']['status']>(prefix, PATH170, POST, option).send().then(r => r.body),
        $path: () => `${prefix}${PATH170}`,
      },
      /**
       * 在庫・仕入計上予定一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_1l1ykwt['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1l1ykwt['get']['resBody'], BasicHeaders, Methods_1l1ykwt['get']['status']>(prefix, PATH168, GET, option).json(),
      /**
       * 在庫・仕入計上予定一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_1l1ykwt['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1l1ykwt['get']['resBody'], BasicHeaders, Methods_1l1ykwt['get']['status']>(prefix, PATH168, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_1l1ykwt['get']['query'] } | undefined) =>
        `${prefix}${PATH168}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    purchase_results: {
      _purchase_result_id: (val1: number) => {
        const prefix1 = `${PATH171}/${val1}`;

        return {
          /**
           * 在庫・仕入計上実績を取得します
           * @returns OK
           */
          get: (option?: { query?: Methods_103869i['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_103869i['get']['resBody'], BasicHeaders, Methods_103869i['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * 在庫・仕入計上実績を取得します
           * @returns OK
           */
          $get: (option?: { query?: Methods_103869i['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_103869i['get']['resBody'], BasicHeaders, Methods_103869i['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_103869i['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
      /**
       * 在庫・仕入計上実績一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_1ls2myo['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1ls2myo['get']['resBody'], BasicHeaders, Methods_1ls2myo['get']['status']>(prefix, PATH171, GET, option).json(),
      /**
       * 在庫・仕入計上実績一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_1ls2myo['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1ls2myo['get']['resBody'], BasicHeaders, Methods_1ls2myo['get']['status']>(prefix, PATH171, GET, option).json().then(r => r.body),
      /**
       * 在庫・仕入計上予定を更新します。更新のみ可能です。
       * @returns OK
       */
      put: (option: { body: Methods_1ls2myo['put']['reqBody'], query?: Methods_1ls2myo['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1ls2myo['put']['resBody'], BasicHeaders, Methods_1ls2myo['put']['status']>(prefix, PATH171, PUT, option).json(),
      /**
       * 在庫・仕入計上予定を更新します。更新のみ可能です。
       * @returns OK
       */
      $put: (option: { body: Methods_1ls2myo['put']['reqBody'], query?: Methods_1ls2myo['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1ls2myo['put']['resBody'], BasicHeaders, Methods_1ls2myo['put']['status']>(prefix, PATH171, PUT, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_1ls2myo['get']['query'] } | { method: 'put'; query: Methods_1ls2myo['put']['query'] } | undefined) =>
        `${prefix}${PATH171}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    rates: {
      import: {
        /**
         * TTMレートデータを取り込みます。
         */
        post: (option: { body: Methods_14ma0d3['post']['reqBody'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_14ma0d3['post']['status']>(prefix, PATH173, POST, option, 'FormData').send(),
        /**
         * TTMレートデータを取り込みます。
         */
        $post: (option: { body: Methods_14ma0d3['post']['reqBody'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_14ma0d3['post']['status']>(prefix, PATH173, POST, option, 'FormData').send().then(r => r.body),
        $path: () => `${prefix}${PATH173}`,
      },
      /**
       * TTMレート一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_1s67nk1['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1s67nk1['get']['resBody'], BasicHeaders, Methods_1s67nk1['get']['status']>(prefix, PATH172, GET, option).json(),
      /**
       * TTMレート一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_1s67nk1['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1s67nk1['get']['resBody'], BasicHeaders, Methods_1s67nk1['get']['status']>(prefix, PATH172, GET, option).json().then(r => r.body),
      /**
       * レートを追加更新削除します。
       * @returns OK
       */
      put: (option: { body: Methods_1s67nk1['put']['reqBody'], query?: Methods_1s67nk1['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1s67nk1['put']['resBody'], BasicHeaders, Methods_1s67nk1['put']['status']>(prefix, PATH172, PUT, option).json(),
      /**
       * レートを追加更新削除します。
       * @returns OK
       */
      $put: (option: { body: Methods_1s67nk1['put']['reqBody'], query?: Methods_1s67nk1['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1s67nk1['put']['resBody'], BasicHeaders, Methods_1s67nk1['put']['status']>(prefix, PATH172, PUT, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_1s67nk1['get']['query'] } | { method: 'put'; query: Methods_1s67nk1['put']['query'] } | undefined) =>
        `${prefix}${PATH172}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    receivable_accounts: {
      print: {
        /**
         * 売掛金残高証明書出力を出力します
         */
        post: (option: { body: Methods_fs0029['post']['reqBody'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_fs0029['post']['status']>(prefix, PATH175, POST, option).send(),
        /**
         * 売掛金残高証明書出力を出力します
         */
        $post: (option: { body: Methods_fs0029['post']['reqBody'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_fs0029['post']['status']>(prefix, PATH175, POST, option).send().then(r => r.body),
        $path: () => `${prefix}${PATH175}`,
      },
      /**
       * 売掛残高一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_17sj47x['get']['query'], config?: T | undefined }) =>
        fetch<Methods_17sj47x['get']['resBody'], BasicHeaders, Methods_17sj47x['get']['status']>(prefix, PATH174, GET, option).json(),
      /**
       * 売掛残高一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_17sj47x['get']['query'], config?: T | undefined }) =>
        fetch<Methods_17sj47x['get']['resBody'], BasicHeaders, Methods_17sj47x['get']['status']>(prefix, PATH174, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_17sj47x['get']['query'] } | undefined) =>
        `${prefix}${PATH174}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    recent_shipping_histories: {
      with_sales_orders: {
        /**
         * 直近出荷履歴・国内受注一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_1uoyobl['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1uoyobl['get']['resBody'], BasicHeaders, Methods_1uoyobl['get']['status']>(prefix, PATH176, GET, option).json(),
        /**
         * 直近出荷履歴・国内受注一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_1uoyobl['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1uoyobl['get']['resBody'], BasicHeaders, Methods_1uoyobl['get']['status']>(prefix, PATH176, GET, option).json().then(r => r.body),
        /**
         * 直近出荷履歴・国内受注を追加更新削除します。
         * @returns OK
         */
        put: (option: { body: Methods_1uoyobl['put']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_1uoyobl['put']['resBody'], BasicHeaders, Methods_1uoyobl['put']['status']>(prefix, PATH176, PUT, option).json(),
        /**
         * 直近出荷履歴・国内受注を追加更新削除します。
         * @returns OK
         */
        $put: (option: { body: Methods_1uoyobl['put']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_1uoyobl['put']['resBody'], BasicHeaders, Methods_1uoyobl['put']['status']>(prefix, PATH176, PUT, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_1uoyobl['get']['query'] } | undefined) =>
          `${prefix}${PATH176}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
    },
    reports: {
      _report_id: (val1: number) => {
        const prefix1 = `${PATH177}/${val1}`;

        return {
          /**
           * 帳票を取得します
           * @returns OK
           */
          get: (option?: { query?: Methods_hm0cpk['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_hm0cpk['get']['resBody'], BasicHeaders, Methods_hm0cpk['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * 帳票を取得します
           * @returns OK
           */
          $get: (option?: { query?: Methods_hm0cpk['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_hm0cpk['get']['resBody'], BasicHeaders, Methods_hm0cpk['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_hm0cpk['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
      /**
       * 帳票一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_1a564p['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1a564p['get']['resBody'], BasicHeaders, Methods_1a564p['get']['status']>(prefix, PATH177, GET, option).json(),
      /**
       * 帳票一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_1a564p['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1a564p['get']['resBody'], BasicHeaders, Methods_1a564p['get']['status']>(prefix, PATH177, GET, option).json().then(r => r.body),
      /**
       * 帳票を追加更新削除します。
       * @returns OK
       */
      put: (option: { body: Methods_1a564p['put']['reqBody'], query?: Methods_1a564p['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1a564p['put']['resBody'], BasicHeaders, Methods_1a564p['put']['status']>(prefix, PATH177, PUT, option).json(),
      /**
       * 帳票を追加更新削除します。
       * @returns OK
       */
      $put: (option: { body: Methods_1a564p['put']['reqBody'], query?: Methods_1a564p['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1a564p['put']['resBody'], BasicHeaders, Methods_1a564p['put']['status']>(prefix, PATH177, PUT, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_1a564p['get']['query'] } | { method: 'put'; query: Methods_1a564p['put']['query'] } | undefined) =>
        `${prefix}${PATH177}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    reservation_and_stocks: {
      domestic_orders: {
        /**
         * 指定条件の国内発注情報を取得します。
         * @returns OK
         */
        get: (option: { query: Methods_rjs8sn['get']['query'], config?: T | undefined }) =>
          fetch<Methods_rjs8sn['get']['resBody'], BasicHeaders, Methods_rjs8sn['get']['status']>(prefix, PATH179, GET, option).json(),
        /**
         * 指定条件の国内発注情報を取得します。
         * @returns OK
         */
        $get: (option: { query: Methods_rjs8sn['get']['query'], config?: T | undefined }) =>
          fetch<Methods_rjs8sn['get']['resBody'], BasicHeaders, Methods_rjs8sn['get']['status']>(prefix, PATH179, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_rjs8sn['get']['query'] } | undefined) =>
          `${prefix}${PATH179}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      latest_arrival_domestic: {
        /**
         * 指定(なければ直近)の船積オーダーを取得します
         * @returns OK
         */
        get: (option?: { query?: Methods_nahfit['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_nahfit['get']['resBody'], BasicHeaders, Methods_nahfit['get']['status']>(prefix, PATH180, GET, option).json(),
        /**
         * 指定(なければ直近)の船積オーダーを取得します
         * @returns OK
         */
        $get: (option?: { query?: Methods_nahfit['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_nahfit['get']['resBody'], BasicHeaders, Methods_nahfit['get']['status']>(prefix, PATH180, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_nahfit['get']['query'] } | undefined) =>
          `${prefix}${PATH180}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      latest_arrival_shipping: {
        /**
         * 指定(なければ直近)の船積オーダーを取得します
         * @returns OK
         */
        get: (option?: { query?: Methods_lxp7hn['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_lxp7hn['get']['resBody'], BasicHeaders, Methods_lxp7hn['get']['status']>(prefix, PATH181, GET, option).json(),
        /**
         * 指定(なければ直近)の船積オーダーを取得します
         * @returns OK
         */
        $get: (option?: { query?: Methods_lxp7hn['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_lxp7hn['get']['resBody'], BasicHeaders, Methods_lxp7hn['get']['status']>(prefix, PATH181, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_lxp7hn['get']['query'] } | undefined) =>
          `${prefix}${PATH181}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      oldest_stock_change: {
        /**
         * 指定の品番、倉庫IDMに該当するうち、依頼日が最も古い在庫振替Noを取得します。
         * @returns OK
         */
        get: (option: { query: Methods_1uzc7ew['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1uzc7ew['get']['resBody'], BasicHeaders, Methods_1uzc7ew['get']['status']>(prefix, PATH182, GET, option).json(),
        /**
         * 指定の品番、倉庫IDMに該当するうち、依頼日が最も古い在庫振替Noを取得します。
         * @returns OK
         */
        $get: (option: { query: Methods_1uzc7ew['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1uzc7ew['get']['resBody'], BasicHeaders, Methods_1uzc7ew['get']['status']>(prefix, PATH182, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_1uzc7ew['get']['query'] } | undefined) =>
          `${prefix}${PATH182}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      print: {
        /**
         * 現物取置依頼書を出力します。
         * @returns OK
         */
        post: (option: { body: Methods_cfs23c['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_cfs23c['post']['resBody'], BasicHeaders, Methods_cfs23c['post']['status']>(prefix, PATH183, POST, option).json(),
        /**
         * 現物取置依頼書を出力します。
         * @returns OK
         */
        $post: (option: { body: Methods_cfs23c['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_cfs23c['post']['resBody'], BasicHeaders, Methods_cfs23c['post']['status']>(prefix, PATH183, POST, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH183}`,
      },
      shipping_orders: {
        /**
         * 指定条件の船積オーダー情報を取得します。
         * @returns OK
         */
        get: (option: { query: Methods_1kd6zq5['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1kd6zq5['get']['resBody'], BasicHeaders, Methods_1kd6zq5['get']['status']>(prefix, PATH184, GET, option).json(),
        /**
         * 指定条件の船積オーダー情報を取得します。
         * @returns OK
         */
        $get: (option: { query: Methods_1kd6zq5['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1kd6zq5['get']['resBody'], BasicHeaders, Methods_1kd6zq5['get']['status']>(prefix, PATH184, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_1kd6zq5['get']['query'] } | undefined) =>
          `${prefix}${PATH184}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      /**
       * 予約受注/取置一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_foyqc8['get']['query'], config?: T | undefined }) =>
        fetch<Methods_foyqc8['get']['resBody'], BasicHeaders, Methods_foyqc8['get']['status']>(prefix, PATH178, GET, option).json(),
      /**
       * 予約受注/取置一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_foyqc8['get']['query'], config?: T | undefined }) =>
        fetch<Methods_foyqc8['get']['resBody'], BasicHeaders, Methods_foyqc8['get']['status']>(prefix, PATH178, GET, option).json().then(r => r.body),
      /**
       * 予約受注/取置を追加更新削除します。
       * @returns OK
       */
      put: (option: { body: Methods_foyqc8['put']['reqBody'], query?: Methods_foyqc8['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_foyqc8['put']['resBody'], BasicHeaders, Methods_foyqc8['put']['status']>(prefix, PATH178, PUT, option).json(),
      /**
       * 予約受注/取置を追加更新削除します。
       * @returns OK
       */
      $put: (option: { body: Methods_foyqc8['put']['reqBody'], query?: Methods_foyqc8['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_foyqc8['put']['resBody'], BasicHeaders, Methods_foyqc8['put']['status']>(prefix, PATH178, PUT, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_foyqc8['get']['query'] } | { method: 'put'; query: Methods_foyqc8['put']['query'] } | undefined) =>
        `${prefix}${PATH178}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    sales_orders: {
      _sales_order_id: (val1: number) => {
        const prefix1 = `${PATH185}/${val1}`;

        return {
          /**
           * 国内受注を取得します
           * @returns OK
           */
          get: (option?: { query?: Methods_5vrwnq['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_5vrwnq['get']['resBody'], BasicHeaders, Methods_5vrwnq['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * 国内受注を取得します
           * @returns OK
           */
          $get: (option?: { query?: Methods_5vrwnq['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_5vrwnq['get']['resBody'], BasicHeaders, Methods_5vrwnq['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_5vrwnq['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
      bulk_async: {
        /**
         * 国内受注を追加更新削除します。応答には user_logs も含まれます。embed はバッチ出力に対する指示になります。
         * @returns OK
         */
        post: (option: { body: Methods_1b52r4c['post']['reqBody'], query?: Methods_1b52r4c['post']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1b52r4c['post']['resBody'], BasicHeaders, Methods_1b52r4c['post']['status']>(prefix, PATH186, POST, option).json(),
        /**
         * 国内受注を追加更新削除します。応答には user_logs も含まれます。embed はバッチ出力に対する指示になります。
         * @returns OK
         */
        $post: (option: { body: Methods_1b52r4c['post']['reqBody'], query?: Methods_1b52r4c['post']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1b52r4c['post']['resBody'], BasicHeaders, Methods_1b52r4c['post']['status']>(prefix, PATH186, POST, option).json().then(r => r.body),
        $path: (option?: { method: 'post'; query: Methods_1b52r4c['post']['query'] } | undefined) =>
          `${prefix}${PATH186}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      bulk_insert: {
        /**
         * 国内受注を受注データファイルから一括登録します。
         * @returns OK
         */
        post: (option: { body: Methods_d9j7z1['post']['reqBody'], query?: Methods_d9j7z1['post']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_d9j7z1['post']['resBody'], BasicHeaders, Methods_d9j7z1['post']['status']>(prefix, PATH187, POST, option, 'FormData').json(),
        /**
         * 国内受注を受注データファイルから一括登録します。
         * @returns OK
         */
        $post: (option: { body: Methods_d9j7z1['post']['reqBody'], query?: Methods_d9j7z1['post']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_d9j7z1['post']['resBody'], BasicHeaders, Methods_d9j7z1['post']['status']>(prefix, PATH187, POST, option, 'FormData').json().then(r => r.body),
        $path: (option?: { method: 'post'; query: Methods_d9j7z1['post']['query'] } | undefined) =>
          `${prefix}${PATH187}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      bulk_insert_async: {
        /**
         * 国内受注を受注データファイルから一括登録します。応答には user_logs も含まれます。embed はバッチ出力に対する指示になります。
         * @returns OK
         */
        post: (option: { body: Methods_1fgtra2['post']['reqBody'], query?: Methods_1fgtra2['post']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1fgtra2['post']['resBody'], BasicHeaders, Methods_1fgtra2['post']['status']>(prefix, PATH188, POST, option, 'FormData').json(),
        /**
         * 国内受注を受注データファイルから一括登録します。応答には user_logs も含まれます。embed はバッチ出力に対する指示になります。
         * @returns OK
         */
        $post: (option: { body: Methods_1fgtra2['post']['reqBody'], query?: Methods_1fgtra2['post']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1fgtra2['post']['resBody'], BasicHeaders, Methods_1fgtra2['post']['status']>(prefix, PATH188, POST, option, 'FormData').json().then(r => r.body),
        $path: (option?: { method: 'post'; query: Methods_1fgtra2['post']['query'] } | undefined) =>
          `${prefix}${PATH188}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      export_denpatu: {
        /**
         * 伝発名人帳票データを出力します
         */
        post: (option: { body: Methods_1w8zs1h['post']['reqBody'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_1w8zs1h['post']['status']>(prefix, PATH189, POST, option).send(),
        /**
         * 伝発名人帳票データを出力します
         */
        $post: (option: { body: Methods_1w8zs1h['post']['reqBody'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_1w8zs1h['post']['status']>(prefix, PATH189, POST, option).send().then(r => r.body),
        $path: () => `${prefix}${PATH189}`,
      },
      fare_summary: {
        /**
         * 国内受注運賃確認用一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_n2br5g['get']['query'], config?: T | undefined }) =>
          fetch<Methods_n2br5g['get']['resBody'], BasicHeaders, Methods_n2br5g['get']['status']>(prefix, PATH190, GET, option).json(),
        /**
         * 国内受注運賃確認用一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_n2br5g['get']['query'], config?: T | undefined }) =>
          fetch<Methods_n2br5g['get']['resBody'], BasicHeaders, Methods_n2br5g['get']['status']>(prefix, PATH190, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_n2br5g['get']['query'] } | undefined) =>
          `${prefix}${PATH190}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      get_invent_related: {
        /**
         * 国内受注商品関連情報を取得します
         * @returns OK
         */
        post: (option: { body: Methods_11ad2v2['post']['reqBody'], query?: Methods_11ad2v2['post']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_11ad2v2['post']['resBody'], BasicHeaders, Methods_11ad2v2['post']['status']>(prefix, PATH191, POST, option).json(),
        /**
         * 国内受注商品関連情報を取得します
         * @returns OK
         */
        $post: (option: { body: Methods_11ad2v2['post']['reqBody'], query?: Methods_11ad2v2['post']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_11ad2v2['post']['resBody'], BasicHeaders, Methods_11ad2v2['post']['status']>(prefix, PATH191, POST, option).json().then(r => r.body),
        $path: (option?: { method: 'post'; query: Methods_11ad2v2['post']['query'] } | undefined) =>
          `${prefix}${PATH191}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      invent_sales: {
        /**
         * 商品売上一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_iupkuk['get']['query'], config?: T | undefined }) =>
          fetch<Methods_iupkuk['get']['resBody'], BasicHeaders, Methods_iupkuk['get']['status']>(prefix, PATH192, GET, option).json(),
        /**
         * 商品売上一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_iupkuk['get']['query'], config?: T | undefined }) =>
          fetch<Methods_iupkuk['get']['resBody'], BasicHeaders, Methods_iupkuk['get']['status']>(prefix, PATH192, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_iupkuk['get']['query'] } | undefined) =>
          `${prefix}${PATH192}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      invents: {
        /**
         * 販売管理用商品一覧を取得します
         * @returns OK
         */
        get: (option: { query: Methods_109kte0['get']['query'], config?: T | undefined }) =>
          fetch<Methods_109kte0['get']['resBody'], BasicHeaders, Methods_109kte0['get']['status']>(prefix, PATH193, GET, option).json(),
        /**
         * 販売管理用商品一覧を取得します
         * @returns OK
         */
        $get: (option: { query: Methods_109kte0['get']['query'], config?: T | undefined }) =>
          fetch<Methods_109kte0['get']['resBody'], BasicHeaders, Methods_109kte0['get']['status']>(prefix, PATH193, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_109kte0['get']['query'] } | undefined) =>
          `${prefix}${PATH193}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      print_delivery_guidance: {
        /**
         * 代引案内を出力します。
         * @returns OK
         */
        post: (option: { body: Methods_yswje['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_yswje['post']['resBody'], BasicHeaders, Methods_yswje['post']['status']>(prefix, PATH194, POST, option).json(),
        /**
         * 代引案内を出力します。
         * @returns OK
         */
        $post: (option: { body: Methods_yswje['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_yswje['post']['resBody'], BasicHeaders, Methods_yswje['post']['status']>(prefix, PATH194, POST, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH194}`,
      },
      print_delivery_slip: {
        /**
         * 納品書・商品明細書を出力します。
         * @returns OK
         */
        post: (option: { body: Methods_36szey['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_36szey['post']['resBody'], BasicHeaders, Methods_36szey['post']['status']>(prefix, PATH195, POST, option).json(),
        /**
         * 納品書・商品明細書を出力します。
         * @returns OK
         */
        $post: (option: { body: Methods_36szey['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_36szey['post']['resBody'], BasicHeaders, Methods_36szey['post']['status']>(prefix, PATH195, POST, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH195}`,
      },
      print_physical_stock_request: {
        /**
         * 現物取置依頼書を出力します。
         * @returns OK
         */
        post: (option: { body: Methods_1w9b5yx['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_1w9b5yx['post']['resBody'], BasicHeaders, Methods_1w9b5yx['post']['status']>(prefix, PATH196, POST, option).json(),
        /**
         * 現物取置依頼書を出力します。
         * @returns OK
         */
        $post: (option: { body: Methods_1w9b5yx['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_1w9b5yx['post']['resBody'], BasicHeaders, Methods_1w9b5yx['post']['status']>(prefix, PATH196, POST, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH196}`,
      },
      print_purchase_order: {
        /**
         * 発注書(直送)を出力します。
         * @returns OK
         */
        post: (option: { body: Methods_ps95lv['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_ps95lv['post']['resBody'], BasicHeaders, Methods_ps95lv['post']['status']>(prefix, PATH197, POST, option).json(),
        /**
         * 発注書(直送)を出力します。
         * @returns OK
         */
        $post: (option: { body: Methods_ps95lv['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_ps95lv['post']['resBody'], BasicHeaders, Methods_ps95lv['post']['status']>(prefix, PATH197, POST, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH197}`,
      },
      print_transfer_request: {
        /**
         * 振込依頼を出力します。
         * @returns OK
         */
        post: (option: { body: Methods_1vi961u['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_1vi961u['post']['resBody'], BasicHeaders, Methods_1vi961u['post']['status']>(prefix, PATH198, POST, option).json(),
        /**
         * 振込依頼を出力します。
         * @returns OK
         */
        $post: (option: { body: Methods_1vi961u['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_1vi961u['post']['resBody'], BasicHeaders, Methods_1vi961u['post']['status']>(prefix, PATH198, POST, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH198}`,
      },
      /**
       * 国内受注一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_u8jan6['get']['query'], config?: T | undefined }) =>
        fetch<Methods_u8jan6['get']['resBody'], BasicHeaders, Methods_u8jan6['get']['status']>(prefix, PATH185, GET, option).json(),
      /**
       * 国内受注一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_u8jan6['get']['query'], config?: T | undefined }) =>
        fetch<Methods_u8jan6['get']['resBody'], BasicHeaders, Methods_u8jan6['get']['status']>(prefix, PATH185, GET, option).json().then(r => r.body),
      /**
       * 国内受注を追加更新削除します。
       * @returns OK
       */
      put: (option: { body: Methods_u8jan6['put']['reqBody'], query?: Methods_u8jan6['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_u8jan6['put']['resBody'], BasicHeaders, Methods_u8jan6['put']['status']>(prefix, PATH185, PUT, option).json(),
      /**
       * 国内受注を追加更新削除します。
       * @returns OK
       */
      $put: (option: { body: Methods_u8jan6['put']['reqBody'], query?: Methods_u8jan6['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_u8jan6['put']['resBody'], BasicHeaders, Methods_u8jan6['put']['status']>(prefix, PATH185, PUT, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_u8jan6['get']['query'] } | { method: 'put'; query: Methods_u8jan6['put']['query'] } | undefined) =>
        `${prefix}${PATH185}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    sales_prices: {
      bulk_delete: {
        /**
         * 販売単価を削除します。
         * @returns OK
         */
        put: (option: { body: Methods_1hccyu4['put']['reqBody'], query?: Methods_1hccyu4['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1hccyu4['put']['resBody'], BasicHeaders, Methods_1hccyu4['put']['status']>(prefix, PATH199, PUT, option).json(),
        /**
         * 販売単価を削除します。
         * @returns OK
         */
        $put: (option: { body: Methods_1hccyu4['put']['reqBody'], query?: Methods_1hccyu4['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1hccyu4['put']['resBody'], BasicHeaders, Methods_1hccyu4['put']['status']>(prefix, PATH199, PUT, option).json().then(r => r.body),
        $path: (option?: { method: 'put'; query: Methods_1hccyu4['put']['query'] } | undefined) =>
          `${prefix}${PATH199}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
    },
    sales_reservations: {
      _sales_reservation_id: (val1: number) => {
        const prefix1 = `${PATH200}/${val1}`;

        return {
          /**
           * 予約受注を取得します
           * @returns OK
           */
          get: (option?: { query?: Methods_1ehgg3q['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1ehgg3q['get']['resBody'], BasicHeaders, Methods_1ehgg3q['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * 予約受注を取得します
           * @returns OK
           */
          $get: (option?: { query?: Methods_1ehgg3q['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1ehgg3q['get']['resBody'], BasicHeaders, Methods_1ehgg3q['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_1ehgg3q['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
      input_assist: {
        /**
         * 入力補助用予約受注一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_1qndiw3['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1qndiw3['get']['resBody'], BasicHeaders, Methods_1qndiw3['get']['status']>(prefix, PATH201, GET, option).json(),
        /**
         * 入力補助用予約受注一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_1qndiw3['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1qndiw3['get']['resBody'], BasicHeaders, Methods_1qndiw3['get']['status']>(prefix, PATH201, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_1qndiw3['get']['query'] } | undefined) =>
          `${prefix}${PATH201}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      /**
       * 予約受注一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_1qbsxf4['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1qbsxf4['get']['resBody'], BasicHeaders, Methods_1qbsxf4['get']['status']>(prefix, PATH200, GET, option).json(),
      /**
       * 予約受注一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_1qbsxf4['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1qbsxf4['get']['resBody'], BasicHeaders, Methods_1qbsxf4['get']['status']>(prefix, PATH200, GET, option).json().then(r => r.body),
      /**
       * 予約受注を追加更新削除します。
       * @returns OK
       */
      put: (option: { body: Methods_1qbsxf4['put']['reqBody'], query?: Methods_1qbsxf4['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1qbsxf4['put']['resBody'], BasicHeaders, Methods_1qbsxf4['put']['status']>(prefix, PATH200, PUT, option).json(),
      /**
       * 予約受注を追加更新削除します。
       * @returns OK
       */
      $put: (option: { body: Methods_1qbsxf4['put']['reqBody'], query?: Methods_1qbsxf4['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1qbsxf4['put']['resBody'], BasicHeaders, Methods_1qbsxf4['put']['status']>(prefix, PATH200, PUT, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_1qbsxf4['get']['query'] } | { method: 'put'; query: Methods_1qbsxf4['put']['query'] } | undefined) =>
        `${prefix}${PATH200}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    sales_stock_details: {
      candidates: {
        /**
         * 取置明細候補の一覧を返します。最大でも1件のみ取得されます。
         * @returns OK
         */
        get: (option: { query: Methods_1bftwi5['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1bftwi5['get']['resBody'], BasicHeaders, Methods_1bftwi5['get']['status']>(prefix, PATH203, GET, option).json(),
        /**
         * 取置明細候補の一覧を返します。最大でも1件のみ取得されます。
         * @returns OK
         */
        $get: (option: { query: Methods_1bftwi5['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1bftwi5['get']['resBody'], BasicHeaders, Methods_1bftwi5['get']['status']>(prefix, PATH203, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_1bftwi5['get']['query'] } | undefined) =>
          `${prefix}${PATH203}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      /**
       * 取置明細一覧を返します。
       * @returns OK
       */
      get: (option: { query: Methods_ndog5y['get']['query'], config?: T | undefined }) =>
        fetch<Methods_ndog5y['get']['resBody'], BasicHeaders, Methods_ndog5y['get']['status']>(prefix, PATH202, GET, option).json(),
      /**
       * 取置明細一覧を返します。
       * @returns OK
       */
      $get: (option: { query: Methods_ndog5y['get']['query'], config?: T | undefined }) =>
        fetch<Methods_ndog5y['get']['resBody'], BasicHeaders, Methods_ndog5y['get']['status']>(prefix, PATH202, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_ndog5y['get']['query'] } | undefined) =>
        `${prefix}${PATH202}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    sales_stocks: {
      _sales_stock_id: (val1: number) => {
        const prefix1 = `${PATH204}/${val1}`;

        return {
          /**
           * 取置を取得します
           * @returns OK
           */
          get: (option?: { query?: Methods_19es3ti['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_19es3ti['get']['resBody'], BasicHeaders, Methods_19es3ti['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * 取置を取得します
           * @returns OK
           */
          $get: (option?: { query?: Methods_19es3ti['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_19es3ti['get']['resBody'], BasicHeaders, Methods_19es3ti['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_19es3ti['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
      layaway_request_form: {
        /**
         * 現物取置依頼書用データを取得します
         * @returns OK
         */
        get: (option?: { query?: Methods_d0jse4['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_d0jse4['get']['resBody'], BasicHeaders, Methods_d0jse4['get']['status']>(prefix, PATH205, GET, option).json(),
        /**
         * 現物取置依頼書用データを取得します
         * @returns OK
         */
        $get: (option?: { query?: Methods_d0jse4['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_d0jse4['get']['resBody'], BasicHeaders, Methods_d0jse4['get']['status']>(prefix, PATH205, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_d0jse4['get']['query'] } | undefined) =>
          `${prefix}${PATH205}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      /**
       * 取置一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_pm4n7o['get']['query'], config?: T | undefined }) =>
        fetch<Methods_pm4n7o['get']['resBody'], BasicHeaders, Methods_pm4n7o['get']['status']>(prefix, PATH204, GET, option).json(),
      /**
       * 取置一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_pm4n7o['get']['query'], config?: T | undefined }) =>
        fetch<Methods_pm4n7o['get']['resBody'], BasicHeaders, Methods_pm4n7o['get']['status']>(prefix, PATH204, GET, option).json().then(r => r.body),
      /**
       * 取置を追加更新削除します。
       * @returns OK
       */
      put: (option: { body: Methods_pm4n7o['put']['reqBody'], query?: Methods_pm4n7o['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_pm4n7o['put']['resBody'], BasicHeaders, Methods_pm4n7o['put']['status']>(prefix, PATH204, PUT, option).json(),
      /**
       * 取置を追加更新削除します。
       * @returns OK
       */
      $put: (option: { body: Methods_pm4n7o['put']['reqBody'], query?: Methods_pm4n7o['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_pm4n7o['put']['resBody'], BasicHeaders, Methods_pm4n7o['put']['status']>(prefix, PATH204, PUT, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_pm4n7o['get']['query'] } | { method: 'put'; query: Methods_pm4n7o['put']['query'] } | undefined) =>
        `${prefix}${PATH204}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    sanctum: {
      csrf_cookie: {
        /**
         * CSRFトークンを取得します。
         */
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<void, Methods_1kk25z5['get']['resHeaders'], Methods_1kk25z5['get']['status']>(prefix, PATH206, GET, option).send(),
        /**
         * CSRFトークンを取得します。
         */
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<void, Methods_1kk25z5['get']['resHeaders'], Methods_1kk25z5['get']['status']>(prefix, PATH206, GET, option).send().then(r => r.body),
        $path: () => `${prefix}${PATH206}`,
      },
    },
    seals: {
      _seal_id: (val1: number) => {
        const prefix1 = `${PATH207}/${val1}`;

        return {
          /**
           * シールを取得します
           * @returns OK
           */
          get: (option?: { query?: Methods_k6d41y['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_k6d41y['get']['resBody'], BasicHeaders, Methods_k6d41y['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * シールを取得します
           * @returns OK
           */
          $get: (option?: { query?: Methods_k6d41y['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_k6d41y['get']['resBody'], BasicHeaders, Methods_k6d41y['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_k6d41y['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
      /**
       * シール一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_1cbl1fg['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1cbl1fg['get']['resBody'], BasicHeaders, Methods_1cbl1fg['get']['status']>(prefix, PATH207, GET, option).json(),
      /**
       * シール一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_1cbl1fg['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1cbl1fg['get']['resBody'], BasicHeaders, Methods_1cbl1fg['get']['status']>(prefix, PATH207, GET, option).json().then(r => r.body),
      /**
       * シールを追加更新削除します。
       * @returns OK
       */
      put: (option: { body: Methods_1cbl1fg['put']['reqBody'], query?: Methods_1cbl1fg['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1cbl1fg['put']['resBody'], BasicHeaders, Methods_1cbl1fg['put']['status']>(prefix, PATH207, PUT, option).json(),
      /**
       * シールを追加更新削除します。
       * @returns OK
       */
      $put: (option: { body: Methods_1cbl1fg['put']['reqBody'], query?: Methods_1cbl1fg['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1cbl1fg['put']['resBody'], BasicHeaders, Methods_1cbl1fg['put']['status']>(prefix, PATH207, PUT, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_1cbl1fg['get']['query'] } | { method: 'put'; query: Methods_1cbl1fg['put']['query'] } | undefined) =>
        `${prefix}${PATH207}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    search_details: {
      /**
       * 検索明細一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_18ii4xr['get']['query'], config?: T | undefined }) =>
        fetch<Methods_18ii4xr['get']['resBody'], BasicHeaders, Methods_18ii4xr['get']['status']>(prefix, PATH208, GET, option).json(),
      /**
       * 検索明細一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_18ii4xr['get']['query'], config?: T | undefined }) =>
        fetch<Methods_18ii4xr['get']['resBody'], BasicHeaders, Methods_18ii4xr['get']['status']>(prefix, PATH208, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_18ii4xr['get']['query'] } | undefined) =>
        `${prefix}${PATH208}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    searches: {
      _search_id: (val1: number) => {
        const prefix1 = `${PATH209}/${val1}`;

        return {
          /**
           * 検索を取得します
           * @returns OK
           */
          get: (option?: { query?: Methods_1a3e3wd['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1a3e3wd['get']['resBody'], BasicHeaders, Methods_1a3e3wd['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * 検索を取得します
           * @returns OK
           */
          $get: (option?: { query?: Methods_1a3e3wd['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1a3e3wd['get']['resBody'], BasicHeaders, Methods_1a3e3wd['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_1a3e3wd['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
      /**
       * 検索一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_10x5g36['get']['query'], config?: T | undefined }) =>
        fetch<Methods_10x5g36['get']['resBody'], BasicHeaders, Methods_10x5g36['get']['status']>(prefix, PATH209, GET, option).json(),
      /**
       * 検索一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_10x5g36['get']['query'], config?: T | undefined }) =>
        fetch<Methods_10x5g36['get']['resBody'], BasicHeaders, Methods_10x5g36['get']['status']>(prefix, PATH209, GET, option).json().then(r => r.body),
      /**
       * 検索を追加更新削除します。
       * @returns OK
       */
      put: (option: { body: Methods_10x5g36['put']['reqBody'], query?: Methods_10x5g36['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_10x5g36['put']['resBody'], BasicHeaders, Methods_10x5g36['put']['status']>(prefix, PATH209, PUT, option).json(),
      /**
       * 検索を追加更新削除します。
       * @returns OK
       */
      $put: (option: { body: Methods_10x5g36['put']['reqBody'], query?: Methods_10x5g36['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_10x5g36['put']['resBody'], BasicHeaders, Methods_10x5g36['put']['status']>(prefix, PATH209, PUT, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_10x5g36['get']['query'] } | { method: 'put'; query: Methods_10x5g36['put']['query'] } | undefined) =>
        `${prefix}${PATH209}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    ship_companies: {
      _ship_company_id: (val1: number) => {
        const prefix1 = `${PATH210}/${val1}`;

        return {
          /**
           * 船社を取得します
           * @returns OK
           */
          get: (option?: { query?: Methods_fhamih['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_fhamih['get']['resBody'], BasicHeaders, Methods_fhamih['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * 船社を取得します
           * @returns OK
           */
          $get: (option?: { query?: Methods_fhamih['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_fhamih['get']['resBody'], BasicHeaders, Methods_fhamih['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_fhamih['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
      /**
       * 船社一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_11jnudc['get']['query'], config?: T | undefined }) =>
        fetch<Methods_11jnudc['get']['resBody'], BasicHeaders, Methods_11jnudc['get']['status']>(prefix, PATH210, GET, option).json(),
      /**
       * 船社一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_11jnudc['get']['query'], config?: T | undefined }) =>
        fetch<Methods_11jnudc['get']['resBody'], BasicHeaders, Methods_11jnudc['get']['status']>(prefix, PATH210, GET, option).json().then(r => r.body),
      /**
       * 船社を追加更新削除します。
       * @returns OK
       */
      put: (option: { body: Methods_11jnudc['put']['reqBody'], query?: Methods_11jnudc['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_11jnudc['put']['resBody'], BasicHeaders, Methods_11jnudc['put']['status']>(prefix, PATH210, PUT, option).json(),
      /**
       * 船社を追加更新削除します。
       * @returns OK
       */
      $put: (option: { body: Methods_11jnudc['put']['reqBody'], query?: Methods_11jnudc['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_11jnudc['put']['resBody'], BasicHeaders, Methods_11jnudc['put']['status']>(prefix, PATH210, PUT, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_11jnudc['get']['query'] } | { method: 'put'; query: Methods_11jnudc['put']['query'] } | undefined) =>
        `${prefix}${PATH210}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    shippable_invents: {
      /**
       * 出荷可能商品一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_r33c2i['get']['query'], config?: T | undefined }) =>
        fetch<Methods_r33c2i['get']['resBody'], BasicHeaders, Methods_r33c2i['get']['status']>(prefix, PATH211, GET, option).json(),
      /**
       * 出荷可能商品一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_r33c2i['get']['query'], config?: T | undefined }) =>
        fetch<Methods_r33c2i['get']['resBody'], BasicHeaders, Methods_r33c2i['get']['status']>(prefix, PATH211, GET, option).json().then(r => r.body),
      /**
       * 出荷可能商品を追加更新削除します。
       * @returns OK
       */
      put: (option: { body: Methods_r33c2i['put']['reqBody'], query?: Methods_r33c2i['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_r33c2i['put']['resBody'], BasicHeaders, Methods_r33c2i['put']['status']>(prefix, PATH211, PUT, option).json(),
      /**
       * 出荷可能商品を追加更新削除します。
       * @returns OK
       */
      $put: (option: { body: Methods_r33c2i['put']['reqBody'], query?: Methods_r33c2i['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_r33c2i['put']['resBody'], BasicHeaders, Methods_r33c2i['put']['status']>(prefix, PATH211, PUT, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_r33c2i['get']['query'] } | { method: 'put'; query: Methods_r33c2i['put']['query'] } | undefined) =>
        `${prefix}${PATH211}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    shipping_link: {
      execute: {
        /**
         * 出荷指示データ連携バッチを実行します。
         */
        post: (option: { body: Methods_1clml69['post']['reqBody'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_1clml69['post']['status']>(prefix, PATH212, POST, option).send(),
        /**
         * 出荷指示データ連携バッチを実行します。
         */
        $post: (option: { body: Methods_1clml69['post']['reqBody'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_1clml69['post']['status']>(prefix, PATH212, POST, option).send().then(r => r.body),
        $path: () => `${prefix}${PATH212}`,
      },
    },
    shipping_link_histories: {
      _shipping_link_history_id: (val1: number) => {
        const prefix1 = `${PATH213}/${val1}`;

        return {
          /**
           * 出荷指示データ連係履歴を取得します
           * @returns OK
           */
          get: (option?: { query?: Methods_1pqoob1['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1pqoob1['get']['resBody'], BasicHeaders, Methods_1pqoob1['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * 出荷指示データ連係履歴を取得します
           * @returns OK
           */
          $get: (option?: { query?: Methods_1pqoob1['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1pqoob1['get']['resBody'], BasicHeaders, Methods_1pqoob1['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_1pqoob1['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
      /**
       * 出荷指示データ連係履歴一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_spcdle['get']['query'], config?: T | undefined }) =>
        fetch<Methods_spcdle['get']['resBody'], BasicHeaders, Methods_spcdle['get']['status']>(prefix, PATH213, GET, option).json(),
      /**
       * 出荷指示データ連係履歴一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_spcdle['get']['query'], config?: T | undefined }) =>
        fetch<Methods_spcdle['get']['resBody'], BasicHeaders, Methods_spcdle['get']['status']>(prefix, PATH213, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_spcdle['get']['query'] } | undefined) =>
        `${prefix}${PATH213}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    shipping_order_detail: {
      get_new_invent_vintage: {
        /**
         * 船積オーダー明細新品番年号区分取得と撮影区分を返します
         * @returns OK
         */
        post: (option: { body: Methods_16ja1i9['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_16ja1i9['post']['resBody'], BasicHeaders, Methods_16ja1i9['post']['status']>(prefix, PATH214, POST, option).json(),
        /**
         * 船積オーダー明細新品番年号区分取得と撮影区分を返します
         * @returns OK
         */
        $post: (option: { body: Methods_16ja1i9['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_16ja1i9['post']['resBody'], BasicHeaders, Methods_16ja1i9['post']['status']>(prefix, PATH214, POST, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH214}`,
      },
    },
    shipping_order_details: {
      bulk_update_check_limit_on: {
        /**
         * 船積オーダー検品期日データを取り込みます。
         * @returns OK
         */
        post: (option: { body: Methods_12qeru6['post']['reqBody'], query?: Methods_12qeru6['post']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_12qeru6['post']['resBody'], BasicHeaders, Methods_12qeru6['post']['status']>(prefix, PATH215, POST, option, 'FormData').json(),
        /**
         * 船積オーダー検品期日データを取り込みます。
         * @returns OK
         */
        $post: (option: { body: Methods_12qeru6['post']['reqBody'], query?: Methods_12qeru6['post']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_12qeru6['post']['resBody'], BasicHeaders, Methods_12qeru6['post']['status']>(prefix, PATH215, POST, option, 'FormData').json().then(r => r.body),
        $path: (option?: { method: 'post'; query: Methods_12qeru6['post']['query'] } | undefined) =>
          `${prefix}${PATH215}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      export_check_limit_on: {
        /**
         * 検品期日データを出力します。
         */
        post: (option: { body: Methods_1ekyqgi['post']['reqBody'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_1ekyqgi['post']['status']>(prefix, PATH216, POST, option).send(),
        /**
         * 検品期日データを出力します。
         */
        $post: (option: { body: Methods_1ekyqgi['post']['reqBody'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_1ekyqgi['post']['status']>(prefix, PATH216, POST, option).send().then(r => r.body),
        $path: () => `${prefix}${PATH216}`,
      },
      labels: {
        /**
         * ラベル手配管理対象の船積オーダー明細一覧を返します ※ embedを指定なしで船積オーダー明細と船積オーダー通関書類が返却される
         * @returns OK
         */
        get: (option: { query: Methods_1y4c42w['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1y4c42w['get']['resBody'], BasicHeaders, Methods_1y4c42w['get']['status']>(prefix, PATH217, GET, option).json(),
        /**
         * ラベル手配管理対象の船積オーダー明細一覧を返します ※ embedを指定なしで船積オーダー明細と船積オーダー通関書類が返却される
         * @returns OK
         */
        $get: (option: { query: Methods_1y4c42w['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1y4c42w['get']['resBody'], BasicHeaders, Methods_1y4c42w['get']['status']>(prefix, PATH217, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_1y4c42w['get']['query'] } | undefined) =>
          `${prefix}${PATH217}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
    },
    shipping_order_documents: {
      get_latest_analyzes: {
        /**
         * 搬入スケジュールフリータイム計算を行い一覧で返します
         * @returns OK
         */
        post: (option: { body: Methods_8m041z['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_8m041z['post']['resBody'], BasicHeaders, Methods_8m041z['post']['status']>(prefix, PATH219, POST, option).json(),
        /**
         * 搬入スケジュールフリータイム計算を行い一覧で返します
         * @returns OK
         */
        $post: (option: { body: Methods_8m041z['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_8m041z['post']['resBody'], BasicHeaders, Methods_8m041z['post']['status']>(prefix, PATH219, POST, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH219}`,
      },
      /**
       * 船積オーダー通関書類一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_1pfbkzq['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1pfbkzq['get']['resBody'], BasicHeaders, Methods_1pfbkzq['get']['status']>(prefix, PATH218, GET, option).json(),
      /**
       * 船積オーダー通関書類一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_1pfbkzq['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1pfbkzq['get']['resBody'], BasicHeaders, Methods_1pfbkzq['get']['status']>(prefix, PATH218, GET, option).json().then(r => r.body),
      /**
       * 通関書類を一括更新します。
       * @returns OK
       */
      put: (option: { body: Methods_1pfbkzq['put']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_1pfbkzq['put']['resBody'], BasicHeaders, Methods_1pfbkzq['put']['status']>(prefix, PATH218, PUT, option).json(),
      /**
       * 通関書類を一括更新します。
       * @returns OK
       */
      $put: (option: { body: Methods_1pfbkzq['put']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_1pfbkzq['put']['resBody'], BasicHeaders, Methods_1pfbkzq['put']['status']>(prefix, PATH218, PUT, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_1pfbkzq['get']['query'] } | undefined) =>
        `${prefix}${PATH218}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    shipping_order_labels: {
      /**
       * 船積オーダーラベル手配を更新します。
       * @returns OK
       */
      put: (option: { body: Methods_17jtd2n['put']['reqBody'], query?: Methods_17jtd2n['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_17jtd2n['put']['resBody'], BasicHeaders, Methods_17jtd2n['put']['status']>(prefix, PATH220, PUT, option).json(),
      /**
       * 船積オーダーラベル手配を更新します。
       * @returns OK
       */
      $put: (option: { body: Methods_17jtd2n['put']['reqBody'], query?: Methods_17jtd2n['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_17jtd2n['put']['resBody'], BasicHeaders, Methods_17jtd2n['put']['status']>(prefix, PATH220, PUT, option).json().then(r => r.body),
      $path: (option?: { method: 'put'; query: Methods_17jtd2n['put']['query'] } | undefined) =>
        `${prefix}${PATH220}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    shipping_order_schedules: {
      get_free_times: {
        /**
         * 搬入スケジュールフリータイム計算を行い一覧で返します
         * @returns OK
         */
        post: (option: { body: Methods_xc2znh['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_xc2znh['post']['resBody'], BasicHeaders, Methods_xc2znh['post']['status']>(prefix, PATH222, POST, option).json(),
        /**
         * 搬入スケジュールフリータイム計算を行い一覧で返します
         * @returns OK
         */
        $post: (option: { body: Methods_xc2znh['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_xc2znh['post']['resBody'], BasicHeaders, Methods_xc2znh['post']['status']>(prefix, PATH222, POST, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH222}`,
      },
      get_imported_on: {
        /**
         * 搬入スケジュール一括搬入日計算を行い一覧で返します
         * @returns OK
         */
        post: (option: { body: Methods_1skas7q['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_1skas7q['post']['resBody'], BasicHeaders, Methods_1skas7q['post']['status']>(prefix, PATH223, POST, option).json(),
        /**
         * 搬入スケジュール一括搬入日計算を行い一覧で返します
         * @returns OK
         */
        $post: (option: { body: Methods_1skas7q['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_1skas7q['post']['resBody'], BasicHeaders, Methods_1skas7q['post']['status']>(prefix, PATH223, POST, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH223}`,
      },
      send_check_limit: {
        /**
         * 検品期日_日別データ送信を実行します。
         */
        post: (option?: { config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods_1v9bnsq['post']['status']>(prefix, PATH224, POST, option).send(),
        /**
         * 検品期日_日別データ送信を実行します。
         */
        $post: (option?: { config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods_1v9bnsq['post']['status']>(prefix, PATH224, POST, option).send().then(r => r.body),
        $path: () => `${prefix}${PATH224}`,
      },
      send_delivery_schedule: {
        /**
         * 搬入予定表出力、送信を実行します。
         */
        post: (option?: { config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods_iefit2['post']['status']>(prefix, PATH225, POST, option).send(),
        /**
         * 搬入予定表出力、送信を実行します。
         */
        $post: (option?: { config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods_iefit2['post']['status']>(prefix, PATH225, POST, option).send().then(r => r.body),
        $path: () => `${prefix}${PATH225}`,
      },
      send_shipping_order: {
        /**
         * 船積明細データ送信を実行します。
         */
        post: (option: { body: Methods_yxjtmf['post']['reqBody'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_yxjtmf['post']['status']>(prefix, PATH226, POST, option).send(),
        /**
         * 船積明細データ送信を実行します。
         */
        $post: (option: { body: Methods_yxjtmf['post']['reqBody'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_yxjtmf['post']['status']>(prefix, PATH226, POST, option).send().then(r => r.body),
        $path: () => `${prefix}${PATH226}`,
      },
      three_week_update: {
        /**
         * ３週間先の日曜日までの倉庫搬入日もしくは、入港日の船積を対象に船積オーダーを整理して更新する
         */
        post: (option?: { config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods_o2nq0m['post']['status']>(prefix, PATH227, POST, option).send(),
        /**
         * ３週間先の日曜日までの倉庫搬入日もしくは、入港日の船積を対象に船積オーダーを整理して更新する
         */
        $post: (option?: { config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods_o2nq0m['post']['status']>(prefix, PATH227, POST, option).send().then(r => r.body),
        $path: () => `${prefix}${PATH227}`,
      },
      weekly: {
        /**
         * 搬入予定カレンダー、モトックスカレンダー一覧を返します
         * @returns OK
         */
        get: (option?: { query?: Methods_1pbzwsw['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_1pbzwsw['get']['resBody'], BasicHeaders, Methods_1pbzwsw['get']['status']>(prefix, PATH228, GET, option).json(),
        /**
         * 搬入予定カレンダー、モトックスカレンダー一覧を返します
         * @returns OK
         */
        $get: (option?: { query?: Methods_1pbzwsw['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_1pbzwsw['get']['resBody'], BasicHeaders, Methods_1pbzwsw['get']['status']>(prefix, PATH228, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_1pbzwsw['get']['query'] } | undefined) =>
          `${prefix}${PATH228}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      /**
       * 船積オーダー搬入スケジュール一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_1pxbsde['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1pxbsde['get']['resBody'], BasicHeaders, Methods_1pxbsde['get']['status']>(prefix, PATH221, GET, option).json(),
      /**
       * 船積オーダー搬入スケジュール一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_1pxbsde['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1pxbsde['get']['resBody'], BasicHeaders, Methods_1pxbsde['get']['status']>(prefix, PATH221, GET, option).json().then(r => r.body),
      /**
       * 搬入スケジュールを一括更新します。
       * @returns OK
       */
      put: (option: { body: Methods_1pxbsde['put']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_1pxbsde['put']['resBody'], BasicHeaders, Methods_1pxbsde['put']['status']>(prefix, PATH221, PUT, option).json(),
      /**
       * 搬入スケジュールを一括更新します。
       * @returns OK
       */
      $put: (option: { body: Methods_1pxbsde['put']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_1pxbsde['put']['resBody'], BasicHeaders, Methods_1pxbsde['put']['status']>(prefix, PATH221, PUT, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_1pxbsde['get']['query'] } | undefined) =>
        `${prefix}${PATH221}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    shipping_orders: {
      _no: (val1: string) => {
        const prefix1 = `${PATH229}/${val1}`;

        return {
          check: {
            /**
             * 船積オーダーを取得します
             * @returns OK
             */
            get: (option?: { query?: Methods_o3ovrh['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_o3ovrh['get']['resBody'], BasicHeaders, Methods_o3ovrh['get']['status']>(prefix, `${prefix1}${PATH230}`, GET, option).json(),
            /**
             * 船積オーダーを取得します
             * @returns OK
             */
            $get: (option?: { query?: Methods_o3ovrh['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_o3ovrh['get']['resBody'], BasicHeaders, Methods_o3ovrh['get']['status']>(prefix, `${prefix1}${PATH230}`, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_o3ovrh['get']['query'] } | undefined) =>
              `${prefix}${prefix1}${PATH230}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          },
          check_before_completion: {
            /**
             * 船積オーダー通関書類の入力が終わっているかの真偽を返します
             * @returns OK
             */
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_9yme34['get']['resBody'], BasicHeaders, Methods_9yme34['get']['status']>(prefix, `${prefix1}${PATH231}`, GET, option).json(),
            /**
             * 船積オーダー通関書類の入力が終わっているかの真偽を返します
             * @returns OK
             */
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_9yme34['get']['resBody'], BasicHeaders, Methods_9yme34['get']['status']>(prefix, `${prefix1}${PATH231}`, GET, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH231}`,
          },
          /**
           * 船積オーダーを取得します。新たなロックを取得する前に、同一テーブルの同一ロックキー1に対する同一担当者によるロックは解除されます。
           * @returns OK
           */
          get: (option?: { query?: Methods_1oi2vkm['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1oi2vkm['get']['resBody'], BasicHeaders, Methods_1oi2vkm['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * 船積オーダーを取得します。新たなロックを取得する前に、同一テーブルの同一ロックキー1に対する同一担当者によるロックは解除されます。
           * @returns OK
           */
          $get: (option?: { query?: Methods_1oi2vkm['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1oi2vkm['get']['resBody'], BasicHeaders, Methods_1oi2vkm['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_1oi2vkm['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
      advance_payments: {
        /**
         * 前払金一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_1qfhwmp['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1qfhwmp['get']['resBody'], BasicHeaders, Methods_1qfhwmp['get']['status']>(prefix, PATH232, GET, option).json(),
        /**
         * 前払金一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_1qfhwmp['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1qfhwmp['get']['resBody'], BasicHeaders, Methods_1qfhwmp['get']['status']>(prefix, PATH232, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_1qfhwmp['get']['query'] } | undefined) =>
          `${prefix}${PATH232}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      amounts: {
        /**
         * 商品代金一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_15gd2oi['get']['query'], config?: T | undefined }) =>
          fetch<Methods_15gd2oi['get']['resBody'], BasicHeaders, Methods_15gd2oi['get']['status']>(prefix, PATH233, GET, option).json(),
        /**
         * 商品代金一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_15gd2oi['get']['query'], config?: T | undefined }) =>
          fetch<Methods_15gd2oi['get']['resBody'], BasicHeaders, Methods_15gd2oi['get']['status']>(prefix, PATH233, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_15gd2oi['get']['query'] } | undefined) =>
          `${prefix}${PATH233}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      bulk_insert: {
        /**
         * 船積オーダーデータを取り込みます。
         * @returns OK
         */
        post: (option: { body: Methods_1ct0ivn['post']['reqBody'], query?: Methods_1ct0ivn['post']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1ct0ivn['post']['resBody'], BasicHeaders, Methods_1ct0ivn['post']['status']>(prefix, PATH234, POST, option, 'FormData').json(),
        /**
         * 船積オーダーデータを取り込みます。
         * @returns OK
         */
        $post: (option: { body: Methods_1ct0ivn['post']['reqBody'], query?: Methods_1ct0ivn['post']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1ct0ivn['post']['resBody'], BasicHeaders, Methods_1ct0ivn['post']['status']>(prefix, PATH234, POST, option, 'FormData').json().then(r => r.body),
        $path: (option?: { method: 'post'; query: Methods_1ct0ivn['post']['query'] } | undefined) =>
          `${prefix}${PATH234}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      details: {
        /**
         * 船積オーダー一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_1p60etd['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1p60etd['get']['resBody'], BasicHeaders, Methods_1p60etd['get']['status']>(prefix, PATH235, GET, option).json(),
        /**
         * 船積オーダー一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_1p60etd['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1p60etd['get']['resBody'], BasicHeaders, Methods_1p60etd['get']['status']>(prefix, PATH235, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_1p60etd['get']['query'] } | undefined) =>
          `${prefix}${PATH235}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      fares: {
        /**
         * 運賃一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_lbxu82['get']['query'], config?: T | undefined }) =>
          fetch<Methods_lbxu82['get']['resBody'], BasicHeaders, Methods_lbxu82['get']['status']>(prefix, PATH236, GET, option).json(),
        /**
         * 運賃一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_lbxu82['get']['query'], config?: T | undefined }) =>
          fetch<Methods_lbxu82['get']['resBody'], BasicHeaders, Methods_lbxu82['get']['status']>(prefix, PATH236, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_lbxu82['get']['query'] } | undefined) =>
          `${prefix}${PATH236}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      labels: {
        export_rbp_label: {
          /**
           * RBPラベルデータを出力します。
           */
          post: (option: { body: Methods_1vugmfb['post']['reqBody'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_1vugmfb['post']['status']>(prefix, PATH238, POST, option).send(),
          /**
           * RBPラベルデータを出力します。
           */
          $post: (option: { body: Methods_1vugmfb['post']['reqBody'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_1vugmfb['post']['status']>(prefix, PATH238, POST, option).send().then(r => r.body),
          $path: () => `${prefix}${PATH238}`,
        },
        export_seal: {
          /**
           * シール手配データを出力します。
           */
          post: (option: { body: Methods_skuj1j['post']['reqBody'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_skuj1j['post']['status']>(prefix, PATH239, POST, option).send(),
          /**
           * シール手配データを出力します。
           */
          $post: (option: { body: Methods_skuj1j['post']['reqBody'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_skuj1j['post']['status']>(prefix, PATH239, POST, option).send().then(r => r.body),
          $path: () => `${prefix}${PATH239}`,
        },
        /**
         * ラベル手配管理対象の船積オーダー一覧を返します ※ embedを指定なしで船積オーダー明細と船積オーダー通関書類が返却される
         * @returns OK
         */
        get: (option: { query: Methods_1egx98m['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1egx98m['get']['resBody'], BasicHeaders, Methods_1egx98m['get']['status']>(prefix, PATH237, GET, option).json(),
        /**
         * ラベル手配管理対象の船積オーダー一覧を返します ※ embedを指定なしで船積オーダー明細と船積オーダー通関書類が返却される
         * @returns OK
         */
        $get: (option: { query: Methods_1egx98m['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1egx98m['get']['resBody'], BasicHeaders, Methods_1egx98m['get']['status']>(prefix, PATH237, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_1egx98m['get']['query'] } | undefined) =>
          `${prefix}${PATH237}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      list: {
        /**
         * 船積オーダー一覧を返します
         * @returns OK
         */
        get: (option: { query: Methods_70icv9['get']['query'], config?: T | undefined }) =>
          fetch<Methods_70icv9['get']['resBody'], BasicHeaders, Methods_70icv9['get']['status']>(prefix, PATH240, GET, option).json(),
        /**
         * 船積オーダー一覧を返します
         * @returns OK
         */
        $get: (option: { query: Methods_70icv9['get']['query'], config?: T | undefined }) =>
          fetch<Methods_70icv9['get']['resBody'], BasicHeaders, Methods_70icv9['get']['status']>(prefix, PATH240, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_70icv9['get']['query'] } | undefined) =>
          `${prefix}${PATH240}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      move: {
        /**
         * 船積オーダー明細を別な船積オーダーへ移動更新します
         * @returns OK
         */
        put: (option: { body: Methods_15a3h7c['put']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_15a3h7c['put']['resBody'], BasicHeaders, Methods_15a3h7c['put']['status']>(prefix, PATH241, PUT, option).json(),
        /**
         * 船積オーダー明細を別な船積オーダーへ移動更新します
         * @returns OK
         */
        $put: (option: { body: Methods_15a3h7c['put']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_15a3h7c['put']['resBody'], BasicHeaders, Methods_15a3h7c['put']['status']>(prefix, PATH241, PUT, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH241}`,
      },
      print_collection_request: {
        /**
         * 集荷依頼書を出力します。
         * @returns OK
         */
        post: (option: { body: Methods_4rfopv['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_4rfopv['post']['resBody'], BasicHeaders, Methods_4rfopv['post']['status']>(prefix, PATH242, POST, option).json(),
        /**
         * 集荷依頼書を出力します。
         * @returns OK
         */
        $post: (option: { body: Methods_4rfopv['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_4rfopv['post']['resBody'], BasicHeaders, Methods_4rfopv['post']['status']>(prefix, PATH242, POST, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH242}`,
      },
      print_order_form: {
        domestic: {
          /**
           * 船積オーダー書を出力します。
           * @returns OK
           */
          post: (option: { body: Methods_l1e89v['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_l1e89v['post']['resBody'], BasicHeaders, Methods_l1e89v['post']['status']>(prefix, PATH243, POST, option).json(),
          /**
           * 船積オーダー書を出力します。
           * @returns OK
           */
          $post: (option: { body: Methods_l1e89v['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_l1e89v['post']['resBody'], BasicHeaders, Methods_l1e89v['post']['status']>(prefix, PATH243, POST, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH243}`,
        },
        foreign: {
          /**
           * 船積オーダー書を出力します。
           * @returns OK
           */
          post: (option: { body: Methods_brucn9['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_brucn9['post']['resBody'], BasicHeaders, Methods_brucn9['post']['status']>(prefix, PATH244, POST, option).json(),
          /**
           * 船積オーダー書を出力します。
           * @returns OK
           */
          $post: (option: { body: Methods_brucn9['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_brucn9['post']['resBody'], BasicHeaders, Methods_brucn9['post']['status']>(prefix, PATH244, POST, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH244}`,
        },
      },
      /**
       * 船積オーダー一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_1ju32do['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1ju32do['get']['resBody'], BasicHeaders, Methods_1ju32do['get']['status']>(prefix, PATH229, GET, option).json(),
      /**
       * 船積オーダー一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_1ju32do['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1ju32do['get']['resBody'], BasicHeaders, Methods_1ju32do['get']['status']>(prefix, PATH229, GET, option).json().then(r => r.body),
      /**
       * 船積オーダーを追加更新削除します。
       * @returns OK
       */
      put: (option: { body: Methods_1ju32do['put']['reqBody'], query?: Methods_1ju32do['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1ju32do['put']['resBody'], BasicHeaders, Methods_1ju32do['put']['status']>(prefix, PATH229, PUT, option).json(),
      /**
       * 船積オーダーを追加更新削除します。
       * @returns OK
       */
      $put: (option: { body: Methods_1ju32do['put']['reqBody'], query?: Methods_1ju32do['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1ju32do['put']['resBody'], BasicHeaders, Methods_1ju32do['put']['status']>(prefix, PATH229, PUT, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_1ju32do['get']['query'] } | { method: 'put'; query: Methods_1ju32do['put']['query'] } | undefined) =>
        `${prefix}${PATH229}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    shipping_reservation_details: {
      _shipping_reservation_detail_id: (val1: number) => {
        const prefix1 = `${PATH245}/${val1}`;

        return {
          shipping_order_details: {
            /**
             * 船積発注明細一覧(前渡一覧)を返します
             * @returns OK
             */
            get: (option: { query: Methods_1796cyr['get']['query'], config?: T | undefined }) =>
              fetch<Methods_1796cyr['get']['resBody'], BasicHeaders, Methods_1796cyr['get']['status']>(prefix, `${prefix1}${PATH246}`, GET, option).json(),
            /**
             * 船積発注明細一覧(前渡一覧)を返します
             * @returns OK
             */
            $get: (option: { query: Methods_1796cyr['get']['query'], config?: T | undefined }) =>
              fetch<Methods_1796cyr['get']['resBody'], BasicHeaders, Methods_1796cyr['get']['status']>(prefix, `${prefix1}${PATH246}`, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_1796cyr['get']['query'] } | undefined) =>
              `${prefix}${prefix1}${PATH246}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          },
        };
      },
    },
    shipping_reservations: {
      _no: (val1: string) => {
        const prefix1 = `${PATH247}/${val1}`;

        return {
          /**
           * 予約オーダーを取得します
           * @returns OK
           */
          get: (option?: { query?: Methods_i1simc['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_i1simc['get']['resBody'], BasicHeaders, Methods_i1simc['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * 予約オーダーを取得します
           * @returns OK
           */
          $get: (option?: { query?: Methods_i1simc['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_i1simc['get']['resBody'], BasicHeaders, Methods_i1simc['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_i1simc['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
      bulk_insert: {
        /**
         * 予約オーダーデータを取り込みます。
         * @returns OK
         */
        post: (option: { body: Methods_15ynjrl['post']['reqBody'], query?: Methods_15ynjrl['post']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_15ynjrl['post']['resBody'], BasicHeaders, Methods_15ynjrl['post']['status']>(prefix, PATH248, POST, option, 'FormData').json(),
        /**
         * 予約オーダーデータを取り込みます。
         * @returns OK
         */
        $post: (option: { body: Methods_15ynjrl['post']['reqBody'], query?: Methods_15ynjrl['post']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_15ynjrl['post']['resBody'], BasicHeaders, Methods_15ynjrl['post']['status']>(prefix, PATH248, POST, option, 'FormData').json().then(r => r.body),
        $path: (option?: { method: 'post'; query: Methods_15ynjrl['post']['query'] } | undefined) =>
          `${prefix}${PATH248}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      output_remaining_shipping_reservation: {
        /**
         * 支払先別予約オーダー残データを出力します。
         * @returns OK
         */
        post: (option: { body: Methods_ftkztp['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_ftkztp['post']['resBody'], BasicHeaders, Methods_ftkztp['post']['status']>(prefix, PATH249, POST, option).json(),
        /**
         * 支払先別予約オーダー残データを出力します。
         * @returns OK
         */
        $post: (option: { body: Methods_ftkztp['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_ftkztp['post']['resBody'], BasicHeaders, Methods_ftkztp['post']['status']>(prefix, PATH249, POST, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH249}`,
      },
      print_order_form: {
        /**
         * 予約オーダー書を出力します。
         * @returns OK
         */
        post: (option: { body: Methods_vjtd38['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_vjtd38['post']['resBody'], BasicHeaders, Methods_vjtd38['post']['status']>(prefix, PATH250, POST, option).json(),
        /**
         * 予約オーダー書を出力します。
         * @returns OK
         */
        $post: (option: { body: Methods_vjtd38['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_vjtd38['post']['resBody'], BasicHeaders, Methods_vjtd38['post']['status']>(prefix, PATH250, POST, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH250}`,
      },
      vendors_with_remaining_shipping_reservation: {
        /**
         * 予約オーダー残有支払先の一覧を取得します。
         * @returns OK
         */
        get: (option?: { query?: Methods_jhx7ay['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_jhx7ay['get']['resBody'], BasicHeaders, Methods_jhx7ay['get']['status']>(prefix, PATH251, GET, option).json(),
        /**
         * 予約オーダー残有支払先の一覧を取得します。
         * @returns OK
         */
        $get: (option?: { query?: Methods_jhx7ay['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_jhx7ay['get']['resBody'], BasicHeaders, Methods_jhx7ay['get']['status']>(prefix, PATH251, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_jhx7ay['get']['query'] } | undefined) =>
          `${prefix}${PATH251}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      /**
       * 予約オーダー一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_1i1uswu['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1i1uswu['get']['resBody'], BasicHeaders, Methods_1i1uswu['get']['status']>(prefix, PATH247, GET, option).json(),
      /**
       * 予約オーダー一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_1i1uswu['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1i1uswu['get']['resBody'], BasicHeaders, Methods_1i1uswu['get']['status']>(prefix, PATH247, GET, option).json().then(r => r.body),
      /**
       * 予約オーダーを追加更新削除します。
       * @returns OK
       */
      put: (option: { body: Methods_1i1uswu['put']['reqBody'], query?: Methods_1i1uswu['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1i1uswu['put']['resBody'], BasicHeaders, Methods_1i1uswu['put']['status']>(prefix, PATH247, PUT, option).json(),
      /**
       * 予約オーダーを追加更新削除します。
       * @returns OK
       */
      $put: (option: { body: Methods_1i1uswu['put']['reqBody'], query?: Methods_1i1uswu['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1i1uswu['put']['resBody'], BasicHeaders, Methods_1i1uswu['put']['status']>(prefix, PATH247, PUT, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_1i1uswu['get']['query'] } | { method: 'put'; query: Methods_1i1uswu['put']['query'] } | undefined) =>
        `${prefix}${PATH247}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    shipping_reservations_summary: {
      /**
       * 船積みオーダーのサマリを取得します
       * @returns OK
       */
      get: (option: { query: Methods_1m9w28d['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1m9w28d['get']['resBody'], BasicHeaders, Methods_1m9w28d['get']['status']>(prefix, PATH252, GET, option).json(),
      /**
       * 船積みオーダーのサマリを取得します
       * @returns OK
       */
      $get: (option: { query: Methods_1m9w28d['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1m9w28d['get']['resBody'], BasicHeaders, Methods_1m9w28d['get']['status']>(prefix, PATH252, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_1m9w28d['get']['query'] } | undefined) =>
        `${prefix}${PATH252}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    special_prices: {
      _special_price_id: (val1: number) => {
        const prefix1 = `${PATH253}/${val1}`;

        return {
          /**
           * 仕入先を取得します
           * @returns OK
           */
          get: (option?: { query?: Methods_tiaxn2['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_tiaxn2['get']['resBody'], BasicHeaders, Methods_tiaxn2['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * 仕入先を取得します
           * @returns OK
           */
          $get: (option?: { query?: Methods_tiaxn2['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_tiaxn2['get']['resBody'], BasicHeaders, Methods_tiaxn2['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_tiaxn2['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
      bulk_upsert: {
        /**
         * 特別単価を一括登録更新します。
         * @returns OK
         */
        post: (option: { body: Methods_1pudpdd['post']['reqBody'], query?: Methods_1pudpdd['post']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1pudpdd['post']['resBody'], BasicHeaders, Methods_1pudpdd['post']['status']>(prefix, PATH254, POST, option, 'FormData').json(),
        /**
         * 特別単価を一括登録更新します。
         * @returns OK
         */
        $post: (option: { body: Methods_1pudpdd['post']['reqBody'], query?: Methods_1pudpdd['post']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1pudpdd['post']['resBody'], BasicHeaders, Methods_1pudpdd['post']['status']>(prefix, PATH254, POST, option, 'FormData').json().then(r => r.body),
        $path: (option?: { method: 'post'; query: Methods_1pudpdd['post']['query'] } | undefined) =>
          `${prefix}${PATH254}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      calculate: {
        /**
         * 計算した特別単価を返します
         * @returns OK
         */
        get: (option: { query: Methods_1xskyvj['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1xskyvj['get']['resBody'], BasicHeaders, Methods_1xskyvj['get']['status']>(prefix, PATH255, GET, option).json(),
        /**
         * 計算した特別単価を返します
         * @returns OK
         */
        $get: (option: { query: Methods_1xskyvj['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1xskyvj['get']['resBody'], BasicHeaders, Methods_1xskyvj['get']['status']>(prefix, PATH255, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_1xskyvj['get']['query'] } | undefined) =>
          `${prefix}${PATH255}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      /**
       * 特別単価一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_1wklfbc['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1wklfbc['get']['resBody'], BasicHeaders, Methods_1wklfbc['get']['status']>(prefix, PATH253, GET, option).json(),
      /**
       * 特別単価一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_1wklfbc['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1wklfbc['get']['resBody'], BasicHeaders, Methods_1wklfbc['get']['status']>(prefix, PATH253, GET, option).json().then(r => r.body),
      /**
       * 特別単価を追加更新削除します。
       * @returns OK
       */
      put: (option: { body: Methods_1wklfbc['put']['reqBody'], query?: Methods_1wklfbc['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1wklfbc['put']['resBody'], BasicHeaders, Methods_1wklfbc['put']['status']>(prefix, PATH253, PUT, option).json(),
      /**
       * 特別単価を追加更新削除します。
       * @returns OK
       */
      $put: (option: { body: Methods_1wklfbc['put']['reqBody'], query?: Methods_1wklfbc['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1wklfbc['put']['resBody'], BasicHeaders, Methods_1wklfbc['put']['status']>(prefix, PATH253, PUT, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_1wklfbc['get']['query'] } | { method: 'put'; query: Methods_1wklfbc['put']['query'] } | undefined) =>
        `${prefix}${PATH253}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    stock_adjustments: {
      _stock_adjustment_id: (val1: number) => {
        const prefix1 = `${PATH256}/${val1}`;

        return {
          /**
           * 在庫調整を取得します
           * @returns OK
           */
          get: (option?: { query?: Methods_bht36o['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_bht36o['get']['resBody'], BasicHeaders, Methods_bht36o['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * 在庫調整を取得します
           * @returns OK
           */
          $get: (option?: { query?: Methods_bht36o['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_bht36o['get']['resBody'], BasicHeaders, Methods_bht36o['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_bht36o['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
      /**
       * 在庫調整一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_1l2yu3v['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1l2yu3v['get']['resBody'], BasicHeaders, Methods_1l2yu3v['get']['status']>(prefix, PATH256, GET, option).json(),
      /**
       * 在庫調整一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_1l2yu3v['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1l2yu3v['get']['resBody'], BasicHeaders, Methods_1l2yu3v['get']['status']>(prefix, PATH256, GET, option).json().then(r => r.body),
      /**
       * 在庫調整を追加更新削除します。
       * @returns OK
       */
      put: (option: { body: Methods_1l2yu3v['put']['reqBody'], query?: Methods_1l2yu3v['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1l2yu3v['put']['resBody'], BasicHeaders, Methods_1l2yu3v['put']['status']>(prefix, PATH256, PUT, option).json(),
      /**
       * 在庫調整を追加更新削除します。
       * @returns OK
       */
      $put: (option: { body: Methods_1l2yu3v['put']['reqBody'], query?: Methods_1l2yu3v['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1l2yu3v['put']['resBody'], BasicHeaders, Methods_1l2yu3v['put']['status']>(prefix, PATH256, PUT, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_1l2yu3v['get']['query'] } | { method: 'put'; query: Methods_1l2yu3v['put']['query'] } | undefined) =>
        `${prefix}${PATH256}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    stock_changes: {
      _stock_change_id: (val1: number) => {
        const prefix1 = `${PATH257}/${val1}`;

        return {
          request_invent_insert: {
            /**
             * 商品マスタ作成担当者へ、商品マスタ作成の依頼メールを送信します。
             */
            post: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods_625gk7['post']['status']>(prefix, `${prefix1}${PATH258}`, POST, option).send(),
            /**
             * 商品マスタ作成担当者へ、商品マスタ作成の依頼メールを送信します。
             */
            $post: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods_625gk7['post']['status']>(prefix, `${prefix1}${PATH258}`, POST, option).send().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH258}`,
          },
          request_sales_reservation_stocks_insert: {
            /**
             * 予約・取置担当者へ、予約・取置の依頼メールを送信します。
             */
            post: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods_15gu87w['post']['status']>(prefix, `${prefix1}${PATH259}`, POST, option).send(),
            /**
             * 予約・取置担当者へ、予約・取置の依頼メールを送信します。
             */
            $post: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods_15gu87w['post']['status']>(prefix, `${prefix1}${PATH259}`, POST, option).send().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH259}`,
          },
          /**
           * 在庫振替を取得します
           * @returns OK
           */
          get: (option?: { query?: Methods_154wzdu['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_154wzdu['get']['resBody'], BasicHeaders, Methods_154wzdu['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * 在庫振替を取得します
           * @returns OK
           */
          $get: (option?: { query?: Methods_154wzdu['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_154wzdu['get']['resBody'], BasicHeaders, Methods_154wzdu['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_154wzdu['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
      print_stock_change_request: {
        /**
         * 在庫振替依頼書を出力します。
         * @returns OK
         */
        post: (option: { body: Methods_ffhilq['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_ffhilq['post']['resBody'], BasicHeaders, Methods_ffhilq['post']['status']>(prefix, PATH260, POST, option).json(),
        /**
         * 在庫振替依頼書を出力します。
         * @returns OK
         */
        $post: (option: { body: Methods_ffhilq['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_ffhilq['post']['resBody'], BasicHeaders, Methods_ffhilq['post']['status']>(prefix, PATH260, POST, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH260}`,
      },
      /**
       * 在庫振替一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_diqou6['get']['query'], config?: T | undefined }) =>
        fetch<Methods_diqou6['get']['resBody'], BasicHeaders, Methods_diqou6['get']['status']>(prefix, PATH257, GET, option).json(),
      /**
       * 在庫振替一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_diqou6['get']['query'], config?: T | undefined }) =>
        fetch<Methods_diqou6['get']['resBody'], BasicHeaders, Methods_diqou6['get']['status']>(prefix, PATH257, GET, option).json().then(r => r.body),
      /**
       * 在庫振替を追加更新削除します。
       * @returns OK
       */
      put: (option: { body: Methods_diqou6['put']['reqBody'], query?: Methods_diqou6['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_diqou6['put']['resBody'], BasicHeaders, Methods_diqou6['put']['status']>(prefix, PATH257, PUT, option).json(),
      /**
       * 在庫振替を追加更新削除します。
       * @returns OK
       */
      $put: (option: { body: Methods_diqou6['put']['reqBody'], query?: Methods_diqou6['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_diqou6['put']['resBody'], BasicHeaders, Methods_diqou6['put']['status']>(prefix, PATH257, PUT, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_diqou6['get']['query'] } | { method: 'put'; query: Methods_diqou6['put']['query'] } | undefined) =>
        `${prefix}${PATH257}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    stock_transactions: {
      /**
       * 在庫受払一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_upgol8['get']['query'], config?: T | undefined }) =>
        fetch<Methods_upgol8['get']['resBody'], BasicHeaders, Methods_upgol8['get']['status']>(prefix, PATH261, GET, option).json(),
      /**
       * 在庫受払一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_upgol8['get']['query'], config?: T | undefined }) =>
        fetch<Methods_upgol8['get']['resBody'], BasicHeaders, Methods_upgol8['get']['status']>(prefix, PATH261, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_upgol8['get']['query'] } | undefined) =>
        `${prefix}${PATH261}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    stock_transfers: {
      _stock_transfer_id: (val1: number) => {
        const prefix1 = `${PATH262}/${val1}`;

        return {
          /**
           * 在庫移動を取得します
           * @returns OK
           */
          get: (option?: { query?: Methods_1e3xlfk['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1e3xlfk['get']['resBody'], BasicHeaders, Methods_1e3xlfk['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * 在庫移動を取得します
           * @returns OK
           */
          $get: (option?: { query?: Methods_1e3xlfk['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1e3xlfk['get']['resBody'], BasicHeaders, Methods_1e3xlfk['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_1e3xlfk['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
      receive: {
        /**
         * 在庫移動を更新します。更新のみ可能です。
         * @returns OK
         */
        put: (option: { body: Methods_1mlbn1d['put']['reqBody'], query?: Methods_1mlbn1d['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1mlbn1d['put']['resBody'], BasicHeaders, Methods_1mlbn1d['put']['status']>(prefix, PATH263, PUT, option).json(),
        /**
         * 在庫移動を更新します。更新のみ可能です。
         * @returns OK
         */
        $put: (option: { body: Methods_1mlbn1d['put']['reqBody'], query?: Methods_1mlbn1d['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1mlbn1d['put']['resBody'], BasicHeaders, Methods_1mlbn1d['put']['status']>(prefix, PATH263, PUT, option).json().then(r => r.body),
        $path: (option?: { method: 'put'; query: Methods_1mlbn1d['put']['query'] } | undefined) =>
          `${prefix}${PATH263}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      /**
       * 在庫移動一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_1vp19cb['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1vp19cb['get']['resBody'], BasicHeaders, Methods_1vp19cb['get']['status']>(prefix, PATH262, GET, option).json(),
      /**
       * 在庫移動一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_1vp19cb['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1vp19cb['get']['resBody'], BasicHeaders, Methods_1vp19cb['get']['status']>(prefix, PATH262, GET, option).json().then(r => r.body),
      /**
       * 在庫移動を追加します。追加のみ可能です。
       * @returns OK
       */
      put: (option: { body: Methods_1vp19cb['put']['reqBody'], query?: Methods_1vp19cb['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1vp19cb['put']['resBody'], BasicHeaders, Methods_1vp19cb['put']['status']>(prefix, PATH262, PUT, option).json(),
      /**
       * 在庫移動を追加します。追加のみ可能です。
       * @returns OK
       */
      $put: (option: { body: Methods_1vp19cb['put']['reqBody'], query?: Methods_1vp19cb['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1vp19cb['put']['resBody'], BasicHeaders, Methods_1vp19cb['put']['status']>(prefix, PATH262, PUT, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_1vp19cb['get']['query'] } | { method: 'put'; query: Methods_1vp19cb['put']['query'] } | undefined) =>
        `${prefix}${PATH262}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    stocks: {
      _stock_id: (val1: number) => {
        const prefix1 = `${PATH264}/${val1}`;

        return {
          /**
           * 在庫を取得します
           * @returns OK
           */
          get: (option?: { query?: Methods_7y5by6['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_7y5by6['get']['resBody'], BasicHeaders, Methods_7y5by6['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * 在庫を取得します
           * @returns OK
           */
          $get: (option?: { query?: Methods_7y5by6['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_7y5by6['get']['resBody'], BasicHeaders, Methods_7y5by6['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_7y5by6['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
      /**
       * 在庫一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_id4au5['get']['query'], config?: T | undefined }) =>
        fetch<Methods_id4au5['get']['resBody'], BasicHeaders, Methods_id4au5['get']['status']>(prefix, PATH264, GET, option).json(),
      /**
       * 在庫一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_id4au5['get']['query'], config?: T | undefined }) =>
        fetch<Methods_id4au5['get']['resBody'], BasicHeaders, Methods_id4au5['get']['status']>(prefix, PATH264, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_id4au5['get']['query'] } | undefined) =>
        `${prefix}${PATH264}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    sub_account_titles: {
      _sub_account_title_id: (val1: number) => {
        const prefix1 = `${PATH265}/${val1}`;

        return {
          /**
           * 補助科目を取得します
           * @returns OK
           */
          get: (option?: { query?: Methods_bqnuri['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_bqnuri['get']['resBody'], BasicHeaders, Methods_bqnuri['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * 補助科目を取得します
           * @returns OK
           */
          $get: (option?: { query?: Methods_bqnuri['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_bqnuri['get']['resBody'], BasicHeaders, Methods_bqnuri['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_bqnuri['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
      /**
       * 補助科目一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_1urszuq['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1urszuq['get']['resBody'], BasicHeaders, Methods_1urszuq['get']['status']>(prefix, PATH265, GET, option).json(),
      /**
       * 補助科目一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_1urszuq['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1urszuq['get']['resBody'], BasicHeaders, Methods_1urszuq['get']['status']>(prefix, PATH265, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_1urszuq['get']['query'] } | undefined) =>
        `${prefix}${PATH265}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    tables: {
      _table_id: (val1: string) => {
        const prefix1 = `${PATH266}/${val1}`;

        return {
          /**
           * 単一テーブルのデータを一覧で取得し返却します
           * @returns OK
           */
          get: (option?: { query?: Methods_1mq4sc2['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1mq4sc2['get']['resBody'], BasicHeaders, Methods_1mq4sc2['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * 単一テーブルのデータを一覧で取得し返却します
           * @returns OK
           */
          $get: (option?: { query?: Methods_1mq4sc2['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1mq4sc2['get']['resBody'], BasicHeaders, Methods_1mq4sc2['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_1mq4sc2['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
    },
    tax_payments: {
      /**
       * 納税実績一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_10bmibn['get']['query'], config?: T | undefined }) =>
        fetch<Methods_10bmibn['get']['resBody'], BasicHeaders, Methods_10bmibn['get']['status']>(prefix, PATH267, GET, option).json(),
      /**
       * 納税実績一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_10bmibn['get']['query'], config?: T | undefined }) =>
        fetch<Methods_10bmibn['get']['resBody'], BasicHeaders, Methods_10bmibn['get']['status']>(prefix, PATH267, GET, option).json().then(r => r.body),
      /**
       * 納税実績を追加します。
       * @returns OK
       */
      put: (option: { body: Methods_10bmibn['put']['reqBody'], query?: Methods_10bmibn['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_10bmibn['put']['resBody'], BasicHeaders, Methods_10bmibn['put']['status']>(prefix, PATH267, PUT, option).json(),
      /**
       * 納税実績を追加します。
       * @returns OK
       */
      $put: (option: { body: Methods_10bmibn['put']['reqBody'], query?: Methods_10bmibn['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_10bmibn['put']['resBody'], BasicHeaders, Methods_10bmibn['put']['status']>(prefix, PATH267, PUT, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_10bmibn['get']['query'] } | { method: 'put'; query: Methods_10bmibn['put']['query'] } | undefined) =>
        `${prefix}${PATH267}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    team_user_links: {
      _team_user_link_id: (val1: number) => {
        const prefix1 = `${PATH268}/${val1}`;

        return {
          /**
           * チーム担当者を取得します
           * @returns OK
           */
          get: (option?: { query?: Methods_gpj3lk['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_gpj3lk['get']['resBody'], BasicHeaders, Methods_gpj3lk['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * チーム担当者を取得します
           * @returns OK
           */
          $get: (option?: { query?: Methods_gpj3lk['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_gpj3lk['get']['resBody'], BasicHeaders, Methods_gpj3lk['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_gpj3lk['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
      /**
       * チーム担当者一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_2f6m3t['get']['query'], config?: T | undefined }) =>
        fetch<Methods_2f6m3t['get']['resBody'], BasicHeaders, Methods_2f6m3t['get']['status']>(prefix, PATH268, GET, option).json(),
      /**
       * チーム担当者一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_2f6m3t['get']['query'], config?: T | undefined }) =>
        fetch<Methods_2f6m3t['get']['resBody'], BasicHeaders, Methods_2f6m3t['get']['status']>(prefix, PATH268, GET, option).json().then(r => r.body),
      /**
       * チーム担当者を追加更新削除します。
       * @returns OK
       */
      put: (option: { body: Methods_2f6m3t['put']['reqBody'], query?: Methods_2f6m3t['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_2f6m3t['put']['resBody'], BasicHeaders, Methods_2f6m3t['put']['status']>(prefix, PATH268, PUT, option).json(),
      /**
       * チーム担当者を追加更新削除します。
       * @returns OK
       */
      $put: (option: { body: Methods_2f6m3t['put']['reqBody'], query?: Methods_2f6m3t['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_2f6m3t['put']['resBody'], BasicHeaders, Methods_2f6m3t['put']['status']>(prefix, PATH268, PUT, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_2f6m3t['get']['query'] } | { method: 'put'; query: Methods_2f6m3t['put']['query'] } | undefined) =>
        `${prefix}${PATH268}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    teams: {
      _team_id: (val1: number) => {
        const prefix1 = `${PATH269}/${val1}`;

        return {
          /**
           * チームを取得します
           * @returns OK
           */
          get: (option?: { query?: Methods_1k36fem['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1k36fem['get']['resBody'], BasicHeaders, Methods_1k36fem['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * チームを取得します
           * @returns OK
           */
          $get: (option?: { query?: Methods_1k36fem['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1k36fem['get']['resBody'], BasicHeaders, Methods_1k36fem['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_1k36fem['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
      /**
       * チーム一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_1klvb2w['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1klvb2w['get']['resBody'], BasicHeaders, Methods_1klvb2w['get']['status']>(prefix, PATH269, GET, option).json(),
      /**
       * チーム一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_1klvb2w['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1klvb2w['get']['resBody'], BasicHeaders, Methods_1klvb2w['get']['status']>(prefix, PATH269, GET, option).json().then(r => r.body),
      /**
       * チームを追加更新削除します。
       * @returns OK
       */
      put: (option: { body: Methods_1klvb2w['put']['reqBody'], query?: Methods_1klvb2w['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1klvb2w['put']['resBody'], BasicHeaders, Methods_1klvb2w['put']['status']>(prefix, PATH269, PUT, option).json(),
      /**
       * チームを追加更新削除します。
       * @returns OK
       */
      $put: (option: { body: Methods_1klvb2w['put']['reqBody'], query?: Methods_1klvb2w['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1klvb2w['put']['resBody'], BasicHeaders, Methods_1klvb2w['put']['status']>(prefix, PATH269, PUT, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_1klvb2w['get']['query'] } | { method: 'put'; query: Methods_1klvb2w['put']['query'] } | undefined) =>
        `${prefix}${PATH269}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    ttm_rates: {
      /**
       * TTMレート一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_1vj5rod['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1vj5rod['get']['resBody'], BasicHeaders, Methods_1vj5rod['get']['status']>(prefix, PATH270, GET, option).json(),
      /**
       * TTMレート一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_1vj5rod['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1vj5rod['get']['resBody'], BasicHeaders, Methods_1vj5rod['get']['status']>(prefix, PATH270, GET, option).json().then(r => r.body),
      /**
       * TTMレートを追加更新削除します。
       * @returns OK
       */
      put: (option: { body: Methods_1vj5rod['put']['reqBody'], query?: Methods_1vj5rod['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1vj5rod['put']['resBody'], BasicHeaders, Methods_1vj5rod['put']['status']>(prefix, PATH270, PUT, option).json(),
      /**
       * TTMレートを追加更新削除します。
       * @returns OK
       */
      $put: (option: { body: Methods_1vj5rod['put']['reqBody'], query?: Methods_1vj5rod['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1vj5rod['put']['resBody'], BasicHeaders, Methods_1vj5rod['put']['status']>(prefix, PATH270, PUT, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_1vj5rod['get']['query'] } | { method: 'put'; query: Methods_1vj5rod['put']['query'] } | undefined) =>
        `${prefix}${PATH270}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    user_logs: {
      _user_log_id: (val1: number) => {
        const prefix1 = `${PATH271}/${val1}`;

        return {
          output: {
            /**
             * 利用者ログの出力を取得します。HTTPステータスコードも出力結果を反映したものになります。
             * @returns OK
             */
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_qcxp7w['get']['resBody'], BasicHeaders, Methods_qcxp7w['get']['status']>(prefix, `${prefix1}${PATH272}`, GET, option).json(),
            /**
             * 利用者ログの出力を取得します。HTTPステータスコードも出力結果を反映したものになります。
             * @returns OK
             */
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_qcxp7w['get']['resBody'], BasicHeaders, Methods_qcxp7w['get']['status']>(prefix, `${prefix1}${PATH272}`, GET, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH272}`,
          },
          restart: {
            /**
             * 利用者ログを生成した処理を再度実行します。
             */
            post: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods_1c8qk8k['post']['status']>(prefix, `${prefix1}${PATH273}`, POST, option).send(),
            /**
             * 利用者ログを生成した処理を再度実行します。
             */
            $post: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods_1c8qk8k['post']['status']>(prefix, `${prefix1}${PATH273}`, POST, option).send().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH273}`,
          },
          /**
           * 利用者ログを取得します
           * @returns OK
           */
          get: (option?: { query?: Methods_vgxy8w['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_vgxy8w['get']['resBody'], BasicHeaders, Methods_vgxy8w['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * 利用者ログを取得します
           * @returns OK
           */
          $get: (option?: { query?: Methods_vgxy8w['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_vgxy8w['get']['resBody'], BasicHeaders, Methods_vgxy8w['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_vgxy8w['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
      /**
       * 利用者ログ一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_1b7kctp['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1b7kctp['get']['resBody'], BasicHeaders, Methods_1b7kctp['get']['status']>(prefix, PATH271, GET, option).json(),
      /**
       * 利用者ログ一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_1b7kctp['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1b7kctp['get']['resBody'], BasicHeaders, Methods_1b7kctp['get']['status']>(prefix, PATH271, GET, option).json().then(r => r.body),
      /**
       * 利用者ログを追加更新削除します。
       * @returns OK
       */
      put: (option: { body: Methods_1b7kctp['put']['reqBody'], query?: Methods_1b7kctp['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1b7kctp['put']['resBody'], BasicHeaders, Methods_1b7kctp['put']['status']>(prefix, PATH271, PUT, option).json(),
      /**
       * 利用者ログを追加更新削除します。
       * @returns OK
       */
      $put: (option: { body: Methods_1b7kctp['put']['reqBody'], query?: Methods_1b7kctp['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1b7kctp['put']['resBody'], BasicHeaders, Methods_1b7kctp['put']['status']>(prefix, PATH271, PUT, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_1b7kctp['get']['query'] } | { method: 'put'; query: Methods_1b7kctp['put']['query'] } | undefined) =>
        `${prefix}${PATH271}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    users: {
      _user_id: (val1: number) => {
        const prefix1 = `${PATH274}/${val1}`;

        return {
          /**
           * 担当者を取得します
           * @returns OK
           */
          get: (option?: { query?: Methods_8ls8pm['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_8ls8pm['get']['resBody'], BasicHeaders, Methods_8ls8pm['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * 担当者を取得します
           * @returns OK
           */
          $get: (option?: { query?: Methods_8ls8pm['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_8ls8pm['get']['resBody'], BasicHeaders, Methods_8ls8pm['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_8ls8pm['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
      /**
       * 担当者一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_1xhiioa['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1xhiioa['get']['resBody'], BasicHeaders, Methods_1xhiioa['get']['status']>(prefix, PATH274, GET, option).json(),
      /**
       * 担当者一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_1xhiioa['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1xhiioa['get']['resBody'], BasicHeaders, Methods_1xhiioa['get']['status']>(prefix, PATH274, GET, option).json().then(r => r.body),
      /**
       * 担当者を更新します。追加削除はできません。
       * @returns OK
       */
      put: (option: { body: Methods_1xhiioa['put']['reqBody'], query?: Methods_1xhiioa['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1xhiioa['put']['resBody'], BasicHeaders, Methods_1xhiioa['put']['status']>(prefix, PATH274, PUT, option).json(),
      /**
       * 担当者を更新します。追加削除はできません。
       * @returns OK
       */
      $put: (option: { body: Methods_1xhiioa['put']['reqBody'], query?: Methods_1xhiioa['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1xhiioa['put']['resBody'], BasicHeaders, Methods_1xhiioa['put']['status']>(prefix, PATH274, PUT, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_1xhiioa['get']['query'] } | { method: 'put'; query: Methods_1xhiioa['put']['query'] } | undefined) =>
        `${prefix}${PATH274}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    vendor_staffs: {
      bulk: {
        /**
         * 仕入先担当者を一括更新します。ロックの取得を指定した場合、ロックの取得に成功した後、直ちにそのロックは解放されます。
         * @returns OK
         */
        post: (option: { body: Methods_1409xf['post']['reqBody'], query?: Methods_1409xf['post']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1409xf['post']['resBody'], BasicHeaders, Methods_1409xf['post']['status']>(prefix, PATH275, POST, option, 'FormData').json(),
        /**
         * 仕入先担当者を一括更新します。ロックの取得を指定した場合、ロックの取得に成功した後、直ちにそのロックは解放されます。
         * @returns OK
         */
        $post: (option: { body: Methods_1409xf['post']['reqBody'], query?: Methods_1409xf['post']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_1409xf['post']['resBody'], BasicHeaders, Methods_1409xf['post']['status']>(prefix, PATH275, POST, option, 'FormData').json().then(r => r.body),
        $path: (option?: { method: 'post'; query: Methods_1409xf['post']['query'] } | undefined) =>
          `${prefix}${PATH275}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
    },
    vendors: {
      _vendor_id: (val1: number) => {
        const prefix1 = `${PATH276}/${val1}`;

        return {
          /**
           * 仕入先を取得します。新たなロックを取得する前に、同一テーブルの同一ロックキー1に対する同一担当者によるロックは解除されます。
           * @returns OK
           */
          get: (option?: { query?: Methods_1d5w75o['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1d5w75o['get']['resBody'], BasicHeaders, Methods_1d5w75o['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * 仕入先を取得します。新たなロックを取得する前に、同一テーブルの同一ロックキー1に対する同一担当者によるロックは解除されます。
           * @returns OK
           */
          $get: (option?: { query?: Methods_1d5w75o['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1d5w75o['get']['resBody'], BasicHeaders, Methods_1d5w75o['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_1d5w75o['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
      bulk_insert: {
        /**
         * 仕入先を一括登録します。
         * @returns OK
         */
        post: (option: { body: Methods_xqb2m2['post']['reqBody'], query?: Methods_xqb2m2['post']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_xqb2m2['post']['resBody'], BasicHeaders, Methods_xqb2m2['post']['status']>(prefix, PATH277, POST, option, 'FormData').json(),
        /**
         * 仕入先を一括登録します。
         * @returns OK
         */
        $post: (option: { body: Methods_xqb2m2['post']['reqBody'], query?: Methods_xqb2m2['post']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_xqb2m2['post']['resBody'], BasicHeaders, Methods_xqb2m2['post']['status']>(prefix, PATH277, POST, option, 'FormData').json().then(r => r.body),
        $path: (option?: { method: 'post'; query: Methods_xqb2m2['post']['query'] } | undefined) =>
          `${prefix}${PATH277}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      bulk_update: {
        /**
         * 仕入先を一括更新します。ロックの取得を指定した場合、ロックの取得に成功した後、直ちにそのロックは解放されます。
         * @returns OK
         */
        post: (option: { body: Methods_xqyj0q['post']['reqBody'], query?: Methods_xqyj0q['post']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_xqyj0q['post']['resBody'], BasicHeaders, Methods_xqyj0q['post']['status']>(prefix, PATH278, POST, option, 'FormData').json(),
        /**
         * 仕入先を一括更新します。ロックの取得を指定した場合、ロックの取得に成功した後、直ちにそのロックは解放されます。
         * @returns OK
         */
        $post: (option: { body: Methods_xqyj0q['post']['reqBody'], query?: Methods_xqyj0q['post']['query'] | undefined, config?: T | undefined }) =>
          fetch<Methods_xqyj0q['post']['resBody'], BasicHeaders, Methods_xqyj0q['post']['status']>(prefix, PATH278, POST, option, 'FormData').json().then(r => r.body),
        $path: (option?: { method: 'post'; query: Methods_xqyj0q['post']['query'] } | undefined) =>
          `${prefix}${PATH278}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      /**
       * 仕入先一覧を返します。新たなロックを取得する前に、同一テーブルの同一ロックキー1に対する同一担当者によるロックは解除されます。
       * @returns OK
       */
      get: (option: { query: Methods_ermpuh['get']['query'], config?: T | undefined }) =>
        fetch<Methods_ermpuh['get']['resBody'], BasicHeaders, Methods_ermpuh['get']['status']>(prefix, PATH276, GET, option).json(),
      /**
       * 仕入先一覧を返します。新たなロックを取得する前に、同一テーブルの同一ロックキー1に対する同一担当者によるロックは解除されます。
       * @returns OK
       */
      $get: (option: { query: Methods_ermpuh['get']['query'], config?: T | undefined }) =>
        fetch<Methods_ermpuh['get']['resBody'], BasicHeaders, Methods_ermpuh['get']['status']>(prefix, PATH276, GET, option).json().then(r => r.body),
      /**
       * 仕入先を追加更新削除します。
       * @returns OK
       */
      put: (option: { body: Methods_ermpuh['put']['reqBody'], query?: Methods_ermpuh['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_ermpuh['put']['resBody'], BasicHeaders, Methods_ermpuh['put']['status']>(prefix, PATH276, PUT, option).json(),
      /**
       * 仕入先を追加更新削除します。
       * @returns OK
       */
      $put: (option: { body: Methods_ermpuh['put']['reqBody'], query?: Methods_ermpuh['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_ermpuh['put']['resBody'], BasicHeaders, Methods_ermpuh['put']['status']>(prefix, PATH276, PUT, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_ermpuh['get']['query'] } | { method: 'put'; query: Methods_ermpuh['put']['query'] } | undefined) =>
        `${prefix}${PATH276}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    villages: {
      _village_id: (val1: number) => {
        const prefix1 = `${PATH279}/${val1}`;

        return {
          /**
           * 村を取得します
           * @returns OK
           */
          get: (option?: { query?: Methods_1exroyi['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1exroyi['get']['resBody'], BasicHeaders, Methods_1exroyi['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * 村を取得します
           * @returns OK
           */
          $get: (option?: { query?: Methods_1exroyi['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1exroyi['get']['resBody'], BasicHeaders, Methods_1exroyi['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_1exroyi['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
      /**
       * 村一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_1vtg1k7['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1vtg1k7['get']['resBody'], BasicHeaders, Methods_1vtg1k7['get']['status']>(prefix, PATH279, GET, option).json(),
      /**
       * 村一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_1vtg1k7['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1vtg1k7['get']['resBody'], BasicHeaders, Methods_1vtg1k7['get']['status']>(prefix, PATH279, GET, option).json().then(r => r.body),
      /**
       * 村を追加更新削除します。
       * @returns OK
       */
      put: (option: { body: Methods_1vtg1k7['put']['reqBody'], query?: Methods_1vtg1k7['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1vtg1k7['put']['resBody'], BasicHeaders, Methods_1vtg1k7['put']['status']>(prefix, PATH279, PUT, option).json(),
      /**
       * 村を追加更新削除します。
       * @returns OK
       */
      $put: (option: { body: Methods_1vtg1k7['put']['reqBody'], query?: Methods_1vtg1k7['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_1vtg1k7['put']['resBody'], BasicHeaders, Methods_1vtg1k7['put']['status']>(prefix, PATH279, PUT, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_1vtg1k7['get']['query'] } | { method: 'put'; query: Methods_1vtg1k7['put']['query'] } | undefined) =>
        `${prefix}${PATH279}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    web_sales_orders: {
      import: {
        /**
         * WEB受注データを取り込ます。
         * @returns OK
         */
        post: (option: { body: Methods_ace4nf['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_ace4nf['post']['resBody'], BasicHeaders, Methods_ace4nf['post']['status']>(prefix, PATH280, POST, option).json(),
        /**
         * WEB受注データを取り込ます。
         * @returns OK
         */
        $post: (option: { body: Methods_ace4nf['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_ace4nf['post']['resBody'], BasicHeaders, Methods_ace4nf['post']['status']>(prefix, PATH280, POST, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH280}`,
      },
      import_async: {
        /**
         * WEB受注データを取り込ます。
         * @returns OK
         */
        post: (option: { body: Methods_1dasfuo['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_1dasfuo['post']['resBody'], BasicHeaders, Methods_1dasfuo['post']['status']>(prefix, PATH281, POST, option).json(),
        /**
         * WEB受注データを取り込ます。
         * @returns OK
         */
        $post: (option: { body: Methods_1dasfuo['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_1dasfuo['post']['resBody'], BasicHeaders, Methods_1dasfuo['post']['status']>(prefix, PATH281, POST, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH281}`,
      },
    },
    wine_areas: {
      _wine_area_id: (val1: number) => {
        const prefix1 = `${PATH282}/${val1}`;

        return {
          example_operation: {
            /**
             * 地方のサンプルAPI
             * @returns OK
             */
            post: (option: { body: Methods_13sqot1['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods_13sqot1['post']['resBody'], BasicHeaders, Methods_13sqot1['post']['status']>(prefix, `${prefix1}${PATH283}`, POST, option).json(),
            /**
             * 地方のサンプルAPI
             * @returns OK
             */
            $post: (option: { body: Methods_13sqot1['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods_13sqot1['post']['resBody'], BasicHeaders, Methods_13sqot1['post']['status']>(prefix, `${prefix1}${PATH283}`, POST, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH283}`,
          },
          /**
           * 地方を取得します
           * @returns OK
           */
          get: (option?: { query?: Methods_7hxhrq['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_7hxhrq['get']['resBody'], BasicHeaders, Methods_7hxhrq['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * 地方を取得します
           * @returns OK
           */
          $get: (option?: { query?: Methods_7hxhrq['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_7hxhrq['get']['resBody'], BasicHeaders, Methods_7hxhrq['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_7hxhrq['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
      /**
       * 地方一覧を返します
       * @returns OK
       */
      get: (option: { query: Methods_mi8m5m['get']['query'], config?: T | undefined }) =>
        fetch<Methods_mi8m5m['get']['resBody'], BasicHeaders, Methods_mi8m5m['get']['status']>(prefix, PATH282, GET, option).json(),
      /**
       * 地方一覧を返します
       * @returns OK
       */
      $get: (option: { query: Methods_mi8m5m['get']['query'], config?: T | undefined }) =>
        fetch<Methods_mi8m5m['get']['resBody'], BasicHeaders, Methods_mi8m5m['get']['status']>(prefix, PATH282, GET, option).json().then(r => r.body),
      /**
       * 地方を追加更新削除します。
       * @returns OK
       */
      put: (option: { body: Methods_mi8m5m['put']['reqBody'], query?: Methods_mi8m5m['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_mi8m5m['put']['resBody'], BasicHeaders, Methods_mi8m5m['put']['status']>(prefix, PATH282, PUT, option).json(),
      /**
       * 地方を追加更新削除します。
       * @returns OK
       */
      $put: (option: { body: Methods_mi8m5m['put']['reqBody'], query?: Methods_mi8m5m['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<Methods_mi8m5m['put']['resBody'], BasicHeaders, Methods_mi8m5m['put']['status']>(prefix, PATH282, PUT, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_mi8m5m['get']['query'] } | { method: 'put'; query: Methods_mi8m5m['put']['query'] } | undefined) =>
        `${prefix}${PATH282}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
