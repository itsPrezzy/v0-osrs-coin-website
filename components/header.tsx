import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useCryptoData } from "@/hooks/use-crypto-data"

export function Header() {
  const { price, isLoading, change24h } = useCryptoData()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-primary coin-glow" />
            <span className="text-xl font-bold text-balance">$IMAX</span>
          </div>
          <Badge variant="secondary" className="hidden sm:inline-flex">
            First Ironman to Max
          </Badge>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a href="#progress" className="text-sm font-medium hover:text-primary transition-colors">
            Progress
          </a>
          <a href="#live" className="text-sm font-medium hover:text-primary transition-colors">
            Live Stream
          </a>
          <a href="#community" className="text-sm font-medium hover:text-primary transition-colors">
            Community
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <div className="text-xs text-muted-foreground">$IMAX Price</div>
            <div className="flex items-center gap-1">
              <div className="text-sm font-mono font-bold text-primary">
                {isLoading ? "$0.004..." : `$${price.toFixed(6)}`}
              </div>
              {!isLoading && change24h !== 0 && (
                <span className={`text-xs ${change24h > 0 ? "text-green-500" : "text-red-500"}`}>
                  {change24h > 0 ? "+" : ""}
                  {change24h.toFixed(1)}%
                </span>
              )}
            </div>
          </div>
          <Button size="sm" className="coin-glow">
            Watch Live
          </Button>
        </div>
      </div>
    </header>
  )
}
