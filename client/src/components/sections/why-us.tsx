import { ShieldCheck, Factory, Boxes, Truck, Users, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function WhyUs() {
  const features = [
    {
      icon: Award,
      title: "30+ Years of Mastery",
      description: "Founded in 1990, we bring over three decades of deep industry expertise in aerosol formulation and gas filling technology."
    },
    {
      icon: Boxes,
      title: "Comprehensive Product Range",
      description: "Your one-stop solution for Room Fresheners, Insect Killers, Butane Gas, Lighter Fluid, and Industrial Sprays."
    },
    {
      icon: ShieldCheck,
      title: "Certified Quality Assurance",
      description: "We adhere to strict safety protocols. Every batch undergoes rigorous testing to ensure safety and performance."
    },
    {
      icon: Factory,
      title: "Scalable Manufacturing",
      description: "State-of-the-art facilities in Pondicherry capable of handling massive bulk orders and rapid private-label production."
    },
    {
      icon: Truck,
      title: "Transparent & Timely",
      description: "No hidden costs. We pride ourselves on fair pricing and a logistics network that ensures on-time delivery across India."
    },
    {
      icon: Users,
      title: "Dedicated Partner Support",
      description: "From initial consultation to after-sales service, our team works as an extension of your business to ensure success."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-heading font-bold text-foreground mb-4">Why Partner With Innovative & Innovators?</h2>
          <p className="text-muted-foreground text-lg">
            We don't just manufacture products; we engineer trust. Here’s why leading brands and distributors rely on us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-sm hover:shadow-xl transition-all duration-300 bg-white group hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="h-14 w-14 rounded-lg bg-primary/5 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <feature.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
