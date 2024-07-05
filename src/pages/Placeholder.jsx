import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Placeholder = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold">Placeholder Page</h1>
      <p className="text-lg mt-4">This is a placeholder page. Replace it with your content.</p>
      <Button className="mt-6" onClick={() => navigate("/")}>
        Back to Home
      </Button>
    </div>
  );
};

export default Placeholder;