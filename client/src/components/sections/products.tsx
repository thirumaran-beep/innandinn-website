import { useState, useRef, useEffect } from "react";
import { ArrowRight, ShoppingCart, Eye, ZoomIn, ZoomOut, RotateCcw, ChevronUp, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

// Import all product images
import img1 from "@assets/1_1764659739441.png";
import img2 from "@assets/2_1764659739442.png";
import img3 from "@assets/3_1764659739443.png";
import img4 from "@assets/4_1764659739443.png";
import img5 from "@assets/5_1764659739444.png";
import img6 from "@assets/6_1764659739445.png";
import img7 from "@assets/7_1764659739446.png";
import img8 from "@assets/8_1764659739446.png";
import img9 from "@assets/9_1764659739447.png";
import img10 from "@assets/10_1764659739447.png";
import img11 from "@assets/11_1764659739447.png";
import img12 from "@assets/12_1764659739448.png";
import img13 from "@assets/13_1764659739448.png";
import img14 from "@assets/14_1764659739449.png";
import img15 from "@assets/15_1764659739449.png";
import img16 from "@assets/16_1764659739449.png";
import img17 from "@assets/17_1764659739450.png";
import img18 from "@assets/18_1764659739450.png";
import img19 from "@assets/19_1764659739450.png";
import img20 from "@assets/20_1764659739451.png";
import img21 from "@assets/21_1764667922969.png";
import img22 from "@assets/22_1764670873377.png";
import img23 from "@assets/23_1764670873372.png";
import img24 from "@assets/24_1764670873373.png";
import img25 from "@assets/25_1764670873373.png";
import img26 from "@assets/26_1764670873374.png";
import img27 from "@assets/27_1764670873374.png";
import img28 from "@assets/28_1764670873375.png";
import img29 from "@assets/29_1764670873375.png";
import img30 from "@assets/30_1764670873376.png";
import img31 from "@assets/31_1764670873376.png";

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
  { id: 4, name: "Industrial Rust Release Spray", category: "Industrial", image: img4, description: "Professional metal protection." },
  { id: 5, name: "Cockroach Elimination Spray", category: "Insect Control", image: img5, description: "Specialized cockroach control." },
  { id: 6, name: "Pet Care Treatment", category: "Pet Care", image: img6, description: "Vet-approved pet protection.", badge: "Vet Approved" },
  { id: 7, name: "Promotional Insect Pack", category: "Insect Control", image: img7, description: "Bulk-friendly insect spray.", badge: "Sale" },
  { id: 8, name: "Universal Pest Spray", category: "Insect Control", image: img8, description: "Multi-purpose pest solution." },
  { id: 9, name: "Mosquito Protection Spray", category: "Insect Control", image: img9, description: "Dengue protection spray." },
  { id: 10, name: "Extra Strong Formula", category: "Insect Control", image: img10, description: "Industrial-strength solution." },
  { id: 11, name: "Flash Action Mosquito Spray", category: "Insect Control", image: img11, description: "Instant mosquito elimination." },
  { id: 12, name: "Eco-Friendly Insect Killer", category: "Insect Control", image: img12, description: "Safe, natural formulation.", badge: "Eco-Friendly" },
  { id: 13, name: "Compact Rust Spray", category: "Industrial", image: img13, description: "Portable rust solution." },
  { id: 14, name: "Automatic Mosquito Refill", category: "Insect Control", image: img14, description: "Continuous protection system." },
  { id: 15, name: "Total Home Protection Spray", category: "Insect Control", image: img15, description: "Complete insect defense." },
  { id: 16, name: "Premium Room Freshener", category: "Air Freshener", image: img16, description: "Long-lasting fragrance solution.", badge: "Popular" },
  { id: 17, name: "Classic Air Freshener", category: "Air Freshener", image: img17, description: "Professional odor elimination." },
  { id: 18, name: "Lavender Room Spray", category: "Air Freshener", image: img18, description: "Relaxing ambiance creation." },
  { id: 19, name: "Orange Energizer Spray", category: "Air Freshener", image: img19, description: "Energizing fresh scent." },
  { id: 20, name: "Green Apple Freshener", category: "Air Freshener", image: img20, description: "Fresh natural scent.", badge: "Popular" },
  { id: 21, name: "British Fragrances Green Apple Spray", category: "Air Freshener", image: img21, description: "Premium green apple fragrance freshener.", badge: "New" },
  { id: 22, name: "Axkwek Knock Out All Insect Killer", category: "Insect Control", image: img22, description: "All-purpose heavy-duty insect killer.", badge: "Bestseller" },
  { id: 23, name: "Relite Lighter Gas Cartridge", category: "Gas Products", image: img23, description: "High-purity butane for lighters.", badge: "Best Value" },
  { id: 24, name: "MOI Air Freshener Collection", category: "Air Freshener", image: img24, description: "6 premium fragrance variants in one collection.", badge: "Popular" },
  { id: 25, name: "ASJ Automatic Room Freshener Dispenser", category: "Air Freshener", image: img25, description: "Smart automatic spray dispenser system.", badge: "Popular" },
  { id: 26, name: "ASJ Lemon Air Freshener Spray", category: "Air Freshener", image: img26, description: "Refreshing lemon-scented room spray." },
  { id: 27, name: "Weldmart Extra Lubricant Spray", category: "Industrial", image: img27, description: "33% extra multi-purpose lubrication." },
  { id: 28, name: "Phoenix Odone Odor Eliminator", category: "Air Freshener", image: img28, description: "Professional odor elimination formula." },
  { id: 29, name: "Mosquito Repellent Skin Vape Lotion", category: "Pet Care", image: img29, description: "Safe skin-applied mosquito protection.", badge: "Vet Approved" },
  { id: 30, name: "Umm Butane Refrigerant Gas", category: "Gas Products", image: img30, description: "Premium refrigerant butane gas cartridge." },
  { id: 31, name: "PCI Pest Seal Cockroach Killer", category: "Insect Control", image: img31, description: "Advanced cockroach control spray with seal." },
];

