import { ShieldCheck, Factory, Boxes, Truck, Users, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function WhyUs() {
  const features = [
    {
      icon: Award,
      title: "30+ Years Experience",
      description: "Operating since 1990, bringing decades of manufacturing expertise and industry know-how."
    },
    {
      icon: Boxes,
      title: "Full Range Portfolio",
      description: "From room fresheners to gas cartridges and insecticides - everything under one roof."
    },
    {
      icon: ShieldCheck,
      title: "Quality & Safety First",
      description: "Stringent safety checks and certified raw materials ensure top-tier product reliability."
    },
    {
      icon: Factory,
      title: "Custom Manufacturing",
      description: "Specialized in bulk orders, private-label manufacturing, and custom formulations."
    },
    {
      icon: Truck,
      title: "On-Time Delivery",
      description: "Transparent pricing with no hidden costs and committed delivery timelines."
    },
    {
      icon: Users,
      title: "Reliable Support",
      description: "Responsive team for product inquiries, order tracking, and after-sales support."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-heading font-bold text-foreground mb-4">Why Choose Innovative & Innovators</h2>
          <p className="text-muted-foreground text-lg">
            We combine decades of experience with modern manufacturing standards to deliver products you can trust.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-sm hover:shadow-lg transition-all duration-300 bg-white group">
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
