
const steps = [
  {
    number: "01",
    title: "Upload Scan",
    description: "Upload kidney CT or MRI scans in standard DICOM or common image formats.",
    image: "/upload-scan.jpg"
  },
  {
    number: "02",
    title: "AI Processing",
    description: "Our advanced algorithms analyze the scans to detect anomalies and potential tumors.",
    image: "/ai-processing.jpg"
  },
  {
    number: "03",
    title: "Review Results",
    description: "Get detailed analysis with visual markers highlighting areas of concern.",
    image: "/review-results.jpg"
  },
  {
    number: "04",
    title: "Expert Confirmation",
    description: "Share results with medical professionals for confirmation and treatment planning.",
    image: "/expert-confirmation.jpg"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="nephro-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our streamlined process makes kidney tumor detection fast, accurate, and easy to understand.
          </p>
        </div>
        
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-nephro-light hidden md:block"></div>
          
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`flex flex-col md:flex-row ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} items-center gap-6`}
              >
                <div className="md:w-1/2 flex justify-center">
                  <div className="relative">
                    <div className="bg-white p-4 rounded-lg shadow-md w-64 h-64 flex items-center justify-center overflow-hidden">
                      <img 
                        src={step.image} 
                        alt={step.title} 
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute bottom-2 right-2 text-5xl font-bold text-white bg-nephro-primary/70 w-12 h-12 flex items-center justify-center rounded-full">
                        {step.number.slice(-1)}
                      </span>
                    </div>
                    <div className="absolute -z-10 inset-0 bg-nephro-primary/10 rounded-lg transform rotate-3"></div>
                  </div>
                </div>
                
                <div className="md:w-1/2 text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-3 text-nephro-primary">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
