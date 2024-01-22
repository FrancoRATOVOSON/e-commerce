export interface TagType {
  id: string
  value: string
  [key:string]: string
}

export interface Category {
  slug: string
  name: string
}

export interface Tag {
  slug: string
  label: string
  category: string
}
