import React from "react";

export default function ResourceForm(props) {
  return (
    <form className="form">
      <label>
        Author Name:
        <input type="text" name="authorName" />
      </label>
      <label>
        Author Name2:
        <input type="text" name="authorName" />
      </label>
      <button>Submit</button>
    </form>
  );
}
