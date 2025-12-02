import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "@assets/generated_images/hero_background_of_a_modern_aerosol_manufacturing_facility.png";

export function Hero() {
  return (
    <section id="hero" className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Advanced Aerosol Manufacturing Facility in India" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/75 to-slate-900/30"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-32 md:pt-40">
        <div className="max-w-4xl animate-in slide-in-from-bottom-10 duration-700 fade-in">
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
            India's Trusted Manufacturer of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80">
              Premium Aerosols & Gas Products
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
            We deliver excellence in every can. From household room fresheners and insect repellents to industrial gas cartridges and custom private-label solutions. Partner with Pondicherry's most reliable manufacturing hub.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-8 relative z-20">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-heading tracking-wide text-base sm:text-lg h-12 sm:h-14 px-6 sm:px-8 shadow-xl shadow-primary/30 transition-all hover:scale-105 active:scale-95 rounded-lg font-bold">
              Get a Bulk Quote
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/20 hover:border-white font-heading tracking-wide text-base sm:text-lg h-12 sm:h-14 px-6 sm:px-8 transition-all rounded-lg font-bold bg-white/5 backdrop-blur-sm">
              Explore Catalog <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-slate-400">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent"></span>
              Bulk Manufacturing
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent"></span>
              Private Label (OEM)
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent"></span>
              Pan-India Delivery
            </span>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
}
