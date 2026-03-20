import { ReactNode, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, Menu, X } from "lucide-react";

interface SidebarItem {
  id: string;
  label: string;
}

interface SOPLayoutProps {
  title: string;
  version?: string;
  updateDate?: string;
  headerImage?: string;
  sidebarItems: SidebarItem[];
  children: ReactNode;
  backLink?: { to: string; label: string };
}

const SOPLayout = ({ title, version, updateDate, headerImage, sidebarItems, children, backLink }: SOPLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setSidebarOpen(false);
  };

  return (
    <div className="flex min-h-[calc(100vh-180px)]">
      {/* Mobile sidebar toggle */}
      <button onClick={() => setSidebarOpen(!sidebarOpen)} className="lg:hidden fixed bottom-4 right-4 z-50 bg-primary text-primary-foreground p-3 rounded-full shadow-lg">
        {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar */}
      <aside className={`${sidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 fixed lg:sticky top-0 left-0 z-40 w-72 h-screen overflow-y-auto bg-card border-r border-border p-4 transition-transform lg:transition-none`}>
        <div className="mb-4">
          {backLink && (
            <Link to={backLink.to} className="flex items-center gap-1 text-sm text-secondary hover:underline mb-3">
              <ChevronLeft size={16} /> {backLink.label}
            </Link>
          )}
          <Link to="/" className="flex items-center gap-1 text-sm text-muted-foreground hover:text-secondary mb-4">
            <ChevronLeft size={16} /> Home
          </Link>
        </div>
        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">Contents</h3>
        <nav className="sidebar-nav flex flex-col gap-0.5">
          {sidebarItems.map(item => (
            <a key={item.id} href={`#${item.id}`} onClick={(e) => { e.preventDefault(); scrollTo(item.id); }}>
              {item.label}
            </a>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8 max-w-4xl">
        <div className="flex items-center gap-4 mb-6">
          {headerImage && <img src={headerImage} alt="" className="w-16 h-16 object-cover rounded-lg" />}
          <div>
            <h1 className="text-2xl md:text-3xl font-heading font-bold text-foreground">{title}</h1>
            {(version || updateDate) && (
              <p className="text-sm text-muted-foreground mt-1">
                {version && `Version: ${version}`} {updateDate && `| Updated: ${updateDate}`}
              </p>
            )}
          </div>
        </div>
        <div className="space-y-6">{children}</div>
      </main>
    </div>
  );
};

export default SOPLayout;
