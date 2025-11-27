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
          alt="Modern Manufacturing Facility" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/30"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-3xl animate-in slide-in-from-bottom-10 duration-700 fade-in">
          <div className="inline-block bg-accent/10 text-accent border border-accent/20 px-3 py-1 rounded text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
            Manufacturing Excellence Since 1990
          </div>
          
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 leading-tight">
            Build Your Brand With <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
              Reliable Aerosol
            </span> <br />
            & Gas Products
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
            From room fresheners to lighters, gas cartridges, sprays, and custom solutions. 
            Trusted by retailers and distributors across India for over 30 years.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-heading tracking-wide text-lg h-14 px-8 shadow-lg shadow-primary/20">
              Request A Quote
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:border-white font-heading tracking-wide text-lg h-14 px-8 backdrop-blur-sm">
              View Product Catalog <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          <p className="mt-6 text-sm text-slate-400 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent"></span>
            Bulk orders & private-label services available
          </p>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
}
