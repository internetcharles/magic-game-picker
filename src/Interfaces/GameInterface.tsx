export interface Game {
  age_ratings?: number[] | null
  aggregated_rating?: number | null
  aggregated_rating_count?: number | null
  alternative_names?: number[] | null
  bundles?: number[] | null
  category: number
  checksum: string
  collection?: number | null
  cover?: number | null
  created_at: number
  external_games?: number[] | null
  first_release_date?: number | null
  follows?: number | null
  franchises?: number[] | null
  game_localizations?: number[] | null
  game_modes?: number[] | null
  genres?: number[] | null
  id: number
  involved_companies?: number[] | null
  keywords?: number[] | null
  name: string
  platforms?: number[] | null
  player_perspectives?: number[] | null
  rating?: number | null
  rating_count?: number | null
  release_dates?: number[] | null
  screenshots?: number[] | null
  similar_games?: number[] | null
  slug: string
  summary?: string | null
  tags?: number[] | null
  themes?: number[] | null
  total_rating?: number | null
  total_rating_count?: number | null
  updated_at: number
  url: string
  videos?: number[] | null
  websites?: number[] | null
  storyline?: string | null
  artworks?: number[] | null
  parent_game?: number | null
  multiplayer_modes?: number[] | null
  remasters?: number[] | null
  expanded_games?: number[] | null
  ports?: number[] | null
  game_engines?: number[] | null
  remakes?: number[] | null
  version_parent?: number | null
  version_title?: string | null
  standalone_expansions?: number[] | null
  hypes?: number | null
  franchise?: number | null
  status?: number | null
  language_supports?: number[] | null
}
