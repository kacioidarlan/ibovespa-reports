export interface Stock {
  /** Stock symbol (e.g., PETR4) */
  symbol: string;

  /** Company name (e.g., PETROBRAS) */
  name: string;

  /** Percentage participation in IBOVESPA index */
  percentage: number;
}
