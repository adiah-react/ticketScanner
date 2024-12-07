import { Scanner } from "@yudiel/react-qr-scanner";
import { useState } from "react";

const Scan = () => {
  // const [loading, setLoading] = useState(false);
  // const [mode, setMode] = useState("default");
  const [ticketId, setTicketId] = useState(null);

  const onScan = (result) => {
    setTicketId(result.rawValue);
    console.log(ticketId);
  };

  // if (loading) {
  //   return <Spinner />;
  // }

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
