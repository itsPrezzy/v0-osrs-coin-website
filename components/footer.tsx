export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-6 w-6 rounded-full bg-primary coin-glow" />
              <span className="font-bold">$IMAX</span>
            </div>
            <p className="text-sm text-muted-foreground">
              First Ironman to Max on Old School RuneScape. Powered by community, fueled by determination.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Progress</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#progress" className="hover:text-foreground transition-colors">
                  Skill Tracker
                </a>
              </li>
              <li>
                <a href="#live" className="hover:text-foreground transition-colors">
                  Live Updates
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Milestones
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Community</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Discord
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Telegram
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Trading</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  PumpFun
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Chart
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Contract
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 $IMAX. All rights reserved. Not affiliated with Jagex Ltd.</p>
        </div>
      </div>
    </footer>
  )
}
