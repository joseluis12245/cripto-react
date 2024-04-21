import React from "react";

export default function CriptoSearchForm() {
  return (
    <form className="form">
      <div className="field">
        <label htmlFor="currenty">Currency</label>
        <select name="currency" id="currency">
          <option value="">-- Please Select --</option>
        </select>
      </div>

      <div className="field">
        <label htmlFor="criptocurrency">Crypto</label>
        <select name="criptocurrency" id="criptocurrency">
          <option value="">-- Please Select --</option>
        </select>
      </div>

      <input type='submit' value='Get value'/>

    </form>
  );
}