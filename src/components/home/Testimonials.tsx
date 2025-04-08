
const testimonials = [
  {
    quote: "Nephrotec has significantly improved our diagnostic accuracy. The system's ability to detect small tumors early has been invaluable for patient outcomes.",
    author: "Dr. Sarah Johnson",
    title: "Chief of Nephrology, Metro Hospital"
  },
  {
    quote: "The user interface is intuitive and the results are presented clearly. It has streamlined our workflow and improved our diagnostic confidence.",
    author: "Dr. Michael Chen",
    title: "Radiologist, Central Medical Center"
  },
  {
    quote: "As a urologist, I appreciate the detailed analysis Nephrotec provides. It helps me make better treatment decisions and explain findings to patients more effectively.",
    author: "Dr. Lisa Rodriguez",
    title: "Urologist, Regional Health Partners"
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="nephro-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">What Medical Professionals Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Trusted by leading healthcare providers and specialists in the field of nephrology.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-6 rounded-lg border border-gray-100 shadow-sm"
            >
              <div className="mb-4 text-nephro-primary">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="32" 
                  height="32" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                </svg>
              </div>
              <p className="text-gray-600 italic mb-6">{testimonial.quote}</p>
              <div>
                <p className="font-semibold text-nephro-primary">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
