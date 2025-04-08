
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Plus, X } from "lucide-react";

const ScanUploader = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
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
    
    // Simulate upload process
    setTimeout(() => {
      toast({
        title: "Upload successful",
        description: "Your scan has been uploaded and is ready for analysis",
        variant: "default"
      });
      setIsUploading(false);
    }, 2000);
  };

  const clearSelection = () => {
    setSelectedFile(null);
    setPreview(null);
  };

  return (
    <Card className="w-full max-w-3xl mx-auto">
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
              <Button 
                className="bg-nephro-primary hover:bg-nephro-primary/90"
                onClick={handleUpload}
                disabled={isUploading}
              >
                {isUploading ? "Uploading..." : "Analyze Scan"}
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ScanUploader;
