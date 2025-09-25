"use client"
import { useState, useEffect } from "react"

interface OSRSSkill {
  name: string
  level: number
  xp: number
  rank?: number
  target?: number
  remaining?: number
}

interface OSRSData {
  username: string
  totalLevel: number
  skills: OSRSSkill[]
  lastUpdated: string
  error?: string
}

const fallbackData: OSRSData = {
  username: "Iron Prezzy",
  totalLevel: 1851,
  skills: [
    { name: "Crafting", level: 80, xp: 2000000, target: 85, remaining: 5 },
    { name: "Prayer", level: 82, xp: 2500000, target: 85, remaining: 3 },
    { name: "Magic", level: 89, xp: 5000000, target: 94, remaining: 5 },
    { name: "Smithing", level: 85, xp: 3500000, target: 87, remaining: 2 },
    { name: "Fishing", level: 88, xp: 4500000, target: 91, remaining: 3 },
    { name: "Agility", level: 83, xp: 2800000, target: 85, remaining: 2 },
    { name: "Cooking", level: 90, xp: 5500000, target: 91, remaining: 1 },
    { name: "Fletching", level: 87, xp: 4000000, target: 91, remaining: 4 },
    { name: "Runecrafting", level: 81, xp: 2200000, target: 86, remaining: 5 },
    { name: "Slayer", level: 88, xp: 4800000, target: 93, remaining: 5 },
  ],
  lastUpdated: new Date().toISOString(),
}

export function useOSRSData() {
  const [data, setData] = useState<OSRSData>(fallbackData)
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
        const response = await fetch("/api/osrs/stats")
        if (!response.ok) {
          console.log("OSRS API not available, using fallback data")
          setError(null)
          return
        }
        const result = await response.json()

        const processedResult = {
          ...result,
          skills: Array.isArray(result.skills)
            ? result.skills.map((skill: OSRSSkill) => {
                const targets: Record<string, number> = {
                  Crafting: 85,
                  Prayer: 85,
                  Magic: 94,
                  Smithing: 87,
                  Fishing: 91,
                  Agility: 85,
                  Cooking: 91,
                  Fletching: 91,
                  Runecrafting: 86,
                  Slayer: 93,
                }

                return {
                  ...skill,
                  target: targets[skill.name] || skill.level,
                  remaining: Math.max(0, (targets[skill.name] || skill.level) - skill.level),
                }
              })
            : fallbackData.skills,
        }

        setData(processedResult)
        setError(null)
      } catch (err) {
        console.log("Using fallback OSRS data:", err)
        setError(null)
      } finally {
        setIsLoading(false)
      }
    }

    // Initial fetch
    fetchData()

    // Set up interval for periodic updates
    const interval = setInterval(fetchData, 300000) // 5 minutes

    return () => clearInterval(interval)
  }, [mounted])

  return {
    data,
    isLoading: mounted ? isLoading : false,
    error,
    totalLevel: data.totalLevel,
    skills: data.skills,
    username: data.username,
    lastUpdated: data.lastUpdated,
  }
}
