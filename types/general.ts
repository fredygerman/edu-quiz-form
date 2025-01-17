export type JourneyFilters = {
  campId?: string
  active?: boolean
  createdAtStart?: string
  createdAtEnd?: string
  sortBy?: string
  order?: "asc" | "desc"
}

export type Genders = "male" | "female" | "others"

export interface ChartProps {
  data: any
  className?: string
}

export interface Option {
  label: string
  value: string
  icon?: React.ComponentType<{ className?: string }>
  withCount?: boolean
}

export interface DataTableFilterField<TData> {
  label: string
  value: keyof TData
  placeholder?: string
  options?: Option[]
}

export interface DataTableFilterOption<TData> {
  id: string
  label: string
  value: keyof TData
  options: Option[]
  filterValues?: string[]
  filterOperator?: string
  isMulti?: boolean
}

export interface SearchParams {
  [key: string]: string | string[] | undefined
}

export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
}
