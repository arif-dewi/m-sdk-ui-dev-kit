# @mdk/theme

Theming system with design tokens and CSS variables.

## Overview

This package provides a comprehensive theming system including design tokens, CSS variables, and utilities for managing themes.

## Installation

```bash
pnpm add @mdk/theme
```

## Usage

### Import Styles

```tsx
import '@mdk/theme/styles.css'
```

### Use Theme Utilities

```tsx
import { applyTheme, getSystemTheme, getStoredTheme, setStoredTheme } from '@mdk/theme'

// Apply a theme
applyTheme('dark')

// Get system preference
const systemTheme = getSystemTheme() // 'light' | 'dark'

// Store theme preference
setStoredTheme('dark')

// Get stored theme
const storedTheme = getStoredTheme() // 'light' | 'dark' | 'system' | null
```

### Use Design Tokens

```tsx
import { colors, spacing, borderRadius, fontSize } from '@mdk/theme'

const styles = {
  color: colors.primary[500],
  padding: spacing[4],
  borderRadius: borderRadius.lg,
  fontSize: fontSize.base,
}
```

## Design Tokens

### Colors
- Primary palette (50-900)
- Gray palette (50-900)
- Semantic colors (destructive, success, warning, info)

### Spacing
- 0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24

### Border Radius
- none, sm, default, md, lg, xl, 2xl, full

### Font Sizes
- xs, sm, base, lg, xl, 2xl, 3xl, 4xl, 5xl

## CSS Variables

All theme values are available as CSS variables:

```css
.my-component {
  background-color: hsl(var(--background));
  color: hsl(var(--foreground));
  border-color: hsl(var(--border));
}
```

## Development

```bash
# Build
pnpm --filter @mdk/theme build

# Type check
pnpm --filter @mdk/theme typecheck

# Lint
pnpm --filter @mdk/theme lint
```
