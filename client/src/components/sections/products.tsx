import { useState } from "react";
import { ArrowRight, ShoppingCart, Eye, ZoomIn, ZoomOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

// Import all product images
import img1 from "@assets/product-insect-killer.png";
import img2 from "@assets/product-insect-killer-2.png";
import img3 from "@assets/product-insect-killer-3.png";
import img4 from "@assets/product-rust-spray.png";
import img5 from "@assets/5_1764224991655.png";
import img6 from "@assets/product-pet-spray.png";
import img7 from "@assets/7_1764224991656.png";
import img8 from "@assets/8_1764224991657.png";
import img9 from "@assets/9_1764224991657.png";
import img10 from "@assets/10_1764224991658.png";
import img11 from "@assets/11_1764224991659.png";
import img12 from "@assets/12_1764224991659.png";
import img13 from "@assets/13_1764224991660.png";
import img14 from "@assets/14_1764224991660.png";
import img15 from "@assets/15_1764224991661.png";
import img16 from "@assets/product-air-freshener.png";
import img17 from "@assets/17_1764224991662.png";
import img18 from "@assets/18_1764224991662.png";
import img19 from "@assets/19_1764224991663.png";
import img20 from "@assets/20_1764224991664.png";

interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
  badge?: string;
}

const products: Product[] = [
  { id: 1, name: "Multi-Insect Killer Spray", category: "Insect Control", image: img1, description: "Professional-grade insect control solution.", badge: "Bestseller" },
  { id: 2, name: "Advanced Pest Formula", category: "Insect Control", image: img2, description: "Heavy-duty pest elimination." },
  { id: 3, name: "Lemon Scent Insect Spray", category: "Insect Control", image: img3, description: "Fresh fragrance pest control.", badge: "New" },
  { id: 7, name: "Promotional Insect Pack", category: "Insect Control", image: img7, description: "Bulk-friendly insect spray.", badge: "Sale" },
  { id: 5, name: "Cockroach Elimination Spray", category: "Insect Control", image: img5, description: "Specialized cockroach control." },
  { id: 8, name: "Universal Pest Spray", category: "Insect Control", image: img8, description: "Multi-purpose pest solution." },
  { id: 9, name: "Mosquito Protection Spray", category: "Insect Control", image: img9, description: "Dengue protection spray." },
  { id: 10, name: "Extra Strong Formula", category: "Insect Control", image: img10, description: "Industrial-strength solution." },
  { id: 11, name: "Flash Action Mosquito Spray", category: "Insect Control", image: img11, description: "Instant mosquito elimination." },
  { id: 12, name: "Eco-Friendly Insect Killer", category: "Insect Control", image: img12, description: "Safe, natural formulation.", badge: "Eco-Friendly" },
  { id: 14, name: "Automatic Mosquito Refill", category: "Insect Control", image: img14, description: "Continuous protection system." },
  { id: 15, name: "Total Home Protection Spray", category: "Insect Control", image: img15, description: "Complete insect defense." },
  { id: 16, name: "Premium Room Freshener", category: "Air Freshener", image: img16, description: "Long-lasting fragrance solution.", badge: "Popular" },
  { id: 17, name: "Classic Air Freshener", category: "Air Freshener", image: img17, description: "Professional odor elimination." },
  { id: 18, name: "Floral Scent Freshener", category: "Air Freshener", image: img18, description: "Premium floral atmosphere." },
  { id: 19, name: "Lavender Room Spray", category: "Air Freshener", image: img19, description: "Relaxing ambiance creation." },
  { id: 20, name: "Orange Energizer Spray", category: "Air Freshener", image: img20, description: "Energizing fresh scent." },
  { id: 4, name: "Industrial Rust Release Spray", category: "Industrial", image: img4, description: "Professional metal protection." },
  { id: 13, name: "Compact Rust Spray", category: "Industrial", image: img13, description: "Portable rust solution." },
  { id: 6, name: "Pet Care Treatment", category: "Pet Care", image: img6, description: "Vet-approved pet protection.", badge: "Vet Approved" },
];

export function Products() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [zoom, setZoom] = useState(1);
  const { toast } = useToast();

  const categories = ["All", ...Array.from(new Set(products.map(p => p.category)))];
  
  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  const handleEnquiry = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Enquiry Sent!",
      description: `Request received for ${selectedProduct?.name}. Our team will contact you shortly.`,
    });
    setSelectedProduct(null);
    setZoom(1);
  };

  return (
    <section id="products" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 animate-in slide-in-from-bottom-5 duration-700">
          <div className="max-w-2xl">
            <span className="text-accent font-bold uppercase tracking-widest text-sm mb-2 block">Our Services</span>
            <h2 className="text-4xl font-heading font-bold text-foreground">Manufacturing & Services</h2>
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
                    onClick={() => { setSelectedProduct(product); setZoom(1); }}
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
                    Bulk Quote
                  </span>
                  <Button 
                    size="sm" 
                    className="rounded-full bg-slate-900 hover:bg-accent transition-colors duration-300"
                    onClick={() => { setSelectedProduct(product); setZoom(1); }}
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

      {/* Product Detail / Enquiry Modal with Zoom */}
      <Dialog open={!!selectedProduct} onOpenChange={(open) => { if (!open) { setSelectedProduct(null); setZoom(1); }}}>
        <DialogContent className="sm:max-w-[900px] p-0 overflow-hidden bg-white">
          {selectedProduct && (
            <div className="flex flex-col md:flex-row h-full">
              <div className="w-full md:w-1/2 bg-slate-50 p-8 flex flex-col items-center justify-center relative min-h-[400px]">
                <div className="absolute top-4 left-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
                  {selectedProduct.category}
                </div>
                
                {/* Zoom Image */}
                <div className="overflow-hidden rounded-lg border border-slate-200 mb-4">
                  <img 
                    src={selectedProduct.image} 
                    alt={selectedProduct.name} 
                    className="max-h-[250px] w-auto object-contain transition-transform duration-300"
                    style={{ transform: `scale(${zoom})` }}
                  />
                </div>
                
                {/* Zoom Controls */}
                <div className="flex gap-2 mb-6">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setZoom(Math.max(0.5, zoom - 0.2))}
                    className="gap-2"
                  >
                    <ZoomOut className="h-4 w-4" /> Zoom Out
                  </Button>
                  <span className="px-4 py-2 text-sm font-bold">{Math.round(zoom * 100)}%</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setZoom(Math.min(2, zoom + 0.2))}
                    className="gap-2"
                  >
                    <ZoomIn className="h-4 w-4" /> Zoom In
                  </Button>
                </div>
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
                    <strong>Request Bulk Quote</strong> for competitive pricing on large orders.
                  </div>
                  
                  <form id="enquiry-form" onSubmit={handleEnquiry} className="space-y-3 mt-4">
                    <Label htmlFor="email">Your Email</Label>
                    <Input id="email" type="email" placeholder="Enter your email" required />
                    
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+91 98765 43210" required />
                    
                    <Label htmlFor="quantity">Estimated Quantity (Units)</Label>
                    <Input id="quantity" type="number" placeholder="e.g. 500, 1000" />
                  </form>
                </div>

                <DialogFooter className="mt-8 pt-4 border-t border-slate-100">
                  <Button type="submit" form="enquiry-form" className="w-full bg-primary hover:bg-primary/90 text-lg font-heading h-12">
                    Get Bulk Quote
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
