
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <MainLayout>
      <div className="nephro-container py-12">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h1 className="text-3xl font-bold mb-4">About Nephrotec</h1>
          <p className="text-gray-600">
            Pioneering AI-powered kidney tumor detection technology to improve patient outcomes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-nephro-primary">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              At Nephrotec, we're dedicated to revolutionizing kidney tumor diagnostics through 
              advanced artificial intelligence. Our mission is to provide healthcare professionals 
              with accurate, timely detection tools that improve patient outcomes and reduce 
              diagnostic uncertainty.
            </p>
            <p className="text-gray-600">
              Founded by a team of medical imaging experts and AI specialists, Nephrotec 
              combines cutting-edge technology with medical expertise to create solutions 
              that are both innovative and clinically relevant.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-nephro-primary/5 rounded-xl -z-10"></div>
            <img 
              src="/placeholder.svg" 
              alt="Medical team" 
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
        
        <div className="bg-gray-50 p-8 rounded-lg mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Team 18 Leadership</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-200 w-32 h-32 rounded-full mx-auto mb-4"></div>
                <h3 className="font-semibold text-nephro-primary">Dr. Jane Smith</h3>
                <p className="text-sm text-gray-500">Chief Medical Officer</p>
                <p className="text-sm mt-2">
                  Nephrology specialist with 15+ years of experience in kidney disease diagnostics.
                </p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Our Technology</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="nephro-card p-6">
              <h3 className="font-semibold text-xl mb-3 text-nephro-primary">Advanced AI Models</h3>
              <p className="text-gray-600">
                Our deep learning models have been trained on thousands of kidney images to 
                accurately detect and classify various types of kidney tumors.
              </p>
            </div>
            
            <div className="nephro-card p-6">
              <h3 className="font-semibold text-xl mb-3 text-nephro-primary">Clinical Validation</h3>
              <p className="text-gray-600">
                All our algorithms undergo rigorous clinical validation in partnership with 
                leading healthcare institutions to ensure reliability and accuracy.
              </p>
            </div>
            
            <div className="nephro-card p-6">
              <h3 className="font-semibold text-xl mb-3 text-nephro-primary">Continuous Learning</h3>
              <p className="text-gray-600">
                Our systems continually improve through ongoing feedback from medical 
                professionals and new research findings in the field of nephrology.
              </p>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">Ready to Experience Nephrotec?</h2>
          <Button asChild className="bg-nephro-primary hover:bg-nephro-primary/90 px-8 py-6 text-lg">
            <Link to="/scan">Start Using Nephrotec</Link>
          </Button>
        </div>
      </div>
    </MainLayout>
  );
};

export default About;
