import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    id: 1,
    question: "What types of aerosol products do you manufacture?",
    answer: "We manufacture a comprehensive range including insect killers, air fresheners, industrial sprays, pet care solutions, and custom private-label products tailored to your specifications."
  },
  {
    id: 2,
    question: "Do you offer bulk ordering and wholesale pricing?",
    answer: "Yes! We specialize in bulk manufacturing for retailers and distributors. Request a custom quote with your volume requirements for competitive pricing."
  },
  {
    id: 3,
    question: "Can you produce private-label (OEM) products?",
    answer: "Absolutely. We offer complete private-label solutions with custom branding, packaging, and formulations. Contact our team to discuss your requirements."
  },
  {
    id: 4,
    question: "What is your minimum order quantity?",
    answer: "Minimum orders vary by product. For detailed information on MOQs and custom quotes, please reach out to our sales team directly."
  },
  {
    id: 5,
    question: "How long does delivery take?",
    answer: "We offer pan-India delivery. Standard delivery timelines and expedited options are available. Contact us for specific delivery details based on your location."
  },
  {
    id: 6,
    question: "Are your products certified and compliant?",
    answer: "Yes, all our products comply with Indian manufacturing standards and regulations. We maintain strict quality control and safety certifications."
  }
];

export function FAQ() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16 animate-in slide-in-from-bottom-5 duration-700">
            <span className="text-accent font-bold uppercase tracking-widest text-sm mb-2 block">FAQ</span>
            <h2 className="text-4xl font-heading font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-600 text-lg">Find answers to common questions about our manufacturing, products, and services.</p>
          </div>

          <div className="space-y-3">
            {faqItems.map((item, index) => (
              <div
                key={item.id}
                className="border border-slate-200 rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 animate-in fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <button
                  onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                  className="w-full p-5 md:p-6 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                >
                  <span className="font-heading font-bold text-left text-foreground text-base md:text-lg">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 text-primary shrink-0 transition-transform duration-300",
                      expandedId === item.id && "rotate-180"
                    )}
                  />
                </button>

                {expandedId === item.id && (
                  <div className="border-t border-slate-200 bg-slate-50 px-5 md:px-6 py-4 md:py-5 animate-in slide-in-from-top-2 duration-300">
                    <p className="text-slate-600 text-base leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center p-6 bg-blue-50 rounded-lg border border-blue-100">
            <p className="text-slate-700 mb-3">
              <strong>Still have questions?</strong> Our team is ready to help!
            </p>
            <a href="#contact" className="text-primary hover:text-primary/80 font-bold transition-colors">
              Contact us now →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
