import { type } from 'os'

export interface Game {
  name?: string
  developer?: string
  year?: number
  tags?: string[]
  picture?: string[]
  challenge?: string[]
  'dl-id'?: string
}

export interface Genre {
  name?: string
  data?: {
    [key: string]: Game[]
  }
  key: string
}

export type GenreList = Genre[]
