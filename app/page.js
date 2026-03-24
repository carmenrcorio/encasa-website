import Hero from '@/components/Hero';
import ValueStatement from '@/components/ValueStatement';
import HouseRooms from '@/components/HouseRooms';
import AdminProduct from '@/components/AdminProduct';
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
      <FeaturesGrid />
      <SocialProof />
      <Onboarding />
      <FinalCTA />
    </>
  );
}
