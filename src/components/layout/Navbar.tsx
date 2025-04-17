
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="nephro-container py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="/logo.png" 
              alt="Nephrotec Logo" 
              className="w-10 h-10 object-contain"
            />
            <span className="text-nephro-primary font-bold text-xl">Nephrotec</span>
            <span className="text-xs text-nephro-secondary bg-nephro-light px-2 py-1 rounded-full">Team 18</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-nephro-dark hover:text-nephro-primary transition-colors">Home</Link>
            <Link to="/scan" className="text-nephro-dark hover:text-nephro-primary transition-colors">Scan</Link>
            <Link to="/results" className="text-nephro-dark hover:text-nephro-primary transition-colors">Results</Link>
            <Link to="/about" className="text-nephro-dark hover:text-nephro-primary transition-colors">About</Link>
          </div>
          
          <Button className="nephro-btn-primary">Get Started</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
