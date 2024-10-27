import { useRef, useState } from "react";
import "./App.css";

// TASK: Calculate tip
// FORMULA --> let total = (billAmt * serviceQual) / numOfPeople;
// Round to two decimal places
// total = Math.round(total * 100) / 100;
// Next line allows us to always have two digits after decimal point
// total = total.toFixed(2);
// Display the tip

function App() {

  const bill_amount = useRef(null);
  const service_quality = useRef(null);
  const number_of_people = useRef(null);

  const [totalTip, setTotalTip] = useState(0);
  const [totalTipPerPerson, setTotalTipPerPerson] = useState(0);

  const calculate = () => {
    const billAmt = parseFloat(bill_amount.current.value);
    const serviseQual = parseFloat(service_quality.current.value);
    const numOfPeople = parseFloat(number_of_people.current.value);

    if(
      isNaN(billAmt) || 
      isNaN(serviseQual) || 
      isNaN(numOfPeople) || 
      numOfPeople <= 0) {
        alert("Please enter validd values for all fields.")
        return;
    }
    let totalTip = billAmt * serviseQual;
    let totalTipPerPerson = (billAmt * serviseQual) / numOfPeople;

    totalTip = Math.round(totalTip * 100) / 100;
    totalTipPerPerson = Math.round(totalTipPerPerson * 100) / 100;

    setTotalTip(totalTip);
    setTotalTipPerPerson(totalTipPerPerson);
  }

  return (
    <div id="container">
      <h1>Tip Calculator</h1>
      <div id="calculator">
        <form>
          <p>How much was your bill?</p>
          $ <input id="billamt" type="text" placeholder="Bill Amount" ref={bill_amount} />
          <p>How was your service?</p>
          <select id="serviceQual" ref={service_quality} defaultValue="0">
            <option disabled value="0">
              -- Choose Tip Option --
            </option>
            <option value="0.3">30% - Outstanding</option>
            <option value="0.2">20% - Good</option>
            <option value="0.15">15% - It was OK</option>
            <option value="0.1">10% - Bad</option>
            <option value="0.05">5% - Terrible</option>
          </select>
        </form>
        <p>How many people are sharing the bill?</p>
        <input id="peopleamt" type="text" placeholder="Number of People" ref={number_of_people}/>{" "}
        <button type="button" id="calculate" onClick={calculate}>
          Calculate!
        </button>
      </div>
      <div className="totalTip">
        <span>Total Tip: </span>
        <sup>$</sup>
        <span className="tip">{totalTip.toFixed(2)}</span>
      </div>
      <div className="totalTip">
        <span>Total tip per person: </span>
        <sup>$</sup>
        <span className="tip">{totalTipPerPerson.toFixed(2)}</span>
        <small id="each">/person</small>
      </div>
    </div>
  );
}

export default App;