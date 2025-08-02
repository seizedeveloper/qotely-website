import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ValueProposition from "@/components/ValueProposition";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />
      <Hero />
      <Features />
      <ValueProposition />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
