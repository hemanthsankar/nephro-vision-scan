
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Plus, X } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Circle, Heart, HeartCrack } from "lucide-react";

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

const ScanUploader = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [analysisResults, setAnalysisResults] = useState(generateRandomResults());
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Check if file is an image
    if (!file.type.startsWith('image/')) {
      toast({
        title: "Invalid file type",
        description: "Please upload an image file (JPEG, PNG, etc.)",
        variant: "destructive"
      });
      return;
    }

    setSelectedFile(file);
    setShowResults(false);
    
    // Create preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleUpload = () => {
    if (!selectedFile) {
      toast({
        title: "No file selected",
        description: "Please select a kidney scan image to upload",
        variant: "destructive"
      });
      return;
    }

    setIsUploading(true);
    setAnalysisProgress(0);
    
    // Generate random results before showing them
    setAnalysisResults(generateRandomResults());
    
    // Simulate analysis process with progress
    const interval = setInterval(() => {
      setAnalysisProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          setShowResults(true);
          toast({
            title: "Analysis complete",
            description: "Your scan has been analyzed and results are ready",
            variant: "default"
          });
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const clearSelection = () => {
    setSelectedFile(null);
    setPreview(null);
    setShowResults(false);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Card className="w-full mb-8">
        <CardContent className="p-6">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-semibold mb-2">Upload Kidney Scan</h3>
            <p className="text-gray-500">
              Upload a high-quality image of a kidney scan for analysis
            </p>
          </div>

          {!preview ? (
            <div 
              className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:bg-gray-50 transition-colors"
              onClick={() => document.getElementById('file-upload')?.click()}
            >
              <input
                id="file-upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
              />
              <div className="flex flex-col items-center justify-center">
                <div className="bg-nephro-light p-4 rounded-full mb-4">
                  <Plus className="h-8 w-8 text-nephro-primary" />
                </div>
                <p className="text-lg font-medium mb-1">Click to upload or drag and drop</p>
                <p className="text-sm text-gray-500 mb-4">
                  Supports JPG, PNG, DICOM (converted)
                </p>
                <Button 
                  type="button"
                  className="bg-nephro-primary hover:bg-nephro-primary/90"
                  onClick={(e) => {
                    e.stopPropagation();
                    document.getElementById('file-upload')?.click();
                  }}
                >
                  Select File
                </Button>
              </div>
            </div>
          ) : (
            <div className="relative">
              <div className="absolute top-3 right-3 z-10">
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="rounded-full bg-white h-8 w-8" 
                  onClick={clearSelection}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <div className="mb-4">
                <img 
                  src={preview} 
                  alt="Selected kidney scan" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">{selectedFile?.name}</p>
                  <p className="text-sm text-gray-500">
                    {selectedFile ? `${(selectedFile.size / (1024 * 1024)).toFixed(2)} MB` : ""}
                  </p>
                </div>
                {isUploading ? (
                  <div className="w-full max-w-md">
                    <p className="text-sm text-gray-500 mb-1">Analyzing scan... {analysisProgress}%</p>
                    <Progress value={analysisProgress} className="h-2" />
                  </div>
                ) : (
                  <Button 
                    className="bg-nephro-primary hover:bg-nephro-primary/90"
                    onClick={handleUpload}
                    disabled={isUploading}
                  >
                    Analyze Scan
                  </Button>
                )}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {showResults && (
        <Card className="w-full animate-fade-in">
          <CardContent className="p-6">
            <h3 className="text-2xl font-semibold mb-6 text-center">Scan Results</h3>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/2">
                <div className="relative bg-gray-100 rounded-lg overflow-hidden h-72 md:h-80">
                  <img 
                    src={preview || "/placeholder.svg"} 
                    alt="Kidney scan with detection overlay"
                    className="w-full h-full object-cover"
                  />
                  {analysisResults.tumorDetected && (
                    <div 
                      className="absolute top-1/3 left-1/2 h-12 w-12 transform -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-red-500 animate-pulse"
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
                      <div className={analysisResults.tumorDetected ? "bg-red-100 p-2 rounded-full" : "bg-green-100 p-2 rounded-full"}>
                        {analysisResults.tumorDetected ? (
                          <HeartCrack className="h-6 w-6 text-red-500" />
                        ) : (
                          <Heart className="h-6 w-6 text-green-500" />
                        )}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">
                          {analysisResults.tumorDetected 
                            ? "Tumor Detected" 
                            : "No Tumor Detected"}
                        </h3>
                        <p className="text-sm text-gray-500">
                          Confidence: {analysisResults.confidence}%
                        </p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-3 rounded-md">
                        <p className="text-sm text-gray-500">Patient ID</p>
                        <p className="font-medium">{analysisResults.patientId}</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-md">
                        <p className="text-sm text-gray-500">Scan Date</p>
                        <p className="font-medium">{analysisResults.scanDate}</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-md">
                        <p className="text-sm text-gray-500">Tumor Type</p>
                        <p className="font-medium">{analysisResults.tumorType}</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-md">
                        <p className="text-sm text-gray-500">Size</p>
                        <p className="font-medium">{analysisResults.tumorSize}</p>
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
                        <p className="font-medium">{analysisResults.location}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Characteristics</h4>
                        <ul className="list-disc pl-5 space-y-1 mt-2">
                          {analysisResults.tumorDetected ? (
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
                        {analysisResults.recommendations.map((rec, index) => (
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
      )}
    </div>
  );
};

export default ScanUploader;
