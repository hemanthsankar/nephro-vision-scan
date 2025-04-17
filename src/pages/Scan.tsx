
import MainLayout from "@/components/layout/MainLayout";
import ScanUploader from "@/components/scan/ScanUploader";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Scan = () => {
  return (
    <MainLayout>
      <div className="nephro-container py-12">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h1 className="text-3xl font-bold mb-4">Upload & Analyze Kidney Scan</h1>
          <p className="text-gray-600">
            Upload your kidney scan images for instant AI-powered tumor detection and analysis. 
            Our system works with standard medical imaging formats.
          </p>
        </div>
        
        <ScanUploader />
        
        <div className="mt-12 bg-gray-50 p-6 rounded-lg max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold mb-3">Instructions for Best Results</h3>
          <ol className="space-y-2 text-gray-600 mb-6 list-decimal pl-5">
            <li>Use high-resolution kidney scans for more accurate detection</li>
            <li>Ensure images are properly oriented and clearly show the entire kidney</li>
            <li>DICOM format is preferred, but high-quality JPG/PNG is acceptable</li>
            <li>Remove any personal identifiers from the images before uploading</li>
            <li>Aim for images with a clear contrast between kidney tissue and surrounding structures</li>
            <li>Avoid scans with excessive noise, artifacts, or low image quality</li>
            <li>Provide multiple views or angles of the kidney if possible</li>
            <li>Ensure the scan is from a reputable medical imaging source</li>
            <li>Check that the image resolution is at least 300 DPI for detailed analysis</li>
            <li>Verify that the scan metadata is intact and readable</li>
          </ol>
          
          <Button variant="outline" asChild>
            <Link to="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    </MainLayout>
  );
};

export default Scan;

