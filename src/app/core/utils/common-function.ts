import { formatDate } from "@angular/common";

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

export function convertDateTime(date: string) {
  if (!CheckNullOrUndefinedOrEmpty(date)) {
      return formatDate(date, "dd/MM/yyyy hh:mm", "en-US");
  } else {
      return "";
  }
}

export function convertDate(date: string) {
  if (!CheckNullOrUndefinedOrEmpty(date)) {
      return formatDate(date, "dd/MM/yyyy", "en-US");
  } else {
      return "";
  }
}

export const gridOptions = {
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