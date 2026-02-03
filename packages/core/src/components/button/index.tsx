import * as React from 'react'

import { cn } from '../../utils'

export type ButtonVariant = 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
export type ButtonSize = 'default' | 'sm' | 'lg' | 'icon'

export type ButtonProps = {
  variant?: ButtonVariant
  size?: ButtonSize
} & React.ButtonHTMLAttributes<HTMLButtonElement>

/**
 * Button component with multiple variants and sizes
 *
 * @example
 * ```tsx
 * <Button variant="default" size="lg">Click me</Button>
 * <Button variant="outline">Outlined</Button>
 * <Button variant="ghost" size="sm">Small Ghost</Button>
 * ```
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    const classes = cn('mdk-button', `mdk-button--${variant}`, `mdk-button--${size}`, className)

    return <button className={classes} ref={ref} {...props} />
  },
)
Button.displayName = 'Button'

export { Button }
