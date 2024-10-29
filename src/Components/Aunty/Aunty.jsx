import { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { MoneyContext } from "../Grandpa/Grandpa";
import "./aunty.css";

const Aunty = () => {
  const [money, setMoney] = useContext(MoneyContext);
  return (
    <div>
      <h2>Aunty</h2>
      <section className="flex">
        <Cousin name={"toha"}></Cousin>
        <Cousin name={"safi"}></Cousin>
      </section>
      <p>Money:{money}</p>
      <button className="btn" onClick={() => setMoney(money + 1000)}>
        Add 1000 tk
      </button>
    </div>
  );
};

export default Aunty;
