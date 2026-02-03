# @mdk/api-client

API integration with RTK Query for type-safe API calls.

## Overview

This package provides a type-safe API client built on RTK Query, with pre-configured endpoints for mining operations.

## Installation

```bash
pnpm add @mdk/api-client @reduxjs/toolkit react-redux
```

## Usage

### Setup

```tsx
import { configureStore } from '@reduxjs/toolkit'
import { apiClient } from '@mdk/api-client'

export const store = configureStore({
  reducer: {
    [apiClient.reducerPath]: apiClient.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiClient.middleware),
})
```

### Use in Components

```tsx
import { useGetMinersQuery, useGetPoolStatsQuery } from '@mdk/api-client'

function Dashboard() {
  const { data: miners, isLoading } = useGetMinersQuery()
  const { data: stats } = useGetPoolStatsQuery('pool-1')

  if (isLoading) return <div>Loading...</div>

  return (
    <div>
      {miners?.map(miner => (
        <div key={miner.id}>{miner.name}</div>
      ))}
    </div>
  )
}
```

## Available Endpoints

### Miners
- `useGetMinersQuery` - Get all miners
- `useGetMinerQuery` - Get single miner
- `useCreateMinerMutation` - Create new miner
- `useUpdateMinerMutation` - Update miner
- `useDeleteMinerMutation` - Delete miner

### Pools
- `useGetPoolsQuery` - Get all pools
- `useGetPoolQuery` - Get single pool
- `useGetPoolStatsQuery` - Get pool statistics

### Workers
- `useGetWorkersQuery` - Get all workers
- `useGetWorkerQuery` - Get single worker
- `useUpdateWorkerMutation` - Update worker

### Statistics
- `useGetDashboardStatsQuery` - Get dashboard statistics
- `useGetHashrateHistoryQuery` - Get hashrate history
- `useGetRevenueStatsQuery` - Get revenue statistics

## Features

- Type-safe API calls
- Automatic caching
- Request deduplication
- Optimistic updates
- Polling support
- Retry logic

## Development

```bash
# Build
pnpm --filter @mdk/api-client build

# Type check
pnpm --filter @mdk/api-client typecheck

# Lint
pnpm --filter @mdk/api-client lint
```
