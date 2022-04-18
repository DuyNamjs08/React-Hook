import React from "react";

const AddToDolist = (props) => {
  const { todo, setHome, password, setpassword, handleOnclick } = props;
  return (
    <div>
      <input
        type="text"
        placeholder="title"
        value={todo}
        onChange={(event) => setHome(event.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="salary"
        value={password}
        onChange={(event) => setpassword(event.target.value)}
      />
      <br />
      <button onClick={handleOnclick}>submit</button>
    </div>
  );
};

export default AddToDolist;
