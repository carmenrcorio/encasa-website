import Hero from '@/components/Hero';
import ValueStatement from '@/components/ValueStatement';
import HouseRooms from '@/components/HouseRooms';
import AdminProduct from '@/components/AdminProduct';
import CommandCenterHero from '@/components/CommandCenterHero';
import OperatorModules from '@/components/OperatorModules';
import GuestPortalPreview from '@/components/GuestPortalPreview';
import ItineraryCallout from '@/components/ItineraryCallout';
import FeaturesGrid from '@/components/FeaturesGrid';
import SocialProof from '@/components/SocialProof';
import Onboarding from '@/components/Onboarding';
import FinalCTA from '@/components/FinalCTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ValueStatement />
      <HouseRooms />
      <AdminProduct />
      <CommandCenterHero />
      <OperatorModules />
      <GuestPortalPreview />
      <ItineraryCallout />
      <FeaturesGrid />
      <SocialProof />
      <Onboarding />
      <FinalCTA />
    </>
  );
}
