import React from "react";

const Form = props => (
  <div>
    <form className="form-inline justify-content-center mb-3">
      <div className="form-group mx-sm-3 mb-3">
        <label for="inputPassword2" className="sr-only">
          Dont be a shy type your Options hear
        </label>
        <input
          type="password"
          className="form-control"
          id="inputPassword2"
          placeholder="Type your Options hear"
        />
      </div>
      <button type="submit" class="btn btn-primary mb-2">
        Add Options
      </button>
    </form>
  </div>
);

export default Form;
