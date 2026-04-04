import { LandingHeader } from "@/components/landing/landing-header";
import { LandingHero } from "@/components/landing/landing-hero";
import { LandingStats } from "@/components/landing/landing-stats";
import { LandingFeatures } from "@/components/landing/landing-features";
import { LandingCTA } from "@/components/landing/landing-cta";
import { LandingFooter } from "@/components/landing/landing-footer";

export default function WelcomePage() {
  return (
    <div className="min-h-screen bg-white font-geist text-gray-900">
      <LandingHeader />
      <LandingHero />
      <LandingStats />
      <LandingFeatures />
      <LandingCTA />
      <LandingFooter />
    </div>
  );
}
