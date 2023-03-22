import { Game } from './GameInterface'

export interface Genre {
  name: string
  key: string
  data: { slug: string[] }
}
