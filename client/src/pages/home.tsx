import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { WhyUs } from "@/components/sections/why-us";
import { Products } from "@/components/sections/products";
import { About } from "@/components/sections/about";
import { Process } from "@/components/sections/process";
import { FAQ } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/layout/footer";
import { ChatWidget } from "@/components/widgets/chat-widget";

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <WhyUs />
        <About />
        <Products />
        <Process />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}
