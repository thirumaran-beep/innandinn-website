import { Button } from "@/components/ui/button";
import aboutImg from "@assets/generated_images/industrial_warehouse_and_logistics_team.png";

export function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <span className="text-accent font-bold uppercase tracking-widest text-sm mb-2 block">Our Story</span>
            <h2 className="text-4xl font-heading font-bold text-foreground mb-6">
              Defining Industry Standards <br/> Since 1990
            </h2>
            
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                <strong>Innovative & Innovators Pvt Ltd</strong> started with a singular vision: to bring world-class aerosol and gas products to the Indian market. What began as a modest operation in Pondicherry has evolved into a manufacturing powerhouse.
              </p>
              <p>
                Under the visionary leadership of our Managing Director, we have scaled to a robust workforce of over 50 skilled professionals and an annual turnover between ₹5 Cr – ₹25 Cr. We don't just make products; we build brands.
              </p>
              <p>
                Located at Reddiyar Street, Sooramangalam, our factory is a hub of efficiency and compliance. We are fully registered under GST (34AABCI0658L1ZJ) and hold IEC Code 0494004941, ensuring complete transparency and regulatory adherence for all our partners.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-border grid grid-cols-2 gap-8">
              <div>
                <span className="block text-4xl font-heading font-bold text-primary mb-1">30+</span>
                <span className="text-sm text-muted-foreground uppercase tracking-wide font-bold">Years of Excellence</span>
              </div>
              <div>
                <span className="block text-4xl font-heading font-bold text-primary mb-1">100%</span>
                <span className="text-sm text-muted-foreground uppercase tracking-wide font-bold">Compliance & Safety</span>
              </div>
            </div>
          </div>

          {/* Image Content */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative rounded-lg overflow-hidden shadow-2xl transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src={aboutImg} 
                alt="Innovative & Innovators Manufacturing Warehouse" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
            </div>
            {/* Decorative box */}
            <div className="absolute -bottom-6 -left-6 w-full h-full border-2 border-accent rounded-lg -z-10 hidden md:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
