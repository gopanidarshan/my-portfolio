import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-brand text-white hover:bg-brand/80',
        secondary: 'border-transparent bg-muted text-muted-foreground hover:bg-muted/80',
        outline: 'text-foreground border-border',
        success: 'border-transparent bg-accent-green text-white hover:bg-accent-green/80',
        info: 'border-transparent bg-accent-cyan text-white hover:bg-accent-cyan/80',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
