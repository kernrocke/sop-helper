import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const base = import.meta.env.BASE_URL;

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/manual", label: "ESAVI Manual" },
  { to: "/sop-overview", label: "SOPs" },
  { to: "/ai-assistant", label: "AI Assistant" },
  { to: "/faq", label: "FAQ" },
];

const SiteHeader = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="gov-header text-primary-foreground">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-4">
            <img src={`${base}images/moh_logo.png`} alt="Ministry of Health - Trinidad and Tobago" className="h-14 md:h-16 bg-card rounded p-1" />
            <div className="hidden sm:block">
              <p className="text-xs opacity-80 font-sans">Government of the Republic of Trinidad and Tobago</p>
              <h1 className="text-lg md:text-xl font-heading font-bold leading-tight">ESAVI Surveillance Hub</h1>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === link.to
                    ? "bg-primary-foreground/20 text-primary-foreground"
                    : "text-primary-foreground/80 hover:bg-primary-foreground/10 hover:text-primary-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2 rounded-md hover:bg-primary-foreground/10">
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {mobileOpen && (
          <nav className="md:hidden mt-4 pb-2 border-t border-primary-foreground/20 pt-4 flex flex-col gap-1">
            {navLinks.map(link => (
              <Link key={link.to} to={link.to} onClick={() => setMobileOpen(false)}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  location.pathname === link.to ? "bg-primary-foreground/20" : "hover:bg-primary-foreground/10"
                }`}>
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default SiteHeader;