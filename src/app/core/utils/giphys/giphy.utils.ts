
// import { ColDef, ColGroupDef } from "ag-grid-community";

// export const giphyDefaultColDef: ColDef = {
//     floatingFilterComponentParams: { suppressFilterButton: true },
//     singleClickEdit: true,
//     floatingFilter: true,
//     suppressMenu: true,
//     resizable: true,
//     sortable: true,
//     filter: true,
//     minWidth: 150,
//     flex: 1,
// };


// export const giphyColumnDefs: (
//     | ColDef
//     | ColGroupDef
// )[] = [
//         {
//             headerName: Enums.HeaderVipTracker.VIP_ORDER_NO,
//             field: Enums.FieldVipTracker.VIP_ORDER_NO,
//             filter: "agTextColumnFilter",
//             minWidth: Enums.PARAMS_DEFAULT.MIN_WIDTH_120,
//             cellRenderer: Commons.convertOrderNoVIP,
//         },
//         {
//             headerName: Enums.HeaderVipTracker.VIP_STATUS,
//             field: Enums.FieldVipTracker.VIP_STATUS,
//             cellRenderer: Commons.statusRendererVip,
//             cellStyle: Commons.statusCellStyleVip,
//             minWidth: Enums.PARAMS_DEFAULT.MIN_WIDTH_120,
//             floatingFilterComponentParams: { suppressFilterButton: false },
//             filter: "vipStatusFilter",
//             filterParams: {
//                 cellRenderer: Commons.statusRendererVip,
//             },
//         },
//         {
//             headerName: Enums.HeaderVipTracker.TM_SERIAL_NO,
//             field: Enums.FieldVipTracker.TM_SERIAL_NO,
//             filter: "agTextColumnFilter",
//         },
//         {
//             headerName: Enums.HeaderVipTracker.TM_ORDER_NO,
//             field: Enums.FieldVipTracker.TM_ORDER_NO,
//             filter: "agTextColumnFilter",
//             minWidth: Enums.PARAMS_DEFAULT.MIN_WIDTH_120,
//             cellRenderer: Commons.convertOrderNoVIP,
//         },
//         {
//             headerName: Enums.HeaderVipTracker.TM_PURCHASE_DATE,
//             field: Enums.FieldVipTracker.TM_PURCHASE_DATE,
//             filterParams: Commons.filterParams,
//             floatingFilterComponentParams: { suppressFilterButton: false },
//             minWidth: Enums.PARAMS_DEFAULT.MIN_WIDTH_150,
//             filter: "agDateColumnFilter",
//         },
//         {
//             headerName: Enums.HeaderVipTracker.WARRANTY_STATUS,
//             field: Enums.FieldVipTracker.WARRANTY_STATUS,
//             minWidth: Enums.PARAMS_DEFAULT.MIN_WIDTH_180,
//             floatingFilterComponentParams: { suppressFilterButton: false },
//             filter: "warrantyStatusFilter",
//             filterParams: {
//                 cellRenderer: Commons.statusRendererWarranty,
//             },
//         },
//         {
//             headerName: Enums.HeaderVipTracker.WARRANTY_START_DATE,
//             field: Enums.FieldVipTracker.WARRANTY_START_DATE,
//             filterParams: Commons.filterParams,
//             floatingFilterComponentParams: { suppressFilterButton: false },
//             minWidth: Enums.PARAMS_DEFAULT.MIN_WIDTH_150,
//             filter: "agDateColumnFilter",
//         },
//         {
//             headerName: Enums.HeaderVipTracker.WARRANTY_END_DATE,
//             field: Enums.FieldVipTracker.WARRANTY_END_DATE,
//             filterParams: Commons.filterParams,
//             floatingFilterComponentParams: { suppressFilterButton: false },
//             minWidth: Enums.PARAMS_DEFAULT.MIN_WIDTH_150,
//             filter: "agDateColumnFilter",
//         },
//         {
//             headerName: Enums.HeaderVipTracker.ADVISOR_NAME,
//             field: Enums.FieldVipTracker.ADVISOR_NAME,
//             filter: "agTextColumnFilter",
//         },
//         {
//             headerName: Enums.HeaderVipTracker.ADVISOR_ID,
//             field: Enums.FieldVipTracker.ADVISOR_ID,
//             filter: "agTextColumnFilter",
//         },
//         {
//             headerName: Enums.HeaderVipTracker.ACTIVE_STATUS,
//             field: Enums.FieldVipTracker.ACTIVE_STATUS,
//             cellStyle: Commons.statusCellStyleActive,
//             floatingFilterComponentParams: { suppressFilterButton: false },
//             filter: "activeStatusFilter",
//         },
//         {
//             headerName: Enums.HeaderVipTracker.REACTIVATION_COUNTER,
//             field: Enums.FieldVipTracker.REACTIVATION_COUNTER,
//             filter: "agNumberColumnFilter",
//             floatingFilterComponentParams: { suppressFilterButton: false },
//             filterParams: Commons.filterParams,
//         },
//         {
//             headerName: Enums.HeaderVipTracker.TM_NAME,
//             field: Enums.FieldVipTracker.TM_NAME,
//             filter: "agTextColumnFilter",
//         },
//         {
//             headerName: Enums.HeaderVipTracker.BM_NAME,
//             field: Enums.FieldVipTracker.BM_NAME,
//             filter: "agTextColumnFilter",
//         },
//         {
//             headerName: Enums.HeaderVipTracker.CUSTOMER_NAME,
//             field: Enums.FieldVipTracker.CUSTOMER_NAME,
//             filter: "agTextColumnFilter",
//         },
//         {
//             headerName: Enums.HeaderVipTracker.VIP_ADVISOR_NAME,
//             field: Enums.FieldVipTracker.VIP_ADVISOR_NAME,
//             filter: "agTextColumnFilter",
//         },
//         {
//             headerName: Enums.HeaderVipTracker.VIP_ADVISOR_ID,
//             field: Enums.FieldVipTracker.VIP_ADVISOR_ID,
//             filter: "agTextColumnFilter",
//         },
//         {
//             headerName: Enums.HeaderVipTracker.VIP_PACKAGE_NAME,
//             field: Enums.FieldVipTracker.VIP_PACKAGE_NAME,
//             filter: "agTextColumnFilter",
//         },
//         {
//             headerName: Enums.HeaderVipTracker.VIP_PRICE,
//             field: Enums.FieldVipTracker.VIP_PRICE,
//             filter: "agNumberColumnFilter",
//             floatingFilterComponentParams: { suppressFilterButton: false },
//             filterParams: Commons.filterParams,
//         },
//         {
//             headerName: Enums.HeaderVipTracker.VIP_PURCHASE_EXPIRY_DATE,
//             field: Enums.FieldVipTracker.VIP_PURCHASE_EXPIRY_DATE,
//             filterParams: Commons.filterParams,
//             floatingFilterComponentParams: { suppressFilterButton: false },
//             minWidth: Enums.PARAMS_DEFAULT.MIN_WIDTH_200,
//             filter: "agDateColumnFilter",
//         },
//         {
//             headerName: Enums.HeaderVipTracker.VIP_PURCHASE_DATE,
//             field: Enums.FieldVipTracker.VIP_PURCHASE_DATE,
//             filterParams: Commons.filterParams,
//             floatingFilterComponentParams: { suppressFilterButton: false },
//             minWidth: Enums.PARAMS_DEFAULT.MIN_WIDTH_150,
//             filter: "agDateColumnFilter",
//         },
//         {
//             headerName: Enums.HeaderVipTracker.VIP_START_DATE,
//             field: Enums.FieldVipTracker.VIP_START_DATE,
//             filterParams: Commons.filterParams,
//             floatingFilterComponentParams: { suppressFilterButton: false },
//             minWidth: Enums.PARAMS_DEFAULT.MIN_WIDTH_150,
//             filter: "agDateColumnFilter",
//         },
//         {
//             headerName: Enums.HeaderVipTracker.VIP_END_DATE,
//             field: Enums.FieldVipTracker.VIP_END_DATE,
//             filterParams: Commons.filterParams,
//             floatingFilterComponentParams: { suppressFilterButton: false },
//             minWidth: Enums.PARAMS_DEFAULT.MIN_WIDTH_150,
//             filter: "agDateColumnFilter",
//         },
//         {
//             headerName: Enums.HeaderVipTracker.VIP_DURATION,
//             field: Enums.FieldVipTracker.VIP_DURATION,
//             filter: "agNumberColumnFilter",
//             floatingFilterComponentParams: { suppressFilterButton: false },
//             filterParams: Commons.filterParams,
//         },
//     ];