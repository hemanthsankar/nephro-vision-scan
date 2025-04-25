
import { AlertCircle, BellRing } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

const ScanNotifications = () => {
  return (
    <div className="space-y-4 max-w-3xl mx-auto mb-8">
      <Alert variant="default" className="bg-nephro-light border-nephro-primary/20">
        <BellRing className="h-5 w-5 text-nephro-primary" />
        <AlertTitle className="text-nephro-primary">Scan Processing Guidelines</AlertTitle>
        <AlertDescription className="text-gray-600">
          Your scan will be processed using our advanced AI algorithms. The analysis typically takes 
          15-30 seconds to complete. Please ensure your image meets the quality requirements.
        </AlertDescription>
      </Alert>
      
      <Alert className="border-yellow-200 bg-yellow-50">
        <AlertCircle className="h-5 w-5 text-yellow-600" />
        <AlertTitle className="text-yellow-800">Important Notice</AlertTitle>
        <AlertDescription className="text-yellow-700">
          AI-assisted analysis is meant to support, not replace, professional medical diagnosis. 
          Always consult with healthcare professionals for medical decisions.
        </AlertDescription>
      </Alert>
    </div>
  )
}

export default ScanNotifications
