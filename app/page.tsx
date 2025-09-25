import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { MilestoneTracker } from "@/components/milestone-tracker"
import { LiveUpdates } from "@/components/live-updates"
import { CommunitySection } from "@/components/community-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <MilestoneTracker />
        <LiveUpdates />
        <CommunitySection />
      </main>
      <Footer />
    </div>
  )
}
