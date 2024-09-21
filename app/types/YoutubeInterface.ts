export interface YoutubeData {
    kind: string
    etag: string
    id: string
    snippet: Snippet
    statistics: Statistics
  }
  
  export interface Snippet {
    title: string
    description: string
    publishedAt: string
    thumbnails: Thumbnails
  }
  
  export interface Thumbnails {
    default: Default
  }
  
  export interface Default {
    url: string
    width: number
    height: number
  }
  
  export interface Statistics {
    viewCount: string
    subscriberCount: string
    videoCount: string
  }
  