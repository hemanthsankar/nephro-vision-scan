
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-nephro-light to-white py-16 md:py-24">
      <div className="nephro-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-nephro-dark mb-6">
              Advanced Kidney Tumor <span className="text-nephro-primary">Detection</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Nephrotec provides state-of-the-art AI-powered analysis of kidney scans to detect and classify tumors with high accuracy. Helping healthcare professionals make better decisions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-nephro-primary hover:bg-nephro-primary/90 text-white py-6 px-8 rounded-md font-medium text-lg">
                <Link to="/scan">Start Scanning</Link>
              </Button>
              <Button variant="outline" asChild className="border-nephro-primary text-nephro-primary hover:bg-nephro-light py-6 px-8 rounded-md font-medium text-lg">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-nephro-primary/5 rounded-xl -z-10"></div>
            <div className="relative bg-white p-4 rounded-lg shadow-lg">
              <img 
                src="/kidney-scan.jpg" 
                alt="Kidney Scan Visualization"
                className="w-full h-auto rounded"
              />
              <div className="absolute -bottom-4 -right-4 bg-nephro-primary text-white px-4 py-2 rounded-md shadow-md text-sm font-medium">
                AI-Powered Analysis
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
