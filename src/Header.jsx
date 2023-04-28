import { React, useState } from "react";
import styles from "./Header.modules.scss";
import toggle from "./Switch.module.scss";
import logo from "./assets/images/logo.svg";
import arrow from "./assets/images/icon-arrow-down.svg";
import moon from "./assets/images/icon-moon.svg";

export default function Header({ font, setFont, setDark, dark }) {
  const [fontList, setFontList] = useState(false);

  return (
    <header
      style={{ fontFamily: `${font}` }}
      className={dark ? styles.dark : ""}
    >
      <img src={logo} alt="logoBook" className={styles.logo} />
      <section className={styles.rightSide}>
        <div
          onClick={() => setFontList(!fontList)}
          className={styles.fontSelect}
        >
          {font === "Inter" ? (
            <p>Sans Serif</p>
          ) : font === "Lora" ? (
            <p>Serif</p>
          ) : font === "Inconsolata" ? (
            <p>Mono</p>
          ) : (
            "Sans Serif"
          )}
          <img src={arrow} alt="arrowDown" />
          {fontList && (
            <div className={styles.fontList}>
              <ul>
                <li
                  onClick={() => {
                    setFont("Inter");
                    setFontList(false);
                  }}
                >
                  Sans Serif
                </li>
                <li
                  onClick={() => {
                    setFont("Lora");
                    setFontList(false);
                  }}
                >
                  Serif
                </li>
                <li
                  onClick={() => {
                    setFont("Inconsolata");
                    setFontList(false);
                  }}
                >
                  Mono
                </li>
              </ul>
            </div>
          )}
        </div>

        <div className={styles.darkMode}>
          <label className={toggle.switch}>
            <input type="checkbox" />
            <span
              onClick={() => setDark(!dark)}
              className={`${toggle.slider} ${toggle.round}`}
            ></span>
          </label>

          <img src={moon} alt="moon" />
        </div>
      </section>
    </header>
  );
}
