import About from "@/components/About";
import Hero from "@/components/Hero";
import HopeCard from "@/components/HopeCard";
import Impact from "@/components/Impact";
import ParallaxVolunteer from "@/components/ParallaxVolunteer";
import Support from "@/components/Support";
import Volunteer from "@/components/Volunteer";

export default function Home() {
  return (
    <div>
      <Hero />
      <Volunteer />
      <Impact />
      <ParallaxVolunteer />
      <Support />
    </div>
  );
}
