/**
 * @mdk/components-foundation
 *
 * Generic, reusable UI components built on Radix UI primitives.
 * These components form the foundation for all other component packages.
 */

// Re-export everything from @mdk/core for convenience
export {
  // Components
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger,
  // Types
  type ApiError,
  type ApiResponse,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  type ButtonProps,
  buttonVariants,
  Checkbox,
  type CheckedState,
  // Utils
  cn,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
  // Radix primitives (namespaced)
  DropdownMenu,
  formatCurrency,
  formatDate,
  formatNumber,
  formatRelativeTime,
  isEmpty,
  isValidEmail,
  isValidUrl,
  Label,
  type Maybe,
  type Nullable,
  type Optional,
  type PaginatedResponse,
  type PaginationParams,
  Popover,
  Progress,
  RadioGroup,
  Select,
  Separator,
  Slider,
  type Status,
  Switch,
  Tabs,
  Toast,
  Tooltip,
} from '@mdk/core'

// Foundation-specific components will be added here
// export * from './components/card'
// export * from './components/table'
// export * from './components/form'
