
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const UIRAD = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100">
      <h1 className="text-4xl font-bold mb-6">UIRAD</h1>
      <p className="text-xl text-gray-600 mb-8">Coming Soon</p>
      <Button asChild>
        <Link to="/">Return to Home</Link>
      </Button>
    </div>
  );
};

export default UIRAD;
