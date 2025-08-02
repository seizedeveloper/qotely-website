import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/4f94f23a-fa13-40bb-a5d8-63ad153445d5.png" 
            alt="Qotely Logo" 
            className="h-10 w-auto"
          />
        </div>
        
        <Button 
          size="sm" 
          className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium px-6"
        >
          Sign Up
        </Button>
      </div>
    </header>
  );
};

export default Header;