# @mdk/state

State management with Redux Toolkit.

## Overview

This package provides a pre-configured Redux store with common slices for application state management.

## Installation

```bash
pnpm add @mdk/state @reduxjs/toolkit react-redux
```

## Usage

### Setup Store

```tsx
import { Provider } from 'react-redux'
import { store } from '@mdk/state'

function App() {
  return (
    <Provider store={store}>
      <YourApp />
    </Provider>
  )
}
```

### Use in Components

```tsx
import { useAppSelector, useAppDispatch } from '@mdk/state'
import { setTheme, selectTheme } from '@mdk/state'

function ThemeToggle() {
  const dispatch = useAppDispatch()
  const theme = useAppSelector(selectTheme)

  return (
    <button onClick={() => dispatch(setTheme(theme === 'light' ? 'dark' : 'light'))}>
      Toggle Theme
    </button>
  )
}
```

## Available Slices

### Auth
- User authentication state
- Login/logout actions
- Token management

### UI
- Theme preference
- Sidebar state
- Modal state
- Toast notifications

### Settings
- User preferences
- Application settings
- Feature flags

### Notifications
- Notification queue
- Read/unread status
- Notification actions

## Features

- Type-safe state management
- Integrated with API client
- Persistent state (localStorage)
- DevTools integration
- Time-travel debugging

## Development

```bash
# Build
pnpm --filter @mdk/state build

# Type check
pnpm --filter @mdk/state typecheck

# Lint
pnpm --filter @mdk/state lint
```