export function Products() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [zoom, setZoom] = useState(1);
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const categories = ["All", ...Array.from(new Set(products.map(p => p.category)))];
  const filteredProducts = activeCategory === "All" ? products : products.filter(p => p.category === activeCategory);

  const handleEnquiry = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Enquiry Sent!", description: `Request received for ${selectedProduct?.name}. Our team will contact you shortly.` });
    setSelectedProduct(null);
    setZoom(1);
    setImagePosition({ x: 0, y: 0 });
  };

  const handleMouseWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.1 : 0.1;
    setZoom(Math.max(0.5, Math.min(3, zoom + delta)));
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || zoom <= 1) return;
    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setImagePosition({ x: Math.max(-50, Math.min(50, x - 50)), y: Math.max(-50, Math.min(50, y - 50)) });
  };

  const handleZoom = (direction: 'in' | 'out') => {
    const newZoom = direction === 'in' ? Math.min(3, zoom + 0.2) : Math.max(0.5, zoom - 0.2);
    setZoom(newZoom);
  };

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('products');
      if (section) {
        const rect = section.getBoundingClientRect();
        setShowScrollTop(rect.top < -200);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    const section = document.getElementById('products');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToBottom = () => {
    const section = document.getElementById('products');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  };

  const scrollFormUp = () => {
    if (formRef.current) {
      formRef.current.scrollTop = Math.max(0, formRef.current.scrollTop - 150);
    }
  };

  const scrollFormDown = () => {
    if (formRef.current) {
      formRef.current.scrollTop = Math.min(formRef.current.scrollHeight, formRef.current.scrollTop + 150);
    }
  };

  return (
    <section id="products" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 gap-4 md:gap-6 animate-in slide-in-from-bottom-5 duration-700">
          <div className="max-w-2xl">
            <span className="text-accent font-bold uppercase tracking-widest text-xs sm:text-sm mb-2 block">Our Services</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground">Manufacturing & Services</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 border hover:scale-105 active:scale-95",
                  activeCategory === cat
                    ? "bg-primary text-white border-primary shadow-lg scale-105"
                    : "bg-white text-slate-600 border-slate-200 hover:border-primary hover:text-primary"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative" ref={gridRef}>
          {filteredProducts.map((product, index) => (
            <div 
              key={product.id}
              className="group bg-white rounded-xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-in fade-in zoom-in-95 fill-mode-both cursor-pointer active:scale-95"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="relative h-56 sm:h-64 md:h-72 p-2 sm:p-3 md:p-4 bg-white flex items-center justify-center overflow-hidden aspect-square">
                {product.badge && (
                  <span className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-accent text-white text-xs font-bold px-2 py-1 rounded shadow-sm z-10 animate-pulse">
                    {product.badge}
                  </span>
                )}
                <img 
                  src={product.image} 
                  alt={product.name}
                  data-testid={`product-image-${product.id}`}
                  className="h-full w-full object-contain drop-shadow-lg transform group-hover:scale-105 transition-transform duration-500"
                  style={{ imageRendering: "crisp-edges", maxHeight: "100%", maxWidth: "100%" }}
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
                  <Button 
                    size="sm" 
                    className="bg-white text-primary hover:bg-primary hover:text-white font-bold rounded-full animate-bounce"
                    onClick={() => { setSelectedProduct(product); setZoom(1); setImagePosition({ x: 0, y: 0 }); }}
                  >
                    <Eye className="h-4 w-4 mr-2" /> View
                  </Button>
                </div>
              </div>

              <div className="p-4 sm:p-5">
                <div className="text-xs font-bold text-primary/60 uppercase tracking-wider mb-1">{product.category}</div>
                <h3 className="font-heading font-bold text-base sm:text-lg text-foreground mb-2 group-hover:text-primary transition-colors truncate">{product.name}</h3>
                <p className="text-slate-500 text-xs sm:text-sm line-clamp-2 mb-4 min-h-[40px]">{product.description}</p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                  <span className="font-bold text-base sm:text-lg text-slate-700">Bulk Quote</span>
                  <Button 
                    size="sm" 
                    className="rounded-full bg-slate-900 hover:bg-accent transition-all duration-300 text-xs sm:text-sm"
                    onClick={() => { setSelectedProduct(product); setZoom(1); setImagePosition({ x: 0, y: 0 }); }}
                  >
                    <ShoppingCart className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                    Enquire
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Controls */}
        <div className="flex gap-2 justify-center mt-12">
          <button
            onClick={scrollToTop}
            className="p-3 bg-primary hover:bg-primary/90 text-white rounded-full shadow-lg hover:shadow-xl transition-all active:scale-95 flex items-center gap-2"
            aria-label="Scroll to top"
          >
            <ChevronUp className="h-5 w-5" />
          </button>
          <button
            onClick={scrollToBottom}
            className="p-3 bg-primary hover:bg-primary/90 text-white rounded-full shadow-lg hover:shadow-xl transition-all active:scale-95 flex items-center gap-2"
            aria-label="Scroll to bottom"
          >
            <ChevronDown className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* RESPONSIVE MODAL */}
      <Dialog open={!!selectedProduct} onOpenChange={(open) => { if (!open) { setSelectedProduct(null); setZoom(1); setImagePosition({ x: 0, y: 0 }); }}}>
        <DialogContent className="w-[95vw] sm:w-[90vw] md:max-w-[1200px] p-0 bg-white rounded-lg max-h-[95vh] overflow-hidden flex flex-col pr-0">
          {selectedProduct && (
            <div className="flex flex-col md:flex-row w-full h-full overflow-hidden flex-1">
              {/* IMAGE SECTION - UNIQUE LAYOUTS PER PRODUCT */}
              <div className={cn(
                "w-full md:w-3/5 p-3 sm:p-4 md:p-4 flex flex-col items-center justify-center relative min-h-[350px] sm:min-h-[450px] md:min-h-full border-b md:border-b-0 md:border-r gap-2 pt-8 sm:pt-8 md:pt-4 mr-0",
                // Unique backgrounds per product
                selectedProduct.id % 5 === 1 ? "bg-gradient-to-br from-blue-50 to-white border-slate-200" :
                selectedProduct.id % 5 === 2 ? "bg-gradient-to-br from-orange-50 to-white border-orange-200" :
                selectedProduct.id % 5 === 3 ? "bg-gradient-to-br from-green-50 to-white border-green-200" :
                selectedProduct.id % 5 === 4 ? "bg-gradient-to-br from-purple-50 to-white border-purple-200" :
                "bg-gradient-to-br from-slate-50 to-white border-slate-200"
              )}>
                <div className="absolute top-10 sm:top-10 left-3 sm:left-4 text-xs font-bold text-slate-600 uppercase tracking-widest z-10 bg-white px-2 py-1 rounded shadow-md">
                  {selectedProduct.category}
                </div>
                
                {/* ZOOM CONTAINER - UNIQUE STYLES */}
                <div 
                  className={cn(
                    "w-full flex-1 min-h-[350px] sm:min-h-[500px] md:min-h-[720px] cursor-grab active:cursor-grabbing flex items-center justify-center transition-all duration-300 relative",
                    // Unique border styles
                    selectedProduct.id % 5 === 1 ? "rounded-lg border-2 border-blue-300 hover:border-blue-500 bg-white shadow-lg" :
                    selectedProduct.id % 5 === 2 ? "rounded-2xl border-4 border-dashed border-orange-400 hover:border-orange-600 bg-orange-50/30" :
                    selectedProduct.id % 5 === 3 ? "rounded-none border-4 border-solid border-green-400 hover:border-green-600 bg-white shadow-2xl" :
                    selectedProduct.id % 5 === 4 ? "rounded-full border-2 border-purple-300 hover:border-purple-600 bg-purple-50/20" :
                    "rounded-xl border-2 border-slate-400 hover:border-primary bg-white shadow-md"
                  )}
                  onWheel={handleMouseWheel}
                  onMouseMove={handleMouseMove}
                  onMouseDown={() => setIsDragging(true)}
                  onMouseUp={() => setIsDragging(false)}
                  onMouseLeave={() => setIsDragging(false)}
                >
                  <img 
                    src={selectedProduct.image} 
                    alt={selectedProduct.name}
                    data-testid={`modal-image-${selectedProduct.id}`}
                    className="max-h-[340px] sm:max-h-[490px] md:max-h-[710px] max-w-[95%] transition-all duration-150 object-contain hover:drop-shadow-2xl select-none"
                    style={{ 
                      transform: `scale(${zoom}) translate(${isDragging ? imagePosition.x : 0}%, ${isDragging ? imagePosition.y : 0}%)`,
                      imageRendering: "crisp-edges",
                      filter: "contrast(1.05) brightness(1.02)"
                    }}
                  />
                </div>
                
                <p className="text-xs sm:text-sm text-slate-600 text-center">Scroll • Drag • Zoom</p>
                
                {/* ZOOM CONTROLS - RESPONSIVE */}
                <div className="flex gap-1 sm:gap-2 flex-wrap justify-center w-full">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleZoom('out')}
                    className="gap-1 bg-slate-100 text-slate-900 border-slate-300 hover:bg-slate-200 text-xs sm:text-sm"
                  >
                    <ZoomOut className="h-3 w-3 sm:h-4 sm:w-4" /> 
                    <span className="hidden sm:inline">Out</span>
                  </Button>
                  <span className="px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-bold bg-slate-200 text-slate-900 rounded border border-slate-300 min-w-[60px] sm:min-w-[80px] text-center">
                    {Math.round(zoom * 100)}%
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleZoom('in')}
                    className="gap-1 bg-slate-100 text-slate-900 border-slate-300 hover:bg-slate-200 text-xs sm:text-sm"
                  >
                    <ZoomIn className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span className="hidden sm:inline">In</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => { setZoom(1); setImagePosition({ x: 0, y: 0 }); }}
                    className="gap-1 bg-slate-100 text-slate-900 border-slate-300 hover:bg-slate-200 text-xs sm:text-sm"
                  >
                    <RotateCcw className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span className="hidden sm:inline">Reset</span>
                  </Button>
                </div>
              </div>
              
              {/* FORM SECTION - RESPONSIVE */}
              <div className="w-full md:w-2/5 bg-white p-3 sm:p-5 md:p-6 flex flex-col overflow-hidden flex-1 min-h-0 relative" ref={formRef}>
                <div className="overflow-y-auto overflow-x-hidden flex-1 pr-3">
                  <DialogHeader className="mb-4 sm:mb-6">
                    <DialogTitle className="text-xl sm:text-2xl font-heading font-bold text-foreground mb-2">
                      {selectedProduct.name}
                    </DialogTitle>
                    <DialogDescription className="text-xs sm:text-base text-slate-600">
                      {selectedProduct.description}
                    </DialogDescription>
                  </DialogHeader>

                  <div className="space-y-3 sm:space-y-4">
                    <div className="bg-blue-50 p-2 sm:p-3 rounded border border-blue-100 text-xs sm:text-sm text-blue-800">
                      <strong>Request Bulk Quote</strong> for competitive pricing on large orders.
                    </div>
                    
                    <form id="enquiry-form" onSubmit={handleEnquiry} className="space-y-2 sm:space-y-3 mt-3 sm:mt-4">
                      <Label htmlFor="email" className="text-xs sm:text-sm">Your Email</Label>
                      <Input id="email" type="email" placeholder="Enter your email" required className="text-xs sm:text-sm h-8 sm:h-10" />
                      
                      <Label htmlFor="phone" className="text-xs sm:text-sm">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="+91 98765 43210" required className="text-xs sm:text-sm h-8 sm:h-10" />
                      
                      <Label htmlFor="quantity" className="text-xs sm:text-sm">Estimated Quantity (Units)</Label>
                      <Input id="quantity" type="number" placeholder="e.g. 500, 1000" className="text-xs sm:text-sm h-8 sm:h-10" />
                    </form>
                  </div>

                  <DialogFooter className="mt-6 sm:mt-8 pt-4 sm:pt-5 border-t border-slate-100">
                    <Button type="submit" form="enquiry-form" className="w-full bg-primary hover:bg-primary/90 text-sm sm:text-lg font-heading h-10 sm:h-12 transition-all hover:shadow-lg active:scale-95">
                      Get Bulk Quote
                    </Button>
                  </DialogFooter>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
