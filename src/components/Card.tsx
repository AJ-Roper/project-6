//In this file we define our card component
//Our card component will accept a data attribute.
//It will then return the html for the card component that includes the dynamic data.

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./card.css";
import Modal from "./modal";

// TODO: Update the function to accept a data prop - pass "data" inside of ()
function Card() {
  // TODO: Remove these states since we'll use the data prop instead
  const [dog, setDog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);

  // TODO: Remove this useEffect since we'll get data from props
  useEffect(() => {
    // Fetch random dog image when component mounts
    axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then((response) => {
        setDog(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching dog:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="card">
      {/* TODO: Replace this conditional rendering with direct use of data prop */}
      {loading ? (
        <h1 className="load-text">Finding Dog...</h1>
      ) : (
        <img src={dog?.message} alt="Random dog" className="random-dog" />
      )}
      {/* TODO: Replace static title with data.title */}
      <h5 className="card-title">Random Dog Found!</h5>
      {/* TODO: Replace static text with data.description */}
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
      {/* TODO: Pass data prop to Modal component */}
      {openModal && <Modal closeModal={setOpenModal} />}
    </div>
  );
}

export default Card;
