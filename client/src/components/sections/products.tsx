import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import freshenerImg from "@assets/product-air-freshener.png";
import insectImg from "@assets/product-insect-killer.png";
import specialtyImg from "@assets/product-rust-spray.png";
import petImg from "@assets/product-pet-spray.png";
import gasImg from "@assets/generated_images/butane_gas_cartridges_and_lighter_fuel_cans.png"; // Keeping generated for now as no upload matched perfectly

export function Products() {
  const categories = [
    {
      title: "Aerosol & Air-Fresheners",
      description: "Room Fresheners, Automatic Machines, Shaving Foam, Snow Spray.",
      image: freshenerImg,
      color: "bg-blue-50"
    },
    {
      title: "Insect Control",
      description: "Aerosol Insect Sprays, Herbal Repellents, Creams, Multi-Insect Killers.",
      image: insectImg,
      color: "bg-green-50"
    },
    {
      title: "Specialty & Chemical",
      description: "Rust Release Sprays, Odor Removal Chemicals, Custom Formulations.",
      image: specialtyImg,
      color: "bg-slate-50"
    },
    {
      title: "Pet Care & Veterinary",
      description: "Tick & Flea Sprays, Veterinary Pharmaceuticals, Pet Hygiene Products.",
      image: petImg,
      color: "bg-orange-50"
    }
  ];

  return (
    <section id="products" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-accent font-bold uppercase tracking-widest text-sm mb-2 block">Our Offerings</span>
            <h2 className="text-4xl font-heading font-bold text-foreground">Product Categories</h2>
          </div>
          <Button variant="outline" className="hidden md:flex font-heading">
            Download Full Catalog <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((cat, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col md:flex-row h-full md:h-72"
            >
              <div className="w-full md:w-1/2 h-64 md:h-full relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={cat.image} 
                  alt={cat.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              <div className="w-full md:w-1/2 p-8 flex flex-col justify-center relative">
                <h3 className="text-2xl font-heading font-bold text-foreground mb-4">{cat.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {cat.description}
                </p>
                <div className="mt-auto">
                  <a href="#" className="inline-flex items-center text-primary font-bold uppercase text-sm tracking-wide hover:text-accent transition-colors">
                    View Products <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Button variant="outline" className="font-heading w-full">
            Download Full Catalog <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
