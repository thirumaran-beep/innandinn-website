import { useState } from "react";
import { ArrowRight, ShoppingCart, Eye, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

// Import all product images
import img1 from "@assets/product-insect-killer.png"; // Kokron Power
import img2 from "@assets/product-insect-killer-2.png"; // Kokron Plus
import img3 from "@assets/product-insect-killer-3.png"; // Exit No Entry (Black/Yellow)
import img4 from "@assets/product-rust-spray.png"; // Fasremo 4Z
import img5 from "@assets/5_1764224991655.png"; // Pest Seal Cockroach
import img6 from "@assets/product-pet-spray.png"; // TickFree
import img7 from "@assets/7_1764224991656.png"; // Exit No Entry (Discount)
import img8 from "@assets/8_1764224991657.png"; // Pest Seal (Red/White)
import img9 from "@assets/9_1764224991657.png"; // Pest Seal Mosquito
import img10 from "@assets/10_1764224991658.png"; // Kokron Plus (Red)
import img11 from "@assets/11_1764224991659.png"; // Go Strong Mosquito
import img12 from "@assets/12_1764224991659.png"; // Axk Wix Shot
import img13 from "@assets/13_1764224991660.png"; // Fasremo 4Z (Small)
import img14 from "@assets/14_1764224991660.png"; // HiCare Auto Mos
import img15 from "@assets/15_1764224991661.png"; // Little's Nok Out
import img16 from "@assets/product-air-freshener.png"; // Moi Pink Rose
import img17 from "@assets/17_1764224991662.png"; // British Fragrances Ever Fresh
import img18 from "@assets/18_1764224991662.png"; // British Fragrances Ever Fresh (Pink)
import img19 from "@assets/19_1764224991663.png"; // British Fragrances Lavender
import img20 from "@assets/20_1764224991664.png"; // British Fragrances Orange

interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
  price?: string;
  badge?: string;
}

const products: Product[] = [
  // Insect Control
  { id: 1, name: "Kokron Power", category: "Insect Control", image: img1, description: "Multi-insect killer spray, protects against disease-carrying pests.", badge: "Bestseller" },
  { id: 2, name: "Kokron Plus", category: "Insect Control", image: img2, description: "Advanced formula for stubborn pests and insects.", price: "₹180" },
  { id: 3, name: "Exit No Entry", category: "Insect Control", image: img3, description: "Multi-purpose insect killer, fresh lemon fragrance.", badge: "New" },
  { id: 7, name: "Exit No Entry (Promo)", category: "Insect Control", image: img7, description: "Special promotional pack, kills 100% insects.", price: "₹150", badge: "Sale" },
  { id: 5, name: "Pest Seal Cockroach", category: "Insect Control", image: img5, description: "Specialized cockroach killer spray for kitchen and home.", price: "₹199" },
  { id: 8, name: "Pest Seal Universal", category: "Insect Control", image: img8, description: "Effective against cockroaches, ants, and other crawling insects.", price: "₹210" },
  { id: 9, name: "Pest Seal Mosquito", category: "Insect Control", image: img9, description: "Instant kill mosquito spray, protects against dengue.", price: "₹175" },
  { id: 10, name: "Kokron Plus Red", category: "Insect Control", image: img10, description: "Extra strong formula for heavy infestations.", price: "₹220" },
  { id: 11, name: "Go Strong", category: "Insect Control", image: img11, description: "Kills mosquitoes in a flash with instant action.", price: "₹140" },
  { id: 12, name: "Axk Wix Shot", category: "Insect Control", image: img12, description: "Eco-friendly multi insect killer, safe for home use.", badge: "Eco-Friendly" },
  { id: 14, name: "HiCare Auto Mos", category: "Insect Control", image: img14, description: "Automatic spray refill for continuous mosquito protection.", price: "₹250" },
  { id: 15, name: "Little's Nok Out", category: "Insect Control", image: img15, description: "Powerful multi-insect killer for total home protection.", price: "₹165" },

  // Air Fresheners
  { id: 16, name: "Moi Pink Rose", category: "Air Freshener", image: img16, description: "Premium room freshener with long-lasting rose fragrance.", badge: "Popular" },
  { id: 17, name: "Ever Fresh Classic", category: "Air Freshener", image: img17, description: "British fragrances collection, eliminates odors instantly.", price: "₹199" },
  { id: 18, name: "Ever Fresh Floral", category: "Air Freshener", image: img18, description: "Soft floral scent for a refreshing home atmosphere.", price: "₹199" },
  { id: 19, name: "British Lavender", category: "Air Freshener", image: img19, description: "Calming lavender scent for relaxation and freshness.", price: "₹210" },
  { id: 20, name: "Live Orange", category: "Air Freshener", image: img20, description: "Zesty orange fragrance to energize your living space.", price: "₹210" },

  // Industrial & Specialty
  { id: 4, name: "Fasremo 4Z", category: "Industrial", image: img4, description: "Rust release spray, lubricates and protects metal parts.", price: "₹250" },
  { id: 13, name: "Fasremo 4Z Mini", category: "Industrial", image: img13, description: "Compact rust release spray for toolbox and easy carry.", price: "₹120" },

  // Pet Care
  { id: 6, name: "TickFree Spray", category: "Pet Care", image: img6, description: "Fipronil spray for dogs and cats, controls ticks and fleas.", badge: "Vet Approved" },
];

