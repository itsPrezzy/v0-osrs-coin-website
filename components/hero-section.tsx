"use client"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { useOSRSData } from "@/hooks/use-osrs-data"
import { useCryptoData } from "@/hooks/use-crypto-data"

export function HeroSection() {
  const { totalLevel, isLoading: osrsLoading } = useOSRSData()
  const { marketCap, holders, isLoading: cryptoLoading } = useCryptoData()

  return (
    <section className="relative py-20 lg:py-32">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <Badge variant="outline" className="mb-6 text-sm">
            🔥 Powered by PumpFun
          </Badge>

          <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-6xl lg:text-7xl mb-6">
            First Ironman to <span className="text-primary">Max</span> on OSRS
          </h1>

          <p className="text-xl text-muted-foreground text-pretty mb-8 max-w-2xl mx-auto">
            Follow the ultimate Old School RuneScape challenge. Every trade fuels the grind to max cape. Join the $IMAX
            community and witness history in the making.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="coin-glow text-lg px-8">
              Watch Live Stream
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent">
              Buy $IMAX
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <Card className="p-6 text-center">
              <div className="text-2xl font-bold text-primary mb-2">
                {osrsLoading ? "..." : totalLevel.toLocaleString()}
              </div>
              <div className="text-sm text-muted-foreground">Total Level</div>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-2xl font-bold text-primary mb-2">
                {cryptoLoading ? "..." : `$${(marketCap / 1000).toFixed(1)}K`}
              </div>
              <div className="text-sm text-muted-foreground">Market Cap</div>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-2xl font-bold text-primary mb-2">
                {cryptoLoading ? "..." : holders.toLocaleString()}
              </div>
              <div className="text-sm text-muted-foreground">Holders</div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
