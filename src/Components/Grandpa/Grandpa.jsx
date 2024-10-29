import Dad from "../Dad/Dad";
import Aunty from "../Aunty/Aunty";
import Uncle from "../Uncle/Uncle";
import "./Grandpa.css";
import { createContext, useState } from "react";

export const AssetContext = createContext("gold");
export const MoneyContext = createContext(1000);
const Grandpa = () => {
  const [money, setMoney] = useState(1000);
  const asset = "Diamond";
  return (
    <div className="grandpa ">
      <h2>Grandpa</h2>
      <p>Net Money:{money}</p>
      <section className="flex">
        <MoneyContext.Provider value={[money, setMoney]}>
          <AssetContext.Provider value="gold">
            <Dad asset={asset}></Dad>
            <Uncle asset={asset}></Uncle>
            <Aunty></Aunty>
          </AssetContext.Provider>
        </MoneyContext.Provider>
      </section>
    </div>
  );
};

export default Grandpa;
