import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import "./modal.css";

function Modal({ closeModal }) {
  const [fact, setFact] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFact();
  }, []);

  async function fetchFact() {
    try {
      setLoading(true);

      const { data } = await axios.get("https://dogapi.dog/api/v2/facts");

      setFact(data.data[0].attributes.body);
    } catch (error) {
      console.error("Error fetching Fact:", error);
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button onClick={() => closeModal(false)}> X </button>
        </div>
        <div className="title">
          <h1>Did you know...</h1>
        </div>
        <div className="body">
          <p>{fact}</p>
        </div>
        <div className="footer">
          <button onClick={() => closeModal(false)} className="footerBtn">
            Cool!
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
