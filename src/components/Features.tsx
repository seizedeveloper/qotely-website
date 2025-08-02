import { Clock, Zap, FileText } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Quick & Easy Interface",
      description: "Intuitive design for managing workflows and generating quotes in minutes."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Time Optimization",
      description: "Optimize your time and streamline the entire quoting process from creation to close."
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Professional Templates",
      description: "Access multiple white-label templates to create stunning, branded quotes."
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
            Why Businesses Choose Qotely
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Unlock efficiency with powerful features designed for modern businesses
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="text-primary mb-6 group-hover:text-secondary transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;