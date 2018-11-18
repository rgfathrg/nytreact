import React from "react";
import "./saveButton.css";

const Artlist = props => (
    <ul>
    {props.results.map(result => (
      <li className="list-group-item" key={result._id}>
        <h4>{result.headline.main}</h4>
        <a
          alt={result.headline.main}
          href={result.web_url}
        >Article Link</a>
        <button className="save-btn" {...props}>Save</button>
      </li>
    ))}
  </ul>
);

export default Artlist;