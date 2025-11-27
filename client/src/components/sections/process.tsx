import { MessageSquare, FileText, PackageCheck, Truck } from "lucide-react";

export function Process() {
  const steps = [
    {
      icon: MessageSquare,
      title: "1. Get In Touch",
      desc: "Contact us via form, phone, or WhatsApp to start the conversation."
    },
    {
      icon: FileText,
      title: "2. Discuss Requirements",
      desc: "Tell us product types, volumes, packaging, and private-label needs."
    },
    {
      icon: PackageCheck,
      title: "3. Quote & Production",
      desc: "Receive a detailed quote. On confirmation, production begins with quality checks."
    },
    {
      icon: Truck,
      title: "4. Delivery & Support",
      desc: "Dispatched on time with full tracking and after-sales support."
    }
  ];

  return (
    <section id="process" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1565514020175-950923c6f754?q=80&w=2940&auto=format&fit=crop')] opacity-5 bg-cover bg-center"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-bold uppercase tracking-widest text-sm mb-2 block">How It Works</span>
          <h2 className="text-4xl font-heading font-bold mb-4">Simple & Transparent Process</h2>
          <p className="text-slate-400 text-lg">
            From inquiry to delivery, we ensure a smooth experience for every client.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-slate-700 -z-10"></div>
              )}
              
              <div className="flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-slate-800 border-2 border-slate-700 flex items-center justify-center mb-6 group-hover:border-accent group-hover:bg-accent group-hover:text-white transition-all duration-300 z-10">
                  <step.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-3 text-white">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed px-4">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
