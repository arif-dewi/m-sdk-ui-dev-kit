/**
 * @mdk/theme
 *
 * Theming system with design tokens and CSS variables.
 */

export * from './tokens'
export * from './utils'

// Theme types
export type Theme = 'light' | 'dark' | 'system'

export type ThemeConfig = {
  defaultTheme?: Theme
  storageKey?: string
}
