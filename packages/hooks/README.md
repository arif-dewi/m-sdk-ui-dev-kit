# @mdk/hooks

Custom React hooks for common patterns and utilities.

## Overview

This package provides a collection of reusable React hooks that solve common problems and implement best practices.

## Installation

```bash
pnpm add @mdk/hooks
```

## Usage

```tsx
import { useLocalStorage, useMediaQuery, useDebounce } from '@mdk/hooks'

function MyComponent() {
  const [value, setValue] = useLocalStorage('key', 'default')
  const isMobile = useMediaQuery('(max-width: 768px)')
  const debouncedValue = useDebounce(value, 500)

  return <div>{debouncedValue}</div>
}
```

## Available Hooks

### State Management
- `useLocalStorage` - Sync state with localStorage
- `useSessionStorage` - Sync state with sessionStorage
- `usePrevious` - Get previous value of a state
- `useToggle` - Boolean state with toggle function

### UI & Layout
- `useMediaQuery` - Match CSS media queries
- `useWindowSize` - Track window dimensions
- `useScrollPosition` - Track scroll position
- `useOnScreen` - Detect if element is visible

### Performance
- `useDebounce` - Debounce a value
- `useThrottle` - Throttle a value
- `useMemoCompare` - Memoize with custom comparison

### Side Effects
- `useInterval` - Declarative interval
- `useTimeout` - Declarative timeout
- `useEventListener` - Add event listeners
- `useClickOutside` - Detect clicks outside element

### Network
- `useOnline` - Detect online/offline status
- `useFetch` - Simple data fetching
- `useWebSocket` - WebSocket connection

### Utilities
- `useCopyToClipboard` - Copy text to clipboard
- `useAsync` - Handle async operations
- `useMount` - Run effect on mount only
- `useUpdateEffect` - Run effect on updates only

## Development

```bash
# Build
pnpm --filter @mdk/hooks build

# Type check
pnpm --filter @mdk/hooks typecheck

# Lint
pnpm --filter @mdk/hooks lint
```
