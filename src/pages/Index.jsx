import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold">Welcome to Your New App</h1>
      <p className="text-lg mt-4">Start building your application by editing this page.</p>
      <Button className="mt-6" onClick={() => navigate("/placeholder")}>
        Get Started
      </Button>
    </div>
  );
};

export default Index;