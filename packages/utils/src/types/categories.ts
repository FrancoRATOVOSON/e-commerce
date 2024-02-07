export interface TagType {
  id: string
  [key: string]: string
  value: string
}

export interface Category {
  name: string
  slug: string
}

export interface Tag {
  category: string
  label: string
  slug: string
}
