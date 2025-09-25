import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function LiveUpdates() {
  return (
    <section id="live" className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-balance mb-4">Live Updates</h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Watch the grind live and stay updated with the latest progress and community highlights.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="overflow-hidden">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Live Stream</CardTitle>
                <Badge variant="secondary" className="animate-pulse">
                  🔴 Coming Soon
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4">
                <div className="text-center">
                  <div className="text-4xl mb-2">🎮</div>
                  <div className="text-sm text-muted-foreground">Stream will be live here</div>
                  <div className="text-xs text-muted-foreground mt-1">Pre-launch: Setting up equipment</div>
                </div>
              </div>
              <Button className="w-full coin-glow" disabled>
                Stream Coming Soon
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Updates</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                <div className="text-xs text-muted-foreground mt-1">1d ago</div>
                <div className="flex-1">
                  <div className="text-sm font-medium">Website launched! 🚀</div>
                  <div className="text-xs text-muted-foreground">Getting ready for $IMAX token launch</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                <div className="text-xs text-muted-foreground mt-1">2d ago</div>
                <div className="flex-1">
                  <div className="text-sm font-medium">Preparing for launch 📈</div>
                  <div className="text-xs text-muted-foreground">Final preparations underway</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                <div className="text-xs text-muted-foreground mt-1">3d ago</div>
                <div className="flex-1">
                  <div className="text-sm font-medium">Community building 👥</div>
                  <div className="text-xs text-muted-foreground">Growing the $IMAX community</div>
                </div>
              </div>

              <Button variant="outline" className="w-full bg-transparent">
                View All Updates
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
