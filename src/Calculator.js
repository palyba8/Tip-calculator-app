function Calculator(props) {
  return (
    <div className="container">
      <section className="input-section">
        <h2 className="section-title">Bill</h2>
        <div className="bill-input">
          <input
            className="input"
            id="bill"
            type="number"
            step=".01"
            min="0"
            onChange={props.handelClick}
          />
          <span className="error-text"></span>
        </div>
        <h2 className="section-title">Select Tip %</h2>
        <div className="grid-container">
          <button className="btn" value="5" onClick={props.handelClick}>
            5%
          </button>
          <button className="btn" value="10" onClick={props.handelClick}>
            10%
          </button>
          <button className="btn" value="15" onClick={props.handelClick}>
            15%
          </button>
          <button className="btn" value="25" onClick={props.handelClick}>
            25%
          </button>
          <button className="btn" value="50" onClick={props.handelClick}>
            50%
          </button>
          <div className="btn" value="">
            <input
              className="input-btn"
              type="number"
              id="discount"
              step=".01"
              placeholder="custom"
              onChange={props.handelClick}
              min="0"
            />
            <span className="error-text"></span>
          </div>
        </div>
        <h2 className="section-title">Number of People</h2>
        <div className="person-amout-input">
          <span className="error-text"></span>
          <input
            className="input"
            type="number"
            id="peopleAmount"
            min="1"
            onChange={props.handelClick}
          />
          <span className="error-text"></span>
        </div>
      </section>

      <section className="output-section">
        <div className="results">
          <div className="result-section">
            <h2 className="output-title">
              Tip Amount <p className="output-title-person">/ person</p>
            </h2>
            <p id="tipAmount" className="output-result">$0.00</p>
          </div>
          <div className="result-section">
            <h2 className="output-title">
              Total <p className="output-title-person">/ person</p>
            </h2>
            <p id="totalAmount" className="output-result">$0.00</p>
          </div>
        </div>
        <div className="reset-btn deactivated" onClick={props.resetValues}>Reset</div>
      </section>
    </div>
  )
}

export default Calculator
