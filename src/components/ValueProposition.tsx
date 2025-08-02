const ValueProposition = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 leading-tight">
              Experience Simplicity and Speed
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Qotely's clean UX is designed for ultimate speed and simplicity, ensuring a seamless experience for your team. 
              Our intuitive interface eliminates complexity, letting you focus on what matters most - closing deals.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-secondary rounded-full"></div>
                <span className="text-foreground font-medium">Streamlined workflow</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-secondary rounded-full"></div>
                <span className="text-foreground font-medium">Minimal learning curve</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-secondary rounded-full"></div>
                <span className="text-foreground font-medium">Maximum efficiency</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-primary to-secondary rounded-3xl p-1">
              <div className="bg-white rounded-3xl p-8">
                <div className="space-y-6">
                  {/* Interface mockup */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                        <div className="w-4 h-4 bg-white rounded"></div>
                      </div>
                      <div>
                        <div className="h-3 bg-foreground rounded w-20 mb-1"></div>
                        <div className="h-2 bg-muted-foreground rounded w-16"></div>
                      </div>
                    </div>
                    <div className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-medium">
                      Active
                    </div>
                  </div>

                  <div className="border-t border-muted pt-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="h-2 bg-secondary rounded w-full"></div>
                        <div className="h-2 bg-muted rounded w-3/4"></div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-2 bg-secondary rounded w-full"></div>
                        <div className="h-2 bg-muted rounded w-2/3"></div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-muted rounded-xl p-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <div className="h-2 bg-foreground rounded w-24"></div>
                        <div className="h-1 bg-muted-foreground rounded w-16"></div>
                      </div>
                      <div className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium">
                        Create Quote
                      </div>
                    </div>
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

export default ValueProposition;