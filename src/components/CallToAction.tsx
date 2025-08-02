import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary to-primary/80">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6 leading-tight">
          Ready to Transform Your Quoting Process?
        </h2>
        <p className="text-lg md:text-xl text-primary-foreground/90 mb-12 max-w-2xl mx-auto">
          Join businesses optimizing their workflows with Qotely. Start creating professional quotes in minutes.
        </p>
        
        <Button 
          size="lg" 
          className="bg-accent hover:bg-accent/90 text-accent-foreground px-12 py-6 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
        >
          Sign Up
        </Button>

        {/* Decorative elements */}
        <div className="mt-16 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 bg-secondary/20 rounded-full blur-3xl"></div>
          </div>
          <div className="relative flex justify-center space-x-8 opacity-30">
            <div className="w-2 h-2 bg-primary-foreground rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-primary-foreground rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="w-2 h-2 bg-primary-foreground rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;