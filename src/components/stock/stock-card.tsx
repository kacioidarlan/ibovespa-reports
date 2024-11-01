"use client";

import Link from "next/link";
import { Stock } from "@/types/stock";

interface StockCardProps {
  stock: Stock;
}

export function StockCard({ stock }: StockCardProps) {
  return (
    <Link href={`/stock/${stock.symbol}`}>
      <div className="group h-full p-6 rounded-lg border border-border bg-card hover:bg-accent hover:border-accent transition-all duration-200 ease-in-out">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-xl font-bold text-card-foreground group-hover:text-accent-foreground">
                {stock.symbol}
              </h2>
              <p className="text-sm text-muted-foreground">{stock.name}</p>
            </div>
            <div className="flex items-center gap-1">
              <span
                className={`text-lg font-semibold ${
                  stock.percentage >= 0
                    ? "text-emerald-600 dark:text-emerald-400"
                    : "text-rose-600 dark:text-rose-400"
                }`}
              >
                {stock.percentage.toFixed(2)}%
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
