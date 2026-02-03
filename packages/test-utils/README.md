# @mdk/test-utils

Testing utilities and helpers for component testing.

## Overview

This package provides testing utilities, mock data, and custom matchers to make testing easier and more consistent across the monorepo.

## Installation

```bash
pnpm add -D @mdk/test-utils @testing-library/react vitest
```

## Usage

### Custom Render

```tsx
import { render, screen } from '@mdk/test-utils'
import { MyComponent } from './my-component'

test('renders component', () => {
  render(<MyComponent />)
  expect(screen.getByText('Hello')).toBeInTheDocument()
})
```

### With Providers

```tsx
import { renderWithProviders } from '@mdk/test-utils'

test('renders with Redux store', () => {
  const { store } = renderWithProviders(<MyComponent />, {
    preloadedState: {
      auth: { user: mockUser },
    },
  })

  expect(store.getState().auth.user).toEqual(mockUser)
})
```

### Mock Data

```tsx
import { mockMiner, mockPool, mockWorker } from '@mdk/test-utils'

test('displays miner data', () => {
  render(<MinerCard miner={mockMiner()} />)
  expect(screen.getByText(mockMiner().name)).toBeInTheDocument()
})
```

### Custom Matchers

```tsx
import '@mdk/test-utils/matchers'

test('component has correct styles', () => {
  const { container } = render(<Button />)
  expect(container.firstChild).toHaveClass('button')
})
```

## Features

- Custom render function with providers
- Mock data generators
- Custom matchers
- Test utilities for async operations
- MSW integration for API mocking

## Available Utilities

### Render Functions
- `render` - Basic render with theme provider
- `renderWithProviders` - Render with Redux and theme providers
- `renderHook` - Render custom hooks

### Mock Data
- `mockMiner` - Generate mock miner data
- `mockPool` - Generate mock pool data
- `mockWorker` - Generate mock worker data
- `mockStats` - Generate mock statistics

### Test Helpers
- `waitForLoadingToFinish` - Wait for loading states
- `mockApiResponse` - Mock API responses
- `setupServer` - Setup MSW server

## Development

```bash
# Build
pnpm --filter @mdk/test-utils build

# Type check
pnpm --filter @mdk/test-utils typecheck

# Lint
pnpm --filter @mdk/test-utils lint
```
