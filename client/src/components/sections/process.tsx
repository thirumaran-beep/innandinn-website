import { MessageSquare, FileText, PackageCheck, Truck } from "lucide-react";

export function Process() {
  const steps = [
    {
      icon: MessageSquare,
      title: "1. Consultation",
      desc: "Reach out via our form or WhatsApp. We discuss your product needs, volume, and customization requirements."
    },
    {
      icon: FileText,
      title: "2. Proposal & Sampling",
      desc: "We provide a transparent quote and, if needed, product samples for your approval to ensure quality match."
    },
    {
      icon: PackageCheck,
      title: "3. Production & QC",
      desc: "Upon confirmation, our factory begins manufacturing with rigorous quality checks at every stage."
    },
    {
      icon: Truck,
      title: "4. Dispatch & Delivery",
      desc: "Your order is securely packed and dispatched via our reliable logistics partners for timely arrival."
    }
  ];

  return (
    <section id="process" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1565514020175-950923c6f754?q=80&w=2940&auto=format&fit=crop')] opacity-5 bg-cover bg-center"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-in fade-in slide-in-from-top-8 duration-1000">
          <span className="text-accent font-bold uppercase tracking-widest text-sm mb-2 block animate-in fade-in delay-200 duration-1000">Streamlined Operations</span>
          <h2 className="text-4xl font-heading font-bold mb-4 animate-in fade-in delay-300 duration-1000">A Simple, Transparent Ordering Process</h2>
          <p className="text-slate-400 text-lg animate-in fade-in delay-400 duration-1000">
            We make bulk manufacturing easy. From your first inquiry to the final delivery, experience a hassle-free workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className={`relative group animate-in fade-in slide-in-from-bottom-8`} style={{ animationDelay: `${index * 150}ms` }}>
              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-slate-700 -z-10"></div>
              )}
              
              <div className="flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-slate-800 border-2 border-slate-700 flex items-center justify-center mb-6 group-hover:border-accent group-hover:bg-accent group-hover:text-white transition-all duration-300 z-10 shadow-lg shadow-black/20">
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
