
import MainLayout from "@/components/layout/MainLayout";
import ResultsViewer from "@/components/results/ResultsViewer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Results = () => {
  return (
    <MainLayout>
      <div className="nephro-container py-12">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h1 className="text-3xl font-bold mb-4">Scan Results</h1>
          <p className="text-gray-600">
            Review the AI-powered analysis of your kidney scan. 
            The system identifies potential tumors and provides detailed information.
          </p>
        </div>
        
        <ResultsViewer />
        
        <div className="flex justify-center mt-10 gap-4">
          <Button variant="outline" asChild>
            <Link to="/scan">Upload New Scan</Link>
          </Button>
          <Button className="bg-nephro-primary hover:bg-nephro-primary/90">
            Consult with Specialist
          </Button>
        </div>
      </div>
    </MainLayout>
  );
};

export default Results;
