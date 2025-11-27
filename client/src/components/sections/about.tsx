import { Button } from "@/components/ui/button";
import aboutImg from "@assets/generated_images/industrial_warehouse_and_logistics_team.png";

export function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <span className="text-accent font-bold uppercase tracking-widest text-sm mb-2 block">About The Company</span>
            <h2 className="text-4xl font-heading font-bold text-foreground mb-6">
              Manufacturing Excellence <br/> Since 1990
            </h2>
            
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                Founded in Pondicherry, Innovative & Innovators Pvt Ltd began with a vision to deliver top-quality aerosol and gas-based products to households, businesses, and industries.
              </p>
              <p>
                Over three decades, under the leadership of our Managing Director, we’ve grown into a full-fledged manufacturing firm with a 26–50 strong workforce and a turnover ranging between ₹5 Cr – ₹25 Cr annually.
              </p>
              <p>
                Our facilities at Reddiyar Street, Sooramangalam are equipped to deliver bulk orders repeatably. We are fully compliant and registered under GST (No. 34AABCI0658L1ZJ) with IEC Code 0494004941.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-border grid grid-cols-2 gap-8">
              <div>
                <span className="block text-3xl font-heading font-bold text-primary mb-1">30+</span>
                <span className="text-sm text-muted-foreground uppercase tracking-wide">Years Experience</span>
              </div>
              <div>
                <span className="block text-3xl font-heading font-bold text-primary mb-1">100%</span>
                <span className="text-sm text-muted-foreground uppercase tracking-wide">Quality Certified</span>
              </div>
            </div>
          </div>

          {/* Image Content */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img 
                src={aboutImg} 
                alt="Industrial Warehouse" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-primary/10"></div>
            </div>
            {/* Decorative box */}
            <div className="absolute -bottom-6 -left-6 w-full h-full border-2 border-accent rounded-lg -z-10 hidden md:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
