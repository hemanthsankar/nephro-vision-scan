
import { Microscope, Heart, Circle, X } from "lucide-react";

const features = [
  {
    icon: <Microscope className="w-10 h-10 text-nephro-primary" />,
    title: "Advanced Imaging",
    description: "High-resolution imaging technology for detailed kidney scans and accurate tumor detection."
  },
  {
    icon: <Heart className="w-10 h-10 text-nephro-primary" />,
    title: "Patient-Centric",
    description: "Designed with patients in mind, providing clear results and minimizing anxiety."
  },
  {
    icon: <Circle className="w-10 h-10 text-nephro-primary" />,
    title: "Precision Detection",
    description: "AI algorithms precisely identify and classify kidney tumors with high accuracy."
  },
  {
    icon: <X className="w-10 h-10 text-nephro-primary" />,
    title: "Reduced False Positives",
    description: "Advanced filtering to minimize false positives and provide reliable results."
  }
];

const Features = () => {
  return (
    <section className="py-16 bg-white">
      <div className="nephro-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Why Choose Nephrotec</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our kidney tumor detection system combines cutting-edge technology with medical expertise to provide accurate, reliable results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="nephro-card p-6 flex flex-col items-center text-center"
            >
              <div className="mb-4 bg-nephro-light p-4 rounded-full">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
