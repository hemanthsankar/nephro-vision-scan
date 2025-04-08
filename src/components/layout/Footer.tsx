
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-nephro-dark text-white py-8 mt-auto">
      <div className="nephro-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Nephrotec</h3>
            <p className="text-gray-300 text-sm">
              Advanced kidney tumor detection powered by AI technology. 
              Team 18's innovative solution for medical imaging and diagnostics.
            </p>
          </div>
          
          <div>
            <h4 className="text-white text-md font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white text-sm">Home</Link></li>
              <li><Link to="/scan" className="text-gray-300 hover:text-white text-sm">Scan</Link></li>
              <li><Link to="/results" className="text-gray-300 hover:text-white text-sm">Results</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white text-sm">About</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white text-md font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Documentation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Research Papers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Publications</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">API</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white text-md font-semibold mb-4">Contact</h4>
            <p className="text-gray-300 text-sm mb-2">Email: team18@nephrotec.com</p>
            <p className="text-gray-300 text-sm">Phone: +1 (123) 456-7890</p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2025 Nephrotec - Team 18. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
