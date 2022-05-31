function Calculator(props) {
  return (
    <div className="container">
      <section className="input-section">
        <label  htmlFor="bill" className="section-title">Bill</label>
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
        <label htmlFor="discount" className="section-title">Select Tip %</label>
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
          <div className="btn">
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
        <label htmlFor="peopleAmount" className="section-title">Number of People</label>
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
              Tip Amount <span className="output-title-person">/ person</span>
            </h2>
            <p id="tipAmount" className="output-result">$0.00</p>
          </div>
          <div className="result-section">
            <h2 className="output-title">
              Total <span className="output-title-person">/ person</span>
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