export function Products() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { toast } = useToast();

  const categories = ["All", ...new Set(products.map(p => p.category))];
  
  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  const handleEnquiry = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Enquiry Sent!",
      description: `We've received your interest in ${selectedProduct?.name}. Our team will contact you shortly.`,
    });
    setSelectedProduct(null);
  };

  return (
    <section id="products" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 animate-in slide-in-from-bottom-5 duration-700">
          <div className="max-w-2xl">
            <span className="text-accent font-bold uppercase tracking-widest text-sm mb-2 block">Our Full Range</span>
            <h2 className="text-4xl font-heading font-bold text-foreground">Product Catalog</h2>
          </div>
          
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 border",
                  activeCategory === cat
                    ? "bg-primary text-white border-primary shadow-md scale-105"
                    : "bg-white text-slate-600 border-slate-200 hover:border-primary hover:text-primary"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <div 
              key={product.id}
              className="group bg-white rounded-xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-in fade-in zoom-in-95 fill-mode-both"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Image Area */}
              <div className="relative h-64 p-6 bg-gradient-to-b from-white to-slate-50 flex items-center justify-center overflow-hidden">
                {product.badge && (
                  <span className="absolute top-3 right-3 bg-accent text-white text-xs font-bold px-2 py-1 rounded shadow-sm z-10">
                    {product.badge}
                  </span>
                )}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300" />
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="h-full w-auto object-contain drop-shadow-md transform group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Quick Action Overlay */}
                <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20 backdrop-blur-[2px]">
                  <Button 
                    size="sm" 
                    className="bg-white text-primary hover:bg-primary hover:text-white font-bold rounded-full"
                    onClick={() => setSelectedProduct(product)}
                  >
                    <Eye className="h-4 w-4 mr-2" /> View
                  </Button>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-5">
                <div className="text-xs font-bold text-primary/60 uppercase tracking-wider mb-1">{product.category}</div>
                <h3 className="font-heading font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors truncate">{product.name}</h3>
                <p className="text-slate-500 text-sm line-clamp-2 mb-4 min-h-[40px]">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                  <span className="font-bold text-lg text-slate-700">
                    {product.price ? product.price : "Bulk Quote"}
                  </span>
                  <Button 
                    size="sm" 
                    className="rounded-full bg-slate-900 hover:bg-accent transition-colors duration-300"
                    onClick={() => setSelectedProduct(product)}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Enquire
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Detail / Enquiry Modal */}
      <Dialog open={!!selectedProduct} onOpenChange={(open) => !open && setSelectedProduct(null)}>
        <DialogContent className="sm:max-w-[800px] p-0 overflow-hidden bg-white">
          {selectedProduct && (
            <div className="flex flex-col md:flex-row h-full">
              <div className="w-full md:w-1/2 bg-slate-50 p-8 flex items-center justify-center relative">
                <div className="absolute top-4 left-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
                  {selectedProduct.category}
                </div>
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name} 
                  className="max-h-[300px] w-auto object-contain drop-shadow-xl" 
                />
              </div>
              
              <div className="w-full md:w-1/2 p-8 flex flex-col">
                <DialogHeader className="mb-6">
                  <DialogTitle className="text-2xl font-heading font-bold text-foreground mb-2">
                    {selectedProduct.name}
                  </DialogTitle>
                  <DialogDescription className="text-base text-slate-600">
                    {selectedProduct.description}
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-4 flex-grow">
                  <div className="bg-blue-50 p-3 rounded border border-blue-100 text-sm text-blue-800">
                    <strong>Availability:</strong> In Stock (Bulk & Retail)
                  </div>
                  
                  <form id="enquiry-form" onSubmit={handleEnquiry} className="space-y-3 mt-4">
                    <Label htmlFor="email">Your Email</Label>
                    <Input id="email" type="email" placeholder="Enter your email" required />
                    
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+91 98765 43210" required />
                    
                    <Label htmlFor="quantity">Estimated Quantity</Label>
                    <Input id="quantity" type="number" placeholder="e.g. 100 units" />
                  </form>
                </div>

                <DialogFooter className="mt-8 pt-4 border-t border-slate-100">
                  <Button type="submit" form="enquiry-form" className="w-full bg-primary hover:bg-primary/90 text-lg font-heading h-12">
                    Send Enquiry
                  </Button>
                </DialogFooter>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
