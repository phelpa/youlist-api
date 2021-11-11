export interface Default {
  url: string
  width: number
  height: number
}

export interface Medium {
  url: string
  width: number
  height: number
}

export interface High {
  url: string
  width: number
  height: number
}

export interface Standard {
  url: string
  width: number
  height: number
}

export interface Thumbnails {
  default: Default
  medium: Medium
  high: High
  standard: Standard
}

export interface Localized {
  title: string
  description: string
}

export interface Snippet {
  publishedAt: Date
  channelId: string
  title: string
  description: string
  thumbnails: Thumbnails
  channelTitle: string
  tags: string[]
  categoryId: string
  liveBroadcastContent: string
  localized: Localized
}

export interface Item {
  kind: string
  etag: string
  id: string
  snippet: Snippet
}

export interface PageInfo {
  totalResults: number
  resultsPerPage: number
}

export interface YoutubeResponse {
  kind: string
  etag: string
  items: Item[]
  pageInfo: PageInfo
}
