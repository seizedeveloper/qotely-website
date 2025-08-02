const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 bg-muted">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6">
            <img 
              src="/lovable-uploads/4f94f23a-fa13-40bb-a5d8-63ad153445d5.png" 
              alt="Qotely Logo" 
              className="h-12 w-auto"
            />
          </div>
          
          <p className="text-muted-foreground text-sm">
            © {currentYear} Qotely. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;