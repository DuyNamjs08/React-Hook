import React, { useState } from "react";
import DisplayTodo from "./DisplayTodo";
import _ from "lodash";
import AddToDolist from "./AddToDolist";

function Home() {
  const [todo, setHome] = useState("");
  const [password, setpassword] = useState("");

  const [Listtodo, setTodo] = useState([
    { id: 1, title: "php", salary: "1000" },
    { id: 2, title: "javscript", salary: "2000" },
    { id: 3, title: "node js", salary: "5000" },
  ]);
  const handleOnclick = () => {
    let addNew = [
      ...Listtodo,
      { id: Listtodo.length + 1, title: todo, salary: password },
    ];
    setTodo(addNew);
  };
  const handleDeleteTodo = (id) => {
    let currentTodo = _.clone(Listtodo);
    currentTodo = currentTodo.filter((item) => item.id !== id);

    setTodo(currentTodo);
  };

  return (
    <div className="container">
      <AddToDolist
        todo={todo}
        setHome={setHome}
        password={password}
        setpassword={setpassword}
        handleOnclick={handleOnclick}
      />

      {/* todo list */}

      <DisplayTodo Listtodo={Listtodo} handleDeleteTodo={handleDeleteTodo} />
    </div>
  );
}

export default Home;
