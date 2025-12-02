import { useState } from "react";
import { ZoomIn, ZoomOut, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";

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

const clientProducts = [
  { id: 1, image: img1, title: "Insect Control Solution" },
  { id: 2, image: img2, title: "Advanced Pest Formula" },
  { id: 3, image: img3, title: "Fresh Scent Insecticide" },
  { id: 4, image: img4, title: "Industrial Spray" },
  { id: 5, image: img5, title: "Cockroach Control" },
  { id: 6, image: img6, title: "Pet Care Product" },
  { id: 7, image: img7, title: "Promotional Spray" },
  { id: 8, image: img8, title: "Universal Pest Control" },
  { id: 9, image: img9, title: "Mosquito Protection" },
  { id: 10, image: img10, title: "Heavy Duty Formula" },
  { id: 11, image: img11, title: "Flash Action Spray" },
  { id: 12, image: img12, title: "Eco-Friendly Solution" },
  { id: 13, image: img13, title: "Portable Spray" },
  { id: 14, image: img14, title: "Automatic Refill System" },
  { id: 15, image: img15, title: "Total Protection" },
  { id: 16, image: img16, title: "Premium Freshener" },
  { id: 17, image: img17, title: "Classic Air Freshener" },
  { id: 18, image: img18, title: "Floral Freshener" },
  { id: 19, image: img19, title: "Lavender Spray" },
  { id: 20, image: img20, title: "Orange Freshener" },
];

export default function EsteemedClients() {
  const [selectedImage, setSelectedImage] = useState<typeof clientProducts[0] | null>(null);
  const [zoom, setZoom] = useState(1);
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.1 : 0.1;
    const newZoom = Math.max(0.5, Math.min(3, zoom + delta));
    setZoom(newZoom);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || zoom <= 1) return;
    
    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    setImagePosition({
      x: Math.max(-50, Math.min(50, x - 50)),
      y: Math.max(-50, Math.min(50, y - 50)),
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Our Esteemed Clients & Products
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl">
            Professional product gallery showcasing our comprehensive range of aerosol and chemical solutions for retailers and distributors across India.
          </p>
        </div>
      </div>

      {/* Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {clientProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => { setSelectedImage(product); setZoom(1); setImagePosition({ x: 0, y: 0 }); }}
                className="group cursor-pointer bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:-translate-y-1"
              >
                <div className="relative h-48 bg-white flex items-center justify-center overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-auto object-contain drop-shadow-md transform group-hover:scale-110 transition-transform duration-500"
                    style={{ imageRendering: "crisp-edges" }}
                  />
                </div>
                <div className="p-3 text-center">
                  <p className="text-sm font-bold text-slate-600 line-clamp-2">{product.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Zoom Modal with Advanced Features */}
      <Dialog open={!!selectedImage} onOpenChange={(open) => { if (!open) { setSelectedImage(null); setZoom(1); setImagePosition({ x: 0, y: 0 }); }}}>
        <DialogContent className="sm:max-w-[800px] p-0 bg-white overflow-hidden">
          {selectedImage && (
            <div className="flex flex-col items-center justify-center gap-6 p-8">
              <div className="text-center">
                <h2 className="text-2xl font-heading font-bold text-foreground">{selectedImage.title}</h2>
              </div>

              {/* Advanced Zoom Image Container */}
              <div 
                className="overflow-hidden rounded-lg border-2 border-slate-200 w-full max-h-[450px] cursor-grab active:cursor-grabbing bg-slate-50 flex items-center justify-center"
                onWheel={handleMouseWheel}
                onMouseMove={handleMouseMove}
                onMouseDown={() => setIsDragging(true)}
                onMouseUp={() => setIsDragging(false)}
                onMouseLeave={() => setIsDragging(false)}
              >
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="max-h-[420px] w-auto object-contain transition-transform duration-150"
                  style={{ 
                    transform: `scale(${zoom}) translate(${isDragging ? imagePosition.x : 0}%, ${isDragging ? imagePosition.y : 0}%)`,
                    imageRendering: "crisp-edges",
                    filter: "contrast(1.05) brightness(1.02)"
                  }}
                />
              </div>

              <p className="text-sm text-slate-500 text-center max-w-md">
                Use mouse wheel to zoom • Click and drag to pan • High resolution detail view
              </p>

              {/* Zoom Controls */}
              <div className="flex gap-3 flex-wrap justify-center">
                <Button
                  variant="outline"
                  onClick={() => setZoom(Math.max(0.5, zoom - 0.2))}
                  className="gap-2"
                >
                  <ZoomOut className="h-4 w-4" /> Zoom Out
                </Button>
                <span className="px-4 py-2 text-sm font-bold bg-slate-100 rounded border border-slate-200 min-w-[80px] text-center">{Math.round(zoom * 100)}%</span>
                <Button
                  variant="outline"
                  onClick={() => setZoom(Math.min(3, zoom + 0.2))}
                  className="gap-2"
                >
                  <ZoomIn className="h-4 w-4" /> Zoom In
                </Button>
                <Button
                  variant="outline"
                  onClick={() => { setZoom(1); setImagePosition({ x: 0, y: 0 }); }}
                  className="gap-2"
                >
                  <RotateCcw className="h-4 w-4" /> Reset
                </Button>
              </div>

              <p className="text-xs text-slate-400 text-center">Zoom range: 50% - 300% • Professional product photography</p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
