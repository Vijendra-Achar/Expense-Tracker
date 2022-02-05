import React, { useState } from "react";

const CreateNewExpenseForm = () => {
  const [title, setTitle] = useState("");

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  return (
    <div>
      <form>
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" onChange={titleChangeHandler} />
        </div>
      </form>
    </div>
  );
};
export default CreateNewExpenseForm;
