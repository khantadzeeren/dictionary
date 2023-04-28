
import { useState } from "react";
import Header from "./Header.jsx";
import Input from "./Inp.jsx";
import Info from "./information.jsx";
import style from "./restart.module.scss";

function App() {
  const [font, setFont] = useState("inter");
  const [data, setData] = useState(" ");
  const [errorOccurred, setErrorOccurred] = useState(false);
  const [showdata, setShowData] = useState(false);
  const [dark, setDark] = useState(false);
  console.log(dark);

  return (
    <div className={`${style.mainWrapper} ${dark ? style.dark : ""}`}>
      <Header font={font} setFont={setFont} setDark={setDark} dark={dark} />
      <Input
        font={font}
        setFont={setFont}
        setData={setData}
        setShowData={setShowData}
        setErrorOccurred={setErrorOccurred}
        dark={dark}
      />
      <Info
        font={font}
        setFont={setFont}
        data={data}
        showdata={showdata}
        errorOccurred={errorOccurred}
        dark={dark}
      />
    </div>
  );
}

export default App;
