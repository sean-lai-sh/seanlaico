import AboutPage from "@/components/AboutPage";
import Hero from "@/components/Hero";


export default function Home() {
  return (
   <div className="w-full overflow-x-clip">
    <Hero />
    <AboutPage />
   </div>
  );
}
