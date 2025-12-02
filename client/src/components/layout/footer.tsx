import { MapPin, Phone, Mail, ShoppingBag, Globe, Instagram, Linkedin } from "lucide-react";
import logo from "@assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-foreground text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Innovative & Innovators Logo" className="h-12 w-auto rounded bg-white p-1" />
              <span className="font-heading font-bold text-xl leading-tight">INNOVATIVE &<br/>INNOVATORS</span>
            </div>
            <p className="text-white/70 text-sm mb-6 leading-relaxed">
              Your trusted manufacturing partner for high-quality aerosol and gas products since 1990. Serving households and industries across India with excellence and safety.
            </p>
            <div className="flex gap-4">
              {/* Social Links */}
              <a 
                href="https://www.instagram.com/innoandinno?utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-10 w-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#E4405F] transition-all cursor-pointer group"
                title="Follow on Instagram"
              >
                <Instagram className="h-5 w-5 text-white group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="https://www.linkedin.com/in/bala-murugan-56a2402a7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-10 w-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#0A66C2] transition-all cursor-pointer group"
                title="Connect on LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-white group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="https://www.indiamart.com/innovative-innovators/profile.html?srsltid=AfmBOooS5ugvbhABFzI27MgI7fc2pEo9R2aB04qdHgcHFb9RW9EC2Dsk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-10 w-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#2e3192] transition-all cursor-pointer group"
                title="Verified Supplier on IndiaMart"
              >
                <ShoppingBag className="h-5 w-5 text-white group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="https://www.justdial.com/Chennai/Innovative-Innovators-PVT-LTD-Near-M-R-Hospital-Aminjikarai/044P7003771_BZDET" 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-10 w-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#ff9900] transition-all cursor-pointer group"
                title="Rated on JustDial"
              >
                <Globe className="h-5 w-5 text-white group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-heading font-bold mb-6 text-primary">Our Services</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li><a href="#products" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Aerosol Manufacturing</a></li>
              <li><a href="#products" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Private Label (OEM)</a></li>
              <li><a href="#products" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Bulk Ordering</a></li>
              <li><a href="#products" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Custom Formulations</a></li>
              <li><a href="#products" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Consultation & Support</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-lg font-heading font-bold mb-6 text-primary">Contact Information</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-accent shrink-0 mt-1" />
                  <div>
                    <p className="text-sm font-bold text-white">Head Office & Factory</p>
                    <p className="text-sm text-white/60 leading-relaxed">No. 13, Reddiyar Street, Sooramangalam, Pondicherry – 605106</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-accent shrink-0 mt-1" />
                  <div>
                    <p className="text-sm font-bold text-white">Chennai Branch</p>
                    <p className="text-sm text-white/60 leading-relaxed">No. 44, VR Mall, Jawaharlal Nehru Road, Anna Nagar West, Chennai, Tamil Nadu 600040</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-accent shrink-0" />
                  <a href="mailto:info@innovative-innovators.com" className="text-sm text-white/70 hover:text-white transition-colors">info@innovative-innovators.com</a>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-white/70"><strong>Sathya (Mgr):</strong> +91 98405 43541</p>
                    <p className="text-sm text-white/70"><strong>R Bala (GM):</strong> +91 92620 80311</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40">© 2025 Innovative & Innovators Pvt Ltd. All rights reserved.</p>
          <div className="flex gap-6 text-xs text-white/40">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
