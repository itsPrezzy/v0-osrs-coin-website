"use client"
import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { useOSRSData } from "@/hooks/use-osrs-data"

export function MilestoneTracker() {
  const [mounted, setMounted] = useState(false)
  const { skills, isLoading, totalLevel, username, error } = useOSRSData()

  useEffect(() => {
    setMounted(true)
  }, [])

  // Filter to only show skills needed for Achievement Diary
  const relevantSkills = skills.filter((skill) =>
    [
      "Crafting",
      "Prayer",
      "Magic",
      "Smithing",
      "Fishing",
      "Agility",
      "Cooking",
      "Fletching",
      "Runecrafting",
      "Slayer",
    ].includes(skill.name),
  )

  return (
    <section id="progress" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            Current Milestone
          </Badge>
          <h2 className="text-3xl font-bold text-balance mb-4">Achievement Diary Cape</h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Track real-time progress toward the Achievement Diary Cape. Current total level: {mounted ? totalLevel : "..."}
            {mounted && error && <span className="block text-sm text-yellow-500 mt-1">Using demo data - {username}</span>}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {!mounted || isLoading
            ? // Loading skeleton
              Array.from({ length: 10 }).map((_, i) => (
                <Card key={i} className="osrs-border animate-pulse">
                  <CardHeader className="pb-3">
                    <div className="h-4 bg-muted rounded w-20"></div>
                  </CardHeader>
                  <CardContent>
                    <div className="h-2 bg-muted rounded mb-2"></div>
                    <div className="h-2 bg-muted rounded"></div>
                  </CardContent>
                </Card>
              ))
            : relevantSkills.map((skill) => {
                const progress = (skill.level / (skill.target || skill.level)) * 100
                return (
                  <Card key={skill.name} className="osrs-border">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{skill.name}</CardTitle>
                        <Badge variant={(skill.remaining || 0) <= 5 ? "default" : "secondary"}>-{skill.remaining || 0} lvls</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">
                          {skill.level}/{skill.target}
                        </span>
                        <span className="text-sm text-muted-foreground">{Math.round(progress)}%</span>
                      </div>
                      <Progress value={progress} className="h-2" />
                    </CardContent>
                  </Card>
                )
              })}
        </div>

        <div className="text-center mt-12">
          <Card className="inline-block p-6 coin-glow">
            <div className="text-sm text-muted-foreground mb-1">Next Goal</div>
            <div className="text-2xl font-bold text-primary">Achievement Cape</div>
            <div className="text-sm text-muted-foreground mt-1">
              {mounted ? relevantSkills.reduce((sum, skill) => sum + (skill.remaining || 0), 0) : "..."} levels remaining
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
