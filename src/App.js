import React from "react";
import Calculator from "./Calculator";

function App() {
  const [inputData, setInputData] = React.useState({
    bill: "",
    discount: 0,
    peopleAmount: "",
  });

  //calculating tip and total amounts for a person and showing results
  React.useEffect(() => {
    if (inputData.bill > 0 && inputData.peopleAmount > 0) {
      const resetBtn = document.querySelector(".reset-btn");
      resetBtn.classList.remove("deactivated");
      const tipAmount =
        (inputData.bill * inputData.discount) / 100 / inputData.peopleAmount;
      const totalAmount = inputData.bill / inputData.peopleAmount + tipAmount;
      document.getElementById("tipAmount").innerText =
        "$" + tipAmount.toFixed(2);
      document.getElementById("totalAmount").innerText =
        "$" + totalAmount.toFixed(2);
    }
  }, [inputData]);

  // function hadleling input values: cheking for valid and storing to inputData
  function handelClick(event) {
    const element = event.target;
    if (element.nodeName === "INPUT") {
      if (
        isNaN(element.valueAsNumber) ||
        (element.valueAsNumber <= 0 && element.id === "peopleAmount")
      ) {
        showError(element, element.valueAsNumber);
      } else {
        element.classList.contains("show-error") && hideError(element);
        setInputData((prevInputData) => {
          if (element.id === "bill") {
            return { ...prevInputData, bill: element.valueAsNumber };
          } else if (element.id === "discount") {
            return { ...prevInputData, discount: element.valueAsNumber };
          } else if (element.id === "peopleAmount") {
            return { ...prevInputData, peopleAmount: element.valueAsNumber };
          }
        });
      }
      if (element.id === "discount") {
        document.querySelectorAll(".btn").forEach((element) => {
          element.classList.contains("active") &&
            element.classList.remove("active");
        });
      }
    } else {
      document.querySelectorAll(".btn").forEach((element) => {
        element.classList.contains("active") &&
          element.classList.remove("active");
      });
      element.classList.add("active");
      setInputData((prevInputData) => {
        return { ...prevInputData, discount: element.value };
      });
    }
  }

  function hideError(element) {
    element.classList.remove("show-error");
    element.nextElementSibling.innerText = "";
  }

  function showError(element, value) {
    console.log("error", value);
    element.classList.add("show-error");
    if (value === 0) {
      element.nextElementSibling.innerText = "Can't be zero";
    } else {
      element.nextElementSibling.innerText = "Not valid";
    }
  }
  // function for resetting all inputs, results and inputData
  function resetValues() {
    const resetBtn = document.querySelector(".reset-btn");
    if (!resetBtn.classList.contains("deactivated")) {
      resetBtn.classList.add("deactivated");
      document.getElementById("tipAmount").innerText = "$0.00";
      document.getElementById("totalAmount").innerText = "$0.00";
      document.getElementById("bill").value = "";
      document.getElementById("discount").value = "";
      document.getElementById("peopleAmount").value = "";
      setInputData({ bill: "", discount: "", peopleAmount: "" });
    }
  }

  return (
    <div className="flex-container">
      <img className="logo" src="./images/logo.svg" alt="logo" />
      <Calculator
        handelClick={(event) => handelClick(event)}
        resetValues={resetValues}
      />
    </div>
  );
}

export default App;
