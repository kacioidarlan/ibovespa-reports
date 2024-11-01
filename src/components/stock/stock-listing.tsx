"use client";

import { Stock } from "@/types/stock";
import { StockGrid } from "./stock-grid";
import { Select } from "@/components/ui/select";
import { useRouter, useSearchParams } from "next/navigation";

interface StockListingProps {
  stocks: Stock[];
  initialSort: string;
}

const sortOptions = [
  { value: "symbol", label: "A-Z" },
  { value: "percentage", label: "%IBOV" },
];

export function StockListing({ stocks, initialSort }: StockListingProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSortAction = (value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("sort", value);
    router.push("?" + params.toString());
  };

  // Sort stocks
  const sortedStocks = [...stocks].sort((a, b) => {
    if (initialSort === "percentage") {
      return b.percentage - a.percentage;
    }
    return a.symbol.localeCompare(b.symbol);
  });

  return (
    <div className="w-full space-y-6">
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          {sortedStocks.length} ações encontradas
        </p>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Ordenar por:</span>
          <div className="w-32">
            <Select
              value={initialSort}
              onChangeAction={handleSortAction}
              options={sortOptions}
            />
          </div>
        </div>
      </div>

      <StockGrid stocks={sortedStocks} />
    </div>
  );
}
