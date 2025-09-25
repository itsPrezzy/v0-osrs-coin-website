"use client"

import { useState, useEffect } from "react"

interface CryptoData {
  imax: {
    price: number
    market_cap: number
    holders: number
    change_24h: number
    volume_24h: number
  }
  bitcoin: {
    usd: number
    usd_market_cap: number
    usd_24h_change: number
  }
}

const fallbackData: CryptoData = {
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

export function useCryptoData() {
  const [data, setData] = useState<CryptoData>(fallbackData)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted || typeof window === "undefined") return

    const fetchData = async () => {
      try {
        setIsLoading(true)
        const response = await fetch("/api/crypto/price")
        if (!response.ok) {
          console.log("API not available, using fallback data")
          setError(null)
          return
        }
        const result = await response.json()
        setData(result)
        setError(null)
      } catch (err) {
        console.log("Using fallback data:", err)
        setError(null)
      } finally {
        setIsLoading(false)
      }
    }

    // Initial fetch
    fetchData()

    // Set up interval for periodic updates
    const interval = setInterval(fetchData, 30000) // 30 seconds

    return () => clearInterval(interval)
  }, [mounted])

  return {
    data,
    isLoading: mounted ? isLoading : false,
    error,
    price: data.imax.price,
    marketCap: data.imax.market_cap,
    holders: data.imax.holders,
    change24h: data.imax.change_24h,
  }
}
