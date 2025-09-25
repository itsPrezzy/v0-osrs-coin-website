import { NextResponse } from "next/server"

export async function GET() {
  try {
    const username = "Iron Prezzy"

    // Using RuneScape's official API
    const response = await fetch(
      `https://secure.runescape.com/m=hiscore_oldschool/index_lite.ws?player=${encodeURIComponent(username)}`,
      {
        next: { revalidate: 300 }, // Cache for 5 minutes
      },
    )

    if (!response.ok) {
      throw new Error("Failed to fetch OSRS data")
    }

    const data = await response.text()
    const lines = data.trim().split("\n")

    // Parse the hiscores data
    const skills = [
      "Overall",
      "Attack",
      "Defence",
      "Strength",
      "Hitpoints",
      "Ranged",
      "Prayer",
      "Magic",
      "Cooking",
      "Woodcutting",
      "Fletching",
      "Fishing",
      "Firemaking",
      "Crafting",
      "Smithing",
      "Mining",
      "Herblore",
      "Agility",
      "Thieving",
      "Slayer",
      "Farming",
      "Runecrafting",
      "Hunter",
      "Construction",
    ]

    const parsedSkills = skills.map((skillName, index) => {
      if (lines[index]) {
        const [rank, level, xp] = lines[index].split(",").map(Number)
        return {
          name: skillName,
          level: level || 1,
          xp: xp || 0,
          rank: rank || -1,
        }
      }
      return {
        name: skillName,
        level: 1,
        xp: 0,
        rank: -1,
      }
    })

    // Calculate total level
    const totalLevel = parsedSkills.slice(1).reduce((sum, skill) => sum + skill.level, 0)

    return NextResponse.json({
      username,
      totalLevel,
      skills: parsedSkills,
      lastUpdated: new Date().toISOString(),
    })
  } catch (error) {
    console.error("Error fetching OSRS data:", error)

    const mockSkills = [
      { name: "Crafting", level: 83, xp: 2750000, target: 85 },
      { name: "Prayer", level: 77, xp: 1650000, target: 85 },
      { name: "Magic", level: 85, xp: 3250000, target: 94 },
      { name: "Smithing", level: 76, xp: 1450000, target: 87 },
      { name: "Fishing", level: 80, xp: 2100000, target: 91 },
      { name: "Agility", level: 74, xp: 1200000, target: 85 },
      { name: "Cooking", level: 79, xp: 1950000, target: 91 },
      { name: "Fletching", level: 75, xp: 1350000, target: 91 },
      { name: "Runecrafting", level: 69, xp: 750000, target: 86 },
      { name: "Slayer", level: 75, xp: 1350000, target: 93 },
    ]

    return NextResponse.json({
      username: "Iron Prezzy",
      totalLevel: 1847,
      skills: mockSkills,
      lastUpdated: new Date().toISOString(),
      error: "Using mock data - API unavailable",
    })
  }
}
