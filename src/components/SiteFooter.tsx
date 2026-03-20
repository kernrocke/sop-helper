const SiteFooter = () => (
  <footer className="bg-primary text-primary-foreground py-6 mt-auto">
    <div className="container mx-auto px-4 text-center text-sm opacity-80">
      <p>&copy; {new Date().getFullYear()} Government of the Republic of Trinidad and Tobago, Ministry of Health</p>
      <p className="mt-1">ESAVI Surveillance Information Hub</p>
    </div>
  </footer>
);

export default SiteFooter;
