
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-16 bg-nephro-primary text-white">
      <div className="nephro-container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Enhance Your Kidney Tumor Diagnostics?
          </h2>
          <p className="text-xl mb-8 text-white/80">
            Join healthcare professionals worldwide who trust Nephrotec for accurate, efficient kidney tumor detection.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild className="bg-white text-nephro-primary hover:bg-nephro-light hover:text-nephro-primary py-6 px-8 rounded-md font-medium text-lg">
              <Link to="/scan">Start Scanning Now</Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white/10 py-6 px-8 rounded-md font-medium text-lg">
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
