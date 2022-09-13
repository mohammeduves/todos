const ToDo = ({ todo, handleToggle }) => {
  return (
    <div
      className={todo.complete ? "strike" : ""}
      onclick={() => handleToggle(todo.task)}
    >
      {todo.task}
    </div>
  );
};

export default ToDo;
