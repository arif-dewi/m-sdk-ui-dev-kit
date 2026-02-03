# @mdk/components-feature

Full-feature components combining domain and foundation components.

## Overview

This package provides complete, ready-to-use features that combine multiple domain and foundation components into cohesive user experiences.

## Installation

```bash
pnpm add @mdk/components-feature
```

## Usage

```tsx
import { Dashboard, MinerManagement, PoolManagement } from '@mdk/components-feature'

function App() {
  return (
    <div>
      <Dashboard />
      <MinerManagement />
      <PoolManagement />
    </div>
  )
}
```

## Features

### Dashboard
Complete dashboard view with all mining metrics and controls.

### Miner Management
Full miner management interface including:
- Miner list and search
- Miner configuration
- Status monitoring
- Performance metrics

### Pool Management
Complete pool management interface including:
- Pool list and selection
- Pool configuration
- Connection status
- Pool statistics

### Settings
Application settings and configuration interface.

### Analytics
Advanced analytics and reporting features.

## Development

```bash
# Build
pnpm --filter @mdk/components-feature build

# Type check
pnpm --filter @mdk/components-feature typecheck

# Lint
pnpm --filter @mdk/components-feature lint
```
