import { useState, useRef, useEffect } from "react";
import { ZoomIn, ZoomOut, RotateCcw, X, ChevronUp, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";

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

const clientProducts = [
  { id: 1, image: img1, title: "Kokron Power - Multi Insect Killer" },
  { id: 2, image: img2, title: "Kokron Plus - Advanced Pest Formula" },
  { id: 3, image: img3, title: "Exit No Entry - Lemon Scent" },
  { id: 4, image: img4, title: "Fasremo 4Z - Rust Release Spray" },
  { id: 5, image: img5, title: "Pest Seal - Cockroach Killer" },
  { id: 6, image: img6, title: "TickFree - Pet Care Treatment" },
  { id: 7, image: img7, title: "Exit No Entry - Promotional Pack" },
  { id: 8, image: img8, title: "Pest Seal - Universal Spray" },
  { id: 9, image: img9, title: "Pest Seal - Mosquito Spray" },
  { id: 10, image: img10, title: "Kokron Plus Red - Extra Strong" },
  { id: 11, image: img11, title: "Go Strong - Flash Action Spray" },
  { id: 12, image: img12, title: "Axk Wix Shot - Eco-Friendly" },
  { id: 13, image: img13, title: "Fasremo 4Z - Compact Rust Spray" },
  { id: 14, image: img14, title: "HiCare Auto Mos - Automatic Refill" },
  { id: 15, image: img15, title: "Little's Nok Out - Total Protection" },
  { id: 16, image: img16, title: "Moi - Premium Room Freshener" },
  { id: 17, image: img17, title: "British Ever Fresh - Air Freshener" },
  { id: 18, image: img18, title: "British Lavender - Relaxing Scent" },
  { id: 19, image: img19, title: "Live Orange - Energizer Spray" },
  { id: 20, image: img20, title: "Green Apple - Fresh Scent" },
];

export default function EsteemedClients() {
  const [selectedImage, setSelectedImage] = useState<typeof clientProducts[0] | null>(null);
  const [zoom, setZoom] = useState(1);
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const galleryRef = useRef<HTMLDivElement>(null);
  const modalContentRef = useRef<HTMLDivElement>(null);

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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  const scrollModalUp = () => {
    if (modalContentRef.current) {
      modalContentRef.current.scrollTop = Math.max(0, modalContentRef.current.scrollTop - 150);
    }
  };

  const scrollModalDown = () => {
    if (modalContentRef.current) {
      modalContentRef.current.scrollTop = Math.min(modalContentRef.current.scrollHeight, modalContentRef.current.scrollTop + 150);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-3 sm:mb-4 animate-in slide-in-from-top-5">
            Our Esteemed Clients & Products
          </h1>
          <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl animate-in slide-in-from-left-5">
            Professional product gallery showcasing our comprehensive range of aerosol and chemical solutions for retailers and distributors across India.
          </p>
        </div>
      </div>

      {/* Gallery - RESPONSIVE GRID */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6" ref={galleryRef}>
            {clientProducts.map((product, idx) => (
              <div
                key={product.id}
                onClick={() => { setSelectedImage(product); setZoom(1); setImagePosition({ x: 0, y: 0 }); }}
                className="group cursor-pointer bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:-translate-y-1 active:scale-95 animate-in fade-in zoom-in-95"
                style={{ animationDelay: `${idx * 30}ms` }}
              >
                <div className="relative h-32 sm:h-40 md:h-48 bg-white flex items-center justify-center overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-auto object-contain drop-shadow-lg transform group-hover:scale-110 transition-transform duration-500"
                    style={{ imageRendering: "crisp-edges" }}
                  />
                </div>
                <div className="p-2 sm:p-3 text-center">
                  <p className="text-xs sm:text-sm font-bold text-slate-600 line-clamp-2 group-hover:text-primary transition-colors">{product.title}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Controls */}
          <div className="flex gap-2 justify-center mt-12">
            <button
              onClick={scrollToTop}
              className="p-3 bg-primary hover:bg-primary/90 text-white rounded-full shadow-lg hover:shadow-xl transition-all active:scale-95"
              aria-label="Scroll to top"
            >
              <ChevronUp className="h-5 w-5" />
            </button>
            <button
              onClick={scrollToBottom}
              className="p-3 bg-primary hover:bg-primary/90 text-white rounded-full shadow-lg hover:shadow-xl transition-all active:scale-95"
              aria-label="Scroll to bottom"
            >
              <ChevronDown className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* RESPONSIVE ZOOM MODAL */}
      <Dialog open={!!selectedImage} onOpenChange={(open) => { if (!open) { setSelectedImage(null); setZoom(1); setImagePosition({ x: 0, y: 0 }); }}}>
        <DialogContent className="w-[95vw] sm:w-[90vw] md:max-w-[1000px] p-0 bg-white overflow-hidden max-h-[95vh] rounded-lg flex flex-col">
          {selectedImage && (
            <div className="flex flex-col items-center justify-center gap-2 sm:gap-3 md:gap-4 p-3 sm:p-4 md:p-6 bg-white max-h-[95vh] overflow-y-auto flex-1 relative" ref={modalContentRef}>
              <button
                onClick={scrollModalUp}
                className="sticky top-0 p-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-full transition-all z-20 self-end"
                aria-label="Scroll modal up"
              >
                <ChevronUp className="h-4 w-4" />
              </button>

              <div className="text-center w-full">
                <h2 className="text-lg sm:text-xl md:text-2xl font-heading font-bold text-slate-900 line-clamp-2">{selectedImage.title}</h2>
              </div>

              {/* ZOOM CONTAINER - FULLY RESPONSIVE */}
              <div 
                className="rounded-lg border-2 border-slate-300 w-full h-[280px] sm:h-[430px] md:h-[800px] cursor-grab active:cursor-grabbing bg-white flex items-center justify-center transition-all hover:border-primary hover:shadow-lg"
                onWheel={handleMouseWheel}
                onMouseMove={handleMouseMove}
                onMouseDown={() => setIsDragging(true)}
                onMouseUp={() => setIsDragging(false)}
                onMouseLeave={() => setIsDragging(false)}
              >
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="max-h-[270px] sm:max-h-[420px] md:max-h-[790px] w-auto object-contain transition-all duration-150"
                  style={{ 
                    transform: `scale(${zoom}) translate(${isDragging ? imagePosition.x : 0}%, ${isDragging ? imagePosition.y : 0}%)`,
                    imageRendering: "crisp-edges",
                    filter: "contrast(1.05) brightness(1.02)"
                  }}
                />
              </div>

              <p className="text-xs sm:text-sm text-slate-600 text-center max-w-md">
                💡 Scroll to zoom • Drag to pan • Use buttons for control
              </p>

              {/* ZOOM CONTROLS - RESPONSIVE */}
              <div className="flex gap-1 sm:gap-2 md:gap-3 flex-wrap justify-center w-full">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleZoom('out')}
                  className="gap-1 bg-slate-100 text-slate-900 border-slate-300 hover:bg-slate-200 hover:shadow-md text-xs sm:text-sm transition-all active:scale-95"
                >
                  <ZoomOut className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="hidden sm:inline">Out</span>
                </Button>
                <span className="px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-bold bg-gradient-to-r from-slate-200 to-slate-100 text-slate-900 rounded border border-slate-300 min-w-[60px] sm:min-w-[80px] text-center">
                  {Math.round(zoom * 100)}%
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleZoom('in')}
                  className="gap-1 bg-slate-100 text-slate-900 border-slate-300 hover:bg-slate-200 hover:shadow-md text-xs sm:text-sm transition-all active:scale-95"
                >
                  <ZoomIn className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="hidden sm:inline">In</span>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => { setZoom(1); setImagePosition({ x: 0, y: 0 }); }}
                  className="gap-1 bg-slate-100 text-slate-900 border-slate-300 hover:bg-slate-200 hover:shadow-md text-xs sm:text-sm transition-all active:scale-95"
                >
                  <RotateCcw className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="hidden sm:inline">Reset</span>
                </Button>
              </div>

              <p className="text-xs text-slate-500 text-center">
                📱 Mobile • 💻 Desktop • 📑 Tablet responsive • Zoom: 50%-300%
              </p>

              <button
                onClick={scrollModalDown}
                className="p-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-full transition-all z-20"
                aria-label="Scroll modal down"
              >
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
