export interface Game {
  name?: string
  developer?: string
  year?: number
  tags?: string[]
  picture?: string[]
  challenge?: string[]
  'dl-id'?: string
}

export interface GenreList {
  [key: string]: {
    name?: string
    data?: {
      [key: string]: Game[]
    }
  }
}
