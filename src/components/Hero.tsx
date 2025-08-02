import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20 pb-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-primary/5 -z-10"></div>
      
      <div className="max-w-6xl mx-auto text-center">
        {/* Logo */}
        <div className="mb-8">
          <img 
            src="/lovable-uploads/4f94f23a-fa13-40bb-a5d8-63ad153445d5.png" 
            alt="Qotely Logo" 
            className="h-20 w-auto mx-auto"
          />
        </div>

        {/* Main headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
          Simple, Fast,
          <span className="block text-primary">Modern Quotes</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          Effortlessly create and manage professional quotes, saving time and closing deals faster.
        </p>

        {/* CTA Button */}
        <Button 
          size="lg" 
          className="bg-accent hover:bg-accent/90 text-accent-foreground px-12 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
        >
          Sign Up
        </Button>

        {/* Hero visual element */}
        <div className="mt-16 relative">
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-border">
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-accent rounded-full"></div>
                  <div className="w-4 h-4 bg-secondary rounded-full"></div>
                  <div className="w-4 h-4 bg-primary rounded-full"></div>
                </div>
                <div className="space-y-3">
                  <div className="h-3 bg-muted rounded w-3/4"></div>
                  <div className="h-3 bg-muted rounded w-1/2"></div>
                  <div className="h-3 bg-muted rounded w-5/6"></div>
                </div>
                <div className="flex justify-between items-center mt-6">
                  <div className="space-y-2">
                    <div className="h-2 bg-secondary rounded w-20"></div>
                    <div className="h-2 bg-secondary rounded w-16"></div>
                  </div>
                  <div className="bg-primary text-primary-foreground px-4 py-2 rounded text-sm font-medium">
                    Generate Quote
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;