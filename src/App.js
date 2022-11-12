import { useState } from "react";

function App() {
  /**
   * States for the current computation
   * and the overall output.
   */
  const [compute, setCompute] = useState("");
  const [outPut, setOutput] = useState("");

  /**
   * This code section prevents the user from inputting
   */

  const operations = ["/", "*", "+", "-", ".", "**"];

  const updateCompute = (amount) => {
    if (
      (operations.includes(amount) && compute === "") ||
      (operations.includes(amount) && operations.includes(compute.slice(-1)))
    ) {
      return;
    }
    /**
     * This code segment ouputs the current computation and adds to the previous
     * amount
     */
    setCompute(compute + amount);
    if (!operations.includes(amount)) {
      try {
        setOutput(eval(compute + amount).toString());
      } catch {
        setOutput("Use Proper Parenthesis Format");
      }
    }
  };
  /**
   * This code segmenet evaluates the new computation
   * and saves in the compute state as the current computation
   */

  const calculate = () => {
    setCompute(eval(compute).toString());
  };
  /**
   * This code deletes the previous element
   * in the computation. 
   */

  const deleteLast = () => {
    if (compute === "") {
      return;
    }
    const amount = compute.slice(0, -1);
    setCompute(amount);
  };
  /**
   * This code clears input in the calculator.
   */
  const clearInput = () => {
    if (compute === "") {
      return;
    }
    const amount = "";
    setCompute(amount);
    setOutput(amount);
  };

  /**
   * This code segemenet creates the display 
   * of the calculator and uses the previous methods
   * to create the functionality of the calculator. 
   */

  return (
    <div className="Wrapper">
      <div className="calculator">
        <div className="display">
          {outPut ? <span>({outPut})</span> : " "} {compute || "0"}
        </div>
        <div className="operators">
          <button onClick={() => updateCompute("/")}>/</button>
          <button onClick={() => updateCompute("*")}>*</button>
          <button onClick={() => updateCompute("+")}>+</button>
          <button onClick={() => updateCompute("-")}>-</button>
          <button onClick={() => updateCompute("**")}>**</button>
          <button onClick={() => updateCompute("(")}>(</button>
          <button onClick={() => updateCompute(")")}>)</button>
          <button onClick={deleteLast} className="buttons">
            DELETE
          </button>
          <button onClick={clearInput} className="buttons">
            CLS
          </button>
        </div>

        <div className="digits">
          <button onClick={() => updateCompute("9")}>9</button>
          <button onClick={() => updateCompute("8")}>8</button>
          <button onClick={() => updateCompute("7")}>7</button>
          <button onClick={() => updateCompute("6")}>6</button>
          <button onClick={() => updateCompute("5")}>5</button>
          <button onClick={() => updateCompute("4")}>4</button>
          <button onClick={() => updateCompute("3")}>3</button>
          <button onClick={() => updateCompute("2")}>2</button>
          <button onClick={() => updateCompute("1")}>1</button>
          <button onClick={() => updateCompute("0")}>0</button>
          <button onClick={() => updateCompute(".")}>.</button>
          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
