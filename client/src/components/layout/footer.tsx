import { MapPin, Phone, Mail, ShoppingBag, Globe } from "lucide-react";
import logo from "@assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-foreground text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Innovative & Innovators" className="h-12 w-auto rounded" />
              <span className="font-heading font-bold text-xl">INNOVATIVE & INNOVATORS</span>
            </div>
            <p className="text-white/60 text-sm mb-6 leading-relaxed">
              Manufacturing excellence since 1990. Your trusted partner for aerosol and gas products, delivering quality and safety across India.
            </p>
            <div className="flex gap-4">
              {/* Social Links */}
              <a 
                href="https://www.indiamart.com/innovative-innovators/profile.html?srsltid=AfmBOooS5ugvbhABFzI27MgI7fc2pEo9R2aB04qdHgcHFb9RW9EC2Dsk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-10 w-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#2e3192] transition-all cursor-pointer group"
                title="View on IndiaMart"
              >
                <ShoppingBag className="h-5 w-5 text-white group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="https://www.justdial.com/Chennai/Innovative-Innovators-PVT-LTD-Near-M-R-Hospital-Aminjikarai/044P7003771_BZDET" 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-10 w-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#ff9900] transition-all cursor-pointer group"
                title="View on JustDial"
              >
                <Globe className="h-5 w-5 text-white group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-heading font-bold mb-6 text-primary">Products</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">Room Fresheners</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Insect Repellents</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Gas Cartridges</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Industrial Sprays</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Private Label</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-lg font-heading font-bold mb-6 text-primary">Contact Us</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-accent shrink-0 mt-1" />
                  <div>
                    <p className="text-sm font-bold text-white">Head Office & Factory</p>
                    <p className="text-sm text-white/60">No. 13, Reddiyar Street, Sooramangalam, Pondicherry – 605106</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-accent shrink-0 mt-1" />
                  <div>
                    <p className="text-sm font-bold text-white">Chennai Branch</p>
                    <p className="text-sm text-white/60">B002, Metrozone, Anna Nagar, Chennai</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-accent shrink-0" />
                  <a href="mailto:info@innovative-innovators.com" className="text-sm text-white/70 hover:text-white">info@innovative-innovators.com</a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-accent shrink-0" />
                  <span className="text-sm text-white/70">+91 98765 43210</span>
                </div>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <p className="text-xs text-white/40">GST: 34AABCI0658L1ZJ</p>
                  <p className="text-xs text-white/40">IEC: 0494004941</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40">© 2025 Innovative & Innovators Pvt Ltd. All rights reserved.</p>
          <div className="flex gap-6 text-xs text-white/40">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
