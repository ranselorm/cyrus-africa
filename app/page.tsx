import About from "@/components/About";
import Blog from "@/components/Blog";
import Feedback from "@/components/Feedback";
import Hero from "@/components/Hero";
import HopeCard from "@/components/HopeCard";
import Impact from "@/components/Impact";
import ParallaxVolunteer from "@/components/ParallaxVolunteer";
import Support from "@/components/Support";
import Testimonials from "@/components/Testimonials";
import Volunteer from "@/components/Volunteer";

export default function Home() {
  return (
    <div>
      <Hero />
      <Volunteer />
      <Impact />
      <ParallaxVolunteer />
      <Support />
      <Testimonials />
      <Blog />
      <Feedback />
    </div>
  );
}
