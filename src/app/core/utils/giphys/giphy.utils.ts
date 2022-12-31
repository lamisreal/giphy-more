
import { ColDef, ColGroupDef } from "ag-grid-community";
import { PARAMS_DEFAULT } from "../../enums/enum-function";
import * as Enums from '../../enums/giphys/giphy.enum';
import * as Commons from '../../utils/common-function';
import { FilterCommon } from "../filter-agrid";

export const giphyDefaultColDef: ColDef = {
    floatingFilterComponentParams: { suppressFilterButton: true },
    singleClickEdit: true,
    floatingFilter: true,
    suppressMenu: true,
    resizable: true,
    sortable: true,
    filter: true,
    minWidth: 150,
    flex: 1,
};

export const giphyColumnDefs: (
    | ColDef
    | ColGroupDef
)[] = [
        {
            headerName: Enums.GiphyHeader.IMAGE,
            field: Enums.GiphyField.IMAGE,
            filter: "agTextColumnFilter",
        },
        {
            headerName: Enums.GiphyHeader.TITLE,
            field: Enums.GiphyField.TITLE,
            filter: "agTextColumnFilter",
        },
        {
            headerName: Enums.GiphyHeader.USER_NAME,
            field: Enums.GiphyField.USER_NAME,
            filter: "agTextColumnFilter",
        },
        {
            headerName: Enums.GiphyHeader.USER_AVATAR,
            field: Enums.GiphyField.USER_AVATAR,
            cellStyle: Commons.statusUserVerify,
            floatingFilterComponentParams: { suppressFilterButton: false },
            filter: "activeStatusFilter",
        },
        {
            headerName: Enums.GiphyHeader.STATUS,
            field: Enums.GiphyField.STATUS,
            cellStyle: Commons.statusUserVerify,
            floatingFilterComponentParams: { suppressFilterButton: false },
            filter: "activeStatusFilter",
        },
        {
            headerName: Enums.GiphyHeader.IMPORT_DATETIME,
            field: Enums.GiphyField.IMPORT_DATETIME,
            filterParams: FilterCommon,
            floatingFilterComponentParams: { suppressFilterButton: false },
            minWidth: PARAMS_DEFAULT.MIN_WIDTH_150,
            filter: "agDateColumnFilter",
        },
    ];