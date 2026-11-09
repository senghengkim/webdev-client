"use client";

import { useState } from "react";
import { useTodosContext } from "./todosContext";

export default function ReactContextTodoList() {
  const { todos, addTodo, updateTodo, deleteTodo } = useTodosContext();
  const [title, setTitle] = useState("");
  return (
    <div id="wd-react-context-todo-list">
      <h3>Todo List (React Context)</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const trimmedTitle = title.trim();
          if (!trimmedTitle) return;
          addTodo(trimmedTitle);
          setTitle("");
        }}
        className="mb-3 flex max-w-md gap-2"
      >
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          aria-label="New todo title"
          className="min-w-0 flex-1 rounded border border-neutral-300 px-3 py-1.5"
        />
        <button
          type="submit"
          id="wd-context-add-todo"
          className="rounded bg-green-600 px-3 py-1.5 text-sm font-medium text-white"
        >
          Add
        </button>
      </form>
      <ul className="m-0 max-w-md list-none p-0">
        {todos.map((todo, index) => (
          <li key={todo.id} className="mb-2 flex items-center gap-2">
            <input
              value={todo.title}
              onChange={(e) => updateTodo(todo.id, e.target.value)}
              aria-label={`Todo ${index + 1} title`}
              id={`wd-context-todo-${index}`}
              className="min-w-0 flex-1 rounded border border-neutral-300 px-3 py-1.5"
            />
            <button
              type="button"
              onClick={() => deleteTodo(todo.id)}
              id={`wd-context-delete-todo-${index}`}
              className="rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
}
