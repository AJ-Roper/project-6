import React, { useEffect, useState } from "react";
import axios from "axios";
import "./card.css";
import Modal from "./modal";

function Card() {
  const [dog, setDog] = useState(null);

  const [loading, setLoading] = useState(true);

  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    fetchDog();
  }, []);

  async function fetchDog() {
    try {
      setLoading(true);

      const { data } = await axios.get(
        "https://dog.ceo/api/breeds/image/random"
      );

      setDog(data);
    } catch (error) {
      console.error("Error fetching dog:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="card">
      {loading ? (
        <h1 className="load-text">Finding Dog...</h1>
      ) : (
        <img src={dog?.message} alt="Random dog" className="random-dog" />
      )}
      <h5 className="card-title">Random Dog Found!</h5>
      <p className="card-text">
        Need dog facts to impress your friends? We got that...
      </p>
      <button
        className="dog-btn"
        onClick={() => {
          setOpenModal(true);
        }}
      >
        Learn More
      </button>
      {openModal && <Modal closeModal={setOpenModal} />}
    </div>
  );
}

export default Card;
