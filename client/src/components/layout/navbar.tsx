import { Link } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@assets/logo.png";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Process", href: "#process" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b shadow-sm border-border bg-white/95 backdrop-blur-md"
      )}
    >
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <img 
            src={logo} 
            alt="Innovative & Innovators - Aerosol Manufacturing" 
            className="h-16 w-auto object-contain" 
          />
          <span className={cn("font-heading font-bold text-sm leading-none tracking-tight")}>
            <span className="text-primary">INNOVATIVE</span>
            <span className="text-green-600 mx-1">&</span>
            <span className="text-primary">INNOVATORS PVT LTD</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium uppercase tracking-wide transition-colors hover:text-accent text-foreground"
              )}
              aria-label={`Navigate to ${link.name}`}
            >
              {link.name}
            </a>
          ))}
          <Button 
            className={cn(
              "font-heading tracking-wider bg-primary text-white hover:bg-primary/90"
            )}
            size="sm"
          >
            Get Quote
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <X className={cn("h-6 w-6 text-foreground")} />
          ) : (
            <Menu className={cn("h-6 w-6 text-foreground")} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-background border-b border-border shadow-lg p-4 flex flex-col gap-4 animate-in slide-in-from-top-5" role="navigation" aria-label="Mobile menu">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-foreground font-heading text-lg py-2 border-b border-border/50 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
              aria-label={`Navigate to ${link.name}`}
            >
              {link.name}
            </a>
          ))}
          <Button className="w-full mt-2">Request Quote</Button>
        </div>
      )}
    </nav>
  );
}
