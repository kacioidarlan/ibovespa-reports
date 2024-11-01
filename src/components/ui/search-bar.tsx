"use client";

import { Search } from "lucide-react";
import { useCallback, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface SearchBarProps {
  initialQuery?: string;
}

export function SearchBar({ initialQuery = "" }: SearchBarProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(initialQuery);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      // Preserve sort parameter
      const sort = params.get("sort");
      if (sort) {
        params.set("sort", sort);
      }
      return params.toString();
    },
    [searchParams],
  );

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    router.push(pathname + "?" + createQueryString("q", value));
  };

  return (
    <div className="relative w-full">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Buscar por nome ou código da ação..."
          className="w-full h-12 rounded-lg border border-border bg-card px-11 text-base placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
        />
      </div>
    </div>
  );
}
