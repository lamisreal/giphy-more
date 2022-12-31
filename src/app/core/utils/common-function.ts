import { GridOptions } from "@ag-grid-enterprise/all-modules";

/**
 * @author lamisreal
 * @param value all value
 * @returns boolean type, if value satisfies the condition, then true, else false
 */
export function CheckNullOrUndefinedOrEmpty(value: any): boolean {
  return (
    value === null ||
    value === undefined ||
    value.length === 0 ||
    value === ""
  );
}

export const gridOptions: GridOptions = {
  rowSelection: 'single',
  rowModelType: 'infinite',
  rowHeight: 40,
  cacheBlockSize: 10,
  maxBlocksInCache: 10,
  paginationPageSize: 10,
  pagination: true,
  paginationAutoPageSize: false,
  sortingOrder: ['asc', 'desc', null],
};

export function statusUserVerify(params: any) {
  let result;
  switch (params.value) {
    case true:
      result = { color: "green" };
      break;
    case false:
      result = { color: "red" };
      break;
    default:
      result = null;
      break;
  }
  return result;
}