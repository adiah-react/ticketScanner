import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Spinner from "../components/Spinner";

import { toast } from "react-toastify";
import { db } from "../firebase.config";

const Ticket = () => {
  const [ticket, setTicket] = useState(null);
  const [loading, setLoading] = useState(true);

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTicket = async () => {
      const docRef = doc(db, "tickets", params.ticketId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setTicket({
          id: params.ticketId,
          ...docSnap.data(),
        });
        setLoading(false);
      }
    };

    fetchTicket();
  }, [params.ticketId]);

  const onValidate = async () => {
    console.log("Ticket validated");
    const docRef = doc(db, "tickets", params.ticketId);
    try {
      await updateDoc(docRef, {
        status: "redeemed",
      });
      toast.success("Ticket Redeemed");
      navigate("/scan");
    } catch (error) {
      toast.error("Could not validate ticket");
      console.log(error);
    }
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="pageContainer">
      <header>
        <p className="pageHeader">Ticket Details</p>
      </header>
      <main>
        <div className="ticket-container">
          <div className="ticket-details">
            <h2>Christmas Concert</h2>
            <div className="row">
              <div className="ticket-info">
                <p className="label">Date</p>
                {/* <p className="data">{event.date}</p> */}
                <p className="data">07/12/2024</p>
              </div>
              <div className="ticket-info">
                <p className="label">Time</p>
                <p className="data time">9:00 AM</p>
              </div>
            </div>
            <div className="row">
              <div className="ticket-info">
                <p className="label">Status</p>
                <p className="data">{ticket.status}</p>
              </div>
              <div className="ticket-info">
                <p className="label">Name</p>
                <p className="data">{ticket.name}</p>
              </div>
            </div>
          </div>
          <div className="validateButton">
            <button className="validBtn formButton" onClick={onValidate}>
              Validate Ticket
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};
export default Ticket;
