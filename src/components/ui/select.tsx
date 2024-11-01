"use client";

import { ChevronDown } from "lucide-react";

interface SelectProps {
  value: string;
  onChangeAction: (value: string) => void;
  options: { value: string; label: string }[];
}

export function Select({ value, onChangeAction, options }: SelectProps) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChangeAction(e.target.value)}
        className="appearance-none w-full bg-card border border-border rounded-md px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-colors cursor-pointer"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
    </div>
  );
}
