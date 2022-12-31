
import { ColDef, ColGroupDef } from "ag-grid-community";
import { PARAMS_DEFAULT } from "../../enums/enum-function";
import * as Enums from '../../enums/giphys/giphy.enum';
import { FilterCommon } from "../filter-agrid";
import * as AgGridCommunity from "ag-grid-community";

export const giphyDefaultColDef: ColDef = {
    singleClickEdit: true,
    suppressMenu: true,
    resizable: true,
    sortable: true,
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
            cellRenderer: "gifImageRender",
        },
        {
            headerName: Enums.GiphyHeader.TITLE,
            field: Enums.GiphyField.TITLE,
        },
        {
            headerName: Enums.GiphyHeader.USER_NAME,
            field: Enums.GiphyField.USER_NAME,
        },
        {
            headerName: Enums.GiphyHeader.USER_AVATAR,
            field: Enums.GiphyField.USER_AVATAR,
            cellRenderer: "avatarImageRender",
        },
        {
            headerName: Enums.GiphyHeader.STATUS,
            field: Enums.GiphyField.STATUS,
            cellStyle: statusUserVerify,
            cellRenderer: convertStatus,
        },
        {
            headerName: Enums.GiphyHeader.IMPORT_DATETIME,
            field: Enums.GiphyField.IMPORT_DATETIME,
            filterParams: FilterCommon,
            minWidth: PARAMS_DEFAULT.MIN_WIDTH_150,
        },
    ];



export function statusUserVerify(params: any) {
    let result;
    const isVerified: boolean = params.value;

    if (isVerified) {
        result = { color: "green" };
    } else {
        result = { color: "red" };
    }

    return result;
}

export function convertStatus(params: AgGridCommunity.ICellRendererParams) {
    return "<span>" + concatStatus(params.value) + "</span>";
}

export function concatStatus(isVerified: boolean) {
    let result: string = "";

    if (isVerified) {
        result = "VERIFIED"
    } else {
        result = "NOT VERIFIED"
    }

    return result;
}
