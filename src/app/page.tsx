import { stocks } from "@/data/stocks";
import { Header } from "@/components/ui/header";
import { SearchBar } from "@/components/ui/search-bar";
import { StockListing } from "@/components/stock/stock-listing";

interface PageProps {
  params: { [key: string]: string | string[] | undefined };
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function HomePage({ searchParams }: PageProps) {
  // Safely get string values from searchParams object
  const query = Array.isArray(searchParams?.q) 
    ? searchParams.q[0] ?? "" 
    : searchParams?.q ?? "";
  const sortBy = Array.isArray(searchParams?.sort) 
    ? searchParams.sort[0] ?? "percentage" 
    : searchParams?.sort ?? "percentage";

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
      <footer className="py-6 border-t">
        <div className="container">
          <p className="text-center text-sm text-muted-foreground bg-muted p-4 rounded-lg max-w-3xl mx-auto">
            <strong>Observação:</strong> Este site é apenas um estudo do crewAI para geração de relatórios de papéis do IBOV e não representa uma recomendação de investimento.
          </p>
        </div>
      </footer>
    </div>
  );
}
