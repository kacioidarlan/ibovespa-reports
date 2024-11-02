import fs from "fs/promises";
import path from "path";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { stocks } from "@/data/stocks";
import { Header } from "@/components/ui/header";
import { MarkdownViewer } from "@/components/stock/markdown-viewer";

type PageProps = {
  params: {
    symbol: string;
  };
};

export default async function StockPage({ params }: PageProps) {
  const stock = stocks.find((s) => s.symbol === params.symbol);

  if (!stock) {
    notFound();
  }

  let content: string;
  try {
    const filePath = path.join(
      process.cwd(),
      "reports",
      `${params.symbol}-report.md`,
    );
    console.log("Attempting to read file:", filePath);

    const fileExists = await fs
      .access(filePath)
      .then(() => true)
      .catch(() => false);

    if (!fileExists) {
      content = `# Relatório da ${stock.name} (${stock.symbol})

## Relatório em Desenvolvimento

O relatório detalhado para ${stock.symbol} está atualmente em desenvolvimento.

### Informações Básicas
- **Código**: ${stock.symbol}
- **Empresa**: ${stock.name}
- **Participação no Índice**: ${stock.percentage.toFixed(2)}%

*Mais informações serão adicionadas em breve.*`;
    } else {
      content = await fs.readFile(filePath, "utf-8");
    }
  } catch (error) {
    console.error("Error reading markdown file:", error);
    content = `# Erro ao Carregar Relatório

Desculpe, não foi possível carregar o relatório para ${stock.symbol} no momento.

Por favor, tente novamente mais tarde.`;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 space-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors px-4 py-2 rounded-lg hover:bg-accent"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar para lista
            </Link>
            <div>
              <h1 className="text-3xl font-bold mb-2">{stock.name}</h1>
              <div className="flex items-center gap-4">
                <span className="text-lg text-muted-foreground">
                  {stock.symbol}
                </span>
                <span
                  className={`text-lg font-semibold ${
                    stock.percentage >= 0
                      ? "text-green-500 dark:text-green-400"
                      : "text-red-500 dark:text-red-400"
                  }`}
                >
                  {stock.percentage.toFixed(2)}%
                </span>
              </div>
            </div>
          </div>
          <div className="prose dark:prose-invert max-w-none">
            <MarkdownViewer content={content} />
          </div>
        </div>
      </main>
    </div>
  );
}
