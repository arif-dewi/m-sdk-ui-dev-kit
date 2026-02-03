# @mdk/components-foundation

Generic, reusable UI components built on Radix UI primitives.

## Overview

This package provides foundational UI components that can be used across any application. These components are built on top of `@mdk/core` and Radix UI primitives.

## Installation

```bash
pnpm add @mdk/components-foundation
```

## Usage

```tsx
import { Button, Dialog, Switch } from '@mdk/components-foundation'
import '@mdk/components-foundation/styles.css'

function App() {
  return <Button variant="outline">Click me</Button>
}
```

## Components

This package re-exports all components from `@mdk/core` and adds additional foundation components like:

- Card
- Table
- Form
- Badge
- Alert
- And more...

## Development

```bash
# Build
pnpm --filter @mdk/components-foundation build

# Type check
pnpm --filter @mdk/components-foundation typecheck

# Lint
pnpm --filter @mdk/components-foundation lint
```
