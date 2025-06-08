import { fantasyTheme } from './fantasy'
import { nintendoTheme } from './nintendo'
import { sciFiTheme } from './sci-fi'

export const themes = {
  fantasy: fantasyTheme,
  nintendo: nintendoTheme,
  'sci-fi': sciFiTheme,
}

export type ThemeName = keyof typeof themes
export type Theme = typeof fantasyTheme

