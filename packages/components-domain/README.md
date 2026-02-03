# @mdk/components-domain

Domain-specific components for mining operations.

## Overview

This package contains components that encapsulate mining-specific business logic and domain concepts. These components are built on top of `@mdk/components-foundation`.

## Installation

```bash
pnpm add @mdk/components-domain
```

## Usage

```tsx
import { MinerCard, PoolStats, HashrateChart } from '@mdk/components-domain'

function Dashboard() {
  return (
    <div>
      <PoolStats poolId="pool-1" />
      <HashrateChart minerId="miner-1" />
      <MinerCard miner={minerData} />
    </div>
  )
}
```

## Components

### Mining Operations
- `MinerCard` - Display miner information and status
- `PoolStats` - Show mining pool statistics
- `HashrateChart` - Visualize hashrate over time
- `WorkerStatus` - Display worker status and health
- `TemperatureMonitor` - Monitor device temperatures

### Configuration
- `MinerConfig` - Configure miner settings
- `PoolConfig` - Configure pool connections
- `AlertConfig` - Set up alerts and notifications

## Development

```bash
# Build
pnpm --filter @mdk/components-domain build

# Type check
pnpm --filter @mdk/components-domain typecheck

# Lint
pnpm --filter @mdk/components-domain lint
```
