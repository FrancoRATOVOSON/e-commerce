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

type HasSearch<TData> = {
  search: true
  searchColumn: keyof TData
}

type NotHasSearch = {
  search?: false
}

type SearchProps<TData> = HasSearch<TData> | NotHasSearch

export type {
  DataTableCustomComponentProps,
  DataTableCustomFilterComponentProps,
  DataTablePaginationLabels,
  DataTableSelectionActionComponentProps,
  SearchProps
}
