import { ArrowUpIcon } from "lucide-react";
import { Button } from "./button";

export interface ButtonRoundedProps {
  label?: string;
  onClick?: () => void;
  className?: string;
  iconTitle?: string;
}

export function ButtonRounded({
  label = "Get Started",
  onClick,
  className = "",
  iconTitle = "View Details",
}: ButtonRoundedProps) {
  return (
    <div className={`flex gap-2 items-center ${className}`}>
      <Button className="rounded-full bg-emerald-800 hover:bg-emerald-700 text-white shadow-sm" onClick={onClick}>
        {label}
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="rounded-full border-slate-300 hover:bg-emerald-50 hover:text-emerald-800 hover:border-emerald-700 shadow-sm"
        onClick={onClick}
        title={iconTitle}
      >
        <ArrowUpIcon className="w-4 h-4" />
      </Button>
    </div>
  );
}

export default ButtonRounded;
