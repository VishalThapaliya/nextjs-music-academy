import Hero from "@/app/components/Hero";
import FeaturedCourses from "@/app/components/FeaturedCourses";
import WhyChooseUs from "@/app/components/WhyChooseUs";
import MusicSchoolTestimonialCards from "@/app/components/TestimonialCards";
import UpcomingWebinars from "@/app/components/UpcomingWebinars";
import Instructors from "./components/Instructors";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <Hero />
      <FeaturedCourses />
      <WhyChooseUs />
      <MusicSchoolTestimonialCards />
      <UpcomingWebinars />
      <Instructors />
    </main>
  );
}
