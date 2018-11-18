import React from "react";
import "./searchForm.css";

const SearchForm = props => (
    <div>
    <h4>Article Search</h4>
    <form className="search">
        <div className="form-group">
            <label htmlFor="topic">Topic:</label>
            <input
              value={props.topic}
              onChange={props.handleInputChange}
              name="topic"
              className="form-control"
              placeholder="Topic"
              id="topic"
            />
            <label htmlFor="start">Start Date:</label>
            <input
              value={props.topic}
              onChange={props.handleInputChange}
              name="start"
              className="form-control"
              placeholder="YYYYMMDD"
              id="start"
            />
            <label htmlFor="end">End Date:</label>
            <input
              value={props.topic}
              onChange={props.handleInputChange}
              name="end"
              className="form-control"
              placeholder="YYYYMMDD"
              id="end"
            />
        </div>
        <button
          type="submit"
          onClick={props.handleFormSubmit}
          className="btn btn-success"
        >Search</button>
    </form>
 </div>
);

export default SearchForm;