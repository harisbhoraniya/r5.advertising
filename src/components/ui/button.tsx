import * as React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
}

const variantClasses: Record<string, string> = {
  default: "bg-emerald-800 text-white hover:bg-emerald-700",
  destructive: "bg-red-600 text-white hover:bg-red-500",
  outline: "bg-transparent border border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-emerald-800 hover:border-slate-300",
  secondary: "bg-slate-100 text-slate-900 hover:bg-slate-200",
  ghost: "bg-transparent text-slate-700 hover:bg-slate-100 hover:text-emerald-800",
  link: "text-emerald-800 underline-offset-4 hover:underline",
};

const sizeClasses: Record<string, string> = {
  default: "h-10 px-4 py-2",
  sm: "h-[34px] px-3 text-xs",
  lg: "h-[46px] px-6 text-[15px]",
  icon: "h-[38px] w-[38px] p-0 justify-center",
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer border border-transparent outline-none disabled:pointer-events-none disabled:opacity-50 ${variantClasses[variant] || variantClasses.default} ${sizeClasses[size] || sizeClasses.default} ${className}`}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
