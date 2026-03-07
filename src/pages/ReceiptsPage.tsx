import { Button } from "@/components/button";
import { useNavigate } from "react-router-dom";

const ReceiptsPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Button onClick={() => navigate("/")} />
    </div>
  );
};

export default ReceiptsPage;
