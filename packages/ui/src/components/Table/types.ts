import { DataTableColumnProps, DataTableElementProps } from './DataTable'

type DataTablePaginationLabels = {
  firstPage?: string
  lastPage: string
  nextPage?: string
  previousPage?: string
  rowsPerPage?: string
}

type DataTableCustomFilterComponentProps<TData, TValue> = DataTableColumnProps<
  TData,
  TValue
>

type DataTableSelectionActionComponentProps<TData> =
  DataTableElementProps<TData>

type DataTableCustomComponentProps<TData> = DataTableElementProps<TData>

export type {
  DataTableCustomComponentProps,
  DataTableCustomFilterComponentProps,
  DataTablePaginationLabels,
  DataTableSelectionActionComponentProps
}
