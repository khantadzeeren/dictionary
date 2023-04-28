import React, { useState } from "react";
import searcIcon from "./assets/images/icon-search.svg";
import axios from "axios";
import styles from "./Inp.module.scss";

export default function Input({
  font,
  setFont,
  setData,
  setShowData,
  setErrorOccurred,
  dark,
}) {
  const [inputValue, setInputValue] = useState("");

  const handleButtonClick = async () => {
    try {
      const response = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${inputValue}`
      );
      setData(response.data);
      setErrorOccurred(false);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setErrorOccurred(true);
      }
    }
  };

  return (
    <div className={`${styles.searchContainer} ${dark ? styles.dark : null}`}>
      <input
        type="text"
        placeholder="Search for any word…"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <img
        onClick={() => {
          handleButtonClick();
          setShowData(true);
        }}
        src={searcIcon}
        alt="Search Icon"
        className={styles.searchIcon}
      />
    </div>
  );
}
