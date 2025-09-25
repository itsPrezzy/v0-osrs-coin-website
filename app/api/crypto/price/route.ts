import { NextResponse } from "next/server"

export async function GET() {
  try {
    const prelaunchImaxData = {
      price: 0,
      market_cap: 0,
      holders: 0,
      change_24h: 0,
      volume_24h: 0,
    }

    // Bitcoin data for reference (can keep real-ish data)
    const bitcoinData = {
      usd: 95000 + (Math.random() - 0.5) * 2000, // Slight variation
      usd_market_cap: 1800000000000,
      usd_24h_change: 2.5 + (Math.random() - 0.5) * 2,
    }

    return NextResponse.json({
      imax: prelaunchImaxData,
      bitcoin: bitcoinData,
    })
  } catch (error) {
    console.error("Error generating crypto data:", error)

    const fallbackData = {
      imax: {
        price: 0,
        market_cap: 0,
        holders: 0,
        change_24h: 0,
        volume_24h: 0,
      },
      bitcoin: {
        usd: 95000,
        usd_market_cap: 1800000000000,
        usd_24h_change: 2.5,
      },
    }

    return NextResponse.json(fallbackData)
  }
}
