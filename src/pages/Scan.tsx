
import MainLayout from "@/components/layout/MainLayout";
import ScanUploader from "@/components/scan/ScanUploader";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Scan = () => {
  return (
    <MainLayout>
      <div className="nephro-container py-12">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h1 className="text-3xl font-bold mb-4">Upload Kidney Scan</h1>
          <p className="text-gray-600">
            Upload your kidney scan images for AI-powered tumor detection and analysis. 
            Our system works with standard medical imaging formats.
          </p>
        </div>
        
        <ScanUploader />
        
        <div className="mt-12 bg-gray-50 p-6 rounded-lg max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold mb-3">Guidelines for Best Results</h3>
          <ul className="space-y-2 text-gray-600 mb-6">
            <li>• Use high-resolution kidney scans for more accurate detection</li>
            <li>• Ensure images are properly oriented and clearly show the entire kidney</li>
            <li>• DICOM format is preferred, but high-quality JPG/PNG is acceptable</li>
            <li>• Remove any personal identifiers from the images before uploading</li>
          </ul>
          
          <div className="flex justify-between">
            <Button variant="outline" asChild>
              <Link to="/">Back to Home</Link>
            </Button>
            <Button asChild className="bg-nephro-primary hover:bg-nephro-primary/90">
              <Link to="/results">View Previous Results</Link>
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Scan;
