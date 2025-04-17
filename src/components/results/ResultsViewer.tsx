
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Circle, Heart, HeartCrack } from "lucide-react";
import { useState, useEffect } from "react";

// Function to generate random analysis results
const generateRandomResults = () => {
  // Random determination if tumor is detected (70% chance of tumor, 30% chance of no tumor)
  const tumorDetected = Math.random() > 0.3;
  
  return {
    patientId: "PT-" + Math.floor(10000 + Math.random() * 90000),
    scanDate: new Date().toISOString().split('T')[0],
    tumorDetected,
    confidence: Math.floor(85 + Math.random() * 10),
    tumorType: tumorDetected ? "Renal Cell Carcinoma" : "N/A",
    tumorSize: tumorDetected ? `${(1 + Math.random() * 3).toFixed(1)} cm` : "N/A",
    location: tumorDetected ? "Right kidney, lower pole" : "N/A",
    recommendations: tumorDetected ? [
      "Further evaluation with contrast-enhanced MRI",
      "Consultation with urologic oncologist",
      "Consider biopsy for histological confirmation"
    ] : [
      "Regular follow-up in 12 months",
      "Maintain healthy kidney function with proper hydration",
      "Continue monitoring any symptoms"
    ]
  };
};

const ResultsViewer = () => {
  const [results, setResults] = useState(generateRandomResults());

  useEffect(() => {
    // Generate random results when component mounts
    setResults(generateRandomResults());
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/2">
              <div className="relative bg-gray-100 rounded-lg overflow-hidden h-72 md:h-96">
                <img 
                  src="/kidney-scan-result.jpg" 
                  alt="Kidney scan with detection overlay"
                  className="w-full h-full object-cover"
                />
                {results.tumorDetected && (
                  <div 
                    className="absolute top-1/3 left-1/2 h-12 w-12 transform -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-red-500 animate-pulse-gentle"
                    style={{ backgroundColor: 'rgba(239, 68, 68, 0.3)' }}
                  ></div>
                )}
              </div>
              
              <div className="mt-4 flex justify-between">
                <Button variant="outline" size="sm">
                  Zoom In
                </Button>
                <Button variant="outline" size="sm">
                  Toggle Overlay
                </Button>
                <Button variant="outline" size="sm">
                  Download
                </Button>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <Tabs defaultValue="summary">
                <TabsList className="grid w-full grid-cols-3 mb-6">
                  <TabsTrigger value="summary">Summary</TabsTrigger>
                  <TabsTrigger value="details">Details</TabsTrigger>
                  <TabsTrigger value="recommendations">Next Steps</TabsTrigger>
                </TabsList>
                
                <TabsContent value="summary" className="space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={results.tumorDetected ? "bg-red-100 p-2 rounded-full" : "bg-green-100 p-2 rounded-full"}>
                      {results.tumorDetected ? (
                        <HeartCrack className="h-6 w-6 text-red-500" />
                      ) : (
                        <Heart className="h-6 w-6 text-green-500" />
                      )}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">
                        {results.tumorDetected 
                          ? "Tumor Detected" 
                          : "No Tumor Detected"}
                      </h3>
                      <p className="text-sm text-gray-500">
                        Confidence: {results.confidence}%
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-3 rounded-md">
                      <p className="text-sm text-gray-500">Patient ID</p>
                      <p className="font-medium">{results.patientId}</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-md">
                      <p className="text-sm text-gray-500">Scan Date</p>
                      <p className="font-medium">{results.scanDate}</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-md">
                      <p className="text-sm text-gray-500">Tumor Type</p>
                      <p className="font-medium">{results.tumorType}</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-md">
                      <p className="text-sm text-gray-500">Size</p>
                      <p className="font-medium">{results.tumorSize}</p>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 p-4 rounded-md border-l-4 border-yellow-400">
                    <p className="text-sm font-medium text-yellow-800">
                      This is an AI-generated analysis and should be confirmed by a medical professional.
                    </p>
                  </div>
                </TabsContent>
                
                <TabsContent value="details">
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">Location</h4>
                      <p className="font-medium">{results.location}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">Characteristics</h4>
                      <ul className="list-disc pl-5 space-y-1 mt-2">
                        {results.tumorDetected ? (
                          <>
                            <li>Well-defined margins</li>
                            <li>Heterogeneous enhancement</li>
                            <li>No evidence of local invasion</li>
                            <li>No lymph node involvement detected</li>
                          </>
                        ) : (
                          <>
                            <li>Normal kidney tissue appearance</li>
                            <li>No suspicious masses or lesions</li>
                            <li>Normal cortical thickness</li>
                            <li>No hydronephrosis or stones detected</li>
                          </>
                        )}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">Detection Method</h4>
                      <p className="mt-1">
                        Convolutional neural network with 97.2% sensitivity and 94.1% specificity on validation datasets.
                      </p>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="recommendations">
                  <div className="space-y-4">
                    <h4 className="font-medium">Recommended Next Steps</h4>
                    <ul className="space-y-3">
                      {results.recommendations.map((rec, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Circle className="h-5 w-5 text-nephro-primary shrink-0 mt-0.5" />
                          <span>{rec}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-6">
                      <Button className="bg-nephro-primary hover:bg-nephro-primary/90 w-full">
                        Send Results to Doctor
                      </Button>
                      <Button variant="outline" className="w-full mt-2">
                        Download Full Report (PDF)
                      </Button>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResultsViewer;
