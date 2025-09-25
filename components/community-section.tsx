import { Card, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function CommunitySection() {
  return (
    <section id="community" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-balance mb-4">Join the Community</h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Every trade fuels the grind. Be part of the first Ironman to max on OSRS and earn exclusive rewards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          <Card className="text-center p-6">
            <div className="text-3xl mb-3">🏆</div>
            <CardTitle className="mb-2">Milestone Rewards</CardTitle>
            <p className="text-sm text-muted-foreground">Exclusive NFTs and giveaways for major level milestones</p>
          </Card>

          <Card className="text-center p-6">
            <div className="text-3xl mb-3">💎</div>
            <CardTitle className="mb-2">Holder Benefits</CardTitle>
            <p className="text-sm text-muted-foreground">Special access to streams, Discord, and community events</p>
          </Card>

          <Card className="text-center p-6">
            <div className="text-3xl mb-3">🚀</div>
            <CardTitle className="mb-2">Max Cape Hype</CardTitle>
            <p className="text-sm text-muted-foreground">
              Be part of OSRS history when the max cape is finally achieved
            </p>
          </Card>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-4 p-6 rounded-2xl bg-card border coin-glow">
            <div>
              <div className="text-sm text-muted-foreground">Contract Address</div>
              <div className="font-mono text-sm">0x1234...5678</div>
            </div>
            <Button size="sm" variant="outline">
              Copy
            </Button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Button size="lg" className="coin-glow">
            Buy $IMAX on PumpFun
          </Button>
          <Button size="lg" variant="outline">
            Join Discord
          </Button>
          <Button size="lg" variant="outline">
            Follow on Twitter
          </Button>
        </div>
      </div>
    </section>
  )
}
