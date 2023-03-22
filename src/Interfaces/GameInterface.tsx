import { Genre } from './GenreInterface'

export interface Game {
  cover?: string
  description?: string[]
  developer?: number[]
  'moby-id'?: string
  'moby-link'?: string
  name?: string
  publisher?: string[]
  release?: string
  screenshots?: string[]
  tags: string[]
  trivia?: string[]
}

export interface GameList {
  [key: string]: Game
}

export interface GameByTagList {
  [key: string]: Game[]
}

export interface GameData {
  [key: string]: Genre[]
}
