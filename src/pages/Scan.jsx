import { Scanner } from "@yudiel/react-qr-scanner";
import { useNavigate } from "react-router-dom";

const Scan = () => {
  const navigate = useNavigate();

  const onScan = (result) => {
    navigate(`/tickets/${result[0].rawValue}`);
  };

  return (
    <div className="pageContainer">
      <header>
        <p className="pageHeader">Scan Ticket</p>
      </header>

      <main>
        <div className="scanner">
          <Scanner onScan={(result) => onScan(result)} />
        </div>
      </main>
    </div>
  );
};
export default Scan;
