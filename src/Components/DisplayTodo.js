import React from "react";

function DisplayTodo(props) {
  const handleDeleteTodo = (id) => {
    props.handleDeleteTodo(id);
  };

  const Listtodo = props.Listtodo;
  return (
    <div>
      <>
        {Listtodo.map((item, index) => {
          return (
            <div key={item.id} onClick={() => handleDeleteTodo(item.id)}>
              {item.title} ---{item.salary}
            </div>
          );
        })}
      </>
    </div>
  );
}

export default DisplayTodo;
