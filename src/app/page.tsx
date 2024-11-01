import { stocks } from "@/data/stocks";
import { Header } from "@/components/ui/header";
import { SearchBar } from "@/components/ui/search-bar";
import { StockListing } from "@/components/stock/stock-listing";

interface PageProps {
  searchParams:
    | Promise<{ q?: string; sort?: string }>
    | { q?: string; sort?: string };
}

export default async function HomePage({ searchParams }: PageProps) {
  const resolvedSearchParams = await searchParams;
  const query = resolvedSearchParams?.q || "";
  const sortBy = resolvedSearchParams?.sort || "symbol";

  const filteredStocks = stocks.filter((stock) => {
    const searchTerm = query.toLowerCase();
    return (
      stock.symbol.toLowerCase().includes(searchTerm) ||
      stock.name.toLowerCase().includes(searchTerm)
    );
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container py-12">
        <div className="flex flex-col items-center gap-8 max-w-5xl mx-auto">
          <div className="text-center space-y-2">
            <h1 className="text-4xl font-bold">Ações IBOVESPA</h1>
            <p className="text-muted-foreground">
              Encontre e acompanhe as principais ações do índice IBOVESPA
            </p>
          </div>

          <div className="w-full max-w-2xl">
            <SearchBar initialQuery={query} />
          </div>

          <StockListing stocks={filteredStocks} initialSort={sortBy} />
        </div>
      </main>
    </div>
  );
}
