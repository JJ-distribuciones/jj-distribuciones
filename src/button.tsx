// C:\jorge\jj-distribuciones\src\button.tsx
import * as React from "react"
import { VariantProps, cva } from "class-variance-authority"
import { cn } from "@/lib/utils" // Se mantiene con el alias, que se resuelve a src/lib/utils.ts

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: { // Corregido: 'variants' debe ser una propiedad en el objeto de configuración de cva
        "default": "bg-primary text-primary-foreground hover:bg-primary/90",
        "destructive": "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        "secondary": "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        "success": "bg-green-600 text-white hover:bg-green-700",
        "outline": "border border-input bg-background hover:bg-accent hover:text-accent-foreground", // Agregado para el botón "Más detalles"
        "ghost": "hover:bg-accent hover:text-accent-foreground",
        "link": "text-primary underline-offset-4 hover:underline",
      },
      size: { // Agregado para el tamaño 'sm' que usas en el botón "Más detalles"
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => { // Agregado 'size' a las props
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))} // Se pasa 'size' a buttonVariants
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }