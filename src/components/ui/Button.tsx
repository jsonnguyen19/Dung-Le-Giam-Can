import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";
import { HTMLMotionProps } from "framer-motion";
import { AnimatedButton } from "@/components/motion/WithAnimation";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  children?: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className = "",
      variant = "primary",
      size = "md",
      isLoading = false,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-md font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-pink focus:ring-offset-2";

    const variants = {
      primary: "bg-pink text-white hover:bg-pinkDark",
      secondary: "bg-pinkLight text-pink hover:bg-pink hover:text-white",
      outline: "border-2 border-pink text-pink hover:bg-pink hover:text-white",
    };

    const sizes = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-4 py-2 text-base",
      lg: "px-6 py-3 text-lg",
    };

    return (
      <AnimatedButton
        ref={ref}
        whileTap={{ scale: 0.98 }}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        disabled={isLoading || disabled}
        {...props}
      >
        {isLoading ? (
          <>
            <span className="mr-2">⏳</span>
            Đang xử lý...
          </>
        ) : (
          children
        )}
      </AnimatedButton>
    );
  }
);

Button.displayName = "Button";
