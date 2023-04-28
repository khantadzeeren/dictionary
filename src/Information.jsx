import React, { useRef } from "react";
import PlayButton from "./assets/images/icon-play.svg";
import styles from "./Information.module.scss";
import { v4 as uuidv4 } from "uuid";
import newlink from "./assets/images/icon-new-window.svg";

export default function Info({
  font,
  setFont,
  data,
  showdata,
  errorOccurred,
  dark,
}) {
  const audioRef = useRef(null);
  console.log(data);
  const handlePlay = () => {
    const phoneticWithAudio = data[0].phonetics.find(
      (phonetic) => phonetic.audio
    );
    if (phoneticWithAudio) {
      audioRef.current.src = phoneticWithAudio.audio;
      audioRef.current.play();
    }
  };
  console.log(data);
  return showdata ? (
    <>
      {errorOccurred ? (
        <div
          className={`${styles.errorPage} ${dark ? styles.dark : null}`}
          style={{ fontFamily: `${font}` }}
        >
          <h1 className={styles.emoji}>😕</h1>
          <h2>No definitions Found</h2>
          <p>
            Sorry pal, we couldn't find definitions for the word you were
            looking for. You can try the search again at later time or head to
            the web instead.
          </p>
        </div>
      ) : (
        <>
          <audio ref={audioRef} />

          <main
            className={dark ? styles.dark : null}
            style={{ fontFamily: `${font}` }}
          >
            <section className={styles.keyword}>
              <div className={styles.keywordWrap}>
                <h1 className={styles.dataKeyword}>{data[0].word}</h1>
                <p className={styles.keywordPronunciation}>
                  {data[0].phonetic}
                </p>
              </div>
              <img src={PlayButton} onClick={handlePlay} />
            </section>

            {data &&
              data.length > 0 &&
              data[0].meanings &&
              data[0].meanings.length > 0 &&
              data[0].meanings.map(( meaning) => {
                const partOfSpeech = meaning.partOfSpeech;
                return (
                  <section key={uuidv4()} className={styles.partOfSpeech}>
                    <div className={styles[`partOfSpeechHeader`]}>
                      <h3 style={{ fontFamily: `${font}` }}>{partOfSpeech}</h3>
                      <hr />
                    </div>
                    <p className={styles.meaning}>Meaning</p>
                    <ul>
                      {meaning.definitions.map((definition) => {
                        return (
                          <li key={uuidv4()}>
                            <span></span>
                            {definition.definition}
                          </li>
                        );
                      })}
                    </ul>
                  </section>
                );
              })}

            <section className={styles.source}>
              <p>Source</p>
              <span>
                {data &&
                  data.length > 0 &&
                  data[0].sourceUrls &&
                  data[0].sourceUrls.length > 0 && (
                    <a href={data[0].sourceUrls[0]}>{data[0].sourceUrls[0]}</a>
                  )}
                <img src={newlink} />
              </span>
            </section>
          </main>
        </>
      )}
    </>
  ) : null;
}
