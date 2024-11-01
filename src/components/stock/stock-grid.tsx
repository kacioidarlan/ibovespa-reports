import { Stock } from "@/types/stock";
import { StockCard } from "./stock-card";

interface StockGridProps {
  stocks: Stock[];
}

export function StockGrid({ stocks }: StockGridProps) {
  if (stocks.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-center">
        <p className="text-lg font-medium text-gray-900 dark:text-gray-100">
          Nenhuma ação encontrada
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Tente buscar com outros termos
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {stocks.map((stock) => (
        <StockCard key={stock.symbol} stock={stock} />
      ))}
    </div>
  );
}
