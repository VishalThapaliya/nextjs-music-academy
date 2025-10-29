import Hero from "@/app/components/Hero";
import FeaturedCourses from "@/app/components/FeaturedCourses";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <Hero />
      <FeaturedCourses />
    </main>
  );
}
